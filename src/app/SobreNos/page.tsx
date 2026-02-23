import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Image from "next/image"

const equipa=[

  {
    image:"/equipa/Nelson.png",
    name:"Nelson Correia",
    funcao:"CEO"
  },
 {
    image:"/equipa/Jelson.png",
    name:"Jelson Quizunda",
    funcao:"Director Criativo"
  },
   {
    image:"/equipa/Jorge.png",
    name:"Jorge Miranda",
    funcao:"Design Gráfico"
  },
   {
    image:"/equipa/Alicia.png",
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

   <div className="relative w-full h-[80vh] lg:h-[90vh]">
  <div className="relative h-[80vh] md:h-[90vh] w-full">
    <Image
      src="/equipa/hero2.jpg"
      alt="Equipe"
      fill
      className="object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
    <div className="absolute inset-0 flex items-center justify-center md:justify-start px-6 md:px-20">
      <div className="max-w-full md:max-w-3xl text-center md:text-left py-10 md:py-0">
        <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white leading-snug mb-4">
          Somos uma agência criativa moderna e estratégica
        </h1>
        <p className="text-white/90 text-sm sm:text-base md:text-lg mb-6 max-w-md mx-auto md:mx-0">
          Estratégia, design e comunicação para marcas que procuram crescimento sustentável.
        </p>
        <a href="/enviarEmail" className="px-6 py-3 bg-white text-black rounded-full font-medium hover:scale-105 transition">
          Fale Connosco →
        </a>
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
    <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl leading-tight text-black mb-6">
      NÓS SOMOS O PARCEIRO CERTO PARA A SUA MARCA
    </h1>

    <p className="text-lg leading-relaxed text-gray-600 max-w-xl">
      Nós combinamos pensamento estratégico com execução criativa para entregar resultados mensuráveis. 
      Nossa equipa é especializada em criar experiências de marca que impactam audiências e geram crescimento.
    </p>
  </div>

</div>



{/* Equipa */}
<div className="max-w-[1500px] mx-auto py-14 lg:py-20 px-6">

  <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl leading-tight text-black mb-8">
    Conheça Nossa Equipa
  </h1>
  <p className="text-gray-600 max-w-xl leading-relaxed mb-10 ">
  Somos uma equipa multidisciplinar movida por estratégia,
  criatividade e propósito. Actuamos em Angola há quase três anos,
  desenvolvendo projetos que conectam marcas e pessoas de forma
  autêntica e impactante.
</p>


  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

    {asEquipa.map((member, idx) => (
      <div
        key={idx}
        className="group"
      >

        {/* Imagem */}
        <div className="relative h-[450px] w-full lg:h-[600px] rounded-2xl overflow-hidden">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Texto */}
        <div className="mt-6 flex items-center ">
          <div>
            <p className="font-semibold text-lg text-black">
              {member.name}
            </p>
            <p className="text-sm text-blue-800">
              {member.funcao}
             
            </p> 
            <span className="text-blue-600 text-3xl -ml-[1px] transition-transform duration-300 group-hover:translate-x-2">
            →
          </span>
          </div>

          {/* Seta azul longa */}
          
        </div>

      </div>
    ))}

  </div>
</div>



      <Footer />
    </section>
  );
}