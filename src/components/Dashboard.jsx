import { useState } from "react";

const sampleAutomations = [
  { id: 1, name: "Recordatorios en Gmail", active: true },
  { id: 2, name: "Alertas en WhatsApp", active: false },
  { id: 3, name: "Calendario inteligente", active: true },
];

export default function Dashboard() {
  const [autos, setAutos] = useState(sampleAutomations);

  const toggleAutomation = (id) => {
    setAutos(
      autos.map(a =>
        a.id === id ? { ...a, active: !a.active } : a
      )
    );
    // Aquí llamarías a tu backend/n8n vía API
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Tu Panel de Automatizaciones</h2>
      <div className="grid gap-4">
        {autos.map(a => (
          <div key={a.id} className="flex justify-between p-4 bg-white shadow rounded-xl">
            <span>{a.name}</span>
            <button
              onClick={() => toggleAutomation(a.id)}
              className={`px-4 py-1 rounded-lg ${a.active ? "bg-green-500 text-white" : "bg-gray-300"}`}
            >
              {a.active ? "Activo" : "Inactivo"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
