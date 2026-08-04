import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/config/site';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B0822] border-t border-white/15 text-[#C7C3D5] text-xs pt-10 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Column with Official Logo Image */}
          <div className="space-y-3 md:col-span-2">
            <Link
              href="/curso-facemaker"
              className="inline-flex items-center hover:opacity-90 transition-opacity"
              aria-label={siteConfig.brandName}
            >
              <Image
                src="/images/logo-footer-betinho-games.webp"
                alt={siteConfig.brandName}
                width={268}
                height={74}
                style={{ width: 'auto' }}
                className="h-[60px] sm:h-[67px] w-auto object-contain"
              />
            </Link>
            <p className="text-[#C7C3D5] text-xs max-w-md leading-relaxed">
              Catálogo e treinamento de criação de rostos 3D para PES eFootball 2021. Conteúdos e edições desenvolvidos por BetinhoGames.
            </p>
            <div className="flex items-center gap-4 text-xs font-bold text-white font-outfit uppercase tracking-wider">
              <a
                href={siteConfig.social.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ED3B57] transition-colors"
              >
                Instagram {siteConfig.social.instagram.handle}
              </a>
              <span>•</span>
              <a
                href={siteConfig.social.youtube.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ED3B57] transition-colors"
              >
                YouTube {siteConfig.social.youtube.handle}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h3 className="text-white font-bold text-xs font-outfit uppercase tracking-widest">Navegação</h3>
            <ul className="space-y-1.5 text-xs">
              <li>
                <Link href="/curso-facemaker" className="hover:text-[#ED3B57] transition-colors">
                  Curso FaceMaker
                </Link>
              </li>
              <li>
                <Link href="/links" className="hover:text-[#ED3B57] transition-colors">
                  Bio (Instagram)
                </Link>
              </li>
              <li>
                <a href="#apresentacao" className="hover:text-[#ED3B57] transition-colors">
                  Sobre o Curso
                </a>
              </li>
              <li>
                <a href="#instrutor" className="hover:text-[#ED3B57] transition-colors">
                  Sobre Betinho Games
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-2">
            <h3 className="text-white font-bold text-xs font-outfit uppercase tracking-widest">Informações Legais</h3>
            <ul className="space-y-1.5 text-xs">
              <li>
                <Link href="/politica-de-privacidade" className="hover:text-[#ED3B57] transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/termos-de-uso" className="hover:text-[#ED3B57] transition-colors">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link href="/politica-de-cookies" className="hover:text-[#ED3B57] transition-colors">
                  Política de Cookies
                </Link>
              </li>
              <li className="pt-1 text-[11px] text-[#C7C3D5]/80 font-mono">
                Suporte: <a href={`mailto:${siteConfig.legal.contactEmail}`} className="hover:text-white underline">{siteConfig.legal.contactEmail}</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Trademark Disclaimer */}
        <div className="border-t border-white/10 pt-6 space-y-2 text-[11px] text-[#C7C3D5]/70 leading-relaxed font-mono">
          <p>
            PES, eFootball, Blender, Photoshop e marcas mencionadas pertencem aos seus respectivos titulares. Este projeto é independente e não possui vínculo oficial com a Konami ou terceiros.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-2 border-t border-white/10 text-center sm:text-left">
            <p>© {currentYear} {siteConfig.brandName}. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
