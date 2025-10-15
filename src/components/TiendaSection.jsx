'use client'

import { useMemo, useState } from 'react'
import {
  Workflow,
  BarChart,
  Zap,
  Search,
  CreditCard,
  FileSpreadsheet,
  Boxes,
  ShieldCheck,
  Gauge,
  ClipboardCheck,
} from 'lucide-react'

export default function TiendaSection() {
  const [query, setQuery] = useState('')

  const groups = useMemo(
    () => [
      {
        id: 'estrategia',
        title: 'Estrategia y gobierno',
        highlight: true,
        tagline:
          'Definimos hoja de ruta, modelo operativo y business case para automatizar con tracción ejecutiva.',
        items: [
          {
            id: 'roadmap-automatizacion',
            name: 'Roadmap de automatización corporativa',
            description:
              'Assessment 360°, business case y backlog priorizado listos para presentar a dirección.',
            icon: Workflow,
            accentBg: 'bg-indigo-100',
            accentIcon: 'text-indigo-700',
            href: '/automatizaciones/control-turnos-campo',
            badges: ['Assessment 360°', 'Business case ejecutivo'],
          },
          {
            id: 'oficina-automatizacion',
            name: 'Oficina de automatización (PMO)',
            description:
              'Gobernanza, portfolio y ritos de seguimiento para ejecutar automatizaciones de forma sostenible.',
            icon: Gauge,
            accentBg: 'bg-blue-100',
            accentIcon: 'text-blue-700',
            href: 'https://wa.me/34655689827',
            badges: ['Portfolio board', 'Gestión del cambio'],
          },
          {
            id: 'gobierno-datos',
            name: 'Gobierno de datos orientado a procesos',
            description:
              'Diseñamos modelos de datos, indicadores y accountability para impulsar decisiones basadas en evidencia.',
            icon: BarChart,
            accentBg: 'bg-emerald-100',
            accentIcon: 'text-emerald-700',
            href: 'https://wa.me/34655689827',
            badges: ['Data governance', 'KPIs operativos'],
          },
        ],
      },
      {
        id: 'operaciones',
        title: 'Operaciones y supply chain',
        highlight: false,
        tagline: 'Optimizamos flujos críticos y conectamos negocio, logística y finanzas en una misma capa.',
        items: [
          {
            id: 'procure-to-pay',
            name: 'Procure-to-pay automatizado',
            description:
              'Automatizamos requisición, aprobación y compra con trazabilidad y control financiero en tiempo real.',
            icon: CreditCard,
            accentBg: 'bg-teal-100',
            accentIcon: 'text-teal-700',
            href: '/automatizaciones/pedidos-proveedores-agro',
            badges: ['Aprobaciones inteligentes', 'Integración ERP'],
          },
          {
            id: 'inventarios-criticos',
            name: 'Gobierno de inventarios críticos',
            description:
              'Modelos de cobertura, alertas predictivas y reporting unificado para tomar decisiones de reaprovisionamiento.',
            icon: Boxes,
            accentBg: 'bg-amber-100',
            accentIcon: 'text-amber-700',
            href: '/automatizaciones/stock-insumos-agro',
            badges: ['Cobertura dinámica', 'Alertas predictivas'],
          },
          {
            id: 'captura-documental',
            name: 'Captura inteligente de documentación',
            description:
              'Digitalizamos contratos, albaranes y formularios con validaciones automáticas y envío a tus sistemas.',
            icon: FileSpreadsheet,
            accentBg: 'bg-purple-100',
            accentIcon: 'text-purple-600',
            href: '/automatizaciones/albaranes-campo',
            badges: ['Reconocimiento automático', 'Integración documental'],
          },
        ],
      },
      {
        id: 'compliance',
        title: 'Riesgo y compliance',
        highlight: false,
        tagline: 'Automatiza controles, evidencias y reporting regulatorio en cada proceso clave.',
        items: [
          {
            id: 'compliance-operativo',
            name: 'Compliance automatizado',
            description:
              'Diseñamos matrices de riesgo, controles y alertas para asegurar cumplimiento continuo.',
            icon: ShieldCheck,
            accentBg: 'bg-rose-100',
            accentIcon: 'text-rose-600',
            href: '/automatizaciones/tratamientos-fitosanitarios',
            badges: ['Matriz de riesgos', 'Alertas regulatorias'],
          },
          {
            id: 'auditoria-continua',
            name: 'Auditoría continua y SLA',
            description:
              'Automatizamos captura de evidencias, seguimiento de SLA y reportes ejecutivos para auditoría.',
            icon: ClipboardCheck,
            accentBg: 'bg-slate-100',
            accentIcon: 'text-slate-700',
            href: 'https://wa.me/34655689827',
            badges: ['Evidencia automática', 'Paneles de SLA'],
          },
          {
            id: 'reporting-impacto',
            name: 'Reporting de impacto y ESG',
            description:
              'Centralizamos indicadores, certificaciones y planes de acción para clientes y reguladores.',
            icon: BarChart,
            accentBg: 'bg-gray-100',
            accentIcon: 'text-gray-700',
            href: 'https://wa.me/34655689827',
            badges: ['KPIs ESG', 'Planes de acción'],
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
  const registerUrl = 'https://wa.me/34655689827'

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
            <Zap className="h-4 w-4" /> {primaryLabel ?? 'Agendar sesión'}
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
              Catálogo de servicios estratégicos
            </h2>
            <p className="text-gray-600 mt-1">
              Descubre módulos de consultoría y automatización adaptados a los retos de tu organización.
            </p>
          </div>

          <div className="relative max-w-md w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar servicios..."
              className="w-full rounded-xl border bg-white py-2.5 pl-10 pr-3 text-sm outline-none focus:ring-2 focus:ring-black/10"
            />
          </div>
        </div>

        {!hasMatches && query && (
          <div className="bg-white border border-dashed border-gray-200 text-center py-10 rounded-3xl text-gray-500">
            No encontramos servicios con “{query}”. Prueba con otro término o explora las categorías disponibles.
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
                        Foco estratégico
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
                  <Zap className="h-4 w-4" /> Hablar con dirección de proyecto
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
                      primaryLabel="Explorar servicio"
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
