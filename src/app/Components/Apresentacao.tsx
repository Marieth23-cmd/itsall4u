import { CgArrowLongRight } from "react-icons/cg";

export default function Apresentacao() {
  return (
    <section className="w-full flex justify-center">
      <div
        className="
          w-full max-w-[1500px]
          mx-auto px-8 py-16
          grid grid-cols-1 lg:grid-cols-2
          gap-12 lg:gap-20
          items-start
        "
      >
        {/* COLUNA ESQUERDA */}
        <div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl  text-black font-semibold leading-tight mb-6">
            Criamos experiências de marca que geram crescimento real
          </h2>

          <p className="text-lg text-gray-800 leading-relaxed mb-6">
            Não somos apenas uma agência digital. Somos uma empresa de marketing
            e estratégia focada em ajudar marcas a crescer, vender mais e
            comunicar melhor.
          </p>

          <a
            href="/OqueFizemos"
            className="
              inline-flex items-center gap-3
              text-blue-700 font-medium text-lg
              hover:text-blue-900 transition cursor-pointer
            "
          >
            Conheça nossos serviços
            <CgArrowLongRight className="text-2xl" />
          </a>
        </div>

        {/* COLUNA DIREITA */}
        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
          <p>
            Trabalhamos na interseção entre estratégia, criatividade e
            tecnologia para transformar ideias em resultados mensuráveis.
          </p>

          <p>
            Criamos soluções que geram leads, aumentam vendas e fortalecem o
            posicionamento das marcas no mercado.
          </p>

          <p>
            Mais do que projetos, construímos parcerias duradouras com impacto
            real nos negócios dos nossos clientes.
          </p>
        </div>
      </div>
    </section>
  );
}
