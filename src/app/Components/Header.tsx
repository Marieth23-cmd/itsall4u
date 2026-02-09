import Image from "next/image";
import { CgArrowLongRight } from "react-icons/cg";
import { FaBars } from "react-icons/fa";

export default function Header() {
  return (
    <div
      className="
       top-0 fixed w-full bg-white shadow-md px-6 py-3 z-20 "
    >
      <div className="flex items-center justify-between">
        
        {/* LEFT */}
        <div className="flex items-center gap-6 whitespace-nowrap">
         <a href="/">
          <Image
            src="/itsall/logo.png"
            alt="Logo"
            width={120}
            height={50}
            className="object-contain"
          /></a> 

        
           
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-6 whitespace-nowrap"> 
          <a className=" ml-6 text-blue-800 hover:text-blue-600 text-lg cursor-pointer  hidden lg:block" href="/OqueFizemos">O que fazemos</a>
          
        
            <a className="text-blue-800 hover:text-blue-600 text-lg cursor-pointer  hidden lg:block " href="/SobreNos">Sobre nós</a>
        
          
            <a className="text-blue-800 hover:text-blue-600 text-lg cursor-pointer  hidden lg:block " href="/portfolio">Portfólio</a>
          
          <span className="text-blue-800 text-lg hover:text-blue-600  hidden lg:block ">FR</span>

        <button
  className="
    bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800
    px-8 py-3
    rounded-lg
    hidden lg:flex
    items-center gap-3
    text-white text-lg
    whitespace-nowrap
    hover:from-blue-700 hover:via-blue-800 hover:to-blue-900
  "
>
  Entre em contacto
  <CgArrowLongRight className="text-3xl" />
</button>

<FaBars className="text-2xl text-black lg:hidden cursor-pointer" />


        </div>

      </div>
    </div>
  );
}
