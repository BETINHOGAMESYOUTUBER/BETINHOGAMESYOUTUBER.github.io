import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import { siteConfig } from '@/config/site';
import CookieBanner from '@/components/layout/CookieBanner';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: {
    default: siteConfig.seo.defaultTitle,
    template: `%s | ${siteConfig.brandName}`,
  },
  description: siteConfig.seo.courseDescription,
  authors: [{ name: siteConfig.instructorName }],
  creator: siteConfig.brandName,
  keywords: [
    'FaceMaker',
    'PES 2021',
    'Rostos 3D PES',
    'Edição de Jogos',
    'Betinho Games',
    'Curso FaceMaker',
    'Modding PES 2021',
    'Rosto Personalizado Game',
  ],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteConfig.baseUrl,
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.courseDescription,
    siteName: siteConfig.brandName,
    images: [
      {
        url: siteConfig.seo.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.seo.defaultTitle,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.courseDescription,
    images: [siteConfig.seo.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${outfit.variable} h-full antialiased`}>
      <body className="bg-[#080B10] text-[#F5F7FA] min-h-full flex flex-col selection:bg-[#38F28B] selection:text-[#080B10]">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
