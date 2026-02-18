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
    <section className="bg-blue-800 py-14 lg:py-20 px-12">
      <div className="max-w-[1500px] mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-white"
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                {item.title}
              </h3>

              <p className="text-white/80 leading-relaxed text-base md:text-lg">
                {item.text}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
