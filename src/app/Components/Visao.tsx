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
    <section className="bg-[#27375c] py-20 lg:py-32 px-6 lg:h-[30rem]">
      <div className="max-w-[1300px] mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">

          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-white max-w-md"
            >
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 tracking-tight">
                {item.title}
              </h3>

              <div className="w-12 h-[2px] bg-white/20 mb-6"></div>

              <p className="text-white/70 leading-relaxed text-base md:text-lg">
                {item.text}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
