'use client';

import React from 'react';
import CTAButton from '@/components/ui/CTAButton';
import { courseConfig } from '@/config/course';

export default function FloatingMobileCTA() {
  return (
    <div className="lg:hidden fixed bottom-4 left-4 right-4 z-30">
      <div className="p-3 rounded-none bg-[#0B0822] text-white border border-white/20 shadow-2xl flex items-center justify-between gap-3 backdrop-blur-md">
        <div className="pl-1">
          <span className="text-[10px] uppercase font-bold text-[#8068E8] font-mono tracking-widest block">Curso FaceMaker</span>
          <span className="text-base font-black text-white font-outfit">{courseConfig.formattedPrice}</span>
        </div>
        <CTAButton
          href={courseConfig.checkoutUrl}
          variant="primary"
          size="sm"
          trackingEventName="click_floating_mobile_cta"
          className="py-2 px-3 text-xs font-black uppercase shrink-0"
        >
          QUERO FAZER O CURSO
        </CTAButton>
      </div>
    </div>
  );
}
