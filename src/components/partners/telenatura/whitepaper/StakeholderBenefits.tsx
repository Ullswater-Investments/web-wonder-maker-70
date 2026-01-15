import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Building2, Leaf, Euro } from "lucide-react";

const StakeholderBenefits = () => {
  const stakeholders = [
    {
      icon: User,
      title: "Agricultor",
      subtitle: "Beneficios directos en la explotación",
      color: "bg-amber-500",
      benefits: [
        { text: "Ahorro de agua y energía", metric: "30-40%" },
        { text: "Reducción de insumos", metric: "20-25%" },
        { text: "Aumento de rendimiento", metric: "15-20%" },
        { text: "Menos horas de trabajo manual", metric: "40%" },
        { text: "Decisiones basadas en datos", metric: "24/7" },
        { text: "Tranquilidad y control remoto", metric: "100%" },
      ],
    },
    {
      icon: Building2,
      title: "Empresa Agraria",
      subtitle: "Ventajas competitivas y operativas",
      color: "bg-blue-500",
      benefits: [
        { text: "Trazabilidad completa", metric: "Obligatorio 2027" },
        { text: "Certificaciones simplificadas", metric: "-50% tiempo" },
        { text: "Reporting ESG automatizado", metric: "CSRD ready" },
        { text: "Acceso a financiación verde", metric: "+15% mejores condiciones" },
        { text: "Diferenciación en mercado", metric: "Premium pricing" },
        { text: "Integración con ERP", metric: "API abierta" },
      ],
    },
    {
      icon: Leaf,
      title: "Medioambiente",
      subtitle: "Impacto positivo y sostenibilidad",
      color: "bg-green-500",
      benefits: [
        { text: "Reducción huella hídrica", metric: "35%" },
        { text: "Menos emisiones CO2", metric: "25%" },
        { text: "Reducción agroquímicos", metric: "30%" },
        { text: "Biodiversidad preservada", metric: "Monitorizada" },
        { text: "Captura de carbono", metric: "Medible" },
        { text: "Economía circular", metric: "Habilitada" },
      ],
    },
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-green-900 mb-2">8. Beneficios por Stakeholder</h2>
          <p className="text-muted-foreground mb-8">
            Valor generado para cada actor del ecosistema agrario
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {stakeholders.map((stakeholder, index) => (
              <Card key={index} className="overflow-hidden">
                <div className={`${stakeholder.color} p-4 text-white`}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                      <stakeholder.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{stakeholder.title}</h3>
                      <p className="text-sm opacity-90">{stakeholder.subtitle}</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <ul className="space-y-3">
                    {stakeholder.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center justify-between">
                        <span className="text-sm text-slate-700">{benefit.text}</span>
                        <Badge variant="secondary" className="text-xs bg-green-50 text-green-700">
                          {benefit.metric}
                        </Badge>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Economic Impact */}
          <Card className="mt-8 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Euro className="h-8 w-8" />
                <h4 className="font-bold text-xl">Impacto Económico Agregado</h4>
              </div>
              <div className="grid md:grid-cols-4 gap-4 text-center">
                <div>
                  <p className="text-3xl font-bold">€4.500</p>
                  <p className="text-green-100 text-sm">Ahorro medio/ha/año</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">18 meses</p>
                  <p className="text-green-100 text-sm">Payback típico</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">250%</p>
                  <p className="text-green-100 text-sm">ROI a 5 años</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">€12M</p>
                  <p className="text-green-100 text-sm">Ahorro acumulado clientes</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StakeholderBenefits;
