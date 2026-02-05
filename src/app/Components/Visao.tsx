export default function Visao() {
  return (
    <div className="flex flex-col lg:flex-row items-stretch gap-8 justify-center max-w-[1500px] mx-auto px-8 py-16">
      
      {/* Card 1 */}
      <div className="flex-1 bg-blue-700/20 text-white rounded-lg shadow-lg p-6 transition hover:scale-105">
        <h1 className="text-2xl font-bold mb-4">Visão</h1>
        <p className="text-lg leading-relaxed">
          Ajudamos marcas a crescer de forma inteligente, conectando criatividade, tecnologia e estratégia para gerar resultados reais.
        </p>
      </div>

      {/* Card 2 */}
      <div className="flex-1 bg-teal-700/20 text-white rounded-lg shadow-lg p-6 transition hover:scale-105">
        <h1 className="text-2xl font-bold mb-4">Missão</h1>
        <p className="text-lg leading-relaxed">
          Ser referência em inovação e crescimento, transformando ideias em experiências que impactam pessoas e negócios.
        </p>
      </div>

      {/* Card 3 */}
      <div className="flex-1 bg-amber-700/20 text-white rounded-lg shadow-lg p-6 transition hover:scale-105">
        <h1 className="text-2xl font-bold mb-4">Valores</h1>
        <ul className="text-lg leading-relaxed list-disc list-inside space-y-1">
          <li>Impacto</li>
          <li>Colaboração</li>
          <li>Confiança</li>
          <li>Paixão</li>
        </ul>
      </div>

    </div>
  );
}
