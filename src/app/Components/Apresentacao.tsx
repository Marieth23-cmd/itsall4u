import Script from "next/script";
import { CgArrowLongRight } from "react-icons/cg";


export default function Apresentacao() {
  return (
    <>
      {/* LORDICON SCRIPT */}
      <Script
        src="https://cdn.lordicon.com/lordicon.js"
        strategy="afterInteractive"
      />

      <section className="w-full flex justify-center">
        <div
          className="
            lg:flex w-full max-w-[1500px]
            mx-auto px-8 py-24
            gap-20
            items-center
            font-[family-name:var(--font-geist-sans)]
          "
        >
          {/* TEXTO */}
          <div className="flex-1 max-w-[700px]">
            <h1 className="text-black text-4xl leading-tight mb-6">
              Criamos experiências de marca que geram crescimento
            </h1>

            <p className="text-black text-lg leading-relaxed mb-4">
             Não somos apenas uma agência digital. Somos uma empresa de marketing 
             e estratégia que ajuda marcas a crescer, vender mais e comunicar melhor.
            </p>

            <p className="text-black text-lg leading-relaxed mb-8">
                 Unimos estratégia, criatividade e tecnologia para transformar 
                ideias em resultados mensuráveis — leads, vendas e posicionamento
                sólido no mercado.”
            </p>

            <button
              className="
                bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800
                px-8 py-3
                rounded-lg
                hidden lg:flex
                items-center gap-3
                text-white text-lg
                whitespace-nowrap
                hover:from-blue-700 hover:via-blue-800 hover:to-blue-900
              "
            >
              Nossos Serviços
               <CgArrowLongRight className="text-2xl" />
            </button>
          </div>

         
        </div>
      </section>
    </>
  );
}
