'use client'

import { useMemo, useState } from 'react'
import {
  Workflow,
  BarChart,
  Zap,
  Mail,
  ShoppingCart,
  FileSpreadsheet,
  Bell,
  Megaphone,
  Search,
  CreditCard,
  Sprout,
} from 'lucide-react'

export default function TiendaSection() {
  const [query, setQuery] = useState('')

  const groups = useMemo(
    () => [
      {
        id: 'agro',
        title: 'Agronegocios conectados',
        highlight: true,
        tagline:
          'Controla horarios, stock, pedidos, albaranes y tratamientos agrónomos desde el dashboard.',
        items: [
          {
            id: 'control-turnos-campo',
            name: 'Control de turnos en campo',
            description:
              'Planifica jornadas del equipo agrícola y sincronízalas con el panel para repartir tareas automáticamente.',
            icon: Workflow,
            accentBg: 'bg-lime-100',
            accentIcon: 'text-lime-600',
            href: '/automatizaciones/control-turnos-campo',
            badges: ['Desde 69,99 €/mes con hasta 20 usuarios' ],
          },
          {
            id: 'stock-insumos-agro',
            name: 'Stock inteligente de insumos',
            description:
              'Controla inventario de semillas, fertilizantes y fitosanitarios con alertas e integración en dashboard.',
            icon: ShoppingCart,
            accentBg: 'bg-emerald-100',
            accentIcon: 'text-emerald-600',
            href: '/automatizaciones/stock-insumos-agro',
            badges: ['Desde 130,00 €/mes en Pequeña explotación' ],
          },
          {
            id: 'pedidos-proveedores-agro',
            name: 'Pedidos automatizados a proveedores',
            description:
              'Genera pedidos cuando el stock baja de mínimos y envía confirmaciones automáticas a tus proveedores.',
            icon: CreditCard,
            accentBg: 'bg-teal-100',
            accentIcon: 'text-teal-700',
            href: '/automatizaciones/pedidos-proveedores-agro',
            badges: ['Desde 150 €/mes en Pequeña explotación' ],
          },
          {
            id: 'albaranes-campo',
            name: 'Albaranes digitales de campo',
            description:
              'Digitaliza entradas y salidas con OCR específico para cooperativas agrícolas y comparte en segundos.',
            icon: FileSpreadsheet,
            accentBg: 'bg-green-100',
            accentIcon: 'text-green-600',
            href: '/automatizaciones/albaranes-campo',
            badges: ['160,00 €/mes en Pequeña explotación' ],
          },
          {
            id: 'tratamientos-fitosanitarios',
            name: 'Tratamientos fitosanitarios asistidos',
            description:
              'Programa, registra y notifica tratamientos por parcela con alertas de seguridad y trazabilidad completa.',
            icon: Sprout,
            accentBg: 'bg-lime-200',
            accentIcon: 'text-lime-700',
            href: '/automatizaciones/tratamientos-fitosanitarios',
            badges: ['Desde 120,00 €/mes en Pequeña explotación' ],
          },
        ],
      },
      {
        id: 'logistica',
        title: 'Operaciones & Retail',
        highlight: false,
        tagline: 'Optimiza la cadena logística con automatizaciones listas para producción.',
        items: [
          {
            id: 'email-config',
            name: 'IA Responde tus Emails',
            description:
              'Responde automáticamente a emails usando IA. Personalizable y eficiente.',
            icon: Mail,
            accentBg: 'bg-rose-100',
            accentIcon: 'text-rose-600',
            href: '/auth/google',
            badges: ['19,99 €/mes'],
          },
          {
            id: 'tracking-envios',
            name: 'Seguimiento automático de envíos',
            description: 'IA responde a clientes con el estado de su pedido en tiempo real.',
            icon: Workflow,
            accentBg: 'bg-blue-100',
            accentIcon: 'text-blue-600',
            href: '/automatizaciones/tracking-envios',
            badges: ['29,99 €/mes'],
          },
          {
            id: 'etiquetas-envio',
            name: 'Generación de etiquetas de envío',
            description: 'Crea etiquetas a partir de pedidos entrantes en Shopify o WooCommerce.',
            icon: FileSpreadsheet,
            accentBg: 'bg-emerald-100',
            accentIcon: 'text-emerald-600',
            href: '/automatizaciones/etiquetas-envio',
            badges: ['34,99 €/mes'],
          },
          {
            id: 'chatbot-incidencias',
            name: 'Chatbot de incidencias logísticas',
            description: 'Gestiona devoluciones y entregas fallidas vía WhatsApp con IA.',
            icon: Zap,
            accentBg: 'bg-red-100',
            accentIcon: 'text-red-600',
            href: '/automatizaciones/chatbot-incidencias',
            badges: ['49,99 €/mes'],
          },
          {
            id: 'resumen-rutas',
            name: 'Resumen diario de rutas',
            description: 'Envía a cada conductor un resumen optimizado de entregas pendientes.',
            icon: BarChart,
            accentBg: 'bg-indigo-100',
            accentIcon: 'text-indigo-600',
            href: '/automatizaciones/resumen-rutas',
            badges: ['39,99 €/mes'],
          },
          {
            id: 'notificacion-entrega',
            name: 'Aviso de entrega cercana',
            description: 'Notifica al cliente cuando su pedido esté a pocos kilómetros.',
            icon: Bell,
            accentBg: 'bg-orange-100',
            accentIcon: 'text-orange-600',
            href: '/automatizaciones/notificacion-entrega',
            badges: ['29,99 €/mes'],
          },
          {
            id: 'ocr-albaranes',
            name: 'OCR para albaranes',
            description: 'Digitaliza automáticamente documentos de transporte y albaranes.',
            icon: FileSpreadsheet,
            accentBg: 'bg-gray-100',
            accentIcon: 'text-gray-600',
            href: '/automatizaciones/ocr-albaranes',
            badges: ['44,99 €/mes'],
          },
          {
            id: 'alerta-retrasos',
            name: 'Alerta de retrasos',
            description: 'Detecta retrasos y envía aviso inmediato al cliente afectado.',
            icon: Bell,
            accentBg: 'bg-yellow-100',
            accentIcon: 'text-yellow-600',
            href: '/automatizaciones/alerta-retrasos',
            badges: ['34,99 €/mes'],
          },
          {
            id: 'reporte-kpis-logistica',
            name: 'Reporte de KPIs logísticos',
            description: 'Genera informes semanales con métricas clave de entregas.',
            icon: BarChart,
            accentBg: 'bg-teal-100',
            accentIcon: 'text-teal-600',
            href: '/automatizaciones/reporte-kpis-logistica',
            badges: ['39,99 €/mes'],
          },
          {
            id: 'integracion-crm-logistica',
            name: 'Integración con CRM',
            description: 'Centraliza clientes y envíos en tu CRM automáticamente.',
            icon: Workflow,
            accentBg: 'bg-purple-100',
            accentIcon: 'text-purple-600',
            href: '/automatizaciones/integracion-crm-logistica',
            badges: ['59,99 €/mes'],
          },
          {
            id: 'facturacion-logistica',
            name: 'Facturación automática',
            description: 'Genera facturas a partir de entregas completadas.',
            icon: CreditCard,
            accentBg: 'bg-pink-100',
            accentIcon: 'text-pink-600',
            href: '/automatizaciones/facturacion-logistica',
            badges: ['49,99 €/mes'],
          },
        ],
      },
      {
        id: 'clinicas',
        title: 'Clínicas & Salud',
        highlight: false,
        tagline: 'Gestiona pacientes y tratamientos con automatizaciones listas para desplegar.',
        items: [
          {
            id: 'confirmacion-citas',
            name: 'Confirmación de citas',
            description: 'Permite confirmar o cancelar citas directamente por WhatsApp.',
            icon: Workflow,
            accentBg: 'bg-green-100',
            accentIcon: 'text-green-600',
            href: '/automatizaciones/confirmacion-citas',
            badges: ['24,99 €/mes'],
          },
          {
            id: 'recordatorios-citas',
            name: 'Recordatorio de citas',
            description: 'Envía un aviso 24h antes de la cita al paciente.',
            icon: Bell,
            accentBg: 'bg-yellow-100',
            accentIcon: 'text-yellow-600',
            href: '/automatizaciones/recordatorios-citas',
            badges: ['19,99 €/mes'],
          },
          {
            id: 'encuestas-satisfaccion',
            name: 'Encuestas post-consulta',
            description: 'Recoge feedback automático tras las consultas.',
            icon: Megaphone,
            accentBg: 'bg-pink-100',
            accentIcon: 'text-pink-600',
            href: '/automatizaciones/encuestas-satisfaccion',
            badges: ['14,99 €/mes'],
          },
          {
            id: 'informes-medicos',
            name: 'Informes médicos automáticos',
            description: 'Convierte dictados médicos en informes formales.',
            icon: FileSpreadsheet,
            accentBg: 'bg-gray-100',
            accentIcon: 'text-gray-600',
            href: '/automatizaciones/informes-medicos',
            badges: ['54,99 €/mes'],
          },
          {
            id: 'alerta-stock',
            name: 'Alerta de stock sanitario',
            description: 'Detecta bajo stock en medicamentos y avisa automáticamente.',
            icon: ShoppingCart,
            accentBg: 'bg-red-100',
            accentIcon: 'text-red-600',
            href: '/automatizaciones/alerta-stock',
            badges: ['24,99 €/mes'],
          },
          {
            id: 'facturacion-clinicas',
            name: 'Facturación clínica',
            description: 'Genera facturas de manera automática tras las consultas.',
            icon: CreditCard,
            accentBg: 'bg-blue-100',
            accentIcon: 'text-blue-600',
            href: '/automatizaciones/facturacion-clinicas',
            badges: ['44,99 €/mes'],
          },
          {
            id: 'historiales-pacientes',
            name: 'Actualización de historiales',
            description: 'IA rellena automáticamente historiales de pacientes.',
            icon: FileSpreadsheet,
            accentBg: 'bg-indigo-100',
            accentIcon: 'text-indigo-600',
            href: '/automatizaciones/historiales-pacientes',
            badges: ['59,99 €/mes'],
          },
          {
            id: 'seguimiento-tratamientos',
            name: 'Seguimiento de tratamientos',
            description: 'Envía recordatorios personalizados a pacientes según su tratamiento.',
            icon: Mail,
            accentBg: 'bg-emerald-100',
            accentIcon: 'text-emerald-600',
            href: '/automatizaciones/seguimiento-tratamientos',
            badges: ['34,99 €/mes'],
          },
          {
            id: 'crm-pacientes',
            name: 'Integración CRM de pacientes',
            description: 'Conecta pacientes y consultas con tu CRM médico.',
            icon: Workflow,
            accentBg: 'bg-purple-100',
            accentIcon: 'text-purple-600',
            href: '/automatizaciones/crm-pacientes',
            badges: ['64,99 €/mes'],
          },
          {
            id: 'marketing-clinico',
            name: 'Campañas de marketing clínicas',
            description: 'Envía recordatorios y promociones automáticas a pacientes.',
            icon: Megaphone,
            accentBg: 'bg-orange-100',
            accentIcon: 'text-orange-600',
            href: '/automatizaciones/marketing-clinico',
            badges: ['39,99 €/mes'],
          },
        ],
      },
      {
        id: 'personal',
        title: 'Productividad personal',
        highlight: false,
        tagline: 'Haz más con menos esfuerzo en tu día a día.',
        items: [
          {
            id: 'resumen-emails',
            name: 'Gestor de correos con IA',
            description: 'Clasifica y resume automáticamente tus correos.',
            icon: Mail,
            accentBg: 'bg-purple-100',
            accentIcon: 'text-purple-600',
            href: '/automatizaciones/resumen-emails',
            badges: ['14,99 €/mes'],
          },
          {
            id: 'recordatorios-inteligentes',
            name: 'Recordatorios inteligentes',
            description: 'Convierte correos y WhatsApps en eventos de calendario.',
            icon: Workflow,
            accentBg: 'bg-emerald-100',
            accentIcon: 'text-emerald-600',
            href: '/automatizaciones/recordatorios-inteligentes',
            badges: ['19,99 €/mes'],
          },
          {
            id: 'finanzas-personales',
            name: 'Gestor financiero personal',
            description: 'Analiza movimientos y genera reportes mensuales.',
            icon: BarChart,
            accentBg: 'bg-blue-100',
            accentIcon: 'text-blue-600',
            href: '/automatizaciones/finanzas-personales',
            badges: ['24,99 €/mes'],
          },
          {
            id: 'planificador-viajes',
            name: 'Planificador de viajes',
            description: 'Organiza vuelos, hoteles y actividades con IA.',
            icon: Zap,
            accentBg: 'bg-cyan-100',
            accentIcon: 'text-cyan-600',
            href: '/automatizaciones/planificador-viajes',
            badges: ['34,99 €/mes'],
          },
          {
            id: 'whatsapp-asistente',
            name: 'Asistente personal en WhatsApp',
            description: 'Responde automáticamente mensajes básicos mientras estás ocupado.',
            icon: Workflow,
            accentBg: 'bg-teal-100',
            accentIcon: 'text-teal-600',
            href: '/automatizaciones/whatsapp-asistente',
            badges: ['19,99 €/mes'],
          },
          {
            id: 'diario-ia',
            name: 'Diario personal con IA',
            description: 'Resume tu día automáticamente a partir de tus mensajes y correos.',
            icon: FileSpreadsheet,
            accentBg: 'bg-pink-100',
            accentIcon: 'text-pink-600',
            href: '/automatizaciones/diario-ia',
            badges: ['14,99 €/mes'],
          },
          {
            id: 'resumen-noticias',
            name: 'Resumen diario de noticias',
            description: 'Recibe un email diario con las noticias más relevantes para ti.',
            icon: Megaphone,
            accentBg: 'bg-yellow-100',
            accentIcon: 'text-yellow-600',
            href: '/automatizaciones/resumen-noticias',
            badges: ['9,99 €/mes'],
          },
          {
            id: 'agenda-familiar',
            name: 'Agenda compartida familiar',
            description: 'Sincroniza recordatorios y eventos con toda tu familia.',
            icon: Mail,
            accentBg: 'bg-green-100',
            accentIcon: 'text-green-600',
            href: '/automatizaciones/agenda-familiar',
            badges: ['14,99 €/mes'],
          },
          {
            id: 'gestion-tareas',
            name: 'Gestión de tareas con IA',
            description: 'Convierte emails en tareas con deadlines automáticos.',
            icon: Workflow,
            accentBg: 'bg-gray-100',
            accentIcon: 'text-gray-600',
            href: '/automatizaciones/gestion-tareas',
            badges: ['19,99 €/mes'],
          },
        ],
      },
    ],
    []
  )

  const filteredGroups = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return groups

    return groups
      .map((group) => {
        const matchesGroupTitle =
          group.title.toLowerCase().includes(q) ||
          group.tagline?.toLowerCase().includes(q)

        const matchedItems = group.items.filter((item) => {
          const nameMatch = item.name.toLowerCase().includes(q)
          const descriptionMatch = item.description.toLowerCase().includes(q)
          const badgesMatch = item.badges?.some((badge) => badge.toLowerCase().includes(q))
          return nameMatch || descriptionMatch || badgesMatch
        })

        return {
          ...group,
          items: matchesGroupTitle && matchedItems.length === 0 ? group.items : matchedItems,
        }
      })
      .filter((group) => group.items.length > 0)
  }, [groups, query])

  const hasMatches = filteredGroups.length > 0
  const groupsToRender = hasMatches ? filteredGroups : groups
  const registerUrl = 'https://app-procesia.vercel.app/registro'

  const AutomationCard = ({ automation, primaryLabel, primaryHref, className }) => {
    const Icon = automation.icon
    return (
      <article
        className={`bg-white rounded-2xl p-6 shadow-sm border hover:shadow-md transition flex flex-col ${className ?? ''}`}
      >
        <div className="flex items-start gap-4">
          <div className={`shrink-0 w-11 h-11 rounded-xl ${automation.accentBg} flex items-center justify-center`}>
            <Icon className={`h-5 w-5 ${automation.accentIcon}`} />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900">{automation.name}</h3>
            <p className="text-gray-600 text-sm mt-1">{automation.description}</p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {automation.badges?.map((badge) => (
            <span
              key={badge}
              className="inline-flex items-center rounded-full border px-2.5 py-1 text-xs text-gray-700"
            >
              {badge}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between">
          <a
            href={primaryHref ?? registerUrl}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-black text-white px-4 py-2.5 text-sm font-medium shadow hover:opacity-90 transition"
          >
            <Zap className="h-4 w-4" /> {primaryLabel ?? 'Regístrate para empezar'}
          </a>

          <a
            href={automation.href}
            className="text-sm text-gray-700 underline-offset-4 hover:underline"
          >
            Detalles
          </a>
        </div>
      </article>
    )
  }

  return (
    <section className="bg-[#FAF9F6] py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Tienda de Automatizaciones
            </h2>
            <p className="text-gray-600 mt-1">
              Explora nuestras plantillas y empieza a automatizar en minutos.
            </p>
          </div>

          <div className="relative max-w-md w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar automatizaciones..."
              className="w-full rounded-xl border bg-white py-2.5 pl-10 pr-3 text-sm outline-none focus:ring-2 focus:ring-black/10"
            />
          </div>
        </div>

        {!hasMatches && query && (
          <div className="bg-white border border-dashed border-gray-200 text-center py-10 rounded-3xl text-gray-500">
            No encontramos automatizaciones con “{query}”. Prueba con otro término o explora los grupos disponibles.
          </div>
        )}

        <div className="space-y-12">
          {groupsToRender.map((group) => (
            <div
              key={group.id}
              className={group.highlight ? 'sm:bg-white sm:shadow-sm sm:rounded-3xl sm:p-6 sm:border sm:border-lime-200' : ''}
            >
              <div
                className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 ${
                  group.highlight ? 'sm:mb-6 mb-4' : 'mb-4'
                }`}
              >
                <div>
                  <div className="flex items-center gap-3">
                    {group.highlight && (
                      <span className="inline-flex items-center rounded-full bg-lime-100 text-lime-700 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
                        Foco Agrónomo
                      </span>
                    )}
                    <h3 className="text-xl font-semibold text-gray-900">{group.title}</h3>
                  </div>
                  {group.tagline && (
                    <p className="text-gray-600 text-sm sm:text-base mt-2 sm:mt-1">
                      {group.tagline}
                    </p>
                  )}
                </div>

                <a
                  href={registerUrl}
                  className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-black text-white px-4 py-2.5 text-sm font-medium shadow hover:opacity-90 transition"
                >
                  <Zap className="h-4 w-4" /> Conectar con nuestro equipo
                </a>
              </div>

              <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.items.map((item) => (
                  <AutomationCard key={item.id} automation={item} />
                ))}
              </div>

              <div className="sm:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth py-2 -mx-4 px-4">
                {group.items.map((item) => (
                  <div key={item.id} className="snap-center shrink-0 min-w-[85%]">
                    <AutomationCard
                      automation={item}
                      primaryLabel="Ver más"
                      primaryHref={item.href}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
