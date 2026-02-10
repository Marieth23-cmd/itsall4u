"use client";

import Image from "next/image";

const logosTop = [
  "/empresas/empresa1.png",
  "/empresas/empresa2.png",
  "/empresas/empresa3.png",
  "/empresas/empresa4.png",
  "/empresas/empresa5.png",
  "/empresas/empresa6.png",
  "/empresas/empresa7.png",
  "/empresas/empresa8.png",
  "/empresas/empresa9.png",
  "/empresas/empresa10.png",
  "/empresas/empresa21.png",
  "/empresas/empresa22.png",
];

const logosBottom = [
  "/empresas/empresa11.png",
  "/empresas/empresa12.png",
  "/empresas/empresa13.png",
  "/empresas/empresa14.png",
  "/empresas/empresa15.png",
  "/empresas/empresa16.png",
  "/empresas/empresa17.png",
  "/empresas/empresa18.png",
  "/empresas/empresa19.png",
  "/empresas/empresa20.png",
  "/empresas/empresa23.png",
  "/empresas/empresa24.png",
];

export default function CarrosselEmpresas() {
  return (
    <section className="py-24">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-14">
      <h2 className="text-3xl lg:text-4xl font-bold text-black">
        Marcas que confiam no nosso trabalho
      </h2>
    </div>

    <div
      className="
        grid
        grid-cols-2
        sm:grid-cols-3
        md:grid-cols-4
        lg:grid-cols-6
        gap-x-12 gap-y-10
        items-center
      "
    >
      {[...logosTop, ...logosBottom].map((logo, idx) => (
        <div
          key={idx}
          className="flex items-center justify-center opacity-80 hover:opacity-100 transition"
        >
          <div className="h-14 w-32 flex items-center justify-center">
            <Image
              src={logo}
              alt={`Cliente ${idx}`}
              width={150}
              height={80}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        </div>
      ))}
    </div>

  </div>
</section>


  );
}
