import React from 'react';
import SectionTitle from '@/components/ui/SectionTitle';

export default function RequirementsSection() {
  const requirements = [
    'Computador ou notebook.',
    'Equipamento capaz de executar o PES eFootball 2021.',
    'Blender.',
    'Photoshop ou a ferramenta indicada pelo instrutor.',
    'Fotografias de referência.',
    'Tempo para assistir e praticar as aulas.',
    'Interesse em edição e criação de faces.',
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-b border-[#E2E5E9]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionTitle
          badge="Pré-Requisitos"
          title="O que você precisa para acompanhar"
          subtitle="Recursos e requisitos recomendados para aproveitar o conteúdo do treinamento."
        />

        <div className="p-8 rounded-2xl bg-[#F6F7F9] border border-[#E2E5E9] space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {requirements.map((req, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3.5 rounded-lg bg-white border border-[#E2E5E9]">
                <span className="w-2 h-2 rounded-full bg-[#E63946] shrink-0"></span>
                <span className="text-sm font-semibold text-[#17191D]">{req}</span>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-white border border-[#E2E5E9] text-xs text-[#5F6670]">
            <p>
              ℹ️ <strong>Aviso:</strong> Os programas, versões utilizadas e requisitos mínimos do computador deverão ser confirmados antes da publicação definitiva.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
