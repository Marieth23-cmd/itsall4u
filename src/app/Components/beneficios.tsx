"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function Beneficios() {
  return (
    <section className="relative w-full h-[700px] flex items-start text-white overflow-hidden">

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
        <div className="max-w-[1500px] mx-auto px-6 pt-32">
          <div className="max-w-3xl">

            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-yellow-400 tracking-[0.3em] uppercase text-sm"
            >
              Valor & Crescimento
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl md:text-4xl font-semibold leading-tight mt-6 mb-6"
            >
              Transformamos marcas em referências no mercado
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-200 leading-relaxed mb-10"
            >
              Trabalhar connosco significa posicionar a sua marca com estratégia,
              elegância e inteligência. Criamos experiências digitais que aumentam
              autoridade, fortalecem a identidade e geram crescimento real e mensurável.
              Não oferecemos apenas marketing — construímos presença e impacto duradouro.
            </motion.p>

            <motion.a
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
              Fale Connosco
            </motion.a>

          </div>
        </div>
      </div>
    </section>
  )
}