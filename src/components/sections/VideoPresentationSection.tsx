'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import SectionTitle from '@/components/ui/SectionTitle';
import CTAButton from '@/components/ui/CTAButton';
import { courseConfig } from '@/config/course';

export default function VideoPresentationSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoConfig = courseConfig.videoSection;

  const hasValidVideo = Boolean(videoConfig.videoId || videoConfig.videoUrl);

  const handlePlayClick = () => {
    if (hasValidVideo) {
      setIsPlaying(true);
    }
  };

  return (
    <section id="apresentacao-video" className="py-12 md:py-20 bg-[#0D0828] text-white border-b border-white/15 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* 1. Headline */}
        <SectionTitle
          badge="APRESENTAÇÃO DO CURSO"
          title="CONHEÇA O CURSO FACEMAKER"
          centered={true}
        />

        {/* 2. Subheadline */}
        <p className="text-sm sm:text-base text-[#C7C3D5] leading-relaxed text-center max-w-2xl mx-auto">
          Neste vídeo, Betinho Games apresenta a proposta do curso, as ferramentas utilizadas e o processo ensinado para transformar fotografias em faces 3D personalizadas para o PES eFootball 2021.
        </p>

        {/* 3. Vídeo Player 16:9 */}
        <div className="card-gamer-dark rounded-none bg-[#151035] border-white/20 p-2 sm:p-3 relative overflow-hidden shadow-none max-w-3xl mx-auto w-full">
          <div className="aspect-video w-full rounded-none bg-[#080417] border border-white/15 relative overflow-hidden flex items-center justify-center">
            
            {hasValidVideo && isPlaying ? (
              /* Definitive State: Iframe Video Embed */
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${videoConfig.videoId}?autoplay=1&rel=0`}
                title={videoConfig.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full rounded-none border-0"
              />
            ) : (
              /* Provisional or Pre-play State */
              <div className="relative w-full h-full flex flex-col items-center justify-center text-center p-4">
                {/* Poster Image */}
                <Image
                  src={videoConfig.poster || '/images/hero-facemaker-betinho-games.jpg'}
                  alt={videoConfig.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 800px"
                  className="object-cover opacity-40"
                />

                {/* Dark Purple Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080417] via-[#080417]/80 to-[#151035]/60 z-10 pointer-events-none" />

                {/* Play Button & Status Overlay */}
                <div className="relative z-20 space-y-3 flex flex-col items-center">
                  <button
                    type="button"
                    onClick={handlePlayClick}
                    disabled={!hasValidVideo}
                    aria-label={hasValidVideo ? 'Assistir vídeo de apresentação' : 'Vídeo de apresentação em breve'}
                    aria-disabled={!hasValidVideo}
                    className={`w-16 h-16 sm:w-20 sm:h-20 rounded-none flex items-center justify-center transition-all duration-200 ${
                      hasValidVideo
                        ? 'bg-[#ED3B57] text-white hover:scale-105 cursor-pointer shadow-[0_0_20px_rgba(237,59,87,0.5)]'
                        : 'bg-[#151035]/90 border border-white/30 text-white/50 cursor-not-allowed'
                    }`}
                  >
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 fill-current translate-x-0.5" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>

                  <div className="space-y-1 font-outfit uppercase tracking-wider">
                    <span className="text-sm sm:text-base font-black text-white block">
                      VÍDEO DE APRESENTAÇÃO
                    </span>
                    <span className="text-xs font-mono font-bold text-[#8068E8] bg-white/10 px-2.5 py-0.5 inline-block border border-white/15">
                      {hasValidVideo ? 'Clique para assistir' : 'Em breve'}
                    </span>
                  </div>
                </div>

              </div>
            )}

          </div>
        </div>

        {/* 4. Tópicos */}
        <div className="max-w-2xl mx-auto p-4 bg-[#151035] border border-white/15 font-mono text-xs text-white text-center space-y-1">
          <span className="text-[#ED3B57] font-bold block uppercase tracking-wider">TÓPICOS DO VÍDEO:</span>
          <p className="text-[#C7C3D5]">
            Referências fotográficas, Blender, Photoshop, modelagem facial, texturas e aplicação no jogo.
          </p>
        </div>

        {/* 5. Botão */}
        <div className="max-w-md mx-auto pt-2">
          <CTAButton
            href="#oferta"
            variant="primary"
            size="lg"
            fullWidth
            trackingEventName="click_video_section_cta"
          >
            QUERO APRENDER FACEMAKER
          </CTAButton>
        </div>

      </div>
    </section>
  );
}
