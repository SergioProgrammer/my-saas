import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#faf9f6] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Grid principal */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Columna 1: Marca */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900">ProcesIA Agro</h2>
            <p className="mt-4 text-gray-600 text-sm">
              Impulsa la trazabilidad agrícola conectando cuadernos, sensores y equipos con automatizaciones guiadas por IA.
            </p>
          </div>

          {/* Columna 2: Productos */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Soluciones</h3>
            <ul className="mt-4 space-y-2 text-gray-600 text-sm">
              <li><a href="/tienda" className="hover:text-gray-900">Cuaderno digital + IA</a></li>
              <li><a href="/tienda" className="hover:text-gray-900">Riego y clima conectado</a></li>
              <li><a href="/tienda" className="hover:text-gray-900">Gestión de insumos</a></li>
              <li><a href="/demo" className="hover:text-gray-900">Recorrido guiado</a></li>
            </ul>
          </div>

          {/* Columna 3: Recursos */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Recursos</h3>
            <ul className="mt-4 space-y-2 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-gray-900">Guía SIEX y GlobalG.A.P.</a></li>
              <li><a href="#" className="hover:text-gray-900">Casos de éxito</a></li>
              <li><a href="#" className="hover:text-gray-900">Academia ProcesIA</a></li>
              <li><a href="https://cal.com/procesia/agro" className="hover:text-gray-900">Contacto</a></li>
            </ul>
          </div>

          {/* Columna 4: Legal */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Legal</h3>
            <ul className="mt-4 space-y-2 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-gray-900">Términos y condiciones</a></li>
              <li><a href="#" className="hover:text-gray-900">Política de privacidad</a></li>
              <li><a href="#" className="hover:text-gray-900">Cookies</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          {/* Derechos */}
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} ProcesIA Agro. Todos los derechos reservados.
          </p>

          {/* Redes sociales */}
          <div className="flex gap-6 mt-6 md:mt-0">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <FaInstagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <FaFacebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <FaTiktok className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
