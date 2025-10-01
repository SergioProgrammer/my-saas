'use client'

import { useMemo, useState } from 'react'
import {
  Workflow,
  BarChart,
  Zap,
  Search,
  CreditCard,
  FileSpreadsheet,
  Sprout,
  Boxes,
  QrCode,
  Thermometer,
  ShieldCheck,
  Droplet,
  FlaskConical,
  Gauge,
} from 'lucide-react'

export default function TiendaSection() {
  const [query, setQuery] = useState('')

  const groups = useMemo(
    () => [
      {
        id: 'campo',
        title: 'Operación en campo',
        highlight: true,
        tagline:
          'Coordina personal, maquinaria e insumos con flujos listos para el equipo agrónomo.',
        items: [
          {
            id: 'control-turnos-campo',
            name: 'Control de turnos en campo',
            description:
              'Planifica cuadrillas, sincroniza labores por parcela y registra avances desde móvil o tablet.',
            icon: Workflow,
            accentBg: 'bg-lime-100',
            accentIcon: 'text-lime-700',
            href: '/automatizaciones/control-turnos-campo',
            badges: ['Incluye checklists móviles'],
          },
          {
            id: 'stock-insumos-agro',
            name: 'Stock inteligente de insumos',
            description:
              'Controla semillas, fertilizantes y fitosanitarios con lotes, alertas de carencia y reposición automática.',
            icon: Boxes,
            accentBg: 'bg-emerald-100',
            accentIcon: 'text-emerald-700',
            href: '/automatizaciones/stock-insumos-agro',
            badges: ['Lectura por código de barras'],
          },
          {
            id: 'pedidos-proveedores-agro',
            name: 'Pedidos automatizados a proveedores',
            description:
              'Genera pedidos cuando el stock baja de mínimos y envía confirmaciones automáticas por email o WhatsApp.',
            icon: CreditCard,
            accentBg: 'bg-teal-100',
            accentIcon: 'text-teal-700',
            href: '/automatizaciones/pedidos-proveedores-agro',
            badges: ['Aprobaciones multi-nivel'],
          },
          {
            id: 'albaranes-campo',
            name: 'Albaranes digitales de campo',
            description:
              'Digitaliza entradas y salidas con OCR entrenado para cooperativas agrícolas y firma desde el móvil.',
            icon: FileSpreadsheet,
            accentBg: 'bg-green-100',
            accentIcon: 'text-green-600',
            href: '/automatizaciones/albaranes-campo',
            badges: ['Integración con ERP agrario'],
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
            badges: ['Carencias y límites MRL automáticos'],
          },
        ],
      },
      {
        id: 'postcosecha',
        title: 'Postcosecha y comercialización',
        highlight: false,
        tagline: 'Une almacenes, certificaciones y logística para mantener la trazabilidad hasta el cliente.',
        items: [
          {
            id: 'recepcion-almacen',
            name: 'Recepción inteligente en almacén',
            description: 'Registra lotes, calibres y temperaturas al descargar camiones con evidencias fotográficas automáticas.',
            icon: Boxes,
            accentBg: 'bg-orange-100',
            accentIcon: 'text-orange-700',
            href: 'https://cal.com/procesia/postcosecha',
            badges: ['Sensores bluetooth + QR'],
          },
          {
            id: 'calidad-lote',
            name: 'Control de calidad por lote',
            description: 'Genera fichas de calidad, analiza calibres y comparte incidencias con tu cadena comercial.',
            icon: Gauge,
            accentBg: 'bg-amber-100',
            accentIcon: 'text-amber-700',
            href: 'https://cal.com/procesia/postcosecha',
            badges: ['Dashboards en tiempo real'],
          },
          {
            id: 'etiquetas-qr',
            name: 'Etiquetas QR de trazabilidad',
            description: 'Imprime etiquetas por lote con QR dinámico para clientes, certificadoras y consumo responsable.',
            icon: QrCode,
            accentBg: 'bg-indigo-100',
            accentIcon: 'text-indigo-600',
            href: 'https://cal.com/procesia/postcosecha',
            badges: ['Compatible GS1 / EAN'],
          },
          {
            id: 'logistica-frio',
            name: 'Logística de frío monitorizada',
            description: 'Conecta sondas de temperatura y GPS para avisar de desviaciones durante el transporte.',
            icon: Thermometer,
            accentBg: 'bg-sky-100',
            accentIcon: 'text-sky-600',
            href: 'https://cal.com/procesia/postcosecha',
            badges: ['Alertas en minutos'],
          },
          {
            id: 'conciliacion-ventas',
            name: 'Conciliación con comercializadoras',
            description: 'Cruza kilos vendidos vs. kilos cosechados y estima liquidaciones por productor automáticamente.',
            icon: BarChart,
            accentBg: 'bg-teal-100',
            accentIcon: 'text-teal-700',
            href: 'https://cal.com/procesia/postcosecha',
            badges: ['Exportación a Excel y Power BI'],
          },
        ],
      },
      {
        id: 'sostenibilidad',
        title: 'Sostenibilidad y reporting',
        highlight: false,
        tagline: 'Comparte el impacto real de tu producción con clientes, certificadoras y entidades financieras.',
        items: [
          {
            id: 'huella-hidrica',
            name: 'Huella hídrica y energética',
            description: 'Calcula consumos por cultivo, superficie y campaña usando datos de riego y maquinaria.',
            icon: Droplet,
            accentBg: 'bg-blue-100',
            accentIcon: 'text-blue-600',
            href: 'https://cal.com/procesia/sostenibilidad',
            badges: ['KPIs actualizados diariamente'],
          },
          {
            id: 'reportes-esg',
            name: 'Reportes ESG agroexportación',
            description: 'Genera entregables para supermercados y bancos con indicadores de sostenibilidad verificados.',
            icon: FileSpreadsheet,
            accentBg: 'bg-purple-100',
            accentIcon: 'text-purple-600',
            href: 'https://cal.com/procesia/sostenibilidad',
            badges: ['Plantillas Global Reporting'],
          },
          {
            id: 'alertas-normativas',
            name: 'Alertas normativas fitosanitarias',
            description: 'Recibe avisos cuando un producto quede restringido o cambien los límites de residuos.',
            icon: ShieldCheck,
            accentBg: 'bg-rose-100',
            accentIcon: 'text-rose-600',
            href: 'https://cal.com/procesia/sostenibilidad',
            badges: ['Base de datos actualizada semanalmente'],
          },
          {
            id: 'portal-certificadoras',
            name: 'Portal para certificadoras',
            description: 'Comparte evidencias, registros y planes de acción con auditores externos sin correos interminables.',
            icon: Zap,
            accentBg: 'bg-gray-100',
            accentIcon: 'text-gray-700',
            href: 'https://cal.com/procesia/sostenibilidad',
            badges: ['Control de permisos granulares'],
          },
          {
            id: 'parcelas-experimentales',
            name: 'I+D en parcelas experimentales',
            description: 'Automatiza ensayos de variedades con captura de datos y seguimiento visual en un mismo dashboard.',
            icon: FlaskConical,
            accentBg: 'bg-green-100',
            accentIcon: 'text-green-700',
            href: 'https://cal.com/procesia/sostenibilidad',
            badges: ['Integración con cuaderno digital'],
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
              Tienda de Automatizaciones Agrícolas
            </h2>
            <p className="text-gray-600 mt-1">
              Descubre plantillas para digitalizar campañas, postcosecha y reporting sostenible en minutos.
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
                  <Zap className="h-4 w-4" /> Hablar con un agrónomo
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
