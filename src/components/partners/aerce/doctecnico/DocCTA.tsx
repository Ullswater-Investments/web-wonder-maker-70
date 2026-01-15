import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/AnimatedSection";
import { 
  Award, Phone, FileText, ArrowRight, 
  CheckCircle2, Sparkles, Mail, ExternalLink
} from "lucide-react";
import { ProcuredataLogo } from "@/components/ProcuredataLogo";

const actions = [
  {
    icon: Award,
    title: "Solicitar Certificación",
    description: "Inicia el proceso de certificación UNE 15896",
    primary: true,
    href: "https://www.aerce.org/certificacion",
  },
  {
    icon: Phone,
    title: "Contactar con AERCE",
    description: "Información sobre formación y certificación",
    email: "info@aerce.org",
    phone: "+34 93 432 17 93",
    primary: false,
  },
  {
    icon: FileText,
    title: "Ver Proyecto AERCE",
    description: "Volver a la página del proyecto",
    link: "/partners/aerce/proyecto",
    primary: false,
  },
];

export const DocCTA = () => {
  const [clicked, setClicked] = useState(false);

  const handlePrimaryClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 3000);
    window.open("https://www.aerce.org/certificacion", "_blank");
  };

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-background to-emerald-50/30 dark:from-slate-900 dark:via-background dark:to-slate-800">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-12">
            {/* Dual Logos */}
            <div className="flex items-center justify-center gap-6 mb-8">
              <ProcuredataLogo size="md" />
              <span className="text-3xl text-muted-foreground">×</span>
              <img 
                src="/lovable-uploads/f72d5c01-0779-4cb5-bf22-feb5375a9de3.png" 
                alt="AERCE" 
                className="h-10 object-contain" 
              />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Preparado para{" "}
              <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
                certificarte
              </span>
              ?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Da el siguiente paso en tu carrera profesional. La certificación UNE 15896 
              es tu pasaporte hacia la excelencia en Compras.
            </p>
          </div>
        </FadeIn>

        {/* Action Cards */}
        <FadeIn delay={0.2}>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            {actions.map((action, index) => (
              <motion.div
                key={action.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card 
                  className={`h-full cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    action.primary 
                      ? "border-blue-400/50 bg-blue-50/50 dark:bg-blue-950/20 hover:border-blue-500" 
                      : "hover:border-blue-300/50"
                  }`}
                  onClick={action.primary ? handlePrimaryClick : undefined}
                >
                  <CardContent className="pt-6 text-center">
                    <div className={`w-14 h-14 rounded-2xl ${
                      action.primary ? "bg-blue-600" : "bg-blue-100 dark:bg-blue-900/30"
                    } flex items-center justify-center mx-auto mb-4`}>
                      <action.icon className={`h-7 w-7 ${
                        action.primary ? "text-white" : "text-blue-600 dark:text-blue-400"
                      }`} />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{action.title}</h3>
                    <p className="text-sm text-muted-foreground">{action.description}</p>
                    
                    {action.email && (
                      <div className="mt-3 space-y-1">
                        <a 
                          href={`mailto:${action.email}`} 
                          className="text-sm text-blue-600 hover:underline flex items-center justify-center gap-1"
                        >
                          <Mail className="h-3 w-3" />
                          {action.email}
                        </a>
                        {action.phone && (
                          <a 
                            href={`tel:${action.phone.replace(/\s/g, '')}`} 
                            className="text-sm text-muted-foreground hover:text-blue-600 flex items-center justify-center gap-1"
                          >
                            <Phone className="h-3 w-3" />
                            {action.phone}
                          </a>
                        )}
                      </div>
                    )}
                    
                    {action.primary && (
                      <Button 
                        className="mt-4 w-full gap-2 bg-blue-600 hover:bg-blue-700" 
                        onClick={handlePrimaryClick}
                      >
                        {clicked ? (
                          <>
                            <CheckCircle2 className="h-4 w-4" />
                            ¡Abriendo!
                          </>
                        ) : (
                          <>
                            Comenzar Ahora
                            <ExternalLink className="h-4 w-4" />
                          </>
                        )}
                      </Button>
                    )}
                    
                    {action.link && (
                      <Button asChild variant="outline" className="mt-4 w-full gap-2">
                        <Link to={action.link}>
                          <ArrowRight className="h-4 w-4" />
                          Ver Proyecto
                        </Link>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </FadeIn>

        {/* Closing Quote */}
        <FadeIn delay={0.3}>
          <Card className="max-w-3xl mx-auto bg-gradient-to-r from-blue-100/50 via-blue-50 to-emerald-100/50 dark:from-blue-950/30 dark:via-slate-900 dark:to-emerald-950/30 border-0">
            <CardContent className="py-10 text-center">
              <Sparkles className="h-8 w-8 mx-auto mb-4 text-blue-600" />
              <blockquote className="text-xl md:text-2xl font-medium italic mb-4">
                "La excelencia en Compras no es un destino, es un camino de desarrollo profesional continuo."
              </blockquote>
              <p className="text-muted-foreground">
                — AERCE, 30 años impulsando la profesión
              </p>
            </CardContent>
          </Card>
        </FadeIn>

        {/* Footer */}
        <FadeIn delay={0.4}>
          <div className="text-center mt-12 pt-8 border-t">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Badge variant="outline" className="text-xs">
                Documento Técnico v1.0
              </Badge>
              <Badge variant="outline" className="text-xs">
                Enero 2025
              </Badge>
              <Badge variant="outline" className="text-xs bg-blue-100 text-blue-700 border-blue-300">
                Exclusivo Miembros
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 AERCE × PROCUREDATA. Impulsando la excelencia en Compras.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
