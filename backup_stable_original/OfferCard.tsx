import React from 'react';
import Image from 'next/image';
import CTAButton from '@/components/ui/CTAButton';
import Badge from '@/components/ui/Badge';
import { courseConfig } from '@/config/course';
import { getAssetPath } from '@/lib/assets';

export default function OfferCard() {
  const inclusions = [
    'Acesso completo a todas as videoaulas práticas',
    'Modelagem facial 3D no Blender do início ao fim',
    'Técnicas de texturização e tratamento no Photoshop',
    'Guia de aplicação e integração direta no PES 2021',
  ];

  return (
    <section id="oferta" className="py-12 md:py-20 bg-[#080417] text-white border-b border-white/15 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="card-gamer-dark rounded-none bg-[#151035] border-white/20 p-6 sm:p-10 relative overflow-hidden space-y-8 shadow-none">
          
          {/* Subtle Background Image Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src={getAssetPath('/images/cta-final-facemaker.jpg')}
              alt="Background do treinamento FaceMaker"
              fill
              sizes="100vw"
              className="object-cover opacity-15"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#151035] via-[#151035]/90 to-[#0D0828]" />
          </div>

          <div className="relative z-10 space-y-6">
            
            {/* Top Badges */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/15 pb-6">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="red">ACESSO IMEDIATO</Badge>
                <Badge variant="purple">PES 2021</Badge>
              </div>

              <div className="text-right">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#8068E8] font-bold block">
                  Treinamento Completo
                </span>
                <span className="text-xs font-bold text-white uppercase font-outfit">
                  ACESSO IMEDIATO
                </span>
              </div>
            </div>

            {/* Main Title */}
            <div className="space-y-2 text-left">
              <h2 className="text-2xl sm:text-4xl font-black font-outfit uppercase tracking-tight text-white leading-tight">
                {courseConfig.name}
              </h2>
              <p className="text-sm text-[#C7C3D5] leading-relaxed max-w-2xl">
                Aprenda o processo completo de criação de faces 3D para o PES eFootball 2021 com referências, Blender e Photoshop.
              </p>
            </div>

            {/* Inclusions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
              {inclusions.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 bg-[#0D0828] border border-white/15 rounded-none text-xs text-white"
                >
                  <span className="w-1.5 h-1.5 bg-[#ED3B57] shrink-0 mt-1.5"></span>
                  <span className="font-outfit uppercase font-semibold">{item}</span>
                </div>
              ))}
            </div>

            {/* Price Box */}
            <div className="p-6 bg-[#0D0828] border border-white/20 text-center space-y-4 rounded-none">
              
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase font-bold text-[#8068E8] tracking-widest block">
                  VALOR DE LANÇAMENTO
                </span>

                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-4xl sm:text-5xl font-black text-white font-outfit">
                    {courseConfig.formattedPrice}
                  </span>
                </div>

                <p className="text-xs text-[#C7C3D5] font-mono">
                  Investimento único sem mensalidades.
                </p>
              </div>

              {/* Primary Call to Action */}
              <div className="max-w-md mx-auto space-y-3 pt-2">
                <CTAButton
                  href={courseConfig.checkoutUrl}
                  variant="primary"
                  size="lg"
                  fullWidth
                  trackingEventName="click_offer_card_cta"
                >
                  QUERO FAZER O CURSO
                </CTAButton>

                <div className="flex items-center justify-center gap-2 text-xs text-[#C7C3D5] font-mono">
                  <svg className="w-4 h-4 text-[#ED3B57] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span>{courseConfig.securityMicrotext}</span>
                </div>
              </div>

            </div>

            {/* Guarantee Microtext */}
            <div className="p-4 bg-[#080417] border border-white/10 text-xs text-[#C7C3D5] font-mono space-y-1">
              <strong className="text-white block uppercase font-outfit tracking-wider">
                🛡️ Transparência e Suporte
              </strong>
              <p className="text-[11px] leading-relaxed">
                Este treinamento apresenta materiais, ferramentas e etapas para prática e desenvolvimento técnico. O acesso e as orientações serão fornecidos após a confirmação da inscrição.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
