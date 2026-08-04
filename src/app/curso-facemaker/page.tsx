import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import VideoPresentationSection from '@/components/sections/VideoPresentationSection';
import WhatYouWillLearn from '@/components/sections/WhatYouWillLearn';
import CourseModules from '@/components/sections/CourseModules';
import SolutionSection from '@/components/sections/SolutionSection';
import PortfolioGallery from '@/components/sections/PortfolioGallery';
import InstructorSection from '@/components/sections/InstructorSection';
import TargetAudienceAndRequirements from '@/components/sections/TargetAudienceAndRequirements';
import FAQSection from '@/components/sections/FAQSection';
import OfferCard from '@/components/sections/OfferCard';
import FloatingMobileCTA from '@/components/sections/FloatingMobileCTA';
import CookieBanner from '@/components/layout/CookieBanner';
import { siteConfig } from '@/config/site';
import { courseConfig } from '@/config/course';
import { publicFaqItems } from '@/data/faq';

export const metadata: Metadata = {
  title: siteConfig.seo.courseTitle,
  description: siteConfig.seo.courseDescription,
  alternates: {
    canonical: `${siteConfig.baseUrl}/curso-facemaker`,
  },
  openGraph: {
    title: siteConfig.seo.courseTitle,
    description: siteConfig.seo.courseDescription,
    url: `${siteConfig.baseUrl}/curso-facemaker`,
    images: [{ url: siteConfig.seo.ogImage, width: 1200, height: 630 }],
  },
};

export default function CoursePage() {
  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: courseConfig.name,
    description: siteConfig.seo.courseDescription,
    provider: {
      '@type': 'Organization',
      name: siteConfig.brandName,
      sameAs: siteConfig.social.instagram.url,
    },
    offers: {
      '@type': 'Offer',
      price: courseConfig.price.toString(),
      priceCurrency: courseConfig.currency,
      category: courseConfig.category,
      url: courseConfig.checkoutUrl,
      availability: 'https://schema.org/InStock',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: publicFaqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#08051B] text-white">
      {/* Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Header />

      <main className="flex-grow">
        <HeroSection />
        <VideoPresentationSection />
        <WhatYouWillLearn />
        <CourseModules />
        <SolutionSection />
        <PortfolioGallery />
        <InstructorSection />
        <TargetAudienceAndRequirements />
        <FAQSection />
        <OfferCard />
      </main>

      <FloatingMobileCTA />
      <CookieBanner />
      <Footer />
    </div>
  );
}
