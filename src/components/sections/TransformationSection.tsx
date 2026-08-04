import React from 'react';
import SectionTitle from '@/components/ui/SectionTitle';

export default function TransformationSection() {
  const steps = [
    {
      stepNumber: 'Etapa 1',
      title: 'Escolha da referência',
      description: 'Seleção de fotografias adequadas para orientar a construção do rosto.',
    },
    {
      stepNumber: 'Etapa 2',
      title: 'Preparação do projeto',
      description: 'Organização dos arquivos, materiais e ferramentas utilizados no trabalho.',
    },
    {
      stepNumber: 'Etapa 3',
      title: 'Criação e ajustes',
      description: 'Desenvolvimento da estrutura facial e ajuste das principais características.',
    },
    {
      stepNumber: 'Etapa 4',
      title: 'Finalização no jogo',
      description: 'Refinamento e preparação da face para utilização no PES eFootball 2021.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F6F7F9] border-b border-[#E2E5E9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionTitle
          badge="Passo a Passo"
          title="Como funciona o processo de criação"
          subtitle="Conheça as quatro etapas fundamentais seguidas durante o desenvolvimento das faces 3D."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-white border border-[#E2E5E9] space-y-3 relative shadow-sm"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#E63946] font-mono">
                  {item.stepNumber}
                </span>
                <span className="w-6 h-6 rounded-full bg-[#111318] text-white flex items-center justify-center text-xs font-bold font-mono">
                  {idx + 1}
                </span>
              </div>

              <h3 className="text-lg font-bold font-outfit text-[#17191D]">
                {item.title}
              </h3>

              <p className="text-sm text-[#5F6670] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
