import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'red' | 'purple' | 'blue' | 'dark' | 'muted';
  className?: string;
}

export default function Badge({ children, variant = 'red', className = '' }: BadgeProps) {
  const variantStyles = {
    red: 'bg-[#ED3B57]/15 text-[#ED3B57] border-[#ED3B57]/40',
    purple: 'bg-[#6046C7]/20 text-[#8068E8] border-[#6046C7]/50',
    blue: 'bg-[#313A82]/40 text-blue-300 border-[#313A82]',
    dark: 'bg-[#151035] text-white border-white/20',
    muted: 'bg-white/5 text-[#C7C3D5] border-white/10',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[11px] font-black uppercase font-outfit tracking-wider rounded-none border ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
