import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { 
  Menu, Download, ArrowLeft, Home, FileText, Lightbulb, 
  Cpu, Monitor, Wifi, Layers, Link2, Shield, Briefcase,
  Wrench, Headphones, Gauge, Phone, Leaf, LogOut
} from "lucide-react";
import { usePartnerAuth } from "@/hooks/usePartnerAuth";

import {
  DocTecnicoHero,
  DocResumenEjecutivo,
  DocHardware,
  DocSoftware,
  DocConectividad,
  DocArquitectura,
  DocIntegracion,
  DocSeguridad,
  DocCasosDeUso,
  DocInstalacion,
  DocMantenimiento,
  DocEspecificaciones,
  DocCTA,
} from "@/components/partners/telenatura/doctecnico";

const sections = [
  { id: "hero", label: "Portada", icon: FileText },
  { id: "resumen", label: "Resumen Ejecutivo", icon: Lightbulb },
  { id: "hardware", label: "Hardware", icon: Cpu },
  { id: "software", label: "Software", icon: Monitor },
  { id: "conectividad", label: "Conectividad", icon: Wifi },
  { id: "arquitectura", label: "Arquitectura", icon: Layers },
  { id: "integracion", label: "Integración Data Spaces", icon: Link2 },
  { id: "seguridad", label: "Seguridad", icon: Shield },
  { id: "casos", label: "Casos de Uso", icon: Briefcase },
  { id: "instalacion", label: "Instalación", icon: Wrench },
  { id: "mantenimiento", label: "Soporte", icon: Headphones },
  { id: "especificaciones", label: "Especificaciones", icon: Gauge },
  { id: "cta", label: "Contacto", icon: Phone },
];

const TeleNaturaDocTecnico = () => {
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
      <div className="p-4 border-b border-emerald-100">
        <div className="flex items-center gap-2 mb-2">
          <Leaf className="h-6 w-6 text-emerald-600" />
          <span className="font-bold text-emerald-800">TeleNatura</span>
        </div>
        <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 text-xs">
          Documento Técnico
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
                  ? "bg-emerald-100 text-emerald-900 font-medium"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              <section.icon className="h-4 w-4 flex-shrink-0" />
              <span className="truncate">{section.label}</span>
            </button>
          ))}
        </nav>
      </ScrollArea>

      <div className="p-4 border-t border-emerald-100 space-y-2">
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
      <header className="lg:hidden sticky top-0 z-50 bg-white border-b border-emerald-100 px-4 py-3">
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
              <Leaf className="h-5 w-5 text-emerald-600" />
              <span className="font-semibold text-emerald-800">Doc Técnico</span>
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
        <aside className="hidden lg:block w-72 h-screen sticky top-0 border-r border-emerald-100 bg-white">
          <SidebarContent />
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <div id="hero"><DocTecnicoHero /></div>
          <div id="resumen"><DocResumenEjecutivo /></div>
          <div id="hardware"><DocHardware /></div>
          <div id="software"><DocSoftware /></div>
          <div id="conectividad"><DocConectividad /></div>
          <div id="arquitectura"><DocArquitectura /></div>
          <div id="integracion"><DocIntegracion /></div>
          <div id="seguridad"><DocSeguridad /></div>
          <div id="casos"><DocCasosDeUso /></div>
          <div id="instalacion"><DocInstalacion /></div>
          <div id="mantenimiento"><DocMantenimiento /></div>
          <div id="especificaciones"><DocEspecificaciones /></div>
          <div id="cta"><DocCTA /></div>
        </main>
      </div>
    </div>
  );
};

export default TeleNaturaDocTecnico;
