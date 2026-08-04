import React from 'react';
import CTAButton from '@/components/ui/CTAButton';
import { courseConfig } from '@/config/course';

export default function FinalCTASection() {
  return (
    <section className="py-16 md:py-24 bg-[#111318] text-white border-b border-[#2A2E37]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-outfit text-white tracking-tight">
            Seu próximo rosto no PES pode ser criado por você
          </h2>
          
          <p className="text-base sm:text-lg text-[#9EA6B2] max-w-2xl mx-auto leading-relaxed">
            Conheça o processo utilizado pelo Betinho Games e comece a desenvolver suas próprias faces 3D.
          </p>

          <p className="text-xl font-bold font-outfit text-[#E63946]">
            Curso completo por {courseConfig.formattedPrice}
          </p>
        </div>

        <div className="max-w-md mx-auto space-y-3">
          <CTAButton
            href={courseConfig.checkoutUrl}
            variant="primary"
            size="lg"
            fullWidth
            trackingEventName="click_final_cta"
          >
            Quero começar agora
          </CTAButton>

          <p className="text-xs text-[#9EA6B2]">
            {courseConfig.securityMicrotext}
          </p>
        </div>

      </div>
    </section>
  );
}
