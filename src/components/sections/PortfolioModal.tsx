'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Badge from '@/components/ui/Badge';
import CTAButton from '@/components/ui/CTAButton';
import { PortfolioProject } from '@/types';
import { getAssetPath } from '@/lib/assets';

interface PortfolioModalProps {
  project: PortfolioProject;
  onClose: () => void;
}

export default function PortfolioModal({ project, onClose }: PortfolioModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-4xl bg-[#151035] border border-white/20 text-white rounded-none p-6 sm:p-8 space-y-6 shadow-2xl my-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-start justify-between gap-4 border-b border-white/15 pb-4">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="purple">{project.category}</Badge>
              <span className="text-xs font-mono font-bold text-[#8068E8]">{project.platform}</span>
            </div>
            <h2 id="modal-title" className="text-xl sm:text-2xl font-black font-outfit uppercase tracking-tight text-white">
              {project.title}
            </h2>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Fechar modal de detalhes do projeto"
            className="p-2 rounded-none bg-[#0D0828] border border-white/15 text-white hover:text-[#ED3B57] focus:outline-none"
          >
            ✕
          </button>
        </div>

        {/* 3-Step Process Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Step 1: Reference Photo */}
          <div className="space-y-2 bg-[#0D0828] p-3 border border-white/15 rounded-none text-center">
            <span className="text-[10px] font-mono font-bold text-[#8068E8] uppercase tracking-widest block">
              ESTÁGIO 01: REFERÊNCIA
            </span>
            <div className="aspect-square bg-[#080417] border border-white/10 relative overflow-hidden">
              <Image
                src={getAssetPath('/images/learn-reference-photo.jpg')}
                alt="Fotografia de referência original"
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                className="object-cover"
              />
            </div>
            <span className="text-xs font-bold text-white block pt-1">Foto Fotográfica Real</span>
          </div>

          {/* Step 2: Mesh 3D / Wireframe */}
          <div className="space-y-2 bg-[#0D0828] p-3 border border-white/15 rounded-none text-center">
            <span className="text-[10px] font-mono font-bold text-[#ED3B57] uppercase tracking-widest block">
              ESTÁGIO 02: MODELAGEM 3D
            </span>
            <div className="aspect-square bg-[#080417] border border-white/10 relative overflow-hidden">
              <Image
                src={getAssetPath('/images/learn-facial-modeling.jpg')}
                alt="Processo de escultura e malha wireframe 3D"
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                className="object-cover"
              />
            </div>
            <span className="text-xs font-bold text-white block pt-1">Malha 3D Wireframe</span>
          </div>

          {/* Step 3: In-Game Rendering */}
          <div className="space-y-2 bg-[#0D0828] p-3 border border-white/15 rounded-none text-center">
            <span className="text-[10px] font-mono font-bold text-[#313A82] uppercase tracking-widest block">
              ESTÁGIO 03: PES 2021
            </span>
            <div className="aspect-square bg-[#080417] border border-white/10 relative overflow-hidden">
              <Image
                src={getAssetPath('/images/learn-pes-application.jpg')}
                alt="Jogador finalizado renderizado no gramado do PES 2021"
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                className="object-cover"
              />
            </div>
            <span className="text-xs font-bold text-[#ED3B57] block pt-1">Resultado Final no Jogo</span>
          </div>

        </div>

        {/* Project Description */}
        <div className="space-y-3 text-xs sm:text-sm text-[#C7C3D5] leading-relaxed pt-2 border-t border-white/15">
          <h3 className="text-xs font-bold text-white uppercase tracking-wider font-mono">Detalhes da Edição:</h3>
          <p>{project.description}</p>
        </div>

        {/* Modal Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/15">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="px-2 py-0.5 bg-[#0D0828] border border-white/10 text-[10px] font-mono text-white uppercase">
                {tag}
              </span>
            ))}
          </div>

          <div className="w-full sm:w-auto">
            <CTAButton
              href="#oferta"
              variant="primary"
              size="md"
              onClick={onClose}
              trackingEventName="click_modal_cta"
            >
              Aprender este processo →
            </CTAButton>
          </div>
        </div>

      </div>
    </div>
  );
}
