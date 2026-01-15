import { Leaf, TrendingUp, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const WhitepaperHero = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-72 h-72 bg-green-400 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-400 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Badge variant="secondary" className="bg-green-500/20 text-green-100 border-green-400/30">
              White Paper
            </Badge>
            <Badge variant="outline" className="border-emerald-400/30 text-emerald-100">
              2025 Edition
            </Badge>
          </div>

          <div className="flex items-center justify-center gap-4 mb-8">
            <Leaf className="h-12 w-12 text-green-400" />
            <TrendingUp className="h-10 w-10 text-emerald-400" />
            <Globe className="h-10 w-10 text-teal-400" />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            El Futuro de la
            <span className="block text-green-400 mt-2">Agricultura Digital</span>
          </h1>

          <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
            Visión estratégica sobre la transformación digital del sector agrario español y europeo. 
            IoT, Data Spaces y sostenibilidad como pilares del campo del futuro.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-green-200">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              <span>Análisis de Mercado</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full" />
              <span>Casos de Éxito</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-teal-400 rounded-full" />
              <span>Roadmap 2025</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default WhitepaperHero;
