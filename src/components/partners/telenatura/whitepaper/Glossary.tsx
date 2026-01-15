import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen } from "lucide-react";

const Glossary = () => {
  const terms = [
    {
      term: "Agricultura de Precisión",
      definition: "Gestión de cultivos basada en la variabilidad espacial y temporal de cada parcela, utilizando tecnología para optimizar inputs.",
      category: "Concepto",
    },
    {
      term: "Data Space",
      definition: "Infraestructura de intercambio de datos que garantiza soberanía, interoperabilidad y confianza entre participantes.",
      category: "Datos",
    },
    {
      term: "Edge Computing",
      definition: "Procesamiento de datos cerca de su origen (en el campo) para reducir latencia y ancho de banda necesario.",
      category: "Tecnología",
    },
    {
      term: "ETo (Evapotranspiración)",
      definition: "Cantidad de agua que se evapora del suelo y transpiran las plantas, clave para calcular necesidades de riego.",
      category: "Agronomía",
    },
    {
      term: "Gaia-X",
      definition: "Iniciativa europea para crear una infraestructura de datos federada, segura y soberana.",
      category: "Datos",
    },
    {
      term: "IoT (Internet of Things)",
      definition: "Red de dispositivos físicos conectados que recopilan e intercambian datos automáticamente.",
      category: "Tecnología",
    },
    {
      term: "LoRaWAN",
      definition: "Protocolo de red de largo alcance y bajo consumo, ideal para sensores en zonas rurales.",
      category: "Conectividad",
    },
    {
      term: "MQTT",
      definition: "Protocolo de mensajería ligero optimizado para IoT, basado en publicación/suscripción.",
      category: "Tecnología",
    },
    {
      term: "NDVI",
      definition: "Índice de Vegetación de Diferencia Normalizada, mide la salud y vigor de las plantas desde imágenes.",
      category: "Agronomía",
    },
    {
      term: "ODRL",
      definition: "Open Digital Rights Language, estándar para expresar políticas de uso de datos.",
      category: "Datos",
    },
    {
      term: "Pontus-X",
      definition: "Marketplace descentralizado para intercambio de datos basado en tecnología Ocean Protocol.",
      category: "Datos",
    },
    {
      term: "RDC (Riego Deficitario Controlado)",
      definition: "Estrategia de riego que aplica estrés hídrico controlado para mejorar calidad sin sacrificar rendimiento.",
      category: "Agronomía",
    },
    {
      term: "SLA (Service Level Agreement)",
      definition: "Acuerdo de nivel de servicio que define compromisos de disponibilidad y soporte.",
      category: "Servicio",
    },
    {
      term: "VWC (Volumetric Water Content)",
      definition: "Contenido volumétrico de agua en el suelo, medido por sensores capacitivos.",
      category: "Agronomía",
    },
  ];

  const categories = [...new Set(terms.map(t => t.category))];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <BookOpen className="h-8 w-8 text-green-600" />
            <h2 className="text-3xl font-bold text-green-900">11. Glosario</h2>
          </div>
          <p className="text-muted-foreground mb-8">
            Definiciones de términos técnicos utilizados en este documento
          </p>

          {/* Category filters */}
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((cat, index) => (
              <Badge key={index} variant="outline" className="text-sm">
                {cat}
              </Badge>
            ))}
          </div>

          {/* Terms list */}
          <Card>
            <CardContent className="p-0">
              <div className="divide-y divide-slate-100">
                {terms.map((item, index) => (
                  <div key={index} className="p-4 hover:bg-slate-50 transition-colors">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="font-semibold text-green-900">{item.term}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{item.definition}</p>
                      </div>
                      <Badge variant="secondary" className="text-xs flex-shrink-0">
                        {item.category}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Glossary;
