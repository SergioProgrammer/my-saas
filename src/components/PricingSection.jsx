"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaSeedling, FaTractor, FaWarehouse } from "react-icons/fa";

const plans = [
  {
    title: "Piloto de trazabilidad",
    price: "14 días sin coste",
    description:
      "Digitaliza una explotación completa, importa tu cuaderno y valida la automatización con nuestro equipo agrónomo.",
    features: [
      "✨ Cuaderno digital guiado",
      "✔ Conexión a sensores y clima",
      "✔ Soporte agronómico incluido",
    ],
    icon: <FaSeedling className="w-8 h-8 text-emerald-600" />,
    cta: "Solicitar piloto",
    highlight: true,
    ctaHref: "https://cal.com/procesia/agro",
  },
  {
    title: "Operación multicuartel",
    price: "Desde 89 €/mes",
    description:
      "Activa automatizaciones de trazabilidad, riego y stock para varias parcelas con reporte semanal.",
    features: [
      "✔ Automatizaciones ilimitadas",
      "✔ Roles para cuadrillas y asesores",
      "✔ Reporting agronómico avanzado",
    ],
    icon: <FaTractor className="w-8 h-8 text-lime-600" />,
    cta: "Hablar con ventas",
    ctaHref: "https://cal.com/procesia/operaciones",
  },
  {
    title: "Cooperativas y grupos",
    price: "Plan a medida",
    description:
      "Centraliza varias explotaciones, integra ERPs y comparte trazabilidad con certificadoras y clientes.",
    features: [
      "✔ Multi-explotación y multimoneda",
      "✔ Dashboards personalizados",
      "✔ Integración a medida",
    ],
    icon: <FaWarehouse className="w-8 h-8 text-indigo-600" />,
    cta: "Agendar asesoría",
    ctaHref: "https://cal.com/procesia/cooperativas",
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
        if (d < bestDist) {
          bestDist = d;
          bestIdx = i;
        }
      });

      setActiveIndex(bestIdx);
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateActive();
          ticking = false;
        });
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
    <section className="bg-gradient-to-b from-gray-50 to-white py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
          Planes para el campo
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Escala tu trazabilidad agrícola con acompañamiento experto. Ajustamos la plataforma a cada explotación y cooperativa.
        </p>

        {/* Grid Desktop */}
        <div className="hidden md:grid mt-20 grid-cols-1 md:grid-cols-3 gap-10">
          {plans.map((plan, index) => (
            <motion.div
              key={`grid-${index}`}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className={`flex flex-col justify-between rounded-3xl shadow-xl p-10 text-left border ${
                plan.highlight
                  ? "bg-white border-indigo-200 hover:shadow-2xl"
                  : "bg-white border-gray-100 hover:shadow-lg"
              }`}
            >
              <div>
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gray-50 mb-6 shadow-sm">
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {plan.title}
                </h3>
                <p className="mt-2 text-2xl font-extrabold text-indigo-600">
                  {plan.price}
                </p>
                <p className="mt-3 text-gray-600">{plan.description}</p>
                <ul className="mt-6 space-y-2 text-gray-700">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm md:text-base"
                    >
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8">
                <a
                  href={plan.ctaHref ?? "/tienda"}
                  className={`block w-full px-6 py-3 text-center rounded-xl font-medium transition ${
                    plan.highlight
                      ? "bg-indigo-600 text-white hover:bg-indigo-500"
                      : "bg-gray-900 text-white hover:bg-gray-800"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden mt-14">
          <div
            ref={trackRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth px-1 -mx-1"
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
                className="snap-center shrink-0 min-w-[88%] max-w-[88%] bg-white border border-gray-100 rounded-3xl shadow-lg p-6 text-left"
              >
                <div>
                  <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gray-50 mb-5">
                    {plan.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {plan.title}
                  </h3>
                  <p className="mt-2 text-lg font-extrabold text-indigo-600">
                    {plan.price}
                  </p>
                  <p className="mt-3 text-gray-600">{plan.description}</p>
                  <ul className="mt-5 space-y-2 text-gray-700">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6">
                  <a
                    href={plan.ctaHref ?? "/tienda"}
                    className="block w-full px-5 py-3 text-center bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-500 transition"
                  >
                    {plan.cta}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <div
            className="mt-6 flex items-center justify-center gap-2"
            aria-label="Indicadores de carrusel"
          >
            {plans.map((_, i) => (
              <button
                key={`dot-${i}`}
                onClick={() => scrollToIndex(i)}
                aria-label={`Ir al plan ${i + 1}`}
                className={
                  activeIndex === i
                    ? "w-3 h-3 rounded-full bg-indigo-600"
                    : "w-2.5 h-2.5 rounded-full bg-gray-300"
                }
              />
            ))}
          </div>
          <p className="mt-2 text-xs text-gray-500 text-center">
            desliza para ver más →
          </p>
        </div>
      </div>
    </section>
  );
}
