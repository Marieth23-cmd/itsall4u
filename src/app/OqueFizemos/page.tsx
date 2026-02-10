import Image from "next/image";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Empresas from "../Components/Empresas";


const servicos = [
  {
    title: "Branding & Identidade",
    image: "/servicos/servico1.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
  },
  {
    title: "Marketing Digital",
    image: "/servicos/servico2.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
  },
  {
    title: "Design & Criatividade",
    image: "/servicos/servico3.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
  },
  {
    title: "Web & Tecnologia",
    image: "/servicos/servico4.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
  },
  {
    title: "Web & Tecnologia",
    image: "/servicos/servico4.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
  },
  {
    title: "Web & Tecnologia",
    image: "/servicos/servico4.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
  },
  {
    title: "Web & Tecnologia",
    image: "/servicos/servico4.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
  },
  {
    title: "Web & Tecnologia",
    image: "/servicos/servico4.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
  },
];

export default function OQueFazemosCards() {
  return (

    <div>  
      <Header/>
      <section className="py-24">
      <div className="max-w-[1500px] mx-auto px-6">

        {/* TÍTULO */}
        <div className="mb-16 max-w-2xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
            O que fazemos
          </h2>
          <p className="text-gray-600 text-lg">
            Criamos soluções estratégicas e criativas para marcas que querem
            crescer, comunicar melhor e gerar impacto real.
          </p>
        </div>

        {/* CARDS */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-10
          "
        >
          {servicos.map((item, index) => (
            <div
              key={index}
              className="
                group
                rounded-xl
                overflow-hidden
                bg-white
                shadow-sm
                hover:shadow-xl
                transition
              "
            >
              {/* IMAGEM */}
              <div className="relative h-[220px] w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                />
              </div>

              {/* CONTEÚDO */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-black mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
      <Empresas/>
    </section>
    <Footer />
    </div>
  
  );
}
