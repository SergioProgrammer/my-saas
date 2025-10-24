'use client'

import { motion } from 'framer-motion'
import { MessageSquare, Mic, Database, Languages, WifiOff, Sparkles } from 'lucide-react'

const scenarios = [
  {
    id: 'onboarding',
    badge: 'Voz • Español',
    title: 'Seguimiento de onboarding de clientes',
    description:
      'El equipo de operaciones deja notas de voz rápidas y el agente sincroniza CRM, tareas internas y métricas de avance automáticamente.',
    timeline: [
      {
        from: 'crew',
        text: 'Cliente Solvia: documentación validada, falta firma del contrato marco. Avisad a legal para revisión final.',
      },
      {
        from: 'agent',
        text: 'CRM actualizado a fase “Firma pendiente”. Notificación enviada a legal y recordatorio programado para mañana a las 09:00.',
      },
      {
        from: 'crew',
        text: 'Contrato firmado. Activar accesos al portal y kickoff con customer success.',
      },
      {
        from: 'agent',
        text: 'Provisionamiento iniciado. Ticket en ServiceNow para TI y reunión de kickoff agendada con customer success. KPI de onboarding actualizado.',
      },
    ],
    outcomes: [
      'Sincroniza CRM, ticketing y reporting sin intervención manual.',
      'Genera tareas y follow-ups basados en la voz del equipo.',
      'Actualiza KPIs de onboarding en tiempo real para dirección.',
    ],
  },
  {
    id: 'incidencias',
    badge: 'Chat • Inglés + Portugués',
    title: 'Gestión de incidencias en operaciones distribuidas',
    description:
      'Supervisores reportan incidencias desde planta en distintos idiomas y el agente coordina escalamientos y documentación de SLA.',
    timeline: [
      {
        from: 'crew',
        text: 'Site Lisboa: linha 4 parada, sensor de temperatura disparado. Necessitamos suporte de manutenção.',
      },
      {
        from: 'agent',
        text: 'Incidencia registrada en Jira. SLA crítico activado y alerta enviada al equipo de mantenimiento.',
      },
      {
        from: 'crew',
        text: 'Maintenance on it. Please notify customer support about potential shipment delay.',
      },
      {
        from: 'agent',
        text: 'Actualización enviada a customer support y forecasting ajustado en el panel de operaciones. Reporte de SLA guardado.',
      },
    ],
    outcomes: [
      'Traduce y unifica comunicaciones multilingües.',
      'Genera documentación de SLA y seguimiento automático.',
      'Escala a las áreas correctas con contexto completo.',
    ],
  },
]

const features = [
  {
    icon: <Database className="h-5 w-5 text-purple-600" />,
    title: 'Control operativo unificado',
    description: 'Conecta PLCs, SCADA, MES, ERP y automatizaciones RPA en una sola plataforma de decisión.',
  },
  {
    icon: <Languages className="h-5 w-5 text-blue-600" />,
    title: 'Multilingüe real',
    description: 'Detecta idioma automáticamente y genera registros normalizados para CRM, ERP y sistemas de soporte.',
  },
  {
    icon: <Mic className="h-5 w-5 text-emerald-600" />,
    title: 'Captura omnicanal',
    description: 'Transcribe, entiende y estructura instrucciones provenientes de voz, WhatsApp, Teams o formularios técnicos.',
  },
  {
    icon: <WifiOff className="h-5 w-5 text-amber-600" />,
    title: 'Operativa 24/7',
    description: 'Funciona offline y sincroniza en cuanto hay conexión, manteniendo la continuidad operativa.',
  },
]

export default function StarAgent() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-lime-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-lime-700">
            <Sparkles className="h-3.5 w-3.5" /> Oferta estrella
          </span>
          <h2 className="mt-6 text-4xl sm:text-5xl font-bold leading-tight text-gray-900">
            Agente estratégico para orquestar tus automatizaciones
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Convierte notas de voz, mensajes y formularios en instrucciones estructuradas, se integra con tus sistemas industriales y activa workflows sobre PLCs, SCADA, MES, ERPs y herramientas comerciales sin intervención manual.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {scenarios.map((scenario, index) => (
            <motion.article
              key={scenario.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="rounded-3xl border border-gray-200 bg-[#FAF9F6] p-8 shadow-sm"
            >
              <div className="flex flex-col gap-2">
                <span className="inline-flex w-fit items-center rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-700 shadow-sm">
                  {scenario.badge}
                </span>
                <h3 className="text-2xl font-semibold text-gray-900">{scenario.title}</h3>
                <p className="text-gray-600">{scenario.description}</p>
              </div>

              <div className="mt-6 space-y-4">
                {scenario.timeline.map((line, idx) => {
                  const isCrew = line.from === 'crew'
                  return (
                    <div key={idx} className={`flex ${isCrew ? 'justify-start' : 'justify-end'}`}>
                      <div
                        className={`max-w-xs rounded-2xl px-4 py-3 text-sm leading-relaxed shadow ${
                          isCrew ? 'bg-white text-gray-800' : 'bg-gray-900 text-white'
                        }`}
                      >
                        {line.text}
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="mt-8 space-y-2">
                {scenario.outcomes.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <MessageSquare className="mt-0.5 h-4 w-4 text-lime-600" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
            >
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100">
                {feature.icon}
              </div>
              <h4 className="text-base font-semibold text-gray-900">{feature.title}</h4>
              <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Listo para tus operaciones en menos de una semana</h3>
            <p className="text-sm text-gray-600">
              Nuestro equipo configura vocabularios, rutas de sincronización y buenas prácticas para que el agente trabaje alineado con tus procesos.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="/tienda"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-5 py-3 text-sm font-medium text-white shadow hover:bg-gray-800 transition"
            >
              <Sparkles className="h-4 w-4" /> Explorar servicios
            </a>
            <a
              href="https://wa.me/34655689827"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 px-5 py-3 text-sm font-medium text-gray-800 hover:bg-gray-100 transition"
            >
              <MessageSquare className="h-4 w-4" /> Hablar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
