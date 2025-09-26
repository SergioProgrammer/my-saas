'use client'

import { useState, useRef, useEffect } from 'react'
import { Zap, Mail, Workflow, ShoppingCart, Bell, BarChart } from 'lucide-react'
import { motion } from 'framer-motion'

const automations = [
  {
    id: 'email-config',
    name: 'IA Responde tus Emails',
    description: 'Responde automáticamente a emails usando IA.',
    icon: Mail,
    accentBg: 'bg-rose-100',
    accentIcon: 'text-rose-600',
    price: '24,99 €/mes',
  },
  {
    id: 'carrito-abandonado',
    name: 'Recordatorio de carrito',
    description: 'Envía recordatorios de carritos abandonados.',
    icon: ShoppingCart,
    accentBg: 'bg-amber-100',
    accentIcon: 'text-amber-600',
    price: '19,99 €/mes',
  },
  {
    id: 'leads-a-sheets',
    name: 'Leads → Google Sheets',
    description: 'Añade leads automáticamente a tus hojas de cálculo.',
    icon: Workflow,
    accentBg: 'bg-emerald-100',
    accentIcon: 'text-emerald-600',
    price: '14,99 €/mes',
  },
  {
    id: 'alerta-pago',
    name: 'Alerta de pago fallido',
    description: 'Recibe un aviso inmediato cuando un pago falle.',
    icon: Bell,
    accentBg: 'bg-sky-100',
    accentIcon: 'text-sky-600',
    price: '29,99 €/mes',
  },
  {
    id: 'post-a-redes',
    name: 'Post → Redes sociales',
    description: 'Publica en redes automáticamente tus novedades.',
    icon: Zap,
    accentBg: 'bg-purple-100',
    accentIcon: 'text-purple-600',
    price: '34,99 €/mes',
  },
  {
    id: 'reportes-auto',
    name: 'Reportes automáticos',
    description: 'Obtén reportes periódicos sin mover un dedo.',
    icon: BarChart,
    accentBg: 'bg-indigo-100',
    accentIcon: 'text-indigo-600',
    price: '39,99 €/mes',
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
    <section className="bg-[#faf9f6] py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-6xl sm:text-6xl font-bold text-gray-900">
           Tienda de automatizaciones
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
                  href="#"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-black text-white px-4 py-2 text-sm font-medium shadow hover:opacity-90 transition"
                >
                  <Zap className="h-4 w-4" /> Instalar
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Carrusel en mobile */}
        <div className="md:hidden mt-10">
          <div
            ref={trackRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth px-1 -mx-1"
          >
            {automations.map((a, i) => (
              <div
                key={a.id}
                className="snap-center shrink-0 min-w-[85%] bg-white rounded-2xl shadow p-6 text-left"
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
                    href="#"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-black text-white px-4 py-2 text-sm font-medium shadow hover:opacity-90 transition"
                  >
                    <Zap className="h-4 w-4" /> Instalar
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-center gap-2">
            {automations.map((_, i) => (
              <button
                key={i}
                className={`rounded-full ${activeIndex === i ? 'w-3 h-3 bg-black' : 'w-2.5 h-2.5 bg-gray-300'}`}
                onClick={() => {
                  const scroller = trackRef.current
                  if (scroller) scroller.scrollTo({ left: i * 300, behavior: 'smooth' })
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
