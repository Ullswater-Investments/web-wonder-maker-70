import { History, ShieldCheck, ExternalLink, Box, Database, Lock } from "lucide-react";
import { motion } from "framer-motion";

const SectionAuditLogs = () => {
  const auditEntries = [
    {
      id: "LOG-7742",
      event: "Firma de Contrato ODRL",
      actor: "did:ethr:0x7ecc...9821",
      block: "4,290,152",
      hash: "0x8f3c...b2e1",
      status: "Verified"
    },
    {
      id: "LOG-7743",
      event: "Liberación de Pasaporte V3",
      actor: "did:ethr:0x7ecc...1104",
      block: "4,290,158",
      hash: "0x3a1b...f9d4",
      status: "Verified"
    },
    {
      id: "LOG-7744",
      event: "Pago EUROe Completado",
      actor: "did:ethr:0x7ecc...9821",
      block: "4,290,165",
      hash: "0x5d2e...a7c3",
      status: "Verified"
    }
  ];

  return (
    <motion.section 
      id="audit-logs-detail" 
      className="py-12 border-t border-slate-800"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col gap-12">
        
        {/* Header de Sección */}
        <div className="flex items-center gap-3">
          <div className="p-2 bg-orange-500/10 rounded-lg">
            <History className="w-8 h-8 text-orange-500" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-orange-500 font-bold mb-1">Detalle Técnico Avanzado</p>
            <h2 className="text-3xl font-bold tracking-tight text-white">
              IV. Trazabilidad e Integridad (Audit Logs)
            </h2>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Lado Izquierdo: Concepto y Valor */}
          <div className="flex-1 space-y-6">
            <p className="text-lg text-slate-400 leading-relaxed">
              Cada acción crítica en ProcureData genera una huella digital única mediante el algoritmo 
              <span className="text-white font-semibold"> SHA-256</span>. Estos registros no solo se guardan en nuestra base de datos, 
              sino que se anclan en la red <span className="text-orange-400">Pontus-X</span>, creando una cadena de custodia 
              que impide cualquier alteración posterior de los hechos.
            </p>

            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-slate-300">
                <Lock className="w-5 h-5 text-orange-500 shrink-0" />
                <span>Prueba de existencia con sellado de tiempo (Timestamping)</span>
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <Database className="w-5 h-5 text-orange-500 shrink-0" />
                <span>No-repudiación: El actor no puede negar su intervención</span>
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <ShieldCheck className="w-5 h-5 text-orange-500 shrink-0" />
                <span>Verificación independiente por terceros auditores</span>
              </li>
            </ul>

            <div className="bg-blue-500/5 border border-blue-500/20 p-6 rounded-2xl">
              <h4 className="text-blue-400 font-bold mb-2">Valor para Auditoría y Compliance</h4>
              <p className="text-slate-300 italic text-sm leading-relaxed">
                "Reduzca el tiempo de respuesta ante auditorías de la ISO 27001 o la CSRD. 
                Presente pruebas matemáticas inalterables en lugar de simples archivos de texto, 
                garantizando la integridad total de su cadena de suministro."
              </p>
            </div>
          </div>

          {/* Lado Derecho: Interfaz de Verificación en Vivo */}
          <div className="flex-1">
            <div className="bg-slate-900 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl">
              {/* Header de la UI de Auditoría */}
              <div className="p-4 bg-slate-800/50 border-b border-slate-700 flex justify-between items-center">
                <span className="text-xs font-bold uppercase tracking-tighter text-slate-400">Blockchain Audit Explorer</span>
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
              </div>

              {/* Tabla de Logs */}
              <div className="p-4 overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-800">
                      <th className="py-3 px-2 text-[10px] font-bold text-slate-500 uppercase">Evento</th>
                      <th className="py-3 px-2 text-[10px] font-bold text-slate-500 uppercase">Bloque</th>
                      <th className="py-3 px-2 text-[10px] font-bold text-slate-500 uppercase">Hash</th>
                    </tr>
                  </thead>
                  <tbody className="text-xs font-mono">
                    {auditEntries.map((log) => (
                      <tr key={log.id} className="border-b border-slate-800/50 group hover:bg-orange-500/5 transition-colors">
                        <td className="py-4 px-2">
                          <div className="text-white font-semibold">{log.event}</div>
                          <div className="text-[10px] text-slate-500">{log.actor}</div>
                        </td>
                        <td className="py-4 px-2 text-orange-400">
                          <div className="flex items-center gap-1">
                            <Box className="w-3 h-3" />
                            {log.block}
                          </div>
                        </td>
                        <td className="py-4 px-2">
                          <div className="flex items-center gap-2">
                            <span className="text-slate-400">{log.hash}</span>
                            <ShieldCheck className="w-4 h-4 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Verificación de Integridad Destacada */}
              <div className="m-4 p-4 bg-black/40 rounded-2xl border border-dashed border-orange-500/30">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-[11px] font-bold text-orange-500 flex items-center gap-2">
                    <Lock className="w-3 h-3" /> INTEGRITY CHECK: PASS
                  </h4>
                  <ExternalLink className="w-3 h-3 text-slate-500 cursor-pointer hover:text-orange-500 transition-colors" />
                </div>
                <div className="space-y-2 text-[10px] font-mono">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Document Root:</span>
                    <span className="text-blue-400">urn:uuid:7742-8851...</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Merkle Proof:</span>
                    <span className="text-green-500 truncate ml-4">Valid (Root Match)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Network:</span>
                    <span className="text-orange-400">Pontus-X (Gaia-X)</span>
                  </div>
                  <div className="mt-4 pt-2 border-t border-slate-800 text-center text-slate-600 italic">
                    // Verificado por 12 nodos de la red Pontus-X
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Badges de Certificaciones */}
        <div className="flex flex-wrap gap-4 justify-center">
          <div className="px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-full flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-green-500" />
            <span className="text-xs text-slate-400">ISO 27001 Ready</span>
          </div>
          <div className="px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-full flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-blue-500" />
            <span className="text-xs text-slate-400">CSRD Compliant</span>
          </div>
          <div className="px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-full flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-orange-500" />
            <span className="text-xs text-slate-400">Gaia-X Certified</span>
          </div>
        </div>

      </div>
    </motion.section>
  );
};

export default SectionAuditLogs;
