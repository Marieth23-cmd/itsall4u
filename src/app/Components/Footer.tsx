"use client"
import { useTranslations } from "next-intl";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import Image from "next/image";

export default function Footer() {

  const t = useTranslations("Footer")
  return (
    <footer className="bg-black">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">

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

            <p className="text-gray-300 leading-relaxed text-base">
              {t("descricao")}
            </p>
          </div>

          {/* SERVIÇOS */}
          <div>
            <h3 className="text-white font-medium uppercase tracking-wider text-base mb-6">
             {t("group1.title")}
            </h3>

            <ul className="space-y-3 text-gray-300 text-base">
              <li>{t("group1.servico1")}</li>
              <li>{t("group1.servico2")}</li>
              <li>{t("group1.servico3")}</li>
              <li>{t("group1.servico4")}</li>
            </ul>
          </div>

          {/* CONTACTO */}
          <div>
            <h3 className="text-white font-medium uppercase tracking-wider text-base mb-6">
             {t("group2.title")}
            </h3>

            <ul className="space-y-4 text-gray-300 text-base">
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
            <h3 className="text-white font-medium uppercase tracking-wider text-base mb-6">
              {t("group3.title")}
            </h3>

            <div className="flex items-center gap-4 text-gray-300">
              <a
                href="https://www.linkedin.com/company/itsall4u"
                target="_blank"
                className="w-11 h-11 flex items-center justify-center rounded-full 
                border border-gray-500 
                hover:border-yellow-400 hover:text-yellow-400 
                transition duration-300"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://www.instagram.com/itsall4u.ao/"
                target="_blank"
                className="w-11 h-11 flex items-center justify-center rounded-full 
                border border-gray-500 
                hover:border-yellow-400 hover:text-yellow-400 
                transition duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.youtube.com/@ItsAll4uangola"
                target="_blank"
                className="w-11 h-11 flex items-center justify-center rounded-full 
                border border-gray-500 
                hover:border-yellow-400 hover:text-yellow-400 
                transition duration-300"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

        </div>

        {/* DIVISOR */}
        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-300 text-base space-y-2">
          <p>
            {t("bottom.texto1")}
          </p>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} {t("bottom.texto2")}
          </p>
        </div>

      </div>
    </footer>
  );
}