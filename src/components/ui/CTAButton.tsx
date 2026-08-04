'use client';

import React from 'react';
import { trackEvent } from '@/lib/analytics';

interface CTAButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'purple' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  trackingEventName?: string;
  icon?: React.ReactNode;
  target?: string;
  rel?: string;
  ariaLabel?: string;
  className?: string;
  disabled?: boolean;
}

export default function CTAButton({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  trackingEventName,
  icon,
  target,
  rel,
  ariaLabel,
  className = '',
  disabled = false,
}: CTAButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    if (trackingEventName) {
      trackEvent(trackingEventName);
    }
    if (onClick) {
      onClick();
    }
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-xs font-black uppercase tracking-wider rounded-none',
    md: 'px-6 py-3 text-xs sm:text-sm font-black uppercase tracking-widest rounded-none',
    lg: 'px-8 py-4 text-sm sm:text-base font-black uppercase tracking-widest rounded-none',
  };

  const variantClasses = {
    primary:
      'bg-[#ED3B57] text-white hover:bg-[#D82F49] border border-[#ED3B57] active:translate-y-0.5',
    purple:
      'bg-[#6046C7] text-white hover:bg-[#8068E8] border border-[#6046C7] active:translate-y-0.5',
    outline:
      'bg-transparent text-white border border-white/40 hover:border-white hover:bg-white/10 active:translate-y-0.5',
    ghost:
      'bg-white/5 text-[#C7C3D5] hover:text-white hover:bg-white/10 border border-transparent',
  };

  const disabledClasses = disabled
    ? 'opacity-50 cursor-not-allowed pointer-events-none'
    : 'cursor-pointer transition-all duration-150 ease-out';

  const baseClasses = `inline-flex items-center justify-center gap-2 select-none text-center ${
    sizeClasses[size]
  } ${variantClasses[variant]} ${disabledClasses} ${fullWidth ? 'w-full' : ''} ${className}`;

  if (href) {
    const isExternal = href.startsWith('http');
    const safeRel = rel || (isExternal ? 'noopener noreferrer' : undefined);

    return (
      <a
        href={href}
        onClick={handleClick}
        target={target || (isExternal ? '_blank' : undefined)}
        rel={safeRel}
        className={baseClasses}
        aria-label={ariaLabel}
        aria-disabled={disabled}
      >
        {children}
        {icon && <span className="shrink-0">{icon}</span>}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={disabled}
      className={baseClasses}
      aria-label={ariaLabel}
    >
      {children}
      {icon && <span className="shrink-0">{icon}</span>}
    </button>
  );
}
