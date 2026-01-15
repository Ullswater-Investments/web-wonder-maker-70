import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { BarChart3, TrendingUp, DollarSign, Users, Building2, MapPin } from "lucide-react";

const salaryRanges = [
  {
    level: "Buyer Junior",
    range: "28.000€ - 38.000€",
    median: "32.000€",
    experience: "0-3 años",
  },
  {
    level: "Buyer Senior",
    range: "38.000€ - 52.000€",
    median: "45.000€",
    experience: "3-7 años",
  },
  {
    level: "Category Manager",
    range: "50.000€ - 70.000€",
    median: "58.000€",
    experience: "5-10 años",
  },
  {
    level: "Purchasing Manager",
    range: "65.000€ - 90.000€",
    median: "75.000€",
    experience: "8-15 años",
  },
  {
    level: "Head of Procurement",
    range: "85.000€ - 120.000€",
    median: "98.000€",
    experience: "12+ años",
  },
  {
    level: "CPO / Director",
    range: "110.000€ - 180.000€+",
    median: "135.000€",
    experience: "15+ años",
  },
];

const certificationPremium = [
  { level: "Sin certificación", percentage: "Base" },
  { level: "Certificado Básico", percentage: "+8%" },
  { level: "Certificado Profesional", percentage: "+15%" },
  { level: "Certificado Avanzado", percentage: "+22%" },
  { level: "Certificado Executive", percentage: "+30%" },
];

const sectorComparison = [
  { sector: "Farmacéutico", index: 115 },
  { sector: "Automoción", index: 108 },
  { sector: "Energía", index: 112 },
  { sector: "Retail", index: 95 },
  { sector: "Construcción", index: 92 },
  { sector: "Servicios", index: 88 },
];

export const DocBenchmarking = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-300 dark:bg-blue-900/30 dark:text-blue-300">
              <BarChart3 className="h-3 w-3 mr-1" />
              Sección 11
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Benchmarking Sectorial
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Estudios salariales y análisis comparativos exclusivos para 
              profesionales de Compras en España.
            </p>
          </div>
        </FadeIn>

        {/* Salary Ranges */}
        <FadeIn delay={0.2}>
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <DollarSign className="h-5 w-5 text-emerald-600" />
                Rangos Salariales por Nivel (España 2025)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium">Nivel</th>
                      <th className="text-left py-3 px-4 font-medium">Experiencia</th>
                      <th className="text-left py-3 px-4 font-medium">Rango Salarial</th>
                      <th className="text-left py-3 px-4 font-medium">Mediana</th>
                    </tr>
                  </thead>
                  <tbody>
                    {salaryRanges.map((row) => (
                      <tr key={row.level} className="border-b hover:bg-muted/50">
                        <td className="py-3 px-4 font-medium">{row.level}</td>
                        <td className="py-3 px-4 text-muted-foreground">{row.experience}</td>
                        <td className="py-3 px-4">{row.range}</td>
                        <td className="py-3 px-4">
                          <Badge variant="secondary">{row.median}</Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                * Datos del Estudio Salarial AERCE 2025. Muestra: 1.200+ profesionales.
              </p>
            </CardContent>
          </Card>
        </FadeIn>

        {/* Certification Premium & Sector Comparison */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <FadeIn delay={0.3}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <TrendingUp className="h-5 w-5 text-blue-600" />
                  Prima por Certificación
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {certificationPremium.map((item) => (
                    <div key={item.level} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <span className="text-sm">{item.level}</span>
                      <Badge className={item.level === "Sin certificación" ? "bg-muted text-muted-foreground" : "bg-emerald-600"}>
                        {item.percentage}
                      </Badge>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  Incremento salarial medio vs profesionales no certificados
                </p>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={0.4}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Building2 className="h-5 w-5 text-purple-600" />
                  Comparativa por Sector
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {sectorComparison.map((item) => (
                    <div key={item.sector} className="flex items-center gap-4">
                      <span className="text-sm w-28">{item.sector}</span>
                      <div className="flex-1 h-4 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                          style={{ width: `${item.index}%` }}
                        />
                      </div>
                      <Badge variant="outline" className="w-16 justify-center">
                        {item.index}
                      </Badge>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  Índice salarial (100 = media nacional)
                </p>
              </CardContent>
            </Card>
          </FadeIn>
        </div>

        {/* Study Access */}
        <FadeIn delay={0.5}>
          <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
            <CardContent className="py-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">Acceso Exclusivo para Miembros</h3>
                  <p className="text-blue-100">
                    Los socios de AERCE tienen acceso completo al Estudio Salarial anual 
                    con segmentación por región, sector y tamaño de empresa.
                  </p>
                </div>
                <div className="flex gap-3">
                  <Badge className="bg-white/20 text-white border-white/30">
                    <MapPin className="h-3 w-3 mr-1" />
                    17 CC.AA.
                  </Badge>
                  <Badge className="bg-white/20 text-white border-white/30">
                    <Building2 className="h-3 w-3 mr-1" />
                    12 Sectores
                  </Badge>
                  <Badge className="bg-white/20 text-white border-white/30">
                    <Users className="h-3 w-3 mr-1" />
                    1.200+ respuestas
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
};
