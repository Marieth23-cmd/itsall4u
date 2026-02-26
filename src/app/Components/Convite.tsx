"use client";

import { CgArrowLongRight } from "react-icons/cg";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Convite() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const imagens = [
    "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772122795/equipa1_ig03u1.png",
    "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772122795/equipa2_o6voqi.png",
    "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772122794/equipa3_w2eoau.png",
    
  ];

  useEffect(() => {
    const intervalo = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imagens.length);
    }, 5000);

    return () => clearInterval(intervalo);
  }, [imagens.length]);

  return (
    <section className="max-w-[1500px] mx-auto px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

        {/* CARD TEXTO */}
        <div className="border border-yellow-100 rounded-xl p-10 flex flex-col justify-between 
        transition-all duration-300 hover:border-yellow-100 hover:bg-yellow-50 cursor-pointer">

          <div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black mb-4">
              Trabalhe Conosco
            </h1>

            <p className="text-gray-700 text-lg lg:text-xl leading-relaxed max-w-md">
              Potencie o seu negócio com estratégia e inovação.
              Conecte-se com uma equipa criativa que transforma desafios em soluções reais.
            </p>
          </div>

          <div className="mt-10 flex items-center gap-3 group cursor-pointer w-fit">
            <a 
              href="/enviarEmail" 
              className="text-lg font-medium text-black transition-colors duration-300 group-hover:text-[#d6b464]"
            >
              Entre em contacto
            </a>

            <CgArrowLongRight 
              className="text-3xl text-yellow-400 transition-all duration-300 group-hover:translate-x-2" 
            />
          </div>
        </div>

        {/* CARROSSEL */}
        <div className="flex flex-col gap-6">
          <div className="relative rounded-xl overflow-hidden w-full h-[500px] lg:h-[650px] bg-gray-100">
            <Image
              key={currentIndex}
              src={imagens[currentIndex]}
              alt={`Equipa ${currentIndex + 1}`}
              fill
              className="object-cover transition-opacity duration-700"
              priority
            />
          </div>

          {/* INDICADORES */}
          <div className="flex justify-center gap-3">
            {imagens.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-yellow-400"
                    : "w-3 bg-black/20 hover:bg-black/40"
                }`}
                aria-label={`Ir para imagem ${index + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}