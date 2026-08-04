'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import SectionTitle from '@/components/ui/SectionTitle';
import Badge from '@/components/ui/Badge';
import { portfolioProjects } from '@/data/portfolio';
import { PortfolioProject } from '@/types';
import PortfolioModal from './PortfolioModal';
import { trackEvent } from '@/lib/analytics';

export default function PortfolioGallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [activeModalProject, setActiveModalProject] = useState<PortfolioProject | null>(null);

  const categories = ['Todos', 'Rosto Personalizado', 'PES 2021 PC', 'PES 2021 PS4'];

  const projectImages: Record<string, string> = {
    'proj-1': '/images/project-01.jpg',
    'proj-2': '/images/project-02.jpg',
    'proj-3': '/images/project-03.jpg',
    'proj-4': '/images/project-04.jpg',
  };

  const filteredProjects = selectedCategory === 'Todos'
    ? portfolioProjects
    : portfolioProjects.filter((p) => p.category === selectedCategory);

  const openProjectModal = (project: PortfolioProject) => {
    trackEvent('view_portfolio_item', { title: project.title });
    setActiveModalProject(project);
  };

  return (
    <section id="projetos" className="py-12 md:py-16 bg-[#080417] border-b border-white/15 overflow-hidden">
      
      {/* Youplay Header Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <SectionTitle
          title="Projetos de Betinho Games"
          subtitle="Catálogo de rostos 3D desenvolvidos no PES eFootball 2021."
          centered={false}
        />

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-none text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#ED3B57] text-white border border-[#ED3B57]'
                  : 'bg-transparent text-[#C7C3D5] hover:bg-white/10 hover:text-white border border-white/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Youplay Slanted Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 py-4">
          {filteredProjects.map((project) => {
            const projectImg = projectImages[project.id] || '/images/project-01.jpg';

            return (
              <div
                key={project.id}
                onClick={() => openProjectModal(project)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openProjectModal(project);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`Ver detalhes do projeto: ${project.title}`}
                className="youplay-card-skew relative bg-[#151035] hover:bg-[#1C1548] border border-white/20 p-5 min-h-[220px] flex flex-col justify-between group overflow-hidden cursor-pointer"
              >
                {/* Background Image */}
                <Image
                  src={projectImg}
                  alt={`Projeto de rosto 3D: ${project.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Dark Overlay inside card */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080417] via-[#151035]/80 to-[#151035]/60 z-10 pointer-events-none"></div>

                {/* Un-skewed Content */}
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
                    <span>{project.platform}</span>
                    <span className="text-[#ED3B57] font-bold group-hover:underline">Ver Projeto →</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      <PortfolioModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
