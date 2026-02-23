import type { SlideData } from "@/lib/slides-data"

/* ------------------------------------------------------------------ */
/*  SVG Icon helpers (no external lib, Lucide-style inline SVGs)      */
/* ------------------------------------------------------------------ */

function ShieldIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}

function KeyIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="15" r="5" />
      <path d="M11.7 11.3L15 8l2 2" />
      <path d="M15 8l4-4" />
    </svg>
  )
}

function DatabaseIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
      <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
    </svg>
  )
}

function SearchIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.3-4.3" />
    </svg>
  )
}

function FileCheckIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.5 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7.5L14.5 2z" />
      <path d="M14 2v6h6" />
      <path d="M9 15l2 2 4-4" />
    </svg>
  )
}

function BookIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5v-15A2.5 2.5 0 016.5 2H20v20H6.5a2.5 2.5 0 010-5H20" />
    </svg>
  )
}

function CpuIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
    </svg>
  )
}

function NetworkIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="5" r="3" />
      <circle cx="5" cy="19" r="3" />
      <circle cx="19" cy="19" r="3" />
      <path d="M12 8v4M5.5 16.5L10 12.5M18.5 16.5L14 12.5" />
    </svg>
  )
}

function WalletIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12V7H5a2 2 0 010-4h14v4" />
      <path d="M3 5v14a2 2 0 002 2h16v-5" />
      <path d="M18 12a2 2 0 000 4h4v-4h-4z" />
    </svg>
  )
}

function BlockchainIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="7" height="7" rx="1" />
      <rect x="15" y="2" width="7" height="7" rx="1" />
      <rect x="2" y="15" width="7" height="7" rx="1" />
      <rect x="15" y="15" width="7" height="7" rx="1" />
      <path d="M9 5.5h6M9 18.5h6M5.5 9v6M18.5 9v6" />
    </svg>
  )
}

function GlobeIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10A15.3 15.3 0 0112 2z" />
    </svg>
  )
}

function ArrowRightIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

function CheckCircleIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
      <path d="M22 4L12 14.01l-3-3" />
    </svg>
  )
}

function StarIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/*  EU Stars decoration                                               */
/* ------------------------------------------------------------------ */
function EuStars({ className = "" }: { className?: string }) {
  const positions = Array.from({ length: 12 }, (_, i) => {
    const angle = (i * 30 - 90) * (Math.PI / 180)
    const r = 38
    return {
      x: 50 + r * Math.cos(angle),
      y: 50 + r * Math.sin(angle),
    }
  })
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none">
      {positions.map((p, i) => (
        <g key={i} transform={`translate(${p.x}, ${p.y})`}>
          <polygon
            points="0,-5 1.5,-1.5 5.5,-1.5 2.5,1 3.5,5 0,2.5 -3.5,5 -2.5,1 -5.5,-1.5 -1.5,-1.5"
            className="fill-accent"
            opacity={0.5}
          />
        </g>
      ))}
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/*  INFOGRAPHIC COMPONENTS                                            */
/* ------------------------------------------------------------------ */

function TitleCover() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-4 relative">
      <EuStars className="absolute top-0 right-0 w-32 h-32 opacity-30" />
      <div className="flex items-center gap-3">
        <div className="w-12 h-1 bg-accent rounded-full" />
        <span className="text-sm font-mono tracking-widest uppercase text-muted-foreground">Horizon Europe</span>
        <div className="w-12 h-1 bg-accent rounded-full" />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {[
          { icon: <ShieldIcon className="w-10 h-10" />, label: "Confianza" },
          { icon: <NetworkIcon className="w-10 h-10" />, label: "Federacion" },
          { icon: <GlobeIcon className="w-10 h-10" />, label: "Soberania" },
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center gap-2 p-4 rounded-lg bg-secondary/50">
            <div className="text-primary">{item.icon}</div>
            <span className="text-xs font-medium text-secondary-foreground">{item.label}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 mt-2">
        <div className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">Gaia-X</div>
        <ArrowRightIcon className="w-4 h-4 text-muted-foreground" />
        <div className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium">DeltaDAO</div>
        <ArrowRightIcon className="w-4 h-4 text-muted-foreground" />
        <div className="px-3 py-1 rounded-full bg-blue-400 text-primary-foreground text-xs font-medium">Pontus-X</div>
      </div>
    </div>
  )
}

function OverviewDiagram() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-full max-w-md">
        <div className="flex items-center justify-center">
          <div className="w-28 h-28 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center relative">
            <span className="text-xs font-bold text-primary text-center leading-tight px-2">Espacio de Datos Federado</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 mt-4">
          {[
            { label: "Empresa A", color: "bg-chart-1" },
            { label: "Empresa B", color: "bg-chart-2" },
            { label: "Empresa C", color: "bg-chart-3" },
          ].map((node, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <div className={`w-3 h-3 rounded-full ${node.color}`} />
              <div className="h-6 w-px bg-border" />
              <div className="text-[10px] font-medium text-muted-foreground text-center">{node.label}</div>
              <div className="px-2 py-1 rounded bg-secondary text-[10px] text-secondary-foreground">Datos soberanos</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-2 text-xs text-muted-foreground mt-2">
        <div className="w-8 h-px bg-primary" />
        <span>Peer-to-Peer | Sin servidor central</span>
        <div className="w-8 h-px bg-primary" />
      </div>
    </div>
  )
}

function ComponentDetail({ slide }: { slide: SlideData }) {
  const iconMap: Record<number, React.ReactNode> = {
    5: <KeyIcon className="w-12 h-12" />,
    7: <ShieldIcon className="w-12 h-12" />,
    9: <SearchIcon className="w-12 h-12" />,
    11: <FileCheckIcon className="w-12 h-12" />,
    13: <CheckCircleIcon className="w-12 h-12" />,
    14: <BookIcon className="w-12 h-12" />,
    15: <CpuIcon className="w-12 h-12" />,
    21: <WalletIcon className="w-12 h-12" />,
    22: <BlockchainIcon className="w-12 h-12" />,
    23: <ShieldIcon className="w-12 h-12" />,
    24: <SearchIcon className="w-12 h-12" />,
    25: <CheckCircleIcon className="w-12 h-12" />,
    26: <CpuIcon className="w-12 h-12" />,
  }

  const isPontusX = slide.section === "pontusx"

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <div className={`p-3 rounded-xl ${isPontusX ? "bg-accent/20 text-accent-foreground" : "bg-primary/10 text-primary"}`}>
          {iconMap[slide.id] || <DatabaseIcon className="w-12 h-12" />}
        </div>
        <div>
          <div className={`text-xs font-mono uppercase tracking-wider ${isPontusX ? "text-accent-foreground/60" : "text-primary/60"}`}>
            {slide.subtitle}
          </div>
        </div>
      </div>

      {slide.analogy && (
        <div className={`p-4 rounded-lg border-l-4 ${isPontusX ? "border-accent bg-accent/5" : "border-primary bg-primary/5"}`}>
          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Analogia</div>
          <p className="text-sm text-foreground/80 leading-relaxed">{slide.analogy}</p>
        </div>
      )}

      {slide.id === 5 && (
        <div className="flex items-center gap-2 justify-center mt-2">
          {["Credenciales", "Verificacion", "Token"].map((step, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="px-3 py-2 rounded-md bg-secondary text-xs font-medium text-secondary-foreground">{step}</div>
              {i < 2 && <ArrowRightIcon className="w-4 h-4 text-primary" />}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function AnalogyVisual({ slide }: { slide: SlideData }) {
  if (slide.id === 8) {
    return (
      <div className="flex flex-col gap-3">
        <div className="text-xs font-semibold uppercase tracking-wider text-primary/60 mb-1">Politicas del Conector</div>
        <div className="grid grid-cols-2 gap-3">
          {[
            { rule: "Solo investigacion" },
            { rule: "Expira 31/12" },
            { rule: "Sin redistribucion" },
            { rule: "Cumplimiento forzado" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 p-3 rounded-lg bg-secondary/60 border border-border">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <ShieldIcon className="w-4 h-4 text-primary" />
              </div>
              <span className="text-xs font-medium text-secondary-foreground">{item.rule}</span>
            </div>
          ))}
        </div>
        <div className="p-3 rounded-lg bg-primary/5 border border-primary/20 mt-1">
          <p className="text-xs text-foreground/70 leading-relaxed">
            El Conector adjunta las condiciones de uso a cada paquete de datos. El Conector del receptor esta tecnologicamente obligado a respetarlas.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="text-xs font-semibold uppercase tracking-wider text-primary/60 mb-1">Escenarios de resolucion</div>
      {slide.bullets.slice(0, 3).map((bullet, i) => (
        <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/40 border border-border">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-chart-5/20 flex items-center justify-center text-xs font-bold text-chart-5">
            {i + 1}
          </div>
          <p className="text-xs text-foreground/80 leading-relaxed mt-1">{bullet.replace(/^Escenario \d: /, "")}</p>
        </div>
      ))}
    </div>
  )
}

function FlowDiagram({ slide }: { slide: SlideData }) {
  const steps = slide.bullets.map((b) => b.replace(/^\d\.\s*/, ""))

  return (
    <div className="flex flex-col gap-2">
      {steps.map((step, i) => (
        <div key={i} className="flex items-start gap-3">
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0">
              {i + 1}
            </div>
            {i < steps.length - 1 && <div className="w-px h-4 bg-primary/30" />}
          </div>
          <div className="p-2 rounded-lg bg-secondary/40 flex-1 mt-0.5">
            <p className="text-xs text-secondary-foreground leading-relaxed">{step}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

function ComparisonTable({ slide }: { slide: SlideData }) {
  if (slide.id === 20) {
    const rows = [
      { gaiax: "Keycloak (IdP)", pontusx: "Web3 Wallets + DIDs", icon: <KeyIcon className="w-5 h-5" /> },
      { gaiax: "Clearing House", pontusx: "Blockchain Pontus-X", icon: <FileCheckIcon className="w-5 h-5" /> },
      { gaiax: "Connector", pontusx: "Ocean Provider", icon: <ShieldIcon className="w-5 h-5" /> },
      { gaiax: "Metadata Broker", pontusx: "Ocean Aquarius", icon: <SearchIcon className="w-5 h-5" /> },
      { gaiax: "Compliance Service", pontusx: "Trust Anchors + VCs", icon: <CheckCircleIcon className="w-5 h-5" /> },
      { gaiax: "Compute-to-Data", pontusx: "Ocean C2D", icon: <CpuIcon className="w-5 h-5" /> },
    ]
    return (
      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-[auto_1fr_auto_1fr] gap-x-3 gap-y-2 items-center">
          <div />
          <div className="text-xs font-bold text-primary uppercase tracking-wider">Gaia-X</div>
          <div />
          <div className="text-xs font-bold text-accent-foreground uppercase tracking-wider">Pontus-X</div>
          {rows.map((row, i) => (
            <div key={i} className="contents">
              <div className="text-primary">{row.icon}</div>
              <div className="px-2 py-1.5 rounded bg-primary/5 text-xs font-medium text-foreground">{row.gaiax}</div>
              <ArrowRightIcon className="w-4 h-4 text-accent" />
              <div className="px-2 py-1.5 rounded bg-accent/10 text-xs font-medium text-foreground">{row.pontusx}</div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
        <div className="text-xs font-bold text-primary uppercase tracking-wider mb-3">Gaia-X Tradicional</div>
        <ul className="flex flex-col gap-2">
          {["Federado", "Componentes centralizados", "Servidor Identity Provider", "Clearing House como intermediario"].map((item, i) => (
            <li key={i} className="flex items-center gap-2 text-xs text-foreground/80">
              <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="p-4 rounded-xl bg-accent/5 border border-accent/20">
        <div className="text-xs font-bold text-accent-foreground uppercase tracking-wider mb-3">Pontus-X / DeltaDAO</div>
        <ul className="flex flex-col gap-2">
          {["Descentralizado", "Blockchain + Smart Contracts", "Wallets + DIDs criptograficos", "Automatizacion total via Web3"].map((item, i) => (
            <li key={i} className="flex items-center gap-2 text-xs text-foreground/80">
              <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function ArchitectureDiagram({ slide }: { slide: SlideData }) {
  if (slide.id === 4 || slide.id === 17) {
    const components = [
      { label: "Keycloak (IdP)", icon: <KeyIcon className="w-6 h-6" />, color: "bg-chart-1/10 border-chart-1/30 text-chart-1" },
      { label: "Compliance Svc", icon: <CheckCircleIcon className="w-6 h-6" />, color: "bg-chart-2/10 border-chart-2/30 text-chart-2" },
      { label: "Vocabulary", icon: <BookIcon className="w-6 h-6" />, color: "bg-chart-3/10 border-chart-3/30 text-chart-3" },
      { label: "Metadata Broker", icon: <SearchIcon className="w-6 h-6" />, color: "bg-chart-4/10 border-chart-4/30 text-chart-4" },
      { label: "Connector", icon: <ShieldIcon className="w-6 h-6" />, color: "bg-primary/10 border-primary/30 text-primary" },
      { label: "Clearing House", icon: <FileCheckIcon className="w-6 h-6" />, color: "bg-chart-5/10 border-chart-5/30 text-chart-5" },
    ]
    return (
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-3 gap-3">
          {components.map((comp, i) => (
            <div key={i} className={`flex flex-col items-center gap-1.5 p-3 rounded-lg border ${comp.color}`}>
              {comp.icon}
              <span className="text-[10px] font-medium text-foreground text-center">{comp.label}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <div className="w-16 h-px bg-border" />
          <span className="font-medium">Arquitectura Gaia-X</span>
          <div className="w-16 h-px bg-border" />
        </div>
      </div>
    )
  }

  const components = [
    { label: "Wallets + DIDs", icon: <WalletIcon className="w-6 h-6" />, color: "bg-accent/10 border-accent/30 text-accent-foreground" },
    { label: "Smart Contracts", icon: <BlockchainIcon className="w-6 h-6" />, color: "bg-chart-1/10 border-chart-1/30 text-chart-1" },
    { label: "Ocean Provider", icon: <ShieldIcon className="w-6 h-6" />, color: "bg-chart-3/10 border-chart-3/30 text-chart-3" },
    { label: "Aquarius", icon: <SearchIcon className="w-6 h-6" />, color: "bg-chart-4/10 border-chart-4/30 text-chart-4" },
    { label: "Trust Anchors", icon: <CheckCircleIcon className="w-6 h-6" />, color: "bg-chart-2/10 border-chart-2/30 text-chart-2" },
    { label: "C2D", icon: <CpuIcon className="w-6 h-6" />, color: "bg-chart-5/10 border-chart-5/30 text-chart-5" },
  ]
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-3 gap-3">
        {components.map((comp, i) => (
          <div key={i} className={`flex flex-col items-center gap-1.5 p-3 rounded-lg border ${comp.color}`}>
            {comp.icon}
            <span className="text-[10px] font-medium text-foreground text-center">{comp.label}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
        <div className="w-16 h-px bg-accent" />
        <span className="font-medium">Arquitectura Pontus-X</span>
        <div className="w-16 h-px bg-accent" />
      </div>
    </div>
  )
}

function ProcessSteps({ slide }: { slide: SlideData }) {
  const steps = slide.bullets.map((b) => {
    const match = b.match(/^\d\.\s*(?:([A-Z ]+):\s*)?(.*)$/)
    if (match) return { label: match[1] || "", desc: match[2] }
    return { label: "", desc: b }
  })

  const sectionIsPontus = slide.section === "pontusx"

  return (
    <div className="flex flex-col gap-1.5">
      {steps.map((step, i) => (
        <div key={i} className="flex items-start gap-3">
          <div className="flex flex-col items-center">
            <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${sectionIsPontus ? "bg-accent text-accent-foreground" : "bg-primary text-primary-foreground"}`}>
              {i + 1}
            </div>
            {i < steps.length - 1 && (
              <div className={`w-px h-5 ${sectionIsPontus ? "bg-accent/30" : "bg-primary/30"}`} />
            )}
          </div>
          <div className="flex-1 pt-0.5">
            {step.label && (
              <span className={`text-[10px] font-bold uppercase tracking-wider ${sectionIsPontus ? "text-accent-foreground/60" : "text-primary/60"}`}>
                {step.label}
              </span>
            )}
            <p className="text-xs text-foreground/80 leading-relaxed">{step.desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

function IconGrid() {
  const items = [
    { icon: <ShieldIcon className="w-10 h-10" />, label: "Soberania", desc: "Tu decides quien accede" },
    { icon: <NetworkIcon className="w-10 h-10" />, label: "Interoperabilidad", desc: "Mismo idioma tecnico" },
    { icon: <CheckCircleIcon className="w-10 h-10" />, label: "Confianza", desc: "Verificacion automatica" },
    { icon: <GlobeIcon className="w-10 h-10" />, label: "Descentralizacion", desc: "Sin punto unico de fallo" },
  ]

  return (
    <div className="grid grid-cols-2 gap-4">
      {items.map((item, i) => (
        <div key={i} className="flex flex-col items-center gap-2 p-4 rounded-xl bg-secondary/50 border border-border">
          <div className="text-primary">{item.icon}</div>
          <span className="text-sm font-semibold text-foreground">{item.label}</span>
          <span className="text-[10px] text-muted-foreground text-center">{item.desc}</span>
        </div>
      ))}
    </div>
  )
}

function BridgeSlide() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-4">
        <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-primary/10 border border-primary/20">
          <NetworkIcon className="w-10 h-10 text-primary" />
          <span className="text-xs font-bold text-primary">Gaia-X</span>
          <span className="text-[10px] text-muted-foreground">Web2 / Federado</span>
        </div>

        <div className="flex flex-col items-center gap-1">
          <div className="w-16 h-px bg-accent" />
          <span className="text-[10px] text-accent font-bold uppercase tracking-wider">Evolucion</span>
          <ArrowRightIcon className="w-6 h-6 text-accent" />
        </div>

        <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-accent/10 border border-accent/20">
          <BlockchainIcon className="w-10 h-10 text-accent-foreground" />
          <span className="text-xs font-bold text-accent-foreground">Pontus-X</span>
          <span className="text-[10px] text-muted-foreground">Web3 / Blockchain</span>
        </div>
      </div>

      <div className="p-3 rounded-lg bg-secondary/50 border border-border max-w-sm text-center">
        <p className="text-xs text-muted-foreground leading-relaxed">
          Misma filosofia europea de soberania de datos, implementada con tecnologia Web3 (Ocean Protocol, Blockchain, DIDs)
        </p>
      </div>
    </div>
  )
}

function SummarySlide({ slide }: { slide: SlideData }) {
  const isFinal = slide.id === 30
  return (
    <div className="flex flex-col items-center gap-4">
      {isFinal && <EuStars className="w-24 h-24 mx-auto opacity-40" />}

      <div className="flex flex-col gap-2 w-full">
        {slide.bullets.map((bullet, i) => (
          <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30 border border-border">
            <StarIcon className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
            <p className="text-xs text-foreground/80 leading-relaxed">{bullet}</p>
          </div>
        ))}
      </div>

      {isFinal && (
        <div className="flex items-center gap-2 mt-2">
          <div className="px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-bold">Gaia-X</div>
          <span className="text-muted-foreground text-xs">+</span>
          <div className="px-3 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-bold">DeltaDAO</div>
          <span className="text-muted-foreground text-xs">=</span>
          <div className="px-3 py-1.5 rounded-full bg-blue-400 text-primary-foreground text-xs font-bold">Pontus-X</div>
        </div>
      )}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  MAIN DISPATCHER                                                   */
/* ------------------------------------------------------------------ */
export function SlideInfographic({ slide }: { slide: SlideData }) {
  switch (slide.infographicType) {
    case "title-cover":
      return <TitleCover />
    case "overview-diagram":
      return <OverviewDiagram />
    case "component-detail":
      return <ComponentDetail slide={slide} />
    case "analogy-visual":
      return <AnalogyVisual slide={slide} />
    case "flow-diagram":
      return <FlowDiagram slide={slide} />
    case "comparison-table":
      return <ComparisonTable slide={slide} />
    case "architecture-diagram":
      return <ArchitectureDiagram slide={slide} />
    case "process-steps":
      return <ProcessSteps slide={slide} />
    case "icon-grid":
      return <IconGrid />
    case "bridge-slide":
      return <BridgeSlide />
    case "summary-slide":
      return <SummarySlide slide={slide} />
    default:
      return null
  }
}
