import { jsPDF } from "jspdf";

export const generateLicensePDF = (transaction: any, assetName: string, providerName: string, consumerName: string) => {
  const doc = new jsPDF();
  const margin = 20;
  
  // Header
  doc.setFontSize(22);
  doc.setTextColor(37, 99, 235); // Blue
  doc.text("PROCUREDATA", margin, 30);
  
  doc.setFontSize(10);
  doc.setTextColor(100);
  doc.text("Licencia de Uso de Datos - ODRL 2.0", margin, 38);
  
  // Linea separadora
  doc.setDrawColor(200);
  doc.line(margin, 45, 190, 45);
  
  // Detalles
  doc.setFontSize(12);
  doc.setTextColor(0);
  doc.text(`ID Transacción: ${transaction.id}`, margin, 60);
  doc.text(`Fecha: ${new Date(transaction.created_at).toLocaleDateString('es-ES')}`, margin, 70);
  
  doc.setFontSize(14);
  doc.text("Partes Contratantes:", margin, 90);
  doc.setFontSize(11);
  doc.text(`Proveedor (Licenciante): ${providerName}`, margin, 100);
  doc.text(`Consumidor (Licenciatario): ${consumerName}`, margin, 110);
  
  doc.setFontSize(14);
  doc.text("Activo de Datos:", margin, 130);
  doc.setFontSize(11);
  doc.text(`Nombre: ${assetName}`, margin, 140);
  doc.text(`Propósito: ${transaction.purpose}`, margin, 150);
  
  doc.setFontSize(14);
  doc.text("Términos de la Licencia:", margin, 170);
  doc.setFontSize(10);
  doc.setTextColor(80);
  const terms = "Este acuerdo otorga al Licenciatario un derecho no exclusivo para utilizar los datos especificados. Queda prohibida la redistribución a terceros sin consentimiento expreso. El acceso está limitado a " + transaction.access_duration_days + " días desde la fecha de aprobación.";
  const splitTerms = doc.splitTextToSize(terms, 170);
  doc.text(splitTerms, margin, 180);
  
  // Footer
  doc.setTextColor(150);
  doc.setFontSize(8);
  doc.text(`Hash Blockchain: 0x${Math.random().toString(16).substr(2, 40)}`, margin, 280);
  doc.text("Documento generado automáticamente por PROCUREDATA", margin, 285);
  
  doc.save(`Licencia_${transaction.id.substring(0,8)}.pdf`);
};
