import { useState, useCallback, useEffect } from "react"
import { slides } from "@/lib/slides-data"
import type { SlideData } from "@/lib/slides-data"
import { SlideInfographic } from "@/components/presentation/SlideInfographic"
import { cn } from "@/lib/utils"

const sectionAccent: Record<SlideData["section"], { bg: string; text: string; bar: string; badge: string }> = {
  intro: {
    bg: "bg-primary",
    text: "text-primary",
    bar: "bg-primary",
    badge: "bg-primary/10 text-primary border-primary/20",
  },
  gaiax: {
    bg: "bg-primary",
    text: "text-primary",
    bar: "bg-primary",
    badge: "bg-primary/10 text-primary border-primary/20",
  },
  transition: {
    bg: "bg-blue-400",
    text: "text-blue-500",
    bar: "bg-blue-400",
    badge: "bg-blue-400/10 text-blue-500 border-blue-400/20",
  },
  pontusx: {
    bg: "bg-accent",
    text: "text-accent-foreground",
    bar: "bg-accent",
    badge: "bg-accent/10 text-accent-foreground border-accent/20",
  },
  summary: {
    bg: "bg-primary",
    text: "text-primary",
    bar: "bg-primary",
    badge: "bg-primary/10 text-primary border-primary/20",
  },
}

function ChevronLeft({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  )
}

function ChevronRight({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18l6-6-6-6" />
    </svg>
  )
}

function GridIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
    </svg>
  )
}

function XIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  )
}

function ExpandIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 3H5a2 2 0 00-2 2v3M21 8V5a2 2 0 00-2-2h-3M3 16v3a2 2 0 002 2h3M16 21h3a2 2 0 002-2v-3" />
    </svg>
  )
}

function ShrinkIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 14h6v6M20 10h-6V4M14 10l7-7M3 21l7-7" />
    </svg>
  )
}

function SlideOverview({
  currentSlide,
  onSelect,
  onClose,
}: {
  currentSlide: number
  onSelect: (id: number) => void
  onClose: () => void
}) {
  const sections = [
    { key: "intro" as const, label: "Introduccion" },
    { key: "gaiax" as const, label: "Gaia-X Tradicional" },
    { key: "transition" as const, label: "Transicion" },
    { key: "pontusx" as const, label: "Pontus-X / DeltaDAO" },
    { key: "summary" as const, label: "Resumen Final" },
  ]

  return (
    <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm overflow-auto">
      <div className="max-w-5xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-foreground">Vista General de Diapositivas</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-secondary transition-colors"
            aria-label="Cerrar vista general"
          >
            <XIcon className="w-5 h-5 text-foreground" />
          </button>
        </div>

        {sections.map((section) => {
          const sectionSlides = slides.filter((s) => s.section === section.key)
          const accent = sectionAccent[section.key]
          return (
            <div key={section.key} className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <div className={cn("w-3 h-3 rounded-full", accent.bg)} />
                <h3 className="text-sm font-semibold text-foreground">{section.label}</h3>
                <span className="text-xs text-muted-foreground">({sectionSlides.length} diapositivas)</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {sectionSlides.map((slide) => (
                  <button
                    key={slide.id}
                    onClick={() => {
                      onSelect(slide.id)
                      onClose()
                    }}
                    className={cn(
                      "p-3 rounded-lg border text-left transition-all hover:scale-[1.02]",
                      slide.id === currentSlide
                        ? `${accent.badge} border-2`
                        : "bg-card border-border hover:border-primary/30"
                    )}
                  >
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className={cn("text-[10px] font-bold", accent.text)}>{String(slide.id).padStart(2, "0")}</span>
                    </div>
                    <p className="text-xs font-medium text-foreground line-clamp-2 leading-tight">{slide.title}</p>
                  </button>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function SlideView({ slide }: { slide: SlideData }) {
  const accent = sectionAccent[slide.section]

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-3 mb-4">
        <span className={cn("text-[10px] font-bold px-2 py-0.5 rounded-full border uppercase tracking-wider", accent.badge)}>
          {slide.sectionLabel}
        </span>
        <span className="text-xs text-muted-foreground font-mono">
          {String(slide.id).padStart(2, "0")} / 30
        </span>
      </div>

      <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground leading-tight text-balance mb-1">
        {slide.title}
      </h1>
      {slide.subtitle && (
        <p className={cn("text-sm font-medium mb-4", accent.text)}>{slide.subtitle}</p>
      )}

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6 min-h-0">
        <div className="flex flex-col justify-center">
          <ul className="flex flex-col gap-2.5">
            {slide.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className={cn("w-2 h-2 rounded-full mt-1.5 flex-shrink-0", accent.bg)} />
                <p className="text-sm text-foreground/85 leading-relaxed">{bullet}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-center p-2">
          <div className="w-full max-w-md">
            <SlideInfographic slide={slide} />
          </div>
        </div>
      </div>
    </div>
  )
}

export function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(1)
  const [showOverview, setShowOverview] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const slide = slides.find((s) => s.id === currentSlide) || slides[0]
  const accent = sectionAccent[slide.section]

  const goNext = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, 30))
  }, [])

  const goPrev = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 1))
  }, [])

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {})
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {})
    }
  }, [])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (showOverview) {
        if (e.key === "Escape") setShowOverview(false)
        return
      }
      switch (e.key) {
        case "ArrowRight":
        case " ":
          e.preventDefault()
          goNext()
          break
        case "ArrowLeft":
          e.preventDefault()
          goPrev()
          break
        case "Escape":
          setShowOverview(true)
          break
        case "f":
          toggleFullscreen()
          break
      }
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [goNext, goPrev, showOverview, toggleFullscreen])

  useEffect(() => {
    const handler = () => setIsFullscreen(!!document.fullscreenElement)
    document.addEventListener("fullscreenchange", handler)
    return () => document.removeEventListener("fullscreenchange", handler)
  }, [])

  const progress = (currentSlide / 30) * 100

  return (
    <div className="flex flex-col h-screen bg-background overflow-hidden select-none">
      <header className="flex items-center justify-between px-4 py-2 border-b border-border bg-card flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-5 h-5" fill="none">
                {Array.from({ length: 12 }, (_, i) => {
                  const angle = (i * 30 - 90) * (Math.PI / 180)
                  const r = 35
                  return (
                    <circle
                      key={i}
                      cx={50 + r * Math.cos(angle)}
                      cy={50 + r * Math.sin(angle)}
                      r="4"
                      className="fill-accent"
                    />
                  )
                })}
              </svg>
            </div>
            <div className="hidden sm:block">
              <div className="text-xs font-bold text-foreground leading-none">COMPONENTES TECNOLÓGICOS</div>
              <div className="text-[10px] text-muted-foreground leading-none mt-0.5">Espacios de Datos Federados</div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={() => setShowOverview(true)}
            className="p-2 rounded-lg hover:bg-secondary transition-colors"
            aria-label="Vista general"
            title="Vista general (Esc)"
          >
            <GridIcon className="w-4 h-4 text-foreground" />
          </button>
          <button
            onClick={toggleFullscreen}
            className="p-2 rounded-lg hover:bg-secondary transition-colors"
            aria-label="Pantalla completa"
            title="Pantalla completa (F)"
          >
            {isFullscreen ? (
              <ShrinkIcon className="w-4 h-4 text-foreground" />
            ) : (
              <ExpandIcon className="w-4 h-4 text-foreground" />
            )}
          </button>
        </div>
      </header>

      <div className="h-1 bg-secondary flex-shrink-0">
        <div
          className={cn("h-full transition-all duration-500 ease-out", accent.bar)}
          style={{ width: `${progress}%` }}
        />
      </div>

      <main className="flex-1 overflow-auto px-6 py-4 sm:px-8 sm:py-6 lg:px-12 lg:py-8">
        <SlideView slide={slide} />
      </main>

      <footer className="flex items-center justify-between px-4 py-3 border-t border-border bg-card flex-shrink-0">
        <button
          onClick={goPrev}
          disabled={currentSlide === 1}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors disabled:opacity-30 disabled:cursor-not-allowed hover:bg-secondary text-foreground"
          aria-label="Diapositiva anterior"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Anterior</span>
        </button>

        <div className="flex items-center gap-1">
          {slides.map((s) => {
            const sAccent = sectionAccent[s.section]
            return (
              <button
                key={s.id}
                onClick={() => setCurrentSlide(s.id)}
                className={cn(
                  "transition-all rounded-full",
                  s.id === currentSlide
                    ? `w-3 h-3 ${sAccent.bg}`
                    : `w-1.5 h-1.5 ${s.id < currentSlide ? sAccent.bg : "bg-border"} hover:scale-150`
                )}
                aria-label={`Ir a diapositiva ${s.id}`}
                title={`${s.id}. ${s.title}`}
              />
            )
          })}
        </div>

        <button
          onClick={goNext}
          disabled={currentSlide === 30}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors disabled:opacity-30 disabled:cursor-not-allowed hover:bg-secondary text-foreground"
          aria-label="Siguiente diapositiva"
        >
          <span className="hidden sm:inline">Siguiente</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </footer>

      {showOverview && (
        <SlideOverview
          currentSlide={currentSlide}
          onSelect={setCurrentSlide}
          onClose={() => setShowOverview(false)}
        />
      )}
    </div>
  )
}
