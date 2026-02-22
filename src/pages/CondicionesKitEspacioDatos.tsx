import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, Clock, Euro, Shield, Users, FileText, FileCheck, Building2, Headphones, ChevronDown, Target, BookOpen, AlertTriangle, Briefcase, Server, Eye, Database, Lock, Cpu, Upload, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import logoKitEspacioDatos from "@/assets/logo-kit-espacio-datos.jpg";
import logoGobiernoRedEs from "@/assets/logo-gobierno-red-es.jpg";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const serviciosIncluidos = [
  { icon: Shield, label: "Acceso al Espacio de Datos Federado" },
  { icon: Users, label: "Consultoría técnica y administrativa" },
  { icon: FileText, label: "Tramitación de la ayuda" },
  { icon: FileCheck, label: "Redacción de memoria técnica" },
  { icon: Building2, label: "Presentación de solicitud" },
  { icon: CheckCircle2, label: "Justificación completa del proyecto" },
  { icon: Headphones, label: "Soporte durante el proceso" },
];

const checklistProveedor = [
  { icon: Upload, title: "Publicación Efectiva de Datos", desc: "Debe existir al menos un dataset publicado en un catálogo federado accesible por otros participantes del ecosistema." },
  { icon: Lock, title: "Soberanía y Reglas de Acceso", desc: "Políticas ODRL definidas: quién accede, bajo qué condiciones, durante cuánto tiempo y con qué finalidad." },
  { icon: Database, title: "Ingeniería y Metadatos", desc: "Metadatos estandarizados DCAT-AP, descripción semántica del dataset, calidad documentada." },
  { icon: Cpu, title: "Conectores Certificados", desc: "Uso de Eclipse Dataspace Components (EDC) u otro conector IDS/IDSA certificado para la interoperabilidad." },
  { icon: Eye, title: "Evidencias de la Publicación", desc: "Capturas, logs de transacción, y actas que demuestren el intercambio real de datos dentro del espacio." },
];

const gastosElegibles = [
  { icon: Briefcase, title: "Servicios Externos y Consultoría", items: ["Consultoría técnica especializada", "Desarrollo e integración de conectores", "Auditorías y certificaciones", "Formación especializada"] },
  { icon: Users, title: "Costes de Personal Propio", items: ["Horas dedicadas al proyecto (con justificación)", "Personal técnico asignado", "Gestión interna del proyecto", "Máximo según convenio colectivo aplicable"] },
  { icon: Server, title: "Licencias e Infraestructura", items: ["Licencias de software necesarias", "Infraestructura cloud/on-premise", "Herramientas de desarrollo", "Plataformas de datos certificadas"] },
];

const faqItems = [
  { q: "¿Qué es el Kit Espacios de Datos?", a: "Es un programa de ayudas del Gobierno de España, financiado con fondos Next Generation EU, que subvenciona la integración de empresas en el ecosistema europeo de Espacios de Datos (GAIA-X). El presupuesto total es de 60 millones de euros." },
  { q: "¿Qué diferencia hay entre Participante y Proveedor?", a: "El Participante (hasta 15.000€) consume datos y servicios del ecosistema. El Proveedor (hasta 30.000€) además publica sus propios datos, lo que requiere conectores certificados, metadatos estandarizados y evidencias de intercambio real." },
  { q: "¿Qué gastos cubre exactamente la ayuda?", a: "Cubre tres categorías: servicios externos y consultoría, costes de personal propio dedicado al proyecto, y licencias e infraestructura tecnológica. Todos deben estar directamente relacionados con la integración en el Espacio de Datos." },
  { q: "¿El IVA es subvencionable?", a: "No. El IVA queda expresamente excluido de los gastos elegibles. Todos los importes subvencionables se consideran sin IVA." },
  { q: "¿Qué es la Justificación Concurrente?", a: "Significa que el trabajo debe estar terminado y pagado antes de presentar la solicitud de cobro. No se admiten gastos futuros ni compromisos pendientes de ejecución." },
  { q: "¿Puedo cancelar en los 6 primeros meses?", a: "No. La Fase 1 es un compromiso irrevocable de 6 meses. No se admite cancelación anticipada una vez firmada el Acta de Conformidad." },
  { q: "¿Qué ocurre si me conceden la subvención?", a: "Se activa automáticamente la Fase 2 (prórroga de 24 meses). El importe de la Fase 2 será equivalente a la subvención concedida." },
  { q: "¿Qué es el Acta de Conformidad?", a: "Es el documento que certifica la recepción del servicio y activa la financiación de HOKODO. Su firma es digital y tiene plena validez jurídica." },
  { q: "¿Quién tramita la ayuda?", a: "Procuredata actúa como Representante Voluntario ante RED.ES, gestionando toda la tramitación administrativa." },
  { q: "¿Las incidencias técnicas afectan a los pagos?", a: "No. Las reclamaciones técnicas o comerciales se gestionan por canales de soporte separados y no afectan al flujo de pagos." },
  { q: "¿Qué pasa si no me conceden la subvención?", a: "El contrato finaliza al término de la Fase 1 (6 meses). No se genera ninguna obligación adicional." },
  { q: "¿Qué es la financiación HOKODO?", a: "HOKODO es una entidad financiera externa que facilita el pago fraccionado de la Fase 1 en 6 cuotas mensuales." },
];

export default function CondicionesKitEspacioDatos() {
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

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Hero */}
        <motion.div {...fadeInUp} className="text-center mb-16">
          <motion.div animate={{ scale: [1, 1.03, 1] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <Badge className="bg-amber-500 text-white hover:bg-amber-500 mb-4 text-sm px-4 py-1.5">
              <Clock className="h-3.5 w-3.5 mr-1.5" />
              Inscripción hasta 20 de Marzo del 2026
            </Badge>
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-black text-foreground mb-4">Condiciones Transparentes</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Todo lo que necesitas saber antes de inscribirte. Sin letra pequeña.
          </p>
          <div className="flex items-center justify-center gap-6">
            <img src={logoKitEspacioDatos} alt="Kit Espacio de Datos" className="h-12 object-contain" />
            <img src={logoGobiernoRedEs} alt="Gobierno de España - Red.es" className="h-12 object-contain" />
          </div>
        </motion.div>

        {/* NEW: Qué es el Programa */}
        <motion.div {...fadeInUp} className="mb-12">
          <Card>
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">¿Qué es el Kit Espacios de Datos?</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                El <strong className="text-foreground">Kit Espacios de Datos</strong> (Convocatoria C055/25-SI) es un programa de ayudas del Gobierno de España, financiado con fondos <strong className="text-foreground">Next Generation EU</strong>, que subvenciona la integración de empresas en el ecosistema europeo de Espacios de Datos bajo el marco GAIA-X.
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-muted/50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-black text-primary">60M€</div>
                  <div className="text-sm text-muted-foreground">Presupuesto total</div>
                </div>
                <div className="bg-muted/50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-black text-primary">31 Mar 2026</div>
                  <div className="text-sm text-muted-foreground">Plazo límite</div>
                </div>
                <div className="bg-muted/50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-black text-primary">Orden de llegada</div>
                  <div className="text-sm text-muted-foreground">Concurrencia no competitiva</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Las ayudas se conceden por orden de llegada hasta agotar los 60 millones de euros o alcanzar el plazo límite. No hay puntuación competitiva: si cumples los requisitos, recibes la ayuda.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* NEW: Dos Niveles de Ambición */}
        <motion.div {...fadeInUp} className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-6">Dos Niveles de Ambición</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-blue-200 dark:border-blue-800">
              <CardContent className="p-6">
                <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300 hover:bg-blue-100 mb-3">BÁSICO</Badge>
                <h3 className="text-xl font-bold text-foreground mb-1">Rol Participante</h3>
                <div className="text-3xl font-black text-blue-600 mb-3">Hasta 15.000€</div>
                <p className="text-muted-foreground text-sm mb-4">
                  Ideal para empresas que quieren conectarse al ecosistema europeo de datos y <strong className="text-foreground">consumir datos y servicios</strong> de otros participantes.
                </p>
                <ul className="space-y-2 text-sm">
                  {["Acceso a catálogos federados", "Consumo de datasets compartidos", "Identidad soberana (W3C-DID)", "Conector IDS/GAIA-X básico"].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="border-2 border-emerald-200 dark:border-emerald-800 relative">
              <div className="absolute -top-3 right-4">
                <Badge className="bg-emerald-500 text-white hover:bg-emerald-500">⭐ RECOMENDADO</Badge>
              </div>
              <CardContent className="p-6">
                <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300 hover:bg-emerald-100 mb-3">AVANZADO</Badge>
                <h3 className="text-xl font-bold text-foreground mb-1">Rol Proveedor</h3>
                <div className="text-3xl font-black text-emerald-600 mb-3">Hasta 30.000€</div>
                <p className="text-muted-foreground text-sm mb-4">
                  Para empresas que quieren <strong className="text-foreground">publicar sus propios datos</strong> al ecosistema, generando valor y visibilidad como pioneros.
                </p>
                <ul className="space-y-2 text-sm">
                  {["Todo lo del Participante incluido", "Publicación de datasets propios", "Conectores certificados EDC", "Políticas ODRL de gobernanza", "Visibilidad como Pionero"].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Pricing Card (existing) */}
        <motion.div {...fadeInUp} className="mb-12">
          <Card className="border-2 border-primary/50 bg-primary/5">
            <CardContent className="p-8">
              <h3 className="text-center text-xl font-bold mb-6">Rango de Subvención</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-emerald-50 dark:bg-emerald-950/30 rounded-lg p-4 text-center">
                  <div className="text-3xl font-black text-emerald-600">15.000€</div>
                  <div className="text-sm text-muted-foreground">Subvención mínima</div>
                </div>
                <div className="bg-blue-50 dark:bg-blue-950/30 rounded-lg p-4 text-center">
                  <div className="text-3xl font-black text-blue-600">30.000€</div>
                  <div className="text-sm text-muted-foreground">Subvención máxima</div>
                </div>
              </div>
              <div className="bg-amber-50 dark:bg-amber-950/30 rounded-lg p-4 text-sm text-amber-800 dark:text-amber-200">
                <strong>Nota:</strong> El importe exacto dependerá de la evaluación de RED.ES. La consultoría incluye un análisis previo para maximizar el importe solicitado.
              </div>
              <div className="mt-6 space-y-2">
                {serviciosIncluidos.map((s) => (
                  <div key={s.label} className="flex items-center gap-3">
                    <s.icon className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{s.label}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <div className="text-sm text-muted-foreground">Precio anticipado (Fase 1)</div>
                <div className="text-2xl font-bold text-foreground">1.500€ + IVA</div>
                <div className="text-sm text-muted-foreground">250€/mes × 6 meses</div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* NEW: Propuesta de Valor */}
        <motion.div {...fadeInUp} className="mb-12">
          <Card>
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Nuestra Propuesta de Valor</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border rounded-lg p-5">
                  <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300 hover:bg-blue-100 mb-3">PARTICIPANTE</Badge>
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm text-muted-foreground">Gestión inicial (Fase 1)</div>
                      <div className="text-xl font-bold text-foreground">1.500€ + IVA</div>
                      <div className="text-xs text-muted-foreground">250€/mes × 6 meses</div>
                    </div>
                    <div className="border-t pt-3">
                      <div className="text-sm text-muted-foreground">Success fee (solo si se concede)</div>
                      <div className="text-xl font-bold text-emerald-600">3.000€</div>
                      <div className="text-xs text-muted-foreground">Se descuenta de la subvención concedida</div>
                    </div>
                  </div>
                </div>
                <div className="border rounded-lg p-5">
                  <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300 hover:bg-emerald-100 mb-3">PROVEEDOR</Badge>
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm text-muted-foreground">Gestión inicial (Fase 1)</div>
                      <div className="text-xl font-bold text-foreground">1.500€ + IVA</div>
                      <div className="text-xs text-muted-foreground">250€/mes × 6 meses</div>
                    </div>
                    <div className="border-t pt-3">
                      <div className="text-sm text-muted-foreground">Proyecto completo</div>
                      <div className="text-lg font-bold text-foreground">Análisis conjunto</div>
                      <div className="text-xs text-muted-foreground">Requiere transaccionar datos reales — presupuesto a medida</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* NEW: Checklist Proveedor */}
        <motion.div {...fadeInUp} className="mb-12">
          <Card>
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-emerald-500/10">
                  <Award className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Checklist para ser Proveedor</h2>
                  <p className="text-sm text-muted-foreground">Requisitos técnicos para optar a la subvención de 30.000€</p>
                </div>
              </div>
              <div className="space-y-4">
                {checklistProveedor.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-lg border bg-muted/30"
                  >
                    <div className="p-2 rounded-lg bg-emerald-500/10 flex-shrink-0">
                      <item.icon className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Summary Cards (existing) */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {[
            { value: "250€/mes", label: "Cuota fija + IVA", sub: "6 meses iniciales" },
            { value: "6 meses", label: "Fase inicial", sub: "Compromiso irrevocable" },
            { value: "30.000€", label: "Subvención máxima", sub: "A fondo perdido de RED.ES" },
          ].map((card, i) => (
            <motion.div key={card.value} {...fadeInUp} transition={{ delay: i * 0.1 }}>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-black text-primary">{card.value}</div>
                  <div className="font-semibold text-foreground">{card.label}</div>
                  <div className="text-sm text-muted-foreground">{card.sub}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Timeline (existing) */}
        <div className="mb-12 space-y-4">
          <h3 className="text-xl font-bold text-center mb-6">Fases del Contrato</h3>
          <Card className="border-l-4 border-amber-500">
            <CardContent className="p-6">
              <Badge className="bg-amber-500 text-white hover:bg-amber-500 mb-2">FASE 1</Badge>
              <h4 className="font-bold text-foreground">6 meses — Compromiso irrevocable</h4>
              <p className="text-muted-foreground mt-1">Inversión: 1.500€ + IVA. Financiación a través de HOKODO. Sin cancelación anticipada.</p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-emerald-500">
            <CardContent className="p-6">
              <Badge className="bg-emerald-500 text-white hover:bg-emerald-500 mb-2">FASE 2</Badge>
              <h4 className="font-bold text-foreground">Renovación automática — 36 meses</h4>
              <p className="text-muted-foreground mt-1">Condicional a la concesión de la subvención. El importe será equivalente a la subvención concedida.</p>
            </CardContent>
          </Card>
        </div>


        {/* NEW: Gastos Elegibles */}
        <motion.div {...fadeInUp} className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-6">Gastos Elegibles</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {gastosElegibles.map((cat, i) => (
              <motion.div key={cat.title} {...fadeInUp} transition={{ delay: i * 0.1 }}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="p-2 rounded-lg bg-primary/10 w-fit mb-3">
                      <cat.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h4 className="font-bold text-foreground mb-3">{cat.title}</h4>
                    <ul className="space-y-2">
                      {cat.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* NEW: Líneas Rojas Financieras */}
        <motion.div {...fadeInUp} className="mb-12">
          <Card className="border-2 border-red-200 dark:border-red-900 bg-red-50/50 dark:bg-red-950/20">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900/30">
                  <AlertTriangle className="h-6 w-6 text-red-600 dark:text-red-400" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Líneas Rojas Financieras</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 rounded-lg bg-background border">
                  <Euro className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">IVA No Subvencionable</h4>
                    <p className="text-sm text-muted-foreground">El IVA queda expresamente excluido de los gastos elegibles. Todos los importes se consideran sin IVA.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-background border">
                  <FileCheck className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Justificación Concurrente</h4>
                    <p className="text-sm text-muted-foreground">El trabajo debe estar terminado y pagado antes de presentar la solicitud de cobro. No se admiten gastos futuros ni compromisos pendientes.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-background border">
                  <Shield className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Principio DNSH (Do No Significant Harm)</h4>
                    <p className="text-sm text-muted-foreground">El proyecto no puede causar daño significativo al medio ambiente. Se debe cumplir el principio medioambiental exigido por los fondos Next Generation EU.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Monthly installments (existing) */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-center mb-6">Cuotas Mensuales</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Array.from({ length: 6 }, (_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-sm text-muted-foreground">Mes {i + 1}</div>
                    <div className="text-xl font-bold text-foreground">250€</div>
                    <div className="text-xs text-muted-foreground">+ IVA</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-3">Financiación por HOKODO</p>
        </div>

        {/* FAQ (expanded) */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-center mb-6">Preguntas Frecuentes</h3>
          <Accordion type="single" collapsible className="space-y-2">
            {faqItems.map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border rounded-lg px-4">
                <AccordionTrigger className="text-left font-medium">{item.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Legal Notice (existing) */}
        <Card className="mb-12 border-amber-300 bg-amber-50 dark:bg-amber-950/20">
          <CardContent className="p-6 text-sm text-amber-800 dark:text-amber-200">
            <h4 className="font-bold mb-2">Aviso Legal</h4>
            <p><strong>AGILE PROCUREMENT, S.L.</strong></p>
            <p>CIF: B44897494</p>
            <p>Domicilio: Calle General Álvarez de Castro, 44 – BJ IZ, 28010 Madrid, Spain</p>
            <p className="mt-2">Firma digital con validez conforme al Reglamento eIDAS (UE) 910/2014</p>
          </CardContent>
        </Card>

        {/* CTAs (existing) */}
        <div className="text-center space-y-4">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link to="/inscripcion-kit-espacio-datos">
              Solicitar Inscripción por 250€/mes <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Button asChild variant="outline">
              <Link to="/guia-kit-espacio-datos">Ver Propuesta Completa</Link>
            </Button>
            <Button asChild variant="ghost">
              <Link to="/contrato-kit-espacio-datos">Ver Contrato Completo y Condiciones</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
