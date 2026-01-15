import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Mail, Phone, Download, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const DocCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-900 via-teal-800 to-emerald-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="bg-emerald-500/20 text-emerald-100 border-emerald-400/30 mb-6">
            Siguiente Paso
          </Badge>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para digitalizar tu explotación agraria?
          </h2>
          
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Solicita una demostración personalizada y descubre cómo TeleNatura Connect 
            puede transformar tu actividad agraria con IoT y datos.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button size="lg" className="bg-white text-emerald-900 hover:bg-emerald-50" asChild>
              <a href="mailto:demo@telenatura.es">
                <Calendar className="h-5 w-5 mr-2" />
                Solicitar Demo
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 hover:bg-white/10 text-white">
              <Download className="h-5 w-5 mr-2" />
              Descargar PDF
            </Button>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-6 text-center">
                <Mail className="h-8 w-8 mx-auto mb-3 text-emerald-300" />
                <h4 className="font-semibold mb-2">Email</h4>
                <a href="mailto:info@telenatura.es" className="text-emerald-200 hover:text-white">
                  info@telenatura.es
                </a>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-6 text-center">
                <Phone className="h-8 w-8 mx-auto mb-3 text-emerald-300" />
                <h4 className="font-semibold mb-2">Teléfono</h4>
                <a href="tel:+34900000000" className="text-emerald-200 hover:text-white">
                  +34 900 000 000
                </a>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-6 text-center">
                <Calendar className="h-8 w-8 mx-auto mb-3 text-emerald-300" />
                <h4 className="font-semibold mb-2">Reunión</h4>
                <a href="mailto:comercial@telenatura.es" className="text-emerald-200 hover:text-white">
                  Agendar llamada
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Navigation */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-emerald-200 mb-4">Continúa explorando la documentación</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="link" className="text-white hover:text-emerald-200" asChild>
                <Link to="/partners/telenatura-ebt/proyecto">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Doc Proyecto
                </Link>
              </Button>
              <Button variant="link" className="text-white hover:text-emerald-200" asChild>
                <Link to="/partners/telenatura-ebt/whitepaper">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  White Paper
                </Link>
              </Button>
              <Button variant="link" className="text-white hover:text-emerald-200" asChild>
                <Link to="/partners/telenatura-ebt/miembros">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Área de Miembros
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocCTA;
