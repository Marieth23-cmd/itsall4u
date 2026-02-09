import Image from "next/image";


export default function Visao() {
  return (
    <div className="flex flex-col  items-stretch gap-8 justify-center max-w-[1500px] mx-auto px-8 py-16">
  
 <div 
 className="
    relative flex-1
    h-[650px] md:h-[650px] lg:h-[750px]
    rounded-md overflow-hidden
    shadow-lg transition  
    font-archivo font-normal
    leading-[23.9px] p-8
  "
 >
  
  {/* IMAGEM DE FUNDO */}
  <Image
    src="/empresas/visao.png"
    alt="Visão"
    fill
    className="object-cover bg-cover bg-no-repeat bg-center"
    priority
  />

  {/* OVERLAY para legibilidade */}
  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 via-blue-900/30 to-black/30" />

  {/* CONTEÚDO */}
  <div className="relative z-10 p-6 text-white flex flex-col justify-end h-full">
    <h1 className="text-2xl font-bold mb-2">Visão</h1>
    <p className="text-lg  leading-relaxed flex-wrap lg:max-w-[500px]">
      Ser a agência de marketing digital mais inovadora e centrada no cliente,
      reconhecida por transformar marcas e impulsionar o crescimento sustentável.
      Buscamos criar experiências de marca que não apenas atendam, mas superem as expectativas dos nossos clientes, 
      estabelecendo parcerias duradouras e impactando positivamente a vida das pessoas.
    </p>
     
  </div>

</div>

  {/* Card 2 */}
  <div className=" relative flex-1 h-[650px] md:h-[650px] lg:h-[750px] 
  rounded-md overflow-hidden shadow-lg 
  transition font-normal leading-[23.9px] p-8">
    <Image
      src="/empresas/missao.png"
      alt="Missão"
      fill
      className="object-cover bg-cover bg-no-repeat bg-center rounded-lg shadow-lg"
      priority
    />
    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 via-blue-900/30 to-black/30" />
    {/* CONTEÚDO */}
    <div className="relative z-10 p-6 text-white flex flex-col justify-end h-full">
      <h1 className="text-2xl font-bold mb-2">Missão</h1>
      <p className="text-lg leading-relaxed flex-wrap lg:max-w-[500px]">
        Ser referência em inovação e crescimento, transformando ideias em experiências que impactam pessoas e negócios.
        Ajudamos marcas a crescer de forma inteligente, conectando-as com as pessoas de maneira significativa.
        Aceleramos o crescimento de duas maneiras distintas: impulsionando resultados de negócios transformadores 
        para nossos clientes e criando um ambiente onde nossos colaboradores podem assumir riscos, aprender e prosperar.
      </p>

    </div>
    
  </div>

  {/* Card 3 */}
  <div className="flex-1 relative h-[650px] md:h-[650px] lg:h-[750px] rounded-md overflow-hidden
   shadow-lg transition  font-normal leading-[23.9px] p-8">
    <Image
      src="/empresas/valores.png"
      alt="Valores"
      fill
      className="object-cover bg-cover bg-no-repeat bg-center rounded-lg shadow-lg"
      priority
    />
    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 via-blue-900/30 to-black/30" />
    {/* CONTEÚDO */}
    <div className="relative z-10 p-6 text-white flex flex-col justify-end h-full">
      <h1 className="text-2xl font-bold mb-2">Valores</h1>
      <p className="text-lg leading-relaxed flex-wrap lg:max-w-[500px]">
        Impacto, colaboração, confiança e paixão são os valores que guiam nossa atuação. 
        Acreditamos em criar impacto positivo, trabalhar em equipe, construir confiança e 
        manter a paixão pelo que fazemos.
        Esses valores são a base do nosso compromisso em entregar resultados excepcionais e construir relacionamentos duradouros com nossos clientes e colaboradores.
      </p>
    </div>
  </div>

</div>

  );
}
