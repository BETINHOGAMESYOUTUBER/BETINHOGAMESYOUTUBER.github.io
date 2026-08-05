import React from 'react';
import SectionTitle from '@/components/ui/SectionTitle';

export default function TargetAudienceAndRequirements() {
  const targetItems = [
    'deseja criar rostos para PES 2021;',
    'quer colocar o próprio rosto no jogo;',
    'quer ter uma renda extra com edições personalizadas;',
    'gosta de edição e personalização;',
    'tem interesse em Blender e Photoshop;',
    'deseja desenvolver um portfólio;',
    'pretende criar projetos personalizados;',
    'está começando e quer entender o processo.',
  ];

  const requirementItems = [
    'computador ou notebook;',
    'equipamento capaz de executar as ferramentas;',
    'Blender;',
    'Photoshop;',
    'PES eFootball 2021;',
    'fotografias de referência;',
    'tempo para estudar e praticar;',
    'dedicação para praticar e atender pedidos de clientes.',
  ];

  return (
    <section className="py-12 md:py-20 bg-[#08051B] border-b border-white/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <SectionTitle
          badge="PERFIL & PRÉ-REQUISITOS"
          title="Para quem é o curso & Requisitos"
          subtitle="Confira se este treinamento alinha-se aos seus objetivos e equipamentos."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Panel 1: Target Audience */}
          <div className="card-gamer-dark rounded-none p-6 sm:p-8 bg-[#151035] border-white/15 space-y-6 flex flex-col justify-between shadow-none">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-none bg-[#ED3B57]/15 text-[#ED3B57] border border-[#ED3B57]/30 flex items-center justify-center font-mono font-bold text-sm">
                  ✓
                </div>
                <h3 className="text-lg font-black font-outfit text-white uppercase tracking-wider">
                  Este curso é para você que…
                </h3>
              </div>

              <ul className="space-y-2">
                {targetItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 p-2.5 bg-[#0D0828] border border-white/10 text-xs text-white">
                    <span className="w-1.5 h-1.5 bg-[#ED3B57] shrink-0 mt-1.5"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-3 bg-[#0D0828] border border-white/10 text-xs text-[#C7C3D5] font-mono">
              <p>
                ℹ️ <strong>Importante:</strong> Este curso não é indicado para quem espera resultados automáticos sem estudar e praticar.
              </p>
            </div>
          </div>

          {/* Panel 2: Requirements */}
          <div className="card-gamer-dark rounded-none p-6 sm:p-8 bg-[#151035] border-white/15 space-y-6 flex flex-col justify-between shadow-none">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-none bg-[#6046C7]/20 text-[#8068E8] border border-[#6046C7]/40 flex items-center justify-center font-mono font-bold text-sm">
                  ⚙️
                </div>
                <h3 className="text-lg font-black font-outfit text-white uppercase tracking-wider">
                  O que você precisa
                </h3>
              </div>

              <ul className="space-y-2">
                {requirementItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 p-2.5 bg-[#0D0828] border border-white/10 text-xs text-white">
                    <span className="w-1.5 h-1.5 bg-[#8068E8] shrink-0 mt-1.5"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-3 bg-[#0D0828] border border-white/10 text-xs text-[#C7C3D5] font-mono">
              <p>
                ℹ️ <strong>Observação:</strong> As versões dos programas e os requisitos mínimos exatos devem ser confirmados antes da publicação definitiva.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
