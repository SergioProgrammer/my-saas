import { motion } from "framer-motion";
import { FaEnvelope, FaCalendarAlt, FaWhatsapp, FaCrown, FaBuilding, FaRobot } from "react-icons/fa";

const plans = [
  {
    title: "Demo 1 mes",
    price: "Gratis",
    description: "Prueba la plataforma durante 30 días sin coste.",
    features: ["✨ 1 automatización de prueba", " ✔ Acceso completo al panel", "✔ Soporte básico"],
    icon: <FaCrown className="w-8 h-8 text-yellow-500" />,
    cta: "Empieza gratis",
  },
  {
    title: "Plan ChatBot IA",
    price: "26,99 €/mes IVA incl.",
    description: "Ideal si necesitas un chatbot inteligente en tu web.",
    features: [" ✔Agendar citas en Calendar", " ✔Responde dudas automáticamente"],
    icon: <FaRobot className="w-8 h-8 text-purple-500" />,
    cta: "Elegir plan",
  },
  {
    title: "Plan 1 automatización",
    price: "26,99 €/mes IVA incl.",
    description: "Perfecto si solo necesitas un flujo sencillo.",
    features: [" ✔Automatización de correos", " ✔Solo citas en Calendar", "✔ Notificaciones en WhatsApp"],
    icon: <FaEnvelope className="w-8 h-8 text-red-500" />,
    cta: "Elegir plan",
  },
  {
    title: "Plan 2 automatizaciones",
    price: "34,99 €/mes IVA incl.",
    description: "Conecta dos de tus apps clave.",
    features: [
      "✔ Calendar + recordatorios en correo",
      "✔ WhatsApp + Gmail",
      "⚡ Soporte prioritario",
    ],
    icon: <FaCalendarAlt className="w-8 h-8 text-blue-500" />,
    cta: "Elegir plan",
  },
  {
    title: "Premium (3 automatizaciones)",
    price: "65,99 €/mes IVA incl.",
    description: "Máxima flexibilidad con 3 automatizaciones.",
    features: [
      "✔ Gmail + Calendar + WhatsApp",
      "✔ Reportes automáticos incluidos",
      "✔ Soporte premium",
    ],
    icon: <FaWhatsapp className="w-8 h-8 text-green-500" />,
    cta: "Elegir plan",
  },
  {
    title: "Personalizada",
    price: "Desde 699€ + mensualidad",
    description: "Automatizaciones avanzadas para tu negocio.",
    features: ["✔ Análisis y diseño a medida", "✔ Automatizaciones personalizadas", "✔ Soporte y formación dedicada"],
    icon: <FaBuilding className="w-8 h-8 text-gray-700" />,
    cta: "Pedir presupuesto",
  },
];

export default function Pricing() {
  return (
    <section className="bg-[#faf9f6] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
          Planes y precios
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Elige el plan que mejor se adapte a tus necesidades de automatización.
        </p>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex flex-col justify-between bg-white rounded-3xl shadow-lg hover:shadow-2xl transition p-10 text-left"
            >
              <div>
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gray-100 mb-6">
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">{plan.title}</h3>
                <p className="mt-2 text-xl font-bold text-gray-800">{plan.price}</p>
                <p className="mt-3 text-gray-600">{plan.description}</p>
                <ul className="mt-6 space-y-2 text-gray-700">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8">
                <a
                  href="/register"
                  className="block w-full px-6 py-3 text-center bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition"
                >
                  {plan.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
