import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, BookOpen, Lightbulb, Leaf, Phone, Mail, LogOut, Presentation, ShoppingCart, FileSignature, HelpCircle } from "lucide-react";
import { usePartnerAuth } from "@/hooks/usePartnerAuth";

const TeleNaturaMiembros = () => {
  const navigate = useNavigate();
  const { session, logout } = usePartnerAuth("telenatura-ebt");

  const handleLogout = () => {
    logout();
    navigate("/partners/telenatura-ebt");
  };

  const documents = [
    {
      title: "Doc Proyecto",
      description: "Documentación completa del proyecto TeleNatura Connect con soluciones IoT para el sector agrario.",
      icon: FileText,
      href: "/partners/telenatura-ebt/proyecto",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
    },
    {
      title: "Doc Técnico",
      description: "Especificaciones técnicas de hardware, software, conectividad y arquitectura del sistema.",
      icon: BookOpen,
      href: "/partners/telenatura-ebt/doc-tecnico",
      color: "text-teal-600",
      bgColor: "bg-teal-50",
    },
    {
      title: "White Paper",
      description: "El futuro de la agricultura digital: visión estratégica y hoja de ruta 2025.",
      icon: Lightbulb,
      href: "/partners/telenatura-ebt/whitepaper",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
  ];

  const additionalResources = [
    {
      title: "Catálogo IoT",
      description: "Sensores, estaciones y telecontrol",
      icon: ShoppingCart,
      href: "/partners/telenatura-ebt/catalogo",
    },
    {
      title: "Presentación Corp.",
      description: "Presentación corporativa TeleNatura",
      icon: Presentation,
      href: "/partners/telenatura-ebt/presentacion",
    },
    {
      title: "Acuerdo Marco",
      description: "Modelo de acuerdo de colaboración",
      icon: FileSignature,
      href: "/partners/telenatura-ebt/acuerdo",
    },
    {
      title: "Soporte Técnico",
      description: "Contacto directo con el equipo técnico",
      icon: HelpCircle,
      href: "mailto:soporte@telenatura.es",
      external: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-emerald-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Leaf className="h-8 w-8 text-emerald-600" />
              <span className="text-xl font-bold text-emerald-800">TeleNatura</span>
            </div>
            <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">
              Área de Miembros
            </Badge>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground hidden sm:inline">
              {session?.partner_name}
            </span>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Cerrar Sesión
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-emerald-900 mb-4">
            Área de Miembros TeleNatura EBT
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Accede a toda la documentación técnica, comercial y estratégica del proyecto TeleNatura Connect 
            para la transformación digital del sector agrario.
          </p>
        </div>

        {/* Documents Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {documents.map((doc) => (
            <Card key={doc.title} className="group hover:shadow-lg transition-all duration-300 border-emerald-100 hover:border-emerald-300">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg ${doc.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <doc.icon className={`h-6 w-6 ${doc.color}`} />
                </div>
                <CardTitle className="text-emerald-900">{doc.title}</CardTitle>
                <CardDescription>{doc.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700">
                  <Link to={doc.href}>
                    Acceder al documento
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Resources */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-emerald-900 mb-6 text-center">
            Recursos Adicionales
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {additionalResources.map((resource) => (
              <Card key={resource.title} className="hover:shadow-md transition-shadow border-emerald-100">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0">
                      <resource.icon className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-emerald-900 text-sm">{resource.title}</h3>
                      <p className="text-xs text-muted-foreground">{resource.description}</p>
                      {resource.external ? (
                        <a 
                          href={resource.href} 
                          className="text-xs text-emerald-600 hover:text-emerald-700 mt-1 inline-block"
                        >
                          Abrir →
                        </a>
                      ) : (
                        <Link 
                          to={resource.href} 
                          className="text-xs text-emerald-600 hover:text-emerald-700 mt-1 inline-block"
                        >
                          Ver →
                        </Link>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <Card className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white border-0">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">¿Necesitas más información?</h3>
            <p className="text-emerald-100 mb-6 max-w-xl mx-auto">
              Nuestro equipo está disponible para resolver cualquier duda sobre el proyecto TeleNatura Connect 
              y ayudarte en la transformación digital de tu explotación agraria.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="secondary" size="lg" asChild>
                <a href="mailto:info@telenatura.es">
                  <Mail className="h-4 w-4 mr-2" />
                  info@telenatura.es
                </a>
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white/30 hover:bg-white/20 text-white" asChild>
                <a href="tel:+34900000000">
                  <Phone className="h-4 w-4 mr-2" />
                  Contactar
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="bg-emerald-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Leaf className="h-6 w-6" />
            <span className="font-semibold">TeleNatura EBT</span>
          </div>
          <p className="text-emerald-200 text-sm">
            © {new Date().getFullYear()} TeleNatura EBT. Todos los derechos reservados.
          </p>
          <p className="text-emerald-300 text-xs mt-2">
            Powered by Pontus-X Data Space
          </p>
        </div>
      </footer>
    </div>
  );
};

export default TeleNaturaMiembros;
