import React from 'react';
import SectionTitle from '@/components/ui/SectionTitle';

export default function DeliverablesSection() {
  const learningItems = [
    'Conhecer os materiais necessários para criação de faces 3D.',
    'Preparar referências fotográficas para iniciar um projeto.',
    'Utilizar Blender e Photoshop no processo de criação.',
    'Desenvolver e ajustar características do rosto.',
    'Trabalhar detalhes visuais para alcançar uma aparência mais realista.',
    'Finalizar a face para utilização no PES eFootball 2021.',
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F6F7F9] border-b border-[#E2E5E9]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionTitle
          badge="Habilidades Técnicas"
          title="O que você aprenderá no curso"
          subtitle="Principais etapas práticas abordadas durante as videoaulas do treinamento."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {learningItems.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-white border border-[#E2E5E9] flex items-start gap-4 shadow-sm"
            >
              <span className="w-7 h-7 rounded-lg bg-[#E63946]/10 text-[#E63946] flex items-center justify-center shrink-0 font-bold text-sm font-mono mt-0.5">
                {idx + 1}
              </span>
              <p className="text-base font-semibold text-[#17191D] leading-snug">
                {item}
              </p>
            </div>
          ))}
        </div>

        {/* Responsible Observation */}
        <div className="p-4 rounded-xl bg-white border border-[#E2E5E9] text-center max-w-2xl mx-auto">
          <p className="text-xs text-[#5F6670]">
            💡 <strong>Observação:</strong> O curso apresenta o processo utilizado pelo instrutor. A evolução dependerá da prática e dedicação de cada aluno.
          </p>
        </div>
      </div>
    </section>
  );
}
