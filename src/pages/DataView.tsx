import { useParams, useNavigate } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { useOrganizationContext } from "@/hooks/useOrganizationContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import { Progress } from "@/components/ui/progress";
import {
  ArrowLeft, Download, Send, FileText, Building2, Globe, CheckCircle2,
  XCircle, Scale, Clock, FileJson, Database, ExternalLink, ShieldCheck
} from "lucide-react";
import { toast } from "sonner";
import { CodeIntegrationModal } from "@/components/CodeIntegrationModal";
import { DataLineage } from "@/components/DataLineage";
import DataLineageBlockchain from "@/components/DataLineageBlockchain";
import { RevokeAccessButton } from "@/components/RevokeAccessButton";
import { generateLicensePDF } from "@/utils/pdfGenerator";
import { AccessHistoryTable } from "@/components/AccessHistoryTable";

// ODRL defaults
const DEFAULT_PERMISSIONS = [
  "Uso comercial dentro de la organización",
  "Análisis e integración en sistemas internos",
  "Generación de informes derivados",
];
const DEFAULT_PROHIBITIONS = [
  "Redistribución a terceros sin autorización",
  "Ingeniería inversa de datos individuales",
  "Uso para fines ilegales o discriminatorios",
];
const DEFAULT_OBLIGATIONS = [
  "Atribución al proveedor de datos",
  "Renovación de licencia según modelo de precio",
  "Cumplimiento GDPR para datos personales",
];

const DataView = () => {
  const { id } = useParams<{ id: string }>();
  const { user, signOut } = useAuth();
  const { activeOrg } = useOrganizationContext();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  // Expanded query: includes product schema/version/sample_data + asset custom_metadata
  const { data: transaction, isLoading: loadingTransaction } = useQuery({
    queryKey: ["transaction-detail", id, activeOrg?.id],
    queryFn: async () => {
      if (!activeOrg) throw new Error("No active organization");

      const { data, error } = await (supabase as any)
        .from("data_transactions")
        .select(`
          *,
          asset:data_assets (
            id,
            custom_metadata,
            sample_data,
            product:data_products (name, description, category, schema_definition, version)
          ),
          consumer_org:organizations!data_transactions_consumer_org_id_fkey (name, kyb_verified),
          subject_org:organizations!data_transactions_subject_org_id_fkey (name, kyb_verified),
          holder_org:organizations!data_transactions_holder_org_id_fkey (name, kyb_verified),
          policy:data_policies (odrl_policy_json)
        `)
        .eq("id", id)
        .single();

      if (error) throw error;

      const hasAccess =
        data.consumer_org_id === activeOrg.id ||
        data.subject_org_id === activeOrg.id ||
        data.holder_org_id === activeOrg.id;

      if (!hasAccess) {
        throw new Error("Access denied");
      }

      return data;
    },
    enabled: !!id && !!activeOrg,
  });

  // ERP configs for provider panel
  const { data: erpConfigs } = useQuery({
    queryKey: ["erp-configs"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("erp_configurations")
        .select("*")
        .eq("config_type", "upload")
        .eq("is_active", true);
      if (error) throw error;
      return data;
    },
    enabled: !!transaction && !!activeOrg && activeOrg.id !== transaction?.consumer_org_id,
  });

  const sendToERPMutation = useMutation({
    mutationFn: async (erpConfigId: string) => {
      const { data, error } = await supabase.functions.invoke("erp-data-uploader", {
        body: { transactionId: id, erpConfigId },
      });
      if (error) throw error;
      if (!data.success) throw new Error(data.message);
      return data;
    },
    onSuccess: () => {
      toast.success("Datos enviados a ERP exitosamente");
      queryClient.invalidateQueries({ queryKey: ["export-logs"] });
    },
    onError: (error: any) => {
      toast.error(error.message || "Error al enviar datos a ERP");
    },
  });

  // --- Handlers ---

  const handleGatewayDownload = async () => {
    if (!transaction) return;
    try {
      toast.info("Iniciando descarga segura...");
      const { data, error } = await supabase.functions.invoke("gateway-download", {
        body: {
          transaction_id: transaction.id,
          asset_id: transaction.asset_id,
          consumer_org_id: transaction.consumer_org_id,
        },
      });

      if (error) {
        toast.error("Error de red al contactar el Gateway.");
        return;
      }
      if (data?.error) {
        toast.error(data.error || "Error lógico del Gateway.");
        return;
      }

      const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `data_${transaction.id.substring(0, 8)}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      toast.success("Datos descargados correctamente vía Gateway seguro.");
    } catch (err) {
      toast.error("Error inesperado en la descarga.");
    } finally {
      queryClient.invalidateQueries({ queryKey: ["access-logs"] });
    }
  };

  const handleDownloadTechSheet = () => {
    if (!transaction) return;
    const product = transaction.asset?.product;
    const customMeta = transaction.asset?.custom_metadata as any;
    const policy = (transaction as any).policy?.odrl_policy_json;

    const SENSITIVE_FIELDS = [
      "api_url", "credentials", "headers",
      "auth_token", "api_key", "endpoint_url", "connection_string",
    ];

    const sanitizeForExport = (obj: Record<string, any>): Record<string, any> => {
      if (!obj || typeof obj !== "object") return obj;
      const sanitized = { ...obj };
      SENSITIVE_FIELDS.forEach(field => {
        delete sanitized[field];
      });
      // Clean nested known sensitive containers
      if (sanitized.access_policy && typeof sanitized.access_policy === "object") {
        sanitized.access_policy = { ...sanitized.access_policy };
        SENSITIVE_FIELDS.forEach(field => delete sanitized.access_policy[field]);
      }
      if (sanitized.connection && typeof sanitized.connection === "object") {
        sanitized.connection = { ...sanitized.connection };
        SENSITIVE_FIELDS.forEach(field => delete sanitized.connection[field]);
      }
      return sanitized;
    };

    const rawSheet: Record<string, any> = {
      product_name: product?.name,
      version: product?.version,
      category: product?.category,
      provider: transaction.subject_org?.name,
      holder: transaction.holder_org?.name,
      schema_definition: product?.schema_definition,
      quality_metrics: customMeta?.quality_metrics || null,
      access_policy: policy
        ? { permissions: policy.permissions, prohibitions: policy.prohibitions, obligations: policy.obligations }
        : null,
      generated_at: new Date().toISOString(),
    };

    const sheet = sanitizeForExport(rawSheet);

    const blob = new Blob([JSON.stringify(sheet, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `ficha_tecnica_${transaction.id.substring(0, 8)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success("Ficha Técnica descargada (sin credenciales).");
  };

  const exportToCSV = () => {
    if (!transaction) return;
    const sampleData = transaction.asset?.sample_data;
    if (!sampleData || !Array.isArray(sampleData) || sampleData.length === 0) {
      toast.error("No hay datos para exportar");
      return;
    }
    const headers = Object.keys(sampleData[0]);
    const csvContent = [
      headers.join(","),
      ...sampleData.map((row: any) =>
        headers.map((h) => `"${typeof row[h] === "object" ? JSON.stringify(row[h]) : row[h]}"`).join(",")
      ),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `data_${id}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success("Archivo CSV descargado exitosamente");
  };

  // --- Loading / Error states ---

  if (loadingTransaction) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-lg text-muted-foreground">Cargando transacción...</p>
      </div>
    );
  }

  if (!transaction) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Card>
          <CardContent className="pt-6">
            <p className="text-center">Transacción no encontrada</p>
            <Button className="mt-4" onClick={() => navigate("/requests")}>
              Volver a solicitudes
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // --- Derived data ---

  const canViewData = transaction.status === "completed";
  const isConsumer = activeOrg?.id === transaction.consumer_org_id;
  const product = transaction.asset?.product;
  const customMeta = transaction.asset?.custom_metadata as any;
  const sampleData = transaction.asset?.sample_data as any[] | null;
  const schemaFields = Array.isArray(product?.schema_definition) ? product.schema_definition : [];
  const qualityMetrics = customMeta?.quality_metrics || {};
  const policyJson = (transaction as any).policy?.odrl_policy_json || {};
  const accessPolicy = customMeta?.access_policy || policyJson || {};
  const permissions = accessPolicy.permissions || DEFAULT_PERMISSIONS;
  const prohibitions = accessPolicy.prohibitions || DEFAULT_PROHIBITIONS;
  const obligations = accessPolicy.obligations || DEFAULT_OBLIGATIONS;
  const providerKyb = transaction.subject_org?.kyb_verified;

  // Timeout calculation
  const createdAt = new Date(transaction.created_at);
  const expiresAt = new Date(createdAt.getTime() + transaction.access_duration_days * 24 * 60 * 60 * 1000);
  const now = new Date();
  const daysLeft = Math.max(0, Math.ceil((expiresAt.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)));
  const isExpired = daysLeft === 0 && canViewData;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <h1 className="text-2xl font-bold cursor-pointer" onClick={() => navigate("/dashboard")}>
            <span className="procuredata-gradient">PROCUREDATA</span>
          </h1>
          <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={() => navigate("/requests")}>Solicitudes</Button>
            <span className="text-sm text-muted-foreground">{user?.email}</span>
            <Button variant="outline" onClick={signOut}>Cerrar Sesión</Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto p-6 space-y-6">
        {/* Back + Revoke */}
        <div className="flex items-center justify-between">
          <Button variant="ghost" onClick={() => navigate("/requests")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver a solicitudes
          </Button>
          {canViewData && (
            <RevokeAccessButton
              resourceId={id || ""}
              resourceName={product?.name}
              onRevoked={(txHash) => { toast.info("Acceso revocado. Hash: " + txHash.slice(0, 16) + "..."); }}
            />
          )}
        </div>

        {/* Enriched Header Card */}
        <Card className="overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-primary to-primary/60" />
          <CardHeader>
            <div className="flex flex-wrap gap-2 mb-3">
              <Badge variant="outline" className="gap-1">
                <Globe className="h-3 w-3" />
                {transaction.subject_org?.name}
              </Badge>
              {product?.category && (
                <Badge variant="secondary">{product.category}</Badge>
              )}
              {providerKyb && (
                <Badge className="gap-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                  <ShieldCheck className="h-3 w-3" />
                  KYB Verified
                </Badge>
              )}
              {canViewData && (
                <Badge className="gap-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                  <CheckCircle2 className="h-3 w-3" />
                  Acceso Concedido
                </Badge>
              )}
            </div>
            <CardTitle className="text-3xl">{product?.name || "Producto de Datos"}</CardTitle>
            <CardDescription className="text-base mt-1">
              {product?.description || "Sin descripción disponible."}
            </CardDescription>
          </CardHeader>
        </Card>

        {/* 4 Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Versión", value: product?.version || "1.0", icon: Database },
            { label: "Actualización", value: "Bajo demanda", icon: Clock },
            { label: "Esquema", value: `${schemaFields.length} campos`, icon: FileJson },
            { label: "Formato", value: "JSON", icon: FileText },
          ].map((item) => (
            <Card key={item.label} className="bg-gradient-to-br from-primary/10 to-primary/5">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <item.icon className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    <p className="text-lg font-semibold">{item.value}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 5 Tabs */}
        <Tabs defaultValue="descripcion" className="w-full">
          <TabsList className="w-full justify-start flex-wrap h-auto gap-1">
            <TabsTrigger value="descripcion">Descripción</TabsTrigger>
            <TabsTrigger value="esquema">Esquema</TabsTrigger>
            <TabsTrigger value="muestra">Muestra</TabsTrigger>
            <TabsTrigger value="calidad">Calidad</TabsTrigger>
            <TabsTrigger value="politicas">Políticas de Acceso</TabsTrigger>
          </TabsList>

          {/* Tab: Descripción */}
          <TabsContent value="descripcion">
            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="text-sm text-muted-foreground">Proveedor (Subject)</p>
                    <p className="font-medium">{transaction.subject_org?.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Custodio (Holder)</p>
                    <p className="font-medium">{transaction.holder_org?.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Consumidor</p>
                    <p className="font-medium">{transaction.consumer_org?.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Propósito</p>
                    <p className="font-medium">{transaction.purpose}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Duración del Acceso</p>
                    <p className="font-medium">{transaction.access_duration_days} días</p>
                  </div>
                  {canViewData && (
                    <div>
                      <p className="text-sm text-muted-foreground">Tiempo Restante</p>
                      <p className={`font-medium ${isExpired ? "text-destructive" : daysLeft <= 7 ? "text-orange-600" : ""}`}>
                        {isExpired ? "Acceso expirado" : `${daysLeft} días restantes`}
                      </p>
                    </div>
                  )}
                </div>
                <DataLineage transaction={transaction} />
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tab: Esquema */}
          <TabsContent value="esquema">
            <Card>
              <CardContent className="pt-6">
                {schemaFields.length === 0 ? (
                  <p className="text-sm text-muted-foreground text-center py-6">No hay definición de esquema disponible.</p>
                ) : (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Campo</TableHead>
                        <TableHead>Tipo</TableHead>
                        <TableHead>Descripción</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {schemaFields.map((field: any, i: number) => (
                        <TableRow key={i}>
                          <TableCell className="font-mono text-sm">{field.field || field.name}</TableCell>
                          <TableCell><Badge variant="outline">{field.type}</Badge></TableCell>
                          <TableCell className="text-sm text-muted-foreground">{field.description || "—"}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tab: Muestra */}
          <TabsContent value="muestra">
            <Card>
              <CardContent className="pt-6">
                {!sampleData || sampleData.length === 0 ? (
                  <p className="text-sm text-muted-foreground text-center py-6">No hay datos de muestra disponibles.</p>
                ) : (
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          {Object.keys(sampleData[0]).map((key) => (
                            <TableHead key={key}>{key}</TableHead>
                          ))}
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {sampleData.slice(0, 10).map((row: any, i: number) => (
                          <TableRow key={i}>
                            {Object.values(row).map((val: any, j: number) => (
                              <TableCell key={j} className="text-sm">
                                {typeof val === "object" ? JSON.stringify(val) : String(val)}
                              </TableCell>
                            ))}
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                    {sampleData.length > 10 && (
                      <p className="text-xs text-muted-foreground mt-2 text-center">
                        Mostrando 10 de {sampleData.length} registros.
                      </p>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tab: Calidad */}
          <TabsContent value="calidad">
            <Card>
              <CardContent className="pt-6 space-y-4">
                {Object.keys(qualityMetrics).length === 0 ? (
                  <p className="text-sm text-muted-foreground text-center py-6">No hay métricas de calidad disponibles.</p>
                ) : (
                  Object.entries(qualityMetrics).map(([key, value]: [string, any]) => (
                    <div key={key} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="capitalize">{key.replace(/_/g, " ")}</span>
                        <span className="font-semibold">{typeof value === "number" ? `${value}%` : String(value)}</span>
                      </div>
                      {typeof value === "number" && <Progress value={value} className="h-2" />}
                    </div>
                  ))
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tab: Políticas de Acceso */}
          <TabsContent value="politicas">
            <Card>
              <CardContent className="pt-6">
                <div className="grid gap-6 md:grid-cols-3">
                  {/* Permitido */}
                  <div className="space-y-3">
                    <h4 className="font-semibold flex items-center gap-2 text-green-700 dark:text-green-400">
                      <CheckCircle2 className="h-4 w-4" /> Permitido
                    </h4>
                    <ul className="space-y-2">
                      {(Array.isArray(permissions) ? permissions : DEFAULT_PERMISSIONS).map((p: string, i: number) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="h-3.5 w-3.5 text-green-600 mt-0.5 shrink-0" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Prohibido */}
                  <div className="space-y-3">
                    <h4 className="font-semibold flex items-center gap-2 text-red-700 dark:text-red-400">
                      <XCircle className="h-4 w-4" /> Prohibido
                    </h4>
                    <ul className="space-y-2">
                      {(Array.isArray(prohibitions) ? prohibitions : DEFAULT_PROHIBITIONS).map((p: string, i: number) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <XCircle className="h-3.5 w-3.5 text-red-600 mt-0.5 shrink-0" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Obligaciones */}
                  <div className="space-y-3">
                    <h4 className="font-semibold flex items-center gap-2 text-amber-700 dark:text-amber-400">
                      <Scale className="h-4 w-4" /> Obligaciones
                    </h4>
                    <ul className="space-y-2">
                      {(Array.isArray(obligations) ? obligations : DEFAULT_OBLIGATIONS).map((p: string, i: number) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <Scale className="h-3.5 w-3.5 text-amber-600 mt-0.5 shrink-0" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-6 border-t pt-4">
                  Política basada en ODRL 2.0. Los términos específicos están definidos en la licencia contractual entre las partes.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Download Console — bifurcated */}
        {canViewData && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Download className="h-5 w-5" />
                Consola de Descargas
              </CardTitle>
              <CardDescription>
                {isConsumer
                  ? "Descarga segura de datos vía Gateway proxy. Tus credenciales nunca son expuestas."
                  : "Panel técnico completo con acceso directo a los detalles del activo."}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isConsumer ? (
                /* Consumer: Secure Gateway */
                <div className="flex flex-wrap gap-3">
                  <Button onClick={handleGatewayDownload} className="gap-2">
                    <ShieldCheck className="h-4 w-4" />
                    Descargar vía Gateway Seguro
                  </Button>
                  <Button variant="outline" onClick={handleDownloadTechSheet} className="gap-2">
                    <FileJson className="h-4 w-4" />
                    Ficha Técnica (JSON)
                  </Button>
                  <Button
                    variant="outline"
                    className="gap-2"
                    onClick={() => {
                      generateLicensePDF(
                        transaction,
                        product?.name || "Producto",
                        transaction.holder_org?.name || "",
                        transaction.consumer_org?.name || ""
                      );
                      toast.success("Licencia PDF descargada.");
                    }}
                  >
                    <FileText className="h-4 w-4" />
                    Licencia PDF
                  </Button>
                </div>
              ) : (
                /* Provider/Holder: Full technical panel */
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-3">
                    <Button onClick={exportToCSV} className="gap-2">
                      <Download className="h-4 w-4" />
                      Exportar CSV
                    </Button>
                    <Button
                      variant="outline"
                      className="gap-2"
                      onClick={() => {
                        generateLicensePDF(
                          transaction,
                          product?.name || "Producto",
                          transaction.holder_org?.name || "",
                          transaction.consumer_org?.name || ""
                        );
                      }}
                    >
                      <FileText className="h-4 w-4" />
                      Licencia PDF
                    </Button>
                    <CodeIntegrationModal assetId={transaction.asset_id} />
                    {erpConfigs && erpConfigs.length > 0 ? (
                      <Select onValueChange={(value) => sendToERPMutation.mutate(value)}>
                        <SelectTrigger className="w-[200px]">
                          <Send className="mr-2 h-4 w-4" />
                          <SelectValue placeholder="Enviar a ERP" />
                        </SelectTrigger>
                        <SelectContent>
                          {erpConfigs.map((config) => (
                            <SelectItem key={config.id} value={config.id}>
                              {config.config_name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    ) : (
                      <Button variant="outline" onClick={() => navigate("/settings/erp-config")} className="gap-2">
                        <Send className="h-4 w-4" />
                        Configurar ERP
                      </Button>
                    )}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {!canViewData && (
          <Card>
            <CardContent className="py-12 text-center">
              <Building2 className="mx-auto h-12 w-12 text-muted-foreground" />
              <h3 className="mt-4 text-lg font-semibold">Datos no disponibles</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Los datos estarán disponibles cuando la transacción esté completada.
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Estado actual: <Badge variant="secondary">{transaction.status}</Badge>
              </p>
            </CardContent>
          </Card>
        )}

        {/* Access History */}
        {transaction.status === "completed" && transaction.asset_id && (
          <AccessHistoryTable
            transactionId={id}
            assetId={transaction.asset_id}
            consumerOrgId={transaction.consumer_org_id}
          />
        )}
      </main>
    </div>
  );
};

export default DataView;
