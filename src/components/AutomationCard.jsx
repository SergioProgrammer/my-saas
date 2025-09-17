export default function AutomationCard({ title, description, icon }) {
  return (
    <div className="p-6 bg-white shadow rounded-2xl hover:shadow-lg transition">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
}
