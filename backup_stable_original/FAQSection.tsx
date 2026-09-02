'use client';

import React from 'react';
import SectionTitle from '@/components/ui/SectionTitle';
import { AccordionItem } from '@/components/ui/Accordion';
import { publicFaqItems } from '@/data/faq';
import { trackEvent } from '@/lib/analytics';

export default function FAQSection() {
  const handleToggle = (isOpen: boolean, question: string) => {
    if (isOpen) {
      trackEvent('open_faq', { question });
    }
  };

  return (
    <section id="faq" className="py-12 md:py-20 bg-[#0D0828] border-b border-white/15">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <SectionTitle
          badge="DÚVIDAS FREQUENTES"
          title="Perguntas Frequentes"
          subtitle="Tire suas dúvidas sobre o funcionamento do curso, pré-requisitos e formato das aulas."
        />

        <div className="space-y-2">
          {publicFaqItems.map((item) => (
            <AccordionItem
              key={item.id}
              id={item.id}
              isOpenDefault={false}
              onToggle={(isOpen) => handleToggle(isOpen, item.question)}
              title={item.question}
              content={
                <p className="text-[#C7C3D5] leading-relaxed">
                  {item.answer}
                </p>
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
