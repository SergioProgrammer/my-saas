import { FaTractor, FaSatelliteDish, FaSeedling } from "react-icons/fa";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Configura tu explotación",
    description: "Importa parcelas, lotes y plan de cultivos para crear el gemelo digital del campo.",
    icon: <FaTractor className="w-8 h-8 text-green-700" />,
    bg: "bg-green-50",
  },
  {
    title: "Sincroniza datos",
    description: "Integra cuadernos, sensores, estaciones meteo y compras para trazabilidad automática.",
    icon: <FaSatelliteDish className="w-8 h-8 text-blue-700" />,
    bg: "bg-blue-50",
  },
  {
    title: "Activa inteligencia",
    description: "La IA propone labores, genera reportes y comparte evidencias listas para auditorías.",
    icon: <FaSeedling className="w-8 h-8 text-lime-600" />,
    bg: "bg-lime-50",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#faf9f6] py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
          Cómo funciona
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Digitaliza la operación agrícola paso a paso y mantén a tu equipo alineado desde un único panel.
        </p>

        <div className="mt-20 relative">
          {/* Línea animada */}
          <motion.div
            className="absolute left-8 top-0 h-full border-l-2 border-blue-200"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            viewport={{ once: true }}
            style={{ originY: 0 }}
          />

          {/* Steps */}
          <div className="relative z-10 space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-6 text-left"
                initial={{ opacity: 0, x: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{
                  duration: 0.9,
                  delay: index * 0.4,
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 80,
                }}
                viewport={{ once: true }}
              >
                {/* Icono */}
                <div
                  className={`flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-full ${step.bg} border-2 border-blue-200 shadow-md`}
                >
                  {step.icon}
                </div>

                {/* Texto */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">{step.title}</h3>
                  <p className="mt-3 text-lg text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
