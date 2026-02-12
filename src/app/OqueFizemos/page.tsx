'use client';
import { CgArrowLongRight } from "react-icons/cg";
import Image from "next/image";
import {motion} from "framer-motion"
import Footer from "../Components/Footer";
import Header from "../Components/Header";



const servicos = [
  {
    number: "01",
    title: "Planeamento Estratégico",
    image: "https://thumbs.dreamstime.com/b/reuni%C3%A3o-de-neg%C3%B3cio-apresenta%C3%A7%C3%A3o-das-habilidades-da-equipe-do-escrit%C3%B3rio-gest%C3%A3o-empresa-e-ilustra%C3%A7%C3%A3o-vetor-planeamento-d-140269961.jpg?w=576",
    description:
      "Desenvolvemos planos personalizados que unem inovação e foco em resultados, aproximando marcas do público certo.",
  },
  {
    number: "02",
    title: "Comunicação 360°",
    image: "https://tse1.mm.bing.net/th/id/OIP.xUVnHVXozQk4yhTxuz9fWAHaDt?pid=Api&P=0&h=220",
    description:
      "Criamos campanhas integradas que conectam marcas e públicos de forma eficaz e impactante.",
  },
  {
    number: "03",
    title: "Design e Experiências Visuais",
    image: "https://visualdesignjourney.com/wp-content/uploads/2023/06/studiologo.png",
    description:
      "Construímos identidades visuais marcantes e soluções de design aplicadas ao digital e físico, sempre com modernidade.",
  },
  {
    number: "04",
    title: "Eventos & Activação",
    image: "https://media.licdn.com/dms/image/D4D12AQEt3l6ggPOniA/article-cover_image-shrink_720_1280/0/1683018733962?e=2147483647&v=beta&t=Mk_Ib8RIRbzFtRJvDHkrakJqOimQ_G97emG9MYMcGtA",
    description:
      "Criamos eventos que unem criatividade e organização, transformando interações em experiências memoráveis para as marcas.",
  }, 
  {
    number: "05",
    title: "Media",
    image: "https://tse2.mm.bing.net/th/id/OIP.b5NRz8qjrw4BC60xrlRQpgHaEK?pid=Api&P=0&h=220",
    description:
      "Planeamos canais eficazes e gerimos investimentos com inteligência, garantindo visibilidade e retorno sustentável.",
  },
  {
    number: "06",
    title: "Gestão de Performance",
    image: "https://tse4.mm.bing.net/th/id/OIP.7xm8e-KoNIyIh9zGFGPi3wHaD5?pid=Api&P=0&h=220",
    description:
      "Desenvolvemos conteúdos e campanhas digitais que geram engajamento, fortalecem comunidades e posicionam marcas.",
  },
  {
    number: "07",
    title: "Comunicação Institucional",
    image: "https://tse4.mm.bing.net/th/id/OIP.iWsMjE5ZjRQc9HLxPG3qkgHaFj?pid=Api&P=0&h=220",
    description:
      "Desenvolvemos estratégias de comunicação que fortalecem a imagem e a reputação das marcas institucionais.",
  },
 
  {
    number: "08",
    title: "Desenvolvimento Web",
    image: "https://tse3.mm.bing.net/th/id/OIP.lzEqG1IXHCP-IldbwzNX7wHaE7?pid=Api&P=0&h=220",
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
    image: "/services/servico4.jpg",
  },
  {
    image: "/services/servico4.jpg",
  },
  {
    image: "/services/servico4.jpg",
  },
  {
    image: "/services/servico4.jpg",
  },
];
export default function OQueFazemos() {
  return (
    <div>
      <Header />

    
      <section className="pt-40 pb-24 px-6 max-w-[1500px] mx-auto text-center">
        <div className="max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-4xl font-bold  text-black"
          >
            Criamos estratégia, design e comunicação
            <br /> para marcas que querem crescer.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-gray-600 mt-6 text-lg"
          >
            Soluções inteligentes, execução criativa e foco absoluto em resultados.
          </motion.p>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          {servicos.map((item: { number: string; title: string; image: string; description: string }, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group border-b border-gray-200 pb-10"
            >
              <span className="text-6xl font-light text-gray-200 group-hover:text-black transition">
                {item.number}
              </span>

              <h3 className="text-2xl font-medium mt-4 mb-4 text-black">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
      
{/* TRABALHOS RECENTES - STACK HORIZONTAL */}
<section className="py-32 px-6 bg-white">
  <div className="max-w-[1400px] mx-auto">

    <h2 className="text-3xl md:text-4xl font-semibold mb-20 text-center text-[#0F172A]">
      Trabalhos Recentes
    </h2>

    <div className="relative h-[500px] md:h-[800px]">

      <div className="flex items-center h-full overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide">

        {trabalhos.map((item, index) => (
          <div
            key={index}
            className={`
              relative 
              min-w-[280px] 
              md:min-w-[500px] 
              h-[400px] 
              md:h-[700px] 
              snap-center
              rounded-2xl 
              overflow-hidden 
              shadow-xl
              transition-transform duration-500
              hover:scale-[1.02]
              ${index !== 0 ? "-ml-20 md:-ml-40" : ""}
            `}
          >
            <Image
              src={item.image}
              alt={`Trabalho ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}

        {/* ÚLTIMO CARD - BOTÃO PORTFÓLIO */}
        <div className="relative min-w-[200px] md:min-w-[300px] h-[400px] md:h-[700px] -ml-20 md:-ml-40 flex items-center justify-center">
          <a
            href="/portfolio"
            className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-blue-900 flex items-center justify-center text-white text-3xl shadow-lg hover:scale-110 transition duration-300"
          >
            +
          </a>
        </div>

      </div>
    </div>

  </div>
</section>


      
      <section className="mb-12 px-6">
  <div className="max-w-[1500px] mx-auto rounded-lg overflow-hidden border border-gray-200 flex flex-col-reverse lg:flex-row">

    {/* TEXTO */}
    <div className="flex-1 bg-white px-12 lg:px-20 py-20 flex flex-col justify-center">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#0F172A] mb-6 leading-tight">
        Parcerias estratégicas que impulsionam crescimento.
      </h2>

      <p className="text-gray-600 text-lg leading-relaxed max-w-xl mb-10">
        Trabalhamos lado a lado com marcas que procuram consistência,
        posicionamento forte e crescimento sustentável através de estratégia e execução criativa.
      </p>
      <div className="mt-10 flex items-center gap-3 group cursor-pointer w-fit">
            <span className="text-lg font-medium text-blue-800">
              Entre em contacto
            </span>
            <CgArrowLongRight className="text-3xl text-blue-600 transition-transform duration-300 group-hover:translate-x-2" />
          </div>
      
    </div>

    {/* IMAGEM */}
    <div className="flex-1 relative h-[450px] lg:h-[600px] bg-[#F1F5F9]">
      <Image
        src="/services/planeamento.png"
        alt="Planeamento estratégico"
        fill
        className="object-cover"
      />
    </div>

  </div>
</section>



      <Footer />
    </div>
  );
}