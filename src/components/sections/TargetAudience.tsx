import React from 'react';
import SectionTitle from '@/components/ui/SectionTitle';

export default function TargetAudience() {
  const isForList = [
    'Deseja aprender a criar rostos para PES 2021.',
    'Quer colocar o próprio rosto dentro do jogo.',
    'Gosta de personalização e edição de games.',
    'Tem interesse em Blender e Photoshop.',
    'Deseja desenvolver um portfólio de FaceMaker.',
    'Pretende criar projetos para amigos ou clientes.',
    'Está começando e precisa conhecer o processo completo.',
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F6F7F9] border-b border-[#E2E5E9]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionTitle
          badge="Perfil de Interesse"
          title="Este curso é para você que…"
          subtitle="Confira se os objetivos do treinamento coincidem com o que você procura."
        />

        {/* Clean Checklist Card */}
        <div className="p-8 rounded-2xl bg-white border border-[#E2E5E9] space-y-6 shadow-sm">
          <ul className="space-y-3.5 text-base text-[#17191D]">
            {isForList.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#22A06B]/15 text-[#22A06B] flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                  ✓
                </span>
                <span className="font-semibold">{item}</span>
              </li>
            ))}
          </ul>

          {/* Not For Warning Box */}
          <div className="pt-4 border-t border-[#E2E5E9]">
            <div className="p-4 rounded-xl bg-[#F6F7F9] border border-[#E2E5E9] text-xs text-[#5F6670] flex items-center gap-2">
              <span className="text-[#E63946] font-bold text-sm">⚠️</span>
              <span>
                <strong>Importante:</strong> Este curso não é indicado para quem espera resultados automáticos sem estudar e praticar.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
