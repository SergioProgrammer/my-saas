import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaCalendarAlt, FaWhatsapp, FaCrown, FaBuilding, FaRobot } from "react-icons/fa";

const plans = [
  { 
    title: "Demo 7 días GRATIS", 
    price: "Gratis", 
    description: "Prueba ProcesIA sin coste y descubre cómo automatizar en pocos clics.", 
    features: [
      "✨ 1 automatización de prueba", 
      "✔ Acceso completo al panel", 
      "✔ Soporte básico"
    ], 
    icon: <FaEnvelope className="w-8 h-8 text-red-500" />,
    cta: "Empieza gratis" 
  },
  { 
    title: "Añade más de 2 automatizaciones", 
    price: "Recibe un 10% de descuento", 
    description: "Activa una automatización y conecta Gmail, WhatsApp o Calendar sin complicaciones.", 
    features: [
      "✔ Más de 2 automatizaciones activas", 
      "✔ Cambia tu automatización en cualquier momento", 
      "✔ Soporte incluido"
    ], 
    icon: <FaEnvelope className="w-8 h-8 text-red-500" />, 
    cta: "Elegir plan" 
  },
  
];

export default function Pricing() {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const scroller = trackRef.current;
    if (!scroller) return;

    let ticking = false;
    const updateActive = () => {
      if (!trackRef.current) return;
      const center = scroller.scrollLeft + scroller.clientWidth / 2;
      const slides = Array.from(scroller.children);
      let bestIdx = 0;
      let bestDist = Infinity;
      slides.forEach((el, i) => {
        const rectLeft = el.offsetLeft || 0;
        const rectWidth = el.clientWidth || 0;
        const childCenter = rectLeft + rectWidth / 2;
        const d = Math.abs(childCenter - center);
        if (d < bestDist) { bestDist = d; bestIdx = i; }
      });
      setActiveIndex(bestIdx);
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => { updateActive(); ticking = false; });
        ticking = true;
      }
    };

    scroller.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateActive);
    updateActive();

    return () => {
      scroller.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateActive);
    };
  }, []);

  const scrollToIndex = (i) => {
    const scroller = trackRef.current;
    if (!scroller) return;
    const el = scroller.children[i];
    if (!el) return;
    scroller.scrollTo({ left: el.offsetLeft, behavior: "smooth" });
  };

  return (
    <section className="bg-[#faf9f6] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">Planes y precios</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          ProcesIA funciona con <strong>suscripciones por automatización</strong>. 
          Cuantas más automatizaciones actives, más ahorrarás.
        </p>

        {/* Grid Desktop */}
        <div className="hidden md:grid mt-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {plans.map((plan, index) => (
            <motion.div
              key={`grid-${index}`}
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
                    <li key={i} className="flex items-start gap-2"><span>{feature}</span></li>
                  ))}
                </ul>
              </div>
              <div className="mt-8">
                <a href="/registro" className="block w-full px-6 py-3 text-center bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition">
                  {plan.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden mt-10">
          <div
            ref={trackRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth px-1 -mx-1"
            role="region"
            aria-label="Carrusel de planes"
          >
            {plans.map((plan, index) => (
              <motion.div
                key={`carousel-${index}`}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ amount: 0.5, once: true }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="snap-center shrink-0 min-w-[88%] max-w-[88%] bg-white rounded-3xl shadow-lg p-6 text-left"
              >
                <div>
                  <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gray-100 mb-5">
                    {plan.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{plan.title}</h3>
                  <p className="mt-2 text-lg font-bold text-gray-800">{plan.price}</p>
                  <p className="mt-3 text-gray-600">{plan.description}</p>
                  <ul className="mt-5 space-y-2 text-gray-700">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2"><span>{feature}</span></li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6">
                  <a href="/registro" className="block w-full px-5 py-3 text-center bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition">
                    {plan.cta}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-center gap-2" aria-label="Indicadores de carrusel">
            {plans.map((_, i) => (
              <button
                key={`dot-${i}`}
                onClick={() => scrollToIndex(i)}
                aria-label={`Ir al plan ${i + 1}`}
                className={activeIndex === i ? "w-3 h-3 rounded-full bg-gray-900" : "w-2.5 h-2.5 rounded-full bg-gray-300"}
              />
            ))}
          </div>
          <p className="mt-2 text-xs text-gray-500 text-center">desliza para ver más</p>
        </div>
      </div>
    </section>
  );
}
