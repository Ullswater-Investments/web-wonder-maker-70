import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/AnimatedSection";
import { Shield, GraduationCap, FileText, Award, Users, Globe } from "lucide-react";
import { ProcuredataLogo } from "@/components/ProcuredataLogo";

const contextCards = [
  {
    icon: GraduationCap,
    title: "+30 Años de Excelencia",
    description: "Formando y certificando profesionales de Compras desde 1993",
  },
  {
    icon: Award,
    title: "Certificación UNE 15896",
    description: "Único estándar europeo reconocido para profesionales de Compras",
  },
  {
    icon: Users,
    title: "2.000+ Profesionales",
    description: "Red de directivos y responsables de Compras en España",
  },
  {
    icon: Globe,
    title: "IFPSM",
    description: "Miembro de la Federación Internacional de Gestión de Compras",
  },
];

export const DocTecnicoHero = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-50 via-background to-blue-100/50 dark:from-slate-900 dark:via-background dark:to-blue-950/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, hsl(217, 91%, 60%) 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, hsl(217, 91%, 50%) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <FadeIn>
          <div className="text-center mb-12">
            {/* Dual Branding */}
            <div className="flex items-center justify-center gap-6 mb-8">
              <ProcuredataLogo size="lg" />
              <span className="text-3xl text-muted-foreground">×</span>
              <img 
                src="/lovable-uploads/f72d5c01-0779-4cb5-bf22-feb5375a9de3.png" 
                alt="AERCE" 
                className="h-10 md:h-12 object-contain" 
              />
            </div>

            <Badge className="mb-6 bg-blue-100 text-blue-700 border-blue-300 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-700">
              <FileText className="h-3 w-3 mr-1" />
              Documento Técnico v1.0
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Excelencia en la Función de{" "}
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-emerald-500 bg-clip-text text-transparent">
                Compras
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
              Marco técnico completo para la <strong>certificación profesional</strong>, 
              formación especializada y desarrollo de carrera en el ámbito de las Compras.
            </p>

            <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto">
              Documento de especificaciones técnicas para organizaciones y profesionales
            </p>
          </div>
        </FadeIn>

        {/* Context Cards */}
        <FadeIn delay={0.2}>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {contextCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card/50 backdrop-blur-sm border rounded-xl p-5 text-center hover:border-blue-400/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-3">
                  <card.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-semibold mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </FadeIn>

        {/* Trust Badges */}
        <FadeIn delay={0.3}>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <Badge variant="outline" className="gap-1">
              <Shield className="h-3 w-3" />
              UNE 15896 Compliant
            </Badge>
            <Badge variant="outline" className="gap-1">
              <Award className="h-3 w-3" />
              IFPSM Member
            </Badge>
            <Badge variant="outline" className="gap-1">
              <GraduationCap className="h-3 w-3" />
              EADA/ESIC Partners
            </Badge>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
