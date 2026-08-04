import React from 'react';
import Image from 'next/image';
import SectionTitle from '@/components/ui/SectionTitle';
import Badge from '@/components/ui/Badge';
import CTAButton from '@/components/ui/CTAButton';
import { siteConfig } from '@/config/site';

export default function InstructorSection() {
  return (
    <section id="instrutor" className="py-12 md:py-20 bg-[#0D0828] border-b border-white/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <SectionTitle
          badge="TRAJETÓRIA TÉCNICA"
          title="Conheça o criador do curso"
          subtitle="Histórico na edição do PES eFootball desde 2018."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Visual Column */}
          <div className="lg:col-span-4 mx-auto w-full max-w-sm lg:max-w-none">
            <div className="card-gamer-dark rounded-none p-6 bg-[#151035] border-white/20 text-white space-y-5 text-center shadow-none">
              
              {/* Photo Avatar Box with Official Betinho Image */}
              <div className="w-28 h-28 rounded-none bg-[#ED3B57] p-1 mx-auto relative overflow-hidden border border-[#ED3B57] shadow-lg">
                <Image
                  src="/images/creator-betinho-games.webp"
                  alt="Betinho Games — Criador e Editor FaceMaker"
                  fill
                  sizes="120px"
                  className="object-cover"
                />
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-black font-outfit text-white uppercase">
                  {siteConfig.brandName}
                </h3>
                <p className="text-[11px] text-[#ED3B57] font-bold uppercase font-mono tracking-wider">
                  {siteConfig.role}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 space-y-2 text-xs text-[#C7C3D5]">
                <Badge variant="red">Atuação desde 2018</Badge>
                <p className="pt-1 font-semibold text-white uppercase tracking-wider text-[11px] font-outfit">Equipe Copa LE Patch</p>
              </div>

            </div>
          </div>

          {/* Right Bio Column */}
          <div className="lg:col-span-8 space-y-4 text-[#C7C3D5] leading-relaxed">
            <div className="space-y-2">
              <Badge variant="purple">BetinhoGames</Badge>
              <h3 className="text-xl sm:text-2xl font-black font-outfit text-white uppercase">
                Edição de faces para a franquia PES e eFootball
              </h3>
            </div>

            <p className="text-xs sm:text-sm">
              Olá, meu nome é <strong className="text-white">Betinho</strong> e sou conhecido como <strong className="text-white">BetinhoGames</strong>. Trabalho como editor de eFootball da franquia PES desde 2018, atuando principalmente na criação de rostos para jogos.
            </p>

            <p className="text-xs sm:text-sm">
              Também participo da criação de faces para a equipe <strong className="text-white">Copa LE Patch</strong>. Criei este curso para compartilhar os materiais, ferramentas e etapas utilizadas no processo de criação de faces para o PES eFootball 2021.
            </p>

            <p className="text-xs sm:text-sm">
              No curso, apresento as ferramentas e o fluxo prático de edição. O objetivo é ajudar o aluno a desenvolver essa habilidade em seu próprio computador e criar projetos cada vez mais completos.
            </p>

            <div className="p-3 bg-[#151035] border border-white/15 text-xs text-[#C7C3D5] space-y-1 font-mono">
              <strong className="text-white block uppercase">Nota de Responsabilidade:</strong>
              <p className="text-[11px]">
                Com prática e evolução técnica, o aluno poderá utilizar o conhecimento para desenvolver portfólio e prestar serviços personalizados. Não existe garantia de renda ou de resultados profissionais.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <CTAButton
                href={siteConfig.social.instagram.url}
                variant="outline"
                size="sm"
                trackingEventName="click_instructor_instagram"
              >
                Acompanhar no Instagram
              </CTAButton>

              <CTAButton
                href={siteConfig.social.youtube.url}
                variant="outline"
                size="sm"
                trackingEventName="click_instructor_youtube"
              >
                Assistir no YouTube
              </CTAButton>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
