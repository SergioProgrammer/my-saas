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
    price: '72,00 €/mes',
  },
  {
    id: 'riego-precision',
    name: 'Riego de precisión',
    description: 'Combina sondas de humedad, clima y programación automática para optimizar riegos.',
    icon: Droplet,
    accentBg: 'bg-sky-100',
    accentIcon: 'text-sky-600',
    price: '64,00 €/mes',
  },
  {
    id: 'planificador-labores',
    name: 'Planificador de labores y maquinaria',
    description: 'Asigna tareas por cuadrilla, controla maquinaria y genera partes automáticamente.',
    icon: Tractor,
    accentBg: 'bg-lime-100',
    accentIcon: 'text-lime-700',
    price: '58,00 €/mes',
  },
  {
    id: 'trazabilidad-lotes',
    name: 'Trazabilidad de lotes',
    description: 'Sincroniza cosecha, almacenes y distribución con etiquetas y QR para auditorías.',
    icon: Boxes,
    accentBg: 'bg-amber-100',
    accentIcon: 'text-amber-700',
    price: '89,00 €/mes',
  },
  {
    id: 'monitoreo-satelital',
    name: 'Monitoreo satelital y NDVI',
    description: 'Automatiza alertas según vigor, estrés hídrico y pronósticos climáticos.',
    icon: Satellite,
    accentBg: 'bg-indigo-100',
    accentIcon: 'text-indigo-600',
    price: '76,00 €/mes',
  },
  {
    id: 'cumplimiento-fitosanitario',
    name: 'Cumplimiento fitosanitario',
    description: 'Controla stock de insumos, recetas y carencias con avisos al instante.',
    icon: ShieldCheck,
    accentBg: 'bg-rose-100',
    accentIcon: 'text-rose-600',
    price: '67,00 €/mes',
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
          <div className="mt-6 flex items-center justify-between">
            <span className="font-semibold text-gray-900">{a.price}</span>
            <a
              href="https://app-procesia.vercel.app/registro"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-black text-white px-4 py-2 text-sm font-medium shadow hover:opacity-90 transition"
            >
              <Zap className="h-4 w-4" /> Activar
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
            <div className="mt-6 flex items-center justify-between">
              <span className="font-semibold text-gray-900">{a.price}</span>
              <a
                href="https://app-procesia.vercel.app/registro"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-black text-white px-4 py-2 text-sm font-medium shadow hover:opacity-90 transition"
              >
                <Zap className="h-4 w-4" /> Activar
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
