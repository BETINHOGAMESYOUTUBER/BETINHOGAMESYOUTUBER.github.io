import React from 'react';
import Image from 'next/image';
import SectionTitle from '@/components/ui/SectionTitle';

export default function WhatYouWillLearn() {
  const cards = [
    {
      step: '01',
      title: 'Referências fotográficas',
      description: 'Aprenda a selecionar e preparar imagens adequadas para iniciar uma face.',
      priceTag: 'ETAPA 01',
      image: '/images/learn-reference-photo.jpg',
      alt: 'Análise e referências fotográficas para criação de face 3D',
    },
    {
      step: '02',
      title: 'Modelagem facial',
      description: 'Conheça o processo de construção e ajuste das características do rosto.',
      priceTag: 'BLENDER 3D',
      image: '/images/learn-facial-modeling.jpg',
      alt: 'Processo de modelagem facial e malha 3D no Blender',
    },
    {
      step: '03',
      title: 'Texturas e detalhes',
      description: 'Trabalhe detalhes visuais para alcançar resultados mais realistas.',
      priceTag: 'PHOTOSHOP',
      image: '/images/learn-textures-details.jpg',
      alt: 'Tratamento de textura de pele e detalhes no Photoshop',
    },
    {
      step: '04',
      title: 'Aplicação no PES 2021',
      description: 'Prepare e finalize a face para utilização no jogo.',
      priceTag: 'PES 2021',
      image: '/images/learn-pes-application.jpg',
      alt: 'Aplicação final do personagem no PES 2021',
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-[#080417] border-b border-white/15 overflow-hidden">
      
      {/* Youplay Header Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 flex items-center justify-between gap-4">
        <SectionTitle
          title="O que você aprenderá"
          subtitle="Os quatro pilares da criação de faces 3D no estilo Youplay Marketplace."
          centered={false}
        />

        {/* Youplay Right See More Button */}
        <a
          href="#conteudo"
          className="px-6 py-2.5 rounded-none bg-transparent border border-white/40 text-xs font-mono font-bold text-white uppercase tracking-widest hover:bg-white/10 transition-all shrink-0"
        >
          See More
        </a>
      </div>

      {/* Youplay Slanted Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 py-4">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="youplay-card-skew relative bg-[#151035] hover:bg-[#1C1548] border border-white/20 p-6 sm:p-8 min-h-[220px] flex flex-col justify-between group overflow-hidden"
            >
              {/* Background Image */}
              <Image
                src={card.image}
                alt={card.alt}
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Dark Overlay inside card */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080417] via-[#151035]/85 to-[#151035]/65 z-10 pointer-events-none"></div>

              {/* Un-skewed Content */}
              <div className="youplay-content-unskew relative z-20 space-y-4 text-center my-auto">
                <span className="text-[10px] font-mono font-bold text-[#8068E8] uppercase tracking-widest block">
                  {card.priceTag}
                </span>

                <h3 className="text-lg sm:text-xl font-black font-outfit text-white uppercase tracking-wider group-hover:text-[#ED3B57] transition-colors leading-tight">
                  {card.title}
                </h3>

                <p className="text-xs text-[#C7C3D5] leading-relaxed line-clamp-2">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
