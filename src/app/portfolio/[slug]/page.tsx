"use client"
import Footer from "@/app/Components/Footer"
import Header from "@/app/Components/Header"
import { notFound } from "next/navigation"
import Image from "next/image"
import { CgArrowLongRight } from "react-icons/cg"
import { useState } from "react"

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
    fotoPerfil: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772125016/fotolucrum_pcx7tj.webp", 
    trabalhos: [
      "/trabalhosfeitosE/portlucrum1.png",
      "/trabalhosfeitosE/portlucrum2.png",
      "/trabalhosfeitosE/portlucrum3.png",
      "/trabalhosfeitosE/portlucrum4.png",
       "/trabalhosfeitosE/portlucrum5.png",
      "/trabalhosfeitosE/portlucrum6.png",
    ],
   
  },
  {
    slug: "aipex",
    nome: "AIPEX",
    descricao: "Campanhas estratégicas e marketing digital.",
    fotoPerfil: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772117697/aipex_lvsazw.png",
    trabalhos: [
      "/trabalhosfeitosE/portbwizer6.png",
     "/trabalhosfeitosE/portbwizer2.png",
     "/trabalhosfeitosE/portbwizer3.png",
     "/trabalhosfeitosE/portbwizer5.png",
     "/trabalhosfeitosE/portbwizer4.png",
     "/trabalhosfeitosE/portbwizer1.png",
    ],
   
  },
  {
    nome: "CABSHIP",
    slug: "cabship",
    descricao: "Campanhas estratégicas e marketing digital.",
    fotoPerfil: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772117630/cabship_weem3b.png",
    trabalhos: [
      "/trabalhosfeitosE/portbwizer6.png",
     "/trabalhosfeitosE/portbwizer2.png",
     "/trabalhosfeitosE/portbwizer3.png",
     "/trabalhosfeitosE/portbwizer5.png",
     "/trabalhosfeitosE/portbwizer4.png",
     "/trabalhosfeitosE/portbwizer1.png",
    
    ],
    
  },
  {
    nome: "MANGAIS GOLF RESORT",
    slug: "mangais-resort",
    descricao: "Campanhas estratégicas e marketing digital.",
    fotoPerfil: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772118145/resortmangais_yvtelw.jpg",
     trabalhos: [
       "/trabalhosfeitosE/portbwizer6.png",
     "/trabalhosfeitosE/portbwizer2.png",
     "/trabalhosfeitosE/portbwizer3.png",
     "/trabalhosfeitosE/portbwizer5.png",
     "/trabalhosfeitosE/portbwizer4.png",
     "/trabalhosfeitosE/portbwizer1.png",
      
    ],
   
  },
  {
    nome: "FARMACLINIC",
    slug: "farmaclinic",
    descricao: "Campanhas estratégicas e marketing digital.",
    fotoPerfil: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772118550/farmaclinic_azehky.png",
    trabalhos: [
      "/trabalhosfeitosE/portfarma1.png",
      "/trabalhosfeitosE/portfarma2.png",
      "/trabalhosfeitosE/portfarma3.png",
      "/trabalhosfeitosE/portfarma4.png",
      "/trabalhosfeitosE/portfarma5.png",
      "/trabalhosfeitosE/portfarma6.png",
      
    ],
    
  },
  {
    nome: "FLYHOTEL",
    slug: "fly-hotel",
    descricao: "Campanhas estratégicas e marketing digital.",
    fotoPerfil: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772119213/flyhotel_rkl9ee.webp",
   trabalhos: [
      "/trabalhosfeitosE/portflyhotel1.png",
       "/trabalhosfeitosE/portflyhotel2.png",
        "/trabalhosfeitosE/portfly3.png",
         "/trabalhosfeitosE/portflyhotel4.png",
          "/trabalhosfeitosE/portfly5.png",
           "/trabalhosfeitosE/portfly6.png",
        
    ],
    
  },
  
  {
  nome: "HIDRAULICA DE ANGOLA",
  slug: "hidraulica-angola",
  descricao: "Desenvolvimento de website institucional.",
  fotoPerfil: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772117186/hidraulicaangola_pstvyl.png",
  website: "https://hidraulicadeangola.com/",
},
 
{
    nome: "ALIANÇA SEGUROS",
    slug: "alianca-seguros",
    descricao: "Campanhas estratégicas e marketing digital.",
    fotoPerfil: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772117185/portalianca6_eswn0i.png",
    trabalhos: [
      "/trabalhosfeitosE/portalianca1.png",
     "/trabalhosfeitosE/portalianca2.png",
     "/trabalhosfeitosE/portalianca3.png",
     "/trabalhosfeitosE/portalianca4.png",
     "/trabalhosfeitosE/portalianca5.png",
     "/trabalhosfeitosE/portalianca6.png",

      
    ],
    
  },
  {
    nome: "CONHECER ANGOLA",
    slug: "conhecer-angola",
    descricao: "Campanhas estratégicas e marketing digital.",
    fotoPerfil: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772117394/conhecerangola_fq6mha.jpg",
     trabalhos: [
       "/trabalhosfeitosE/portbwizer6.png",
     "/trabalhosfeitosE/portbwizer2.png",
     "/trabalhosfeitosE/portbwizer3.png",
     
     
      
    ],
    
  },
  {
    nome: "ACADEMIA DE LIDERANÇA E GESTÃO DE LUANDA",
    slug: "academia-luanda",
    descricao: "Campanhas estratégicas e marketing digital.",
    fotoPerfil: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772116656/academia_rfpyw4.jpg",
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
    fotoPerfil: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772015011/waaa_xgirlm.png",
    videos:
     [
      "/video/videowaaa.mp4",
      
      
    ]
  },
  {
    nome: "BWIZER",
    slug: "bwizer",
    descricao: "Campanhas estratégicas e marketing digital.",
    fotoPerfil: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772117476/bwizer_ozgw1a.jpg",
     trabalhos: [
     "/trabalhosfeitosE/portbwizer6.png",
     "/trabalhosfeitosE/portbwizer2.png",
     "/trabalhosfeitosE/portbwizer3.png",
     "/trabalhosfeitosE/portbwizer5.png",
     "/trabalhosfeitosE/portbwizer4.png",
     "/trabalhosfeitosE/portbwizer1.png",
      
    ],
   
  },
  {
    nome: "GEOSURVEYS",
    slug: "geosurveys",
    descricao: "Campanhas estratégicas e marketing digital.",
    fotoPerfil:"https://res.cloudinary.com/dhpa1juyr/image/upload/v1772117859/geo_m6jwld.png",
    trabalhos: [
       "/trabalhosfeitosE/portbwizer6.png",
     "/trabalhosfeitosE/portbwizer2.png",
     "/trabalhosfeitosE/portbwizer3.png",
     "/trabalhosfeitosE/portbwizer5.png",
     "/trabalhosfeitosE/portbwizer4.png",
     "/trabalhosfeitosE/portbwizer1.png",
      
    ],
   
  },
]

export default function EmpresaPage({ params }: Props) {
  const empresa = empresas.find(e => e.slug === params.slug)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  if (!empresa) {
    return notFound()
  }

  const media = [
    ...(empresa.trabalhos?.map(item => ({ type: "image", src: item })) || []),
    ...(empresa.videos?.map(item => ({ type: "video", src: item })) || [])
  ]

  return (
    <div className="bg-white">
      <Header />

      {/* HERO */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="overflow-hidden rounded-2xl shadow-lg ">
            <Image
              src={empresa.fotoPerfil}
              alt={empresa.nome}
              width={100}
              height={100}
              className="w-full h-[450px] lg:h-[600px] object-cover "
            />
          </div>

          <div className="space-y-8">
            <h1 className="text-4xl lg:text-6xl font-semibold text-black">
              {empresa.nome}
            </h1>

            {/* Linha amarela elegante */}
            <div className="w-20 h-[3px] bg-yellow-400"></div>

            <p className="text-gray-700 text-lg leading-relaxed max-w-xl">
              {empresa.descricao}
            </p>
          </div>

        </div>
      </section>

      {/* WEBSITE */}
      {empresa.website && (
        <section className="pb-24 px-6 text-center">
          <h2 className="text-3xl font-light mb-6">
            Website Desenvolvido
          </h2>

          <a
            href={empresa.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full
            bg-black text-white font-medium tracking-wide
            transition-all duration-300
            hover:bg-[#C6A75E] hover:text-black"
          >
            Visitar Website
            <CgArrowLongRight className="text-2xl" />
          </a>
        </section>
      )}

      {/* GALERIA UNIFORME */}
      {media.length > 0 && (
        <section className="pb-28 px-6">
          <div className="max-w-[1500px] mx-auto">

            <h2 className="text-3xl lg:text-4xl font-semibold text-black mb-4">
              Projetos Desenvolvidos
            </h2>

            <div className="w-16 h-[3px] bg-yellow-400 mb-12"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {media.map((item, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-2xl shadow-md
                  group cursor-pointer bg-white"
                >
                  {item.type === "image" ? (
                    <Image
                      src={item.src}
                      alt={`Projeto ${index + 1}`}
                      width={600}
                      height={600}
                      onClick={() => setSelectedImage(item.src)}
                      className="w-full h-[600px] object-cover
                      group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <video
                      controls
                      className="w-full h-[350px] object-cover"
                    >
                      <source
                        src={item.src}
                        type={`video/${item.src.split(".").pop()}`}
                      />
                    </video>
                  )}
                </div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* MODAL GALERIA */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-30 p-6"
        >
          <div className="relative max-w-4xl w-full">
            <Image
              src={selectedImage}
              alt="Preview"
              width={600}
              height={100}
              className=" w-full lg:w-[700px]  lg:h-[800px] rounded-xl"
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}