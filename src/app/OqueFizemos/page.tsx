"use client";
import { CgArrowLongRight } from "react-icons/cg";
import Image from "next/image";
import {motion} from "framer-motion"
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { HiOutlineChartBar, HiOutlineGlobeAlt, HiOutlineCode } from 'react-icons/hi';
import { FiVideo } from 'react-icons/fi';
import { MdEvent } from 'react-icons/md';
import { AiOutlineLineChart } from 'react-icons/ai';
import { RiGovernmentLine } from 'react-icons/ri';
import { TfiPalette } from "react-icons/tfi";


const servicos = [
  {
    icone: <HiOutlineChartBar className="w-8 h-8 text-blue-800" />,
    title: "Planeamento Estratégico", 
    description:
      "Desenvolvemos planos personalizados que unem inovação e foco em resultados, aproximando marcas do público certo.",
  },
  { 
    icone: <HiOutlineGlobeAlt className="w-8 h-8 text-blue-800" />,
    title: "Comunicação 360°",
     description:
      "Criamos campanhas integradas que conectam marcas e públicos de forma eficaz e impactante.",
  },
  {
   icone: <TfiPalette className="w-8 h-8 text-blue-800" />, 
    title: "Design e Experiências Visuais",
    description:
      "Construímos identidades visuais marcantes e soluções de design aplicadas ao digital e físico, sempre com modernidade.",
  },
  {
    icone: <MdEvent className="w-8 h-8 text-blue-800" />,
     title: "Eventos & Activação",
    description:
      "Criamos eventos que unem criatividade e organização, transformando interações em experiências memoráveis para as marcas.",
  },
  {
      icone: <FiVideo className="w-8 h-8 text-blue-800" />,
       title: "Media",
      description:
      "Planeamos canais eficazes e gerimos investimentos com inteligência, garantindo visibilidade e retorno sustentável.",
  },
  {
    icone: <AiOutlineLineChart className="w-8 h-8 text-blue-800" />,
    title: "Gestão de Performance",
    description:
      "Desenvolvemos conteúdos e campanhas digitais que geram engajamento, fortalecem comunidades e posicionam marcas.",
  },
  {
    icone: <RiGovernmentLine className="w-8 h-8 text-blue-800" />,
     title: "Comunicação Institucional",
    description:
      "Desenvolvemos estratégias de comunicação que fortalecem a imagem e a reputação das marcas institucionais.",
  },
  {
   icone: <HiOutlineCode className="w-8 h-8 text-blue-800" />, 
    title: "Desenvolvimento Web",
    description:
      "Desenvolvemos conteúdos e campanhas digitais que geram engajamento, fortalecem comunidades e posicionam marcas.",
  },
];
    

const trabalhos = [
  {
    image: "/services/servico1.jpg",
  },
  {
    image: "/services/servico2.jpg",
  },
  {
    image: "/services/servico3.jpg",
  },
  {
    image: "/services/servico4.jpg",
  },
  {
    image: "/services/servico5.jpg",
  },
  {
    image: "/services/servico6.jpg",
  },
  {
    image: "/services/servico7.jpg",
  },
  {
    image: "/services/servico8.jpg",
  },
];
export default function OQueFazemos() {
  return (
   
<div className="bg-white">
      <Header />

      {/* HERO */}
      <section className="pt-36 pb-12 px-6 max-w-[1500px] mx-auto text-center">
        <div className="max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#0F172A]"
          >
            Serviços
          </motion.h1>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="pb-12 lg:pb-12 px-6 max-w-[1500px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {servicos.map((item, index) => (
           <motion.div
              key={index}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="group p-8 rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:shadow-lg"
            >

              <div className="mb-6 text-blue-800 transition-transform duration-300 group-hover:scale-110">
                {item.icone}
              </div>

              <h3 className="text-lg md:text-xl font-semibold mb-4 text-[#0F172A] tracking-tight">
                {item.title}
              </h3>

              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

     <section className=" py-14 lg:py-20 px-6">
  <div className="max-w-[1500px] mx-auto">

    <div className="text-center max-w-2xl mx-auto mb-12">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#0F172A] mb-4">
        Trabalhos Recentes
      </h2>
      <p className="text-gray-600 text-base md:text-lg">
        Projetos que refletem estratégia, criatividade e impacto real.
      </p>
    </div>

    <div className="overflow-x-auto overflow-y-hidden scrollbar-hide">
      <div className="flex gap-4 snap-x snap-mandatory">

        {trabalhos.map((item, index) => (
          <div
            key={index}
            className="relative min-w-[250px] md:min-w-[400px] h-[320px] md:h-[560px] snap-center rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.02]"
          >
            <Image
              src={item.image}
              alt={`Trabalho ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}

        <div className="relative min-w-[200px] md:min-w-[260px] h-[280px] md:h-[520px] flex items-center justify-center">
          <a
            href="/portfolio"
            className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-blue-800 flex items-center justify-center text-white text-3xl hover:scale-105 transition"
          >
            +
          </a>
        </div>

      </div>
    </div>

  </div>
</section>



      {/*CTA*/}
<section className="pb-16 px-6">
  <div className="max-w-[1500px] mx-auto rounded-2xl border border-gray-200 flex flex-col-reverse lg:flex-row overflow-hidden">

    <div className="flex-1 px-8 lg:px-20 py-14 flex flex-col justify-center bg-white">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#0F172A] mb-6 leading-tight">
        Parcerias estratégicas que impulsionam crescimento.
      </h2>

      <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-xl mb-10">
        Trabalhamos lado a lado com marcas que procuram consistência,
        posicionamento forte e crescimento sustentável através de
        estratégia e execução criativa.
      </p>

      <div className="mt-6 inline-flex items-center gap-3 group cursor-pointer w-fit">
        <a href="/enviarEmail" className="text-lg font-medium text-blue-800">
          Entre em contacto
        <CgArrowLongRight className="text-2xl text-blue-600 transition-transform duration-300 group-hover:translate-x-2" />  
        </a>
      </div>
    </div>

    <div className="w-full lg:flex-1 relative h-[280px] sm:h-[320px] lg:h-[550px] bg-[#F8FAFC]">
      <Image
        src="/services/planeamento.png"
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