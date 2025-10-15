"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaCompass, FaProjectDiagram, FaBuilding } from "react-icons/fa";

const plans = [
  {
    title: "Diagnóstico estratégico",
    price: "Sprint de 2 semanas",
    description:
      "Evaluamos procesos, sistemas y datos críticos para priorizar automatizaciones con impacto tangible.",
    features: [
      "✨ Assessment de madurez y blueprint de procesos",
      "✔ Caso de negocio con KPIs y quick wins",
      "✔ Taller ejecutivo de alineamiento",
    ],
    icon: <FaCompass className="w-8 h-8 text-indigo-600" />,
    cta: "Reservar diagnóstico",
    highlight: false,
    ctaHref: "https://wa.me/34655689827",
  },
  {
    title: "Programa de transformación end-to-end",
    price: "Ciclos trimestrales",
    description:
      "Co-diseñamos, activamos y medimos automatizaciones priorizadas junto a tus equipos de negocio, TI y datos.",
    features: [
      "✔ Roadmap trimestral con portfolio priorizado",
      "✔ Implementación híbrida (low-code, RPA, integración)",
      "✔ Governance, métricas y gestión del cambio",
    ],
    icon: <FaProjectDiagram className="w-8 h-8 text-emerald-600" />,
    cta: "Diseñar programa",
    highlight: true,
    ctaHref: "https://wa.me/34655689827",
  },
  {
    title: "Oficina de automatización (PMO)",
    price: "Plan a medida",
    description:
      "Extendemos tus capacidades internas con gobierno, formación y soporte continuo para escalar automatizaciones.",
    features: [
      "✔ Oficina de automatización dedicada",
      "✔ Framework de priorización y OKRs operativos",
      "✔ Capacitación y acompañamiento continuo",
    ],
    icon: <FaBuilding className="w-8 h-8 text-blue-600" />,
    cta: "Hablar con dirección",
    ctaHref: "https://wa.me/34655689827",
  },
];

const cookieCategories = [
  {
    key: "essential",
    label: "Cookies esenciales",
    description:
      "Imprescindibles para recordar el inicio de sesión, mantener la seguridad y ofrecer la funcionalidad básica de la plataforma.",
    required: true,
  },
  {
    key: "analytics",
    label: "Cookies analíticas",
    description:
      "Nos permiten medir el rendimiento del sitio, detectar incidencias y tomar decisiones basadas en datos agregados.",
  },
  {
    key: "marketing",
    label: "Cookies de personalización y marketing",
    description:
      "Se utilizan para adaptar contenidos y comunicaciones según sus intereses y para medir campañas.",
  },
];

const COOKIE_STORAGE_KEY = "procesia:cookie-consent";

export default function Pricing() {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [cookieBannerVisible, setCookieBannerVisible] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false,
  });

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

  useEffect(() => {
    if (typeof window === "undefined") return;

    const stored = window.localStorage.getItem(COOKIE_STORAGE_KEY);
    if (!stored) {
      setCookieBannerVisible(true);
      return;
    }

    try {
      const saved = JSON.parse(stored);
      setCookiePreferences({
        essential: true,
        analytics: Boolean(saved.analytics),
        marketing: Boolean(saved.marketing),
      });
    } catch (error) {
      setCookieBannerVisible(true);
    }
  }, []);

  const scrollToIndex = (i) => {
    const scroller = trackRef.current;
    if (!scroller) return;

    const el = scroller.children[i];
    if (!el) return;

    scroller.scrollTo({ left: el.offsetLeft, behavior: "smooth" });
  };

  const persistCookiePreferences = (prefs) => {
    if (typeof window === "undefined") return;
    const payload = {
      ...prefs,
      updatedAt: new Date().toISOString(),
    };
    window.localStorage.setItem(COOKIE_STORAGE_KEY, JSON.stringify(payload));
  };

  const toggleCookiePreference = (key) => {
    if (key === "essential") return;
    setCookiePreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleAcceptAll = () => {
    const all = { essential: true, analytics: true, marketing: true };
    setCookiePreferences(all);
    persistCookiePreferences(all);
    setCookieBannerVisible(false);
  };

  const handleRejectOptional = () => {
    const minimal = { essential: true, analytics: false, marketing: false };
    setCookiePreferences(minimal);
    persistCookiePreferences(minimal);
    setCookieBannerVisible(false);
  };

  const handleSavePreferences = () => {
    persistCookiePreferences(cookiePreferences);
    setCookieBannerVisible(false);
  };

  return (
    <>
      <section className="bg-gradient-to-b from-gray-50 to-white py-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
            Planes de consultoría estratégica
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Activa un programa de automatización respaldado por negocio, datos y tecnología. Ajustamos cada plan a la realidad y ritmo de tu organización.
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

          <div className="mt-16 text-xs sm:text-sm text-gray-500 space-y-2">
            <p>
              Al continuar aceptas nuestras condiciones de uso y puedes ajustar tus
              preferencias de privacidad cuando lo necesites.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 font-medium">
              <a href="/terminos" className="text-gray-700 hover:text-gray-900">
                Términos y condiciones
              </a>
              <span className="hidden sm:block text-gray-300">•</span>
              <a href="/politica#privacidad" className="text-gray-700 hover:text-gray-900">
                Política de privacidad
              </a>
              <span className="hidden sm:block text-gray-300">•</span>
              <a href="/politica#cookies" className="text-gray-700 hover:text-gray-900">
                Política de cookies
              </a>
              <span className="hidden sm:block text-gray-300">•</span>
              <button
                type="button"
                onClick={() => setCookieBannerVisible(true)}
                className="text-gray-700 hover:text-gray-900"
              >
                Configurar cookies
              </button>
            </div>
          </div>
        </div>
      </section>

      {cookieBannerVisible && (
        <div className="fixed inset-x-4 bottom-4 z-50 md:inset-x-auto md:right-6 md:w-96">
          <div className="bg-white border border-gray-200 rounded-3xl shadow-2xl p-6 space-y-5">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Gestiona tus cookies
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Usamos cookies para ofrecerte una experiencia segura y mejorar el
                servicio. Elige qué categorías quieres activar.
              </p>
            </div>
            <div className="space-y-4">
              {cookieCategories.map((category) => (
                <label key={category.key} className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    disabled={category.required}
                    checked={Boolean(cookiePreferences[category.key])}
                    onChange={() => toggleCookiePreference(category.key)}
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      {category.label}
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                      {category.description}
                    </p>
                  </div>
                </label>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={handleAcceptAll}
                className="flex-1 px-4 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-xl hover:bg-indigo-500"
              >
                Aceptar todas
              </button>
              <button
                type="button"
                onClick={handleRejectOptional}
                className="flex-1 px-4 py-2 text-sm font-semibold text-gray-700 border border-gray-200 rounded-xl hover:bg-gray-50"
              >
                Rechazar opcionales
              </button>
              <button
                type="button"
                onClick={handleSavePreferences}
                className="flex-1 px-4 py-2 text-sm font-semibold text-gray-700 border border-gray-200 rounded-xl hover:bg-gray-50"
              >
                Guardar selección
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
