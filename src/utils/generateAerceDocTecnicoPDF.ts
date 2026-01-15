import { jsPDF } from "jspdf";

// AERCE Technical Document PDF Generator
// Optimized for print with grayscale tones and proper margins

const MARGIN_LEFT = 25;
const MARGIN_RIGHT = 25;
const MARGIN_TOP = 30;
const MARGIN_BOTTOM = 25;
const PAGE_WIDTH = 210;
const PAGE_HEIGHT = 297;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN_LEFT - MARGIN_RIGHT;

// Grayscale color palette
const COLORS = {
  black: "#000000",
  darkGray: "#333333",
  mediumGray: "#666666",
  lightGray: "#999999",
  veryLightGray: "#CCCCCC",
  background: "#F5F5F5",
};

export const generateAerceDocTecnicoPDF = () => {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  let currentY = MARGIN_TOP;

  // Helper functions
  const addPage = () => {
    doc.addPage();
    currentY = MARGIN_TOP;
  };

  const checkPageBreak = (neededHeight: number) => {
    if (currentY + neededHeight > PAGE_HEIGHT - MARGIN_BOTTOM) {
      addPage();
      return true;
    }
    return false;
  };

  const drawSectionTitle = (number: string, title: string) => {
    checkPageBreak(20);
    doc.setFontSize(10);
    doc.setTextColor(COLORS.mediumGray);
    doc.text(`${number} —`, MARGIN_LEFT, currentY);
    currentY += 8;
    doc.setFontSize(18);
    doc.setTextColor(COLORS.darkGray);
    doc.text(title, MARGIN_LEFT, currentY);
    currentY += 12;
  };

  const drawParagraph = (text: string, fontSize: number = 10) => {
    doc.setFontSize(fontSize);
    doc.setTextColor(COLORS.mediumGray);
    const lines = doc.splitTextToSize(text, CONTENT_WIDTH);
    lines.forEach((line: string) => {
      checkPageBreak(6);
      doc.text(line, MARGIN_LEFT, currentY);
      currentY += 5;
    });
    currentY += 3;
  };

  const drawSubtitle = (text: string) => {
    checkPageBreak(12);
    doc.setFontSize(12);
    doc.setTextColor(COLORS.darkGray);
    doc.text(text, MARGIN_LEFT, currentY);
    currentY += 8;
  };

  const drawBulletPoint = (text: string) => {
    checkPageBreak(8);
    doc.setFontSize(10);
    doc.setTextColor(COLORS.mediumGray);
    doc.text("•", MARGIN_LEFT, currentY);
    const lines = doc.splitTextToSize(text, CONTENT_WIDTH - 8);
    lines.forEach((line: string, i: number) => {
      doc.text(line, MARGIN_LEFT + 8, currentY + (i * 5));
    });
    currentY += lines.length * 5 + 2;
  };

  const drawFooter = (pageNum: number) => {
    doc.setFontSize(8);
    doc.setTextColor(COLORS.lightGray);
    doc.text(`AERCE Documento Técnico v1.0 — Página ${pageNum}`, MARGIN_LEFT, PAGE_HEIGHT - 10);
    doc.text("PROCUREDATA × AERCE", PAGE_WIDTH - MARGIN_RIGHT - 40, PAGE_HEIGHT - 10);
  };

  // ===== COVER PAGE =====
  doc.setFontSize(14);
  doc.setTextColor(COLORS.darkGray);
  doc.text("PROCUREDATA × AERCE", PAGE_WIDTH / 2, 60, { align: "center" });

  doc.setFontSize(32);
  doc.setTextColor(COLORS.black);
  doc.text("AERCE", PAGE_WIDTH / 2, 90, { align: "center" });

  doc.setFontSize(16);
  doc.setTextColor(COLORS.darkGray);
  doc.text("Documento Técnico", PAGE_WIDTH / 2, 105, { align: "center" });
  doc.text("Certificación y Desarrollo Profesional", PAGE_WIDTH / 2, 115, { align: "center" });

  doc.setFontSize(11);
  doc.setTextColor(COLORS.mediumGray);
  const subtitle = "Marco técnico para la certificación UNE 15896, formación especializada y desarrollo de carrera en Compras";
  const subtitleLines = doc.splitTextToSize(subtitle, 140);
  subtitleLines.forEach((line: string, i: number) => {
    doc.text(line, PAGE_WIDTH / 2, 135 + (i * 6), { align: "center" });
  });

  // Trust badges
  doc.setFontSize(9);
  doc.setTextColor(COLORS.mediumGray);
  doc.text("UNE 15896  |  AENOR  |  IFPSM Member", PAGE_WIDTH / 2, 165, { align: "center" });

  // Version info
  doc.setFontSize(10);
  doc.setTextColor(COLORS.lightGray);
  doc.text("Documento Técnico v1.0", PAGE_WIDTH / 2, 250, { align: "center" });
  doc.text("Enero 2025", PAGE_WIDTH / 2, 258, { align: "center" });

  // ===== PAGE 2: TABLE OF CONTENTS =====
  addPage();
  doc.setFontSize(20);
  doc.setTextColor(COLORS.darkGray);
  doc.text("Índice de Contenidos", MARGIN_LEFT, currentY);
  currentY += 15;

  const tocItems = [
    { num: "01", title: "Resumen Ejecutivo", page: 3 },
    { num: "02", title: "Modelo de Desarrollo Profesional", page: 4 },
    { num: "03", title: "Certificación UNE 15896", page: 5 },
    { num: "04", title: "Catálogo Formativo", page: 6 },
    { num: "05", title: "Framework de Competencias", page: 7 },
    { num: "06", title: "Metodología de Evaluación", page: 8 },
    { num: "07", title: "KPIs de Excelencia", page: 9 },
    { num: "08", title: "Casos de Éxito", page: 10 },
    { num: "09", title: "Proceso de Implementación", page: 11 },
    { num: "10", title: "Auditoría AENOR", page: 12 },
    { num: "11", title: "Benchmarking Sectorial", page: 13 },
    { num: "12", title: "Próximos Pasos", page: 14 },
  ];

  doc.setFontSize(11);
  tocItems.forEach((item) => {
    doc.setTextColor(COLORS.mediumGray);
    doc.text(item.num, MARGIN_LEFT, currentY);
    doc.setTextColor(COLORS.darkGray);
    doc.text(item.title, MARGIN_LEFT + 15, currentY);
    doc.setTextColor(COLORS.lightGray);
    doc.text(String(item.page), PAGE_WIDTH - MARGIN_RIGHT - 10, currentY);
    
    const titleWidth = doc.getTextWidth(item.title);
    for (let x = MARGIN_LEFT + 20 + titleWidth; x < PAGE_WIDTH - MARGIN_RIGHT - 15; x += 3) {
      doc.circle(x, currentY - 1, 0.3, "F");
    }
    currentY += 8;
  });

  drawFooter(2);

  // ===== PAGE 3: EXECUTIVE SUMMARY =====
  addPage();
  drawSectionTitle("01", "Resumen Ejecutivo");

  drawParagraph("AERCE es la Asociación Española de Responsables de Compras y Existencias, referente en la profesionalización de la función de Compras desde 1993.");

  drawSubtitle("Misión");
  drawParagraph("Impulsar la excelencia profesional en el ámbito de las Compras a través de la formación, certificación y networking de alta calidad.");

  drawSubtitle("Propuesta de Valor");
  drawBulletPoint("Certificación UNE 15896 reconocida por AENOR e IFPSM");
  drawBulletPoint("Formación especializada con EADA y ESIC Business School");
  drawBulletPoint("Red de más de 2.000 profesionales de Compras");
  drawBulletPoint("Benchmarking salarial y estudios sectoriales exclusivos");
  drawBulletPoint("Eventos de networking: Foro CPO, La Noche de las Compras");

  drawFooter(3);

  // ===== PAGE 4: PROFESSIONAL MODEL =====
  addPage();
  drawSectionTitle("02", "Modelo de Desarrollo Profesional");

  drawParagraph("Framework de carrera que define los niveles, competencias y rutas de certificación para profesionales de Compras.");

  drawSubtitle("Niveles de Carrera");
  
  const levels = [
    { level: "Junior Buyer", years: "0-3 años", certification: "Nivel Básico" },
    { level: "Senior Buyer", years: "3-7 años", certification: "Nivel Profesional" },
    { level: "Purchasing Manager", years: "7-12 años", certification: "Nivel Avanzado" },
    { level: "CPO / Director", years: "12+ años", certification: "Nivel Executive" },
  ];

  levels.forEach((l) => {
    checkPageBreak(14);
    doc.setFillColor(COLORS.background);
    doc.roundedRect(MARGIN_LEFT, currentY, CONTENT_WIDTH, 12, 2, 2, "F");
    doc.setFontSize(10);
    doc.setTextColor(COLORS.darkGray);
    doc.text(l.level, MARGIN_LEFT + 5, currentY + 8);
    doc.text(l.years, MARGIN_LEFT + 55, currentY + 8);
    doc.setFontSize(9);
    doc.setTextColor(COLORS.mediumGray);
    doc.text(l.certification, MARGIN_LEFT + 100, currentY + 8);
    currentY += 16;
  });

  drawFooter(4);

  // ===== PAGE 5: UNE CERTIFICATION =====
  addPage();
  drawSectionTitle("03", "Certificación UNE 15896");

  drawParagraph("El estándar europeo de referencia para la certificación de profesionales de Compras, avalado por AENOR y reconocido internacionalmente por IFPSM.");

  drawSubtitle("Proceso de Certificación");
  drawBulletPoint("Solicitud: Presentación de documentación y experiencia");
  drawBulletPoint("Evaluación: Revisión por comité de certificación AERCE");
  drawBulletPoint("Examen: Prueba de conocimientos técnicos");
  drawBulletPoint("Auditoría: Verificación independiente por AENOR");
  drawBulletPoint("Certificación: Obtención del certificado oficial");

  drawSubtitle("Niveles de Certificación");
  drawBulletPoint("Básico: 2+ años experiencia, formación fundamental");
  drawBulletPoint("Profesional: 5+ años, gestión de categorías");
  drawBulletPoint("Avanzado: 8+ años, liderazgo de equipos");
  drawBulletPoint("Executive: 12+ años, posición directiva");

  drawFooter(5);

  // ===== PAGE 6: TRAINING CATALOG =====
  addPage();
  drawSectionTitle("04", "Catálogo Formativo");

  drawParagraph("Formación especializada en colaboración con las mejores escuelas de negocio de España.");

  drawSubtitle("Masters Universitarios");
  drawBulletPoint("Master en Dirección de Compras - EADA Business School (9 meses)");
  drawBulletPoint("Master en Supply Chain Management - ESIC (12 meses)");

  drawSubtitle("Cursos Especializados");
  drawBulletPoint("Negociación Estratégica en Compras (40 horas)");
  drawBulletPoint("Gestión de Categorías Avanzada (32 horas)");
  drawBulletPoint("ESG y Compras Sostenibles (24 horas)");

  drawSubtitle("Formación In-Company");
  drawBulletPoint("Programas personalizados para equipos de compras");
  drawBulletPoint("Certificación grupal UNE 15896");

  drawFooter(6);

  // ===== PAGE 7: COMPETENCY FRAMEWORK =====
  addPage();
  drawSectionTitle("05", "Framework de Competencias");

  drawParagraph("Modelo estructurado de competencias que define conocimientos, habilidades y actitudes para cada nivel profesional.");

  drawSubtitle("Áreas de Competencia");
  drawBulletPoint("Técnicas de Compras: Análisis, negociación, contratos, TCO");
  drawBulletPoint("Gestión Estratégica: Planificación, riesgos, KPIs, digitalización");
  drawBulletPoint("Liderazgo: Equipos, comunicación, cambio, talento");
  drawBulletPoint("Sostenibilidad: ESG, economía circular, huella de carbono");

  drawFooter(7);

  // ===== PAGE 8: METHODOLOGY =====
  addPage();
  drawSectionTitle("06", "Metodología de Evaluación");

  drawParagraph("Proceso estructurado de mejora continua para el desarrollo profesional.");

  drawSubtitle("Fases del Proceso");
  drawBulletPoint("Diagnóstico: Assessment inicial y mapeo de competencias");
  drawBulletPoint("Planificación: Diseño de itinerarios formativos");
  drawBulletPoint("Ejecución: Formación y coaching");
  drawBulletPoint("Evaluación: Medición de resultados");
  drawBulletPoint("Mejora Continua: Actualización permanente");

  drawFooter(8);

  // ===== PAGE 9: KPIs =====
  addPage();
  drawSectionTitle("07", "KPIs de Excelencia");

  drawParagraph("Indicadores clave para medir el desempeño de la función de Compras.");

  drawSubtitle("Métricas Principales");
  drawBulletPoint("Eficiencia: Tiempo de ciclo, automatización, productividad");
  drawBulletPoint("Ahorro: Savings achieved, cost avoidance, ROI");
  drawBulletPoint("Calidad: Cumplimiento de contratos, evaluación de proveedores");
  drawBulletPoint("Talento: Profesionales certificados, horas de formación");

  drawFooter(9);

  // ===== PAGE 10: SUCCESS CASES =====
  addPage();
  drawSectionTitle("08", "Casos de Éxito");

  drawParagraph("Organizaciones que han transformado su función de Compras con AERCE.");

  drawSubtitle("Resultados Destacados");
  drawBulletPoint("IBEX 35 Energía: 32 profesionales certificados, 18% reducción de costes");
  drawBulletPoint("Multinacional Farmacéutica: 120 profesionales alineados en 5 países");
  drawBulletPoint("Startup Scale-up: Función operativa en 3 meses, €2M savings");

  drawSubtitle("Impacto Global");
  drawBulletPoint("150+ empresas han certificado equipos");
  drawBulletPoint("2.000+ profesionales certificados");
  drawBulletPoint("€50M+ en savings generados");

  drawFooter(10);

  // ===== PAGE 11: IMPLEMENTATION =====
  addPage();
  drawSectionTitle("09", "Proceso de Implementación");

  drawParagraph("Metodología probada para implementar programas de certificación en organizaciones.");

  drawSubtitle("Timeline Típico");
  drawBulletPoint("Fase 1 - Diagnóstico: 2-4 semanas");
  drawBulletPoint("Fase 2 - Diseño: 2-3 semanas");
  drawBulletPoint("Fase 3 - Formación: 3-6 meses");
  drawBulletPoint("Fase 4 - Certificación: 1-2 meses");

  drawSubtitle("Factores de Éxito");
  drawBulletPoint("Compromiso de la alta dirección");
  drawBulletPoint("Tiempo dedicado al programa (mín. 4h/semana)");
  drawBulletPoint("Aplicación práctica de conocimientos");

  drawFooter(11);

  // ===== PAGE 12: AENOR AUDIT =====
  addPage();
  drawSectionTitle("10", "Auditoría AENOR");

  drawParagraph("Verificación independiente que garantiza objetividad y rigor en la certificación.");

  drawSubtitle("Áreas de Auditoría");
  drawBulletPoint("Conocimientos Técnicos (40%): Gestión, negociación, contratos");
  drawBulletPoint("Competencias Profesionales (30%): Liderazgo, comunicación");
  drawBulletPoint("Experiencia Demostrable (20%): Trayectoria y logros");
  drawBulletPoint("Formación Continua (10%): Desarrollo permanente");

  drawFooter(12);

  // ===== PAGE 13: BENCHMARKING =====
  addPage();
  drawSectionTitle("11", "Benchmarking Sectorial");

  drawParagraph("Estudios salariales y análisis comparativos exclusivos para profesionales de Compras.");

  drawSubtitle("Prima por Certificación");
  drawBulletPoint("Certificado Básico: +8% vs no certificados");
  drawBulletPoint("Certificado Profesional: +15%");
  drawBulletPoint("Certificado Avanzado: +22%");
  drawBulletPoint("Certificado Executive: +30%");

  drawFooter(13);

  // ===== PAGE 14: NEXT STEPS =====
  addPage();
  drawSectionTitle("12", "Próximos Pasos");

  drawParagraph("Inicia tu camino hacia la excelencia profesional en Compras con AERCE.");

  drawSubtitle("Cómo Empezar");
  drawBulletPoint("Solicitar información sobre certificación UNE 15896");
  drawBulletPoint("Explorar el catálogo de formación disponible");
  drawBulletPoint("Contactar con el equipo de AERCE");

  drawSubtitle("Contacto");
  drawParagraph("Email: info@aerce.org");
  drawParagraph("Teléfono: +34 93 432 17 93");
  drawParagraph("Web: www.aerce.org");

  currentY += 20;
  doc.setFontSize(10);
  doc.setTextColor(COLORS.lightGray);
  doc.text("© 2025 AERCE × PROCUREDATA", PAGE_WIDTH / 2, currentY, { align: "center" });
  doc.text("Impulsando la excelencia en Compras", PAGE_WIDTH / 2, currentY + 6, { align: "center" });

  drawFooter(14);

  // Save the PDF
  doc.save("AERCE-Documento-Tecnico-v1.0.pdf");
};
