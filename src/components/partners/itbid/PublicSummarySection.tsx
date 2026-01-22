import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Shield, Leaf, Zap, CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/AnimatedSection";

const benefits = [
  {
    icon: Shield,
    title: "Protección Total",
    description: "Protege a las empresas de fraudes y riesgos financieros mediante verificación exhaustiva de proveedores.",
    color: "text-[hsl(var(--itbid-cyan))]",
    bgColor: "bg-[hsl(var(--itbid-cyan)/0.1)]",
  },
  {
    icon: Leaf,
    title: "Objetivos Ecológicos",
    description: "Ayuda a las compañías a cumplir con sus compromisos de sostenibilidad y criterios ESG.",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: Zap,
    title: "Autopista Digital Europea",
    description: "Información de proveedores fluye de manera verificada a través de una red segura y estandarizada.",
    color: "text-[hsl(var(--itbid-purple))]",
    bgColor: "bg-[hsl(var(--itbid-purple)/0.1)]",
  },
];

export const PublicSummarySection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <FadeIn>
          <Card className="max-w-5xl mx-auto border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-background to-[hsl(var(--itbid-cyan)/0.05)] overflow-hidden">
            <CardContent className="p-8 md:p-12">
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-[hsl(var(--itbid-cyan))] flex items-center justify-center">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <div>
                  <Badge variant="outline" className="mb-2 bg-primary/10 border-primary/30">
                    Resumen Ejecutivo
                  </Badge>
                  <h2 className="text-2xl md:text-3xl font-bold">
                    Para el <span className="itbid-gradient-text">Gran Público</span>
                  </h2>
                </div>
              </div>

              {/* Main Text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mb-8"
              >
                <p className="text-lg md:text-xl text-foreground leading-relaxed">
                  <span className="font-bold text-primary">ITBID</span> es la herramienta que usan las empresas para{" "}
                  <span className="font-semibold">comprar de forma inteligente y sostenible</span>. 
                  Gracias a su integración con{" "}
                  <span className="font-semibold text-primary">PROCUREDATA</span> y{" "}
                  <span className="font-semibold text-[hsl(var(--itbid-cyan))]">PONTUS-X</span>, 
                  no solo ofrece un software de gestión, sino que conecta a las compañías a una{" "}
                  <span className="italic">"autopista digital europea"</span> segura donde la información 
                  de los proveedores fluye de manera verificada.
                </p>
              </motion.div>

              {/* Benefits Grid */}
              <div className="grid md:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                    className="flex flex-col items-center text-center p-4 rounded-xl bg-background/50 border border-border/50"
                  >
                    <div className={`w-12 h-12 rounded-xl ${benefit.bgColor} flex items-center justify-center mb-3`}>
                      <benefit.icon className={`h-6 w-6 ${benefit.color}`} />
                    </div>
                    <h3 className="font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* Final Statement */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="mt-8 p-4 rounded-lg bg-gradient-to-r from-primary/10 via-[hsl(var(--itbid-cyan)/0.1)] to-[hsl(var(--itbid-purple)/0.1)] border border-primary/20"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">En definitiva:</span>{" "}
                    ITBID transforma la gestión de compras de un proceso manual y fragmentado en una 
                    experiencia digital, segura y conectada al ecosistema europeo de datos industriales.
                  </p>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
};
