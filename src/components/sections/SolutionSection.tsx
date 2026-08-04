import React from 'react';
import Image from 'next/image';
import SectionTitle from '@/components/ui/SectionTitle';
import CTAButton from '@/components/ui/CTAButton';

export default function SolutionSection() {
  const stepsList = [
    'Preparação das referências',
    'Blender e Photoshop',
    'Construção da face',
    'Ajuste de características',
    'Texturas e sombras',
    'Aplicação no jogo',
  ];

  return (
    <section id="apresentacao" className="py-12 md:py-20 bg-[#0D0828] border-b border-white/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <SectionTitle
          badge="FAIXA EDITORIAL"
          title="Transforme fotografias em faces para o jogo"
          subtitle="Processo de modelagem 3D e texturização aplicados ao PES eFootball 2021."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Panoramic Editorial Poster Tile with Real Image */}
          <div className="lg:col-span-6">
            <div className="card-gamer-dark rounded-none p-4 bg-[#151035] border-white/20 space-y-4 shadow-none">
              <div className="aspect-[16/9] rounded-none bg-[#0D0828] border border-white/15 relative overflow-hidden flex items-end p-4">
                <Image
                  src="/images/workflow-transform-photo-to-face3d.jpg"
                  alt="Fluxo completo de transformação de fotografia em face 3D para game de futebol"
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080417] via-[#080417]/50 to-transparent z-10"></div>
                <h3 className="text-sm font-black font-outfit text-white uppercase tracking-wider relative z-20">
                  Fluxo de Transformação Fotográfica 3D
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border border-white/15">
                <div className="p-3 bg-[#0D0828] border-r border-white/15 text-center space-y-1">
                  <span className="text-xs font-mono font-bold text-[#8068E8] block">01</span>
                  <h4 className="text-xs font-bold text-white uppercase">Fotografia</h4>
                  <p className="text-[10px] text-[#C7C3D5]">Referência real</p>
                </div>

                <div className="p-3 bg-[#0D0828] border-r border-white/15 text-center space-y-1">
                  <span className="text-xs font-mono font-bold text-[#ED3B57] block">02</span>
                  <h4 className="text-xs font-bold text-white uppercase">Edição 3D</h4>
                  <p className="text-[10px] text-[#C7C3D5]">Blender / Photoshop</p>
                </div>

                <div className="p-3 bg-[#0D0828] text-center space-y-1">
                  <span className="text-xs font-mono font-bold text-[#313A82] block">03</span>
                  <h4 className="text-xs font-bold text-[#ED3B57] uppercase">PES 2021</h4>
                  <p className="text-[10px] text-[#C7C3D5]">No gramado</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Text */}
          <div className="lg:col-span-6 space-y-5 text-[#C7C3D5] leading-relaxed">
            <p className="text-sm sm:text-base">
              O <strong className="text-white">Curso FaceMaker</strong> apresenta o processo utilizado para desenvolver rostos personalizados para o PES eFootball 2021. O aluno conhecerá os materiais, as ferramentas e as etapas utilizadas na construção, edição e finalização de uma face 3D.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs text-white font-semibold uppercase tracking-wider font-outfit">
              {stepsList.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 p-3 bg-[#151035] border border-white/15 rounded-none">
                  <span className="w-1.5 h-1.5 bg-[#ED3B57]"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <CTAButton
                href="#oferta"
                variant="outline"
                size="md"
                trackingEventName="click_solution_section_cta"
              >
                Quero fazer o curso →
              </CTAButton>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
