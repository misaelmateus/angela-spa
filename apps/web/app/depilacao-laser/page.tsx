import { SiteLayout } from '@/components/layout/site-layout';
import { Hero } from '@/components/landing/hero';
import { TechnologyShowcase } from '@/components/landing/technology-showcase';
import { AboutLaser } from '@/components/landing/about-laser';
import { FreeSessionsPromo } from '@/components/landing/free-sessions-promo';
import { UrgencySection } from '@/components/landing/urgency-section';
import { Contact } from '@/components/landing/contact';
import { Section, SectionHeader } from '@/components/ui/section';
import { Card, CardContent } from '@/components/ui/card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Depilação a Laser em Goiânia | Angela Spa & Estética',
  description:
    'Depilação a laser com tecnologia avançada em Goiânia. Pele lisa e livre de pelos de forma definitiva. Agende sua avaliação gratuita.',
  keywords: [
    'depilacao a laser goiania',
    'depilacao definitiva',
    'depilacao a laser setor bueno',
    'remocao de pelos',
    'depilacao laser goias',
  ],
  openGraph: {
    title: 'Depilação a Laser em Goiânia | Angela Spa & Estética',
    description:
      'Depilação a laser com tecnologia avançada. Resultados duradouros e pele lisa.',
  },
};

const benefits = [
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
        />
      </svg>
    ),
    title: 'Resultados Duradouros',
    description:
      'Eliminação progressiva dos pelos com resultados que se mantêm por muito mais tempo que métodos tradicionais.',
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: 'Economia de Tempo',
    description:
      'Chega de depilação semanal. Ganhe tempo para você com sessões espaçadas e resultados progressivos.',
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
    title: 'Pele Mais Saudável',
    description:
      'Sem irritações, pelos encravados ou manchas. Sua pele fica lisa, uniforme e saudável.',
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: 'Tecnologia Avançada',
    description:
      'Equipamentos de última geração que garantem segurança, conforto e eficácia no tratamento.',
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: 'Custo-Benefício',
    description:
      'Investimento que se paga ao longo do tempo. Economize com depilações frequentes e produtos.',
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
        />
      </svg>
    ),
    title: 'Conforto no Procedimento',
    description:
      'Sessões rápidas e com mínimo desconforto. Tecnologia de resfriamento para maior conforto.',
  },
];

const steps = [
  {
    number: '01',
    title: 'Avaliação Inicial',
    description:
      'Análise completa da sua pele e pelos para definir o melhor protocolo de tratamento personalizado.',
  },
  {
    number: '02',
    title: 'Sessões Programadas',
    description:
      'Aplicações espaçadas conforme o ciclo de crescimento dos pelos, geralmente de 4 a 8 sessões.',
  },
  {
    number: '03',
    title: 'Resultados Progressivos',
    description:
      'Redução gradual e definitiva dos pelos, com pele cada vez mais lisa e uniforme.',
  },
];

const treatmentAreas = [
  { name: 'Axilas', duration: '10 min', sessions: '6-8 sessões' },
  { name: 'Buço', duration: '5 min', sessions: '8-10 sessões' },
  { name: 'Meia Perna', duration: '30 min', sessions: '6-8 sessões' },
  { name: 'Perna Completa', duration: '50 min', sessions: '6-8 sessões' },
  { name: 'Virilha Completa', duration: '20 min', sessions: '6-8 sessões' },
  { name: 'Braços', duration: '25 min', sessions: '6-8 sessões' },
  { name: 'Costas', duration: '40 min', sessions: '6-8 sessões' },
  { name: 'Abdômen', duration: '20 min', sessions: '6-8 sessões' },
];

const faqs = [
  {
    question: 'A depilação a laser dói?',
    answer:
      'O desconforto é mínimo. Nossos equipamentos possuem sistema de resfriamento que torna o procedimento muito mais confortável. A sensação é comparável a um leve estalo na pele.',
  },
  {
    question: 'Quantas sessões são necessárias?',
    answer:
      'Em média, são necessárias de 6 a 10 sessões, dependendo da área, tipo de pele e pelos. Os resultados começam a aparecer já nas primeiras sessões.',
  },
  {
    question: 'Qual o intervalo entre as sessões?',
    answer:
      'O intervalo varia de acordo com a área tratada, geralmente entre 4 a 6 semanas, respeitando o ciclo de crescimento dos pelos.',
  },
  {
    question: 'Posso fazer no verão?',
    answer:
      'Sim, mas é importante evitar exposição solar direta e usar protetor solar. Recomendamos iniciar o tratamento alguns meses antes do verão para melhores resultados.',
  },
  {
    question: 'A depilação a laser é definitiva?',
    answer:
      'Sim, a depilação a laser promove redução permanente dos pelos. Após o protocolo completo, os pelos que retornam são mais finos e em menor quantidade.',
  },
  {
    question: 'Todos os tipos de pele podem fazer?',
    answer:
      'Sim! Nossa tecnologia é segura e eficaz para todos os tipos de pele e fototipos, incluindo peles morenas e negras.',
  },
];

export default function DeepilacaoLaser() {
  return (
    <SiteLayout>
      {/* 1. Hero Section */}
      <Hero
        title="Depilação a Laser com Tecnologia Hakon 4D"
        subtitle="4 comprimentos de onda + sistema de resfriamento -12°C. Pele lisa e livre de pelos de forma definitiva."
        ctaText="Agendar Avaliação Gratuita"
        ctaMessage="Olá! Gostaria de saber mais sobre depilação a laser com Hakon 4D e agendar uma avaliação gratuita."
        serviceInterest="Depilação a Laser"
        backgroundImage="/images/hero/laser-hero.jpg"
        imageAlt="Depilação a Laser - Angela Spa & Estética"
        overlay="none"
      />

      {/* 2. Hakon 4D Technology Showcase - DESTAQUE */}
      <TechnologyShowcase />

      {/* 3. Promoção 3 Sessões Gratuitas */}
      <FreeSessionsPromo />

      {/* 4. Sobre Nós - Build Trust */}
      <AboutLaser />

      {/* 5. Urgency Section - Countdown + Escassez - A/B Testável */}
      <UrgencySection />

      {/* 5. FAQ - Compact & Streamlined */}
      <Section background="white" className="py-12 lg:py-16">
        <SectionHeader
          title="Perguntas Frequentes"
          subtitle="Tire suas dúvidas sobre depilação a laser"
        />

        <div className="max-w-3xl mx-auto space-y-4 lg:space-y-5">
          {faqs.map((faq, index) => (
            <Card key={index} className="border-beige-light hover:border-sage/30 transition-colors">
              <CardContent className="p-5 lg:p-7">
                <h3 className="text-base lg:text-lg font-semibold text-sage mb-3 lg:mb-4 leading-relaxed">
                  {faq.question}
                </h3>
                <p className="text-sm lg:text-base text-gray-600 leading-relaxed">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* 10. Contact */}
      <Contact />
    </SiteLayout>
  );
}
