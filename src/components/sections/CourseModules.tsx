import React from 'react';
import Image from 'next/image';
import SectionTitle from '@/components/ui/SectionTitle';
import { courseModules } from '@/data/modules';

export default function CourseModules() {
  const lessonImages: Record<number, { image: string; alt: string }> = {
    1: {
      image: '/images/lesson-01-introduction.jpg',
      alt: 'Introdução ao FaceMaker e visão geral do projeto',
    },
    2: {
      image: '/images/lesson-02-materials.jpg',
      alt: 'Estação de trabalho e materiais necessários para criação de faces',
    },
    3: {
      image: '/images/lesson-03-preparation.jpg',
      alt: 'Alinhamento e calibração da foto com a malha 3D',
    },
    4: {
      image: '/images/lesson-04-face-creation.jpg',
      alt: 'Escultura 3D e criação das características faciais',
    },
    5: {
      image: '/images/lesson-05-finalization.jpg',
      alt: 'Finalização e exportação da face para o jogo',
    },
  };

  return (
    <section id="conteudo" className="py-12 md:py-16 bg-[#060312] border-b border-white/15 overflow-hidden">
      
      {/* Youplay Header Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 flex items-center justify-between gap-4">
        <SectionTitle
          title="Conteúdo das videoaulas"
          subtitle="Organização das 5 videoaulas do treinamento no catálogo."
          centered={false}
        />

        {/* Youplay Right See More Button */}
        <a
          href="#oferta"
          className="px-6 py-2.5 rounded-none bg-transparent border border-white/40 text-xs font-mono font-bold text-white uppercase tracking-widest hover:bg-white/10 transition-all shrink-0"
        >
          See More
        </a>
      </div>

      {/* Youplay Slanted Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5 py-4">
          {courseModules.map((module) => {
            const lessonMedia = lessonImages[module.number] || {
              image: '/images/lesson-01-introduction.jpg',
              alt: `Aula 0${module.number}`,
            };

            return (
              <div
                key={module.id}
                className="youplay-card-skew relative bg-[#151035] hover:bg-[#1C1548] border border-white/20 p-5 min-h-[240px] flex flex-col justify-between group overflow-hidden"
              >
                {/* Background Image */}
                <Image
                  src={lessonMedia.image}
                  alt={lessonMedia.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 250px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Dark Overlay inside card */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#060312] via-[#151035]/85 to-[#151035]/65 z-10 pointer-events-none"></div>

                {/* Un-skewed Content */}
                <div className="youplay-content-unskew relative z-20 space-y-3 flex flex-col justify-between h-full">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-0.5 rounded-none bg-[#ED3B57]/20 text-[#ED3B57] text-[10px] font-mono font-bold uppercase border border-[#ED3B57]/40">
                        AULA 0{module.number}
                      </span>
                      <span className="text-[10px] font-mono font-bold text-[#8068E8] uppercase">
                        PES 2021
                      </span>
                    </div>

                    <h3 className="text-sm font-black font-outfit text-white uppercase tracking-wider group-hover:text-[#ED3B57] transition-colors leading-tight">
                      {module.title}
                    </h3>

                    <p className="text-[11px] text-[#C7C3D5] leading-relaxed line-clamp-3">
                      {module.description}
                    </p>
                  </div>

                  {module.topics && module.topics.length > 0 && (
                    <div className="pt-2 border-t border-white/10 text-[10px] font-mono text-[#8068E8]">
                      <span>{module.topics.length} tópicos incluídos</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
