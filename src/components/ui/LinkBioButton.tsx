'use client';

import React from 'react';
import { LinkBioButton as LinkBioButtonType } from '@/types';
import { addUtmParameters } from '@/lib/utm';
import { trackEvent } from '@/lib/analytics';

interface LinkBioButtonProps {
  button: LinkBioButtonType;
}

export default function LinkBioButton({ button }: LinkBioButtonProps) {
  const finalUrl = addUtmParameters(button.url, {
    source: 'instagram',
    medium: 'bio',
    campaign: button.utmCampaign,
  });

  const handleClick = (e: React.MouseEvent) => {
    if (!button.isEnabled) {
      e.preventDefault();
      alert(button.disabledNotice || 'Link temporariamente indisponível.');
      return;
    }
    trackEvent('click_link_bio_item', { title: button.title, campaign: button.utmCampaign });
  };

  const isPrimary = button.isPrimary;
  const isEnabled = button.isEnabled;

  const baseClasses = `w-full p-3.5 rounded-none text-left border transition-all duration-150 flex items-center justify-between gap-3 group ${
    isEnabled ? 'cursor-pointer' : 'cursor-not-allowed opacity-60'
  } ${
    isPrimary
      ? 'bg-[#ED3B57] text-white border-[#ED3B57] hover:bg-[#D82F49] font-black'
      : 'bg-[#151035] text-white border-white/20 hover:border-white hover:bg-[#1A1442]'
  }`;

  if (!isEnabled) {
    return (
      <div className={baseClasses} title={button.disabledNotice}>
        <div className="space-y-0.5">
          <div className="flex items-center gap-2">
            <h3 className="font-extrabold text-sm font-outfit text-white uppercase">{button.title}</h3>
            <span className="text-[10px] px-2 py-0.5 rounded-none bg-white/10 text-[#ED3B57] font-mono">Em Breve</span>
          </div>
          {button.subtitle && (
            <p className="text-[11px] text-[#C7C3D5]">{button.subtitle}</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <a
      href={finalUrl}
      onClick={handleClick}
      target={button.isExternal ? '_blank' : undefined}
      rel={button.isExternal ? 'noopener noreferrer' : undefined}
      className={baseClasses}
    >
      <div className="space-y-0.5">
        <h3 className="font-black text-sm font-outfit text-white uppercase tracking-wider">
          {button.title}
        </h3>
        {button.subtitle && (
          <p className={`text-[11px] ${isPrimary ? 'text-white/90' : 'text-[#C7C3D5]'}`}>
            {button.subtitle}
          </p>
        )}
      </div>

      <div className="shrink-0 w-7 h-7 rounded-none bg-white/10 text-white flex items-center justify-center transition-transform group-hover:translate-x-1">
        <svg className="w-3.5 h-3.5 stroke-current stroke-2" fill="none" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </div>
    </a>
  );
}
