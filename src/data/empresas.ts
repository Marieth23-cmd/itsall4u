
export const getempresas =(t:(key: string) => string) => [

  /* 1️⃣ LUCRUM TRUST */
      {
        slug: "lucrum-trust",
        nome: "LUCRUM TRUST",

        fotoPerfil: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772208322/lucrumtrust_sw9s0g.png",
        descricaoPerfil: t("empresas.lucrum-trust.descricaoPerfil"),

        fotoevento: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772466346/FEIRAS_xflquz.png",
        descricaoEvento: t("empresas.lucrum-trust.descricaoEvento"),

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
    descricaoPerfil: t("empresas.aipex.descricaoPerfil"),
    website: undefined,
    sections: [
      {
        type:"content-block-image",
        title:t("empresas.aipex.title"),
        description: t("empresas.aipex.description"),
        image:[
          "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772729933/Prancheta_5_me8ipi.png",
          "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772729997/Prancheta_8_hsbyow.png",
          "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772730046/Prancheta_2_afrjco.png",
          "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772729879/Prancheta_8_s6t6qy.png",
          "https://res.cloudinary.com/dhpa1juyr/image/upload/v1773156656/Prancheta_7_kqc87p.png",
          "https://res.cloudinary.com/dhpa1juyr/image/upload/v1773156631/Prancheta_5_fb7lt9.png",
         
        ]
      }
   
      ]
  },

  /* 3️⃣ CABSHIP */
  {
    slug: "cabship",
    nome: "CABSHIP",
    fotoPerfil: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772117630/cabship_weem3b.png",
    descricaoPerfil: t("empresas.cabship.descricaoPerfil"),
    website: undefined,
    sections: [
      {
        title: t("empresas.cabship.sections.title1"),
        type: "content-block-image",
        description: t("empresas.cabship.sections.description1"),
        image: [
            "https://res.cloudinary.com/dhpa1juyr/image/upload/v1773155339/DSC08593_jzypyc.jpg",
            "https://res.cloudinary.com/dhpa1juyr/image/upload/v1773155304/DSC08598_xpniyw.jpg",
             "https://res.cloudinary.com/dhpa1juyr/image/upload/v1773155322/DSC08581_jdic8u.jpg",
        ]
       },
       { 
        type: "content-video",
        video: "https://res.cloudinary.com/dhpa1juyr/video/upload/v1772726016/2_nodi7v.mp4",
        description: t("empresas.cabship.sections.description2") },
  
      
    ]
  },

  /* 4️⃣ MANGAIS */
  {
    slug: "mangais-resort",
    nome: "MANGAIS GOLF RESORT",
    fotoPerfil: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772118145/resortmangais_yvtelw.jpg",
    descricaoPerfil: t("empresas.mangais-resort.descricaoPerfil"),
    fotoevento:"https://res.cloudinary.com/dhpa1juyr/image/upload/v1772539744/mangaisevento_zneggv.png",
    descricaoEvento: t("empresas.mangais-resort.descricaoEvento"),
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
    descricaoPerfil: t("empresas.farmaclinic.descricaoPerfil"),
    fotoevento:"",
    website: "https://centromedico.farmaclinic.ao",
    sections: [
     { type: "video-grid", 
        title: t("empresas.farmaclinic.title"),
        videos: [
          "https://res.cloudinary.com/dhpa1juyr/video/upload/v1773165328/Ansiedade_1_zbqppn.mp4",
          "https://res.cloudinary.com/dhpa1juyr/video/upload/v1773165282/Amamenta%C3%A7%C3%A3o_pkowpr.mp4",
          "https://res.cloudinary.com/dhpa1juyr/video/upload/v1773165529/Farmaclini_-_Preven%C3%A7%C3%A3o_Cancro_co7ozh.mp4",

        ]  }
    ]
  },

  /* 6️⃣ FLYHOTEL */
  {
    slug: "fly-hotel",
    nome: "FLYHOTEL",
    fotoPerfil: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772119213/flyhotel_rkl9ee.webp",
    descricaoPerfil: t("empresas.fly-hotel.descricaoPerfil"),
    website: undefined,
    sections: [
      {
        type:"content-block-image",
        title: t("empresas.fly-hotel.title"),
        description: t("empresas.fly-hotel.description"),
        image:[
          "https://res.cloudinary.com/dhpa1juyr/image/upload/v1771949515/portfly3_vwxspz.png",
          "https://res.cloudinary.com/dhpa1juyr/image/upload/v1771949550/portfly5_x5rftn.png",
          "https://res.cloudinary.com/dhpa1juyr/image/upload/v1771949559/portflyhotel4_rqpc4j.png",
          "https://res.cloudinary.com/dhpa1juyr/image/upload/v1771949568/portflyhotel1_bxxltk.png",
          "https://res.cloudinary.com/dhpa1juyr/image/upload/v1771949536/portfly6_cay0vx.png",
          "https://res.cloudinary.com/dhpa1juyr/image/upload/v1773160775/portflyhotel2_djlh84.png",
         
        ]
      }
    ]
  },    

  /* 7️⃣ HIDRÁULICA */
  {
    slug: "hidraulica-angola",
    nome: "HIDRÁULICA DE ANGOLA",
    fotoPerfil: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772117186/hidraulicaangola_pstvyl.png",
    descricaoPerfil: t("empresas.hidraulica-angola.descricaoPerfil"),
    website: "https://hidraulicadeangola.com/",
    sections: [
      { type: "hero-site", image: "/placeholder/hidraulica-site.jpg" },
       { text: t("empresas.hidraulica-angola.text") },
     
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
      title: t("empresas.alianca-seguros.title1"),
      description: t("empresas.alianca-seguros.description1"),
      image: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772472251/eventoalianca_bv2prd.png"
    },
    {
      type: "content-block-two",
      title: t("empresas.alianca-seguros.title2"),
      description: t("empresas.alianca-seguros.description2"),
      image: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772639014/alian%C3%A7alider_ysvpmj.png"
    }
    ,
    { 
        type: "content-video",
        video: "https://res.cloudinary.com/dhpa1juyr/video/upload/v1772726016/2_nodi7v.mp4",
        description: t("empresas.alianca-seguros.description3") },
  
  ]
  },

  /* 9️⃣ CONHECER ANGOLA */
  {
    slug: "conhecer-angola",
    nome: "CONHECER ANGOLA",
    fotoPerfil: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772117394/conhecerangola_fq6mha.jpg",
    descricaoPerfil: t("empresas.conhecer-angola.descricaoPerfil"),
    website: undefined,
    
    sections: [
       { type: "video-grid", 
        title: t("empresas.conhecer-angola.title"),
        videos: [
          "/video/videowaaa.mp4",
          "https://res.cloudinary.com/dhpa1juyr/video/upload/v1773158472/WAAA_X_CAETANO_2_x7dthp.mp4",
          "https://res.cloudinary.com/dhpa1juyr/video/upload/v1773158543/WAAA_X_CAETANO_mozkam.mp4",

        ]  }
    ],
  },

  /* 🔟 ACADEMIA */
  {
  slug: "academia-luanda",
  nome: "ACADEMIA DE LIDERANÇA E GESTÃO DE LUANDA",
  website: undefined,
  sections: [
    {
      type: "content-block",
      title: t("empresas.academia-luanda.title1"),
      description: t("empresas.academia-luanda.description1"),
      image: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772116656/academia_rfpyw4.jpg"
    },
    {
      type: "content-block-two",
      title:t("empresas.academia-luanda.title2"),
      description:t("empresas.academia-luanda.description2"),
      image: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772554513/academiaformacao_ccaqfn.png"
    }
  ]
},

  /* 1️⃣1️⃣ WAA */
  {
    slug: "waa",
    nome: "WHATABOUT AGENCY ANGOLA",
    fotoPerfil: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772015011/waaa_xgirlm.png",
    descricaoPerfil: t("empresas.waa.descricaoPerfil"),
    website: undefined,
    sections: [
     
      { type: "video-grid", 
        title: t("empresas.waa.title"),
        videos: [
          "/video/videowaaa.mp4",
          "https://res.cloudinary.com/dhpa1juyr/video/upload/v1773158472/WAAA_X_CAETANO_2_x7dthp.mp4",
          "https://res.cloudinary.com/dhpa1juyr/video/upload/v1773158543/WAAA_X_CAETANO_mozkam.mp4",

        ]  },
      
       ]
  },

  /* 1️⃣2️⃣ BWIZER */
  {
    slug: "bwizer",
    nome: "BWIZER",
    fotoPerfil: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772628330/b_vyycbh.png",
    descricaoPerfil: t("empresas.bwizer.descricaoPerfil"),
    fotoevento: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772117476/bwizer_ozgw1a.jpg",
    descricaoEvento: t("empresas.bwizer.descricaoEvento"),
    website: undefined,
    sections: [
      { 
        type: "content-video",
        title: t("empresas.bwizer.title"),
        video: "https://res.cloudinary.com/dhpa1juyr/video/upload/v1773157641/Bwizer_V%C3%ADdeo_-_xevv13.mp4",
        description: t("empresas.bwizer.description") },
    ]
  },

  /* 1️⃣3️⃣ GEOSURVEYS */
  {
    slug: "geosurveys",
    nome: "GEOSURVEYS",
    fotoPerfil: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772117859/geo_m6jwld.png",
    descricaoPerfil: t("empresas.geosurveys.descricaoPerfil"),
    fotoevento:"https://res.cloudinary.com/dhpa1juyr/image/upload/v1772470669/fildageo_tbjorj.png",
    descricaoEvento: t("empresas.geosurveys.descricaoEvento"),
    website: undefined,
    sections: [
      {
      type: "content-block-two",
   
      description: t("empresas.geosurveys.description"),
      image: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1772469964/ANGOLA_OIL_6_G%C3%81S_r4p0el.png"
    }
    ]
  }

]