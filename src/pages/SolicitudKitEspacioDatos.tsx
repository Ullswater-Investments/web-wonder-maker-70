import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowLeft, Clock, Shield, Users, FileText, Building2, 
  ChevronDown, BookOpen, AlertTriangle, Briefcase, Server, 
  Database, Lock, Cpu, Eye, Upload, Award, Globe, Leaf, 
  CheckCircle2, FileCheck, Video, Camera, Scale, Landmark,
  BadgeCheck, Layers, Network, Binary, ScrollText, Banknote,
  HardDrive, CloudCog, Workflow, Search, GraduationCap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import logoKitEspacioDatos from "@/assets/logo-kit-espacio-datos.jpg";
import logoGobiernoRedEs from "@/assets/logo-gobierno-red-es.jpg";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const sectionNav = [
  { id: "s1", label: "1. Fundamentos Normativos" },
  { id: "s2", label: "2. Elegibilidad y Roles" },
  { id: "s3", label: "3. Ingeniería Financiera" },
  { id: "s4", label: "4. Arquitectura Tecnológica" },
  { id: "s5", label: "5. Principio DNSH" },
  { id: "s6", label: "6. Conformación Documental" },
  { id: "s7", label: "7. Ecosistemas Elegibles" },
  { id: "s8", label: "8. Cuestionario de Auditoría" },
  { id: "s9", label: "9. Conclusiones" },
];

export default function SolicitudKitEspacioDatos() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header sticky */}
      <div className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" /> Volver al inicio
          </Link>
          <Button asChild size="sm">
            <Link to="/inscripcion-kit-espacio-datos">Solicitar Inscripción</Link>
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Hero */}
        <motion.div {...fadeInUp} className="text-center mb-12">
          <div className="flex justify-center gap-6 mb-6">
            <img src={logoKitEspacioDatos} alt="Kit Espacio de Datos" className="h-16 object-contain" />
            <img src={logoGobiernoRedEs} alt="Gobierno de España - Red.es" className="h-16 object-contain" />
          </div>
          <motion.div animate={{ scale: [1, 1.03, 1] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <Badge className="bg-amber-500 text-white hover:bg-amber-500 mb-4 text-sm px-4 py-1.5">
              <Clock className="h-3.5 w-3.5 mr-1.5" />
              Fecha límite: 31 marzo 2026 a las 11:00h
            </Badge>
          </motion.div>
          <h1 className="text-3xl md:text-4xl font-black text-foreground mb-4">
            Investigación Exhaustiva y Directrices de Auditoría para la Preparación, Justificación y Conformación de Evidencias del "Kit Espacios de Datos"
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Guía completa paso a paso para preparar tu solicitud y justificación del Kit Espacio de Datos con éxito.
          </p>
        </motion.div>

        {/* Navigation */}
        <motion.div {...fadeInUp} className="mb-12">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2"><BookOpen className="h-5 w-5" /> Índice de Contenidos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {sectionNav.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => scrollTo(s.id)}
                    className="text-left text-sm px-3 py-2 rounded-md hover:bg-muted transition-colors text-foreground"
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* ==================== SECCIÓN 1 ==================== */}
        <section id="s1" className="mb-16 scroll-mt-20">
          <motion.div {...fadeInUp}>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Landmark className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">1. Fundamentos Normativos y Arquitectura Estratégica del Programa</h2>
            </div>

            <Card className="mb-6">
              <CardContent className="pt-6 space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  El despliegue de la economía del dato en la Unión Europea ha transitado desde modelos teóricos hacia implementaciones tangibles, siendo el programa <strong className="text-foreground">"Kit Espacios de Datos"</strong> la materialización de esta estrategia en el territorio español. Impulsado por el Ministerio para la Transformación Digital y de la Función Pública, a través de la Secretaría de Estado de Digitalización e Inteligencia Artificial, y gestionado operativamente por la entidad pública empresarial <strong className="text-foreground">Red.es</strong>, este instrumento se enmarca en la <strong className="text-foreground">Inversión 1 del Componente 12 del Plan de Recuperación, Transformación y Resiliencia (PRTR)</strong> financiado por los fondos europeos Next Generation EU.
                </p>
                <p>
                  A diferencia de las iniciativas de digitalización de madurez básica orientadas a la adquisición de herramientas ofimáticas o presencia web fundamental, el Kit Espacios de Datos, dotado con un presupuesto inicial de <strong className="text-foreground">60 millones de euros</strong>, representa un mecanismo de financiación de alta complejidad tecnológica. Su propósito fundacional es sufragar los costes derivados de la integración técnica, semántica y legal de organizaciones con alta madurez digital en ecosistemas sectoriales federados, conocidos como Espacios de Datos.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="h-4 w-4 text-amber-600" />
                      <span className="font-semibold text-amber-700 dark:text-amber-400 text-xs uppercase">Régimen de Concurrencia No Competitiva</span>
                    </div>
                    <p className="text-xs text-amber-800 dark:text-amber-300">Los fondos se asignan por <strong>estricto orden de llegada</strong> de las solicitudes válidamente formuladas, hasta el agotamiento del crédito presupuestario o hasta la fecha límite: <strong>31 de marzo de 2026 a las 11:00h</strong>.</p>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <FileCheck className="h-4 w-4 text-blue-600" />
                      <span className="font-semibold text-blue-700 dark:text-blue-400 text-xs uppercase">Cuenta Justificativa Simplificada</span>
                    </div>
                    <p className="text-xs text-blue-800 dark:text-blue-300">Se aplica el modelo de Cuenta Justificativa Simplificada entregada <strong>en el mismo instante de la solicitud</strong>. La interconexión tecnológica, el despliegue de la arquitectura y el abono de los costes deben estar finalizados <strong>antes</strong> de la presentación.</p>
                  </div>
                </div>

                <p>
                  El andamiaje legal reposa sobre la <strong className="text-foreground">Orden TDF/758/2025, de 11 de julio</strong>, publicada en el BOE número 170. La celeridad administrativa unida a la perfección técnica en la generación de evidencias determinan la viabilidad de la captación de la subvención.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* ==================== SECCIÓN 2 ==================== */}
        <section id="s2" className="mb-16 scroll-mt-20">
          <motion.div {...fadeInUp}>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">2. Parametrización de la Elegibilidad y Roles de Integración</h2>
            </div>

            {/* 2.1 Requisitos Subjetivos */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg">2.1. Requisitos Subjetivos de las Entidades Solicitantes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Entidades Privadas</h4>
                  <ul className="space-y-1 list-disc list-inside">
                    <li>Personalidad jurídica propia y actividad económica lícita en la UE</li>
                    <li>Antigüedad mínima de <strong className="text-foreground">6 meses</strong> en el Censo de Empresarios, Profesionales y Retenedores de la AEAT</li>
                    <li>No incurrir en la consideración de "empresa en crisis" según directrices comunitarias</li>
                    <li>Al corriente de obligaciones tributarias y frente a la Seguridad Social</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Sector Público</h4>
                  <ul className="space-y-1 list-disc list-inside">
                    <li>Administraciones Públicas españolas, organismos públicos vinculados o dependientes y universidades públicas</li>
                    <li>Presencia confirmada en el Inventario de Entes del Sector Público (INVENTE) con participación pública &gt;50%</li>
                  </ul>
                </div>
                <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="h-4 w-4 text-red-600" />
                    <span className="font-semibold text-red-700 dark:text-red-400 text-xs uppercase">Exclusiones</span>
                  </div>
                  <p className="text-xs text-red-800 dark:text-red-300">Quedan excluidas las <strong>Uniones Temporales de Empresas (UTEs)</strong>, los profesionales en situación de autoempleo (autónomos sin forma societaria mercantil) y las comunidades de bienes o patrimonios separados carentes de personalidad jurídica.</p>
                </div>
              </CardContent>
            </Card>

            {/* 2.2 Modalidades */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg">2.2. Modalidades de Integración y Límites de Financiación</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4">
                    <Badge className="mb-3 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">Rol Participante</Badge>
                    <p className="text-xs leading-relaxed mb-3">Incorporación efectiva de carácter básico. La entidad culmina su adhesión contractual al espacio de datos, obtiene una identidad criptográfica y configura su infraestructura con el objetivo de <strong className="text-foreground">consumir información y servicios</strong>.</p>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs"><span>Entidad Privada:</span><span className="font-bold text-foreground">hasta 15.000 €</span></div>
                      <div className="flex justify-between text-xs"><span>Administración Pública:</span><span className="font-bold text-foreground">hasta 25.000 €</span></div>
                    </div>
                  </div>
                  <div className="border rounded-lg p-4 border-primary/30 bg-primary/5">
                    <Badge className="mb-3 bg-primary text-primary-foreground">Rol Proveedor</Badge>
                    <p className="text-xs leading-relaxed mb-3">Incorporación efectiva avanzada. La entidad trasciende la posición de consumidor pasivo para <strong className="text-foreground">inyectar valor estratégico</strong> a la red, publicando al menos un producto de datos en el catálogo federado.</p>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs"><span>Entidad Privada:</span><span className="font-bold text-foreground">hasta 30.000 €</span></div>
                      <div className="flex justify-between text-xs"><span>Administración Pública:</span><span className="font-bold text-foreground">hasta 50.000 €</span></div>
                    </div>
                  </div>
                </div>

                {/* Tabla de topes */}
                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-xs border-collapse">
                    <thead>
                      <tr className="bg-muted">
                        <th className="border p-2 text-left">Concepto</th>
                        <th className="border p-2 text-center">Participante (Privada)</th>
                        <th className="border p-2 text-center">Participante (Pública)</th>
                        <th className="border p-2 text-center">Proveedor (Privada)</th>
                        <th className="border p-2 text-center">Proveedor (Pública)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border p-2 font-medium">Ayuda máxima</td>
                        <td className="border p-2 text-center">15.000 €</td>
                        <td className="border p-2 text-center">25.000 €</td>
                        <td className="border p-2 text-center">30.000 €</td>
                        <td className="border p-2 text-center">50.000 €</td>
                      </tr>
                      <tr>
                        <td className="border p-2 font-medium">Cobertura</td>
                        <td className="border p-2 text-center" colSpan={4}>100% de gastos elegibles</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h4 className="font-semibold text-foreground mt-4">Categorías de Gastos Elegibles</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="border rounded-lg p-3 text-center">
                    <Users className="h-5 w-5 mx-auto mb-2 text-primary" />
                    <span className="font-medium text-foreground text-xs">A. Costes de Personal Propio</span>
                  </div>
                  <div className="border rounded-lg p-3 text-center">
                    <Briefcase className="h-5 w-5 mx-auto mb-2 text-primary" />
                    <span className="font-medium text-foreground text-xs">B. Servicios Externos</span>
                  </div>
                  <div className="border rounded-lg p-3 text-center">
                    <Server className="h-5 w-5 mx-auto mb-2 text-primary" />
                    <span className="font-medium text-foreground text-xs">C. Licencias e Infraestructura</span>
                    <p className="text-[10px] text-muted-foreground mt-1">Cloud (Máx. 1 año)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* ==================== SECCIÓN 3 ==================== */}
        <section id="s3" className="mb-16 scroll-mt-20">
          <motion.div {...fadeInUp}>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Banknote className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">3. Ingeniería Financiera y Auditoría de la Justificación Económica</h2>
            </div>

            <Card className="mb-6">
              <CardContent className="pt-6 space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>El diseño de la convocatoria, al cimentarse sobre un pago único retrospectivo que requiere la finalización y liquidación previa del proyecto, traslada el esfuerzo probatorio inicial a las tesorerías y departamentos de contabilidad de las entidades solicitantes.</p>

                <Accordion type="multiple" className="w-full">
                  <AccordionItem value="3.1">
                    <AccordionTrigger className="text-sm font-semibold text-foreground">3.1. Elegibilidad Temporal y Conceptos Financiables</AccordionTrigger>
                    <AccordionContent className="space-y-3 text-sm text-muted-foreground">
                      <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-3">
                        <p className="text-xs"><strong>Premisa temporal inamovible:</strong> Únicamente son financiables gastos devengados con fecha posterior al <strong>16 de julio de 2025</strong> (publicación de las bases en el BOE). Gastos anteriores serán automáticamente excluidos.</p>
                      </div>
                      <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg p-3">
                        <p className="text-xs"><strong>IVA NO subvencionable:</strong> Bajo ninguna circunstancia es subvencionable. Debe ser detraído de las bases imponibles. Magnitudes en euros (€) con máximo 2 decimales.</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="3.1.1">
                    <AccordionTrigger className="text-sm font-semibold text-foreground">3.1.1. Costes de Personal Propio</AccordionTrigger>
                    <AccordionContent className="space-y-3 text-sm text-muted-foreground">
                      <p>Se permite imputar los costes salariales (nóminas y cotizaciones sociales obligatorias) de los ingenieros de datos, arquitectos de sistemas, desarrolladores backend, asesores legales de plantilla y gestores de proyecto directamente involucrados.</p>
                      <p>Es mandatorio implementar una metodología basada en la <strong className="text-foreground">dedicación proporcional efectiva</strong>. Las organizaciones deben instaurar sistemas de <strong className="text-foreground">registro horario (timesheets)</strong> fehacientes y auditables que vinculen las horas reportadas con tareas específicas del proyecto (ej: "mapeo de metadatos según ontología sectorial", "configuración del componente Eclipse Dataspace", "redacción de políticas ODRL").</p>
                      <p className="text-xs italic">La carencia de un sistema de control de presencia y trazabilidad de tareas imposibilitará la validación de estos importes ante los técnicos de Red.es.</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="3.1.2">
                    <AccordionTrigger className="text-sm font-semibold text-foreground">3.1.2. Servicios Profesionales y Consultoría Externa</AccordionTrigger>
                    <AccordionContent className="space-y-3 text-sm text-muted-foreground">
                      <p>Engloba los honorarios por contratación de terceros expertos: servicios de ingeniería software para APIs, asesoría jurídica RGPD en entornos federados, y servicios de firmas consultoras.</p>
                      <p>Un modelo viable contempla el cobro de <strong className="text-foreground">provisiones iniciales</strong> por la gestión de la adhesión vinculante (ej: 1.140 €) y <strong className="text-foreground">honorarios contingentes o success fees</strong> (ej: 3.000 €) condicionados a la consecución efectiva y al cobro de la ayuda.</p>
                      <p className="text-xs italic">Los contratos deben especificar que el objeto central del encargo es la conexión técnica y preparación de datos para el ecosistema elegible.</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="3.1.3">
                    <AccordionTrigger className="text-sm font-semibold text-foreground">3.1.3. Adquisición de Infraestructura, Licencias y Capacidades de Cómputo</AccordionTrigger>
                    <AccordionContent className="space-y-3 text-sm text-muted-foreground">
                      <p>Cubre desembolsos en capital físico o lógico necesarios para acomodar los datos: hardware específico (servidores), alojamiento en la nube (cloud computing), capacidad de procesamiento y herramientas de middleware.</p>
                      <p>Las licencias SaaS son plenamente elegibles con una restricción: la financiación únicamente cubrirá el coste equivalente a un <strong className="text-foreground">máximo de un año de suscripción</strong>, debiendo este importe estar pagado por anticipado dentro del periodo de elegibilidad.</p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* ==================== SECCIÓN 4 ==================== */}
        <section id="s4" className="mb-16 scroll-mt-20">
          <motion.div {...fadeInUp}>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Network className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">4. Arquitectura Tecnológica y Cumplimiento de la Soberanía del Dato</h2>
            </div>

            <Card className="mb-6">
              <CardContent className="pt-6 space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>No se financia el almacenamiento aislado de datos (silos), sino la creación de <strong className="text-foreground">ecosistemas federados</strong> bajo estándares europeos alineados con IDSA y Gaia-X.</p>

                <h4 className="font-semibold text-foreground">4.1. Topología del Conector y Separación de Planos Lógicos</h4>
                <p>Se requiere la instalación de conectores de código abierto certificados: <strong className="text-foreground">Eclipse Dataspace Components (EDC)</strong> o módulos FIWARE.</p>

                <div className="overflow-x-auto">
                  <table className="w-full text-xs border-collapse">
                    <thead>
                      <tr className="bg-muted">
                        <th className="border p-2 text-left">Componente</th>
                        <th className="border p-2 text-left">Función Estructural</th>
                        <th className="border p-2 text-left">Implicaciones para la Evidencia</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border p-2 font-medium">Sistemas Backend Internos</td>
                        <td className="border p-2">Repositorios primarios (ERP, Data Lakes, SQL/NoSQL, CRM) donde residen los datos originales.</td>
                        <td className="border p-2">Diagramas de red mostrando conexión segura con el nodo del conector sin exposición directa a internet.</td>
                      </tr>
                      <tr>
                        <td className="border p-2 font-medium">Plano de Control</td>
                        <td className="border p-2">Núcleo de soberanía. Gestiona negociaciones de contratos, orquestación de transferencias y validación de políticas (Management API, Signaling API, DSP API).</td>
                        <td className="border p-2">La Memoria Técnica debe explicar la configuración de estas APIs y cómo ejecuta los contratos digitales automatizados.</td>
                      </tr>
                      <tr>
                        <td className="border p-2 font-medium">Plano de Datos</td>
                        <td className="border p-2">Componente de ejecución responsable de la transferencia física, eficiente y encriptada de los datos.</td>
                        <td className="border p-2">Registros del sistema (logs) evidenciando transferencias exitosas tras controles criptográficos.</td>
                      </tr>
                      <tr>
                        <td className="border p-2 font-medium">Centro de Identidad Descentralizada (Identity Hub)</td>
                        <td className="border p-2">Infraestructura de confianza externa que verifica mediante protocolos criptográficos que el interlocutor remoto es quien afirma ser.</td>
                        <td className="border p-2">Documentación de cómo el conector interroga al Identity Hub para verificación de identidad.</td>
                      </tr>
                      <tr>
                        <td className="border p-2 font-medium">Catálogo Federado</td>
                        <td className="border p-2">Índice global donde se anuncian los productos de datos disponibles y sus condiciones de uso (no los datos en sí).</td>
                        <td className="border p-2">Capturas de la publicación efectiva en el catálogo federado.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h4 className="font-semibold text-foreground mt-4">4.2. Interoperabilidad Semántica, Metadatos y Políticas ODRL</h4>
                <p>La interoperabilidad semántica requiere que los datos intercambiados sean interpretables de forma automática por aplicaciones de terceros. Se valora el uso de estándares como <strong className="text-foreground">JSON-LD</strong> para contexto semántico preciso.</p>
                <p>Para Proveedores, se exige definir los derechos, deberes y obligaciones en código ejecutable usando el estándar <strong className="text-foreground">Open Digital Rights Language (ODRL)</strong> implementado dentro del conector Eclipse Dataspace. Se deben configurar restricciones temporales, geográficas, económicas o de uso.</p>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* ==================== SECCIÓN 5 ==================== */}
        <section id="s5" className="mb-16 scroll-mt-20">
          <motion.div {...fadeInUp}>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Leaf className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">5. Gobernanza Medioambiental: Principio DNSH</h2>
            </div>

            <Card className="mb-6">
              <CardContent className="pt-6 space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>Todos los fondos del PRTR están condicionados al cumplimiento del principio <strong className="text-foreground">"Do No Significant Harm" (DNSH)</strong> — no causar un perjuicio significativo al medioambiente. Su menosprecio es una de las principales fuentes de rechazo.</p>
                <p>El solicitante debe completar el <strong className="text-foreground">Anexo I (Cuestionario de Autoevaluación DNSH)</strong> y el <strong className="text-foreground">Anexo IV (Declaración DACI)</strong>, mapeando la infraestructura contra los 6 objetivos medioambientales del Reglamento (UE) 2020/852:</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    { icon: CloudCog, title: "1. Mitigación del Cambio Climático", desc: "Certificación de eficiencia energética de servidores y hardware (Directiva 2009/125/CE). Data Centers alineados con el Código de Conducta Europeo de Eficiencia Energética." },
                    { icon: Shield, title: "2. Adaptación al Cambio Climático", desc: "Evaluación de riesgo climático y vulnerabilidad física de instalaciones IT. Propuestas de resiliencia frente a fenómenos adversos." },
                    { icon: Workflow, title: "3. Economía Circular (Reciclaje)", desc: "Hardware sin sustancias altamente preocupantes (REACH). Equipos canalizados a gestores autorizados para reutilización y recuperación al fin de vida." },
                    { icon: Globe, title: "4-6. Agua, Contaminación y Biodiversidad", desc: "Cumplimiento de normativas de uso sostenible del agua, prevención de contaminación y protección de ecosistemas." },
                  ].map((item, i) => (
                    <div key={i} className="border rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <item.icon className="h-4 w-4 text-green-600" />
                        <span className="font-medium text-foreground text-xs">{item.title}</span>
                      </div>
                      <p className="text-xs">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg p-4 mt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="h-4 w-4 text-red-600" />
                    <span className="font-semibold text-red-700 dark:text-red-400 text-xs uppercase">Exclusiones Taxativas</span>
                  </div>
                  <p className="text-xs text-red-800 dark:text-red-300">Están vetadas entidades cuya actividad troncal orbite en torno a: <strong>refinerías de petróleo, extracción/procesamiento de combustibles fósiles, generación termoeléctrica basada en carbón, u operación de vertederos e incineradoras</strong> que no cumplan excepciones de valorización energética.</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* ==================== SECCIÓN 6 ==================== */}
        <section id="s6" className="mb-16 scroll-mt-20">
          <motion.div {...fadeInUp}>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/10 p-2 rounded-lg">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">6. Metodología de Conformación Documental y Evidencias Técnicas</h2>
            </div>

            <Card className="mb-6">
              <CardContent className="pt-6 space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>La Cuenta Justificativa Simplificada demanda cuatro bloques de evidencia fundamentales:</p>

                <Accordion type="multiple" className="w-full">
                  <AccordionItem value="6.1">
                    <AccordionTrigger className="text-sm font-semibold text-foreground">6.1. Memoria de Actuación Justificativa</AccordionTrigger>
                    <AccordionContent className="space-y-3 text-sm text-muted-foreground">
                      <p>Documento narrativo exhaustivo en formato PDF. Debe desarrollar los siguientes epígrafes:</p>
                      <ul className="space-y-2 list-disc list-inside">
                        <li><strong className="text-foreground">Resumen Ejecutivo y Caso de Uso:</strong> Viabilidad económica, modelo de negocio, caso de uso estratégico (ej: trazabilidad logística, modelos predictivos en salud).</li>
                        <li><strong className="text-foreground">Armazón Regulatorio y Protección de Datos:</strong> Cumplimiento RGPD, seudonimización, cifrado de payloads, anonimización estadística.</li>
                        <li><strong className="text-foreground">Auditoría de Preparación de Datos:</strong> Relato cronológico de herramientas ETL, mapeos relacionales, limpieza de registros (data cleansing), esquema de versionado.</li>
                        <li><strong className="text-foreground">Cartografía de Conexión Técnica:</strong> Diagrama de contexto arquitectónico (sistemas propios → conector EDC/FIWARE → Identity Hub → catálogo federado). Inventario de software/versiones/hardware. Logs de conexión exitosa e incidencias.</li>
                        <li><strong className="text-foreground">Cuadro de Mando Financiero:</strong> Desglose granular coherente con facturas y timesheets: personal propio, consultoría, licencias.</li>
                        <li><strong className="text-foreground">Mecanismos de Difusión y Publicidad:</strong> Capturas de publicidad del PRTR con logotipos preceptivos de la UE y el Plan de Recuperación.</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="6.2">
                    <AccordionTrigger className="text-sm font-semibold text-foreground">6.2. Capturas de Pantalla Sensibles al Tiempo</AccordionTrigger>
                    <AccordionContent className="space-y-3 text-sm text-muted-foreground">
                      <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-3">
                        <p className="text-xs"><strong>Requisito obligatorio:</strong> En las capturas debe ser nítidamente visible el <strong>reloj y calendario del sistema operativo</strong>.</p>
                      </div>
                      <p><strong className="text-foreground">Participantes básicos:</strong> Evidencia de registro efectivo mostrando nombre del espacio de datos, usuario corporativo e identificador único.</p>
                      <p><strong className="text-foreground">Proveedores (30k/50k €):</strong> Además deben capturar la visualización pública del dataset en el catálogo federado, mostrando: identificador único, metainformación semántica, políticas ODRL, y que la información es accesible por terceros.</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="6.3">
                    <AccordionTrigger className="text-sm font-semibold text-foreground">6.3. Contrato de Adhesión y Declaración de Evidencias</AccordionTrigger>
                    <AccordionContent className="space-y-3 text-sm text-muted-foreground">
                      <p><strong className="text-foreground">Contrato de Adhesión:</strong> Archivo digital (máximo <strong>2 MB</strong>) que vincula al solicitante con el Promotor del Espacio de Datos. Debe estipular la identidad de las partes, fecha de inicio, vigencia temporal y que el objeto es la adhesión operativa al espacio de datos.</p>
                      <p><strong className="text-foreground">Declaración de Evidencias de Registro y Publicación de Datos:</strong> Documento normalizado con <strong>firma electrónica mancomunada</strong> del apoderado del solicitante y del representante legal del Promotor. Certifica ante Red.es que los procesos de registro, asignación de identidad y publicación se ejecutaron correctamente.</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="6.4">
                    <AccordionTrigger className="text-sm font-semibold text-foreground">6.4. Vídeo de Evidencias (Recomendado)</AccordionTrigger>
                    <AccordionContent className="space-y-3 text-sm text-muted-foreground">
                      <p>Grabación de pantalla ininterrumpida (screencasting) que trace el ciclo de vida completo:</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Autenticación segura (login) a través del nodo criptográfico</li>
                        <li>Navegación por áreas privadas del portal de gestión</li>
                        <li>Acceso al panel de control del catálogo</li>
                        <li>Visualización y consulta efectiva del producto de datos publicado</li>
                      </ul>
                      <p className="text-xs italic">El vídeo o credenciales temporales para auditor deben mantenerse disponibles hasta la resolución final de concesión.</p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* ==================== SECCIÓN 7 ==================== */}
        <section id="s7" className="mb-16 scroll-mt-20">
          <motion.div {...fadeInUp}>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">7. Ecosistemas de Destino: La Lista de Confianza del CRED</h2>
            </div>

            <Card className="mb-6">
              <CardContent className="pt-6 space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>La adhesión debe realizarse exclusivamente sobre espacios de datos que ostenten el respaldo oficial del Gobierno de España, auditados por el <strong className="text-foreground">Centro de Referencia de Espacios de Datos (CRED)</strong> mediante su <strong className="text-foreground">Lista de Confianza de Espacios de Datos</strong>.</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border rounded-lg p-4">
                    <Badge className="mb-2 bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">Salud</Badge>
                    <h4 className="font-semibold text-foreground text-sm mb-1">BIGAN (Aragón)</h4>
                    <p className="text-xs">Espacio multimodal biomédico y genómico. Datos clínicos, narrativas médicas, imágenes radiológicas, información genómica. Requiere certificación ENS Nivel Alto y seudonimización en origen.</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <Badge className="mb-2 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">Agroalimentario</Badge>
                    <h4 className="font-semibold text-foreground text-sm mb-1">CropDataSpace</h4>
                    <p className="text-xs">Compartición segura de datos biológicos, genéticos, microbianos y de sensorización agraria. Requiere alineamiento semántico con ontologías agrarias.</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <Badge className="mb-2 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">Industria / Movilidad</Badge>
                    <h4 className="font-semibold text-foreground text-sm mb-1">C-SpAICe (País Vasco)</h4>
                    <p className="text-xs">Sector automoción basado en Catena-X. Demanda adaptación profunda de sistemas ERP para trazabilidad soberana de componentes en la cadena de suministro internacional.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* ==================== SECCIÓN 8 ==================== */}
        <section id="s8" className="mb-16 scroll-mt-20">
          <motion.div {...fadeInUp}>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/10 p-2 rounded-lg">
                <ScrollText className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">8. Matriz Integral para el Cuestionario de Preparación y Auditoría</h2>
            </div>

            <p className="text-sm text-muted-foreground mb-6">
              Instrumento que opera simultáneamente como filtro de elegibilidad y mecanismo de extracción sistemática de datos. Dividido en <strong className="text-foreground">5 módulos especializados</strong> dirigidos a los departamentos corporativos competentes.
            </p>

            <Accordion type="multiple" className="w-full space-y-4">
              {/* Módulo I */}
              <AccordionItem value="m1" className="border rounded-lg">
                <AccordionTrigger className="px-4 text-sm font-semibold text-foreground">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">Módulo I</Badge>
                    Auditoría Administrativa, Jurídica y Financiera
                    <span className="text-xs text-muted-foreground ml-2">(Dirección General / Legal)</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs border-collapse">
                      <thead>
                        <tr className="bg-muted">
                          <th className="border p-2 text-left">Elemento Probatorio</th>
                          <th className="border p-2 text-left">Formato y Características</th>
                          <th className="border p-2 text-left">Justificación Normativa</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-2 font-medium">Identidad y Fiscalidad</td>
                          <td className="border p-2">NIF oficial, domicilio fiscal en la UE, código de alta censal AEAT.</td>
                          <td className="border p-2">Demostrar personalidad jurídica y actividad económica lícita.</td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-medium">Poderes de Representación Notariales</td>
                          <td className="border p-2">Copia digitalizada PDF de escrituras de apoderamiento.</td>
                          <td className="border p-2">Acreditar que el firmante tiene capacidad legal para obligar económicamente a la mercantil.</td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-medium">Certificados AEAT / TGSS</td>
                          <td className="border p-2">Certificados telemáticos al corriente de pagos (validez &lt;6 meses).</td>
                          <td className="border p-2">Obligatorio por la Ley General de Subvenciones.</td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-medium">Certificado Bancario (IBAN)</td>
                          <td className="border p-2">Certificado bancario oficial con sello de la entidad financiera.</td>
                          <td className="border p-2">Identificar cuenta para el reembolso de Red.es.</td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-medium">Declaración Responsable</td>
                          <td className="border p-2">Documento firmado digitalmente: no crisis empresarial, ausencia de conflicto de interés (DACI).</td>
                          <td className="border p-2">Compromiso formal del PRTR frente al fraude y exigencia de minimis.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Módulo II */}
              <AccordionItem value="m2" className="border rounded-lg">
                <AccordionTrigger className="px-4 text-sm font-semibold text-foreground">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">Módulo II</Badge>
                    Definición Estratégica y Alineación Funcional
                    <span className="text-xs text-muted-foreground ml-2">(Gerencia / Operaciones)</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs border-collapse">
                      <thead>
                        <tr className="bg-muted">
                          <th className="border p-2 text-left">Elemento Probatorio</th>
                          <th className="border p-2 text-left">Formato y Características</th>
                          <th className="border p-2 text-left">Justificación Normativa</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-2 font-medium">Determinación de Roles</td>
                          <td className="border p-2">Declaración explícita: consumo pasivo vs. inyección activa de datos.</td>
                          <td className="border p-2">Determina presupuesto máximo (15k/25k vs 30k/50k) y complejidad del expediente.</td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-medium">Descripción del Caso de Uso</td>
                          <td className="border p-2">Memoria detallando oportunidad de compartición, beneficio cadena de valor y modelo de negocio.</td>
                          <td className="border p-2">Se integra en la sección "Resumen Ejecutivo y Caso de Uso" de la Memoria.</td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-medium">Análisis de Impacto RGPD</td>
                          <td className="border p-2">Documentación del DPO sobre procesos de seudonimización o anonimización.</td>
                          <td className="border p-2">Preceptivo para "Requisitos Jurídicos y Regulatorios", esencial en espacios sensibles (ej: BIGAN).</td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-medium">Selección del Ecosistema de Destino</td>
                          <td className="border p-2">Identificación del nombre oficial del ecosistema en la Lista de Confianza del CRED.</td>
                          <td className="border p-2">Validación imperativa para confirmar la elegibilidad del destino.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Módulo III */}
              <AccordionItem value="m3" className="border rounded-lg">
                <AccordionTrigger className="px-4 text-sm font-semibold text-foreground">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">Módulo III</Badge>
                    Ingeniería de Datos, Arquitectura e Interoperabilidad Semántica
                    <span className="text-xs text-muted-foreground ml-2">(Sistemas / IT)</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs border-collapse">
                      <thead>
                        <tr className="bg-muted">
                          <th className="border p-2 text-left">Elemento Probatorio</th>
                          <th className="border p-2 text-left">Formato y Características</th>
                          <th className="border p-2 text-left">Justificación Normativa</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-2 font-medium">Cartografía Topológica de Red</td>
                          <td className="border p-2">Diagramas de arquitectura (Visio/UML) mostrando repositorios backend, DMZ, conectores, Identity Hub.</td>
                          <td className="border p-2">Insustituible para la sección "Conexión Técnica". Demuestra separación Plano de Datos y Control.</td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-medium">Certificación del Conector</td>
                          <td className="border p-2">Especificaciones declarando uso de Eclipse Dataspace Components, FIWARE, etc.</td>
                          <td className="border p-2">Las bases exigen operar bajo conectores de código abierto IDS/Gaia-X.</td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-medium">Codificación ODRL de Políticas</td>
                          <td className="border p-2">Fragmentos de código u ontologías de restricciones de uso (Usage Control).</td>
                          <td className="border p-2">Requisito troncal para Proveedores. Demuestra la transposición de reglas legales a código ejecutable.</td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-medium">Mapeo de Interoperabilidad Semántica</td>
                          <td className="border p-2">Relación de procesos de limpieza, uso de esquemas de metadatos (XML/JSON-LD).</td>
                          <td className="border p-2">Garantiza que los conjuntos compartidos cumplen interoperabilidad semántica requerida.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Módulo IV */}
              <AccordionItem value="m4" className="border rounded-lg">
                <AccordionTrigger className="px-4 text-sm font-semibold text-foreground">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">Módulo IV</Badge>
                    Auditoría Contable y Liquidación Presupuestaria
                    <span className="text-xs text-muted-foreground ml-2">(Finanzas / RRHH)</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs border-collapse">
                      <thead>
                        <tr className="bg-muted">
                          <th className="border p-2 text-left">Elemento Probatorio</th>
                          <th className="border p-2 text-left">Formato y Características</th>
                          <th className="border p-2 text-left">Justificación Normativa</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-2 font-medium">Timesheets (Trazabilidad Horaria)</td>
                          <td className="border p-2">Plantillas de registro horario firmadas, desglosando jornada y vinculando horas a tareas del proyecto.</td>
                          <td className="border p-2">Único medio admitido para justificar la proporción del gasto salarial de personal propio.</td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-medium">Facturas y Justificantes Bancarios</td>
                          <td className="border p-2">Facturas definitivas (post-16 julio 2025) de consultorías externas, adjuntando transferencias SWIFT/SEPA.</td>
                          <td className="border p-2">Comprobación de que el trabajo subcontratado está concluido y abonado, incluyendo success fees.</td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-medium">Licencias SaaS e Infraestructura Cloud</td>
                          <td className="border p-2">Contratos y facturas cloud demostrando suscripción ≤1 año pagada por anticipado.</td>
                          <td className="border p-2">Validación de que el gasto se ciñe a la infraestructura directa del conector y catálogo.</td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-medium">Cuadro de Mando Financiero</td>
                          <td className="border p-2">Matriz Excel detallando distribución de costes por categoría.</td>
                          <td className="border p-2">Coherencia al céntimo con facturas presentadas.</td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-medium">Detracción Fiscal (Exclusión IVA)</td>
                          <td className="border p-2">Extracción sistemática del IVA y otros impuestos indirectos de cada factura.</td>
                          <td className="border p-2">Mandato innegociable que impide financiación pública de impuestos recuperables.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Módulo V */}
              <AccordionItem value="m5" className="border rounded-lg">
                <AccordionTrigger className="px-4 text-sm font-semibold text-foreground">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">Módulo V</Badge>
                    Conformación de la Prueba Ambiental y Plataforma
                    <span className="text-xs text-muted-foreground ml-2">(Operaciones Conjuntas)</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs border-collapse">
                      <thead>
                        <tr className="bg-muted">
                          <th className="border p-2 text-left">Elemento Probatorio</th>
                          <th className="border p-2 text-left">Formato y Características</th>
                          <th className="border p-2 text-left">Justificación Normativa</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-2 font-medium">Dossier DNSH</td>
                          <td className="border p-2">Cuestionario Anexo I, certificados de eficiencia energética (Directiva 2009/125/CE), política RAEE.</td>
                          <td className="border p-2">Imperativo del PRTR. Expediente sin estas especificaciones incurre en causa de rechazo inmediata.</td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-medium">Contrato de Adhesión + Declaración de Evidencias</td>
                          <td className="border p-2">PDF (max 2MB) con firmas electrónicas conjuntas (Solicitante y Promotor).</td>
                          <td className="border p-2">Certifica el vínculo interinstitucional y la Declaración de Evidencias de Registro obligatoria.</td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-medium">Auditoría Visual (Screenshots)</td>
                          <td className="border p-2">Capturas inalterables exhibiendo: fecha/reloj del SO, usuario logado, nombre del espacio, ID del dataset.</td>
                          <td className="border p-2">Evidencia empírica de operatividad ineludible para probar transaccionalidad real.</td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-medium">Vídeo de Trazabilidad</td>
                          <td className="border p-2">Archivo de screencasting del ciclo completo de uso de la plataforma.</td>
                          <td className="border p-2">Material opcional pero críticamente recomendado. Otorga confianza visual definitiva al auditor.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </section>

        {/* ==================== SECCIÓN 9 ==================== */}
        <section id="s9" className="mb-16 scroll-mt-20">
          <motion.div {...fadeInUp}>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">9. Conclusiones y Claves de Eficiencia Operativa</h2>
            </div>

            <Card className="mb-6">
              <CardContent className="pt-6 space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>El programa "Kit Espacios de Datos" cristaliza una evolución cualitativa en el panorama de las subvenciones tecnológicas europeas. No se trata de un mecanismo de inyección de liquidez orientado a la modernización aislada de procesos internos, sino de un <strong className="text-foreground">vector estratégico que premia exclusivamente la interoperabilidad compleja, la madurez semántica y la cesión segura de soberanía en entornos B2B descentralizados</strong>.</p>

                <p>La arquitectura de su convocatoria — régimen de concurrencia no competitiva y cuenta justificativa concurrente y simplificada — <strong className="text-foreground">elimina el margen para la iteración burocrática</strong>. Todo el esfuerzo de diseño legal, despliegue del software de conexión, alineamiento normativo con el RGPD y el principio DNSH, y el desembolso financiero deben estar plenamente cristalizados y ejecutados antes de la conformación del expediente.</p>

                <p>La viabilidad del éxito reside en la aplicación sistemática y exhaustiva del marco de recolección de evidencias estructurado en este documento. La sincronización perfecta entre la consultora especializada y las diversas áreas operativas (legal, ingeniería, finanzas y dirección) a través del cuestionario de auditoría delineado, garantiza la construcción de un <strong className="text-foreground">expediente blindado frente a requerimientos técnicos o de reintegro</strong>.</p>

                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mt-4">
                  <p className="text-sm text-foreground font-medium mb-2">Al documentar irrefutablemente:</p>
                  <ul className="space-y-1 text-xs list-disc list-inside">
                    <li>La operación del Plano de Control de los conectores IDS/Gaia-X</li>
                    <li>La traza horaria de los costes laborales</li>
                    <li>El respeto escrupuloso a la taxonomía verde europea</li>
                    <li>La visibilidad empírica de los activos en los catálogos federados de la Lista de Confianza</li>
                  </ul>
                  <p className="text-sm text-foreground font-semibold mt-3">Las organizaciones podrán catalizar la financiación de hasta 50.000 euros, integrándose en la vanguardia de la economía continental del dato.</p>
                </div>
              </CardContent>
            </Card>

            {/* CTA Final */}
            <div className="text-center mt-12">
              <motion.div animate={{ scale: [1, 1.03, 1] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                <Badge className="bg-amber-500 text-white hover:bg-amber-500 mb-4 text-sm px-4 py-1.5">
                  <Clock className="h-3.5 w-3.5 mr-1.5" />
                  Plazas limitadas — Orden de llegada
                </Badge>
              </motion.div>
              <h3 className="text-2xl font-bold text-foreground mb-4">¿Listo para preparar tu solicitud?</h3>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto text-sm">
                PROCUREDATA gestiona la tramitación completa de tu solicitud Kit Espacio de Datos, incluyendo la preparación de evidencias, memoria técnica y conformación documental.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild size="lg" className="font-semibold">
                  <Link to="/inscripcion-kit-espacio-datos">Solicitar Inscripción por 250€/mes</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/condiciones-kit-espacio-datos">Ver Condiciones</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
