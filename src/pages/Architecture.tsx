import { ArrowLeft, Database, Shield, Server, Lock, Code } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Architecture() {
  return (
    <div className="min-h-screen bg-muted/20">
      <header className="bg-background border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="icon"><ArrowLeft className="h-5 w-5" /></Button>
            </Link>
            <h1 className="font-bold text-xl">Arquitectura Técnica PROCUREDATA</h1>
          </div>
          <Button asChild><Link to="/auth">Probar Demo</Link></Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="mb-8">
          <p className="text-lg text-muted-foreground">
            Documentación técnica interactiva sobre el modelo de datos, seguridad y flujo de transacciones.
          </p>
        </div>

        <Tabs defaultValue="db" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="db">Base de Datos</TabsTrigger>
            <TabsTrigger value="security">Seguridad & RLS</TabsTrigger>
            <TabsTrigger value="stack">Tech Stack</TabsTrigger>
            <TabsTrigger value="flows">Flujos de Datos</TabsTrigger>
          </TabsList>

          {/* BASE DE DATOS */}
          <TabsContent value="db" className="space-y-6">
            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Database className="h-5 w-5 text-blue-500" /> Esquema Core</CardTitle></CardHeader>
              <CardContent className="grid gap-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg bg-background">
                    <h3 className="font-bold mb-2 text-primary">Organizations</h3>
                    <p className="text-sm text-muted-foreground mb-2">Entidades participantes.</p>
                    <code className="text-xs bg-muted p-1 rounded block">id (UUID), type (Consumer/Provider/Holder), tax_id</code>
                  </div>
                  <div className="p-4 border rounded-lg bg-background">
                    <h3 className="font-bold mb-2 text-primary">Data Transactions</h3>
                    <p className="text-sm text-muted-foreground mb-2">Núcleo del sistema. Máquina de estados.</p>
                    <code className="text-xs bg-muted p-1 rounded block">status (initiated → approved → completed), asset_id, consumer_id</code>
                  </div>
                  <div className="p-4 border rounded-lg bg-background">
                    <h3 className="font-bold mb-2 text-primary">Innovation Lab Concepts</h3>
                    <p className="text-sm text-muted-foreground mb-2">Motor de escenarios sintéticos.</p>
                    <code className="text-xs bg-muted p-1 rounded block">chart_data (JSONB), maturity_level, business_impact</code>
                  </div>
                  <div className="p-4 border rounded-lg bg-background">
                    <h3 className="font-bold mb-2 text-primary">Data Payloads</h3>
                    <p className="text-sm text-muted-foreground mb-2">Almacenamiento flexible de resultados.</p>
                    <code className="text-xs bg-muted p-1 rounded block">schema_type (esg/iot/finance), data_content (JSONB)</code>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* SEGURIDAD */}
          <TabsContent value="security" className="space-y-6">
            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Lock className="h-5 w-5 text-red-500" /> Modelo de Seguridad</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-4 items-start">
                  <Shield className="h-6 w-6 mt-1 text-green-600" />
                  <div>
                    <h3 className="font-bold">Row Level Security (RLS)</h3>
                    <p className="text-sm text-muted-foreground">Cada consulta a base de datos es interceptada por políticas de PostgreSQL.</p>
                    <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                      <li>Un <strong>Consumer</strong> solo ve sus transacciones.</li>
                      <li>Un <strong>Provider</strong> solo ve solicitudes dirigidas a él.</li>
                      <li>Los datos sensibles (<code>payloads</code>) solo se descifran si el estado es <code>completed</code>.</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* STACK */}
          <TabsContent value="stack" className="space-y-6">
            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Code className="h-5 w-5 text-purple-500" /> Stack Tecnológico</CardTitle></CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div className="p-4 rounded bg-card shadow-sm border"><h4 className="font-bold">React + Vite</h4><span className="text-xs text-muted-foreground">Frontend</span></div>
                  <div className="p-4 rounded bg-card shadow-sm border"><h4 className="font-bold">Supabase</h4><span className="text-xs text-muted-foreground">Backend & Auth</span></div>
                  <div className="p-4 rounded bg-card shadow-sm border"><h4 className="font-bold">PostgreSQL</h4><span className="text-xs text-muted-foreground">Database</span></div>
                  <div className="p-4 rounded bg-card shadow-sm border"><h4 className="font-bold">Tailwind + Shadcn</h4><span className="text-xs text-muted-foreground">UI/UX</span></div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* FLUJOS */}
          <TabsContent value="flows" className="space-y-6">
            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><Server className="h-5 w-5 text-orange-500" /> Ciclo de Vida del Dato</CardTitle></CardHeader>
              <CardContent>
                <div className="relative border-l-2 border-primary/20 ml-4 space-y-8 pl-8 py-4">
                  <div className="relative">
                    <span className="absolute -left-[41px] bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs">1</span>
                    <h4 className="font-bold">Solicitud (Consumer)</h4>
                    <p className="text-sm text-muted-foreground">El consumidor busca en el catálogo y solicita acceso. Estado: <code className="bg-muted px-1 rounded">pending_subject</code></p>
                  </div>
                  <div className="relative">
                    <span className="absolute -left-[41px] bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs">2</span>
                    <h4 className="font-bold">Pre-aprobación (Provider)</h4>
                    <p className="text-sm text-muted-foreground">El dueño del dato valida el propósito. Estado: <code className="bg-muted px-1 rounded">pending_holder</code></p>
                  </div>
                  <div className="relative">
                    <span className="absolute -left-[41px] bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs">3</span>
                    <h4 className="font-bold">Aprobación Final (Holder)</h4>
                    <p className="text-sm text-muted-foreground">El custodio técnico habilita el acceso. Estado: <code className="bg-muted px-1 rounded">approved</code></p>
                  </div>
                  <div className="relative">
                    <span className="absolute -left-[41px] bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">4</span>
                    <h4 className="font-bold">Intercambio & Pago</h4>
                    <p className="text-sm text-muted-foreground">Se ejecuta el contrato inteligente y se libera el payload. Estado: <code className="bg-muted px-1 rounded">completed</code></p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
