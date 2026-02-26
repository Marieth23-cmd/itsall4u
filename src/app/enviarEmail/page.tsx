import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function Email() {
  return (
    <div className="bg-[#F8F7F4]">
      <Header />

      <div className="pt-36 pb-24 px-6 max-w-[1500px] mx-auto">

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* LADO ESQUERDO - INFORMAÇÕES */}
          <div className="flex flex-col justify-center">

            <h1 className="text-3xl lg:text-5xl font-semibold leading-tight text-black mb-6">
              Prontos para elevar
              <span className="block text-yellow-400">
                a sua marca?
              </span>
            </h1>

            <div className="w-16 h-[3px] bg-[#C6A75E] mb-8"></div>

            <p className="text-gray-700 text-lg leading-relaxed mb-12 max-w-md">
              Partilhe connosco os seus objetivos de negócio.
              Desenvolvemos estratégias que conectam marca,
              posicionamento e resultados reais.
            </p>

            <div className="space-y-4 text-gray-800">
              <p><span className="font-medium">Telefone:</span> + (244) 930 611 983</p>
              <p><span className="font-medium">Email:</span> geral@itsall4u.ao</p>
              <p>
                <span className="font-medium">Localização:
                    </span> Zamba 2  Bairro Azul Rua do Banco BFA
              </p>
            </div>

          </div>

          {/* LADO DIREITO - FORMULÁRIO */}
          <div className="bg-white border border-black/5 rounded-2xl p-12 shadow-[0_30px_70px_rgba(0,0,0,0.06)]">

            <h2 className="text-2xl font-semibold mb-10 text-black">
              Inicie uma conversa
            </h2>

            <div className="flex flex-col gap-8">

              <input
                type="text"
                placeholder="Nome completo"
                className="border-b border-black/30 py-4 outline-none
                focus:border-[#C6A75E] transition-colors duration-300
                placeholder:text-gray-500 text-gray-800"
              />

              <input
                type="email"
                placeholder="E-mail comercial"
                className="border-b border-black/30 py-4 outline-none
                focus:border-[#C6A75E] transition-colors duration-300
                placeholder:text-gray-500 text-gray-800"
              />

              <input
                type="text"
                placeholder="Nome da empresa"
                className="border-b border-black/30 py-4 outline-none
                focus:border-[#C6A75E] transition-colors duration-300
                placeholder:text-gray-500 text-gray-800"
              />

              <select
                defaultValue=""
                className="border-b border-black/30 py-4 bg-transparent
                text-gray-700 outline-none
                focus:border-[#C6A75E] transition-colors duration-300"
              >
                <option value="" disabled className="text-gray-500">
                  Serviços de interesse
                </option>
                <option>Planeamento Estratégico</option>
                <option>Comunicação 360°</option>
                <option>Design e Experiências Visuais</option>
                <option>Eventos & Activação</option>
                <option>Gestão de Performance</option>
                <option>Comunicação Institucional</option>
                <option>Website</option>
              </select>

              <textarea
                rows={4}
                placeholder="Conte-nos sobre os seus objetivos"
                className="border-b border-black/30 py-4 outline-none resize-none
                focus:border-[#C6A75E] transition-colors duration-300
                placeholder:text-gray-500 text-gray-800"
              />

              <button
                className="mt-10 px-10 py-4 rounded-full
                bg-black text-white font-medium tracking-wide
                transition-all duration-300
                hover:bg-yellow-400 hover:text-black"
              >
                Enviar
              </button>

            </div>
          </div>

        </section>

      </div>

      <Footer />
    </div>
  );
}