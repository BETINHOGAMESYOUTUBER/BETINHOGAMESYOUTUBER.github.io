import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import LinkBioButton from '@/components/ui/LinkBioButton';
import { siteConfig } from '@/config/site';
import { getAssetPath } from '@/lib/assets';

export const metadata: Metadata = {
  title: siteConfig.seo.linksTitle,
  description: siteConfig.seo.linksDescription,
};

export default function LinksPage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-[#080417] text-white flex flex-col justify-between p-4 sm:p-6 font-outfit">
      
      <div className="max-w-md mx-auto w-full space-y-8 pt-8">
        
        {/* Creator Profile Header */}
        <div className="text-center space-y-4">
          <div className="relative w-24 h-24 mx-auto rounded-none bg-[#ED3B57] p-1 border border-[#ED3B57] shadow-xl overflow-hidden">
            <Image
              src={getAssetPath('/images/creator-betinho-games.webp')}
              alt={siteConfig.instructorName}
              fill
              priority
              sizes="96px"
              className="object-cover"
            />
          </div>

          <div className="space-y-1">
            <h1 className="text-2xl font-black uppercase tracking-tight text-white">
              {siteConfig.brandName}
            </h1>
            <p className="text-xs font-mono font-bold text-[#8068E8] uppercase tracking-wider">
              {siteConfig.role}
            </p>
            <p className="text-xs text-[#C7C3D5] max-w-xs mx-auto leading-relaxed pt-1">
              Página oficial de links para Instagram, YouTube e curso completo de criação de rostos 3D para PES 2021.
            </p>
          </div>
        </div>

        {/* Action Buttons List */}
        <div className="space-y-3">
          <LinkBioButton
            button={{
              id: 'curso',
              title: 'CURSO FACEMAKER PES 2021',
              subtitle: 'Treinamento completo de criação de faces 3D',
              url: '/curso-facemaker',
              isPrimary: true,
              isEnabled: true,
              utmCampaign: 'bio_instagram_curso',
            }}
          />

          <LinkBioButton
            button={{
              id: 'youtube',
              title: 'OFICIAL — YOUTUBE BETINHO GAMES',
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
              subtitle: 'Acompanhe os bastidores e edições recentes',
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
      <footer className="text-center pt-12 pb-4 space-y-2 text-[11px] text-[#C7C3D5]/60 font-mono">
        <p>© {currentYear} {siteConfig.brandName}. Todos os direitos reservados.</p>
        <div className="flex justify-center gap-4 text-xs font-bold text-white">
          <Link href="/politica-de-privacidade" className="hover:text-[#ED3B57] transition-colors">
            Privacidade
          </Link>
          <span>•</span>
          <Link href="/termos-de-uso" className="hover:text-[#ED3B57] transition-colors">
            Termos
          </Link>
        </div>
      </footer>

    </div>
  );
}
