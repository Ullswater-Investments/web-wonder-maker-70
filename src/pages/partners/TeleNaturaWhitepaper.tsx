import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { 
  Menu, Download, ArrowLeft, Home, FileText, Lightbulb, 
  Globe, AlertTriangle, Leaf, Layers, Link2, Briefcase,
  Users, TreePine, Calendar, BookOpen, Phone, LogOut
} from "lucide-react";
import { usePartnerAuth } from "@/hooks/usePartnerAuth";

import {
  WhitepaperHero,
  ExecutiveSummary,
  SectorContext,
  DigitalChallenges,
  TeleNaturaSolution,
  SystemArchitecture,
  DataSpaceIntegration,
  UseCasesDetail,
  StakeholderBenefits,
  SustainabilityImpact,
  Roadmap2025,
  Glossary,
  WhitepaperCTA,
} from "@/components/partners/telenatura/whitepaper";

const sections = [
  { id: "hero", label: "Portada", icon: FileText },
  { id: "summary", label: "Resumen Ejecutivo", icon: Lightbulb },
  { id: "context", label: "Contexto del Sector", icon: Globe },
  { id: "challenges", label: "Retos Digitales", icon: AlertTriangle },
  { id: "solution", label: "Solución TeleNatura", icon: Leaf },
  { id: "architecture", label: "Arquitectura", icon: Layers },
  { id: "dataspace", label: "Data Spaces", icon: Link2 },
  { id: "usecases", label: "Casos de Uso", icon: Briefcase },
  { id: "benefits", label: "Beneficios", icon: Users },
  { id: "sustainability", label: "Sostenibilidad", icon: TreePine },
  { id: "roadmap", label: "Roadmap 2025", icon: Calendar },
  { id: "glossary", label: "Glosario", icon: BookOpen },
  { id: "cta", label: "Contacto", icon: Phone },
];

const TeleNaturaWhitepaper = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { logout } = usePartnerAuth("telenatura-ebt");

  const handleLogout = () => {
    logout();
    navigate("/partners/telenatura-ebt");
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const SidebarContent = () => (
    <div className="h-full flex flex-col">
      <div className="p-4 border-b border-green-100">
        <div className="flex items-center gap-2 mb-2">
          <Leaf className="h-6 w-6 text-green-600" />
          <span className="font-bold text-green-800">TeleNatura</span>
        </div>
        <Badge variant="secondary" className="bg-green-100 text-green-700 text-xs">
          White Paper 2025
        </Badge>
      </div>
      
      <ScrollArea className="flex-1 p-4">
        <nav className="space-y-1">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors text-left ${
                activeSection === section.id
                  ? "bg-green-100 text-green-900 font-medium"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              <section.icon className="h-4 w-4 flex-shrink-0" />
              <span className="truncate">{section.label}</span>
            </button>
          ))}
        </nav>
      </ScrollArea>

      <div className="p-4 border-t border-green-100 space-y-2">
        <Button variant="outline" size="sm" className="w-full justify-start" asChild>
          <Link to="/partners/telenatura-ebt/miembros">
            <Home className="h-4 w-4 mr-2" />
            Área de Miembros
          </Link>
        </Button>
        <Button variant="outline" size="sm" className="w-full justify-start">
          <Download className="h-4 w-4 mr-2" />
          Descargar PDF
        </Button>
        <Button variant="ghost" size="sm" className="w-full justify-start text-slate-500" onClick={handleLogout}>
          <LogOut className="h-4 w-4 mr-2" />
          Cerrar Sesión
        </Button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile Header */}
      <header className="lg:hidden sticky top-0 z-50 bg-white border-b border-green-100 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-72 p-0">
                <SidebarContent />
              </SheetContent>
            </Sheet>
            <div className="flex items-center gap-2">
              <Leaf className="h-5 w-5 text-green-600" />
              <span className="font-semibold text-green-800">White Paper</span>
            </div>
          </div>
          <Button variant="ghost" size="sm" asChild>
            <Link to="/partners/telenatura-ebt/miembros">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Volver
            </Link>
          </Button>
        </div>
      </header>

      <div className="flex">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block w-72 h-screen sticky top-0 border-r border-green-100 bg-white">
          <SidebarContent />
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <div id="hero"><WhitepaperHero /></div>
          <div id="summary"><ExecutiveSummary /></div>
          <div id="context"><SectorContext /></div>
          <div id="challenges"><DigitalChallenges /></div>
          <div id="solution"><TeleNaturaSolution /></div>
          <div id="architecture"><SystemArchitecture /></div>
          <div id="dataspace"><DataSpaceIntegration /></div>
          <div id="usecases"><UseCasesDetail /></div>
          <div id="benefits"><StakeholderBenefits /></div>
          <div id="sustainability"><SustainabilityImpact /></div>
          <div id="roadmap"><Roadmap2025 /></div>
          <div id="glossary"><Glossary /></div>
          <div id="cta"><WhitepaperCTA /></div>
        </main>
      </div>
    </div>
  );
};

export default TeleNaturaWhitepaper;
