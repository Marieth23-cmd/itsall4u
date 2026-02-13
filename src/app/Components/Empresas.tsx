"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { CgChevronLeft, CgChevronRight } from "react-icons/cg";

const logosTop = [
  "/empresas/empresa1.png",
  "/empresas/empresa2.png",
  "/empresas/empresa3.png",
  "/empresas/empresa4.png",
  "/empresas/empresa5.png",
  "/empresas/empresa6.png",
  "/empresas/empresa7.png",
  "/empresas/empresa8.png",
  "/empresas/empresa9.png",
  "/empresas/empresa10.png",
  "/empresas/empresa21.png",
  "/empresas/empresa22.png",
];

const logosBottom = [
  "/empresas/empresa11.png",
  "/empresas/empresa12.png",
  "/empresas/empresa13.png",
  "/empresas/empresa14.png",
  "/empresas/empresa15.png",
  "/empresas/empresa16.png",
  "/empresas/empresa17.png",
  "/empresas/empresa18.png",
  "/empresas/empresa19.png",
  "/empresas/empresa20.png",
  "/empresas/empresa23.png",
  "/empresas/empresa24.png",
];

export default function CarrosselEmpresas() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [rightClicked, setRightClicked] = useState(false);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [isAtStart, setIsAtStart] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      
      // Verifica se está no início
      setIsAtStart(scrollLeft <= 10);
      
      // Verifica se está no final
      setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 10);
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
      setTimeout(checkScroll, 300);
    }
  };

  const scrollRight = () => {
    setRightClicked(true);
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
      setTimeout(checkScroll, 300);
    }
  };

  const allLogos = [...logosTop, ...logosBottom];

  return (
    <section className="py-16 relative">
      <div className="max-w-[1500px] mx-auto px-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black text-center mb-12">
          Marcas que confiam no nosso trabalho
        </h2>

        {/* CARROSSEL */}
        <div className="relative">
          {/* Botão esquerda */}
          {rightClicked && !isAtStart && (
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-300 hover:bg-blue-600 text-white p-2 rounded-full shadow-lg z-20"
            >
              <CgChevronLeft className="text-2xl" />
            </button>
          )}

          {/* Área de scroll */}
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-8 overflow-x-auto scroll-smooth px-10"
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: 'white #f3f4f6'
            }}
          >
            {allLogos.map((logo, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 flex items-center justify-center w-32 h-16 opacity-80 hover:opacity-100 transition mb-3"
              >
                <Image
                  src={logo}
                  alt={`Cliente ${idx}`}
                  width={150}
                  height={80}
                  className="object-contain max-h-full max-w-full"
                />
              </div>
            ))}
          </div>

          {/* Botão direita */}
          {!isAtEnd && (
            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-300 hover:bg-blue-600 text-white p-2 rounded-full shadow-lg z-20"
            >
              <CgChevronRight className="text-2xl" />
            </button>
          )}
        </div>
      </div>

      <style jsx>{`
        div::-webkit-scrollbar {
          height: 8px;
        }
        div::-webkit-scrollbar-track {
          background: #f3f4f6;
        }
        div::-webkit-scrollbar-thumb {
          background: white;
          border-radius: 4px;
        }
        div::-webkit-scrollbar-thumb:hover {
          background: #e5e7eb;
        }
      `}</style>
    </section>
  );
}
