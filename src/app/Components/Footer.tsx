export default function Footer() {
  return (
    <footer className="max-w-[1500px] mx-auto mt-16 px-8 py-12 bg-white rounded-2xl shadow-md">
      
      {/* CONTEÚDO */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-start">
        
        {/* LOGO / BRAND */}
        <div>
          <h2 className="text-blue-800 font-extrabold text-3xl mb-3">
            ItsAll4U
          </h2>
          <p className="text-gray-600 max-w-xs">
            Transformando ideias em resultados.
          </p>
        </div>

        {/* EXPLORAR */}
        <div>
          <h2 className="text-blue-800 font-semibold text-lg mb-4">
            Explorar
          </h2>
          <ul className="space-y-2">
            <li className="text-gray-600 hover:text-blue-600 cursor-pointer">Lar</li>
            <li className="text-gray-600 hover:text-blue-600 cursor-pointer">O que fazemos</li>
            <li className="text-gray-600 hover:text-blue-600 cursor-pointer">Sobre nós</li>
            <li className="text-gray-600 hover:text-blue-600 cursor-pointer">Contacto</li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h2 className="text-blue-800 font-semibold text-lg mb-4">
            Seguir
          </h2>
          <ul className="space-y-2">
            <li className="text-gray-600 hover:text-blue-600 cursor-pointer">LinkedIn</li>
            <li className="text-gray-600 hover:text-blue-600 cursor-pointer">Instagram</li>
          </ul>
        </div>

        {/* ENDEREÇO */}
        <div>
          <h2 className="text-blue-800 font-semibold text-lg mb-4">
            Zamba2
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Bairro Azul<br />
            Rua do Banco BFA
          </p>
        </div>

      </div>

      {/* DIVISÃO */}
      <div className="border-t mt-12 pt-6 text-center">
        <p className="text-blue-800 text-sm">
          &copy; {new Date().getFullYear()} ItsAll4U. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
