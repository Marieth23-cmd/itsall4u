import Image from "next/image"
import Footer from "../Components/Footer"
import Header from "../Components/Header"
import Link from "next/link"

 const imagensEmpresas =[
    {
        image:"https://res.cloudinary.com/dhpa1juyr/image/upload/v1772125016/fotolucrum_pcx7tj.webp",
        nome:"LUCRUM TRUST",
        icone:"→",
        slug:"lucrum-trust"
    },
     {
        image:"https://res.cloudinary.com/dhpa1juyr/image/upload/v1772117697/aipex_lvsazw.png",
        nome:"AIPEX ",
        icone:"→",
        slug:"aipex"
    },
     {
        image:"https://res.cloudinary.com/dhpa1juyr/image/upload/v1772117630/cabship_weem3b.png",
        nome:"CABSHIB ",
        icone:"→",
        slug:"cabship"
    },
     {
        image:"https://res.cloudinary.com/dhpa1juyr/image/upload/v1772118145/resortmangais_yvtelw.jpg",
        nome:"MANGAIS GOLF RISORT ",
        icone:"→",
        slug:"mangais-resort"
    },
     {
        image:"https://res.cloudinary.com/dhpa1juyr/image/upload/v1772118550/farmaclinic_azehky.png",
        nome:"FARMACLINIC ",
        icone:"→",
        slug:"farmaclinic"
    },

     {
        image:"https://res.cloudinary.com/dhpa1juyr/image/upload/v1772119213/flyhotel_rkl9ee.webp",
        nome:"FLYHOTEL",
        icone:"→",
        slug:"fly-hotel"
    },
     {
        image:"https://res.cloudinary.com/dhpa1juyr/image/upload/v1772117186/hidraulicaangola_pstvyl.png",
        nome:"HIDRAULICA DE ANGOLA",
        icone:"→",
        slug:"hidraulica-angola"
    },
     {
        image:"https://res.cloudinary.com/dhpa1juyr/image/upload/v1772117185/portalianca6_eswn0i.png",
        nome:"ALIANÇA SEGUROS ",
        icone:"→",
        slug:"alianca-seguros"
    },
    {
        image:"https://res.cloudinary.com/dhpa1juyr/image/upload/v1772117394/conhecerangola_fq6mha.jpg",
        nome:"CONHECER ANGOLA ",
        icone:"→",
        slug:"conhecer-angola"
    },
    {
        image:"https://res.cloudinary.com/dhpa1juyr/image/upload/v1772116656/academia_rfpyw4.jpg",
        nome:"ACADEMIA DE LIDERENÇA E GESTÃO DE LUANDA ",
        icone:"→",
        slug:"academia-luanda"
    },
    {
        image:"https://res.cloudinary.com/dhpa1juyr/image/upload/v1772015011/waaa_xgirlm.png",
        nome:"WHATABOUT AGENCY ANGOLA",
        icone:"→",
        slug:"waa"
    },
     {
        image:"https://res.cloudinary.com/dhpa1juyr/image/upload/v1772117476/bwizer_ozgw1a.jpg",
        nome:"BWIZER",
        icone:"→",
        slug:"bwizer"
        
    },
    {
        image:"https://res.cloudinary.com/dhpa1juyr/image/upload/v1772117859/geo_m6jwld.png",
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
                  <p className="max-w-2xl text-gray-800 text-xl">
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

                <span className="text-yellow-400 font-bold text-2xl lg:text-3xl shrink-0">
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