import Image from "next/image";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function Email(){
    return(
        <div className="bg-blue-100">
            <Header/>
            <div className="pt-36 pb-12 px-6 max-w-[1500px] mx-auto text-center ">

                <section className="flex min-h-[650px] w-full shadow-2xl rounded-2xl overflow-hidden bg-white">
  
                    {/* Lado esquerdo */}
                    <div className="w-1/2 relative flex flex-col justify-center items-center 
                    bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 text-white p-12">

                        <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

                        <h2 className="text-3xl font-light mb-6 text-center leading-snug">
                        Dê vida à sua marca.
                        </h2>

                        <div className="relative w-full max-w-md flex justify-center">
                        <Image
                            src="/itsall/ilustration.png"
                            alt="Crescimento"
                            width={450}
                            height={400}
                            className="object-contain drop-shadow-2xl"
                        />
                        </div>
                    </div>

                {/* Lado direito */}
                <div className="w-1/2 flex flex-col justify-center gap-5 bg-white p-16">
                    
                    <label className="text-sm font-medium text-gray-700 text-start">
                    Nome da Empresa
                    </label>
                    <input
                    type="text"
                    className="border border-gray-200 rounded-xl py-3 px-4 
                    focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                    outline-none transition-all duration-300"
                    />

                    <label className="text-sm font-medium text-gray-700 text-start">
                    Email
                    </label>
                    <input
                    type="email"
                    className="border border-gray-200 rounded-xl py-3 px-4 
                    focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                    outline-none transition-all duration-300"
                    />

                    <label className="text-sm font-medium text-gray-700 text-start">
                    Telefone
                    </label>
                    <input
                    type="number"
                    className="border border-gray-200 rounded-xl py-3 px-4 
                    focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                    outline-none transition-all duration-300"
                    />

                   

                    <label className="text-sm font-medium text-gray-700 text-start">
                    Mensagem
                    </label>
                    <textarea
                    className="border border-gray-200 rounded-xl py-4 px-4 
                    focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                    outline-none transition-all duration-300"
                    />

                    <button
                    className="mt-4 py-4 rounded-xl 
                    bg-gradient-to-r from-blue-600 to-blue-800 
                    text-white font-medium tracking-wide
                    shadow-lg hover:shadow-xl hover:scale-[1.02]
                    transition-all duration-300"
                    >
                    Enviar 
                    </button>

                </div>
                </section>
            </div>
            <Footer/>
        </div>
    )
}