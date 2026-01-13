import { useState } from 'react';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { toast } from 'sonner';

export const useCartaAdhesionPDF = () => {
  const [downloading, setDownloading] = useState(false);

  const generatePDF = async () => {
    setDownloading(true);
    
    try {
      const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      // Paleta de grises
      const colors = {
        negro: [33, 33, 33] as [number, number, number],
        oscuro: [66, 66, 66] as [number, number, number],
        medio: [117, 117, 117] as [number, number, number],
        claro: [189, 189, 189] as [number, number, number],
        fondoClaro: [245, 245, 245] as [number, number, number],
        blanco: [255, 255, 255] as [number, number, number],
      };

      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      const margin = 20;
      const contentWidth = pageWidth - (margin * 2);
      let yPosition = 25;

      // Función para añadir header en páginas (excepto portada)
      const addHeader = (pageNum: number) => {
        if (pageNum > 1) {
          doc.setFillColor(...colors.fondoClaro);
          doc.rect(0, 0, pageWidth, 18, 'F');
          doc.setFontSize(9);
          doc.setTextColor(...colors.medio);
          doc.text('CARTA DE ADHESIÓN - PROCUREDATA', margin, 12);
          doc.setDrawColor(...colors.claro);
          doc.line(margin, 17, pageWidth - margin, 17);
        }
      };

      // Función para añadir footer
      const addFooter = (pageNum: number, totalPages: number) => {
        doc.setFontSize(8);
        doc.setTextColor(...colors.medio);
        doc.text(`© 2024 PROCUREDATA - www.procuredata.org`, margin, pageHeight - 10);
        doc.text(`Página ${pageNum} de ${totalPages}`, pageWidth - margin, pageHeight - 10, { align: 'right' });
      };

      // Función para verificar salto de página
      const checkPageBreak = (requiredSpace: number): boolean => {
        if (yPosition + requiredSpace > pageHeight - 25) {
          doc.addPage();
          yPosition = 30;
          return true;
        }
        return false;
      };

      // Función para añadir título de sección
      const addSectionTitle = (title: string, number?: string) => {
        checkPageBreak(20);
        doc.setFontSize(14);
        doc.setTextColor(...colors.negro);
        doc.setFont('helvetica', 'bold');
        const titleText = number ? `${number}. ${title}` : title;
        doc.text(titleText, margin, yPosition);
        yPosition += 3;
        doc.setDrawColor(...colors.claro);
        doc.line(margin, yPosition, pageWidth - margin, yPosition);
        yPosition += 8;
      };

      // Función para añadir subtítulo
      const addSubtitle = (title: string, number?: string) => {
        checkPageBreak(15);
        doc.setFontSize(11);
        doc.setTextColor(...colors.oscuro);
        doc.setFont('helvetica', 'bold');
        const titleText = number ? `${number} ${title}` : title;
        doc.text(titleText, margin, yPosition);
        yPosition += 7;
      };

      // Función para añadir párrafo
      const addParagraph = (text: string, indent: number = 0) => {
        doc.setFontSize(10);
        doc.setTextColor(...colors.oscuro);
        doc.setFont('helvetica', 'normal');
        const lines = doc.splitTextToSize(text, contentWidth - indent);
        
        for (const line of lines) {
          checkPageBreak(6);
          doc.text(line, margin + indent, yPosition);
          yPosition += 5;
        }
        yPosition += 2;
      };

      // Función para añadir lista con viñetas
      const addBulletList = (items: string[], indent: number = 5) => {
        doc.setFontSize(10);
        doc.setTextColor(...colors.oscuro);
        doc.setFont('helvetica', 'normal');
        
        for (const item of items) {
          checkPageBreak(8);
          doc.text('•', margin + indent, yPosition);
          const lines = doc.splitTextToSize(item, contentWidth - indent - 8);
          for (let i = 0; i < lines.length; i++) {
            if (i > 0) checkPageBreak(5);
            doc.text(lines[i], margin + indent + 5, yPosition);
            if (i < lines.length - 1) yPosition += 5;
          }
          yPosition += 6;
        }
      };

      // ==================== PORTADA ====================
      yPosition = 50;
      
      // Título principal
      doc.setFontSize(28);
      doc.setTextColor(...colors.negro);
      doc.setFont('helvetica', 'bold');
      doc.text('CARTA DE ADHESIÓN', pageWidth / 2, yPosition, { align: 'center' });
      yPosition += 12;
      
      doc.setFontSize(16);
      doc.setTextColor(...colors.oscuro);
      doc.text('AL ESPACIO DE DATOS', pageWidth / 2, yPosition, { align: 'center' });
      yPosition += 8;
      doc.text('PROCUREDATA', pageWidth / 2, yPosition, { align: 'center' });
      yPosition += 20;

      // Línea separadora
      doc.setDrawColor(...colors.claro);
      doc.line(margin + 40, yPosition, pageWidth - margin - 40, yPosition);
      yPosition += 15;

      // Marco normativo
      doc.setFontSize(12);
      doc.setTextColor(...colors.medio);
      doc.setFont('helvetica', 'bold');
      doc.text('MARCO NORMATIVO', pageWidth / 2, yPosition, { align: 'center' });
      yPosition += 10;

      const marcoNormativo = [
        'Reglamento (UE) 2022/868 - Data Governance Act',
        'Reglamento (UE) 2023/2854 - Data Act',
        'Propuesta EHDS - European Health Data Space',
        'Reglamento (UE) 2016/679 - RGPD',
        'Ley Orgánica 3/2018 - LOPDGDD'
      ];

      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      for (const item of marcoNormativo) {
        doc.text(item, pageWidth / 2, yPosition, { align: 'center' });
        yPosition += 6;
      }

      // Información del promotor en la parte inferior
      yPosition = pageHeight - 60;
      doc.setDrawColor(...colors.claro);
      doc.line(margin + 40, yPosition, pageWidth - margin - 40, yPosition);
      yPosition += 10;

      doc.setFontSize(11);
      doc.setTextColor(...colors.oscuro);
      doc.setFont('helvetica', 'bold');
      doc.text('PROMOTOR DEL ESPACIO DE DATOS', pageWidth / 2, yPosition, { align: 'center' });
      yPosition += 8;

      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      doc.text('PROCUREDATA', pageWidth / 2, yPosition, { align: 'center' });
      yPosition += 5;
      doc.setTextColor(...colors.medio);
      doc.text('www.procuredata.org', pageWidth / 2, yPosition, { align: 'center' });

      // ==================== PÁGINA 2: IDENTIFICACIÓN DEL PROMOTOR ====================
      doc.addPage();
      yPosition = 30;

      addSectionTitle('IDENTIFICACIÓN DEL PROMOTOR', '1');

      autoTable(doc, {
        startY: yPosition,
        head: [['Campo', 'Información']],
        body: [
          ['Razón Social', 'PROCUREDATA'],
          ['Domicilio Social', 'España'],
          ['Representante Legal', '[Nombre del Representante]'],
          ['Cargo', 'Administrador / CEO'],
          ['Email de Contacto', 'info@procuredata.org'],
          ['Sitio Web', 'www.procuredata.org'],
        ],
        theme: 'striped',
        headStyles: { 
          fillColor: colors.oscuro,
          textColor: colors.blanco,
          fontStyle: 'bold',
          fontSize: 10
        },
        bodyStyles: {
          textColor: colors.oscuro,
          fontSize: 10
        },
        alternateRowStyles: {
          fillColor: colors.fondoClaro
        },
        margin: { left: margin, right: margin },
        tableWidth: contentWidth,
      });

      yPosition = (doc as any).lastAutoTable.finalY + 15;

      // ==================== SECCIÓN 2: OBJETO DEL CONTRATO ====================
      addSectionTitle('OBJETO DEL CONTRATO', '2');

      addParagraph('La presente Carta de Adhesión tiene por objeto formalizar la incorporación del Participante al Espacio de Datos PROCUREDATA (en adelante, "el Espacio de Datos"), estableciendo los términos y condiciones que regirán su participación.');

      addParagraph('Mediante la firma de este documento, el Participante:');

      addBulletList([
        'Acepta íntegramente el marco normativo y de gobernanza del Espacio de Datos.',
        'Se compromete a cumplir con las obligaciones técnicas, legales y éticas establecidas.',
        'Reconoce los derechos y responsabilidades asociados a su rol dentro del ecosistema.',
        'Autoriza al Promotor a verificar el cumplimiento de los requisitos de adhesión.'
      ]);

      // ==================== SECCIÓN 3: ACEPTACIÓN DE NORMATIVA ====================
      checkPageBreak(40);
      addSectionTitle('ACEPTACIÓN DE NORMATIVA', '3');

      addParagraph('El Participante declara conocer y aceptar íntegramente los siguientes marcos normativos y documentos rectores del Espacio de Datos:');

      // 3.1 Términos y Condiciones Generales
      addSubtitle('Términos y Condiciones Generales', '3.1');
      addParagraph('El Participante acepta los Términos y Condiciones Generales del Espacio de Datos PROCUREDATA, que incluyen:');
      addBulletList([
        'Definiciones y alcance del Espacio de Datos.',
        'Derechos y obligaciones de los participantes.',
        'Procedimientos de acceso y uso de datos.',
        'Mecanismos de resolución de conflictos.',
        'Condiciones de modificación y actualización.'
      ]);

      // 3.2 Mecanismos de Gobernanza
      addSubtitle('Mecanismos de Gobernanza', '3.2');
      addParagraph('El Participante reconoce y se somete a la estructura de gobernanza del Espacio de Datos:');
      addBulletList([
        'Comité de Gobernanza: Órgano rector con representación de todos los stakeholders.',
        'Comité Técnico: Responsable de estándares técnicos y interoperabilidad.',
        'Comité de Ética: Supervisión del uso ético de los datos.',
        'Comité de Seguridad: Gestión de riesgos y respuesta a incidentes.',
        'Procedimientos de votación y toma de decisiones.'
      ]);

      // 3.3 Políticas ODRL
      addSubtitle('Políticas ODRL (Open Digital Rights Language)', '3.3');
      addParagraph('El Participante acepta el uso de políticas ODRL para la gestión de derechos digitales:');
      addBulletList([
        'Definición de permisos, prohibiciones y obligaciones sobre los datos.',
        'Especificación de condiciones de uso (temporal, geográfico, propósito).',
        'Mecanismos de herencia y composición de políticas.',
        'Integración con contratos inteligentes para enforcement automático.',
        'Compatibilidad con estándares IDS y GAIA-X.'
      ]);

      // 3.4 GAIA-X Trust Framework
      addSubtitle('GAIA-X Trust Framework', '3.4');
      addParagraph('El Participante se adhiere a los principios del GAIA-X Trust Framework:');
      addBulletList([
        'Soberanía de datos: Control total sobre los propios datos.',
        'Interoperabilidad: Uso de estándares abiertos y APIs documentadas.',
        'Portabilidad: Capacidad de migrar datos entre proveedores.',
        'Transparencia: Trazabilidad completa de operaciones.',
        'Seguridad: Cumplimiento de estándares de ciberseguridad.',
        'Federación: Participación en ecosistemas distribuidos.'
      ]);

      // 3.5 Cumplimiento RGPD
      addSubtitle('Cumplimiento RGPD', '3.5');
      addParagraph('El Participante garantiza el cumplimiento normativo en materia de protección de datos:');
      
      addParagraph('Reglamento General de Protección de Datos (RGPD):', 5);
      addBulletList([
        'Base legal para el tratamiento de datos (Art. 6).',
        'Derechos de los interesados (acceso, rectificación, supresión, portabilidad).',
        'Obligaciones del responsable y encargado del tratamiento.',
        'Evaluaciones de impacto (DPIA) para tratamientos de alto riesgo.',
        'Notificación de brechas de seguridad en 72 horas.'
      ]);

      // ==================== SECCIÓN 4: ROL DEL PARTICIPANTE ====================
      checkPageBreak(40);
      addSectionTitle('ROL DEL PARTICIPANTE', '4');

      addParagraph('El Participante declara adherirse al Espacio de Datos en calidad de (marcar según corresponda):');

      autoTable(doc, {
        startY: yPosition,
        head: [['Rol', 'Descripción', 'Selección']],
        body: [
          ['Proveedor de Datos', 'Entidad que aporta conjuntos de datos al Espacio de Datos', '☐'],
          ['Consumidor de Datos', 'Entidad que accede y utiliza datos del Espacio de Datos', '☐'],
          ['Proveedor de Servicios', 'Entidad que ofrece servicios de intermediación o valor añadido', '☐'],
          ['Intermediario de Datos', 'Entidad neutral que facilita el intercambio de datos', '☐'],
          ['Organización de Altruismo', 'Entidad sin ánimo de lucro para datos con fines de interés general', '☐'],
        ],
        theme: 'striped',
        headStyles: { 
          fillColor: colors.oscuro,
          textColor: colors.blanco,
          fontStyle: 'bold',
          fontSize: 10
        },
        bodyStyles: {
          textColor: colors.oscuro,
          fontSize: 10
        },
        alternateRowStyles: {
          fillColor: colors.fondoClaro
        },
        columnStyles: {
          2: { halign: 'center', cellWidth: 25 }
        },
        margin: { left: margin, right: margin },
        tableWidth: contentWidth,
      });

      yPosition = (doc as any).lastAutoTable.finalY + 15;

      // ==================== SECCIÓN 5: VIGENCIA Y EXTINCIÓN ====================
      addSectionTitle('VIGENCIA Y EXTINCIÓN', '5');

      addSubtitle('Vigencia', '5.1');
      addParagraph('La presente Carta de Adhesión entrará en vigor en la fecha de su firma y tendrá una duración indefinida, salvo denuncia expresa de cualquiera de las partes.');

      addSubtitle('Causas de Extinción', '5.2');
      addBulletList([
        'Denuncia voluntaria del Participante con preaviso de 30 días.',
        'Incumplimiento grave de las obligaciones establecidas.',
        'Disolución o extinción de la personalidad jurídica del Participante.',
        'Decisión motivada del Comité de Gobernanza.',
        'Modificación sustancial del marco normativo no aceptada por el Participante.'
      ]);

      addSubtitle('Efectos de la Extinción', '5.3');
      addBulletList([
        'Cese inmediato del acceso a los servicios del Espacio de Datos.',
        'Obligación de eliminar datos obtenidos, salvo obligación legal de conservación.',
        'Mantenimiento de las obligaciones de confidencialidad.',
        'Liquidación de pagos pendientes, si los hubiere.',
        'Derecho a exportar los propios datos aportados.'
      ]);

      // ==================== SECCIÓN 6: FIRMAS ====================
      checkPageBreak(100);
      addSectionTitle('FIRMAS', '6');

      addParagraph('En prueba de conformidad con todo lo anterior, las partes firman la presente Carta de Adhesión:');
      yPosition += 5;

      // Caja del Promotor
      doc.setDrawColor(...colors.claro);
      doc.setFillColor(...colors.fondoClaro);
      doc.roundedRect(margin, yPosition, contentWidth / 2 - 5, 60, 2, 2, 'FD');
      
      doc.setFontSize(10);
      doc.setTextColor(...colors.oscuro);
      doc.setFont('helvetica', 'bold');
      doc.text('POR EL PROMOTOR', margin + 5, yPosition + 8);
      
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      doc.text('PROCUREDATA', margin + 5, yPosition + 18);
      doc.text('Representante: ___________________', margin + 5, yPosition + 28);
      doc.text('Cargo: ___________________________', margin + 5, yPosition + 38);
      doc.text('Firma: ___________________________', margin + 5, yPosition + 48);

      // Caja del Participante
      const xParticipante = margin + contentWidth / 2 + 5;
      doc.roundedRect(xParticipante, yPosition, contentWidth / 2 - 5, 60, 2, 2, 'FD');
      
      doc.setFontSize(10);
      doc.setFont('helvetica', 'bold');
      doc.text('POR EL PARTICIPANTE', xParticipante + 5, yPosition + 8);
      
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      doc.text('Razón Social: ____________________', xParticipante + 5, yPosition + 18);
      doc.text('Representante: ___________________', xParticipante + 5, yPosition + 28);
      doc.text('Cargo: ___________________________', xParticipante + 5, yPosition + 38);
      doc.text('Firma: ___________________________', xParticipante + 5, yPosition + 48);

      yPosition += 70;

      // Fecha y lugar
      doc.setFontSize(10);
      doc.setTextColor(...colors.oscuro);
      doc.text('Lugar: _________________________, a _____ de _________________ de 20____', margin, yPosition);

      // ==================== ANEXO: RECURSOS OFICIALES ====================
      doc.addPage();
      yPosition = 30;

      addSectionTitle('ANEXO: RECURSOS OFICIALES', 'A');

      addParagraph('Para más información sobre el marco normativo y los estándares aplicables, se pueden consultar los siguientes recursos oficiales:');

      autoTable(doc, {
        startY: yPosition,
        head: [['Recurso', 'URL']],
        body: [
          ['CRED - Centro Español de Referencia', 'https://cred.red.gob.es/'],
          ['IDSA Rulebook', 'https://internationaldataspaces.org/publications/idsa-rulebook/'],
          ['GAIA-X Trust Framework', 'https://gaia-x.eu/trust-framework/'],
          ['Data Governance Act', 'https://eur-lex.europa.eu/eli/reg/2022/868/oj'],
          ['Data Act', 'https://eur-lex.europa.eu/eli/reg/2023/2854/oj'],
          ['RGPD', 'https://eur-lex.europa.eu/eli/reg/2016/679/oj'],
          ['LOPDGDD', 'https://www.boe.es/eli/es/lo/2018/12/05/3/con'],
          ['PROCUREDATA', 'https://www.procuredata.org'],
        ],
        theme: 'striped',
        headStyles: { 
          fillColor: colors.oscuro,
          textColor: colors.blanco,
          fontStyle: 'bold',
          fontSize: 10
        },
        bodyStyles: {
          textColor: colors.oscuro,
          fontSize: 9
        },
        alternateRowStyles: {
          fillColor: colors.fondoClaro
        },
        columnStyles: {
          1: { cellWidth: 100 }
        },
        margin: { left: margin, right: margin },
        tableWidth: contentWidth,
      });

      yPosition = (doc as any).lastAutoTable.finalY + 20;

      // Nota final
      addParagraph('Este documento ha sido generado automáticamente por el sistema PROCUREDATA. Para cualquier consulta o aclaración, contacte con el Promotor del Espacio de Datos en www.procuredata.org.');

      // Añadir headers y footers a todas las páginas
      const totalPages = doc.getNumberOfPages();
      for (let i = 1; i <= totalPages; i++) {
        doc.setPage(i);
        addHeader(i);
        addFooter(i, totalPages);
      }

      // Guardar el PDF
      const fecha = new Date().toISOString().split('T')[0];
      doc.save(`Carta_Adhesion_PROCUREDATA_${fecha}.pdf`);
      
      toast.success('PDF descargado correctamente', {
        description: 'Carta de Adhesión en formato profesional'
      });

    } catch (error) {
      console.error('Error generando PDF:', error);
      toast.error('Error al generar el PDF', {
        description: 'Por favor, inténtelo de nuevo'
      });
    } finally {
      setDownloading(false);
    }
  };

  return { generatePDF, downloading };
};
