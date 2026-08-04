import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { bioLinks } from '@/config/links';
import LinkBioButton from '@/components/ui/LinkBioButton';

export const metadata: Metadata = {
  title: siteConfig.seo.linksTitle,
  description: siteConfig.seo.linksDescription,
  alternates: {
    canonical: `${siteConfig.baseUrl}/links`,
  },
  openGraph: {
    title: siteConfig.seo.linksTitle,
    description: siteConfig.seo.linksDescription,
    url: `${siteConfig.baseUrl}/links`,
  },
};

export default function LinksPage() {
  return (
    <div className="min-h-screen bg-[#080417] text-white flex flex-col justify-between py-8 px-4 sm:px-6">
      
      <main className="max-w-md mx-auto w-full space-y-6 my-auto">
        
        {/* Profile Card Header */}
        <div className="text-center space-y-3">
          <div className="w-24 h-24 rounded-none bg-[#ED3B57] p-1 mx-auto relative overflow-hidden border border-[#ED3B57] shadow-lg">
            <Image
              src="/images/creator-betinho-games.webp"
              alt="Betinho Games"
              fill
              sizes="100px"
              className="object-cover"
            />
          </div>

          <div className="space-y-1">
            <h1 className="text-xl sm:text-2xl font-black font-outfit text-white uppercase tracking-tight">
              {siteConfig.brandName}
            </h1>
            <p className="text-xs font-bold text-[#ED3B57] uppercase tracking-wider font-mono">
              Editor e criador de rostos para PES
            </p>
          </div>

          <p className="text-xs text-[#C7C3D5] max-w-sm mx-auto leading-relaxed">
            Criação de rostos 3D, conteúdos e curso de FaceMaker para PES eFootball 2021.
          </p>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none bg-[#151035] border border-white/15 text-xs text-[#C7C3D5] font-mono">
            <span className="font-semibold text-white">{siteConfig.social.instagram.handle}</span>
            <span>•</span>
            <span className="text-[#8068E8] font-bold">PES 2021 PC/PS4</span>
          </div>
        </div>

        {/* Buttons List */}
        <div className="space-y-2">
          {bioLinks.map((button) => (
            <LinkBioButton key={button.id} button={button} />
          ))}
        </div>

        {/* Quick Social Icons */}
        <div className="flex items-center justify-center gap-6 pt-2 text-[#C7C3D5]">
          <a
            href={siteConfig.social.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ED3B57] transition-colors p-2"
            aria-label="Instagram Betinho Games"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>

          <a
            href={siteConfig.social.youtube.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ED3B57] transition-colors p-2"
            aria-label="YouTube Betinho Games"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
        </div>

      </main>

      {/* Footer */}
      <footer className="text-center text-[11px] font-mono text-[#C7C3D5]/60 pt-6 border-t border-white/15 space-y-2">
        <p>© {new Date().getFullYear()} {siteConfig.brandName}. Todos os direitos reservados.</p>
        <div className="flex justify-center gap-4 text-[#C7C3D5]/80 text-[10px]">
          <Link href="/politica-de-privacidade" className="hover:underline">Privacidade</Link>
          <span>•</span>
          <Link href="/termos-de-uso" className="hover:underline">Termos</Link>
        </div>
      </footer>

    </div>
  );
}
