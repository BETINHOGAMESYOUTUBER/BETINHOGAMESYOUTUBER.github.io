'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LinkBioButton from '@/components/ui/LinkBioButton';
import { bioLinks } from '@/config/links';
import { siteConfig } from '@/config/site';
import { getAssetPath } from '@/lib/assets';

export default function LinksPage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-[#08051B] text-white flex flex-col justify-between p-4 sm:p-6">
      
      <div className="max-w-md mx-auto w-full space-y-6 pt-6 sm:pt-10">
        
        {/* Creator Header Profile */}
        <div className="text-center space-y-3">
          <div className="w-24 h-24 rounded-none bg-[#ED3B57] p-1 mx-auto relative overflow-hidden border border-[#ED3B57] shadow-xl">
            <Image
              src={getAssetPath('/images/creator-betinho-games.webp')}
              alt={siteConfig.brandName}
              fill
              sizes="96px"
              className="object-cover"
              priority
            />
          </div>

          <div className="space-y-1">
            <h1 className="text-xl font-black font-outfit uppercase tracking-tight text-white">
              {siteConfig.brandName}
            </h1>
            <p className="text-xs text-[#C7C3D5] font-mono">
              {siteConfig.role}
            </p>
          </div>
        </div>

        {/* Bio Links List */}
        <div className="space-y-3">
          {bioLinks
            .filter((btn) => btn.isEnabled)
            .map((btn) => (
              <LinkBioButton key={btn.id} button={btn} />
            ))}

          <LinkBioButton
            button={{
              id: 'course-landing',
              title: 'OFICIAL CURSO FACEMAKER PES 2021',
              subtitle: 'Acesse a página oficial do treinamento completo',
              url: '/curso-facemaker',
              isPrimary: true,
              isEnabled: true,
              utmCampaign: 'bio_instagram_curso',
            }}
          />

          <LinkBioButton
            button={{
              id: 'youtube',
              title: 'OFICIAL YOUTUBE BETINHO GAMES',
              subtitle: 'Gameplays, tutoriais e novidades do PES 2021',
              url: siteConfig.social.youtube.url,
              isPrimary: false,
              isEnabled: true,
              isExternal: true,
              utmCampaign: 'bio_instagram_youtube',
            }}
          />

          <LinkBioButton
            button={{
              id: 'instagram',
              title: 'INSTAGRAM @BETINHO_GAMES',
              subtitle: 'Bastidores, novos projetos e contato',
              url: siteConfig.social.instagram.url,
              isPrimary: false,
              isEnabled: true,
              isExternal: true,
              utmCampaign: 'bio_instagram_profile',
            }}
          />
        </div>

      </div>

      {/* Footer */}
      <footer className="text-center pt-12 pb-6 space-y-3 text-[11px] text-[#C7C3D5]/70 font-mono px-4 max-w-lg mx-auto">
        <div className="flex justify-center gap-4 text-xs font-bold text-white font-sans">
          <Link href="/politica-de-privacidade" className="hover:text-[#ED3B57] transition-colors">
            Privacidade
          </Link>
          <span>•</span>
          <Link href="/termos-de-uso" className="hover:text-[#ED3B57] transition-colors">
            Termos
          </Link>
          <span>•</span>
          <Link href="/politica-de-cookies" className="hover:text-[#ED3B57] transition-colors">
            Cookies
          </Link>
        </div>

        <p>© {currentYear} {siteConfig.brandName}. Todos os direitos reservados.</p>

        {siteConfig.platformDisclaimer?.enabled && (
          <p className="text-[10px] text-[#C7C3D5]/60 leading-relaxed font-sans pt-1">
            {siteConfig.platformDisclaimer.text}
          </p>
        )}

        {siteConfig.developerCredit?.enabled && (
          <p className="text-[11px] text-[#C7C3D5]/80 font-sans pt-1">
            {siteConfig.developerCredit.label}{' '}
            <a
              href={siteConfig.developerCredit.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={siteConfig.developerCredit.ariaLabel}
              className="text-white hover:text-[#ED3B57] font-semibold underline underline-offset-2 transition-colors focus:outline-none focus:ring-1 focus:ring-[#ED3B57]"
            >
              {siteConfig.developerCredit.name}
            </a>
            .
          </p>
        )}
      </footer>

    </div>
  );
}
