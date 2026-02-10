"use client";
import { useEffect, useState } from "react";

const slides = [
  {
    type: "image",
    src: "/equipa/imageshero1.jpg",
    title: "Estratégia que impulsiona marcas",
    subtitle: "Criatividade, tecnologia e visão para gerar crescimento real.",
  },
  {
    type: "video",
    src: "/equipa/videoHero.mp4",
    title: "Criatividade com propósito",
    subtitle: "Design e comunicação pensados para resultados.",
  },
  {
    type: "image",
    src: "/equipa/hero2.jpg",
    title: "Resultados que fazem a diferença",
    subtitle: "Transformamos desafios em soluções eficazes.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-black">

      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000
            ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"}
          `}
        >
          {/* BACKGROUND */}
          {slide.type === "image" ? (
            <div
              className="absolute inset-0 bg-cover bg-center animate-kenBurns"
              style={{ backgroundImage: `url(${slide.src})` }}
            />
          ) : (
            <video
              src={slide.src}
              autoPlay
              loop
              muted
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/50" />

          {/* CONTEÚDO */}
          <div className="relative z-10 h-full flex items-center px-8 md:px-20">
            <div className="max-w-2xl text-white animate-fadeUp">
              <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-4">
                {slide.title}
              </h1>
              <p className="text-lg text-gray-200 mb-8">
                {slide.subtitle}
              </p>

              <button className="px-6 py-3 bg-white text-black rounded-full font-medium hover:scale-105 transition">
                Fale Connosco →
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* PAGINATION */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition
              ${current === index ? "bg-white scale-125" : "bg-white/50"}
            `}
          />
        ))}
      </div>

      {/* ANIMAÇÕES */}
      <style jsx>{`
        @keyframes kenBurns {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.1);
          }
        }
        .animate-kenBurns {
          animation: kenBurns 14s ease-in-out infinite alternate;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeUp {
          animation: fadeUp 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
