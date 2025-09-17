import { SiGmail, SiWhatsapp, SiGooglecalendar, SiSlack, SiGoogleanalytics, SiTodoist } from "react-icons/si";
import { motion } from "framer-motion";

const automations = [
  {
    title: "Recordatorios en Gmail",
    description: "Envía recordatorios automáticos por correo electrónico.",
    icon: <SiGmail className="w-8 h-8 text-red-600" />,
    color: "bg-red-100"
  },
  {
    title: "Alertas en WhatsApp",
    description: "Recibe notificaciones directas en WhatsApp.",
    icon: <SiWhatsapp className="w-8 h-8 text-green-600" />,
    color: "bg-green-100"
  },
  {
    title: "Eventos en Calendar",
    description: "Crea y gestiona eventos automáticamente en Google Calendar.",
    icon: <SiGooglecalendar className="w-8 h-8 text-blue-600" />,
    color: "bg-blue-100"
  },
  {
    title: "Notificaciones en Slack",
    description: "Automatiza alertas en tus canales de Slack.",
    icon: <SiSlack className="w-8 h-8 text-purple-600" />,
    color: "bg-purple-100"
  },
  {
    title: "Reportes automáticos",
    description: "Recibe reportes semanales de actividad y métricas.",
    icon: <SiGoogleanalytics className="w-8 h-8 text-pink-600" />,
    color: "bg-pink-100"
  },
  {
    title: "Tareas recurrentes",
    description: "Programa recordatorios automáticos de tareas repetitivas.",
    icon: <SiTodoist className="w-8 h-8 text-yellow-600" />,
    color: "bg-yellow-100"
  },
];

export default function Automations() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
          Automatizaciones disponibles
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Conecta tus herramientas favoritas y automatiza procesos clave de tu día a día.
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
