import Footer from "@/app/Components/Footer"
import Header from "@/app/Components/Header"
import { notFound } from "next/navigation"
import Image from "next/image"
import { CgArrowLongRight } from "react-icons/cg"

type Props = {
  params: {
    slug: string
  }
}

const empresas = [
  {
    slug: "lucrum-trust",
    nome: "LUCRUM TRUST",
    descricao: "Projetos de branding e website institucional.",
    fotoPerfil: "/CapaEmpresas/lucrum.jpg", 
    trabalhos: [
      "/trabalhosfeitosE/portlucrum1.png",
      "/trabalhosfeitosE/portlucrum2.png",
      "/trabalhosfeitosE/portlucrum3.png",
      "/trabalhosfeitosE/portlucrum4.png",
       "/trabalhosfeitosE/portlucrum5.png",
      "/trabalhosfeitosE/portlucrum6.png",
    ],
    videos: [
      "/video/videolucrum1.mp4"
    ]
  },
  {
    slug: "aipex",
    nome: "AIPEX",
    descricao: "Campanhas estratégicas e marketing digital.",
    fotoPerfil: "/CapaEmpresas/aipex.png",
    trabalhos: [
      "/trabalhosfeitosE/portbwizer6.png",
     "/trabalhosfeitosE/portbwizer2.png",
     "/trabalhosfeitosE/portbwizer3.png",
     "/trabalhosfeitosE/portbwizer5.png",
     "/trabalhosfeitosE/portbwizer4.png",
     "/trabalhosfeitosE/portbwizer1.png",
    ],
    videos: [
     "/video/videolucrum1.mp4"
      
    ]
  },
  {
    nome: "CABSHIP",
    slug: "cabship",
    descricao: "Campanhas estratégicas e marketing digital.",
    fotoPerfil: "/CapaEmpresas/Cabship.png",
    trabalhos: [
      "/trabalhosfeitosE/portbwizer6.png",
     "/trabalhosfeitosE/portbwizer2.png",
     "/trabalhosfeitosE/portbwizer3.png",
     "/trabalhosfeitosE/portbwizer5.png",
     "/trabalhosfeitosE/portbwizer4.png",
     "/trabalhosfeitosE/portbwizer1.png",
    
    ],
    videos: [
     "/video/videolucrum1.mp4"
     
    ]
  },
  {
    nome: "MANGAIS GOLF RESORT",
    slug: "mangais-resort",
    descricao: "Campanhas estratégicas e marketing digital.",
    fotoPerfil: "/CapaEmpresas/mangais.png",
     trabalhos: [
       "/trabalhosfeitosE/portbwizer6.png",
     "/trabalhosfeitosE/portbwizer2.png",
     "/trabalhosfeitosE/portbwizer3.png",
     "/trabalhosfeitosE/portbwizer5.png",
     "/trabalhosfeitosE/portbwizer4.png",
     "/trabalhosfeitosE/portbwizer1.png",
      
    ],
    videos: [
     "/video/videolucrum1.mp4"
     
    ]
  },
  {
    nome: "FARMACLINIC",
    slug: "farmaclinic",
    descricao: "Campanhas estratégicas e marketing digital.",
    fotoPerfil: "/CapaEmpresas/farmaclinic.png",
    trabalhos: [
      "/trabalhosfeitosE/portfarma1.png",
      "/trabalhosfeitosE/portfarma2.png",
      "/trabalhosfeitosE/portfarma3.png",
      "/trabalhosfeitosE/portfarma4.png",
      "/trabalhosfeitosE/portfarma5.png",
      "/trabalhosfeitosE/portfarma6.png",
      
    ],
    videos: [
      "/trabalhosfeitosE/Farmavideo1.mp4",
     
    ]
  },
  {
    nome: "FLYHOTEL",
    slug: "fly-hotel",
    descricao: "Campanhas estratégicas e marketing digital.",
    fotoPerfil: "/CapaEmpresas/flyhotel.png",
   trabalhos: [
      "/trabalhosfeitosE/portflyhotel1.png",
       "/trabalhosfeitosE/portflyhotel2.png",
        "/trabalhosfeitosE/portfly3.png",
         "/trabalhosfeitosE/portflyhotel4.png",
          "/trabalhosfeitosE/portfly5.png",
           "/trabalhosfeitosE/portfly6.png",
        
    ],
    videos: [
      "/video/videoflyhotel.mp4"
    ]
  },
  
  {
  nome: "HIDRAULICA DE ANGOLA",
  slug: "hidraulica-angola",
  descricao: "Desenvolvimento de website institucional.",
  fotoPerfil: "/CapaEmpresas/hidraulicaangola.png",
  website: "https://hidraulicadeangola.com/",
},
 
{
    nome: "ALIANÇA SEGUROS",
    slug: "alianca-seguros",
    descricao: "Campanhas estratégicas e marketing digital.",
    fotoPerfil: "/CapaEmpresas/portalianca6.png",
    trabalhos: [
      "/trabalhosfeitosE/portalianca1.png",
     "/trabalhosfeitosE/portalianca2.png",
     "/trabalhosfeitosE/portalianca3.png",
     "/trabalhosfeitosE/portalianca4.png",
     "/trabalhosfeitosE/portalianca5.png",
     "/trabalhosfeitosE/portalianca6.png",

      
    ],
    videos: [
      "/video/videolucrum1.mp4"
    ]
  },
  {
    nome: "CONHECER ANGOLA",
    slug: "conhecer-angola",
    descricao: "Campanhas estratégicas e marketing digital.",
    fotoPerfil: "/CapaEmpresas/conhecerangola.jpg",
     trabalhos: [
       "/trabalhosfeitosE/portbwizer6.png",
     "/trabalhosfeitosE/portbwizer2.png",
     "/trabalhosfeitosE/portbwizer3.png",
     
     
      
    ],
    videos: [
      "/video/videolucrum1.mp4"
    ]
  },
  {
    nome: "ACADEMIA DE LIDERANÇA E GESTÃO DE LUANDA",
    slug: "academia-luanda",
    descricao: "Campanhas estratégicas e marketing digital.",
    fotoPerfil: "/CapaEmpresas/academia.jpg",
     trabalhos: [
      "/trabalhosfeitosE/portacademia.png",
       "/trabalhosfeitosE/portacademia2.png",
        ],
    videos: [
      "/video/videocademia.mp4"
    ]
  },
  {
    nome: "WHATABOUT AGENCY ANGOLA",
    slug: "waa",
    descricao: "Campanhas estratégicas e marketing digital.",
    fotoPerfil: "/CapaEmpresas/waaa.png",
    videos:
     [
      "/video/videowaaa.mp4",
       "/video/videowaaa.mp4",
        "/video/videowaaa.mp4",
      
    ]
  },
  {
    nome: "BWIZER",
    slug: "bwizer",
    descricao: "Campanhas estratégicas e marketing digital.",
    fotoPerfil: "/CapaEmpresas/Bwizer.png",
     trabalhos: [
     "/trabalhosfeitosE/portbwizer6.png",
     "/trabalhosfeitosE/portbwizer2.png",
     "/trabalhosfeitosE/portbwizer3.png",
     "/trabalhosfeitosE/portbwizer5.png",
     "/trabalhosfeitosE/portbwizer4.png",
     "/trabalhosfeitosE/portbwizer1.png",
      
    ],
    videos: [
      "/video/videolucrum1.mp4"
    ]
  },
  {
    nome: "GEOSURVEYS",
    slug: "geosurveys",
    descricao: "Campanhas estratégicas e marketing digital.",
    fotoPerfil:"/CapaEmpresas/geo.png",
    trabalhos: [
       "/trabalhosfeitosE/portbwizer6.png",
     "/trabalhosfeitosE/portbwizer2.png",
     "/trabalhosfeitosE/portbwizer3.png",
     "/trabalhosfeitosE/portbwizer5.png",
     "/trabalhosfeitosE/portbwizer4.png",
     "/trabalhosfeitosE/portbwizer1.png",
      
    ],
    videos: [
      "/video/videolucrum1.mp4"
    ]
  },
]

export default function EmpresaPage({ params }: Props) {
  const empresa = empresas.find(e => e.slug === params.slug)

  if (!empresa) {
    return notFound()
  }

  return (
    <div >
      <Header />

      {/* HERO COM CAPA */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-[1500px] mx-auto">
         

          {/* Foto + Descrição lado a lado */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Imagem à esquerda */}
            <div className="overflow-hidden rounded-lg shadow-md">
              <Image
                src={empresa.fotoPerfil}
                alt={empresa.nome}
                width={400}
                height={400}
                className="w-full h-[350] lg:h-[600px] object-cover"
              />
            </div>

            {/* Texto à direita */}
            <div className="space-y-6">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black">
                {empresa.nome}
              </h1>

              <p className="text-gray-600 text-lg leading-relaxed">
                {empresa.descricao}
              </p>

              <p className="text-gray-500 text-base">
                Conheça alguns trabalhos e projetos desenvolvidos em parceria com esta marca. 
                Apresentamos uma seleção cuidadosa de designs gráficos e vídeos editados 
                que refletem nossa expertise e criatividade.
              </p>

             
            </div>
          </div>
        </div>
      </section>

      {empresa.website && (
  <section className="py-20 px-6 ">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="lg:text-4xl font-light mb-6">
        Website Desenvolvido
      </h2>

      <a
        href={empresa.website}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r
         from-blue-600 to-blue-800 text-white text-[14px] lg:text-[16px] font-medium text-center 
          hover:from-blue-700 hover:to-blue-900 transition max-w-56 mx-auto"
      >
        Visitar Website
         <CgArrowLongRight className="text-2xl" />
      </a>
    </div>
  </section>
)}
      


      {/* SEÇÃO DE TRABALHOS - DESIGN GRÁFICO */}
      
     {empresa.trabalhos && empresa.trabalhos.length > 0 && (
  <section className="py-14 lg:py-20 px-6">
    <div className="max-w-[1500px] mx-auto">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-black mb-4">
        Trabalhos de Design
      </h2>

      <p className="text-gray-600 mb-12 text-lg">
        Seleção de designs gráficos criados para esta marca
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {empresa.trabalhos.map((trabalho, idx) => (
          <div
            key={idx}
            className="group overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer bg-white"
          >
            <div className="relative overflow-hidden w-full h-[450px] lg:h-[600px]">
              <Image
                src={trabalho}
                alt={`Trabalho ${idx + 1}`}
                width={300}
                height={300}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)}

      {empresa.videos && empresa.videos.length > 0 && (
  <section className="py-14 lg:py-20 px-6 bg-white">
    <div className="max-w-[1500px] mx-auto">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-black mb-4">
        Vídeos Editados
      </h2>

      <p className="text-gray-600 mb-12 text-lg">
        Vídeos corporativos editados para esta marca
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {empresa.videos.map((video, idx) => (
          <div key={idx}>
            <video
              controls
              className="w-full aspect-video rounded-lg shadow-md"
            >
              <source
                src={video}
                type={`video/${video.split(".").pop()}`}
              />
              Seu navegador não suporta vídeo.
            </video>
          </div>
        ))}
      </div>
    </div>
  </section>
)}

      <Footer />
    </div>
  )
}
