import { GiFarmTractor, GiPlantRoots, GiWaterDrop, GiGrain, GiWindmill, GiPlantWatering } from "react-icons/gi";
import { motion } from "framer-motion";

const automations = [
  {
    title: "Cuaderno digital SIEX",
    description: "Captura labores, insumos y evidencias por parcela con reportes listos para auditoría.",
    icon: <GiPlantRoots className="w-8 h-8 text-emerald-600" />,
    color: "bg-emerald-50"
  },
  {
    title: "Alertas de riego",
    description: "Combina sondas de humedad y clima para ajustar turnos y prevenir estrés hídrico.",
    icon: <GiWaterDrop className="w-8 h-8 text-blue-500" />,
    color: "bg-sky-50"
  },
  {
    title: "Planificación de maquinaria",
    description: "Asigna labores a tractores y equipos con partes automáticos y seguimiento GPS.",
    icon: <GiFarmTractor className="w-8 h-8 text-lime-600" />,
    color: "bg-lime-50"
  },
  {
    title: "Monitoreo satelital",
    description: "Genera alertas de vigor, heladas y plagas desde imágenes NDVI y pronósticos.",
    icon: <GiWindmill className="w-8 h-8 text-indigo-500" />,
    color: "bg-indigo-50"
  },
  {
    title: "Control de cosecha",
    description: "Registra cargas, calibres y lotes para vincularlos con almacenes y ventas.",
    icon: <GiGrain className="w-8 h-8 text-amber-600" />,
    color: "bg-amber-50"
  },
  {
    title: "Aplicaciones fitosanitarias",
    description: "Verifica carencias, stock y condiciones climáticas antes de cada tratamiento.",
    icon: <GiPlantWatering className="w-8 h-8 text-rose-500" />,
    color: "bg-rose-50"
  },
];

export default function Automations() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
          Automatizaciones para agricultura
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Conecta sensores, maquinaria y equipos humanos para ejecutar campañas agrícolas con trazabilidad total.
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
