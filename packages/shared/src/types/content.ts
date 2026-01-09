// Content Management types

export interface PageContent {
  id: string;
  pagePath: string;
  content: PageContentData;
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string[];
  ogImage?: string;
  published: boolean;
  version: number;
}

export interface PageContentData {
  hero?: HeroSection;
  services?: ServiceSection[];
  about?: AboutSection;
  gallery?: GallerySection;
  testimonials?: TestimonialSection;
  faq?: FAQSection;
  contact?: ContactSection;
  [key: string]: any; // Allow additional sections
}

export interface HeroSection {
  headline: string;
  subheadline: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage: string;
}

export interface ServiceSection {
  id: string;
  title: string;
  description: string;
  icon?: string;
  link?: string;
}

export interface AboutSection {
  title: string;
  content: string;
  image?: string;
}

export interface GallerySection {
  title: string;
  images: Array<{
    url: string;
    alt: string;
    caption?: string;
  }>;
}

export interface TestimonialSection {
  title: string;
  testimonials: Array<{
    id: string;
    name: string;
    content: string;
    rating?: number;
    image?: string;
  }>;
}

export interface FAQSection {
  title: string;
  questions: Array<{
    id: string;
    question: string;
    answer: string;
  }>;
}

export interface ContactSection {
  title: string;
  address: string;
  phone: string;
  whatsapp: string;
  email?: string;
  hours: string;
  mapUrl?: string;
}

export interface Service {
  id: string;
  name: string;
  slug: string;
  category: 'laser' | 'body' | 'massage' | 'facial';
  description?: string;
  shortDescription?: string;
  priceFrom?: number;
  priceTo?: number;
  priceDisplay?: string;
  showPrice: boolean;
  durationMinutes?: number;
  imageUrl?: string;
  benefits: string[];
  active: boolean;
}
