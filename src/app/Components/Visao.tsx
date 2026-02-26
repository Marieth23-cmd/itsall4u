"use client";
import { motion } from "framer-motion";


export default function Visao() {
  const items = [
    {
      title: "Visão",
      text: "Ser referência em estratégia e comunicação, impulsionando marcas através de inovação e crescimento sustentável."
    },
    {
      title: "Missão",
      text: "Transformar ideias em soluções estratégicas que conectam marcas e pessoas de forma autêntica."
    },
    {
      title: "Valores",
      text: "Estratégia, criatividade, confiança e compromisso orientam cada projeto que desenvolvemos."
    }
  ];

  return (
    <section className="relative py-24 lg:py-32 px-6 bg-[#0c0c0c] overflow-hidden">
      
      {/* Círculos decorativos */}
      <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-yellow-500/10 blur-3xl"></div>
      <div className="absolute top-1/2 right-10 w-72 h-72 rounded-full bg-yellow-400/5 blur-2xl"></div>
      <div className="absolute bottom-10 -right-32 w-64 h-64 rounded-full bg-yellow-500/20 blur-3xl"></div>

      <div className="relative max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-20">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.2 }}
            viewport={{ once: true }}
            className="group"
          >
            {/* Título + seta */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-yellow-400">
                {item.title}
              </h3>
             
            </div>

            {/* Linha dourada */}
            <div className="w-14 h-[2px] bg-yellow-500/80 mb-6 transition-all duration-300 group-hover:w-24"></div>

            {/* Texto */}
            <p className="text-gray-300 leading-relaxed text-4xl md:text-lg">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}