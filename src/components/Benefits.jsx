import { FaClock, FaCheckCircle, FaChartLine, FaLayerGroup } from "react-icons/fa";
import { motion } from "framer-motion";

const benefits = [
  { title: "Ahorra tiempo", description: "Automatiza tareas repetitivas y libera horas cada semana.", icon: <FaClock className="w-8 h-8 text-blue-600" /> },
  { title: "Reduce errores", description: "Confía en las automatizaciones para encargarse de los detalles.", icon: <FaCheckCircle className="w-8 h-8 text-green-600" /> },
  { title: "Escala sin esfuerzo", description: "Gestiona cientos de flujos con la misma facilidad que uno.", icon: <FaChartLine className="w-8 h-8 text-purple-600" /> },
  { title: "Centraliza todo", description: "Un solo panel para manejar tus automatizaciones y conexiones.", icon: <FaLayerGroup className="w-8 h-8 text-pink-600" /> },
];

export default function Benefits() {
  return (
    <section
      className="relative my-0 md:py-24 py-16 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('/texturewhite.png')" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
          Beneficios principales
        </h2>
        <p className="mt-4 text-base sm:text-lg text-gray-700/80 max-w-2xl mx-auto">
          Todo lo que necesitas para automatizar tus flujos de trabajo con confianza.
        </p>
      </div>

      {/* GRID full-bleed */}
      <div className="mt-8">
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
            {benefits.map((b, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1.1 }}
                transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
                viewport={{ once: true }}
                className="aspect-square flex flex-col items-center justify-center text-center select-none"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-white/20 backdrop-blur-[1px] mb-4">
                  {b.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">{b.title}</h3>
                <p className="mt-2 text-gray-700/80 text-sm md:text-base max-w-xs px-6">{b.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
