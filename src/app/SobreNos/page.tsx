import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Image from "next/image"


export default function SobreNos() {
  return (
    <section>
      <Header />

      {/* HERO */}
      <div className="relative w-full">
        <div className="relative h-[50vh] md:h-[70vh] w-full">
          <Image
            src="/equipa/hero2.jpg"
            alt="Equipe"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />

          <div className="absolute inset-0 flex items-center justify-center md:justify-start px-6 md:px-20">
            <div className="max-w-3xl text-center md:text-left">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white leading-tight mb-4">
                Somos uma empresa dedicada a oferecer soluções inovadoras e de alta qualidade
              </h1>
              <p className="text-white/90 text-base md:text-lg mb-6">
                Trabalhamos com estratégia, design e comunicação para marcas que procuram crescimento sustentável e posicionamento forte.
              </p>
              <a href="/Contacto" className="px-6 py-3 bg-white text-black rounded-full font-medium hover:scale-105 transition">
                Fale Connosco →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* CONTEÚDO */}
      <div className="max-w-[1500px] text-gray-700 flex flex-col lg:flex-row gap-12 items-center mx-auto py-20">

  <div className="w-full lg:w-1/2">
    <video
      src="/equipa/videoHero.mp4"
      muted
      autoPlay
      loop
      playsInline
      className="w-full h-[300px] lg:h-[450px] object-cover rounded-2xl"
    />
  </div>

  <div className="w-full lg:w-1/2  items-center">
  <h1 className="py-24 font-bold text-2xl md:text-3xl lg:text-4xl">NÓS SOMOS O PARCEIRO CERTO PARA A SUA MARCA </h1>
    <p className="text-lg leading-relaxed">
      Nós combinamos pensamento estratégico com execução criativa para entregar resultados mensuráveis. 
      Nossa equipa é especializada em criar experiências de marca que impactam audiências e geram crescimento.
    </p>
  </div>
</div>



  {/*Equipa*/}
  <div className="mx-auto ">
    <h1 className="text-black">Conheça Nossa Liderança</h1>
  </div>


      <Footer />
    </section>
  );
}