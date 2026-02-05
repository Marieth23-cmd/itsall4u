"use client";

import Image from "next/image";

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
  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{ background: "var(--background)" }}
    >
      {/* FADES LATERAIS */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#0b0350] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#0b0350] to-transparent z-10" />

      <div className="max-w-[1500px] mx-auto flex flex-col gap-12 px-4">
        <h1 className="text-center text-4xl font-extrabold text-white">
          Empresas que confiam no nosso trabalho
        </h1>

        {/* LINHA SUPERIOR */}
        <div className="group flex overflow-hidden">
          <div className="flex gap-12 px-8 animate-scrollLeft group-hover:[animation-play-state:paused]">
            {[...logosTop, ...logosTop].map((logo, idx) => (
              <div
                key={idx}
                 className="
                            flex-shrink-0 w-32 h-16
                           
                            rounded-lg
                            flex items-center justify-center
                            grayscale hover:grayscale-0
                            transition-all duration-500
                            hover:brightness-110
                            px-8
                          "
              >
                <Image
                  src={logo}
                  alt={`Logo ${idx}`}
                  width={120}
                  height={64}
                  className="object-contain w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>

        {/* LINHA INFERIOR */}
        <div className="group flex overflow-hidden">
          <div className="flex gap-12 px-8 animate-scrollRight group-hover:[animation-play-state:paused]">
            {[...logosBottom, ...logosBottom].map((logo, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-32 h-16 grayscale hover:grayscale-0 transition-all duration-500 bg-white/10 rounded-full flex items-center justify-center hover:brightness-110 px-8"
              >
                <Image
                  src={logo}
                  alt={`Logo ${idx}`}
                  width={120}
                  height={64}
                  className="object-contain w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ANIMAÇÕES */}
      <style jsx>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scrollRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scrollLeft {
          animation: scrollLeft 45s linear infinite;
        }

        .animate-scrollRight {
          animation: scrollRight 45s linear infinite;
        }
      `}</style>
    </section>
  );
}
