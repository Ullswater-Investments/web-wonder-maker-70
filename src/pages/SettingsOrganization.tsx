import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useOrganizationContext } from "@/hooks/useOrganizationContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Mail, MapPin, Phone } from "lucide-react";
import { FadeIn } from "@/components/AnimatedSection";

const SettingsOrganization = () => {
  const { activeOrg } = useOrganizationContext();

  const { data: orgDetails } = useQuery({
    queryKey: ["organization-details", activeOrg?.id],
    queryFn: async () => {
      if (!activeOrg) return null;

      const { data, error } = await supabase
        .from("organizations")
        .select("*")
        .eq("id", activeOrg.id)
        .single();

      if (error) throw error;
      return data;
    },
    enabled: !!activeOrg,
  });

  const getTypeLabel = (type: string) => {
    const labels: Record<string, string> = {
      consumer: "Consumidor de Datos",
      data_holder: "Poseedor de Datos",
      provider: "Proveedor de Datos",
    };
    return labels[type] || type;
  };

  return (
    <div className="container mx-auto p-6 space-y-8">
      <FadeIn>
        <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-green-500/10 via-background to-background border border-green-500/20 p-8">
          <div className="relative z-10">
            <Badge variant="secondary" className="mb-4">
              <Building2 className="mr-1 h-3 w-3" />
              Organización
            </Badge>
            <h1 className="text-4xl font-bold mb-3">
              Perfil de Organización
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Información detallada de tu organización en el sistema.
            </p>
          </div>
        </div>
      </FadeIn>

      {orgDetails && (
        <FadeIn delay={0.1}>
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl">{orgDetails.name}</CardTitle>
                  <CardDescription>
                    {orgDetails.tax_id && `CIF: ${orgDetails.tax_id}`}
                  </CardDescription>
                </div>
                <Badge variant="secondary">
                  {getTypeLabel(orgDetails.type)}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">
                      Información General
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Building2 className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <p className="text-sm font-medium">Nombre Legal</p>
                          <p className="text-sm text-muted-foreground">{orgDetails.name}</p>
                        </div>
                      </div>
                      {orgDetails.tax_id && (
                        <div className="flex items-center gap-3">
                          <Badge variant="outline" className="font-mono">
                            {orgDetails.tax_id}
                          </Badge>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">
                      Tipo de Organización
                    </h3>
                    <p className="text-sm">{getTypeLabel(orgDetails.type)}</p>
                    {orgDetails.is_demo && (
                      <Badge variant="secondary" className="mt-2">
                        🎭 Organización Demo
                      </Badge>
                    )}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t">
                <h3 className="text-sm font-medium text-muted-foreground mb-4">
                  Información de Registro
                </h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <p className="text-sm font-medium">Creada</p>
                    <p className="text-sm text-muted-foreground">
                      {new Date(orgDetails.created_at).toLocaleDateString("es-ES", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Última actualización</p>
                    <p className="text-sm text-muted-foreground">
                      {new Date(orgDetails.updated_at).toLocaleDateString("es-ES", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      )}
    </div>
  );
};

export default SettingsOrganization;