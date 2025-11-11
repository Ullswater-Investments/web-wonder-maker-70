import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { User, Bell, Eye, Palette } from "lucide-react";
import { FadeIn } from "@/components/AnimatedSection";

const SettingsPreferences = () => {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <FadeIn>
        <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-purple-500/10 via-background to-background border border-purple-500/20 p-8">
          <div className="relative z-10">
            <Badge variant="secondary" className="mb-4">
              <User className="mr-1 h-3 w-3" />
              Preferencias
            </Badge>
            <h1 className="text-4xl font-bold mb-3">
              Preferencias de Usuario
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Personaliza tu experiencia en <span className="procuredata-gradient">PROCUREDATA</span> según tus necesidades.
            </p>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                <CardTitle>Notificaciones</CardTitle>
              </div>
              <CardDescription>
                Configura cómo y cuándo deseas recibir notificaciones
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="email-notifications">Notificaciones por Email</Label>
                  <p className="text-sm text-muted-foreground">
                    Recibe actualizaciones de solicitudes por correo electrónico
                  </p>
                </div>
                <Switch id="email-notifications" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="push-notifications">Notificaciones Push</Label>
                  <p className="text-sm text-muted-foreground">
                    Alertas en tiempo real sobre cambios en tus solicitudes
                  </p>
                </div>
                <Switch id="push-notifications" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="weekly-digest">Resumen Semanal</Label>
                  <p className="text-sm text-muted-foreground">
                    Recibe un resumen semanal de actividad
                  </p>
                </div>
                <Switch id="weekly-digest" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Eye className="h-5 w-5" />
                <CardTitle>Visualización</CardTitle>
              </div>
              <CardDescription>
                Ajusta cómo se muestra la información en la plataforma
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="compact-view">Vista Compacta</Label>
                  <p className="text-sm text-muted-foreground">
                    Muestra más información en menos espacio
                  </p>
                </div>
                <Switch id="compact-view" />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="show-demo-banner">Mostrar Banner Demo</Label>
                  <p className="text-sm text-muted-foreground">
                    Muestra el banner de modo demostración
                  </p>
                </div>
                <Switch id="show-demo-banner" defaultChecked />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Palette className="h-5 w-5" />
                <CardTitle>Apariencia</CardTitle>
              </div>
              <CardDescription>
                Personaliza el tema y colores de la interfaz
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="dark-mode">Modo Oscuro</Label>
                  <p className="text-sm text-muted-foreground">
                    Activa el tema oscuro automáticamente
                  </p>
                </div>
                <Switch id="dark-mode" />
              </div>
            </CardContent>
          </Card>
        </div>
      </FadeIn>
    </div>
  );
};

export default SettingsPreferences;