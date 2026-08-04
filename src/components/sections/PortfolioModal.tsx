'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { PortfolioProject } from '@/types';
import Badge from '@/components/ui/Badge';

interface PortfolioModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
}

export default function PortfolioModal({ project, onClose }: PortfolioModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        modalRef.current?.focus();
      }, 50);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        ref={modalRef}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-4xl bg-[#151035] border border-white/20 p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto outline-none rounded-none"
      >
        {/* Header do Modal */}
        <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Badge variant="red">{project.category}</Badge>
              <Badge variant="muted">{project.platform}</Badge>
            </div>
            <h3 id="modal-title" className="text-lg sm:text-2xl font-black font-outfit text-white uppercase">
              {project.title}
            </h3>
          </div>
          
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar janela do projeto"
            className="p-2 rounded-none bg-white/5 border border-white/15 text-[#C7C3D5] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Descrição */}
        <p className="text-xs sm:text-sm text-[#C7C3D5] leading-relaxed">
          {project.description}
        </p>

        {/* Etapas Visuais com Imagens */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="space-y-2">
            <span className="text-[10px] font-mono text-[#C7C3D5] uppercase block">1. Foto de Referência</span>
            <div className="aspect-[4/3] rounded-none bg-[#0D0828] border border-white/15 relative overflow-hidden">
              <Image
                src="/images/learn-reference-photo.jpg"
                alt="Fotografia de referência original"
                fill
                sizes="300px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="space-y-2">
            <span className="text-[10px] font-mono text-[#8068E8] uppercase block">2. Malha 3D / Edição</span>
            <div className="aspect-[4/3] rounded-none bg-[#0D0828] border border-[#6046C7]/40 relative overflow-hidden">
              <Image
                src="/images/learn-facial-modeling.jpg"
                alt="Modelagem 3D no Blender"
                fill
                sizes="300px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="space-y-2">
            <span className="text-[10px] font-mono text-[#ED3B57] uppercase block">3. In-Game PES 2021</span>
            <div className="aspect-[4/3] rounded-none bg-[#0D0828] border border-[#ED3B57]/30 relative overflow-hidden">
              <Image
                src="/images/learn-pes-application.jpg"
                alt="Face finalizada renderizada no estádio"
                fill
                sizes="300px"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="pt-2 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-[#C7C3D5]">
          <div className="flex flex-wrap gap-1.5 font-mono">
            {project.tags.map((tag, i) => (
              <span key={i} className="px-2 py-0.5 rounded-none bg-white/5 border border-white/10 text-[10px]">
                #{tag}
              </span>
            ))}
          </div>
          <span className="text-white/40 font-mono text-[10px]">Pressione ESC para fechar</span>
        </div>
      </div>
    </div>
  );
}
