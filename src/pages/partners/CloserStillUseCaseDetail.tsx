import React, { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowLeft, AlertTriangle, Lightbulb, TrendingUp, Users, 
  CheckCircle2, Cpu, ExternalLink, Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getUseCaseById, UseCaseDetail } from "@/data/closerstill-use-cases-detail";
import { MermaidDiagram } from "@/components/MermaidDiagram";

const categoryConfig = {
  retail: { 
    label: "Retail & eCommerce", 
    color: "from-rose-500 to-red-600", 
    badgeClass: "bg-rose-500/20 text-rose-300 border-rose-500/30",
    glowClass: "shadow-rose-500/20"
  },
  tech: { 
    label: "Tech & AI", 
    color: "from-blue-500 to-indigo-600", 
    badgeClass: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    glowClass: "shadow-blue-500/20"
  },
  b2b: { 
    label: "Business Innovation", 
    color: "from-emerald-500 to-green-600", 
    badgeClass: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    glowClass: "shadow-emerald-500/20"
  },
  future: { 
    label: "Future Vision 🚀", 
    color: "from-fuchsia-500 to-purple-600", 
    badgeClass: "bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/30",
    glowClass: "shadow-fuchsia-500/20"
  },
};

const CloserStillUseCaseDetail = () => {
  const { caseId } = useParams<{ caseId: string }>();
  const navigate = useNavigate();
  
  const useCase = caseId ? getUseCaseById(parseInt(caseId)) : undefined;
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [caseId]);

  if (!useCase) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Caso de uso no encontrado</h1>
          <Button onClick={() => navigate("/partners/closerstill/miembros/innovacion")}>
            <ArrowLeft className="h-4 w-4 mr-2" /> Volver a la Galería
          </Button>
        </div>
      </div>
    );
  }

  const config = categoryConfig[useCase.category];
  const Icon = useCase.icon;
  const { VisualComponent } = useCase;

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-sm border-b border-slate-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate("/partners/closerstill/miembros/innovacion")}
              className="text-slate-400 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4 mr-2" /> Volver a Galería
            </Button>
            <Badge className={config.badgeClass}>
              {config.label}
            </Badge>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-4">
            {useCase.badges.map((badge) => (
              <Badge 
                key={badge} 
                variant="outline" 
                className="border-slate-600 text-slate-300"
              >
                {badge}
              </Badge>
            ))}
          </div>

          {/* Title */}
          <div className="flex items-center gap-4 mb-4">
            <div className={`p-3 rounded-xl bg-gradient-to-br ${config.color} shadow-lg ${config.glowClass}`}>
              <Icon className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">{useCase.title}</h1>
              <p className="text-lg text-slate-400">{useCase.tagline}</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
            {useCase.description}
          </p>
        </motion.div>

        {/* Visual Canvas - Expanded */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <Card className="bg-slate-900/50 border-slate-700 overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle className="text-slate-300 text-sm font-medium flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-amber-400" />
                Visualización del Caso de Uso
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="h-48 md:h-64 flex items-center justify-center bg-slate-950/50 rounded-xl border border-slate-800">
                <div className="transform scale-150 md:scale-200">
                  <VisualComponent />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Problem Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-red-950/20 border-red-800/30 h-full">
              <CardHeader>
                <CardTitle className="text-red-400 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  El Problema
                </CardTitle>
                <p className="text-lg font-semibold text-white">
                  {useCase.problem.headline}
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {useCase.problem.painPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3 text-slate-300">
                      <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
                
                <Separator className="bg-red-800/30" />
                
                <div className="bg-red-950/50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-red-400 mb-1">
                    {useCase.problem.statistic.value}
                  </div>
                  <div className="text-sm text-red-300/80">
                    {useCase.problem.statistic.label}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Solution Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="bg-emerald-950/20 border-emerald-800/30 h-full">
              <CardHeader>
                <CardTitle className="text-emerald-400 flex items-center gap-2">
                  <Lightbulb className="h-5 w-5" />
                  La Solución
                </CardTitle>
                <p className="text-sm text-slate-300">
                  {useCase.solution.overview}
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  {useCase.solution.steps.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </div>
                      <div>
                        <div className="font-semibold text-white">{step.title}</div>
                        <div className="text-sm text-slate-400">{step.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Separator className="bg-emerald-800/30" />
                
                <div>
                  <div className="text-xs text-emerald-400 mb-2 flex items-center gap-1">
                    <Cpu className="h-3 w-3" /> Tecnologías Habilitadoras
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {useCase.solution.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="outline" 
                        className="bg-emerald-950/50 border-emerald-700 text-emerald-300 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Metrics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-blue-400" />
            Métricas de Impacto
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {useCase.metrics.map((metric, index) => (
              <Card 
                key={index} 
                className="bg-slate-900/50 border-slate-700 hover:border-slate-600 transition-colors"
              >
                <CardContent className="p-6 text-center">
                  <motion.div 
                    className={`text-3xl font-bold mb-1 bg-gradient-to-r ${config.color} bg-clip-text text-transparent`}
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    {metric.value}
                  </motion.div>
                  <div className="text-sm text-slate-300 mb-2">{metric.label}</div>
                  {metric.trend && (
                    <Badge variant="outline" className="text-[10px] border-slate-600 text-slate-400">
                      {metric.trend}
                    </Badge>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Technical Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <Card className="bg-slate-900/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-slate-200 flex items-center gap-2">
                <Cpu className="h-5 w-5 text-purple-400" />
                Diagrama Técnico
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-slate-950/50 rounded-xl p-6 border border-slate-800">
                <MermaidDiagram chart={useCase.mermaidDiagram} />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Stakeholders */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Users className="h-5 w-5 text-amber-400" />
            ¿Quién Gana Qué?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {useCase.stakeholders.map((stakeholder, index) => (
              <Card 
                key={index}
                className="bg-slate-900/50 border-slate-700"
              >
                <CardContent className="p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                      <CheckCircle2 className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-white mb-1">{stakeholder.role}</div>
                      <div className="text-sm text-slate-400">{stakeholder.benefit}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-8"
        >
          <Card className={`bg-gradient-to-br ${config.color} border-0`}>
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-2">
                ¿Activamos este caso en e-Show 2026?
              </h2>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                Este caso de uso está listo para implementarse como piloto. 
                Contacta con nuestro equipo para definir el alcance y timeline.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-white text-slate-900 hover:bg-white/90">
                  🚀 Solicitar Demo Piloto
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/10"
                  onClick={() => navigate("/partners/closerstill/miembros/innovacion")}
                >
                  <ArrowLeft className="h-4 w-4 mr-2" /> Ver Otros Casos
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Navigation between cases */}
        <div className="flex justify-between items-center pt-4 border-t border-slate-800">
          {useCase.id > 1 && (
            <Link 
              to={`/partners/closerstill/miembros/innovacion/${useCase.id - 1}`}
              className="text-slate-400 hover:text-white transition-colors flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Caso Anterior
            </Link>
          )}
          <div className="flex-1" />
          {useCase.id < 13 && (
            <Link 
              to={`/partners/closerstill/miembros/innovacion/${useCase.id + 1}`}
              className="text-slate-400 hover:text-white transition-colors flex items-center gap-2"
            >
              Siguiente Caso
              <ExternalLink className="h-4 w-4" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default CloserStillUseCaseDetail;
