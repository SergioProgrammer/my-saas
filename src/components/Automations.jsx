import { FiGitMerge, FiTrendingUp, FiUsers, FiLayers, FiCheckCircle, FiServer } from "react-icons/fi";
import { motion } from "framer-motion";

const automations = [
  {
    title: "Orquestación de procesos",
    description: "Modelamos journeys end-to-end y conectamos sistemas para reducir tiempos de ciclo críticos.",
    icon: <FiGitMerge className="w-8 h-8 text-indigo-600" />,
    color: "bg-indigo-50"
  },
  {
    title: "Procure-to-pay inteligente",
    description: "Automatizamos requisición, aprobación y conciliación con reglas dinámicas y KPIs financieros.",
    icon: <FiTrendingUp className="w-8 h-8 text-emerald-600" />,
    color: "bg-emerald-50"
  },
  {
    title: "Customer onboarding",
    description: "Sincronizamos equipos comerciales, operaciones y soporte con automatizaciones omnicanal.",
    icon: <FiUsers className="w-8 h-8 text-blue-500" />,
    color: "bg-blue-50"
  },
  {
    title: "Data governance operativo",
    description: "Definimos modelos de datos, controles de calidad y tableros para tomar decisiones confiables.",
    icon: <FiLayers className="w-8 h-8 text-purple-500" />,
    color: "bg-purple-50"
  },
  {
    title: "Compliance automatizado",
    description: "Integración de controles, evidencias y reporting continuo para auditar cada proceso.",
    icon: <FiCheckCircle className="w-8 h-8 text-amber-600" />,
    color: "bg-amber-50"
  },
  {
    title: "Integración de plataformas",
    description: "Conectamos ERP, CRM, low-code y RPA para mantener datos coherentes y procesos sostenibles.",
    icon: <FiServer className="w-8 h-8 text-slate-600" />,
    color: "bg-slate-100"
  },
];

export default function Automations() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
          Capacidades listas para automatizar tus procesos
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Selecciona bloques de consultoría y automatización que aceleran la transformación de tus operaciones sin improvisaciones.
        </p>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {automations.map((auto, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="p-10 bg-[#faf9f6] rounded-3xl shadow-xl hover:shadow-2xl transition text-left flex flex-col items-start"
            >
              <div className={`w-16 h-16 flex items-center justify-center rounded-2xl ${auto.color} mb-6`}>
                {auto.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">{auto.title}</h3>
              <p className="mt-3 text-gray-600 text-lg">{auto.description}</p>
            </motion.div>

          ))}
        </div>
      </div>
    </section>
  );
}
