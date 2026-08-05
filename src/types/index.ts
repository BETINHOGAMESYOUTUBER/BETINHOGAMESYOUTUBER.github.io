export interface CourseModule {
  id: string;
  number: number;
  title: string;
  description: string;
  topics: string[];
  isProvisional?: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  isConfirmed?: boolean;
  category?: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: 'PES 2021 PC' | 'PES 2021 PS4 Desbloqueado' | 'PES 2021 PS4' | 'Rosto Personalizado' | 'Jogador Real';
  description: string;
  coverImage?: string;
  referenceImage: string;
  processImage: string;
  ingameImage: string;
  platform: string;
  tags: string[];
}

export interface NavigationLink {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  url: string;
  handle?: string;
  iconName: string;
}

export interface LinkBioButton {
  id: string;
  title: string;
  subtitle?: string;
  url: string;
  isPrimary?: boolean;
  isExternal?: boolean;
  utmCampaign: string;
  isEnabled: boolean;
  disabledNotice?: string;
}

export interface AnalyticsEvent {
  eventName: string;
  params?: Record<string, string | number | boolean>;
}
