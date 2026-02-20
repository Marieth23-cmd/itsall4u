import Image from "next/image"
import Footer from "../Components/Footer"
import Header from "../Components/Header"
import Link from "next/link"

 const imagensEmpresas =[
    {
        image:"/equipa/Alicia.png",
        nome:"LUCRUM TRUST",
        icone:"→",
        slug:"lucrum-trust"
    },
     {
        image:"/equipa/Alicia.png",
        nome:"AIPEX ",
        icone:"→",
        slug:"aipex"
    },
     {
        image:"/equipa/Alicia.png",
        nome:"CABSHIB ",
        icone:"→",
        slug:"cabship"
    },
     {
        image:"/equipa/Alicia.png",
        nome:"MANGAIS GOLF RISORT ",
        icone:"→",
        slug:"mangais-resort"
    },
     {
        image:"/equipa/Alicia.png",
        nome:"FARMACLINIC ",
        icone:"→",
        slug:"farmaclinic"
    },

     {
        image:"/equipa/Alicia.png",
        nome:"FLYHOTEL",
        icone:"→",
        slug:"fly-hotel"
    },
     {
        image:"/equipa/Alicia.png",
        nome:"HIDRAULICA DE ANGOLA",
        icone:"→",
        slug:"hidraulia-angola"
    },
     {
        image:"/equipa/Alicia.png",
        nome:"ALIANÇA SEGUROS ",
        icone:"→",
        slug:"aliança-seguros"
    },
    {
        image:"/equipa/Alicia.png",
        nome:"CONHECER ANGOLA ",
        icone:"→",
        slug:"conhecer-angola"
    },
    {
        image:"/equipa/Alicia.png",
        nome:"ACADEMIA DE LIDERENÇA E GESTÃO DE LUANDA ",
        icone:"→",
        slug:"academia-luanda"
    },
    {
        image:"/equipa/Alicia.png",
        nome:"WHATABOUT AGENCY ANGOLA",
        icone:"→",
        slug:"waa"
    },
     {
        image:"/equipa/Alicia.png",
        nome:"BWIZER",
        icone:"→",
        slug:"bwizer"
        
    },
    {
        image:"/equipa/Alicia.png",
        nome:"GEOSURVEYS",
        icone:"→",
        slug:"geosurveys"
    },
 ]


    const asImagens=[...imagensEmpresas]

export default function Portfolio(){
    return(
        <div>
            <Header/>
            <div className="pt-36 px-6 max-w-[1500px] mx-auto">
                <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-black leading-snug mb-8">
                     Portfolio
                  </h1>
                  <p className="max-w-2xl text-gray-600">
                    Combinamos criatividade, inovação e estratégia para fortalecer marcas, 
                    ampliar visibilidade e promover crescimento sustentável. 
                    Atuamos como parceiros de confiança, comprometidos em compreender 
                    cada desafio e transformar objetivos em conquistas reais.
                    </p>
            </div>
            {/*Imagens das Empresas  */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 py-20 items-center px-6 max-w-[1500px] mx-auto ">
            { asImagens.map((image,index)=>(
                <Link key={index} href={`/portfolio/${image.slug}`}>
                <div
                 
                 className="relative overflow-hidden h-[360px] w-[340px] lg:h-[500px] lg:w-[450px]">
            <Image 
                src={image.image} 
                alt={image.nome}
                fill
                className="object-cover rounded-lg bg-red-500"
             />
             <div className="absolute insert-0 bg-gradient-to-t from-black/70 via-black-30 to-transparent"/>
            
            <div className="flex gap-2  absolute bottom-3 left-3 w-full items-center flex-shrink-0">
            <h1 className="text-xl lg:text-2xl  text-white">{image.nome}</h1>
            <span className="text-blue-600 font-bold text-2xl md:text-3xl lg:4xl"> {image.icone} </span>
           </div> 
           </div>
           </Link>


            ))}
            
</div>

           <Footer/>
        </div>
    )
}