import Footer from "@/app/Components/Footer"
import Header from "@/app/Components/Header"
import { div } from "framer-motion/client"
import { notFound } from "next/navigation"

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
  },
  {
    slug: "aipex",
    nome: "AIPEX",
    descricao: "Campanhas estratégicas e marketing digital.",
  },
 
     {
       
        nome:"CABSHIB ",
        slug:"cabship",
         descricao: "Campanhas estratégicas e marketing digital."
    },
     {
       
        nome:"MANGAIS GOLF RISORT ",
        slug:"mangais-resort",
         descricao: "Campanhas estratégicas e marketing digital."
    },
     {
       
        nome:"FARMACLINIC ",
        slug:"farmaclinic",
         descricao: "Campanhas estratégicas e marketing digital."
    },

     {
       
        nome:"FLYHOTEL",
        slug:"fly-hotel",
         descricao: "Campanhas estratégicas e marketing digital."
    },
     {
        nome:"HIDRAULICA DE ANGOLA",
        slug:"hidraulia-angola",
         descricao: "Campanhas estratégicas e marketing digital.",
     },
     {
       
        nome:"ALIANÇA SEGUROS ",
        slug:"aliança-seguros",
         descricao: "Campanhas estratégicas e marketing digital."
    },
    {
     
        nome:"CONHECER ANGOLA ",
         descricao: "Campanhas estratégicas e marketing digital.",
        slug:"conhecer-angola"
    },
    {
      
        nome:"ACADEMIA DE LIDERENÇA E GESTÃO DE LUANDA ",
        descricao: "Campanhas estratégicas e marketing digital.",
        slug:"academia-luanda"
    },
    {
       
        nome:"WHATABOUT AGENCY ANGOLA",
         descricao: "Campanhas estratégicas e marketing digital.",
        slug:"waa"
    },
     {
        
        nome:"BWIZER",
        descricao: "Campanhas estratégicas e marketing digital.",
        slug:"bwizer"
        
    },
    {
      
        nome:"GEOSURVEYS",
      descricao: "Campanhas estratégicas e marketing digital.",
        slug:"geosurveys"
    },
]

export default function EmpresaPage({ params }: Props) {
  const empresa = empresas.find(e => e.slug === params.slug)

  if (!empresa) {
    return notFound()
  }

  return (
    <div>
        <Header/>
    <div className="pt-36 px-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-semibold mb-6">
        {empresa.nome}
      </h1>

      <p className="text-gray-600 text-lg">
        {empresa.descricao}
      </p>
    </div>
    <Footer/>
    </div>
  )
}
