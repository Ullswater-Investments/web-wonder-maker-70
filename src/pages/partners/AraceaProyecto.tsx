import { Link } from "react-router-dom";
import { ArrowLeft, Download, FileText, ExternalLink, Leaf, Scale, Shield, Factory, Users, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { FundingFooter } from "@/components/FundingFooter";
import { GlobalNavigation } from "@/components/GlobalNavigation";

const AraceaProyecto = () => {
  const handleDownloadPDF = () => {
    toast.info("Generando PDF del proyecto ARACEA...");
    setTimeout(() => {
      toast.success("PDF generado correctamente");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Left: Back button */}
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

            {/* Right: Action buttons */}
            <div className="hidden sm:flex items-center gap-2">
              <Button variant="default" size="sm" onClick={handleDownloadPDF} className="gap-2">
                <Download className="w-4 h-4" />
                Descargar PDF
              </Button>
              
              <div className="h-4 w-px bg-border" />
              
              <Button variant="secondary" size="sm" asChild>
                <Link to="/partners/aracea" className="gap-2">
                  <FileText className="w-4 h-4" />
                  Acceso Miembros
                </Link>
              </Button>
            </div>

            {/* Mobile: External link */}
            <div className="flex sm:hidden items-center gap-2">
              <a 
                href="https://www.oficemen.com" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="sm" className="gap-2">
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </a>
              
              <Link to="/partners/aracea">
                <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 gap-2">
                  <FileText className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-emerald-50 via-white to-green-50 dark:from-emerald-950/30 dark:via-background dark:to-green-950/30 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-500 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-300">
              <Leaf className="w-3 h-3 mr-1" />
              Gestión Medioambiental
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              ARACEA
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-4">
              Análisis de Riesgos Ambientales para la Industria Cementera Española
            </p>
            
            <p className="text-muted-foreground mb-8">
              Herramienta desarrollada por <strong>Oficemen</strong> (Agrupación de Fabricantes de Cemento de España)
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700" asChild>
                <Link to="/partners/aracea">
                  <Shield className="w-5 h-5 mr-2" />
                  Acceso Miembros
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://www.oficemen.com" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Visitar Oficemen
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Qué es ARACEA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">¿Qué es ARACEA?</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-emerald-200 dark:border-emerald-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400">
                    <Factory className="w-5 h-5" />
                    Herramienta Especializada
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    ARACEA es una <strong>herramienta informática</strong> desarrollada por Oficemen 
                    (la Agrupación de Fabricantes de Cemento de España) diseñada específicamente 
                    para la <strong>gestión medioambiental</strong> de las plantas de cemento.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-emerald-200 dark:border-emerald-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400">
                    <Leaf className="w-5 h-5" />
                    Análisis de Riesgos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Su función principal es facilitar a las instalaciones cementeras la 
                    elaboración de su <strong>Análisis de Riesgos Ambientales</strong>. 
                    El nombre deriva de las siglas relacionadas con este proceso (Análisis de Riesgos Ambientales...).
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Para qué sirve */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">¿Para qué sirve?</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center">
                    <Scale className="w-8 h-8 text-emerald-600" />
                  </div>
                  <CardTitle className="text-lg">Cumplimiento Legal</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">
                    Permite a las fábricas obtener modelos o borradores de sus análisis de riesgos 
                    para cumplir con la <strong>Ley de Responsabilidad Medioambiental</strong> y las 
                    órdenes ministeriales correspondientes.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center">
                    <ClipboardCheck className="w-8 h-8 text-green-600" />
                  </div>
                  <CardTitle className="text-lg">Evaluación de Riesgos</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">
                    Es una plataforma privada donde las empresas introducen sus datos operativos 
                    para <strong>evaluar y gestionar</strong> posibles riesgos medioambientales 
                    derivados de su actividad.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-teal-100 dark:bg-teal-900/50 flex items-center justify-center">
                    <Shield className="w-8 h-8 text-teal-600" />
                  </div>
                  <CardTitle className="text-lg">Reporte Estandarizado</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">
                    Permite <strong>calcular y reportar</strong> riesgos ambientales de forma 
                    estandarizada ante la administración pública.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quién lo usa */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">¿Quién lo usa?</h2>
            
            <Card className="border-emerald-200 dark:border-emerald-800">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-24 h-24 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center flex-shrink-0">
                    <Users className="w-12 h-12 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Profesionales del Sector Cementero</h3>
                    <p className="text-muted-foreground">
                      ARACEA es el <strong>software interno</strong> que utilizan los ingenieros y 
                      responsables de medio ambiente de las <strong>cementeras españolas</strong> para 
                      calcular y reportar sus riesgos ambientales de forma estandarizada ante la administración.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <Badge variant="secondary">Ingenieros Ambientales</Badge>
                      <Badge variant="secondary">Responsables de Medio Ambiente</Badge>
                      <Badge variant="secondary">Técnicos de Planta</Badge>
                      <Badge variant="secondary">Directores de Fábrica</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-emerald-600 to-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Eres miembro de Oficemen?</h2>
          <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
            Accede al área exclusiva para miembros y gestiona tus análisis de riesgos ambientales 
            con todas las herramientas y recursos disponibles.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/partners/aracea">
                <Shield className="w-5 h-5 mr-2" />
                Acceso Miembros
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10" asChild>
              <a href="mailto:info@oficemen.com">
                Contactar con Oficemen
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <FundingFooter variant="light" showTransparency={false} />
    </div>
  );
};

export default AraceaProyecto;
