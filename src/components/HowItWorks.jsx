import { FaUserPlus, FaPlug, FaBolt } from "react-icons/fa";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Regístrate",
    description: "Crea tu cuenta en segundos y accede al panel de control.",
    icon: <FaUserPlus className="w-8 h-8 text-blue-600" />,
    bg: "bg-blue-50",
  },
  {
    title: "Conecta tus apps",
    description: "Vincula Gmail, WhatsApp, Calendar y Slack con un solo clic.",
    icon: <FaPlug className="w-8 h-8 text-green-600" />,
    bg: "bg-green-50",
  },
  {
    title: "Activa automatizaciones",
    description: "Enciende los flujos que necesites y deja que la IA trabaje por ti.",
    icon: <FaBolt className="w-8 h-8 text-yellow-600" />,
    bg: "bg-yellow-50",
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
          Empieza en minutos: conecta tus apps y activa automatizaciones con un solo clic.
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
