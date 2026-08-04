import React from 'react';
import SectionTitle from '@/components/ui/SectionTitle';

export default function ProblemSection() {
  const painPoints = [
    {
      title: 'Sem rostos parecidos no jogo',
      description: 'Cansado de jogar com personagens genéricos no PES 2021 que não lembram em nada o seu rosto ou o dos seus amigos.',
      icon: '👤',
    },
    {
      title: 'Sem saber por onde começar',
      description: 'Tentar aprender FaceMaker vendo vídeos soltos na internet e continuar sem compreender o fluxo completo de edição.',
      icon: '❓',
    },
    {
      title: 'Dificuldade com fotos e texturas',
      description: 'Sentir frustração ao tentar transformar uma simples fotografia em uma textura 3D sem que ela fique distorcida ou irreal.',
      icon: '🎨',
    },
    {
      title: 'Falta de processo estruturado',
      description: 'Não conhecer as etapas certas para mapear proporções, ajustar linhas faciais e aplicar o projeto corretamente no jogo.',
      icon: '🛠️',
    },
    {
      title: 'Vontade de criar para outros',
      description: 'Desejar prestar serviços de criação de rostos sob encomenda, mas não ter a confiança técnica necessária.',
      icon: '💼',
    },
    {
      title: 'Falta de portfólio gamer',
      description: 'Gostar de modding e personalização de jogos, mas não possuir projetos reais para demonstrar seu trabalho.',
      icon: '🎮',
    },
  ];

  return (
    <section id="problema" className="py-16 md:py-24 bg-[#10151D] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionTitle
          badge="Dores & Desafios"
          title="Chega de depender de personagens genéricos"
          subtitle="Identifica-se com algum destes obstáculos na hora de personalizar seu jogo?"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="card-gamer p-6 bg-[#161D27] border-white/10 hover:border-red-500/30 transition-all space-y-3 relative group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                {point.icon}
              </div>
              <h3 className="text-lg font-bold font-outfit text-white group-hover:text-red-400 transition-colors">
                {point.title}
              </h3>
              <p className="text-sm text-[#AEB8C4] leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
