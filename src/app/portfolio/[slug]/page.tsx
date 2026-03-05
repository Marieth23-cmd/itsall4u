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
export const empresas = [

  /* 1️⃣ LUCRUM TRUST */
      {
        slug: "lucrum-trust",
        nome: "LUCRUM TRUST",

        fotoPerfil: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772208322/lucrumtrust_sw9s0g.png",
        descricaoPerfil: "lorem ipsum dolor sit amet. Et sunt quas aut pariatur quia eos tempora similique aut atque quia et tenetur placeat. Quo aspernatur accusantium eos tenetur galisum eum dolores aperiam 33 dolorum soluta. Et atque consequatur ea molestias officia ab maiores officiis et quaerat expedita..",

        fotoevento: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772466346/FEIRAS_xflquz.png",
        descricaoEvento: "lorem ipsum dolor sit amet. Et sunt quas aut pariatur quia eos tempora similique aut atque quia et tenetur placeat. Quo aspernatur accusantium eos tenetur galisum eum dolores aperiam 33 dolorum soluta. Et atque consequatur ea molestias officia ab maiores officiis et quaerat expedita..",

        website: undefined,

        sections: [
          {
            type: "video-with-text-side",
            video: "/video/lucrum.mp4",
            textSide: "Texto ao lado do vídeo."
          }
        ]
      },

  /* 2️⃣ AIPEX */
  {
    slug: "aipex",
    nome: "AIPEX",
    fotoPerfil: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772117697/aipex_lvsazw.png",
    descricaoPerfil: "Lorem ipsum dolor sit amet. Et sunt quas aut pariatur quia eos tempora similique aut atque quia et tenetur placeat. Quo aspernatur accusantium eos tenetur galisum eum dolores aperiam 33 dolorum soluta. Et atque consequatur ea molestias officia ab maiores officiis et quaerat expedita.",
    website: undefined,
    sections: [
      {
        type:"image-evento",
        title:"Confira Imagens do Evento",
        description: "Lorem ipsum dolor sit amet. Et sunt quas aut pariatur quia eos tempora similique aut atque quia et tenetur placeat. Quo aspernatur accusantium eos tenetur galisum eum dolores aperiam 33 dolorum soluta. Et atque consequatur ea molestias officia ab maiores officiis et quaerat expedita..",
        image:[
          "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772729933/Prancheta_5_me8ipi.png",
          "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772729997/Prancheta_8_hsbyow.png",
          "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772730046/Prancheta_2_afrjco.png",
         
        ]
      }
   
      ]
  },

  /* 3️⃣ CABSHIP */
  {
    slug: "cabship",
    nome: "CABSHIP",
    fotoPerfil: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772117630/cabship_weem3b.png",
    descricaoPerfil: "lorem ipsum dolor sit amet.et sunt quas aut pariatur quia eos tempora similique aut atque quia et tenetur placeat. Quo aspernatur accusantium eos tenetur galisum eum dolores aperiam 33 dolorum soluta. Et atque consequatur ea molestias officia ab maiores officiis et quaerat expedita.",
    fotoevento:"",
    descricaoEvento: "lorem ipsun dolor sit amet.et sunt quas aut pariatur quia eos tempora similique aut atque quia et tenetur placeat. Quo aspernatur accusantium eos tenetur galisum eum dolores aperiam 33 dolorum soluta. Et atque consequatur ea molestias officia ab maiores officiis et quaerat expedita.",
    website: undefined,
    sections: [
      {text: "Lorem ipsum dolor sit amet. Et sunt quas aut pariatur quia eos tempora similique aut atque quia et tenetur placeat. Quo aspernatur accusantium eos tenetur galisum eum dolores aperiam 33 dolorum soluta. Et atque consequatur ea molestias officia ab maiores officiis et quaerat expedita." },
      
    ]
  },

  /* 4️⃣ MANGAIS */
  {
    slug: "mangais-resort",
    nome: "MANGAIS GOLF RESORT",
    fotoPerfil: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772118145/resortmangais_yvtelw.jpg",
    descricaoPerfil: "Lorem ipsum dolor sit amet.et sunt quas aut pariatur quia eos tempora similique aut atque quia et tenetur placeat. Quo aspernatur accusantium eos tenetur galisum eum dolores aperiam 33 dolorum soluta. Et atque consequatur ea molestias officia ab maiores officiis et quaerat expedita.",
    fotoevento:"https://res.cloudinary.com/dhpa1juyr/image/upload/v1772539744/mangaisevento_zneggv.png",
    descricaoEvento: "Lorem ipsum dolor sit amet.et sunt quas aut pariatur quia eos tempora similique aut atque quia et tenetur placeat. Quo aspernatur accusantium eos tenetur galisum eum dolores aperiam 33 dolorum soluta. Et atque consequatur ea molestias officia ab maiores officiis et quaerat expedita.",
    website: undefined,
    sections: [
     
      { type: "logos-row",
         logos: [
        "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772014961/Prudencial3_j7aneo.png",
        "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772014920/Alian%C3%A7a2_ljqvoc.png",
        "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772634962/CWoermann8x_uuu6cz.webp",
        "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772634938/Bfa9_bglspl.webp",
        "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772634964/Spie7_delvlc.webp",
        "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772634965/Itsall5_vj4clz.webp",
         "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772634965/Lucrum6_qlzb9v.webp",
        "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772634967/Realvitur3_estvum.webp",
        "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772634967/Caetano1_gxglx9.webp",
      ] }
    ]
  },

  /* 5️⃣ FARMACLINIC */
  {
    slug: "farmaclinic",
    nome: "FARMACLINIC",
    fotoPerfil: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772118550/farmaclinic_azehky.png",
    descricaoPerfil: "Lorem ipsum dolor sit amet. Et sunt quas aut pariatur quia eos tempora similique aut atque quia et tenetur placeat. Quo aspernatur accusantium eos tenetur galisum eum dolores aperiam 33 dolorum soluta. Et atque consequatur ea molestias officia ab maiores officiis et quaerat expedita.",
    fotoevento:"",
    website: undefined,
    sections: [
      { text: "Lorem ipsum dolor sit amet. Et sunt quas aut pariatur quia eos tempora similique aut atque quia et tenetur placeat. Quo aspernatur accusantium eos tenetur galisum eum dolores aperiam 33 dolorum soluta. Et atque consequatur ea molestias officia ab maiores officiis et quaerat expedita.." },
  
    ]
  },

  /* 6️⃣ FLYHOTEL */
  {
    slug: "fly-hotel",
    nome: "FLYHOTEL",
    fotoPerfil: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772119213/flyhotel_rkl9ee.webp",
    descricaoPerfil: "Lorem ipsum dolor sit amet. Et sunt quas aut pariatur quia eos tempora similique aut atque quia et tenetur placeat. Quo aspernatur accusantium eos tenetur galisum eum dolores aperiam 33 dolorum soluta. Et atque consequatur ea molestias officia ab maiores officiis et quaerat expedita.",
    website: undefined,
    sections: [
      {text: "Lorem ipsum dolor sit amet. Et sunt quas aut pariatur quia eos tempora similique aut atque quia et tenetur placeat. Quo aspernatur accusantium eos tenetur galisum eum dolores aperiam 33 dolorum soluta. Et atque consequatur ea molestias officia ab maiores officiis et quaerat expedita." },

    ]
  },

  /* 7️⃣ HIDRÁULICA */
  {
    slug: "hidraulica-angola",
    nome: "HIDRÁULICA DE ANGOLA",
    fotoPerfil: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772117186/hidraulicaangola_pstvyl.png",
    descricaoPerfil: "Lorem ipsum dolor sit amet. Et sunt quas aut pariatur quia eos tempora similique aut atque quia et tenetur placeat. Quo aspernatur accusantium eos tenetur galisum eum dolores aperiam 33 dolorum soluta. Et atque consequatur ea molestias officia ab maiores officiis et quaerat expedita.",
    website: "https://hidraulicadeangola.com/",
    sections: [
      { type: "hero-site", image: "/placeholder/hidraulica-site.jpg" },
       { text: "Desenvolvimento de campanhas educacionais Lorem ipsum dolor sit amet. Et sunt quas aut pariatur quia eos tempora similique aut atque quia et tenetur placeat. Quo aspernatur accusantium eos tenetur galisum eum dolores aperiam 33 dolorum soluta. Et atque consequatur ea molestias officia ab maiores officiis et quaerat expedita.." },
     
    ]
  },


  /* 8️⃣ ALIANÇA */
  {
    slug: "alianca-seguros",
    nome: "ALIANÇA SEGUROS",
    website: undefined,
   
    sections: [
    {
      type: "content-block",
      title: "CAMPANHA MARÇO MULHER",
      description: "lorem ipsum dolor sit amet. Et sunt quas aut pariatur quia eos tempora similique aut atque quia et tenetur placeat. Quo aspernatur accusantium eos tenetur galisum eum dolores aperiam 33 dolorum soluta. Et atque consequatur ea molestias officia ab maiores officiis et quaerat expedita..",
      image: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772472251/eventoalianca_bv2prd.png"
    },
    {
      type: "content-block-two",
      title: "SUPERBRANDS ANGOLA",
      description: "lorem ipsum dolor sit amet. Et sunt quas aut pariatur quia eos tempora similique aut atque quia et tenetur placeat. Quo aspernatur accusantium eos tenetur galisum eum dolores aperiam 33 dolorum soluta. Et atque consequatur ea molestias officia ab maiores officiis et quaerat expedita..",
      image: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772639014/alian%C3%A7alider_ysvpmj.png"
    }
    ,
    { 
        type: "content-video",
        video: "https://res.cloudinary.com/dhpa1juyr/video/upload/v1772726016/2_nodi7v.mp4",
        description: "Lorem ipsum dolor sit amet. Et sunt quas aut pariatur quia eos tempora similique aut atque quia et tenetur placeat. Quo aspernatur accusantium eos tenetur galisum eum dolores aperiam 33 dolorum soluta. Et atque consequatur ea molestias officia ab maiores officiis et quaerat expedita.." },
  
  ]
  },

  /* 9️⃣ CONHECER ANGOLA */
  {
    slug: "conhecer-angola",
    nome: "CONHECER ANGOLA",
    fotoPerfil: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772117394/conhecerangola_fq6mha.jpg",
    descricaoPerfil: "Lorem ipsum dolor sit amet. Et sunt quas aut pariatur quia eos tempora similique aut atque quia et tenetur placeat. Quo aspernatur accusantium eos tenetur galisum eum dolores aperiam 33 dolorum soluta. Et atque consequatur ea molestias officia ab maiores officiis et quaerat expedita.",
    website: undefined,
    sections: [
        {text: "Lorem ipsum dolor sit amet. Et sunt quas aut pariatur quia eos tempora similique aut atque quia et tenetur placeat. Quo aspernatur accusantium eos tenetur galisum eum dolores aperiam 33 dolorum soluta. Et atque consequatur ea molestias officia ab maiores officiis et quaerat expedita.." },
      
    ]
  },

  /* 🔟 ACADEMIA */
  {
  slug: "academia-luanda",
  nome: "ACADEMIA DE LIDERANÇA E GESTÃO DE LUANDA",
  website: undefined,
  sections: [
    {
      type: "content-block",
      title: "LIDERANÇA",
      description: "lorem ipsum dolor sit amet. Et sunt quas aut pariatur quia eos tempora similique aut atque quia et tenetur placeat. Quo aspernatur accusantium eos tenetur galisum eum dolores aperiam 33 dolorum soluta. Et atque consequatur ea molestias officia ab maiores officiis et quaerat expedita..",
      image: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772116656/academia_rfpyw4.jpg"
    },
    {
      type: "content-block-two",
      title: "FORMAÇÃO",
      description: "lorem ipsum dolor sit amet. Et sunt quas aut pariatur quia eos tempora similique aut atque quia et tenetur placeat. Quo aspernatur accusantium eos tenetur galisum eum dolores aperiam 33 dolorum soluta. Et atque consequatur ea molestias officia ab maiores officiis et quaerat expedita.lorem ipsum dolor sit amet. Et sunt quas aut pariatur quia eos tempora similique aut atque quia et tenetur placeat. Quo aspernatur accusantium eos tenetur galisum eum dolores aperiam 33 dolorum soluta. Et atque consequatur ea molestias officia ab ma",
      image: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772554513/academiaformacao_ccaqfn.png"
    }
  ]
},

  /* 1️⃣1️⃣ WAA */
  {
    slug: "waa",
    nome: "WHATABOUT AGENCY ANGOLA",
    fotoPerfil: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772015011/waaa_xgirlm.png",
    descricaoPerfil: "Lorem ipsum dolor sit amet. Et sunt quas aut pariatur quia eos tempora similique aut atque quia et tenetur placeat. Quo aspernatur accusantium eos tenetur galisum eum dolores aperiam 33 dolorum soluta. Et atque consequatur ea molestias officia ab maiores officiis et quaerat expedita.",
    website: undefined,
    sections: [
     
      { type: "video-grid", 
        title: "Campanhas de vídeo",
        videos: [
          "/video/videowaaa.mp4",
          "/video/videowaaa.mp4",
          "/video/videowaaa.mp4",

        ]  },
      
       ]
  },

  /* 1️⃣2️⃣ BWIZER */
  {
    slug: "bwizer",
    nome: "BWIZER",
    fotoPerfil: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772628330/b_vyycbh.png",
    descricaoPerfil: "Lorem ipsum dolor sit amet. Et sunt quas aut pariatur quia eos tempora similique aut atque quia et tenetur placeat. Quo aspernatur accusantium eos tenetur galisum eum dolores aperiam 33 dolorum soluta. Et atque consequatur ea molestias officia ab maiores officiis et quaerat expedita.",
    fotoevento: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772117476/bwizer_ozgw1a.jpg",
    descricaoEvento: "Lorem ipsum dolor sit amet. Et sunt quas aut pariatur quia eos tempora similique aut atque quia et tenetur placeat. Quo aspernatur accusantium eos tenetur galisum eum dolores aperiam 33 dolorum soluta. Et atque consequatur ea molestias officia ab maiores officiis et quaerat expedita.",
    website: undefined,
    sections: [
      { 
        type: "content-video",
        title: "Formação",
        video: "/video/videowaa.mp4",
        description: "Lorem ipsum dolor sit amet. Et sunt quas aut pariatur quia eos tempora similique aut atque quia et tenetur placeat. Quo aspernatur accusantium eos tenetur galisum eum dolores aperiam 33 dolorum soluta. Et atque consequatur ea molestias officia ab maiores officiis et quaerat expedita.." },
    ]
  },

  /* 1️⃣3️⃣ GEOSURVEYS */
  {
    slug: "geosurveys",
    nome: "GEOSURVEYS",
    fotoPerfil: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772117859/geo_m6jwld.png",
    descricaoPerfil: "Lorem ipsum dolor sit amet. Et sunt quas aut pariatur quia eos tempora similique aut atque quia et tenetur placeat. Quo aspernatur accusantium eos tenetur galisum eum dolores aperiam 33 dolorum soluta. Et atque consequatur ea molestias officia ab maiores officiis et quaerat expedita.",
    fotoevento:"https://res.cloudinary.com/dhpa1juyr/image/upload/v1772470669/fildageo_tbjorj.png",
    descricaoEvento: "Lorem ipsum dolor sit amet. Et sunt quas aut pariatur quia eos tempora similique aut atque quia et tenetur placeat. Quo aspernatur accusantium eos tenetur galisum eum dolores aperiam 33 dolorum soluta. Et atque consequatur ea molestias officia ab maiores officiis et quaerat expedita.",
    website: undefined,
    sections: [
      {
      type: "content-block-two",
   
      description: "lorem ipsum dolor sit amet. Et sunt quas aut pariatur quia eos tempora similique aut atque quia et tenetur placeat. Quo aspernatur accusantium eos tenetur galisum eum dolores aperiam 33 dolorum soluta. Et atque consequatur ea molestias officia ab maiores officiis et quaerat expedita.lorem ipsum dolor sit amet. Et sunt quas aut pariatur quia eos tempora similique aut atque quia et tenetur placeat. Quo aspernatur accusantium eos tenetur galisum eum dolores aperiam 33 dolorum soluta. Et atque consequatur ea molestias officia ab ma",
      image: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772469964/ANGOLA_OIL_6_G%C3%81S_r4p0el.png"
    }
    ]
  }

]

//

export default function EmpresaPage({ params }: Props) {
  const empresa = empresas.find(e => e.slug === params.slug)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  if (!empresa) {
    return notFound()
  }

  const hasMedia = Array.isArray(empresa.sections) && empresa.sections.length > 0

  // Extract a main description if available (for hero right column)
  const mainDescription = empresa.sections.find(s => typeof (s as any).text === "string" || typeof (s as any).textSide === "string" || typeof (s as any).textBelow === "string") as any

  return (
    <div className="bg-white">
      <Header />

      {/* HERO */}
      {empresa.fotoPerfil && (
      <section className="pt-32 px-6">
        <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="overflow-hidden rounded-2xl shadow-lg">
            <Image
              src={empresa.fotoPerfil ?? "/placeholder/cover.png"}
              alt={empresa.nome}
              width={1000}
              height={1000}
              className="w-full h-[450px] lg:h-[600px] object-cover"
            />
          </div>

          <div className="space-y-8">
            <h1 className="text-2xl lg:text-4xl font-semibold text-black">
              {empresa.nome}
            </h1>

            <div className="w-20 h-[3px] bg-yellow-400"></div>

            {empresa.descricaoPerfil && (
              <p className="text-gray-700 max-w-lg">
                {empresa.descricaoPerfil}
              </p>
            ) }
          </div>

        </div>
      </section>
      )}

      {/*subhero*/}

        {empresa.fotoevento && (
          <section className="pt-14  px-6">
            <div className="max-w-[1500px] mx-auto flex-col items-center">
              <div onClick={() => setSelectedImage(empresa.fotoevento)} 
              className="overflow-hidden rounded-xl shadow-lg">
                {empresa.fotoevento && (
                  <Image
                    src={empresa.fotoevento}
                    alt={empresa.nome}
                    width={1000}
                    height={1000}
                   className="w-full h-[450px] lg:h-[550px] object-cover cursor-pointer "
                  />
               
                )}
              </div>

              <div className="space-y-8">
                {empresa.descricaoEvento && (
                  <p className="text-gray-700 max-w-7xl mt-6">
                    {empresa.descricaoEvento}
                  </p>
                )}
              </div>
            </div>
          </section>
        )}

      {/* WEBSITE */}
      {empresa.website && (
        <section className="px-6 text-center">
          <h2 className="text-3xl font-light mb-6 mt-16">
            Website Desenvolvido
          </h2>

          <a
            href={empresa.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full
            bg-black text-white font-medium tracking-wide
            transition-all duration-300
            hover:bg-yellow-500 hover:text-black"
          >
            Visitar Website
            <CgArrowLongRight className="text-2xl" />
          </a>
        </section>
      )}

      {/* GALERIA DINÂMICA */}
      {hasMedia && (
        <section className="pb-14 px-6">
          <div className="max-w-[1500px] mx-auto space-y-12">

            {/* GRID ITEMS (grid-based sections) */}
            <div
              className={`
                ${empresa.sections.filter((s: any) => !["full-image", "image-column", "gif", "video", "video-with-text-side"].includes(s.type)).length === 1
                  ? "grid grid-cols-1 max-w-3xl mx-auto"
                  : "grid grid-cols-1 sm:grid-cols-2 "}
                gap-8
              `}
            >
              {empresa.sections
                .filter((s: any) => !["full-image", "image-column", "gif", "video", "video-with-text-side"].includes(s.type))
                .map((item: any, index: number) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-xl group cursor-pointer p-0"
                >
                  {/* HERO-SIDE / IMAGE */}
                  {((item.type === "image" || item.type === "hero-side" || item.type === "hero-side-logo") && typeof item.image === "string" && !item.textSide) && (
                    <div onClick={() => typeof item.image === 'string' && setSelectedImage(item.image)}>
                      <Image
                        src={item.image}
                        alt={item.text ?? empresa.nome}
                        width={1200}
                        height={800}
                        className="w-full lg:h-[600px] object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}

                  {/* LOGOS ROW */}
                  {item.type === "logos-row" && Array.isArray(item.logos) && (
                    <div className="w-full flex flex-col items-center justify-center max-w-[1500px] mx-auto px-8">
                      {/* TÍTULO */}
                      <h1 className="text-2xl lg:text-4xl font-semibold text-center mt-8 mb-10">
                        9 ETAPAS — 9 PATROCINADORES
                      </h1>

                      {/* GRID LOGOS */}
                      <div className="grid grid-cols-3 lg:grid-cols-9 gap-8 items-center justify-center w-full max-w-fit mx-auto">
                        {item.logos
                          .filter((l: any) => typeof l === "string")
                          .map((logo: string, i: number) => (
                            <div
                              key={i}
                              className="w-20 h-20 p-2  bg-black/5 rounded-full"
                            >
                              <Image
                                src={logo}
                                alt={`logo-${i}`}
                                className="object-contain"
                                width={100}
                                height={100}
                              />
                            </div>
                          ))}
                      </div>
                    </div>
                  )}
                   
                </div>
              ))}
            </div>

            {/* FULL-WIDTH SECTIONS */}
            {empresa.sections
              .filter((s: any) => !["full-image", "image-column", "gif", "video", "video-with-text-side"].includes(s.type))
              .map((item: any, index: number) => (
              <div key={index}>
                {/* FULL IMAGE / IMAGE-COLUMN (max width) */}
                {((item.type === "full-image" || item.type === "image-column") && typeof item.image === "string") && (
                  <div className="w-full">
                    <Image
                      src={item.image}
                      alt={item.textBelow ?? empresa.nome}
                      width={1500}
                      height={900}
                      className="w-full object-cover rounded-xl"
                    />
                    
                  </div>
                )}
                  
                {/* VIDEO - Full Width Single Line */}
                {item.type === "video" && typeof item.src === "string" && (
                  <div className="w-full flex flex-row items-center"> 
                  {item.textAbove && <p className="mt-4 text-gray-700">{item.textAbove}</p>}
                    <video controls className="w-full rounded-2xl h-[500px]">
                      <source src={item.src} type={`video/${item.src.split('.').pop()}`} />
                      Your browser does not support the video tag.
                    </video>
                   
                  </div>
                )}

                {/* VIDEO WITH TEXT SIDE */}
                {item.type === "video-with-text-side" && typeof item.video === "string" && (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                    <video controls className="w-full rounded-2xl h-[400px]">
                      <source src={item.video} type={`video/${item.video.split('.').pop()}`} />
                    </video>
                    <div className="p-4">
                      {item.textSide && <p className="text-gray-700">{item.textSide}</p>}
                    </div>
                  </div>
                )}

                    {/* VIDEO GRID */}
                  {item.type==="video-grid" && Array.isArray(item.videos) && (
                      <div className="pt-4 lg:px-6 mx-auto max-w-[1500px] ">
                        
                        <h1 className="text-2xl lg:text-4xl text-center font-semibold mb-6 ">{item.title}</h1>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                          {item.videos
                            .filter((v: any) => typeof v === 'string')
                            .map((video: string, i: number) => (
                              <video key={i} controls className="w-full rounded-lg h-[450px] lg:h-[650px] object-cover">
                                <source src={video} type={`video/${video.split('.').pop()}`} />
                              </video>
                          ))}
                        </div>

                      </div>
                    )}

                    {/* Confira imagens de alguns momentos do evento */}
                    {item.type === "image-evento" && (
                      <div className="pt-4 lg:px-6 mx-auto max-w-[1500px] ">
                        <h1 className="text-2xl lg:text-4xl text-center font-semibold mb-6 ">{item.title}</h1>
                        <p className="text-lg lg:xl text-gray-600 max-w-7xl">{item.description}</p>

                        {item.image && Array.isArray(item.image) && (
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                            {item.image.map((img: string, i: number) => (
                                <div
                                  key={i}
                                  className="cursor-pointer"
                                  onClick={() => setSelectedImage(img)}
                                >
                                  <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={400}
                                    height={300}
                                    className="w-full h-full object-cover rounded-lg"
                                  />
                                </div>
                              ))}
                          </div>
                        )}
                      </div>

                    )}




                        {/* CONTENT VIDEO */}
                        {item.type === "content-video" && (
                          <div className="pt-4 lg:px-6 mx-auto max-w-[1500px] ">
                            <h1 className="text-2xl lg:text-4xl text-center font-semibold mb-8 ">{item.title}</h1>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center justify-center">
                              <video controls className="w-full rounded-lg  aspect-video object-contain ">
                                <source src={item.video} type={`video/${item.video.split('.').pop()}`} />
                              </video>
                              {item.description && (
                                <p className="text-gray-700 text-start max-w-7xl mx-auto">
                                  {item.description}
                                </p>
                              )}
                            </div>
                          </div>
                        )}

               {item.type === "content-block-two" && (
                <div>
                  <div>
                        <h2 className="text-2xl lg:text-4xl text-center font-semibold mb-4 ">
                          {item.title}
                        </h2>
                       
                       
                      </div>
                     

                  <div className=" flex flex-col lg:flex-row  gap-8 items-center pt-4 lg:pt-4 lg:px-6 mx-auto max-w-[1500px] "> 

                       
                      {item.image && (
                        <div
                          onClick={() => setSelectedImage(item.image)}
                          className="cursor-pointer w-full lg:h-[500px] flex justify-center items-center mx-auto" >
                          <Image
                            src={item.image}
                            alt={item.title}
                            width={1200}
                            height={800}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                      )}                 
                       {/* TEXTO */}
                      <div>
                       
                        <p className="text-gray-700 text-start max-w-7xl mx-auto lg:h-[500px] ">
                          {item.description}
                        </p>
                       
                      </div>
                  </div>
                  </div>
                )}

                {/* CONTENT BLOCK */}
              
                {item.type === "content-block" && (
                  <div className="grid grid-cols-1 gap-4 items-center pt-4 lg:pt-20 lg:px-6 mx-auto max-w-[1500px] ">
                    
                     <h2 className="text-2xl lg:text-4xl font-bold mb-4 text-center">
                          {item.title}
                        </h2> 
                      <div>
                        
                        <p className="text-gray-700 text-start max-w-7xl mx-auto">
                          {item.description}
                        </p>
                      </div>

                      {/* IMAGEM */}
                      {item.image && (
                        <div
                          onClick={() => setSelectedImage(item.image)}
                          className="cursor-pointer w-full lg:h-[500px] flex justify-center items-center mx-auto"
                        >
                          <Image
                            src={item.image}
                            alt={item.title}
                            width={1200}
                            height={800}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                      )}

                    </div>
                  )}
              </div>
            ))}
          </div>
        </section>
      )}

      
      {/* MODAL */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
        >
          <div className="relative max-w-5xl w-full">
            <Image
              src={selectedImage}
              alt="Preview"
              width={1000}
              height={1000}
              className="w-full max-h-[90vh] object-contain rounded-xl"
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}