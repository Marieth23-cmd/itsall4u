import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="max-w-[1500px] mx-auto px-8 py-20">

        {/* CONTEÚDO */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-14">

          {/* BRAND + DESCRIÇÃO */}
          <div className="space-y-6">
            <Image
              src="/itsall/logo.png"
              alt="ItsAll4U Logo"
              width={240}
              height={160}
              className="object-contain bg-white invert"
              priority
            />

            <p className="text-gray-400 leading-relaxed text-base">
              A ItsAll4U é uma agência criativa especializada em soluções estratégicas 
              para marcas que querem crescer com identidade, inovação e impacto real.
            </p>
          </div>

          {/* SERVIÇOS */}
          <div>
            <h3 className="text-white font-semibold uppercase tracking-wider text-base mb-6">
              Serviços
            </h3>

            <ul className="space-y-3 text-gray-400 text-base">
              <li>Branding & Identidade Visual</li>
              <li>Gestão de Redes Sociais</li>
              <li>Produção Audiovisual</li>
              <li>Web Design & Desenvolvimento</li>
            </ul>
          </div>

          {/* CONTACTO */}
          <div>
            <h3 className="text-white font-semibold uppercase tracking-wider text-base mb-6">
              Contacto
            </h3>

            <ul className="space-y-4 text-gray-400 text-base">
              <li className="flex items-start gap-3">
                <FiMapPin className="mt-1 text-yellow-400" />
                <span>
                  Zamba 2 <br />
                  Bairro Azul <br />
                  Rua do Banco BFA
                </span>
              </li>

              <li className="flex items-center gap-3">
                <FiPhone className="text-yellow-400" />
               + (244) 930 611 983
              </li>

              <li className="flex items-center gap-3">
                <FiMail className="text-yellow-400" />
                geral@itsall4u.ao
              </li>
            </ul>
          </div>

          {/* REDES SOCIAIS */}
          <div>
            <h3 className="text-white font-semibold uppercase tracking-wider text-base mb-6">
              Seguir
            </h3>

            <div className="flex items-center gap-4 text-gray-300">
              <a
                href="https://www.linkedin.com/company/itsall4u"
                target="_blank"
                className="w-11 h-11 flex items-center justify-center rounded-full 
                border border-gray-700 
                hover:border-yellow-400 hover:text-yellow-400 
                transition duration-300"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://www.instagram.com/itsall4u.ao/"
                target="_blank"
                className="w-11 h-11 flex items-center justify-center rounded-full 
                border border-gray-700 
                hover:border-yellow-400 hover:text-yellow-400 
                transition duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.youtube.com/@ItsAll4uangola"
                target="_blank"
                className="w-11 h-11 flex items-center justify-center rounded-full 
                border border-gray-700 
                hover:border-yellow-400 hover:text-yellow-400 
                transition duration-300"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

        </div>

        {/* DIVISOR */}
        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-400 text-base space-y-2">
          <p>
            Transformamos ideias em resultados reais para marcas que querem crescer.
          </p>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} ItsAll4U. Todos os direitos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
}