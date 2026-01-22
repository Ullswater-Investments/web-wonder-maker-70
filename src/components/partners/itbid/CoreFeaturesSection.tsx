import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, ShieldCheck, FileText, CheckCircle } from "lucide-react";
import { FadeIn } from "@/components/AnimatedSection";

const features = [
  {
    icon: Users,
    title: "Portal de Proveedores",
    description: "Un espacio único donde las empresas y sus proveedores colaboran, se envían mensajes y comparten documentos con total transparencia.",
    color: "text-[hsl(var(--itbid-cyan))]",
    bgColor: "bg-[hsl(var(--itbid-cyan)/0.1)]",
    tags: ["Colaboración", "Transparencia", "Documentos"],
  },
  {
    icon: ShieldCheck,
    title: "Homologación y Riesgos",
    description: "Antes de contratar a un proveedor, ITBID permite examinarlo 'con lupa'. Analiza si cumple con la ley, su salud financiera y, muy importante hoy en día, sus criterios ESG.",
    color: "text-[hsl(var(--itbid-magenta))]",
    bgColor: "bg-[hsl(var(--itbid-magenta)/0.1)]",
    tags: ["Cumplimiento Legal", "Finanzas", "ESG"],
  },
  {
    icon: FileText,
    title: "Negociación y Pedidos",
    description: "Automatiza desde la petición de ofertas ('¿quién me vende esto más barato y mejor?') hasta la emisión de la factura, eliminando errores manuales.",
    color: "text-[hsl(var(--itbid-purple))]",
    bgColor: "bg-[hsl(var(--itbid-purple)/0.1)]",
    tags: ["Automatización", "RFx", "Facturación"],
  },
  {
    icon: CheckCircle,
    title: "Control de Calidad",
    description: "Si algo llega mal, el sistema gestiona la incidencia para que se resuelva rápido. Seguimiento completo del ciclo de vida de cada compra.",
    color: "text-[hsl(var(--itbid-cyan))]",
    bgColor: "bg-[hsl(var(--itbid-cyan)/0.1)]",
    tags: ["Incidencias", "Resolución", "Trazabilidad"],
  },
];

export const CoreFeaturesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-4 py-2 bg-[hsl(var(--itbid-cyan)/0.1)] border-[hsl(var(--itbid-cyan)/0.3)]">
              Ciclo Completo Source-to-Pay
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="itbid-gradient-text">Funciones Principales</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              ITBID sustituye el caos de correos electrónicos, excels y llamadas por un sistema centralizado y eficiente.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full group hover:shadow-lg transition-all duration-300 hover:border-[hsl(var(--itbid-cyan)/0.5)] bg-card/50 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-2xl ${feature.bgColor} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className={`h-7 w-7 ${feature.color}`} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {feature.description}
                      </p>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {feature.tags.map((tag) => (
                          <Badge 
                            key={tag} 
                            variant="secondary" 
                            className="text-xs bg-muted/50"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
