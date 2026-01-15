import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, Key, Eye, FileCheck, AlertTriangle } from "lucide-react";

const DocSeguridad = () => {
  const securityLayers = [
    {
      icon: Lock,
      title: "Cifrado en Tránsito",
      description: "Comunicaciones protegidas con TLS 1.3 y mTLS para servicios internos",
      details: ["TLS 1.3 para APIs públicas", "mTLS entre microservicios", "Certificados gestionados automáticamente"],
      color: "border-blue-500",
    },
    {
      icon: Key,
      title: "Cifrado en Reposo",
      description: "Datos almacenados cifrados con AES-256-GCM",
      details: ["AES-256-GCM para bases de datos", "KMS para gestión de claves", "Rotación automática de claves"],
      color: "border-purple-500",
    },
    {
      icon: Shield,
      title: "Autenticación",
      description: "Sistema de identidad basado en OAuth 2.0 y OpenID Connect",
      details: ["OAuth 2.0 + OIDC", "MFA obligatorio para admin", "SSO federado disponible"],
      color: "border-emerald-500",
    },
    {
      icon: Eye,
      title: "Autorización",
      description: "Control de acceso granular basado en roles (RBAC) y atributos (ABAC)",
      details: ["RBAC + ABAC híbrido", "Políticas como código", "Auditoría completa"],
      color: "border-teal-500",
    },
  ];

  const certifications = [
    { name: "ISO 27001", status: "En proceso", year: "2025" },
    { name: "SOC 2 Type II", status: "Planificado", year: "2025" },
    { name: "GDPR", status: "Cumplimiento", year: "Activo" },
    { name: "ENS (Medio)", status: "En proceso", year: "2025" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-emerald-900 mb-2">7. Seguridad y Protección de Datos</h2>
          <p className="text-muted-foreground mb-8">
            Arquitectura de seguridad multicapa para protección integral
          </p>

          {/* Security Layers */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {securityLayers.map((layer, index) => (
              <Card key={index} className={`border-l-4 ${layer.color}`}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
                      <layer.icon className="h-5 w-5 text-slate-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">{layer.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{layer.description}</p>
                      <ul className="space-y-1">
                        {layer.details.map((detail, i) => (
                          <li key={i} className="text-xs text-slate-600 flex items-center gap-2">
                            <div className="w-1 h-1 bg-slate-400 rounded-full" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <h3 className="text-xl font-semibold text-emerald-800 mb-4">Certificaciones y Cumplimiento</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-4">
                  <FileCheck className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-sm">{cert.name}</h4>
                  <Badge 
                    variant={cert.status === "Cumplimiento" ? "default" : "outline"} 
                    className={`text-xs mt-2 ${cert.status === "Cumplimiento" ? "bg-emerald-600" : ""}`}
                  >
                    {cert.status}
                  </Badge>
                  <p className="text-xs text-muted-foreground mt-1">{cert.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* GDPR Compliance */}
          <Card className="bg-slate-50 border-slate-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-8 w-8 text-amber-500 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Cumplimiento GDPR / RGPD</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    TeleNatura cumple con el Reglamento General de Protección de Datos de la UE:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                        Consentimiento explícito para tratamiento
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                        Derecho al olvido implementado
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                        Portabilidad de datos disponible
                      </li>
                    </ul>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                        DPO designado
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                        Evaluación de impacto (DPIA)
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                        Notificación de brechas &lt; 72h
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DocSeguridad;
