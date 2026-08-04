import React from 'react';

interface SectionTitleProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionTitle({
  badge,
  title,
  subtitle,
  centered = false,
  className = '',
}: SectionTitleProps) {
  return (
    <div className={`space-y-1 ${centered ? 'text-center max-w-3xl mx-auto' : ''} ${className}`}>
      {badge && (
        <span className="inline-block text-[10px] font-mono font-bold uppercase tracking-widest text-[#ED3B57]">
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-outfit uppercase leading-none">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xs sm:text-sm text-[#C7C3D5] leading-relaxed pt-1">
          {subtitle}
        </p>
      )}
    </div>
  );
}
