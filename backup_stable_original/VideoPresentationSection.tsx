import React from 'react';
import Image from 'next/image';
import SectionTitle from '@/components/ui/SectionTitle';
import CTAButton from '@/components/ui/CTAButton';
import { courseConfig } from '@/config/course';
import { getAssetPath } from '@/lib/assets';

export default function VideoPresentationSection() {
  const videoConfig = courseConfig.videoSection;
  const topicsList = [
    'Referências fotográficas',
    'Blender',
    'Photoshop',
    'modelagem facial',
    'texturas e aplicação no jogo',
  ];

  return (
    <section id="apresentacao" className="py-12 md:py-20 bg-[#0D0828] text-white border-b border-white/15 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Headline & Subheadline */}
        <SectionTitle
          badge="APRESENTAÇÃO DO CURSO"
          title={videoConfig.title}
          subtitle={videoConfig.description}
        />

        {/* 16:9 Standard Horizontal Video Player Card (Desktop, Tablet, Mobile) */}
        <div className="card-gamer-dark rounded-none bg-[#151035] border-white/20 p-2 sm:p-3 relative overflow-hidden shadow-none max-w-3xl mx-auto w-full">
          <div className="aspect-video w-full rounded-none bg-[#080417] border border-white/15 relative overflow-hidden flex items-center justify-center">
            
            {videoConfig.enabled && videoConfig.videoId ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${videoConfig.videoId}?rel=0&autoplay=0`}
                title={videoConfig.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            ) : (
              <div className="relative w-full h-full flex flex-col items-center justify-center text-center p-4">
                <Image
                  src={getAssetPath(videoConfig.poster || '/images/hero-facemaker-betinho-games.jpg')}
                  alt={videoConfig.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080417] via-[#080417]/80 to-[#151035]/60 z-10 pointer-events-none" />

                <div className="relative z-20 space-y-3 flex flex-col items-center">
                  <button
                    type="button"
                    disabled
                    aria-label="Vídeo de apresentação em breve"
                    aria-disabled="true"
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-none flex items-center justify-center transition-all duration-200 bg-[#151035]/90 border border-white/30 text-white/50 cursor-not-allowed"
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
                      Em breve
                    </span>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>

        {/* Tópicos Box */}
        <div className="max-w-2xl mx-auto p-4 bg-[#151035] border border-white/15 font-mono text-xs text-white text-center space-y-1">
          <span className="text-[#ED3B57] font-bold block uppercase tracking-wider">
            TÓPICOS DO VÍDEO:
          </span>
          <p className="text-[#C7C3D5]">
            {topicsList.join(', ')}.
          </p>
        </div>

        {/* Single Primary CTA Button */}
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
