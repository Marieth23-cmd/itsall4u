import { CgArrowLongRight } from "react-icons/cg";

export default function Apresentacao() {
  return (
   <section className="w-full flex justify-center">
  <div
    className="
      w-full max-w-[1500px]
      mx-auto px-6 md:px-8 py-14 lg:py-20
      grid grid-cols-1 lg:grid-cols-2
      gap-12 lg:gap-20
      items-center
    "
  >
    {/* COLUNA ESQUERDA */}
    <div>
      <h2 className="text-2xl md:text-3xl lg:text-4xl text-black font-semibold leading-tight mb-6">
        Criamos experiências de marca que geram crescimento real
      </h2>

      <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-xl">
        Unimos estratégia, criatividade e tecnologia para transformar
        marcas em negócios mais fortes, visíveis e rentáveis.
      </p>

      <a
        href="/OqueFizemos"
        className="
          inline-flex items-center gap-3
          text-blue-700 font-medium text-lg
          hover:text-blue-900 transition
        "
      >
        Conheça nossos serviços
        <CgArrowLongRight className="text-2xl transition-transform duration-300 group-hover:translate-x-2" />
      </a>
    </div>

    {/* COLUNA DIREITA */}
    <div className="space-y-4 text-base md:text-lg text-gray-600">
      <p> Estratégia orientada a resultados</p>
      <p> Criatividade com propósito</p>
      <p> Execução focada em performance</p>
    </div>
  </div>
</section>

  );
}
