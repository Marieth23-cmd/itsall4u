"use client"
import { useTranslations } from "next-intl"
import { CgArrowLongRight } from "react-icons/cg"
import { motion } from "framer-motion"
import { Link } from "@/navigation"

 const MonoLink = motion.create(Link)

export default function Apresentacao() {

  const t= useTranslations("Apresentacao")

  return (
    <section className="w-full flex justify-center pt-8">
      <div className="w-full max-w-7xl mx-auto px-6 ">

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
            className="text-2xl lg:text-3xl text-black font-medium leading-tight mb-6"
          >
            {t("title")}
          </motion.h2>

          {/* TEXTO */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base lg:text-lg text-gray-700 mb-6 w-full max-w-7xl"
          >
           {t("texto")}
          </motion.p>

          {/* BOTÃO */}
          <MonoLink
            href="/OqueFizemos"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ x: 5 }}
            className="
              group inline-flex items-center gap-3
              text-yellow-400 font-medium text-base lg:text-lg
              hover:text-yellow-500 transition
            "
          >
            {t("link")}
            <CgArrowLongRight className="text-2xl transition-transform duration-300 group-hover:translate-x-2" />
          </MonoLink>

        </motion.div>
      </div>
    </section>
  )
}