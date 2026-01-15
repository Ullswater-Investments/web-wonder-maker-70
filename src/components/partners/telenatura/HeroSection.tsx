import { Badge } from "@/components/ui/badge";
import { Cpu, Leaf, Radio, MapPin } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/30 rounded-full" />
        <div className="absolute top-40 right-20 w-48 h-48 border border-white/20 rounded-full" />
        <div className="absolute bottom-20 left-1/4 w-24 h-24 border border-white/25 rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Partner Badge */}
          <Badge className="mb-6 bg-white/10 text-white border-white/20 hover:bg-white/20">
            <Leaf className="w-3 h-3 mr-1" />
            Partner Tecnológico #4
          </Badge>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            TeleNatura EBT
          </h1>
          
          <p className="text-xl md:text-2xl text-green-100 mb-4">
            Empresa de Base Tecnológica
          </p>

          <p className="text-lg text-green-200/80 mb-8 max-w-3xl mx-auto">
            TIC aplicadas a la gestión del medio ambiente, recursos naturales y agricultura de precisión
          </p>

          {/* Key Features */}
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <Radio className="w-4 h-4 text-green-300" />
              <span className="text-sm">IoT & Sensores</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <Cpu className="w-4 h-4 text-green-300" />
              <span className="text-sm">Automatización</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <MapPin className="w-4 h-4 text-green-300" />
              <span className="text-sm">Telecontrol</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <Leaf className="w-4 h-4 text-green-300" />
              <span className="text-sm">Agricultura de Precisión</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
