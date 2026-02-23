import Image from "next/image"
import Footer from "../Components/Footer"
import Header from "../Components/Header"
import Link from "next/link"

 const imagensEmpresas =[
    {
        image:"/CapaEmpresas/lucrum.jpg",
        nome:"LUCRUM TRUST",
        icone:"→",
        slug:"lucrum-trust"
    },
     {
        image:"/CapaEmpresas/aipex.png",
        nome:"AIPEX ",
        icone:"→",
        slug:"aipex"
    },
     {
        image:"/CapaEmpresas/cabship.png",
        nome:"CABSHIB ",
        icone:"→",
        slug:"cabship"
    },
     {
        image:"/CapaEmpresas/mangais.png",
        nome:"MANGAIS GOLF RISORT ",
        icone:"→",
        slug:"mangais-resort"
    },
     {
        image:"/CapaEmpresas/Farmaclinic.png",
        nome:"FARMACLINIC ",
        icone:"→",
        slug:"farmaclinic"
    },

     {
        image:"/CapaEmpresas/flyhotel.png",
        nome:"FLYHOTEL",
        icone:"→",
        slug:"fly-hotel"
    },
     {
        image:"/CapaEmpresas/hidraulicaangola.png",
        nome:"HIDRAULICA DE ANGOLA",
        icone:"→",
        slug:"hidraulica-angola"
    },
     {
        image:"/CapaEmpresas/alianca.png",
        nome:"ALIANÇA SEGUROS ",
        icone:"→",
        slug:"alianca-seguros"
    },
    {
        image:"/CapaEmpresas/conhecerangola.jpg",
        nome:"CONHECER ANGOLA ",
        icone:"→",
        slug:"conhecer-angola"
    },
    {
        image:"/CapaEmpresas/academia.jpg",
        nome:"ACADEMIA DE LIDERENÇA E GESTÃO DE LUANDA ",
        icone:"→",
        slug:"academia-luanda"
    },
    {
        image:"/CapaEmpresas/waaa.png",
        nome:"WHATABOUT AGENCY ANGOLA",
        icone:"→",
        slug:"waa"
    },
     {
        image:"/CapaEmpresas/Bwizer.png",
        nome:"BWIZER",
        icone:"→",
        slug:"bwizer"
        
    },
    {
        image:"/CapaEmpresas/geo.png",
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
                     Portfólio
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
                 
                 className="relative overflow-hidden h-[400px] w-full lg:h-[600px]">
                <Image 
                src={image.image} 
                alt={image.nome}
                fill
                className="object-cover rounded-lg bg-red-500"
                    />
            <div className="absolute bottom-4 left-4 right-8 flex items-end justify-between">
                <h2 className="text-lg lg:text-2xl text-white font-medium leading-tight max-w-[85%]">
                    {image.nome}
                </h2>

                <span className="text-blue-400 font-bold text-2xl lg:text-3xl shrink-0">
                    {image.icone}
                </span>
                </div>
                </div>
            </Link>


            ))}
            
</div>

           <Footer/>
        </div>
    )
}       