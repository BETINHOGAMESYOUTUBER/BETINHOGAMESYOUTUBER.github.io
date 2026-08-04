'use client';

import React, { useState } from 'react';

interface AccordionItemProps {
  id: string;
  title: React.ReactNode;
  content: React.ReactNode;
  isOpenDefault?: boolean;
  badge?: React.ReactNode;
  onToggle?: (isOpen: boolean) => void;
}

export function AccordionItem({
  id,
  title,
  content,
  isOpenDefault = false,
  badge,
  onToggle,
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(isOpenDefault);

  const toggle = () => {
    const nextState = !isOpen;
    setIsOpen(nextState);
    if (onToggle) onToggle(nextState);
  };

  return (
    <div className="card-gamer-dark rounded-none mb-2 border-white/15 bg-[#151035] transition-all duration-150">
      <button
        type="button"
        id={`accordion-btn-${id}`}
        aria-expanded={isOpen}
        aria-controls={`accordion-panel-${id}`}
        onClick={toggle}
        className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-bold text-white hover:text-[#ED3B57] focus-visible:outline-none transition-colors cursor-pointer"
      >
        <div className="flex items-center gap-3 pr-4">
          {badge}
          <span className="text-sm sm:text-base font-outfit uppercase tracking-wider">{title}</span>
        </div>
        <div
          className={`shrink-0 w-7 h-7 rounded-none bg-white/5 border border-white/15 flex items-center justify-center transition-transform duration-200 ${
            isOpen ? 'rotate-180 bg-[#ED3B57] text-white border-[#ED3B57]' : 'text-[#C7C3D5]'
          }`}
        >
          <svg
            className="w-4 h-4 fill-none stroke-current stroke-2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {isOpen && (
        <div
          id={`accordion-panel-${id}`}
          role="region"
          aria-labelledby={`accordion-btn-${id}`}
          className="p-4 sm:p-5 border-t border-white/10 text-[#C7C3D5] text-xs sm:text-sm leading-relaxed bg-[#0D0828]"
        >
          {content}
        </div>
      )}
    </div>
  );
}
