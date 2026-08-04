'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/config/site';
import { mainNavigationLinks } from '@/data/navigation';
import CTAButton from '@/components/ui/CTAButton';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#0B0822] border-b border-white/15 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Official Logo Image */}
        <Link
          href="/curso-facemaker"
          className="flex items-center hover:opacity-90 transition-opacity"
          aria-label={siteConfig.brandName}
        >
          <Image
            src="/images/logo-betinho-games.webp"
            alt={siteConfig.brandName}
            width={268}
            height={74}
            priority
            style={{ width: 'auto' }}
            className="h-[54px] sm:h-[62px] w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-bold text-[#C7C3D5] uppercase tracking-widest font-outfit">
          {mainNavigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#ED3B57] transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Primary CTA */}
        <div className="hidden lg:block">
          <CTAButton
            href="#oferta"
            variant="primary"
            size="sm"
            trackingEventName="click_header_cta"
          >
            Quero fazer o curso
          </CTAButton>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={toggleMobileMenu}
          aria-expanded={mobileMenuOpen}
          aria-label="Abrir menu de navegação"
          className="lg:hidden p-2 rounded-none bg-[#151035] border border-white/15 text-white hover:text-[#ED3B57] focus:outline-none"
        >
          {mobileMenuOpen ? (
            <svg className="w-5 h-5 stroke-current stroke-2" viewBox="0 0 24 24" fill="none">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5 stroke-current stroke-2" viewBox="0 0 24 24" fill="none">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0D0828] border-b border-white/15 px-4 pt-4 pb-6 space-y-4">
          <nav className="flex flex-col space-y-3 font-outfit">
            {mainNavigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className="text-sm font-bold text-white hover:text-[#ED3B57] py-2 border-b border-white/5 uppercase tracking-wider"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <CTAButton
              href="#oferta"
              variant="primary"
              size="md"
              fullWidth
              onClick={closeMobileMenu}
              trackingEventName="click_mobile_menu_cta"
            >
              Quero fazer o curso
            </CTAButton>
          </div>
        </div>
      )}
    </header>
  );
}
