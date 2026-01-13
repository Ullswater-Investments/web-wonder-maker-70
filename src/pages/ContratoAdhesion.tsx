import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  FileText, 
  Shield, 
  Users, 
  Building2, 
  Database, 
  Handshake,
  Download,
  ArrowRight,
  CheckCircle2,
  Scale,
  Clock,
  FileCheck,
  ExternalLink,
  Package,
  Globe,
  Lock,
  Workflow
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FundingFooter } from "@/components/FundingFooter";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useCartaAdhesionPDF } from "@/hooks/useCartaAdhesionPDF";

const ContratoAdhesion = () => {
  const { generatePDF, downloading } = useCartaAdhesionPDF();

  const marcoNormativo = [
    { name: "Data Governance Act", regulation: "Reglamento (UE) 2022/868" },
    { name: "Data Act", regulation: "Reglamento (UE) 2023/2854" },
    { name: "EHDS", regulation: "European Health Data Space" },
    { name: "RGPD", regulation: "Reglamento (UE) 2016/679" },
    { name: "LOPDGDD", regulation: "Ley Orgánica 3/2018" },
  ];

  const roles = [
    {
      icon: Database,
      title: "Proveedor de Datos",
      description: "Entidad que aporta conjuntos de datos al Espacio de Datos para su intercambio y monetización.",
      features: ["Publicar datasets", "Definir políticas de uso", "Monetizar activos"]
    },
    {
      icon: Users,
      title: "Consumidor de Datos",
      description: "Entidad que accede y utiliza datos del Espacio de Datos para sus operaciones o análisis.",
      features: ["Acceder a catálogo", "Solicitar datos", "Usar bajo políticas"]
    },
    {
      icon: Workflow,
      title: "Proveedor de Servicios",
      description: "Entidad que ofrece servicios de intermediación, transformación o valor añadido sobre datos.",
      features: ["Servicios de IA", "Transformación", "Análisis avanzado"]
    },
    {
      icon: Handshake,
      title: "Intermediario de Datos",
      description: "Entidad neutral que facilita el intercambio de datos entre proveedores y consumidores.",
      features: ["Neutral", "Facilitador", "Cumplimiento DGA"]
    },
    {
      icon: Globe,
      title: "Organización de Altruismo",
      description: "Entidad sin ánimo de lucro que gestiona datos cedidos voluntariamente para fines de interés general.",
      features: ["Sin ánimo de lucro", "Interés público", "Investigación"]
    }
  ];

  const normativaSections = [
    {
      id: "terminos",
      title: "3.1 Términos y Condiciones Generales",
      content: [
        "Definiciones y alcance del Espacio de Datos",
        "Derechos y obligaciones de los participantes",
        "Procedimientos de acceso y uso de datos",
        "Mecanismos de resolución de conflictos",
        "Condiciones de modificación y actualización"
      ]
    },
    {
      id: "gobernanza",
      title: "3.2 Mecanismos de Gobernanza",
      content: [
        "Comité de Gobernanza: Órgano rector con representación de todos los stakeholders",
        "Comité Técnico: Responsable de estándares técnicos y interoperabilidad",
        "Comité de Ética: Supervisión del uso ético de los datos",
        "Comité de Seguridad: Gestión de riesgos y respuesta a incidentes",
        "Procedimientos de votación y toma de decisiones"
      ]
    },
    {
      id: "odrl",
      title: "3.3 Políticas ODRL (Open Digital Rights Language)",
      content: [
        "Definición de permisos, prohibiciones y obligaciones sobre los datos",
        "Especificación de condiciones de uso (temporal, geográfico, propósito)",
        "Mecanismos de herencia y composición de políticas",
        "Integración con contratos inteligentes para enforcement automático",
        "Compatibilidad con estándares IDS y GAIA-X"
      ]
    },
    {
      id: "gaiax",
      title: "3.4 GAIA-X Trust Framework",
      content: [
        "Soberanía de datos: Control total sobre los propios datos",
        "Interoperabilidad: Uso de estándares abiertos y APIs documentadas",
        "Portabilidad: Capacidad de migrar datos entre proveedores",
        "Transparencia: Trazabilidad completa de operaciones",
        "Seguridad: Cumplimiento de estándares de ciberseguridad",
        "Federación: Participación en ecosistemas distribuidos"
      ]
    },
    {
      id: "rgpd",
      title: "3.5 Cumplimiento RGPD",
      content: [
        "Base legal para el tratamiento de datos personales (Art. 6)",
        "Derechos de los interesados (acceso, rectificación, supresión, portabilidad)",
        "Obligaciones del responsable y encargado del tratamiento",
        "Evaluaciones de impacto (DPIA) para tratamientos de alto riesgo",
        "Notificación de brechas de seguridad en 72 horas"
      ]
    }
  ];

  const recursos = [
    { nombre: "CRED - Centro Español de Referencia", url: "https://cred.red.gob.es/" },
    { nombre: "IDSA Rulebook", url: "https://internationaldataspaces.org/publications/idsa-rulebook/" },
    { nombre: "GAIA-X Trust Framework", url: "https://gaia-x.eu/trust-framework/" },
    { nombre: "Data Governance Act", url: "https://eur-lex.europa.eu/eli/reg/2022/868/oj" },
    { nombre: "Data Act", url: "https://eur-lex.europa.eu/eli/reg/2023/2854/oj" },
    { nombre: "RGPD", url: "https://eur-lex.europa.eu/eli/reg/2016/679/oj" },
    { nombre: "LOPDGDD", url: "https://www.boe.es/eli/es/lo/2018/12/05/3/con" },
    { nombre: "PROCUREDATA", url: "https://www.procuredata.org" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Package className="h-8 w-8 text-primary" />
            <span className="font-bold text-xl">PROCUREDATA</span>
          </Link>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <ThemeToggle />
            <Button asChild variant="outline">
              <Link to="/auth">Acceder</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge variant="outline" className="mb-4 text-sm px-4 py-1">
              <FileText className="h-4 w-4 mr-2" />
              Documento Oficial
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              CARTA DE ADHESIÓN
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              Al Espacio de Datos PROCUREDATA
            </p>
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              {marcoNormativo.map((item) => (
                <Badge key={item.name} variant="secondary" className="text-xs">
                  {item.name}
                </Badge>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" onClick={generatePDF} disabled={downloading}>
                <Download className="mr-2 h-5 w-5" />
                {downloading ? "Generando..." : "Descargar Contrato PDF"}
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/register">
                  Iniciar Proceso de Adhesión
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Promotor Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">1. Identificación del Promotor</CardTitle>
                    <CardDescription>Datos del promotor del Espacio de Datos</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Razón Social</span>
                      <span className="font-medium">PROCUREDATA</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Domicilio</span>
                      <span className="font-medium">España</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Email</span>
                      <span className="font-medium">info@procuredata.org</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Sitio Web</span>
                      <a href="https://www.procuredata.org" target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline flex items-center gap-1">
                        www.procuredata.org
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Marco Legal</span>
                      <span className="font-medium">Data Governance Act</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Ecosistema</span>
                      <span className="font-medium">GAIA-X</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Objeto del Contrato */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <FileCheck className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">2. Objeto del Contrato</CardTitle>
                    <CardDescription>Formalización de la incorporación al Espacio de Datos</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  La presente Carta de Adhesión tiene por objeto formalizar la incorporación del Participante 
                  al Espacio de Datos PROCUREDATA, estableciendo los términos y condiciones que regirán su participación.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Acepta íntegramente el marco normativo y de gobernanza del Espacio de Datos",
                    "Se compromete a cumplir con las obligaciones técnicas, legales y éticas",
                    "Reconoce los derechos y responsabilidades asociados a su rol",
                    "Autoriza al Promotor a verificar el cumplimiento de requisitos"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Aceptación de Normativa - Accordion */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Scale className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">3. Aceptación de Normativa</h2>
                <p className="text-muted-foreground">Marcos normativos y documentos rectores</p>
              </div>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {normativaSections.map((section) => (
                <AccordionItem key={section.id} value={section.id} className="border rounded-lg px-4">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-semibold">{section.title}</span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 pt-2">
                      {section.content.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Roles del Participante */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">4. Rol del Participante</h2>
                <p className="text-muted-foreground">Seleccione su rol en el Espacio de Datos</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {roles.map((role, index) => (
                <motion.div
                  key={role.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                    <CardHeader className="pb-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2 group-hover:bg-primary/20 transition-colors">
                        <role.icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-base">{role.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">{role.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {role.features.map((feature) => (
                          <Badge key={feature} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vigencia y Extinción */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">5. Vigencia y Extinción</h2>
                <p className="text-muted-foreground">Duración y causas de terminación</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">5.1 Vigencia</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    La presente Carta de Adhesión entrará en vigor en la fecha de su firma 
                    y tendrá una <span className="font-semibold text-foreground">duración indefinida</span>, 
                    salvo denuncia expresa de cualquiera de las partes.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">5.2 Causas de Extinción</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Denuncia voluntaria con preaviso de 30 días
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Incumplimiento grave de obligaciones
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Decisión del Comité de Gobernanza
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">5.3 Efectos</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Cese del acceso a servicios
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Mantenimiento de confidencialidad
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Derecho a exportar datos propios
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Recursos Oficiales */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <ExternalLink className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Anexo: Recursos Oficiales</h2>
                <p className="text-muted-foreground">Enlaces a documentación y normativa</p>
              </div>
            </div>

            <Card>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-3">
                  {recursos.map((recurso) => (
                    <a
                      key={recurso.nombre}
                      href={recurso.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/50 transition-colors group"
                    >
                      <span className="font-medium text-sm">{recurso.nombre}</span>
                      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Lock className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4">¿Listo para adherirse al Espacio de Datos?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Complete el proceso de registro para formalizar su adhesión al Espacio de Datos PROCUREDATA 
              y comenzar a intercambiar datos de forma segura y conforme a la normativa europea.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" onClick={generatePDF} disabled={downloading} variant="outline">
                <Download className="mr-2 h-5 w-5" />
                {downloading ? "Generando..." : "Descargar Contrato PDF"}
              </Button>
              <Button size="lg" asChild>
                <Link to="/register">
                  Iniciar Proceso de Adhesión
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <FundingFooter variant="dark" showTransparency={true} />
    </div>
  );
};

export default ContratoAdhesion;
