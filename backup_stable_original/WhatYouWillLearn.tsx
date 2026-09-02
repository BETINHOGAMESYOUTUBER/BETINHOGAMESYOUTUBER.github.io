import React from 'react';
import Image from 'next/image';
import { getAssetPath } from '@/lib/assets';

export default function WhatYouWillLearn() {
  const items = [
    {
      step: 'ETAPA 01',
      title: 'Referências fotográficas',
      description: 'Aprenda a selecionar e preparar imagens adequadas para iniciar uma face.',
      image: '/images/learn-reference-photo.jpg',
    },
    {
      step: 'BLENDER 3D',
      title: 'Modelagem facial',
      description: 'Conheça o processo de construção e ajuste das características do rosto.',
      image: '/images/learn-facial-modeling.jpg',
    },
    {
      step: 'PHOTOSHOP',
      title: 'Texturas e detalhes',
      description: 'Trabalhe detalhes visuais para alcançar resultados mais realistas.',
      image: '/images/learn-textures-details.jpg',
    },
    {
      step: 'PES 2021',
      title: 'Aplicação no PES 2021',
      description: 'Prepare e finalize a face para utilização no jogo.',
      image: '/images/learn-pes-application.jpg',
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-[#080417] border-b border-white/15 overflow-hidden">
      
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 flex items-center justify-between gap-4">
        <div className="space-y-1">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-outfit uppercase leading-none">
            O que você aprenderá
          </h2>
          <p className="text-xs sm:text-sm text-[#C7C3D5] leading-relaxed pt-1">
            Os quatro pilares da criação de faces 3D no estilo Youplay Marketplace.
          </p>
        </div>

        <a
          href="#oferta"
          className="px-6 py-2.5 rounded-none bg-transparent border border-white/40 text-xs font-mono font-bold text-white uppercase tracking-widest hover:bg-white/10 transition-all shrink-0"
        >
          VER MAIS
        </a>
      </div>

      {/* Grid of Slanted Youplay Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 py-4">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="youplay-card-skew relative bg-[#151035] hover:bg-[#1C1548] border border-white/20 p-6 sm:p-8 min-h-[220px] flex flex-col justify-between group overflow-hidden"
            >
              {/* Card Background Image */}
              <Image
                src={getAssetPath(item.image)}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Gradient Overlay for Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080417] via-[#151035]/85 to-[#151035]/65 z-10 pointer-events-none" />

              {/* Unskewed Text Content */}
              <div className="youplay-content-unskew relative z-20 space-y-4 text-center my-auto">
                <span className="text-[10px] font-mono font-bold text-[#8068E8] uppercase tracking-widest block">
                  {item.step}
                </span>

                <h3 className="text-lg sm:text-xl font-black font-outfit text-white uppercase tracking-wider group-hover:text-[#ED3B57] transition-colors leading-tight">
                  {item.title}
                </h3>

                <p className="text-xs text-[#C7C3D5] leading-relaxed line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
