import { Link } from "react-router-dom";
import { ArrowLeft, LogOut, FileText, Download, ExternalLink, Book, Scale, Shield, Leaf, Mail, Phone, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { usePartnerAuth } from "@/hooks/usePartnerAuth";
import { FundingFooter } from "@/components/FundingFooter";
import { GlobalNavigation } from "@/components/GlobalNavigation";

const AraceaMiembros = () => {
  const { session, logout } = usePartnerAuth("aracea");

  const handleLogout = () => {
    logout();
    window.location.href = "/partners/aracea";
  };

  const documentos = [
    {
      title: "Guía de Uso ARACEA",
      description: "Manual completo para utilizar la herramienta de análisis de riesgos ambientales",
      icon: Book,
      href: "#",
      color: "emerald",
      badge: "PDF"
    },
    {
      title: "Manual Técnico de Análisis",
      description: "Metodología detallada para la elaboración del análisis de riesgos",
      icon: FileText,
      href: "#",
      color: "green",
      badge: "PDF"
    },
    {
      title: "Normativa Aplicable",
      description: "Compilación de la legislación vigente en materia de responsabilidad medioambiental",
      icon: Scale,
      href: "#",
      color: "teal",
      badge: "PDF"
    },
    {
      title: "Plantillas de Análisis",
      description: "Modelos y plantillas para la elaboración de informes de riesgos",
      icon: Shield,
      href: "#",
      color: "cyan",
      badge: "XLSX"
    }
  ];

  const recursosAdicionales = [
    {
      title: "Ley de Responsabilidad Medioambiental",
      description: "Acceso directo al BOE con la legislación actualizada",
      icon: Scale,
      href: "https://www.boe.es/buscar/act.php?id=BOE-A-2007-18475",
      external: true
    },
    {
      title: "Oficemen - Portal Principal",
      description: "Web corporativa de la Agrupación de Fabricantes de Cemento",
      icon: ExternalLink,
      href: "https://www.oficemen.com",
      external: true
    },
    {
      title: "Soporte Técnico ARACEA",
      description: "Contacta con el equipo de soporte para resolver dudas técnicas",
      icon: HelpCircle,
      href: "mailto:aracea@oficemen.com",
      external: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <GlobalNavigation />
              <Link 
                to="/partners" 
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Volver a Partners</span>
              </Link>
              
              <div className="hidden md:flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-emerald-600 flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">ARACEA</p>
                  <p className="text-xs text-muted-foreground">Oficemen</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="hidden sm:flex gap-1 bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-300">
                <Shield className="w-3 h-3" />
                Área de Miembros
              </Badge>
              
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleLogout}
                className="gap-2 text-destructive hover:text-destructive"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">Cerrar sesión</span>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            Bienvenido al Área de Miembros ARACEA
          </h1>
          <p className="text-muted-foreground">
            Accede a todos los recursos y herramientas para la gestión de riesgos ambientales de tu planta cementera.
          </p>
        </div>

        {/* Documentos Institucionales */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <FileText className="w-6 h-6 text-emerald-600" />
            Documentos y Recursos
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            {documentos.map((doc) => (
              <Card key={doc.title} className="hover:shadow-md transition-shadow border-emerald-100 dark:border-emerald-900/50">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div className={`w-10 h-10 rounded-lg bg-${doc.color}-100 dark:bg-${doc.color}-900/50 flex items-center justify-center`}>
                      <doc.icon className={`w-5 h-5 text-${doc.color}-600`} />
                    </div>
                    <Badge variant="outline">{doc.badge}</Badge>
                  </div>
                  <CardTitle className="text-lg mt-2">{doc.title}</CardTitle>
                  <CardDescription>{doc.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="w-full gap-2" asChild>
                    <a href={doc.href}>
                      <Download className="w-4 h-4" />
                      Descargar
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Recursos Adicionales */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <ExternalLink className="w-6 h-6 text-emerald-600" />
            Recursos Adicionales
          </h2>
          
          <div className="grid md:grid-cols-3 gap-4">
            {recursosAdicionales.map((recurso) => (
              <Card key={recurso.title} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                    <recurso.icon className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <CardTitle className="text-lg mt-2">{recurso.title}</CardTitle>
                  <CardDescription>{recurso.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" size="sm" className="w-full gap-2" asChild>
                    <a href={recurso.href} target={recurso.external ? "_blank" : undefined} rel={recurso.external ? "noopener noreferrer" : undefined}>
                      {recurso.external ? <ExternalLink className="w-4 h-4" /> : <Mail className="w-4 h-4" />}
                      {recurso.external ? "Visitar" : "Contactar"}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="mb-8">
          <Card className="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/30 dark:to-green-950/30 border-emerald-200 dark:border-emerald-800">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-semibold mb-2">¿Necesitas ayuda con ARACEA?</h3>
                  <p className="text-muted-foreground">
                    El equipo de Oficemen está disponible para resolver tus dudas sobre el análisis de riesgos ambientales.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button className="bg-emerald-600 hover:bg-emerald-700 gap-2" asChild>
                    <a href="mailto:aracea@oficemen.com">
                      <Mail className="w-4 h-4" />
                      Contactar
                    </a>
                  </Button>
                  <Button variant="outline" className="gap-2" asChild>
                    <a href="tel:+34913141835">
                      <Phone className="w-4 h-4" />
                      Llamar
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-6 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center">
                <Leaf className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm text-muted-foreground">
                ARACEA © {new Date().getFullYear()} - Oficemen
              </span>
            </div>
            <div className="text-sm text-muted-foreground">
              Área de Miembros - Acceso Restringido
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AraceaMiembros;
