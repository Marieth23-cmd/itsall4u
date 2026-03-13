"use client"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { motion } from "framer-motion"
import { Link } from "@/navigation"

const MonoLink = motion.create(Link)

export default function Beneficios() {

  const t = useTranslations("Beneficios")
  return (
    <section className="relative w-full min-h-[80dvh] flex items-start text-white overflow-hidden">

      {/* Imagem com leve efeito zoom */}
      <motion.div
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src="https://res.cloudinary.com/dhpa1juyr/image/upload/v1772013470/bene_bvaova.jpg"
          alt="Elegância e Crescimento"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Conteúdo */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6 pt-20 md:pt-32">
          <div className="max-w-3xl">

            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-yellow-400 tracking-[0.3em] uppercase text-sm"
            >
             {t("subtitle")}
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl md:text-3xl font-medium leading-tight mt-6 mb-6"
            >
             {t("title")}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-base md:text-lg text-gray-200 leading-relaxed mb-10"
            >
              {t("texto")}
            </motion.p>

            <MonoLink
              href="/enviarEmail"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block px-10 py-6 border border-yellow-500 
              text-yellow-400 hover:bg-yellow-500 hover:text-black 
              transition-all duration-300 rounded-full"
            >
             {t("button")}
            </MonoLink>

          </div>
        </div>
      </div>
    </section>
  )
}