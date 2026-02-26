import Image from "next/image"

export default function Beneficios() {
  return (
    <section className="relative w-full h-[700px] flex items-start text-white overflow-hidden">

      {/* Imagem de fundo */}
      <Image
        src="https://res.cloudinary.com/dhpa1juyr/image/upload/v1772013470/bene_bvaova.jpg"
        alt="Elegância e Crescimento"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Conteúdo */}
      <div className="relative z-10  w-full">
        <div className="max-w-[1500px] mx-auto px-6 pt-32">
         <div className="max-w-3xl">
        <span className="text-yellow-400 tracking-[0.3em] uppercase text-sm">
          Valor & Crescimento
        </span>

        <h2 className="text-2xl md:text-4xl font-semibold leading-tight mt-6 mb-6">
          Transformamos marcas em referências no mercado
        </h2>

        <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-10">
          Trabalhar connosco significa posicionar a sua marca com estratégia,
          elegância e inteligência. Criamos experiências digitais que aumentam
          autoridade, fortalecem a identidade e geram crescimento real e mensurável.
          Não oferecemos apenas marketing — construímos presença e impacto duradouro.
        </p>

        <a
          href="/OqueFizemos"
          className="px-10 py-4 border border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black transition-all duration-300 rounded-full"
        >
          Fale Connosco
        </a>
        </div>
        </div>
      </div>
    </section>
  )
}