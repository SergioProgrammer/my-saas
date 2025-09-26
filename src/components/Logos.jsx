"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  SiGmail,
  SiGooglecalendar,
  SiGooglesheets,
  SiTwilio,
  SiOpenai,
  SiSlack,
  SiZoom,
  SiNotion,
  SiZapier,
  SiTrello,
  SiHubspot,
  SiShopify,
  SiStripe,
} from "react-icons/si";

const integrations = [
  { name: "Gmail", icon: <SiGmail className="w-10 h-10 text-red-500" /> },
  { name: "Google Calendar", icon: <SiGooglecalendar className="w-10 h-10 text-blue-500" /> },
  { name: "Google Sheets", icon: <SiGooglesheets className="w-10 h-10 text-green-500" /> },
  { name: "Twilio", icon: <SiTwilio className="w-10 h-10 text-pink-600" /> },
  { name: "ChatGPT", icon: <SiOpenai className="w-10 h-10 text-gray-800" /> },
  { name: "Slack", icon: <SiSlack className="w-10 h-10 text-purple-600" /> },
  { name: "Zoom", icon: <SiZoom className="w-10 h-10 text-blue-400" /> },
  { name: "Notion", icon: <SiNotion className="w-10 h-10 text-black" /> },
  { name: "Zapier", icon: <SiZapier className="w-10 h-10 text-orange-500" /> },
  { name: "Trello", icon: <SiTrello className="w-10 h-10 text-sky-500" /> },
  { name: "HubSpot", icon: <SiHubspot className="w-10 h-10 text-orange-600" /> },
  { name: "Shopify", icon: <SiShopify className="w-10 h-10 text-green-600" /> },
  { name: "Stripe", icon: <SiStripe className="w-10 h-10 text-indigo-500" /> },
  // Placeholders
  { name: "ElevenLabs", icon: <div className="text-lg font-semibold">11Labs</div> },
  { name: "Lovable", icon: <div className="text-lg font-semibold">Lovable</div> },
  { name: "Make.com", icon: <div className="text-lg font-semibold">Make</div> },
  { name: "Airtable", icon: <div className="text-lg font-semibold">Airtable</div> },
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
