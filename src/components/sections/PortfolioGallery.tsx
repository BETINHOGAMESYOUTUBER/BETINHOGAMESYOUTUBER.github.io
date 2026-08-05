'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import SectionTitle from '@/components/ui/SectionTitle';
import Badge from '@/components/ui/Badge';
import { portfolioProjects as portfolioData } from '@/data/portfolio';
import { PortfolioProject } from '@/types';
import PortfolioModal from './PortfolioModal';
import { getAssetPath } from '@/lib/assets';

export default function PortfolioGallery() {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [activeProject, setActiveProject] = useState<PortfolioProject | null>(null);

  const filterOptions = [
    { label: 'Todos', value: 'all' },
    { label: 'Rosto Personalizado', value: 'Rosto Personalizado' },
    { label: 'PES 2021 PC', value: 'PES 2021 PC' },
    { label: 'PES 2021 PS4 Desbloqueado', value: 'PES 2021 PS4 Desbloqueado' },
  ];

  const filteredProjects = selectedFilter === 'all'
    ? portfolioData
    : portfolioData.filter((p) => p.category === selectedFilter || p.tags.includes(selectedFilter));

  return (
    <section id="projetos" className="py-12 md:py-16 bg-[#080417] border-b border-white/15 overflow-hidden">
      
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <SectionTitle
          badge="PORTFÓLIO E EDICÕES"
          title="Projetos de Betinho Games"
          subtitle="Catálogo de rostos 3D desenvolvidos no PES eFootball 2021."
        />

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          {filterOptions.map((filter) => (
            <button
              key={filter.value}
              type="button"
              onClick={() => setSelectedFilter(filter.value)}
              className={`px-3 py-1.5 rounded-none text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                selectedFilter === filter.value
                  ? 'bg-[#ED3B57] text-white border border-[#ED3B57]'
                  : 'bg-transparent text-[#C7C3D5] hover:bg-white/10 hover:text-white border border-white/30'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Slanted Portfolio Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 py-4">
          {filteredProjects.map((project) => {
            const projectImg = project.coverImage || '/images/project-01.jpg';

            return (
              <div
                key={project.id}
                onClick={() => setActiveProject(project)}
                tabIndex={0}
                role="button"
                aria-label={`Ver detalhes do projeto: ${project.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveProject(project);
                  }
                }}
                className="youplay-card-skew relative bg-[#151035] hover:bg-[#1C1548] border border-white/20 p-5 min-h-[220px] flex flex-col justify-between group overflow-hidden cursor-pointer"
              >
                {/* Background Image */}
                <Image
                  src={getAssetPath(projectImg)}
                  alt={`Projeto de rosto 3D: ${project.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Dark Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080417] via-[#151035]/80 to-[#151035]/60 z-10 pointer-events-none" />

                {/* Unskewed Text Content */}
                <div className="youplay-content-unskew relative z-20 space-y-3 flex flex-col justify-between h-full text-center">
                  <div className="space-y-2">
                    <Badge variant="purple">{project.category}</Badge>
                    <h3 className="text-sm font-black font-outfit text-white uppercase group-hover:text-[#ED3B57] transition-colors leading-tight pt-1">
                      {project.title}
                    </h3>
                    <p className="text-[11px] text-[#C7C3D5] leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-[#C7C3D5]">
                    <span>{project.tags[0]}</span>
                    <span className="text-[#ED3B57] font-bold group-hover:underline">Ver Projeto →</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Accessible Portfolio Modal */}
      {activeProject && (
        <PortfolioModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}

    </section>
  );
}
