"use client";
import { useTranslations } from "next-intl";
import { CgArrowLongRight } from "react-icons/cg";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Link } from "@/navigation";



export default function Convite() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const t= useTranslations("Convite")

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
    <section className="max-w-7xl mx-auto px-6 py-12 lg:py-16 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-strech">

        {/* CARD TEXTO */}
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }} // anima sempre que entra, não só 1 vez
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="border border-yellow-100 rounded-xl p-10 flex flex-col justify-between 
                     hover:border-yellow-100 hover:bg-yellow-50 cursor-pointer"
        >
          <div>
            <h1 className="text-2xl lg:text-3xl font-medium text-black mb-4">
              {t("title")}
            </h1>

            <p className="text-gray-700 text-base lg:text-lg leading-relaxed max-w-md">
              {t("subtitle")}
            </p>
          </div>

          <div className="mt-10 flex items-center gap-3 group cursor-pointer w-fit">
            <Link 
              href="/enviarEmail" 
              className="text-lg lg:text-xl font-medium text-yellow-500 transition-colors duration-300 group-hover:text-yellow-500"
            >
              {t("link")}
            </Link>

            <CgArrowLongRight 
              className="text-3xl text-yellow-400 transition-all duration-300 group-hover:translate-x-2" 
            />
          </div>
        </motion.div>

        {/* CARROSSEL */}
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="relative rounded-xl overflow-hidden w-full h-[380px] sm:h-[420px] lg:h-[520px] bg-gray-100">
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
        </motion.div>

      </div>
    </section>
  );
}