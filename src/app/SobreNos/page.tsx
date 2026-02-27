"use client"
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Image from "next/image"
import Visao from "../Components/Visao";
import { motion } from "framer-motion"

const equipa=[

  {
    image:"/equipa/Nelson.png",
    name:"Nelson Correia",
    funcao:"CEO"
  },
 {
    image:"https://res.cloudinary.com/dhpa1juyr/image/upload/v1772014954/Jelson_vkgii9.jpg",
    name:"Jelson Quizunda",
    funcao:"Director Criativo"
  },
   {
    image:"https://res.cloudinary.com/dhpa1juyr/image/upload/v1772014954/Jorge_lrfrn2.jpg",
    name:"Jorge Miranda",
    funcao:"Design Gráfico"
  },
   {
    image:"https://res.cloudinary.com/dhpa1juyr/image/upload/v1772111593/Alicia_zzjgz2.jpg",
    name:"Alicia Vanessa",
    funcao:"Design Gráfico"
  },
  {
    image:"/equipa/nicolas.png",
    name:"Nicolas Diogo",
    funcao:"Desenvolvedor Fullstack"
  }
  
]

const asEquipa=[...equipa]


export default function SobreNos() {
  return (
    <section>
      <Header />

   <div className="relative w-full h-[80vh] lg:h-[60vh]">
  <div className="relative h-[80vh] md:h-[60vh] w-full">
    <Image
      src="https://res.cloudinary.com/dhpa1juyr/image/upload/v1772015814/b1_wmvbtm.jpg"
      alt="Equipe"
      fill
      className="object-cover"
    />
    <div className="absolute inset-0 flex items-center">
  <div className="max-w-[1500px] mx-auto px-6 w-full">
    <div className="max-w-3xl text-center md:text-left">

      <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white leading-snug mb-4">
        Somos uma agência criativa moderna e estratégica
      </h1>

      <p className="text-white/90 text-sm sm:text-base md:text-lg mb-6">
        Estratégia, design e comunicação para marcas que procuram crescimento sustentável.
      </p>

      

    </div>
  </div>
</div>
</div>
    
</div>

    




     {/* CONTEÚDO */}
<div className="max-w-[1500px] mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16 items-center py-14 lg:py-20 px-6">

  {/* VIDEO */}
  <div className="w-full lg:w-1/2">
    <div className="relative w-full aspect-video overflow-hidden rounded-2xl">
      <video
        src="/equipa/showreel.mp4"
        controls
        muted
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
  </div>

  {/* TEXTO */}
  <div className="w-full lg:w-1/2 flex flex-col justify-center">
    <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl leading-tight text-black mb-6">
      NÓS SOMOS O PARCEIRO CERTO PARA A SUA MARCA
    </h1>

    <p className="text-lg lg:text-xl leading-relaxed text-gray-600 max-w-xl">
      Nós combinamos pensamento estratégico com execução criativa para entregar resultados mensuráveis. 
      Nossa equipa é especializada em criar experiências de marca que impactam audiências e geram crescimento.
    </p>
  </div>

</div>

  <Visao/>
 <section className="max-w-[1500px] mx-auto py-14 lg:py-20 px-6 overflow-hidden">

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="font-semibold text-2xl md:text-3xl lg:text-4xl leading-tight text-black mb-8"
      >
        Conheça Nossa Equipa
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-gray-700 max-w-xl leading-relaxed mb-10 text-lg lg:text-xl"
      >
        Somos uma equipa multidisciplinar movida por estratégia,
        criatividade e propósito. Actuamos em Angola há quase três anos,
        desenvolvendo projetos que conectam marcas e pessoas de forma
        autêntica e impactante.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {asEquipa.map((member, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="group"
          >
            <div className="relative h-[450px] w-full lg:h-[600px] rounded-2xl overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="mt-6">
              <p className="font-semibold text-lg lg:text-xl text-black">
                {member.name}
              </p>
              <p className="text-base lg:text-lg text-yellow-400">
                {member.funcao}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

    </section>



      <Footer />
    </section>
  );
}