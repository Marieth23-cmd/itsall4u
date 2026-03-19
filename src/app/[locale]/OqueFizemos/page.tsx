"use client";
import { CgArrowLongRight } from "react-icons/cg";
import Image from "next/image";
import {motion} from "framer-motion"
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import { HiOutlineChartBar, HiOutlineGlobeAlt, HiOutlineCode } from 'react-icons/hi';
import { FiVideo } from 'react-icons/fi';
import { MdEvent } from 'react-icons/md';
import { AiOutlineLineChart } from 'react-icons/ai';
import { RiGovernmentLine } from 'react-icons/ri';
import { TfiPalette } from "react-icons/tfi";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";


    

const trabalhos = [
  {
    image: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772014973/servico1_ujxll4.png",
  },
  {
    image: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772014974/servico2_zwjfap.png",
  },
  {
    image: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772014948/Natal_-_Bwizer_gbplhw.png",
  },
  {
    image: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772014970/portalianca2_umeqgj.png",
  },
  {
    image: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772117185/servico3_rlv2an.png",
  },
  {
    image: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772117185/portalianca6_eswn0i.png",
  },
  {
    image: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772117394/conhecerangola_fq6mha.jpg",
  },
  {
    image: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1771949559/portflyhotel4_rqpc4j.png",
  },
];
export default function OQueFazemos() {
  const t = useTranslations("OqueFizemos")

  const servicosData = t.raw("servicos") as Array <{title:string , description:string}>


const servicos = [
  {
    icone: <HiOutlineChartBar className="w-8 h-8 text-yellow-500" />,
    ...servicosData[0]
  },
  { 
    icone: <HiOutlineGlobeAlt className="w-8 h-8 text-yellow-500" />,
    ...servicosData[1]
  },
  {
   icone: <TfiPalette className="w-8 h-8 text-yellow-500" />, 
    ...servicosData[2]
  },
  {
    icone: <MdEvent className="w-8 h-8 text-yellow-500" />,
    ...servicosData[3]
  },
  {
      icone: <FiVideo className="w-8 h-8 text-yellow-500" />,
      ...servicosData[4]
  },
  {
    icone: <AiOutlineLineChart className="w-8 h-8 text-yellow-500" />,
    ...servicosData[5]
  },
  {
    icone: <RiGovernmentLine className="w-8 h-8 text-yellow-500" />,
     ...servicosData[6]
  },
  {
   icone: <HiOutlineCode className="w-8 h-8 text-yellow-500" />, 
   ...servicosData[7]
  },
];
  return (
   
<div className="bg-white">
      <Header />

      {/* HERO */}
      <section className="pt-28 lg:pt-36 pb-12 px-6 max-w-7xl mx-auto text-center">
        <div className="max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="text-2xl lg:text-3xl font-medium text-[#0F172A]"
          >
            {t("title")}
          </motion.h1>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {servicos.map((item, index) => (
           <motion.div
              key={index}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="group p-4 rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:shadow-lg "
            >

              <div className="mb-6 text-yellow-400 transition-transform duration-300 group-hover:scale-110">
                {item.icone}
              </div>

              <h3 className="text-base md:text-lg font-medium mb-4 text-[#0F172A] tracking-tight">
                {item.title}
              </h3>

              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

    <section className="py-12 lg:py-16 px-6">
      <div className="max-w-7xl mx-auto">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-2xl mx-auto mb-10"
      >
        <h2 className="text-2xl lg:text-3xl font-medium text-[#0F172A] mb-4">
        {t("group1.title")}
        </h2>
        <p className="text-gray-700 text-base lg:text-lg">
       {t("group1.subtitle")}
        </p>
      </motion.div>

      <div className="relative group">
        <div className="overflow-x-auto overflow-y-hidden scroll-smooth hide-scrollbar cursor-grab active:cursor-grabbing" id="trabalhos-scroll">
        <div className="flex gap-4 snap-x snap-mandatory">

          {trabalhos.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            className="relative min-w-[250px] md:min-w-[400px] h-[320px] md:h-[560px] snap-center rounded-2xl overflow-hidden 
            shadow-lg transition-transform duration-300 hover:scale-[1.02]"
          >
            <Image
            src={item.image}
            alt={`Trabalho ${index + 1}`}
            fill
            className="object-cover"
            />
          </motion.div>
          ))}

          <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="relative min-w-[200px] md:min-w-[260px] h-[280px] md:h-[520px] flex items-center justify-center"
          >
          <a
            href="/portfolio"
            className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-yellow-500 flex items-center justify-center text-white text-3xl hover:scale-105 transition"
          >
            +
          </a>
          </motion.div>

        </div>
        </div>

          {/* Botões navegação - Esquerda e Direita */}
          <button
            onClick={() => document.getElementById('trabalhos-scroll')?.scrollBy({ left: -400, behavior: 'smooth' })}
            className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-10 h-10 rounded-full border border-gray-300 items-center justify-center bg-white hover:bg-gray-50 transition group-hover:opacity-100 opacity-0"
          >
            ←
          </button>

          <button
            onClick={() => document.getElementById('trabalhos-scroll')?.scrollBy({ left: 400, behavior: 'smooth' })}
            className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-10 h-10 rounded-full border border-gray-300 items-center justify-center bg-white hover:bg-gray-50 transition group-hover:opacity-100 opacity-0"
          >
            →
          </button>
        </div>

      </div>
    </section>



      {/*CTA*/}
<section className="pb-16 px-6">
  <div className="max-w-7xl mx-auto rounded-2xl border border-gray-200 flex flex-col-reverse lg:flex-row overflow-hidden">

    <div className="flex-1 px-8 lg:px-20 py-14 flex flex-col justify-center bg-white">
      <h2 className="text-2xl lg:text-3xl font-medium text-[#0F172A] mb-6 leading-tight">
       {t("group2.title")}
      </h2>

      <p className="text-gray-700 text-base lg:text-lg leading-relaxed max-w-xl mb-10">
       {t("group2.subtitle")}
      </p>

       <div className="mt-10 flex items-center gap-3 group cursor-pointer w-fit">
            <Link 
              href="/enviarEmail" 
              className="text-base lg:text-lg font-medium text-yellow-400 transition-colors duration-300 group-hover:text-yellow-500"
            >
             {t("group2.link")}
            </Link>

            <CgArrowLongRight 
              className="text-3xl text-yellow-400 transition-all duration-300 group-hover:translate-x-2 group-hover:text-yellow-500" 
            />
          </div>
    </div>

    <div className="w-full lg:flex-1 relative h-[280px] sm:h-[320px] lg:h-[550px] bg-[#F8FAFC]">
      <Image
        src="https://res.cloudinary.com/dhpa1juyr/image/upload/v1773928695/Parcerias_e0d9gz.webp"
        alt="Planeamento estratégico"
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
    </div>

  </div>
</section>


      <Footer />
    </div>


  
  );
}