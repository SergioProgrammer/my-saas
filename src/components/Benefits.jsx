import { FaProjectDiagram, FaShieldAlt, FaChartLine, FaUsersCog } from "react-icons/fa";
import { motion } from "framer-motion";

const benefits = [
  { title: "Visión integral de procesos", description: "Obtén un mapa vivo de tus operaciones y los indicadores clave que necesitan priorización.", icon: <FaProjectDiagram className="w-8 h-8 text-indigo-600" /> },
  { title: "Riesgos controlados", description: "Diseñamos automatizaciones con controles y cumplimiento embebido para evitar cuellos de botella y reprocesos.", icon: <FaShieldAlt className="w-8 h-8 text-emerald-600" /> },
  { title: "Impacto financiero medible", description: "Construimos casos de negocio con ahorros, ingresos y productividad cuantificables desde el día uno.", icon: <FaChartLine className="w-8 h-8 text-blue-600" /> },
  { title: "Equipos alineados", description: "Activamos gobernanza y rituales de seguimiento para que negocio, TI y operaciones avancen al mismo ritmo.", icon: <FaUsersCog className="w-8 h-8 text-orange-500" /> },
];

export default function Benefits() {
  return (
    <section
      className="relative my-0 md:py-24 py-16 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('/texturewhite.png')" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
          Beneficios para tu organización
        </h2>
        <p className="mt-4 text-base sm:text-lg text-gray-700/80 max-w-2xl mx-auto">
          Diseñamos programas de consultoría y automatización que combinan estrategia, datos y cambio cultural para acelerar tus resultados.
        </p>
      </div>

      {/* Carrusel mobile */}
      <div className="mt-10 md:hidden px-6">
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4" role="region" aria-label="Beneficios destacables">
          {benefits.map((b, index) => (
            <motion.div
              key={`benefit-mobile-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
              className="snap-center shrink-0 min-w-[82%] max-w-[82%] bg-white/80 backdrop-blur rounded-3xl border border-gray-100 shadow-sm px-8 py-10 text-center"
            >
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-2xl bg-white/90 shadow mb-5">
                {b.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{b.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{b.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* GRID full-bleed desktop */}
      <div className="hidden md:block mt-16">
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
            {benefits.map((b, index) => (
              <motion.div
                key={`benefit-desktop-${index}`}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
                viewport={{ once: true }}
                className="aspect-square flex flex-col items-center justify-center text-center px-10"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-white/90 shadow mb-5">
                  {b.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{b.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-gray-600">{b.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
