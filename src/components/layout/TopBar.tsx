import React from 'react';
import CTAButton from '@/components/ui/CTAButton';

export default function TopBar() {
  return (
    <div className="bg-[#10151D] border-b border-white/10 text-xs sm:text-sm py-2 px-4 text-[#AEB8C4]">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-[#38F28B] animate-pulse"></span>
          <span>Aprenda a criar rostos realistas para o PES 2021.</span>
        </div>
        <CTAButton
          href="#oferta"
          variant="outline"
          size="sm"
          className="text-xs py-1 px-3 border-[#38F28B]/40 text-[#38F28B] hover:bg-[#38F28B]/10"
        >
          Conhecer o curso
        </CTAButton>
      </div>
    </div>
  );
}
