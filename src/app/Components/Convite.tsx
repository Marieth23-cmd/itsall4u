"use client";

import { CgArrowLongRight } from "react-icons/cg";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Convite() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const imagens = [
    "/equipa/images1.jpg",
    "/equipa/images2.jpg",
    "/equipa/images3.jpg",
  ];

  useEffect(() => {
    const intervalo = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imagens.length);
    }, 5000);

    return () => clearInterval(intervalo);
  }, [imagens.length]);

  return (
    <section className="max-w-[1500px] mx-auto px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">

        {/* CARD TEXTO */}
        <div className="border border-blue-800/40 rounded-xl p-10 flex flex-col justify-between transition-all duration-300 hover:border-blue-800 hover:bg-blue-50 cursor-pointer">
          <div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl  font-bold text-black mb-4">
              Trabalhe Conosco
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed max-w-md">
              Potencie o seu negócio com estratégia e inovação.
              Conecte-se com uma equipa criativa que transforma desafios em soluções reais.
            </p>

          </div>

          <div className="mt-10 flex items-center gap-3 group cursor-pointer w-fit">
            <span className="text-lg font-medium text-blue-800">
              Entre em contacto
            </span>
            <CgArrowLongRight className="text-3xl text-blue-600 transition-transform duration-300 group-hover:translate-x-2" />
          </div>
        </div>

        {/* CARROSSEL */}
        <div className="flex flex-col gap-6">
          <div className="relative rounded-xl overflow-hidden h-[400px] lg:h-[450px] bg-gray-100">
            <Image
              key={currentIndex}
              src={imagens[currentIndex]}
              alt={`Equipa ${currentIndex + 1}`}
              fill
              className="object-cover rounded-xl transition-opacity duration-700"
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
                    ? "w-8 bg-blue-600"
                    : "w-3 bg-blue-300/40 hover:bg-blue-400"
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
