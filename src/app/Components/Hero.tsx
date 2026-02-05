"use client";
import { useEffect } from "react";


export default function Hero() {

   useEffect(() => {
  const video = document.getElementById("hero-video") as HTMLVideoElement;
  if (video) video.playbackRate = 0.8;
}, []);




  return (
   <section className="relative w-full flex justify-center overflow-hidden mt-28">
  <div className="relative w-full max-w-[1500px] h-[800px] rounded-3xl overflow-hidden">

    {/* VIDEO */}
    <video
      id="hero-video"
      autoPlay
      muted
      loop
      playsInline
      className="w-full h-full object-cover"
    >
      <source src="/video/hero.mp4" type="video/mp4" />
    </video>

    {/* OVERLAY */}
    <div className="absolute inset-0 bg-black/30" />

    {/* TEXTO */}
    <div className="absolute inset-0 flex items-center justify-center text-center px-6">
      <h1 className="text-white text-3xl md:text-4xl font-medium tracking-wide">
        Estratégia. Criatividade. Resultados.
      </h1>
    </div>

  </div>
</section>

  );
}
