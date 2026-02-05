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
            <h1 className="text-white text-4xl leading-tight mb-6">
              Criamos experiências de marca que geram crescimento
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-4">
             Não somos apenas uma agência digital. Somos uma empresa de marketing 
             e estratégia que ajuda marcas a crescer, vender mais e comunicar melhor.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
                 Unimos estratégia, criatividade e tecnologia para transformar 
                ideias em resultados mensuráveis — leads, vendas e posicionamento
                sólido no mercado.”
            </p>

            <button
              className="
                bg-white text-black
                px-8 py-3
                rounded-lg
                font-semibold
                hover:bg-gray-200
                transition whitespace-nowrap items-center gap-2 flex
              "
            >
              Nossos Serviços
               <CgArrowLongRight className="text-2xl" />
            </button>
          </div>

          {/* LORD ICON */}
          <div className="flex-1 flex justify-center">
            <lord-icon
              src="https://cdn.lordicon.com/xowcggal.json"
              trigger="hover"
              colors="primary:#e63946,secondary:#2ec4b6,tertiary:#2ecc71,quaternary:#2ecc71"
              style={{ width: '300px', height: '300px' }}
            ></lord-icon>

          </div>
        </div>
      </section>
    </>
  );
}
