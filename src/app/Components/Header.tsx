"use client";
import Image from "next/image";
import { CgArrowLongRight } from "react-icons/cg";
import { FaBars } from "react-icons/fa";
import { useState, useEffect, useCallback,useRef } from "react";

export default function Header() {
 const [isOpen, setIsOpen] = useState(false);
 const [isMenuOpen, setIsMenuOpen] = useState(false);

const boxref=useRef<HTMLDivElement>(null)
const handleClick = useCallback ((event:MouseEvent)=>{
  if(boxref.current && !boxref.current.contains(event.target as Node))
    setIsOpen(false)
}, [])

useEffect(()=>{
  if(isOpen){
    document.addEventListener("mousedown" , handleClick)
  }else{
    document.removeEventListener("mousedown" ,handleClick)
  }
  return()=>{
    document.removeEventListener("mousedown",handleClick)
  };
}, [isOpen, handleClick])

const CloseMenuOpen = ()=>{
  setIsMenuOpen(false)
  setIsOpen(false)
}



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
            className="hidden lg:block text-[16px] font-medium text-blue-900 hover:text-blue-600 transition"
          >
            O que fazemos
          </a>

          <a
            href="/SobreNos"
            className="hidden lg:block text-[16px] font-medium text-blue-900 hover:text-blue-600 transition"
          >
            Sobre nós
          </a>

          <a
            href="/portfolio"
            className="hidden lg:block text-[16px] font-medium text-blue-900 hover:text-blue-600 transition"
          >
            Portfólio
          </a>

          {/* IDIOMA */}
          <span className="hidden lg:block text-[16px] font-medium text-blue-900/70 hover:text-blue-900 cursor-pointer transition">
            FR
          </span>

          {/* CTA */}
          <button
            className="
              hidden lg:flex items-center gap-3
              px-7 py-3
              rounded-full
              bg-gradient-to-r from-blue-600 to-blue-800
              text-white text-[16px] font-medium
              hover:from-blue-700 hover:to-blue-900
              transition
            "
          >
            Entre em contacto
            <CgArrowLongRight className="text-2xl" />
          </button>

          {/* MOBILE MENU */}
          <FaBars onClick={()=>{setIsMenuOpen(!isMenuOpen) ; setIsOpen(true)}} 
          className="lg:hidden text-2xl text-blue-900 cursor-pointer" />
        </nav>

       {/* MOBILE MENU */}
{isMenuOpen && isOpen && (
  <div
    ref={boxref}
    className="
      absolute top-full right-0 mt-1
      w-64
      rounded-lg
      bg-[#f9fafb]
      shadow-xl
      border border-gray-100
      z-30"
  >
    <ul className="flex flex-col px-6 py-5 gap-4">

      {/* NAV */}
      <a
        href="/OqueFizemos"
        onClick={CloseMenuOpen}
        className="
          text-[15px]
          font-medium
          text-blue-900
          hover:text-blue-600
          transition
        "
      >
        O que fazemos
      </a>

      <a
        href="/SobreNos"
        onClick={CloseMenuOpen}
        className="text-[15px] font-medium text-blue-900 hover:text-blue-600 transition"
      >
        Sobre nós
      </a>

      <a
        href="/portfolio"
        onClick={CloseMenuOpen}
        className="text-[15px] font-medium text-blue-900 hover:text-blue-600 transition"
      >
        Portfólio
      </a>

      {/* DIVISOR */}
      <div className="h-px bg-gray-200 my-2" />

      {/* LANGUAGE */}
      <button
        onClick={CloseMenuOpen}
        className="
          self-start
          text-sm
          font-medium
          text-blue-900/70
          hover:text-blue-900
          transition
        "
      >
        FR
      </button>

      {/* CTA */}
      <button
        onClick={CloseMenuOpen}
        className="
          mt-3
          w-full
          flex items-center justify-center gap-3
          px-6 py-3
          rounded-lg
          bg-gradient-to-r from-blue-600 to-blue-800
          text-white
          text-sm
          font-medium
          hover:from-blue-700 hover:to-blue-900
          transition
        "
      >
        Entre em contacto
        <CgArrowLongRight className="text-xl" />
      </button>

    </ul>
  </div>
)}

      


      </div>
    </header>
  );
}
