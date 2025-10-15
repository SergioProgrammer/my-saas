'use client'

import { useState, useRef, useEffect } from 'react'
import { Zap, Workflow, Search, CreditCard, Boxes, ShieldCheck, Gauge, BarChart } from 'lucide-react'
import { motion } from 'framer-motion'

const automations = [
  {
    id: 'roadmap-automatizacion',
    name: 'Roadmap de automatización corporativa',
    description: 'Evaluamos tu madurez operativa, priorizamos iniciativas y construimos el business case ejecutivo.',
    icon: Workflow,
    accentBg: 'bg-indigo-100',
    accentIcon: 'text-indigo-700',
    highlights: [
      'Assessment de capacidades y pain points',
      'Priorización de quick wins y proyectos estructurales',
      'Modelo de gobernanza y tablero de seguimiento',
    ],
    impact: 'Patrocinio ejecutivo alineado con un plan de automatización accionable.',
    href: '/automatizaciones/control-turnos-campo',
  },
  {
    id: 'procesos-core',
    name: 'Rediseño de procesos core end-to-end',
    description: 'Mapeamos journeys críticos junto a tus equipos y eliminamos fricciones antes de automatizar.',
    icon: Search,
    accentBg: 'bg-emerald-100',
    accentIcon: 'text-emerald-700',
    highlights: [
      'Workshops inter-área y blueprint de procesos',
      'Identificación de riesgos y controles clave',
      'Backlog de automatización listo para desarrollo',
    ],
    impact: 'Procesos simplificados y listos para automatización sin sobresaltos.',
    href: '/automatizaciones/albaranes-campo',
  },
  {
    id: 'procure-to-pay',
    name: 'Procure-to-pay automatizado',
    description: 'Conectamos compras, finanzas y operaciones con un flujo automático de punta a punta.',
    icon: CreditCard,
    accentBg: 'bg-teal-100',
    accentIcon: 'text-teal-700',
    highlights: [
      'Reglas de reaprovisionamiento y aprobaciones multiescala',
      'Integraciones con ERP y proveedores',
      'Monitoreo de SLA y KPIs financieros',
    ],
    impact: 'Ciclos de compra más cortos y controlados con trazabilidad absoluta.',
    href: '/automatizaciones/pedidos-proveedores-agro',
  },
  {
    id: 'inventarios-criticos',
    name: 'Gobierno de inventarios críticos',
    description: 'Unificamos la visión de inventario, demanda y riesgos para tomar decisiones dinámicas.',
    icon: Boxes,
    accentBg: 'bg-amber-100',
    accentIcon: 'text-amber-700',
    highlights: [
      'Modelos de cobertura y señal de reposición',
      'Alertas predictivas de consumo y caducidad',
      'Conectores con herramientas de supply chain',
    ],
    impact: 'Inventario saludable y decisiones basadas en datos en tiempo real.',
    href: '/automatizaciones/stock-insumos-agro',
  },
  {
    id: 'compliance-operativo',
    name: 'Compliance automatizado y auditoría continua',
    description: 'Diseñamos controles y reportes automáticos para mitigar riesgos regulatorios y operativos.',
    icon: ShieldCheck,
    accentBg: 'bg-rose-100',
    accentIcon: 'text-rose-600',
    highlights: [
      'Matriz de riesgos y controles priorizados',
      'Automatización de evidencias y trazabilidad',
      'Dashboards regulatorios y alertas en vivo',
    ],
    impact: 'Cumplimiento proactivo y auditorías con información lista en segundos.',
    href: '/automatizaciones/tratamientos-fitosanitarios',
  },
  {
    id: 'oficina-automatizacion',
    name: 'Oficina de automatización (PMO)',
    description: 'Escalamos tu programa con gobierno, talento y métricas para cada sprint de automatización.',
    icon: Gauge,
    accentBg: 'bg-blue-100',
    accentIcon: 'text-blue-700',
    highlights: [
      'Rituales de seguimiento y portfolio management',
      'Playbooks de adopción y change management',
      'Training para equipos internos y partners',
    ],
    impact: 'Automatización sostenible con capacidades internas fortalecidas.',
    href: 'https://wa.me/34655689827',
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
          Portafolio de servicios estratégicos
        </h2>
        <p className="mt-6 text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
          Selecciona módulos de consultoría y automatización listos para desplegar con tus equipos.
          Cada servicio incluye discovery, implantación guiada y acompañamiento continuo del equipo ProcesIA.
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
                  <BarChart className="h-4 w-4 text-emerald-500 mt-0.5" />
                  <span>{a.impact}</span>
                </div>
                <a
                  href={a.href ?? 'https://wa.me/34655689827'}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-black text-white px-4 py-2 text-sm font-medium shadow hover:opacity-90 transition"
                >
                  <Zap className="h-4 w-4" /> Coordinar sesión
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
                    <BarChart className="h-4 w-4 text-emerald-500 mt-0.5" />
                    <span>{a.impact}</span>
                  </div>
                  <a
                    href={a.href ?? 'https://wa.me/34655689827'}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-black text-white px-4 py-2 text-sm font-medium shadow hover:opacity-90 transition"
                  >
                    <Zap className="h-4 w-4" /> Coordinar sesión
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
            Ver todos los servicios →
          </a>
        </div>
      </div>
    </section>
  )
}
