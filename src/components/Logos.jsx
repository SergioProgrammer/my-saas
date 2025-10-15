"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FiActivity,
  FiCpu,
  FiLayers,
  FiTrendingUp,
  FiBarChart2,
  FiShield,
  FiUsers,
  FiCloud,
} from "react-icons/fi";

const integrations = [
  { name: "Procesos inter-área", icon: <FiLayers className="w-10 h-10 text-indigo-700" /> },
  { name: "Plataformas low-code", icon: <FiCpu className="w-10 h-10 text-emerald-600" /> },
  { name: "Automatización RPA", icon: <FiActivity className="w-10 h-10 text-blue-500" /> },
  { name: "Analítica avanzada", icon: <FiBarChart2 className="w-10 h-10 text-amber-500" /> },
  { name: "Customer Journeys", icon: <FiUsers className="w-10 h-10 text-purple-600" /> },
  { name: "Gobierno del dato", icon: <FiShield className="w-10 h-10 text-slate-600" /> },
  { name: "Automatización comercial", icon: <FiTrendingUp className="w-10 h-10 text-teal-600" /> },
  { name: "Integraciones cloud", icon: <FiCloud className="w-10 h-10 text-gray-700" /> },
];

export default function IntegrationsMarquee() {
  const [duration, setDuration] = useState(25); // default desktop

  useEffect(() => {
    const updateSpeed = () => {
      if (window.innerWidth < 768) {
        // Mobile
        setDuration(6); 
      } else {
        // Desktop
        setDuration(25);
      }
    };

    updateSpeed();
    window.addEventListener("resize", updateSpeed);
    return () => window.removeEventListener("resize", updateSpeed);
  }, []);

  return (
    <section className="bg-white py-16">
      <div className="max-w-9xl mx-auto px-6 text-center">
        <div className="relative mt-10 overflow-hidden">
          <motion.div
            className="flex gap-16 whitespace-nowrap"
            initial={{ x: 0 }}
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration, ease: "linear" }}
          >
            {[...integrations, ...integrations].map((integration, i) => (
              <div
                key={i}
                className="flex items-center gap-3 opacity-80 hover:opacity-100 transition"
              >
                {integration.icon}
                <span className="text-gray-700 font-medium">
                  {integration.name}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Gradientes laterales */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
