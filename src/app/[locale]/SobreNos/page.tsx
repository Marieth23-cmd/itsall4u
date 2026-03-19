"use client"
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Image from "next/image"
import Visao from "../../Components/Visao";
import { motion } from "framer-motion"
import { useTranslations } from "next-intl";






export default function SobreNos() 
{
  
  
  const t = useTranslations("SobreNos")
   const equipaData= t.raw("equipa") as Array <{name:string , funcao:string}>
  
  const equipa=[

  {
    image:"/equipa/Nelson.png",
    ...equipaData[0]
  },
 {
    image:"https://res.cloudinary.com/dhpa1juyr/image/upload/v1772014954/Jelson_vkgii9.jpg",
    ...equipaData[1]
  },
   {
    image:"https://res.cloudinary.com/dhpa1juyr/image/upload/v1772014954/Jorge_lrfrn2.jpg",
    ...equipaData[2]
  },
   {
    image:"https://res.cloudinary.com/dhpa1juyr/image/upload/v1772111593/Alicia_zzjgz2.jpg",
    ...equipaData[3]
  },
  {
    image:"/equipa/nicolas.png",
    ...equipaData[4]
  }
  
]
const asEquipa=[...equipa]




  return (
    <section>
      <Header />

   <div className="relative w-full h-[80vh] lg:h-[60vh] ">
  <div className="relative h-[80vh] md:h-[60vh] w-full">
    <Image
      src="https://res.cloudinary.com/dhpa1juyr/image/upload/v1773928695/Sobre_no%CC%81s_zhzghy.webp"
      alt="Equipe"
      fill
      className="object-cover"
    />
    <div className="absolute inset-0 flex items-center">
  <div className="max-w-7xl mx-auto px-6 w-full">
    <div className="max-w-2xl  md:text-left">

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-snug mb-4">
        {t("groupHero.title")}
      </h1>

      <p className="text-gray-200 text-base  md:text-lg mb-6">
       {t("groupHero.subtitle")}
      </p>

      

    </div>
  </div>
</div>
</div>
    
</div>

    




     {/* CONTEÚDO */}
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16 items-center py-12 lg:py-16 px-6">

  {/* VIDEO */}
  <div className="w-full lg:w-1/2">
    <div className="relative w-full aspect-video overflow-hidden rounded-2xl">
      <video
        src="/equipa/showreel.mp4"
        controls
        muted
        autoPlay
        loop
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
  </div>

  {/* TEXTO */}
  <div className="w-full lg:w-1/2 flex flex-col justify-center">
    <h1 className="font-medium text-2xl md:text-3xl lg:text-3xl leading-tight text-black mb-6">
       {t("group2.title")}
    </h1>

    <p className="text-base lg:text-lg leading-relaxed text-gray-700 max-w-xl">
        {t("group2.subtitle")}
    </p>
  </div>

</div>

  <Visao/>
 <section className="max-w-7xl mx-auto py-12 lg:py-16 px-6 overflow-hidden">

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="font-medium text-2xl md:text-3xl lg:text-3xl leading-tight text-black mb-6"
      >
        {t("group3.title")}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-gray-700 max-w-xl leading-relaxed mb-10 text-base lg:text-lg"
      >
        {t("group3.subtitle")}
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {asEquipa.map((member, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="group"
          >
            <div className="relative h-[450px] w-full lg:h-[550px] rounded-l-lg overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="mt-6">
              <p className="font-medium text-base lg:text-lg text-gray-700">
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