import React from 'react';
import Image from 'next/image';
import { courseConfig } from '@/config/course';
import CTAButton from '@/components/ui/CTAButton';
import Badge from '@/components/ui/Badge';

export default function OfferCard() {
  const offerHighlights = [
    'Curso online',
    'Videoaulas práticas',
    'Blender e Photoshop',
    'Processo voltado para PES 2021',
    'Conteúdo indicado para iniciantes',
  ];

  return (
    <section id="oferta" className="py-12 md:py-20 bg-[#080417] text-white border-b border-white/15 overflow-hidden relative">
      
      {/* Background Artwork Image with Dark Subtle Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/cta-final-facemaker.jpg"
          alt="Capa de oferta do Curso FaceMaker"
          fill
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080417] via-[#080417]/90 to-[#080417]/70 z-10 pointer-events-none" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="card-gamer-dark rounded-none p-8 sm:p-12 bg-[#151035]/90 border-white/20 text-center space-y-8 shadow-none relative backdrop-blur-sm">
          
          <div className="flex justify-center">
            <Badge variant="red">CURSO FACEMAKER</Badge>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl sm:text-4xl font-black font-outfit text-[#FFFFFF] uppercase tracking-tight">
              Comece agora a criar suas próprias faces 3D
            </h2>
            <p className="text-[#ED3B57] text-base font-bold font-outfit uppercase tracking-wider">
              {courseConfig.name}
            </p>
          </div>

          {/* Highlights List */}
          <div className="max-w-md mx-auto space-y-2 text-left text-xs text-[#C7C3D5] p-5 bg-[#0D0828] border border-white/15 rounded-none font-outfit">
            {offerHighlights.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5">
                <span className="text-[#ED3B57] font-bold">✓</span>
                <span className="text-[#FFFFFF] font-bold uppercase tracking-wider">{item}</span>
              </div>
            ))}
          </div>

          {/* Price */}
          <div className="space-y-1">
            <span className="text-xs uppercase text-[#C7C3D5] font-bold tracking-widest font-mono block">
              Investimento Único
            </span>
            <div className="text-3xl sm:text-5xl font-black text-[#FFFFFF] font-outfit">
              {courseConfig.formattedPrice}
            </div>
          </div>

          {/* Primary Button & Microtext */}
          <div className="max-w-md mx-auto space-y-3 pt-1">
            <CTAButton
              href={courseConfig.checkoutUrl}
              variant="primary"
              size="lg"
              fullWidth
              trackingEventName="click_offer_card_cta"
            >
              QUERO FAZER O CURSO
            </CTAButton>

            <div className="space-y-1 text-xs text-[#C7C3D5] font-mono">
              <p>Você será direcionado para o ambiente seguro de pagamento.</p>
              <p className="text-[10px] text-[#C7C3D5]/70">
                As condições e formas de pagamento serão exibidas no ambiente seguro do checkout da InfinitePay.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
