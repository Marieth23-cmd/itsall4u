import { CgArrowLongRight } from "react-icons/cg";

export default function Apresentacao() {
  return (
    <section className="w-full flex justify-center">
      <div
        className="
          w-full max-w-[1500px]
          mx-auto px-6 md:px-8 py-14 lg:py-16
        
          gap-12 lg:gap-20
          items-center
        "
      >
        {/* COLUNA ESQUERDA */}
        <div className="w-full">
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-black font-semibold leading-tight mb-6">
            Quem Somos
          </h2>

          <p className="text-lg lg:text-xl text-gray-700 mb-6 w-full max-w-6xl">
            Somos uma empresa de marketing dedicada a conectar marcas e pessoas de forma criativa e eficaz. 
            Com uma equipa apaixonada e experiente, transformamos ideias em estratégias de sucesso, 
            ajudando empresas a crescerem, fortalecerem a sua presença digital e conquistarem novos públicos. 
            Acreditamos na inovação, na análise inteligente de dados e na comunicação personalizada para 
            oferecer resultados concretos e duradouros.
          </p>

          <a
            href="/OqueFizemos"
            className="
              group inline-flex items-center gap-3
              text-yellow-400 font-medium text-lg
              hover:text-yellow-800 transition
            "
          >
            Conheça nossos serviços
            <CgArrowLongRight className="text-2xl transition-transform duration-300 group-hover:translate-x-2" />
          </a>
        </div>
      </div>
    </section>
  );
}