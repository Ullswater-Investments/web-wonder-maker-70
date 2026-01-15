import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Mail, Phone, Download, ArrowRight, Leaf } from "lucide-react";
import { Link } from "react-router-dom";

const WhitepaperCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Leaf className="h-10 w-10 text-green-400" />
          </div>

          <Badge variant="secondary" className="bg-green-500/20 text-green-100 border-green-400/30 mb-6">
            Conclusión
          </Badge>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            El futuro del campo es digital
          </h2>
          
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            La transformación digital de la agricultura no es una opción, es una necesidad. 
            TeleNatura está preparado para acompañarte en este viaje hacia una agricultura 
            más eficiente, sostenible y rentable.
          </p>

          <blockquote className="text-lg text-green-200 italic border-l-4 border-green-400 pl-6 text-left max-w-2xl mx-auto mb-8">
            "No podemos resolver los problemas del siglo XXI con las herramientas del siglo XX. 
            La agricultura del futuro será digital o no será."
          </blockquote>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button size="lg" className="bg-white text-green-900 hover:bg-green-50" asChild>
              <a href="mailto:contacto@telenatura.es">
                <Calendar className="h-5 w-5 mr-2" />
                Agendar Reunión
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 hover:bg-white/10 text-white">
              <Download className="h-5 w-5 mr-2" />
              Descargar White Paper
            </Button>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-6 text-center">
                <Mail className="h-8 w-8 mx-auto mb-3 text-green-300" />
                <h4 className="font-semibold mb-2">Email</h4>
                <a href="mailto:info@telenatura.es" className="text-green-200 hover:text-white">
                  info@telenatura.es
                </a>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-6 text-center">
                <Phone className="h-8 w-8 mx-auto mb-3 text-green-300" />
                <h4 className="font-semibold mb-2">Teléfono</h4>
                <a href="tel:+34900000000" className="text-green-200 hover:text-white">
                  +34 900 000 000
                </a>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-6 text-center">
                <Calendar className="h-8 w-8 mx-auto mb-3 text-green-300" />
                <h4 className="font-semibold mb-2">Demo</h4>
                <a href="mailto:demo@telenatura.es" className="text-green-200 hover:text-white">
                  Solicitar demo
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Navigation */}
          <div className="pt-8 border-t border-white/20">
            <p className="text-green-200 mb-4">Continúa explorando la documentación</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="link" className="text-white hover:text-green-200" asChild>
                <Link to="/partners/telenatura-ebt/proyecto">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Doc Proyecto
                </Link>
              </Button>
              <Button variant="link" className="text-white hover:text-green-200" asChild>
                <Link to="/partners/telenatura-ebt/doc-tecnico">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Doc Técnico
                </Link>
              </Button>
              <Button variant="link" className="text-white hover:text-green-200" asChild>
                <Link to="/partners/telenatura-ebt/miembros">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Área de Miembros
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 pt-8 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-green-300 text-sm">
            © {new Date().getFullYear()} TeleNatura EBT. White Paper - Enero 2025
          </p>
          <p className="text-green-400 text-xs mt-2">
            Powered by Pontus-X Data Space
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhitepaperCTA;
