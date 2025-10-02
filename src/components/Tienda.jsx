'use client'

import { useState, useRef, useEffect } from 'react'
import { Zap, ClipboardList, Droplet, Satellite, Boxes, ShieldCheck, Tractor, Sprout } from 'lucide-react'
import { motion } from 'framer-motion'

const automations = [
  {
    id: 'cuaderno-digital',
    name: 'Cuaderno de campo con IA',
    description: 'Registra labores, evidencias y recetas por parcela y exporta a SIEX en un clic.',
    icon: ClipboardList,
    accentBg: 'bg-emerald-100',
    accentIcon: 'text-emerald-700',
    highlights: [
      'Registra labores con voz, fotos y geoubicación',
      'Genera recetas y reportes compatibles con SIEX',
      'Comparte evidencias con agrónomos y auditorías',
    ],
    impact: 'Seguimiento integral sin hojas de cálculo ni papeles.',
  },
  {
    id: 'riego-precision',
    name: 'Riego de precisión',
    description: 'Combina sondas de humedad, clima y programación automática para optimizar riegos.',
    icon: Droplet,
    accentBg: 'bg-sky-100',
    accentIcon: 'text-sky-600',
    highlights: [
      'Unifica sondas, clima y válvulas en un panel',
      'Configura programas dinámicos por bloque y cultivo',
      'Recibe alertas predictivas de estrés hídrico',
    ],
    impact: 'Cada turno de riego ajustado sin revisar sensores manualmente.',
  },
  {
    id: 'planificador-labores',
    name: 'Planificador de labores y maquinaria',
    description: 'Asigna tareas por cuadrilla, controla maquinaria y genera partes automáticamente.',
    icon: Tractor,
    accentBg: 'bg-lime-100',
    accentIcon: 'text-lime-700',
    highlights: [
      'Planifica jornadas completas por parcela y cuadrilla',
      'Sincroniza disponibilidad de maquinaria y operarios',
      'Genera partes y checklists listos para firmar',
    ],
    impact: 'Coordina equipos sin llamadas ni cadenas de WhatsApp.',
  },
  {
    id: 'trazabilidad-lotes',
    name: 'Trazabilidad de lotes',
    description: 'Sincroniza cosecha, almacenes y distribución con etiquetas y QR para auditorías.',
    icon: Boxes,
    accentBg: 'bg-amber-100',
    accentIcon: 'text-amber-700',
    highlights: [
      'Etiqueta cada lote con QR y estados en tiempo real',
      'Conecta cosecha, almacén y distribución automáticamente',
      'Entrega reportes exportables para certificaciones',
    ],
    impact: 'Auditorías en minutos con historial verificable.',
  },
  {
    id: 'monitoreo-satelital',
    name: 'Monitoreo satelital y NDVI',
    description: 'Automatiza alertas según vigor, estrés hídrico y pronósticos climáticos.',
    icon: Satellite,
    accentBg: 'bg-indigo-100',
    accentIcon: 'text-indigo-600',
    highlights: [
      'Recibe mapas de vigor y NDVI actualizados cada 48h',
      'Superpone pronósticos y capas meteorológicas clave',
      'Crea alertas automáticas por zonas de estrés',
    ],
    impact: 'Decisiones con semanas de anticipación en cada parcela.',
  },
  {
    id: 'cumplimiento-fitosanitario',
    name: 'Cumplimiento fitosanitario',
    description: 'Controla stock de insumos, recetas y carencias con avisos al instante.',
    icon: ShieldCheck,
    accentBg: 'bg-rose-100',
    accentIcon: 'text-rose-600',
    highlights: [
      'Controla stock, caducidad y consumos en bodega',
      'Bloquea aplicaciones que no cumplen carencias',
      'Documenta tratamientos con firmas y evidencias',
    ],
    impact: 'Inspecciones sin sorpresas ni sanciones.',
  },
]

export default function Tienda() {
  const trackRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const scroller = trackRef.current
    if (!scroller) return

    const onScroll = () => {
      const center = scroller.scrollLeft + scroller.clientWidth / 2
      const slides = Array.from(scroller.children)
      let bestIdx = 0
      let bestDist = Infinity
      slides.forEach((el, i) => {
        const rectLeft = el.offsetLeft || 0
        const rectWidth = el.clientWidth || 0
        const childCenter = rectLeft + rectWidth / 2
        const d = Math.abs(childCenter - center)
        if (d < bestDist) {
          bestDist = d
          bestIdx = i
        }
      })
      setActiveIndex(bestIdx)
    }

    scroller.addEventListener('scroll', onScroll, { passive: true })
    return () => scroller.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="bg-[#faf9f6] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 break-words">
          Tienda de automatizaciones agronómicas
        </h2>
        <p className="mt-6 text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
          Elige flujos listos para desplegar con tu equipo técnico. Cada automatización incluye
          implantación guiada, seguimiento y soporte del equipo Procesia.
        </p>

        {/* Grid en desktop */}
        <div className="hidden md:grid mt-24 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {automations.map((a, i) => (
            <motion.div
              key={a.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow p-6 flex flex-col justify-between hover:shadow-lg transition"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`shrink-0 w-16 h-12 rounded-xl ${a.accentBg} flex items-center justify-center`}
                >
                  <a.icon className={`h-6 w-6 ${a.accentIcon}`} />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900 text-lg">{a.name}</h3>
                  <p className="text-gray-600 text-sm mt-1">{a.description}</p>
                </div>
              </div>

              <ul className="mt-6 space-y-3 text-left text-sm text-gray-600">
                {a.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-gray-300" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-col gap-4 text-left">
                <div className="flex items-start gap-2 text-sm font-semibold text-gray-900">
                  <Sprout className="h-4 w-4 text-emerald-500 mt-0.5" />
                  <span>{a.impact}</span>
                </div>
                <a
                  href="https://app-procesia.vercel.app/registro"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-black text-white px-4 py-2 text-sm font-medium shadow hover:opacity-90 transition"
                >
                  <Zap className="h-4 w-4" /> Descubrir flujo
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Carrusel en mobile */}
        <div className="md:hidden mt-10 overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth px-4"
          >
            {automations.map((a, i) => (
              <div
                key={a.id}
                className="snap-center shrink-0 w-[95%] max-w-[95%] bg-white rounded-2xl shadow p-6 text-left"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`shrink-0 w-12 h-12 rounded-xl ${a.accentBg} flex items-center justify-center`}
                  >
                    <a.icon className={`h-6 w-6 ${a.accentIcon}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">{a.name}</h3>
                    <p className="text-gray-600 text-sm mt-1">{a.description}</p>
                  </div>
                </div>

                <ul className="mt-6 space-y-3 text-sm text-gray-600">
                  {a.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2">
                      <span className="mt-1 inline-block h-2 w-2 rounded-full bg-gray-300" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-col gap-4">
                  <div className="flex items-start gap-2 text-sm font-semibold text-gray-900">
                    <Sprout className="h-4 w-4 text-emerald-500 mt-0.5" />
                    <span>{a.impact}</span>
                  </div>
                  <a
                    href="https://app-procesia.vercel.app/registro"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-black text-white px-4 py-2 text-sm font-medium shadow hover:opacity-90 transition"
                  >
                    <Zap className="h-4 w-4" /> Descubrir flujo
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-center gap-2">
            {automations.map((_, i) => (
              <button
                key={i}
                className={`rounded-full ${
                  activeIndex === i ? 'w-3 h-3 bg-black' : 'w-2.5 h-2.5 bg-gray-300'
                }`}
                onClick={() => {
                  const scroller = trackRef.current
                  if (scroller) scroller.scrollTo({ left: i * 320, behavior: 'smooth' })
                }}
              />
            ))}
          </div>
        </div>

        {/* Botón Ver más */}
        <div className="mt-10">
          <a
            href="/tienda"
            className="inline-block bg-black text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
          >
            Ver más automatizaciones →
          </a>
        </div>
      </div>
    </section>
  )
}
