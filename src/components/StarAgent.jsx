'use client'

import { motion } from 'framer-motion'
import { MessageSquare, Mic, Database, Languages, WifiOff, Sparkles } from 'lucide-react'

const scenarios = [
  {
    id: 'greenhouse',
    badge: 'Audio • Español',
    title: 'Turno en invernadero 2',
    description:
      'El encargado envía un audio corto por WhatsApp y el agente IA crea los partes de trabajo y registro horario automáticamente.',
    timeline: [
      {
        from: 'crew',
        text: 'Entrando en invernadero 2 a las 8 de la mañana. Abrimos ventilación y reviso riego por goteo.',
      },
      {
        from: 'agent',
        text: 'Registro creado: inicio de turno en Invernadero 2 a las 08:00, tarea “Revisión riego”. Se asigna alerta de seguimiento a las 09:00.',
      },
      {
        from: 'crew',
        text: 'A las 9:05: cargadas dos cajas de naranjas para enviar a almacén.',
      },
      {
        from: 'agent',
        text: 'Inventario actualizado con 2 cajas de naranjas en tránsito hacia almacén central. Etiquetas QR listas.',
      },
    ],
    outcomes: [
      'Actualiza la base de horarios y tareas con datos geolocalizados.',
      'Crea recordatorios automáticos para verificar riego y ventilación.',
      'Prepara documentos de trazabilidad sin intervención manual.',
    ],
  },
  {
    id: 'logistics',
    badge: 'Audio • Português + modo offline',
    title: 'Carga para Mercasur',
    description:
      'Un operario dicta el avance logístico en portugués mientras el camión está sin cobertura. La IA sincroniza cuando vuelve la señal.',
    timeline: [
      {
        from: 'crew',
        text: 'Armazen, caminhão 7 carregado com 7 caixas de melancias para Mercasur. Sem rede, envio quando voltar.',
      },
      {
        from: 'agent',
        text: 'Nota guardada offline. Se agenda sincronização automática e controlo de temperatura do lote.',
      },
      {
        from: 'crew',
        text: 'Conexión voltou. Confirmar despacho.',
      },
      {
        from: 'agent',
        text: 'Despacho confirmado: 7 caixas de melancias em Caminhão 7 → Mercasur. Aviso enviado ao ERP y al responsable comercial.',
      },
    ],
    outcomes: [
      'Reconoce voz en múltiples idiomas y acentos sin configuración extra.',
      'Encola registros cuando no hay cobertura y sincroniza al recuperar señal.',
      'Notifica a logística y ventas con la evidencia adjunta del audio.',
    ],
  },
]

const features = [
  {
    icon: <Mic className="h-5 w-5 text-emerald-600" />,
    title: 'Audio o texto',
    description: 'Transcribe, entiende y estructura instrucciones recibidas por WhatsApp, Telegram o llamada.'
  },
  {
    icon: <Languages className="h-5 w-5 text-blue-600" />,
    title: 'Multilingüe real',
    description: 'Detecta idioma automáticamente y genera registros normalizados para el panel.'
  },
  {
    icon: <WifiOff className="h-5 w-5 text-amber-600" />,
    title: 'Sin cobertura',
    description: 'Trabaja offline y sincroniza con inventario, horarios o cuaderno cuando vuelve la señal.'
  },
  {
    icon: <Database className="h-5 w-5 text-purple-600" />,
    title: 'Integrado',
    description: 'Graba los datos directamente en trazabilidad, inventario y plan de campañas sin copiar y pegar.'
  },
]

export default function StarAgent() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-lime-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-lime-700">
            <Sparkles className="h-3.5 w-3.5" /> Producto estrella
          </span>
          <h2 className="mt-6 text-4xl sm:text-5xl font-bold leading-tight text-gray-900">
            Agente de WhatsApp que entiende tu campo
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Envía un audio desde el invernadero, desde el camión o desde la oficina. El agente IA interpreta la orden, la registra en la base adecuada y activa los flujos siguientes en segundos.
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
            <h3 className="text-xl font-semibold text-gray-900">Listo para tu finca en menos de una semana</h3>
            <p className="text-sm text-gray-600">
              Nuestros agrónomos te ayudan a configurar palabras clave, rutas de sincronización y destinos de datos.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="https://app-procesia.vercel.app/registro"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-5 py-3 text-sm font-medium text-white shadow hover:bg-gray-800 transition"
            >
              <Mic className="h-4 w-4" /> Probar agente IA
            </a>
            <a
              href="https://cal.com/procesia/agro"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 px-5 py-3 text-sm font-medium text-gray-800 hover:bg-gray-100 transition"
            >
              <Sparkles className="h-4 w-4" /> Diseñar mi escenario
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
