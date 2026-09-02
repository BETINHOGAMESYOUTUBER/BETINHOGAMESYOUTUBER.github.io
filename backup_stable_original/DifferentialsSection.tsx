import React from 'react';
import SectionTitle from '@/components/ui/SectionTitle';

export default function DifferentialsSection() {
  const differentials = [
    {
      title: 'Foco Exclusivo em FaceMaker',
      description: 'Conteúdo direcionado especificamente para a criação e aplicação de rostos digitais realistas.',
      icon: '🎯',
    },
    {
      title: 'Didática Direta para Iniciantes',
      description: 'Explicações passo a passo pensadas para quem está começando do zero na personalização 3D.',
      icon: '💡',
    },
    {
      title: 'Orientação 100% Prática',
      description: 'Aprenda acompanhando a execução real de projetos de transformação facial do início ao fim.',
      icon: '🛠️',
    },
    {
      title: 'Fluxo de Trabalho Organizado',
      description: 'Entenda como preparar pastas, estruturar arquivos e economizar tempo durante as edições.',
      icon: '📋',
    },
    {
      title: 'Foco no Ecossistema PES 2021',
      description: 'Conhecimento ajustado para as necessidades e padrões visuais do PES 2021 no PC e PS4 Desbloqueado.',
      icon: '🎮',
    },
    {
      title: 'Construção de Habilidade Única',
      description: 'Desenvolva uma habilidade criativa diferenciada para criar projetos próprios ou atender clientes.',
      icon: '🚀',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#10151D] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionTitle
          badge="Por que Escolher"
          title="Diferenciais do Treinamento"
          subtitle="O que torna este método focado e eficiente para quem deseja aprender FaceMaker."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((diff, idx) => (
            <div
              key={idx}
              className="card-gamer p-6 bg-[#161D27] border-white/10 space-y-3 hover:border-[#38F28B]/40 transition-all"
            >
              <div className="text-3xl">{diff.icon}</div>
              <h3 className="text-lg font-bold font-outfit text-white">
                {diff.title}
              </h3>
              <p className="text-sm text-[#AEB8C4] leading-relaxed">
                {diff.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
