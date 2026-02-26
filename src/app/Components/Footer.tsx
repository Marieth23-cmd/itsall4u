import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { BiBriefcase, BiEnvelope, BiHome, BiUser } from "react-icons/bi";

export default function Footer() {
  return (
    <footer className="bg-black ">
      <div className="max-w-[1500px] mx-auto px-8 py-16">

        {/* CONTEÚDO */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">

          {/* BRAND */}
          <div>
            <Image
                    src="/itsall/logo.png"
                    alt="Logo"
                    width={250}
                    height={150}
                    className="object-contain bg-white invert mb-4"
                    priority
                  />
           
          </div>

          {/* EXPLORAR */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Explorar
            </h3>
            <ul className="space-y-3 text-gray-300">
              <ul className="space-y-3 text-gray-300 text-base">
                <li>
                  <Link href="/" className="flex items-center gap-3 hover:text-yellow-400 transition">
                    <BiHome size={18} />
                    Lar
                  </Link>
                </li>

                <li>
                  <Link href="/OqueFizemos" className="flex items-center gap-3 hover:text-yellow-400 transition">
                    <BiBriefcase size={18} />
                    O que fazemos
                  </Link>
                </li>

                <li>
                  <Link href="/SobreNos" className="flex items-center gap-3 hover:text-yellow-400 transition">
                    <BiUser size={18} />
                    Sobre nós
                  </Link>
                </li>

                <li>
                  <Link href="/enviarEmail" className="flex items-center gap-3 hover:text-yellow-500 transition">
                    <BiEnvelope size={18} />
                    Contacto
                  </Link>
                </li>
              </ul>
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h3 className="text-white font-semibold text-base uppercase tracking-wider mb-5">
              Seguir
            </h3>
            <div className="flex items-center gap-4 text-gray-300">
              <a
                href="https://www.linkedin.com/company/itsall4u"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 hover:border-yellow-400 hover:text-yellow-400 transition"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.instagram.com/itsall4u.ao/"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 hover:border-yellow-400 hover:text-yellow-400 transition"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* LOCALIZAÇÃO */}
          <div>
            <h3 className="text-white font-semibold text-base uppercase tracking-wider mb-5">
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
          <div className="text-gray-400 text-sm">
            <p className="mb-4 lg:mb-1 text-sm">Transformamos ideias em resultados reais para marcas que querem crescer .</p>
             <p>© {new Date().getFullYear()} ItsAll4U. Todos os direitos reservados.</p>  
        
            </div>
          
        </div>

      </div>
    </footer>
  );
}
