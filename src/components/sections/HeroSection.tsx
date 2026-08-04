import React from 'react';
import Image from 'next/image';
import Badge from '@/components/ui/Badge';
import CTAButton from '@/components/ui/CTAButton';
import { courseConfig } from '@/config/course';
import { siteConfig } from '@/config/site';
import { getAssetPath } from '@/lib/assets';

export default function HeroSection() {
  const tags = ['Blender', 'Photoshop', 'PES 2021', 'Indicado para iniciantes'];

  return (
    <section className="relative bg-[#080417] text-white py-12 md:py-20 border-b border-white/15 overflow-hidden">
      
      {/* Background Graphic Image with Subtle Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={getAssetPath('/images/hero-facemaker-betinho-games.jpg')}
          alt="Transformação de fotografia em face 3D para game de futebol"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080417] via-[#080417]/95 to-[#151035]/85 z-10 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column (Left Aligned Content) */}
          <div className="lg:col-span-7 space-y-5 text-left">
            
            {/* Selo */}
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="red">CURSO ONLINE DE FACEMAKER</Badge>
              <Badge variant="purple">POR {siteConfig.brandName.toUpperCase()}</Badge>
            </div>

            {/* H1 */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black font-outfit uppercase tracking-tight text-white leading-tight">
              Crie rostos 3D realistas para o PES 2021
            </h1>

            {/* Subheadline */}
            <p className="text-sm sm:text-base text-[#C7C3D5] leading-relaxed max-w-2xl">
              Aprenda com Betinho Games o processo de transformação de fotografias em faces personalizadas utilizando Blender, Photoshop e técnicas aplicadas ao PES eFootball 2021.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-1">
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-none bg-[#151035] border border-white/20 text-xs font-mono font-bold text-white uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Price & CTA */}
            <div className="pt-4 space-y-3 max-w-md">
              <div className="flex items-baseline gap-3">
                <span className="text-xs uppercase text-[#C7C3D5] font-bold tracking-widest font-mono">
                  Investimento único:
                </span>
                <span className="text-3xl sm:text-4xl font-black text-white font-outfit">
                  {courseConfig.formattedPrice}
                </span>
              </div>

              <CTAButton
                href="#oferta"
                variant="primary"
                size="lg"
                fullWidth
                trackingEventName="click_hero_cta"
              >
                COMEÇAR O CURSO
              </CTAButton>

              <div className="flex items-center gap-2 text-xs text-[#C7C3D5] font-mono">
                <svg className="w-4 h-4 text-[#ED3B57] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>{courseConfig.securityMicrotext}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Catalog Poster Tile with Complete Image Display */}
          <div className="lg:col-span-5">
            <div className="card-gamer-dark rounded-none p-4 bg-[#151035] border-white/20 space-y-4 text-center shadow-none relative">
              
              {/* Full 16:9 Image Display without cropping any models */}
              <div className="aspect-video rounded-none bg-[#0D0828] border border-white/15 relative overflow-hidden">
                <Image
                  src={getAssetPath('/images/hero-facemaker-betinho-games.jpg')}
                  alt="Processo completo de transformação: fotografia real, malha 3D wireframe e jogador finalizado"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-contain"
                />
              </div>

              {/* Text Caption below image */}
              <div className="text-left space-y-1 pt-1">
                <span className="text-[10px] font-mono font-bold text-[#8068E8] uppercase tracking-widest block">
                  PES eFootball 2021 — Processo 3D
                </span>
                <h3 className="text-base font-black font-outfit text-[#FFFFFF] uppercase tracking-wider leading-tight">
                  Fotografia → Wireframe → Face 3D
                </h3>
                <p className="text-xs text-[#C7C3D5]">
                  Visualização completa dos três estágios de desenvolvimento
                </p>
              </div>

              <div className="space-y-2 pt-1">
                <CTAButton
                  href="#oferta"
                  variant="outline"
                  size="md"
                  fullWidth
                  trackingEventName="click_hero_card_cta"
                >
                  GARANTIR MINHA VAGA
                </CTAButton>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
