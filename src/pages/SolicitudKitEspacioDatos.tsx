import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowLeft, Clock, Shield, Users, FileText, Building2, 
  ChevronDown, BookOpen, AlertTriangle, Briefcase, Server, 
  Database, Lock, Cpu, Eye, Upload, Award, Globe, Leaf, 
  CheckCircle2, FileCheck, Video, Camera, Scale, Landmark,
  BadgeCheck, Layers, Network, Binary, ScrollText, Banknote,
  HardDrive, CloudCog, Workflow, Search, GraduationCap,
  CheckSquare, ClipboardList, Key, Fingerprint, Code2, FileCode,
  MonitorPlay, Receipt, Recycle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { KitSolicitudChat } from "@/components/kit-solicitud/KitSolicitudChat";
import logoKitEspacioDatos from "@/assets/logo-kit-espacio-datos.jpg";
import logoGobiernoRedEs from "@/assets/logo-gobierno-red-es.jpg";
import cartografiaRed from "@/assets/kit-evidencias/cartografia-red.png";
import odrlMapeo from "@/assets/kit-evidencias/odrl-mapeo.jpg";
import logTerminal from "@/assets/kit-evidencias/log-terminal.png";
import pageGuiaSolicitante from "@/assets/kit-evidencias/page-guia-solicitante.jpg";
import pageOdrlArquitectura from "@/assets/kit-evidencias/page-odrl-arquitectura.jpg";
import pageLogTerminal from "@/assets/kit-evidencias/page-log-terminal.jpg";
import pageCartografiaTecnica from "@/assets/kit-evidencias/page-cartografia-tecnica.jpg";

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
  { id: "s4b", label: "4B. Guía Práctica del Solicitante" },
  { id: "s4c", label: "4C. Topología Conector Pontus-X" },
  { id: "s4d", label: "4D. Identity Hub y Gaia-X" },
  { id: "s4e", label: "4E. Interoperabilidad y ODRL" },
  { id: "s4f", label: "4F. Evidencias Dinámicas" },
  { id: "s4g", label: "4G. Justificación Financiera Avanzada" },
  { id: "s5", label: "5. Principio DNSH" },
  { id: "s6", label: "6. Conformación Documental" },
  { id: "s7", label: "7. Ecosistemas Elegibles" },
  { id: "s8", label: "8. Cuestionario de Auditoría" },
  { id: "s9", label: "9. Conclusiones" },
];

export default function SolicitudKitEspacioDatos() {
  const [checklist, setChecklist] = useState<Record<string, boolean>>({});

  const toggleCheck = (key: string) => {
    setChecklist(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const checklistItems = [
    "Definir el caso de uso y seleccionar los datos a compartir",
    "Habilitar la conexión segura (DMZ) y proporcionar un diagrama de red",
    "Entregar los datos limpios y un diccionario de columnas",
    "Definir las reglas de acceso comercial y privacidad",
    "Aportar datos legales para la identidad Gaia-X y crear Wallet Web3",
    "Participar en la grabación del vídeo demostrativo",
    "Firmar el Contrato de Adhesión y la Declaración de Evidencias",
    "Aportar Timesheets y certificados de eficiencia energética",
    "Asegurar que todas las facturas están pagadas (sin IVA)",
  ];

  const completedCount = Object.values(checklist).filter(Boolean).length;

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
            Guía completa paso a paso para preparar tu solicitud y justificación del Kit Espacio de Datos con éxito. Incluye evidencias técnicas, guía práctica para solicitantes y chat con IA integrado.
          </p>
        </motion.div>

        {/* Navigation */}
        <motion.div {...fadeInUp} className="mb-12">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2"><BookOpen className="h-5 w-5" /> Índice de Contenidos (15 Secciones)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {sectionNav.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => scrollTo(s.id)}
                    className={`text-left text-sm px-3 py-2 rounded-md hover:bg-muted transition-colors text-foreground ${s.id.includes('4') && s.id !== 's4' ? 'pl-6 text-xs border-l-2 border-primary/30' : ''}`}
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
                      <p>Es mandatorio implementar una metodología basada en la <strong className="text-foreground">dedicación proporcional efectiva</strong>. Las organizaciones deben instaurar sistemas de <strong className="text-foreground">registro horario (timesheets)</strong> fehacientes y auditables que vinculen las horas reportadas con tareas específicas del proyecto.</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="3.1.2">
                    <AccordionTrigger className="text-sm font-semibold text-foreground">3.1.2. Servicios Profesionales y Consultoría Externa</AccordionTrigger>
                    <AccordionContent className="space-y-3 text-sm text-muted-foreground">
                      <p>Engloba los honorarios por contratación de terceros expertos: servicios de ingeniería software para APIs, asesoría jurídica RGPD en entornos federados, y servicios de firmas consultoras.</p>
                      <p>Un modelo viable contempla el cobro de <strong className="text-foreground">provisiones iniciales</strong> por la gestión de la adhesión vinculante y <strong className="text-foreground">honorarios contingentes o success fees</strong> condicionados a la consecución efectiva y al cobro de la ayuda.</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="3.1.3">
                    <AccordionTrigger className="text-sm font-semibold text-foreground">3.1.3. Adquisición de Infraestructura, Licencias y Capacidades de Cómputo</AccordionTrigger>
                    <AccordionContent className="space-y-3 text-sm text-muted-foreground">
                      <p>Cubre desembolsos en capital físico o lógico necesarios: hardware específico (servidores), alojamiento en la nube (cloud computing), capacidad de procesamiento y herramientas de middleware.</p>
                      <p>Las licencias SaaS son plenamente elegibles con una restricción: la financiación únicamente cubrirá el coste equivalente a un <strong className="text-foreground">máximo de un año de suscripción</strong>.</p>
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
                        <td className="border p-2">Núcleo de soberanía. Gestiona negociaciones de contratos, orquestación de transferencias y validación de políticas.</td>
                        <td className="border p-2">La Memoria Técnica debe explicar la configuración de APIs y cómo ejecuta los contratos digitales automatizados.</td>
                      </tr>
                      <tr>
                        <td className="border p-2 font-medium">Plano de Datos</td>
                        <td className="border p-2">Componente de ejecución responsable de la transferencia física, eficiente y encriptada de los datos.</td>
                        <td className="border p-2">Registros del sistema (logs) evidenciando transferencias exitosas tras controles criptográficos.</td>
                      </tr>
                      <tr>
                        <td className="border p-2 font-medium">Centro de Identidad Descentralizada</td>
                        <td className="border p-2">Infraestructura de confianza externa que verifica mediante protocolos criptográficos la identidad del interlocutor remoto.</td>
                        <td className="border p-2">Documentación de cómo el conector interroga al Identity Hub para verificación de identidad.</td>
                      </tr>
                      <tr>
                        <td className="border p-2 font-medium">Catálogo Federado</td>
                        <td className="border p-2">Índice global donde se anuncian los productos de datos disponibles y sus condiciones de uso.</td>
                        <td className="border p-2">Capturas de la publicación efectiva en el catálogo federado.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h4 className="font-semibold text-foreground mt-4">4.2. Interoperabilidad Semántica, Metadatos y Políticas ODRL</h4>
                <p>La interoperabilidad semántica requiere que los datos intercambiados sean interpretables de forma automática por aplicaciones de terceros. Se valora el uso de estándares como <strong className="text-foreground">JSON-LD</strong> para contexto semántico preciso.</p>
                <p>Para Proveedores, se exige definir los derechos, deberes y obligaciones en código ejecutable usando el estándar <strong className="text-foreground">Open Digital Rights Language (ODRL)</strong> implementado dentro del conector Eclipse Dataspace.</p>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* ==================== SECCIÓN 4B: GUÍA PRÁCTICA ==================== */}
        <section id="s4b" className="mb-16 scroll-mt-20">
          <motion.div {...fadeInUp}>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/10 p-2 rounded-lg">
                <ClipboardList className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">4B. Guía Práctica para el Solicitante — Qué Debe Hacer su Empresa</h2>
            </div>

            <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
              <p className="text-sm text-blue-800 dark:text-blue-300">
                <strong>Esta sección está dirigida al solicitante no técnico.</strong> Mientras que Procuredata se encarga de toda la programación compleja, el despliegue de servidores y la generación de registros informáticos (logs), su organización necesita colaborar en áreas específicas de su negocio. A continuación se detalla paso a paso qué actividades debe realizar.
              </p>
            </div>

            {/* Screenshot del documento */}
            <Card className="mb-6 overflow-hidden">
              <img src={pageGuiaSolicitante} alt="Guía Práctica para Solicitantes - Documento oficial" className="w-full object-contain rounded-t-lg" />
              <CardContent className="pt-4">
                <p className="text-xs text-muted-foreground italic">Portada del documento "Guía Práctica para Solicitantes: Preparación de Evidencias Técnicas del Kit Espacios de Datos en Pontus-X con Procuredata"</p>
              </CardContent>
            </Card>

            {/* Tarjetas por departamento */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm flex items-center gap-2"><Server className="h-4 w-4 text-blue-500" /> Equipo IT / Sistemas</CardTitle>
                </CardHeader>
                <CardContent className="text-xs text-muted-foreground space-y-2">
                  <p><strong className="text-foreground">Acceso Seguro (DMZ/Firewall):</strong> Habilitar una conexión segura para que el conector pueda "leer" los datos sin exponer el resto de servidores a Internet.</p>
                  <p><strong className="text-foreground">Diagrama de Red:</strong> Red.es exige un esquema visual. Su equipo informático debe proporcionar un diagrama básico (formato Visio, UML o similar) que muestre cómo sus servidores internos se conectan con el nodo de Pontus-X.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm flex items-center gap-2"><Scale className="h-4 w-4 text-purple-500" /> Dirección / Legal</CardTitle>
                </CardHeader>
                <CardContent className="text-xs text-muted-foreground space-y-2">
                  <p><strong className="text-foreground">Caso de Uso:</strong> Breve resumen de qué datos va a compartir y con qué objetivo comercial o sectorial.</p>
                  <p><strong className="text-foreground">Condiciones de Acceso:</strong> ¿Quién puede acceder? ¿Solo empresas europeas? ¿Tiene coste? ¿Durante cuánto tiempo?</p>
                  <p><strong className="text-foreground">Restricciones:</strong> ¿Hay datos sensibles que deban ser seudonimizados o anonimizados?</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm flex items-center gap-2"><Database className="h-4 w-4 text-green-500" /> Datos / Operaciones</CardTitle>
                </CardHeader>
                <CardContent className="text-xs text-muted-foreground space-y-2">
                  <p><strong className="text-foreground">Limpieza de Datos (Data Cleansing):</strong> Seleccionar la base de datos o archivo (Excel, CSV, etc.) que va a compartir y asegurarse de que no contiene errores, celdas vacías corruptas o información personal no autorizada.</p>
                  <p><strong className="text-foreground">Diccionario de Datos:</strong> Documento simple (puede ser un Excel) donde explique qué significa cada columna del archivo.</p>
                  <p><strong className="text-foreground">Aprobación de la Política ODRL:</strong> Dar el "OK" definitivo a cómo quedan configuradas sus restricciones antes de publicarlas.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm flex items-center gap-2"><Receipt className="h-4 w-4 text-amber-500" /> Contabilidad / RRHH</CardTitle>
                </CardHeader>
                <CardContent className="text-xs text-muted-foreground space-y-2">
                  <p><strong className="text-foreground">Timesheets:</strong> Partes de horas firmados detallando qué día y cuántas horas dedicó cada empleado a tareas exclusivas del proyecto.</p>
                  <p><strong className="text-foreground">Facturas Pagadas:</strong> Todas las facturas deben estar pagadas mediante transferencia bancaria antes de la solicitud.</p>
                  <p><strong className="text-foreground">Certificados DNSH:</strong> Certificados de eficiencia energética de servidores y firma del Anexo medioambiental.</p>
                </CardContent>
              </Card>
            </div>

            {/* Administración / Legal - Identidad Gaia-X */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2"><Fingerprint className="h-5 w-5" /> Identidad Digital Gaia-X — Lo que necesita su equipo de Administración/Legal</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-3">
                <p>En los espacios de datos europeos no existe el anonimato. Para participar, su empresa necesita una <strong className="text-foreground">identidad digital certificada</strong>, conocida como Credencial Verificable de Gaia-X.</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li><strong className="text-foreground">Datos Registrales Exactos:</strong> Nombre legal exacto, dirección fiscal completa y número de registro (NIF o IVA intracomunitario).</li>
                  <li><strong className="text-foreground">Poderes de Representación:</strong> Copia de escrituras que demuestren que la persona firmante tiene poderes en la empresa.</li>
                  <li><strong className="text-foreground">Certificados al corriente:</strong> Certificados actualizados de la Agencia Tributaria y la Seguridad Social.</li>
                  <li><strong className="text-foreground">Creación de Wallet (Cartera Digital):</strong> Videollamada de 15 minutos para que el representante legal instale una extensión en su navegador (una Wallet Web3) y firme criptográficamente la creación de su identidad. Es un proceso sencillo, similar a usar un certificado digital de la FNMT.</li>
                </ul>
              </CardContent>
            </Card>

            {/* Checklist Interactivo */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <CheckSquare className="h-5 w-5" /> 
                  Checklist del Solicitante
                  <Badge variant="outline" className="ml-2">{completedCount}/{checklistItems.length}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {checklistItems.map((item, i) => (
                    <button
                      key={i}
                      onClick={() => toggleCheck(`check-${i}`)}
                      className={`w-full flex items-center gap-3 text-left p-3 rounded-lg border transition-colors ${checklist[`check-${i}`] ? 'bg-green-50 dark:bg-green-950/30 border-green-300 dark:border-green-800' : 'hover:bg-muted/50'}`}
                    >
                      <CheckCircle2 className={`h-5 w-5 shrink-0 ${checklist[`check-${i}`] ? 'text-green-600' : 'text-muted-foreground/30'}`} />
                      <span className={`text-sm ${checklist[`check-${i}`] ? 'text-green-800 dark:text-green-300 line-through' : 'text-foreground'}`}>{item}</span>
                    </button>
                  ))}
                </div>
                {completedCount === checklistItems.length && (
                  <div className="mt-4 bg-green-50 dark:bg-green-950/30 border border-green-300 dark:border-green-800 rounded-lg p-3 text-center">
                    <p className="text-sm font-semibold text-green-700 dark:text-green-300">✅ ¡Checklist completo! Su organización está lista para la solicitud.</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* ==================== SECCIÓN 4C: TOPOLOGÍA CONECTOR ==================== */}
        <section id="s4c" className="mb-16 scroll-mt-20">
          <motion.div {...fadeInUp}>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Layers className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">4C. Topología del Conector y Separación de Planos Lógicos en Pontus-X</h2>
            </div>

            <Card className="mb-6">
              <CardContent className="pt-6 space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>La normativa del Kit Espacios de Datos exige taxativamente la demostración de una <strong className="text-foreground">separación estructural insoslayable</strong> entre el control del intercambio y la transmisión física de los datos. La arquitectura financiable no puede basarse en un simple intercambio de archivos mediante protocolos de transferencia tradicionales o repositorios centralizados en la nube.</p>
                
                <p>El diseño técnico debe evidenciar el despliegue de <strong className="text-foreground">nodos conectores</strong> que dividen sus operaciones de forma estricta en un <strong className="text-foreground">Plano de Control (Control Plane)</strong> y un <strong className="text-foreground">Plano de Datos (Data Plane)</strong>. Aunque Pontus-X no utiliza la base de código Java exacta del proyecto Eclipse Dataspace Components (EDC), su arquitectura nativa Web3 implementa esta misma bifurcación funcional con un grado de inmutabilidad criptográfica superior, satisfaciendo plenamente los requerimientos de IDSA.</p>
              </CardContent>
            </Card>

            {/* Tabla de mapeo arquitectónico */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg">Mapeo Arquitectónico: Requisitos Red.es vs. Topología Pontus-X</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs border-collapse">
                    <thead>
                      <tr className="bg-muted">
                        <th className="border p-2 text-left">Componente Red.es</th>
                        <th className="border p-2 text-left">Función Normativa</th>
                        <th className="border p-2 text-left">Equivalencia Pontus-X</th>
                        <th className="border p-2 text-left">Evidencia Requerida</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border p-2 font-medium">Sistemas Backend Internos</td>
                        <td className="border p-2">Repositorios primarios (ERP, Data Lakes, SQL/NoSQL, CRM)</td>
                        <td className="border p-2">Bases de datos locales protegidas tras firewall/DMZ</td>
                        <td className="border p-2">Diagramas de red (Visio/UML) mostrando aislamiento</td>
                      </tr>
                      <tr>
                        <td className="border p-2 font-medium">Plano de Control</td>
                        <td className="border p-2">Gestión de negociaciones, orquestación, validación de políticas</td>
                        <td className="border p-2">Smart Contracts en blockchain OASIS + Ocean Provider</td>
                        <td className="border p-2">Logs de inicialización de servicio, transferTxId confirmados</td>
                      </tr>
                      <tr>
                        <td className="border p-2 font-medium">Plano de Datos</td>
                        <td className="border p-2">Transferencia física encriptada de datos</td>
                        <td className="border p-2">Ocean Provider (proxy HTTP ligero, Flask/Python)</td>
                        <td className="border p-2">Logs de download, Proof-of-Download inmutable</td>
                      </tr>
                      <tr>
                        <td className="border p-2 font-medium">Identity Hub</td>
                        <td className="border p-2">Verificación criptográfica del interlocutor</td>
                        <td className="border p-2">GXDCH + SSI (did:web) + Wallets Web3</td>
                        <td className="border p-2">Credenciales Verificables VP firmadas criptográficamente</td>
                      </tr>
                      <tr>
                        <td className="border p-2 font-medium">Catálogo Federado</td>
                        <td className="border p-2">Índice global de productos y condiciones de uso</td>
                        <td className="border p-2">Catálogo Aquarius + metadatos JSON-LD</td>
                        <td className="border p-2">Capturas del dataset publicado con DID y políticas ODRL</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Imagen cartografía */}
            <Card className="mb-6 overflow-hidden">
              <img src={pageCartografiaTecnica} alt="Cartografía de red - Mapeo arquitectónico Pontus-X" className="w-full object-contain" />
              <CardContent className="pt-4">
                <p className="text-xs text-muted-foreground italic">Cartografía de red demostrando el cumplimiento de la separación estructural exigida por Red.es. Los datos primarios permanecen aislados en el backend interno, mientras que el Ocean Provider gestiona el Plano de Datos y la red blockchain orquesta el Plano de Control.</p>
              </CardContent>
            </Card>

            {/* Plano de Control detallado */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2"><Binary className="h-5 w-5" /> Plano de Control: Smart Contracts y Negociación Automatizada</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-3">
                <p>El Plano de Control es el "cerebro" del sistema. Es el encargado de verificar quién pide sus datos y si tiene permiso, ejecutando <strong className="text-foreground">contratos digitales automáticos (Smart Contracts)</strong> antes de mover un solo byte de información.</p>
                <p>En Pontus-X, esta gobernanza se ejerce mediante una arquitectura híbrida que combina la inmutabilidad de los contratos inteligentes desplegados en la red blockchain y el componente <strong className="text-foreground">Ocean Provider</strong> como controlador de acceso. El proceso algorítmico comienza cuando un consumidor solicita acceso a un producto de datos. El Provider invoca internamente el endpoint REST de inicialización: <code className="bg-muted px-1.5 py-0.5 rounded text-xs">GET /api/services/initialize</code>.</p>
                <p>La respuesta exitosa (HTTP 200) no entrega datos, sino una <strong className="text-foreground">cotización</strong> con el número de datatokens requeridos y un <strong className="text-foreground">nonce criptográfico</strong>. Solo tras la confirmación en blockchain se genera el <code className="bg-muted px-1.5 py-0.5 rounded text-xs">transferTxId</code> que autoriza el siguiente paso.</p>
              </CardContent>
            </Card>

            {/* Log Terminal */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2"><MonitorPlay className="h-5 w-5" /> Traza de Auditoría del Plano de Datos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gray-950 text-green-400 font-mono text-[11px] p-4 rounded-lg overflow-x-auto">
                  <div className="text-gray-500 mb-2">pontus-x-provider ~$ ssh root@data-plane-node</div>
                  <div className="text-gray-400 mb-3">Node: Pontus-X Provider v4.x | Env: USE_CHAIN_PROOF=true | Config: LOG_LEVEL=DEBUG | Status: <span className="text-green-500">LISTENING</span></div>
                  <div>[09:15:01.102] <span className="text-blue-400">INFO</span>    [ControlPlane] Inicializando servicio. Petición entrante [REQ: GET /api/services/initialize] recibida.</div>
                  <div>[09:15:01.155] <span className="text-blue-400">INFO</span>    [ControlPlane] Resolviendo metadatos para documento DID: did:op:7b3a98f12c4e6d2bA90...</div>
                  <div>[09:15:01.210] <span className="text-yellow-400">VERIFY</span>  [Crypto] Interrogando Identity Hub. Validando permisos on-chain para consumerAddress: 0x4f8b9e2a1C...</div>
                  <div>[09:15:02.045] <span className="text-green-500">SUCCESS</span> [ControlPlane] Permisos validados correctamente. ERC20 transferTxId: 0x88c9a3b211f4... confirmado en red.</div>
                  <div>[09:15:02.112] <span className="text-blue-400">INFO</span>    [DataPlane] Recibida petición de transferencia de activo [REQ: GET /api/services/download] fileIndex: 0</div>
                  <div>[09:15:02.234] <span className="text-yellow-400">VERIFY</span>  [Crypto] Validando firma. Hash: SHA256(did:op:7b3a98f...+0x4f8b9e...+nonce_42)</div>
                  <div>[09:15:02.456] <span className="text-green-500">SUCCESS</span> [DataPlane] Descarga autorizada. Proof-of-Download registrado. Flujo de bytes iniciado → consumer.</div>
                </div>
                <p className="text-xs text-muted-foreground italic">Recreación de la traza de auditoría extraída del componente Provider de Pontus-X. Destacan las validaciones del identificador de transacción (transferTxId), la comprobación de firmas criptográficas y el registro definitivo del Proof-of-Download, evidencias troncales para la cuenta justificativa.</p>
              </CardContent>
            </Card>

            {/* Screenshot log terminal del PDF */}
            <Card className="mb-6 overflow-hidden">
              <img src={pageLogTerminal} alt="Log Terminal UI - Traza de auditoría" className="w-full object-contain" />
              <CardContent className="pt-4">
                <p className="text-xs text-muted-foreground italic">Captura del documento oficial mostrando la traza de auditoría y evidencia empírica de trazabilidad de transferencia en el Plano de Datos.</p>
              </CardContent>
            </Card>

            {/* Variables de Entorno */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-sm">Configuración de Variables de Entorno para Trazabilidad Forense</CardTitle>
              </CardHeader>
              <CardContent className="text-xs text-muted-foreground space-y-3">
                <p>Para que los registros operativos posean el nivel de granularidad requerido por la administración evaluadora:</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li><code className="bg-muted px-1 rounded">LOG_CFG</code>: Ubicación física del archivo de auditoría en el sistema de archivos.</li>
                  <li><code className="bg-muted px-1 rounded">LOG_LEVEL=DEBUG</code>: Modo detallado de diagnóstico para capturar el ciclo de vida completo de la petición HTTP.</li>
                  <li><code className="bg-muted px-1 rounded">USE_CHAIN_PROOF=true</code>: Inscribe automáticamente una prueba criptográfica en blockchain (inmutable, no repudio).</li>
                  <li><code className="bg-muted px-1 rounded">USE_HTTP_PROOF</code>: Para consolidar evidencias en un SIEM corporativo centralizado.</li>
                  <li><code className="bg-muted px-1 rounded">AUTHORIZED_DECRYPTERS</code>: Lista blanca de direcciones autorizadas para desencriptar información.</li>
                </ul>
              </CardContent>
            </Card>

            {/* Compute-to-Data */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-sm flex items-center gap-2"><Cpu className="h-4 w-4" /> Compute-to-Data (C2D) — Cómputo Federado</CardTitle>
              </CardHeader>
              <CardContent className="text-xs text-muted-foreground space-y-3">
                <p>Para entidades que aspiren a maximizar la puntuación técnica (hasta 50.000 €), resulta estratégicamente imperativo documentar la funcionalidad de <strong className="text-foreground">Compute-to-Data</strong>. En entornos donde la información no puede abandonar las instalaciones del custodio (datos biomédicos, secretos industriales), el Plano de Datos no transfiere el archivo, sino que orquesta un <strong className="text-foreground">entorno de cómputo aislado (sandbox)</strong> dentro de la infraestructura local del proveedor.</p>
                <p>Esto permite que algoritmos de IA viajen hacia los datos, entrenen modelos de aprendizaje automático (federated learning) y extraigan conocimiento sin revelar información en bruto.</p>
                <div className="bg-muted/50 rounded-lg p-3 mt-2">
                  <p className="font-semibold text-foreground mb-1">Endpoints C2D a documentar:</p>
                  <ul className="space-y-1 list-disc list-inside">
                    <li><code className="bg-muted px-1 rounded">POST /api/services/initializeCompute</code> — Inicialización</li>
                    <li><code className="bg-muted px-1 rounded">POST /api/services/compute</code> — Ejecución del trabajo algorítmico</li>
                    <li><code className="bg-muted px-1 rounded">GET /api/services/computeResult</code> — Extracción del resultado</li>
                    <li>Variable: <code className="bg-muted px-1 rounded">OPERATOR_SERVICE_URL</code> (vinculación con clúster Kubernetes/Docker)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* ==================== SECCIÓN 4D: IDENTITY HUB ==================== */}
        <section id="s4d" className="mb-16 scroll-mt-20">
          <motion.div {...fadeInUp}>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Key className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">4D. Arquitectura de Confianza — Identity Hub y Credenciales Gaia-X</h2>
            </div>

            <Card className="mb-6">
              <CardContent className="pt-6 space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>En el paradigma de un espacio de datos verdaderamente soberano, la <strong className="text-foreground">eliminación absoluta del anonimato</strong> en las interacciones es un precepto tecnológico innegociable. El Identity Hub actúa como una infraestructura de confianza externa que verifica mediante protocolos criptográficos la titularidad y legitimidad de los interlocutores.</p>
                <p>En Pontus-X, este requisito se satisface mediante la adherencia al marco normativo de <strong className="text-foreground">Gaia-X Trust Framework</strong> y el uso de <strong className="text-foreground">Identidades Autosoberanas (SSI)</strong>, basadas en los estándares abiertos del W3C: <strong className="text-foreground">Documentos de Identidad Descentralizada (DID)</strong> bajo el método <code className="bg-muted px-1 rounded">did:web</code>.</p>
              </CardContent>
            </Card>

            <Accordion type="multiple" className="w-full space-y-4 mb-6">
              <AccordionItem value="vc" className="border rounded-lg">
                <AccordionTrigger className="px-4 text-sm font-semibold text-foreground">
                  Protocolo de Emisión de Credenciales Verificables (VC)
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 text-sm text-muted-foreground space-y-3">
                  <p>La entidad no se registra con un formulario web estándar con usuario y contraseña. Debe orquestar una interacción técnica con los servicios del GXDCH usando sus propias claves criptográficas. El flujo comienza con la solicitud de una <strong className="text-foreground">Credencial Verificable de Participante (Participant VC)</strong> a través del <strong className="text-foreground">Gaia-X Wizard</strong>.</p>
                  <p>Esta credencial debe incluir: el <strong className="text-foreground">nombre legal exacto</strong>, la <strong className="text-foreground">dirección corporativa</strong> (ISO 3166-2), y el <strong className="text-foreground">Número de Registro Legal</strong> (EUID, EORI, LEI o NIF), que el motor de verificación cotejará contra registros oficiales europeos.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="vp" className="border rounded-lg">
                <AccordionTrigger className="px-4 text-sm font-semibold text-foreground">
                  Presentación Verificable (VP) y Firma Criptográfica
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 text-sm text-muted-foreground space-y-3">
                  <p>La <strong className="text-foreground">VP (Verifiable Presentation)</strong> es un documento serializado en <strong className="text-foreground">JSON-LD</strong> que consolida múltiples credenciales en un único objeto de transmisión. Debe ser firmada criptográficamente (estándar <strong className="text-foreground">JSON Web Signature - JWS</strong>) mediante la clave privada soberana de la entidad.</p>
                  <p>La clave pública complementaria debe estar alojada en el <strong className="text-foreground">Documento DID público</strong> de la organización, cerrando el ciclo de confianza criptográfica sin depender de un directorio central.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="interrogacion" className="border rounded-lg">
                <AccordionTrigger className="px-4 text-sm font-semibold text-foreground">
                  Interrogación Dinámica y Verificación Continua
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 text-sm text-muted-foreground space-y-3">
                  <p>Red.es exige demostrar "cómo el conector interroga al Identity Hub" de manera operativa. En Pontus-X, esto se ejecuta <strong className="text-foreground">dinámicamente cada vez que se intenta una transacción</strong>. El servicio de cumplimiento (Compliance Service) inspecciona la cadena de certificados X.509 asociados a la firma pública del consumidor.</p>
                  <p>Esta inspección garantiza que las firmas provienen de una <strong className="text-foreground">Autoridad de Certificación reconocida bajo el reglamento europeo eIDAS</strong> (Reglamento UE 910/2014).</p>
                  <p>La Memoria debe incorporar volcados de peticiones/respuestas de la <strong className="text-foreground">API de Compliance</strong> probando la emisión del veredicto positivo, que se materializa en una nueva "Gaia-X Verifiable Credential" de cumplimiento.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="registro" className="border rounded-lg">
                <AccordionTrigger className="px-4 text-sm font-semibold text-foreground">
                  Registro 2.0 de Pontus-X
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 text-sm text-muted-foreground space-y-3">
                  <p>El <strong className="text-foreground">Registro 2.0</strong> es una estructura dinámica y distribuida alimentada vía API REST que rastrea las direcciones públicas de la red blockchain vinculándolas a las Credenciales de Participante Gaia-X validadas.</p>
                  <p>Proporciona un <strong className="text-foreground">panel público y auditable</strong> que certifica el alta operativa y el estado activo de la mercantil dentro del ecosistema de confianza europeo.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </section>

        {/* ==================== SECCIÓN 4E: ODRL ==================== */}
        <section id="s4e" className="mb-16 scroll-mt-20">
          <motion.div {...fadeInUp}>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/10 p-2 rounded-lg">
                <FileCode className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">4E. Interoperabilidad Semántica y Políticas ODRL</h2>
            </div>

            {/* Ingeniería Semántica */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg">Ingeniería Semántica y Modelado JSON-LD (DDO)</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-3">
                <p>El programa Kit Espacios de Datos penaliza la compartición de datos crudos (raw data) y bonifica con la mayor intensidad financiera a organizaciones que ejecutan labores de <strong className="text-foreground">ingeniería de datos</strong>, dotando a sus conjuntos de un significado estructurado y procesable por máquinas.</p>
                <p>En el Catálogo Federado de Pontus-X (Aquarius), esta contextualización se logra modelando los activos como <strong className="text-foreground">Objetos de Datos Descentralizados (DDO)</strong> bajo el estándar <strong className="text-foreground">JSON-LD (JSON for Linked Data)</strong>.</p>
                <p>El atributo crítico <code className="bg-muted px-1 rounded">@context</code> funciona como una matriz de validación que define la ontología exacta que rige las propiedades de los datos compartidos, asegurando que variables como <code className="bg-muted px-1 rounded">id</code>, <code className="bg-muted px-1 rounded">type</code>, <code className="bg-muted px-1 rounded">created</code>, <code className="bg-muted px-1 rounded">author</code> y <code className="bg-muted px-1 rounded">license</code> se interpreten de forma universal.</p>
              </CardContent>
            </Card>

            {/* Política ODRL */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg">Codificación Programática de Políticas de Soberanía (ODRL)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">La prosa legal tradicional (acuerdos de confidencialidad en PDF, términos y condiciones) carece de validez técnica operativa en entornos de transaccionalidad a nivel de máquina. Los derechos, permisos condicionados y obligaciones deben transcribirse a <strong className="text-foreground">código ejecutable y auditable</strong> usando el estándar <strong className="text-foreground">ODRL del W3C</strong>.</p>
                
                {/* JSON-LD Code Block */}
                <div className="relative">
                  <div className="absolute top-2 right-2 text-xs text-muted-foreground bg-muted px-2 py-1 rounded opacity-70">JSON-LD / ODRL</div>
                  <pre className="bg-muted/50 border rounded-lg p-4 overflow-x-auto text-xs font-mono">
{`{
  "@context": "http://www.w3.org/ns/odrl.jsonld",
  "@type": "Set",
  "uid": "https://w3c.github.io/odrl/bp/examples/1",
  "permission": [{
    "target": "http://example.com/asset:9898.movie",
    "action": "use",
    "constraint": [{
      "ovc:leftOperand": "location",
      "odrl:operator": "odrl:eq",
      "odrl:rightOperand": "Europe",
      "ovc:credentialSubjectType": "ParticipantCredential"
    }]
  }]
}`}
                  </pre>
                </div>

                {/* Explicación jurídica línea por línea */}
                <div className="space-y-3">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h5 className="font-semibold text-foreground text-sm">🏛️ Raíz de Soberanía</h5>
                    <p className="text-xs text-muted-foreground"><code className="bg-muted px-1 rounded">@context</code> + <code className="bg-muted px-1 rounded">@type</code> + <code className="bg-muted px-1 rounded">uid</code> — Establece el andamiaje legal de la política. Identifica unívocamente el acuerdo y declara que rige bajo el estándar normativo digital del W3C para espacios de datos.</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h5 className="font-semibold text-foreground text-sm">✅ Concesión de Derechos</h5>
                    <p className="text-xs text-muted-foreground"><code className="bg-muted px-1 rounded">permission</code> — Inicia la autorización formal. El Proveedor habilita afirmativamente el acceso de terceros. Todo acceso no definido explícitamente queda <strong>denegado por defecto</strong>.</p>
                  </div>
                  <div className="border-l-4 border-amber-500 pl-4">
                    <h5 className="font-semibold text-foreground text-sm">🎯 Delimitación Funcional (Target + Action)</h5>
                    <p className="text-xs text-muted-foreground"><code className="bg-muted px-1 rounded">target</code> + <code className="bg-muted px-1 rounded">action: "use"</code> — Fija el producto de datos exacto expuesto en el Catálogo Federado y limita la interacción a un consumo básico de solo lectura, protegiéndolo frente a modificación.</p>
                  </div>
                  <div className="border-l-4 border-red-500 pl-4">
                    <h5 className="font-semibold text-foreground text-sm">🔒 Restricción Automatizada (Constraint)</h5>
                    <p className="text-xs text-muted-foreground"><code className="bg-muted px-1 rounded">constraint</code> — Condición de ejecución automatizada (Smart Contract). La transferencia solo se autoriza si el consumidor presenta una <strong>Credencial Verificable válida (ParticipantCredential)</strong> atestiguando que su ubicación geográfica coincide con el operando establecido.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Imagen ODRL */}
            <Card className="mb-6 overflow-hidden">
              <img src={pageOdrlArquitectura} alt="Arquitectura de Soberanía - Mapeo ODRL" className="w-full object-contain" />
              <CardContent className="pt-4">
                <p className="text-xs text-muted-foreground italic">Mapeo esquemático de un contrato digital. La política ODRL determina el conjunto de datos (Target), habilita su consumo (Action: use) y establece restricciones vinculadas a las Credenciales Verificables (Constraint) requeridas para la autorización automática en Pontus-X.</p>
              </CardContent>
            </Card>

            {/* 3 Vectores */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <Card className="border-primary/30">
                <CardContent className="pt-4 text-center">
                  <Database className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <h4 className="font-bold text-foreground text-sm mb-1">Target</h4>
                  <p className="text-xs text-muted-foreground">Designación unívoca del recurso protegido, expresado mediante su <strong>DID</strong> en Pontus-X.</p>
                </CardContent>
              </Card>
              <Card className="border-primary/30">
                <CardContent className="pt-4 text-center">
                  <Eye className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <h4 className="font-bold text-foreground text-sm mb-1">Action</h4>
                  <p className="text-xs text-muted-foreground">Declaración explícita de operaciones autorizadas: <code className="bg-muted px-1 rounded text-[10px]">use</code>, <code className="bg-muted px-1 rounded text-[10px]">read</code>, <code className="bg-muted px-1 rounded text-[10px]">access</code>.</p>
                </CardContent>
              </Card>
              <Card className="border-primary/30">
                <CardContent className="pt-4 text-center">
                  <Lock className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <h4 className="font-bold text-foreground text-sm mb-1">Constraints</h4>
                  <p className="text-xs text-muted-foreground">Barrera programática de soberanía: restricciones temporales, geográficas o de identidad vinculadas a VCs.</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </section>

        {/* ==================== SECCIÓN 4F: EVIDENCIAS DINÁMICAS ==================== */}
        <section id="s4f" className="mb-16 scroll-mt-20">
          <motion.div {...fadeInUp}>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Camera className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">4F. Generación de Evidencias Dinámicas y Visuales</h2>
            </div>

            <Card className="mb-6">
              <CardContent className="pt-6 space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>La administración pública evaluadora ejerce una <strong className="text-foreground">desconfianza sistémica hacia la documentación meramente descriptiva</strong>. Red.es es muy estricta: <strong className="text-foreground">si no se ve, no existe</strong>.</p>
                
                <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="h-4 w-4 text-amber-600" />
                    <span className="font-semibold text-amber-700 dark:text-amber-400 text-xs uppercase">Requisito Obligatorio</span>
                  </div>
                  <p className="text-xs text-amber-800 dark:text-amber-300">Las capturas de pantalla deben revelar de manera nítida e inalterada el <strong>reloj y el calendario del sistema operativo</strong> de la máquina desde la que se ejecuta la acción de auditoría, certificando que la plataforma estaba operativa dentro de las fechas de elegibilidad.</p>
                </div>
              </CardContent>
            </Card>

            {/* Participante vs Proveedor */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">
                    <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 mr-2">Participante</Badge>
                    Evidencias (15k/25k €)
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-xs text-muted-foreground space-y-2">
                  <p>Capturas mostrando:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Usuario corporativo autenticado mediante identidad criptográfica (SSI Wallet conectada)</li>
                    <li>Nombre exacto del ecosistema federado sectorial</li>
                    <li>Identificador Único (DID o dirección pública 0x...)</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-primary/30 bg-primary/5">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">
                    <Badge className="bg-primary text-primary-foreground mr-2">Proveedor</Badge>
                    Evidencias (30k/50k €)
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-xs text-muted-foreground space-y-2">
                  <p>Además de las anteriores, capturas del catálogo público mostrando:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Identificador único (DID) del dataset en blockchain</li>
                    <li>Metainformación semántica JSON-LD</li>
                    <li>Políticas ODRL asociadas al consumo</li>
                    <li>Que la información sea "descubrible" por terceros</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Contratación y Declaración */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg">Contratación Interinstitucional y Declaración de Evidencias</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-3">
                <p><strong className="text-foreground">Contrato de Adhesión:</strong> Documento PDF (máx. 2 MB) que vincula contractualmente al solicitante con el Promotor del Espacio de Datos. Debe estipular: identidad verificada de las partes, vigencia temporal, y que el objeto es la adhesión operativa al espacio sectorial.</p>
                <p><strong className="text-foreground">Declaración de Evidencias de Registro y Publicación:</strong> Firmado electrónicamente de forma <strong className="text-foreground">mancomunada</strong> (certificados cualificados) por el apoderado del solicitante y el representante del Promotor. Da fe de que registro, asignación de identidades y publicación se ejecutaron correctamente.</p>
              </CardContent>
            </Card>

            {/* Guión del video */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2"><Video className="h-5 w-5" /> Guión del Vídeo de Screencasting (3 Pasos Obligatorios)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">La grabación de pantalla ininterrumpida debe trazarse como un flujo de usuario que narre el ciclo de vida completo de la operatividad:</p>
                <div className="space-y-3">
                  <div className="flex gap-3 items-start">
                    <div className="bg-primary text-primary-foreground rounded-full h-8 w-8 flex items-center justify-center text-sm font-bold shrink-0">1</div>
                    <div>
                      <h5 className="font-semibold text-foreground text-sm">Apertura y Autenticación Criptográfica</h5>
                      <p className="text-xs text-muted-foreground">Login en Pontus-X evidenciando intercambio de identidades seguras mediante firma con Wallet Web3 y validación del Identity Hub (SSI). No debe haber ingreso usuario/contraseña tradicional.</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="bg-primary text-primary-foreground rounded-full h-8 w-8 flex items-center justify-center text-sm font-bold shrink-0">2</div>
                    <div>
                      <h5 className="font-semibold text-foreground text-sm">Navegación en la Intranet de Oferta</h5>
                      <p className="text-xs text-muted-foreground">Tránsito visual por las áreas privadas del panel de control del proveedor, mostrando la gestión de los activos publicados.</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="bg-primary text-primary-foreground rounded-full h-8 w-8 flex items-center justify-center text-sm font-bold shrink-0">3</div>
                    <div>
                      <h5 className="font-semibold text-foreground text-sm">Descubrimiento y Visualización Pública Transaccional</h5>
                      <p className="text-xs text-muted-foreground">Simular la experiencia de un consumidor externo: buscar el producto por metadatos semánticos, abrir la página de detalle mostrando DID, políticas y oferta en vivo. Culminar evidenciando la transaccionalidad real.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* ==================== SECCIÓN 4G: JUSTIFICACIÓN FINANCIERA AVANZADA ==================== */}
        <section id="s4g" className="mb-16 scroll-mt-20">
          <motion.div {...fadeInUp}>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Banknote className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">4G. Justificación Financiera Avanzada y DNSH</h2>
            </div>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg">Contabilidad Estricta y Trazabilidad Financiera</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-3">
                <p>El diseño financiero de la convocatoria reposa sobre un <strong className="text-foreground">pago único retrospectivo</strong> que demanda la ejecución previa, finalización técnica y completa liquidación económica del proyecto <strong className="text-foreground">antes</strong> de remitir la documentación.</p>
                
                <Accordion type="multiple" className="w-full">
                  <AccordionItem value="timesheets">
                    <AccordionTrigger className="text-sm font-semibold text-foreground">Timesheets y Trazabilidad Horaria</AccordionTrigger>
                    <AccordionContent className="space-y-2 text-sm text-muted-foreground">
                      <p>Para justificar costes de personal propio, es mandatorio un sistema de <strong className="text-foreground">certificación de trazabilidad horaria</strong>. Los registros deben vincular la jornada técnica exacta de cada empleado con tareas cristalinas del proyecto.</p>
                      <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg p-3">
                        <p className="text-xs"><strong>Conceptos genéricos serán rechazados.</strong> El registro debe detallar actividades técnicas precisas como: "Despliegue y configuración del Ocean Provider", "Codificación de reglas ODRL", "Mapeo de variables a esquemas JSON-LD", "Gestión de certificados SSI y sincronización con GXDCH".</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="iva">
                    <AccordionTrigger className="text-sm font-semibold text-foreground">Detracción Fiscal del IVA</AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground">
                      <p>La memoria de estructuración del gasto debe presentar una <strong className="text-foreground">matriz de detracción fiscal contable en Excel</strong> que excluya de forma rigurosa y sistemática el IVA, coste considerado tributariamente recuperable y <strong className="text-foreground">nunca elegible</strong> mediante fondos públicos en esta tipología de ayudas.</p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            {/* DNSH Avanzado */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2"><Recycle className="h-5 w-5" /> DNSH Avanzado: Certificados Hardware, Economía Circular y RAEE</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-3">
                <p>En un escenario que depende de redes distribuidas, procesamiento criptográfico continuo e infraestructuras cloud escalables, el cumplimiento del principio <strong className="text-foreground">DNSH</strong> debe ser inmaculado y documentado.</p>
                
                <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-4">
                  <p className="text-xs text-red-800 dark:text-red-300"><strong>El incumplimiento o justificación deficiente del DNSH es una de las causas más frecuentes de denegación directa</strong> de expedientes de digitalización en el marco del PRTR.</p>
                </div>

                <ul className="space-y-2 list-disc list-inside">
                  <li><strong className="text-foreground">Certificados de Hardware:</strong> Manuales técnicos y certificados oficiales de fabricantes que atestigüen el cumplimiento de la Directiva 2009/125/CE de diseño ecológico y eficiencia energética.</li>
                  <li><strong className="text-foreground">Proveedores Cloud:</strong> Certificados del Data Center que atestigüen alineamiento con el Código de Conducta Europeo de Eficiencia Energética.</li>
                  <li><strong className="text-foreground">Economía Circular:</strong> Garantías explícitas de canalización de equipos a gestores autorizados para recuperación de componentes al fin de vida.</li>
                  <li><strong className="text-foreground">RAEE:</strong> Compromiso formal de tratamiento correcto como Residuos de Aparatos Eléctricos y Electrónicos.</li>
                  <li><strong className="text-foreground">Hardware sin sustancias REACH:</strong> Los equipos no deben contener sustancias altamente preocupantes según el reglamento REACH.</li>
                </ul>
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
                <p>Todos los fondos del PRTR están condicionados al cumplimiento del principio <strong className="text-foreground">"Do No Significant Harm" (DNSH)</strong>. El solicitante debe completar el <strong className="text-foreground">Anexo I (Cuestionario de Autoevaluación DNSH)</strong> y el <strong className="text-foreground">Anexo IV (Declaración DACI)</strong>.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    { icon: CloudCog, title: "1. Mitigación del Cambio Climático", desc: "Certificación de eficiencia energética de servidores y hardware (Directiva 2009/125/CE)." },
                    { icon: Shield, title: "2. Adaptación al Cambio Climático", desc: "Evaluación de riesgo climático y vulnerabilidad física de instalaciones IT." },
                    { icon: Workflow, title: "3. Economía Circular", desc: "Hardware sin sustancias REACH. Equipos canalizados a gestores autorizados para recuperación al fin de vida." },
                    { icon: Globe, title: "4-6. Agua, Contaminación y Biodiversidad", desc: "Cumplimiento de normativas de uso sostenible del agua y protección de ecosistemas." },
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
                  <p className="text-xs text-red-800 dark:text-red-300">Están vetadas entidades cuya actividad troncal orbite en torno a: <strong>refinerías de petróleo, extracción/procesamiento de combustibles fósiles, generación termoeléctrica basada en carbón, u operación de vertederos e incineradoras</strong>.</p>
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
                      <ul className="space-y-2 list-disc list-inside">
                        <li><strong className="text-foreground">Resumen Ejecutivo y Caso de Uso</strong></li>
                        <li><strong className="text-foreground">Armazón Regulatorio y Protección de Datos</strong></li>
                        <li><strong className="text-foreground">Auditoría de Preparación de Datos</strong></li>
                        <li><strong className="text-foreground">Cartografía de Conexión Técnica</strong></li>
                        <li><strong className="text-foreground">Cuadro de Mando Financiero</strong></li>
                        <li><strong className="text-foreground">Mecanismos de Difusión y Publicidad</strong></li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="6.2">
                    <AccordionTrigger className="text-sm font-semibold text-foreground">6.2. Capturas de Pantalla Sensibles al Tiempo</AccordionTrigger>
                    <AccordionContent className="space-y-3 text-sm text-muted-foreground">
                      <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-3">
                        <p className="text-xs"><strong>Requisito obligatorio:</strong> El <strong>reloj y calendario del sistema operativo</strong> debe ser nítidamente visible.</p>
                      </div>
                      <p><strong className="text-foreground">Participantes:</strong> Evidencia de registro mostrando nombre del espacio, usuario corporativo e identificador único.</p>
                      <p><strong className="text-foreground">Proveedores:</strong> Además, visualización del dataset en el catálogo federado mostrando DID, metainformación, políticas ODRL y accesibilidad por terceros.</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="6.3">
                    <AccordionTrigger className="text-sm font-semibold text-foreground">6.3. Contrato de Adhesión y Declaración de Evidencias</AccordionTrigger>
                    <AccordionContent className="space-y-3 text-sm text-muted-foreground">
                      <p><strong className="text-foreground">Contrato de Adhesión:</strong> Archivo digital (máximo <strong>2 MB</strong>) con firma electrónica mancomunada.</p>
                      <p><strong className="text-foreground">Declaración de Evidencias:</strong> Documento con <strong>firma electrónica mancomunada</strong> del apoderado del solicitante y del representante del Promotor.</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="6.4">
                    <AccordionTrigger className="text-sm font-semibold text-foreground">6.4. Vídeo de Evidencias (Recomendado)</AccordionTrigger>
                    <AccordionContent className="space-y-3 text-sm text-muted-foreground">
                      <p>Grabación de pantalla ininterrumpida (screencasting) del ciclo de vida completo:</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Autenticación segura mediante nodo criptográfico</li>
                        <li>Navegación por áreas privadas del portal</li>
                        <li>Acceso al panel de control del catálogo</li>
                        <li>Visualización efectiva del producto publicado</li>
                      </ul>
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
                <p>La adhesión debe realizarse exclusivamente sobre espacios de datos que ostenten el respaldo oficial del Gobierno de España, auditados por el <strong className="text-foreground">Centro de Referencia de Espacios de Datos (CRED)</strong>.</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border rounded-lg p-4">
                    <Badge className="mb-2 bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">Salud</Badge>
                    <h4 className="font-semibold text-foreground text-sm mb-1">BIGAN (Aragón)</h4>
                    <p className="text-xs">Espacio multimodal biomédico y genómico. Requiere ENS Nivel Alto y seudonimización en origen.</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <Badge className="mb-2 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">Agroalimentario</Badge>
                    <h4 className="font-semibold text-foreground text-sm mb-1">CropDataSpace</h4>
                    <p className="text-xs">Datos biológicos, genéticos, microbianos y de sensorización agraria.</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <Badge className="mb-2 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">Industria / Movilidad</Badge>
                    <h4 className="font-semibold text-foreground text-sm mb-1">C-SpAICe (País Vasco)</h4>
                    <p className="text-xs">Sector automoción basado en Catena-X. Trazabilidad soberana de componentes.</p>
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
              Instrumento dividido en <strong className="text-foreground">5 módulos especializados</strong> dirigidos a los departamentos corporativos competentes.
            </p>

            <Accordion type="multiple" className="w-full space-y-4">
              {/* Módulo I */}
              <AccordionItem value="m1" className="border rounded-lg">
                <AccordionTrigger className="px-4 text-sm font-semibold text-foreground">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">Módulo I</Badge>
                    Auditoría Administrativa, Jurídica y Financiera
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs border-collapse">
                      <thead><tr className="bg-muted"><th className="border p-2 text-left">Elemento</th><th className="border p-2 text-left">Formato</th><th className="border p-2 text-left">Justificación</th></tr></thead>
                      <tbody>
                        <tr><td className="border p-2 font-medium">Identidad y Fiscalidad</td><td className="border p-2">NIF oficial, domicilio fiscal UE</td><td className="border p-2">Personalidad jurídica</td></tr>
                        <tr><td className="border p-2 font-medium">Poderes Notariales</td><td className="border p-2">PDF escrituras de apoderamiento</td><td className="border p-2">Capacidad legal del firmante</td></tr>
                        <tr><td className="border p-2 font-medium">Certificados AEAT/TGSS</td><td className="border p-2">Telemáticos (&lt;6 meses)</td><td className="border p-2">Ley General de Subvenciones</td></tr>
                        <tr><td className="border p-2 font-medium">Certificado Bancario</td><td className="border p-2">IBAN con sello entidad financiera</td><td className="border p-2">Cuenta para reembolso</td></tr>
                        <tr><td className="border p-2 font-medium">Declaración Responsable</td><td className="border p-2">Firma digital: no crisis, DACI</td><td className="border p-2">Compromiso PRTR antifraude</td></tr>
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
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs border-collapse">
                      <thead><tr className="bg-muted"><th className="border p-2 text-left">Elemento</th><th className="border p-2 text-left">Formato</th><th className="border p-2 text-left">Justificación</th></tr></thead>
                      <tbody>
                        <tr><td className="border p-2 font-medium">Determinación de Roles</td><td className="border p-2">Declaración Participante vs Proveedor</td><td className="border p-2">Determina presupuesto máximo</td></tr>
                        <tr><td className="border p-2 font-medium">Caso de Uso</td><td className="border p-2">Memoria de oportunidad y modelo de negocio</td><td className="border p-2">Resumen Ejecutivo de la Memoria</td></tr>
                        <tr><td className="border p-2 font-medium">Análisis RGPD</td><td className="border p-2">Documentación DPO seudonimización</td><td className="border p-2">Requisitos Jurídicos</td></tr>
                        <tr><td className="border p-2 font-medium">Ecosistema de Destino</td><td className="border p-2">Nombre oficial en Lista de Confianza CRED</td><td className="border p-2">Elegibilidad del destino</td></tr>
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
                    Ingeniería de Datos y Arquitectura
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs border-collapse">
                      <thead><tr className="bg-muted"><th className="border p-2 text-left">Elemento</th><th className="border p-2 text-left">Formato</th><th className="border p-2 text-left">Justificación</th></tr></thead>
                      <tbody>
                        <tr><td className="border p-2 font-medium">Cartografía de Red</td><td className="border p-2">Diagramas Visio/UML</td><td className="border p-2">Separación Plano de Datos y Control</td></tr>
                        <tr><td className="border p-2 font-medium">Certificación del Conector</td><td className="border p-2">Especificaciones EDC/FIWARE</td><td className="border p-2">Conectores código abierto IDS/Gaia-X</td></tr>
                        <tr><td className="border p-2 font-medium">Codificación ODRL</td><td className="border p-2">Fragmentos de código</td><td className="border p-2">Transposición reglas legales a código</td></tr>
                        <tr><td className="border p-2 font-medium">Interoperabilidad Semántica</td><td className="border p-2">Esquemas XML/JSON-LD</td><td className="border p-2">Interoperabilidad requerida</td></tr>
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
                    Auditoría Contable y Liquidación
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs border-collapse">
                      <thead><tr className="bg-muted"><th className="border p-2 text-left">Elemento</th><th className="border p-2 text-left">Formato</th><th className="border p-2 text-left">Justificación</th></tr></thead>
                      <tbody>
                        <tr><td className="border p-2 font-medium">Timesheets</td><td className="border p-2">Plantillas firmadas con desglose horario</td><td className="border p-2">Justificar gasto salarial</td></tr>
                        <tr><td className="border p-2 font-medium">Facturas y Justificantes</td><td className="border p-2">Post-16 julio 2025 + transferencias SWIFT/SEPA</td><td className="border p-2">Trabajo concluido y abonado</td></tr>
                        <tr><td className="border p-2 font-medium">Licencias SaaS/Cloud</td><td className="border p-2">Contratos ≤1 año pagados anticipado</td><td className="border p-2">Infraestructura directa del conector</td></tr>
                        <tr><td className="border p-2 font-medium">Exclusión IVA</td><td className="border p-2">Extracción sistemática en cada factura</td><td className="border p-2">Mandato innegociable</td></tr>
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
                    Prueba Ambiental y Plataforma
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs border-collapse">
                      <thead><tr className="bg-muted"><th className="border p-2 text-left">Elemento</th><th className="border p-2 text-left">Formato</th><th className="border p-2 text-left">Justificación</th></tr></thead>
                      <tbody>
                        <tr><td className="border p-2 font-medium">Dossier DNSH</td><td className="border p-2">Anexo I + certificados eficiencia energética</td><td className="border p-2">Imperativo del PRTR</td></tr>
                        <tr><td className="border p-2 font-medium">Contrato + Declaración</td><td className="border p-2">PDF (max 2MB) con firmas electrónicas</td><td className="border p-2">Vínculo interinstitucional</td></tr>
                        <tr><td className="border p-2 font-medium">Screenshots</td><td className="border p-2">Con fecha/reloj, usuario, nombre espacio, ID dataset</td><td className="border p-2">Evidencia de operatividad</td></tr>
                        <tr><td className="border p-2 font-medium">Vídeo</td><td className="border p-2">Screencasting del ciclo completo</td><td className="border p-2">Confianza visual definitiva</td></tr>
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
                <p>El programa "Kit Espacios de Datos" cristaliza una evolución cualitativa en el panorama de las subvenciones tecnológicas europeas. No se trata de un mecanismo de inyección de liquidez orientado a la modernización aislada, sino de un <strong className="text-foreground">vector estratégico que premia exclusivamente la interoperabilidad compleja, la madurez semántica y la cesión segura de soberanía en entornos B2B descentralizados</strong>.</p>

                <p>La arquitectura de su convocatoria — régimen de concurrencia no competitiva y cuenta justificativa concurrente — <strong className="text-foreground">elimina el margen para la iteración burocrática</strong>. Todo el esfuerzo debe estar cristalizado antes de la conformación del expediente.</p>

                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mt-4">
                  <p className="text-sm text-foreground font-medium mb-2">Al documentar irrefutablemente:</p>
                  <ul className="space-y-1 text-xs list-disc list-inside">
                    <li>La operación del Plano de Control de los conectores IDS/Gaia-X</li>
                    <li>La traza horaria de los costes laborales</li>
                    <li>El respeto escrupuloso a la taxonomía verde europea</li>
                    <li>La visibilidad empírica de los activos en los catálogos federados</li>
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

      {/* Chat IA Contextual */}
      <KitSolicitudChat />
    </div>
  );
}
