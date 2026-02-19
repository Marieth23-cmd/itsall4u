"use client";

import Image from "next/image";

const logos = [
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
  "/empresas/empresa21.png",
  "/empresas/empresa22.png",
  "/empresas/empresa23.png",
  "/empresas/empresa24.png",
];

export default function FaixaLogos() {
  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-6">

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center text-[#0F172A] mb-14">
          Marcas que confiam no nosso trabalho
        </h2>

        <div className="relative w-full overflow-hidden">

          <div className="marquee">

            <div className="marquee-track">
              {[...logos, ...logos].map((logo, idx) => (
                <div
                  key={idx}
                  className="logo-item"
                >
                  <Image
                    src={logo}
                    alt={`Cliente ${idx}`}
                    width={160}
                    height={80}
                    className="object-contain max-h-full"
                  />
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>

      <style jsx>{`
        .marquee {
          overflow: hidden;
          position: relative;
          width: 100%;
        }

        .marquee-track {
          display: flex;
          gap: 4rem;
          width: max-content;
          animation: scroll 45s linear infinite;
        }

        .logo-item {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 9rem;
          height: 5rem;
          flex-shrink: 0;
          opacity: 0.6;
          filter: grayscale(100%);
          transition: all 0.3s ease;
        }

        .logo-item:hover {
          opacity: 1;
          filter: grayscale(0%);
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
