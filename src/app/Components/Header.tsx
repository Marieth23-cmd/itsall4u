"use client";
import Image from "next/image";
import Link from "next/link";
import { CgArrowLongRight } from "react-icons/cg";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from 'react-icons/ai';
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



  useEffect(() => {
    // lock body scroll while mobile menu open
    if (isMenuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed left-0 right-0 z-20">
  <div className=" mx-auto px-6 md:px-8 py-4 flex items-center justify-between bg-white backdrop-blur-md  shadow-sm">

    {/* LEFT */}
    <a href="/" className="lg:ml-44">
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

      <a href="/OqueFizemos" className="hidden lg:block text-[16px] font-medium text-[#0F172A] hover:text-black/80 transition">
        O que fazemos
      </a>

      <a href="/SobreNos" className="hidden lg:block text-[16px] font-medium text-[#0F172A] hover:text-black/80 transition">
        Sobre nós
      </a>

      <Link href="/portfolio" className="hidden lg:block text-[16px] font-medium text-[#0F172A] hover:text-black/80 transition">
        Portfólio
      </Link>

      <span className="hidden lg:block text-[16px] font-medium text-black/60 hover:text-text/80 cursor-pointer transition">
        FR
      </span>

          <a
  href="/enviarEmail"
  className="hidden lg:flex items-center gap-3 px-7 py-3 rounded-full 
  bg-[#f5c044] text-black text-[16px] font-medium 
  transition-all duration-300 
  hover:opacity-90"
>
  Entre em contacto
  <CgArrowLongRight className="text-2xl text-black" />
</a>

      <FaBars
        onClick={() => setIsMenuOpen(true)}
        className="lg:hidden text-2xl text-black cursor-pointer ml-4"
      />
    </nav>
  </div>

  {/* MOBILE */}
  <div className="lg:hidden">
    
    {/* Backdrop */}
    <div
      className={`fixed inset-0 bg-black/40 transition-opacity duration-300 z-[60] ${
        isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={CloseMenuOpen}
    />

    {/* Panel */}
    <aside
      ref={boxref}
      className={`fixed inset-y-0 right-0 w-[85%] sm:w-[70%] md:w-96 bg-white z-[70] shadow-2xl transform transition-transform duration-500 ease-in-out ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="h-screen flex flex-col bg-white">

        <div className="px-6 py-4 flex justify-end">
          <button onClick={CloseMenuOpen} className="p-2 rounded-md hover:bg-gray-100">
            <AiOutlineClose className="text-2xl text-gray-800" />
          </button>
        </div>

        <nav className="px-6 mt-6 flex-1">
          <ul className="flex flex-col gap-6 text-lg">
            <li><a href="/OqueFizemos" onClick={CloseMenuOpen} className="font-medium text-[#0F172A] hover:text-black">O que fazemos</a></li>
            <li><a href="/SobreNos" onClick={CloseMenuOpen} className="font-medium text-[#0F172A] hover:text-black">Sobre nós</a></li>
            <li><a href="/portfolio" onClick={CloseMenuOpen} className="font-medium text-[#0F172A] hover:text-black">Portfólio</a></li>
          </ul>
        </nav>

        <div className="px-6 pb-8">
          <div className="h-px bg-gray-200 mb-6" />

          <button onClick={CloseMenuOpen} className="text-sm font-medium text-gray-600">
            FR
          </button>

          <div className="mt-6">
            <a href="/enviarEmail"
              onClick={CloseMenuOpen}
              className="w-full px-6 py-3 rounded-lg bg-yellow-400 text-white font-medium"
            >
              Entre em contacto
            </a>
          </div>
        </div>

      </div>
    </aside>
  </div>
</header>

  );
}
