"use client"

import { CgArrowLongRight } from "react-icons/cg"
import { motion } from "framer-motion"

export default function Apresentacao() {
  return (
    <section className="w-full flex justify-center py-16">
      <div className="w-full max-w-[1500px] mx-auto px-6 md:px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full"
        >
          {/* TÍTULO */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-3xl lg:text-4xl text-black font-semibold leading-tight mb-6"
          >
            Quem Somos
          </motion.h2>

          {/* TEXTO */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg lg:text-xl text-gray-700 mb-6 w-full max-w-6xl"
          >
            Somos uma empresa de marketing dedicada a conectar marcas e pessoas de forma criativa e eficaz. 
            Com uma equipa apaixonada e experiente, transformamos ideias em estratégias de sucesso, 
            ajudando empresas a crescerem, fortalecerem a sua presença digital e conquistarem novos públicos. 
            Acreditamos na inovação, na análise inteligente de dados e na comunicação personalizada para 
            oferecer resultados concretos e duradouros.
          </motion.p>

          {/* BOTÃO */}
          <motion.a
            href="/OqueFizemos"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ x: 5 }}
            className="
              group inline-flex items-center gap-3
              text-yellow-400 font-medium text-lg lg:text-xl
              hover:text-yellow-800 transition
            "
          >
            Conheça nossos serviços
            <CgArrowLongRight className="text-2xl transition-transform duration-300 group-hover:translate-x-2" />
          </motion.a>

        </motion.div>
      </div>
    </section>
  )
}