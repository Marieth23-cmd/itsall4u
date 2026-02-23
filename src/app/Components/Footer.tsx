import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black ">
      <div className="max-w-[1500px] mx-auto px-8 py-16">

        {/* CONTEÚDO */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">

          {/* BRAND */}
          <div>
            <h2 className="text-white font-extrabold text-2xl mb-4">
              ItsAll4U
            </h2>
            <p className="text-gray-300 max-w-xs leading-relaxed">
              Transformamos ideias em resultados reais para marcas que querem crescer .
            </p>
          </div>

          {/* EXPLORAR */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Explorar
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="hover:text-blue-500 cursor-pointer transition"><Link href="/">Lar</Link></li>
              <li className="hover:text-blue-500 cursor-pointer transition"><Link href="/OqueFizemos">O que fazemos</Link></li>
              <li className="hover:text-blue-500 cursor-pointer transition"><Link href="/SobreNos">Sobre nós</Link></li>
              <li className="hover:text-blue-500 cursor-pointer transition"><Link href="/enviarEmail">Contacto</Link></li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Seguir
            </h3>
            <div className="flex items-center gap-4 text-gray-300">
              <a
                href="https://www.linkedin.com/company/itsall4u"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 hover:border-blue-500 hover:text-blue-500 transition"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.instagram.com/itsall4u.ao/"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 hover:border-blue-500 hover:text-blue-500 transition"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* LOCALIZAÇÃO */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Localização
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Zamba 2<br />
              Bairro Azul<br />
              Rua do Banco BFA
            </p>
          </div>

        </div>

        {/* DIVISOR */}
        <div className="border-t border-gray-800 mt-16 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} ItsAll4U. Todos os direitos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
}
