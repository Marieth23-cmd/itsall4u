"use client";
import { useTranslations } from "next-intl";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { CgChevronLeft, CgChevronRight } from "react-icons/cg";

const allLogos = [
  "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772017961/empresawongo_p50zbs.png",
  "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772017959/empresawaa_d3jgar.png",
  "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772199298/empresaubri_wewwax.png",
  "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772017953/empresasuper_vhceyu.png",
  "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772017952/empresarevitur_llqcf2.png",
  "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772017952/empresarise_u2865f.png",
  "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772017949/empresamuseo_zekqan.png",
  "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772017949/empresamakey_hmhfeg.png",
  "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772017943/empresahidraulica_oc9yf9.png",
  "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772017942/empresageo_vvyjkk.png",
  "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772017941/empresafarma_xcb9om.png",
  "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772017940/empresaequilibrium_rx7kvz.png",
  "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772198994/empresacabship_gjysce.png",
  "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772017936/empresabwizer_gnabrt.png",
  "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772017932/empresabet_zthppi.png",
  "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772017929/empresa1_rlaokj.png",
  "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772017930/empresaalianca_e8q5w7.png",
  "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772017929/empresaangola_mgzcal.png",
  "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772731028/LOGO_PRETO_f3lsaj.png",
  "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772014945/oddm_tz1zoz.png"

];

export default function CarrosselEmpresas() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const t= useTranslations("Empresas")

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setIsAtStart(scrollLeft <= 10);
      setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 10);
    }
  };

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
    setTimeout(checkScroll, 300);
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
    setTimeout(checkScroll, 300);
  };

  return (
    <section className=" py-16 relative bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl lg:text-3xl font-medium text-black text-center mb-10">
          {t("title")}
        </h2>

        <div className="relative">
          {/* Botão esquerda */}
          {!isAtStart && (
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-100 text-black rounded-full md:p-4 p-3  z-10 transition shadow-lg hover:shadow-xl"
            >
              <CgChevronLeft className="text-2xl" />
            </button>
          )}

          {/* Área de scroll */}
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-4 overflow-x-auto scroll-smooth px-4 hide-scrollbar py-2"
          >
            {allLogos.map((logo, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-20 h-20 lg:w-24 lg:h-24 flex items-center justify-center filter grayscale 
                opacity-70 hover:grayscale-0  transition bg-black/5 rounded-full lg:p-4 p-2 "
              >
                <Image
                  src={logo}
                  alt={`Cliente ${idx + 1}`}
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
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white  text-black p-2 rounded-full shadow-md z-10 transition"
            >
              <CgChevronRight className="text-2xl" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}