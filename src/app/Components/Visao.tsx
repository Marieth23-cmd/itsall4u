import Image from "next/image";

export default function Visao() {
  return (
    <div className="max-w-[1500px] mx-auto px-4 md:px-8 py-16 space-y-10">

      {[
        {
          title: "Visão",
          image: "/empresas/visao.png",
          text:
            "Ser a agência de marketing digital mais inovadora e centrada no cliente, reconhecida por transformar marcas e impulsionar o crescimento sustentável."
        },
        {
          title: "Missão",
          image: "/empresas/missao.png",
          text:
            "Transformar ideias em experiências que impactam pessoas e negócios, ajudando marcas a crescer de forma inteligente e humana."
        },
        {
          title: "Valores",
          image: "/empresas/valores.png",
          text:
            "Impacto, colaboração, confiança e paixão guiam nossa atuação e sustentam relações duradouras."
        }
      ].map((item, index) => (
        <div
          key={index}
          className="
            relative overflow-hidden rounded-xl shadow-lg
            min-h-[420px] sm:min-h-[480px] md:h-[520px] lg:h-[600px]
          "
        >
          {/* IMAGEM */}
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
            priority
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t 
            from-black/80 
            via-blue-900/40 
            to-black/20
          " />

          {/* CONTEÚDO */}
          <div className="
            relative z-10 h-full
            flex flex-col justify-end
            px-5 py-6
            sm:px-8 sm:py-8
            md:px-10 md:py-10
            text-white
          ">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">
              {item.title}
            </h2>

            <p className="text-base md:text-lg leading-relaxed max-w-[520px] text-gray-200">
              {item.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
