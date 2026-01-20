import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  Database, 
  Shield, 
  Wallet, 
  Target, 
  TrendingUp,
  Brain,
  Layers,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  Sparkles,
  BarChart3,
  Cpu,
  LineChart,
  Factory,
  Building2,
  Coins
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { FundingFooter } from "@/components/FundingFooter";
import { GlobalNavigation } from "@/components/GlobalNavigation";

const ValerdataProyecto = () => {
  const features = [
    {
      icon: Database,
      title: "Ingesta Multi-Fuente",
      description: "Conexión con 3+ datasets industriales de proveedores certificados Gaia-X para alimentar modelos de IA.",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Brain,
      title: "IA Predictiva",
      description: "Entrenamiento de modelos de machine learning para predicción de precios y tendencias de mercado.",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: Shield,
      title: "Soberanía de Datos",
      description: "Control total sobre los datos adquiridos con trazabilidad blockchain y políticas ODRL.",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50"
    },
    {
      icon: Wallet,
      title: "Pagos Web3",
      description: "Transacciones con EUROe stablecoin en la red Pontus-X para máxima transparencia.",
      color: "text-amber-600",
      bgColor: "bg-amber-50"
    }
  ];

  const problems = [
    {
      icon: Factory,
      title: "Datos Fragmentados",
      description: "Los datos de precios industriales están dispersos en múltiples fuentes sin estandarización."
    },
    {
      icon: LineChart,
      title: "Predicciones Limitadas",
      description: "Sin acceso a datos de calidad, los modelos de IA no pueden generar predicciones precisas."
    },
    {
      icon: Building2,
      title: "Negociación Ciega",
      description: "Los compradores industriales negocian sin visibilidad del mercado real."
    }
  ];

  const benefits = [
    { metric: "30%", label: "Mejora en precisión de predicciones" },
    { metric: "3+", label: "Datasets industriales integrados" },
    { metric: "100%", label: "Trazabilidad de origen" },
    { metric: "€15K", label: "Financiación NextGenEU" }
  ];

  const ecosystemRoles = [
    { role: "Consumer", org: "VALERDATA S.L.", description: "Adquiere datasets para entrenar modelos de IA" },
    { role: "Provider", org: "DataHub Industrial", description: "Suministra precios B2B históricos" },
    { role: "Provider", org: "Commodity Exchange", description: "Datos de materias primas en tiempo real" },
    { role: "Provider", org: "Industry Analytics", description: "Benchmarking sectorial trimestral" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <GlobalNavigation />
              <Link 
                to="/partners" 
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Volver a Partners</span>
              </Link>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="default" size="sm" asChild>
                <Link to="/partners/valerdata/login" className="gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Área Miembros
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAzMHYySDI0di0yaDEyek0zNCAyNGgydjJoLTJ2LTJ6TTI0IDI0aDJ2MmgtMnYtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="mb-6 bg-white/10 text-white border-white/20 px-4 py-2">
              <Sparkles className="w-4 h-4 mr-2" />
              Kit Espacios de Datos · NextGenerationEU
            </Badge>
            
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center">
                <span className="text-white font-bold text-3xl">V</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                PROCUREDATA
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Ingesta de datasets industriales para entrenar modelos de IA de predicción de precios
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 gap-2">
                <Target className="w-5 h-5" />
                Ver Proyecto Completo
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 gap-2" asChild>
                <Link to="/partners/valerdata/login">
                  Acceso Miembros
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Benefits Bar */}
      <section className="py-8 bg-muted/50 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600">{benefit.metric}</div>
                <div className="text-sm text-muted-foreground">{benefit.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Badge variant="outline" className="mb-4 text-red-600 border-red-200">El Problema</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                La información de precios industriales es opaca
              </h2>
              <p className="text-lg text-muted-foreground">
                Las empresas compradoras carecen de datos fiables para tomar decisiones de compra informadas
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {problems.map((problem, index) => (
              <StaggerItem key={problem.title}>
                <Card className="h-full border-red-100 bg-red-50/30 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <problem.icon className="h-10 w-10 text-red-500 mb-2" />
                    <CardTitle className="text-xl">{problem.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{problem.description}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50/50 to-background">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Badge variant="outline" className="mb-4 text-emerald-600 border-emerald-200">La Solución</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                PROCUREDATA: IA alimentada por datos soberanos
              </h2>
              <p className="text-lg text-muted-foreground">
                Un proyecto que conecta múltiples fuentes de datos industriales para entrenar modelos predictivos de última generación
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <StaggerItem key={feature.title}>
                <Card className="h-full hover:shadow-lg transition-all group">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <feature.icon className={`h-6 w-6 ${feature.color}`} />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Badge variant="outline" className="mb-4 text-purple-600 border-purple-200">Ecosistema</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Roles en el Data Space
              </h2>
              <p className="text-lg text-muted-foreground">
                VALERDATA actúa como Consumer, adquiriendo datos de múltiples Providers certificados
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {ecosystemRoles.map((item, index) => (
              <motion.div
                key={item.org}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`h-full ${item.role === 'Consumer' ? 'border-blue-200 bg-blue-50/50' : 'border-emerald-200 bg-emerald-50/50'}`}>
                  <CardContent className="pt-6">
                    <Badge className={item.role === 'Consumer' ? 'bg-blue-100 text-blue-700' : 'bg-emerald-100 text-emerald-700'}>
                      {item.role}
                    </Badge>
                    <h3 className="font-bold mt-3 mb-2">{item.org}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Badge className="mb-4 bg-white/10 text-white border-white/20">Stack Tecnológico</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Infraestructura Web3 + IA
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
                <Cpu className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="font-bold text-xl mb-2">Gaia-X Compliance</h3>
              <p className="text-slate-400">
                Federación de datos europea con identidades soberanas (DID) y catálogo interoperable
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="font-bold text-xl mb-2">Machine Learning</h3>
              <p className="text-slate-400">
                Modelos de predicción entrenados con datos industriales de alta calidad y trazabilidad
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                <Coins className="h-8 w-8 text-emerald-400" />
              </div>
              <h3 className="font-bold text-xl mb-2">EUROe Stablecoin</h3>
              <p className="text-slate-400">
                Pagos instantáneos y transparentes en la red Pontus-X con stablecoin respaldada por euros
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Quieres conocer más sobre PROCUREDATA?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Accede al área de miembros para consultar la memoria de ejecución completa, cronograma y datasets contratados
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 gap-2" asChild>
                <Link to="/partners/valerdata/login">
                  Acceder al Área de Miembros
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 gap-2" asChild>
                <Link to="/catalog">
                  Explorar Catálogo
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <FundingFooter variant="light" showTransparency={false} />
    </div>
  );
};

export default ValerdataProyecto;
