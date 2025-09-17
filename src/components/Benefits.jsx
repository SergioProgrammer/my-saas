import { FaClock, FaCheckCircle, FaChartLine, FaLayerGroup } from "react-icons/fa";
import { motion } from "framer-motion";

const benefits = [
  {
    title: "Ahorra tiempo",
    description: "Automatiza tareas repetitivas y libera horas cada semana.",
    icon: <FaClock className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "Reduce errores",
    description: "Confía en las automatizaciones para encargarse de los detalles.",
    icon: <FaCheckCircle className="w-8 h-8 text-green-600" />,
  },
  {
    title: "Escala sin esfuerzo",
    description: "Gestiona cientos de flujos con la misma facilidad que uno.",
    icon: <FaChartLine className="w-8 h-8 text-purple-600" />,
  },
  {
    title: "Centraliza todo",
    description: "Un solo panel para manejar tus automatizaciones y conexiones.",
    icon: <FaLayerGroup className="w-8 h-8 text-pink-600" />,
  },
];

export default function Benefits() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-6xl sm:text-5xl font-bold tracking-tight text-gray-900">
          Beneficios principales
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Todo lo que necesitas para automatizar tus flujos de trabajo con confianza.
        </p>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-10 bg-[#faf9f6] rounded-3xl shadow-md hover:shadow-xl transition"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-blue-50 mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{benefit.title}</h3>
              <p className="mt-3 text-gray-600 text-base">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
