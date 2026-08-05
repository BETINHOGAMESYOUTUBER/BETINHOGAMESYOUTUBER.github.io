import React from 'react';
import Image from 'next/image';
import SectionTitle from '@/components/ui/SectionTitle';
import CTAButton from '@/components/ui/CTAButton';
import { getAssetPath } from '@/lib/assets';

export default function SolutionSection() {
  const steps = [
    {
      number: '01',
      title: 'ANÁLISE DE REFERÊNCIA',
      description: 'Estudo da fotografia do jogador, ângulos faciais e proporções estruturais.',
    },
    {
      number: '02',
      title: 'MODELAGEM & TEXTURA 3D',
      description: 'Construção da malha wireframe no Blender e refinamento de pele no Photoshop.',
    },
    {
      number: '03',
      title: 'APLICAÇÃO NO PES 2021',
      description: 'Importação dos arquivos finais e alinhamento do modelo 3D no motor do jogo.',
    },
  ];

  return (
    <section id="metodologia" className="py-12 md:py-20 bg-[#0D0828] border-b border-white/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <SectionTitle
          title="Transforme fotografias em faces para o jogo"
          subtitle="Processo de modelagem 3D e texturização aplicados ao PES eFootball 2021."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Panoramic Editorial Poster Tile with Real Image */}
          <div className="lg:col-span-6">
            <div className="card-gamer-dark rounded-none p-4 bg-[#151035] border-white/20 space-y-4 shadow-none">
              <div className="aspect-[16/9] rounded-none bg-[#0D0828] border border-white/15 relative overflow-hidden flex items-end p-4">
                <Image
                  src={getAssetPath('/images/workflow-transform-photo-to-face3d.jpg')}
                  alt="Fluxo completo de transformação de fotografia em face 3D para game de futebol"
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080417] via-[#080417]/50 to-transparent z-10"></div>
                
                <div className="relative z-20 space-y-1">
                  <span className="text-[10px] font-mono font-bold text-[#8068E8] uppercase tracking-widest block">
                    FLUXO DE TRABALHO FACEMAKER
                  </span>
                  <h3 className="text-lg font-black font-outfit text-white uppercase tracking-wider">
                    Fotografia → Blender 3D → PES 2021
                  </h3>
                </div>
              </div>

              <div className="p-3 bg-[#0D0828] border border-white/15 font-mono text-xs text-[#C7C3D5] leading-relaxed">
                Visualização ilustrativa das fases de desenvolvimento: captura visual, manipulação em ambiente 3D e renderização final dentro da partida.
              </div>
            </div>
          </div>

          {/* Right Column: 3 Stepped Process Cards */}
          <div className="lg:col-span-6 space-y-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="card-gamer-dark rounded-none p-5 bg-[#151035] border-white/20 hover:border-white/40 transition-all flex items-start gap-4 shadow-none"
              >
                <div className="w-12 h-12 shrink-0 bg-[#0D0828] border border-white/20 flex items-center justify-center font-mono font-black text-[#ED3B57] text-lg">
                  {step.number}
                </div>

                <div className="space-y-1 text-left">
                  <h3 className="text-sm font-black font-outfit text-white uppercase tracking-wider">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#C7C3D5] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}

            <div className="pt-2">
              <CTAButton
                href="#oferta"
                variant="primary"
                size="md"
                fullWidth
                trackingEventName="click_solution_section_cta"
              >
                Aprender metodologia completa
              </CTAButton>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
