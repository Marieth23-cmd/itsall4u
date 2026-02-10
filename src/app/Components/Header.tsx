import Image from "next/image";
import { CgArrowLongRight } from "react-icons/cg";
import { FaBars } from "react-icons/fa";

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur shadow-sm z-30">
      <div className="max-w-[1500px] mx-auto px-6 py-4 flex items-center justify-between">

        {/* LEFT */}
        <a href="/" className="flex items-center">
          <Image
            src="/itsall/logo.png"
            alt="Logo"
            width={140}
            height={50}
            className="object-contain"
            priority
          />
        </a>

        {/* RIGHT */}
        <nav className="flex items-center gap-8 whitespace-nowrap">

          <a
            href="/OqueFizemos"
            className="hidden lg:block text-[15px] font-medium text-blue-900 hover:text-blue-600 transition"
          >
            O que fazemos
          </a>

          <a
            href="/SobreNos"
            className="hidden lg:block text-[15px] font-medium text-blue-900 hover:text-blue-600 transition"
          >
            Sobre nós
          </a>

          <a
            href="/portfolio"
            className="hidden lg:block text-[15px] font-medium text-blue-900 hover:text-blue-600 transition"
          >
            Portfólio
          </a>

          {/* IDIOMA */}
          <span className="hidden lg:block text-sm font-medium text-blue-900/70 hover:text-blue-900 cursor-pointer transition">
            FR
          </span>

          {/* CTA */}
          <button
            className="
              hidden lg:flex items-center gap-3
              px-7 py-3
              rounded-full
              bg-gradient-to-r from-blue-600 to-blue-800
              text-white text-sm font-medium
              hover:from-blue-700 hover:to-blue-900
              transition
            "
          >
            Entre em contacto
            <CgArrowLongRight className="text-2xl" />
          </button>

          {/* MOBILE MENU */}
          <FaBars className="lg:hidden text-2xl text-blue-900 cursor-pointer" />
        </nav>

      </div>
    </header>
  );
}
