import { FaMapMarkedAlt, FaShieldAlt, FaRobot, FaUsersCog } from "react-icons/fa";
import { motion } from "framer-motion";

const benefits = [
  { title: "Trazabilidad certificable", description: "Registra labores, fotos y sensores por lote para cumplir normativas como GlobalG.A.P.", icon: <FaMapMarkedAlt className="w-8 h-8 text-green-600" /> },
  { title: "Cumplimiento sin papel", description: "Genera cuaderno digital, recetas y reportes sanitarios automáticamente.", icon: <FaShieldAlt className="w-8 h-8 text-emerald-600" /> },
  { title: "IA para decisiones rápidas", description: "Recibe recomendaciones de riego, tratamientos y compras basadas en tus datos.", icon: <FaRobot className="w-8 h-8 text-blue-600" /> },
  { title: "Equipo sincronizado", description: "Distribuye tareas a cuadrillas, asesores y proveedores desde un panel compartido.", icon: <FaUsersCog className="w-8 h-8 text-lime-600" /> },
];

export default function Benefits() {
  return (
    <section
      className="relative my-0 md:py-24 py-16 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('/texturewhite.png')" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
          Beneficios para tu campo
        </h2>
        <p className="mt-4 text-base sm:text-lg text-gray-700/80 max-w-2xl mx-auto">
          Todo lo que necesitas para operar con trazabilidad agrícola, cumplimiento normativo y colaboración en tiempo real.
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
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-white/0  mb-4">
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
