import { SiteLayout } from '@/components/layout/site-layout';
import { Hero } from '@/components/landing/hero';
import { Benefits } from '@/components/landing/benefits';
import { Contact } from '@/components/landing/contact';
import { Section, SectionHeader } from '@/components/ui/section';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { WhatsAppButton } from '@/components/whatsapp-button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Massagens em Goiânia | Angela Spa & Estética',
  description:
    'Massagens terapêuticas e relaxantes em Goiânia. Bem-estar e relaxamento em ambiente tranquilo. Agende sua sessão.',
  keywords: [
    'massagem goiania',
    'massagem relaxante',
    'massagem terapeutica goiania',
    'spa goiania',
    'massagem setor bueno',
  ],
  openGraph: {
    title: 'Massagens em Goiânia | Angela Spa & Estética',
    description:
      'Relaxamento e bem-estar em ambiente tranquilo. Técnicas terapêuticas especializadas.',
  },
};

const benefits = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Relaxamento Profundo',
    description:
      'Alívio do estresse e tensão acumulados. Momento único de paz e tranquilidade.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Alívio de Dores',
    description:
      'Redução de tensões musculares, dores nas costas e desconfortos do dia a dia.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Melhora da Circulação',
    description:
      'Estimula a circulação sanguínea e linfática, promovendo bem-estar geral.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Qualidade do Sono',
    description:
      'Promove relaxamento profundo que contribui para noites de sono mais tranquilas.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: 'Profissionais Qualificados',
    description:
      'Terapeutas certificadas com técnicas especializadas para seu bem-estar.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: 'Ambiente Acolhedor',
    description:
      'Espaço tranquilo e aconchegante, ideal para seu momento de relaxamento.',
  },
];

const massages = [
  {
    name: 'Massagem Relaxante',
    description: 'Massagem suave e envolvente que proporciona relaxamento profundo e alívio do estresse.',
    benefits: ['Relaxamento total', 'Alívio do estresse', 'Bem-estar geral'],
    duration: '60 min',
    ideal: 'Ideal para quem busca relaxamento e momentos de paz',
  },
  {
    name: 'Massagem Terapêutica',
    description: 'Técnicas específicas para alívio de tensões musculares e dores localizadas.',
    benefits: ['Alívio de dores', 'Reduz tensão muscular', 'Melhora postura'],
    duration: '50 min',
    ideal: 'Indicada para dores musculares e tensões',
  },
  {
    name: 'Massagem Modeladora',
    description: 'Combina manobras vigorosas para auxiliar na redução de medidas e celulite.',
    benefits: ['Reduz celulite', 'Modela contorno', 'Ativa circulação'],
    duration: '60 min',
    ideal: 'Para quem busca modelagem e redução de medidas',
  },
  {
    name: 'Drenagem Linfática',
    description: 'Técnica suave que estimula o sistema linfático, reduzindo inchaço e retenção.',
    benefits: ['Reduz retenção', 'Desintoxica', 'Melhora circulação'],
    duration: '60 min',
    ideal: 'Perfeita para pós-operatório e retenção de líquidos',
  },
  {
    name: 'Massagem com Pedras Quentes',
    description: 'Relaxamento profundo através do calor das pedras vulcânicas aquecidas.',
    benefits: ['Relaxamento intenso', 'Alívio muscular', 'Experiência única'],
    duration: '75 min',
    ideal: 'Uma experiência sensorial completa',
  },
  {
    name: 'Massagem Quick',
    description: 'Massagem rápida focada em áreas de maior tensão como pescoço, ombros e costas.',
    benefits: ['Alívio rápido', 'Ideal para pausas', 'Reduz estresse'],
    duration: '30 min',
    ideal: 'Perfeita para quem tem pouco tempo',
  },
];

const occasions = [
  {
    title: 'Rotina de Autocuidado',
    description: 'Reserve um momento regular para cuidar de você.',
    icon: '📅',
  },
  {
    title: 'Presente Especial',
    description: 'Surpreenda quem você ama com um momento de bem-estar.',
    icon: '🎁',
  },
  {
    title: 'Pós-Treino',
    description: 'Recuperação muscular e relaxamento após atividades físicas.',
    icon: '💪',
  },
  {
    title: 'Gestantes',
    description: 'Massagem específica para alívio de desconfortos na gestação.',
    icon: '🤰',
  },
];

export default function Massagens() {
  return (
    <SiteLayout>
      <Hero
        title="Relaxamento e Bem-Estar que Você Merece"
        subtitle="Massagens terapêuticas em ambiente tranquilo. Técnicas especializadas para seu momento de paz e renovação."
        ctaText="Agendar Sessão"
        ctaMessage="Olá! Gostaria de agendar uma massagem. Qual a disponibilidade?"
        serviceInterest="Massagens"
        backgroundImage="/images/hero/massage-hero.jpg"
        imageAlt="Massagens - Angela Spa & Estética"
      />

      <Benefits
        title="Benefícios das Massagens"
        subtitle="Mais que relaxamento: saúde e bem-estar para corpo e mente"
        benefits={benefits}
      />

      {/* Types of Massages */}
      <Section background="white">
        <SectionHeader
          title="Nossos Tipos de Massagem"
          subtitle="Encontre a massagem perfeita para suas necessidades"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {massages.map((massage, index) => (
            <Card key={index} className="border-beige-light hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-xl text-sage">{massage.name}</CardTitle>
                  <div className="text-sm font-medium text-beige bg-beige-light px-3 py-1 rounded-full">
                    {massage.duration}
                  </div>
                </div>
                <CardDescription>{massage.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm text-gray-900 mb-2">Benefícios:</h4>
                    <ul className="space-y-1">
                      {massage.benefits.map((benefit, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                          <svg className="w-4 h-4 text-sage flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-3 border-t border-beige-light">
                    <p className="text-sm text-gray-600 italic">{massage.ideal}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <WhatsAppButton
            size="lg"
            message="Olá! Gostaria de saber os valores das massagens e agendar uma sessão."
            serviceInterest="Massagens"
          >
            Solicitar Valores e Agendar
          </WhatsAppButton>
        </div>
      </Section>

      {/* Occasions */}
      <Section background="beige-light">
        <SectionHeader
          title="Para Cada Momento"
          subtitle="A massagem certa para cada necessidade"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {occasions.map((occasion, index) => (
            <Card key={index} className="border-beige text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="text-5xl mb-4">{occasion.icon}</div>
                <h3 className="text-lg font-semibold text-sage mb-2">
                  {occasion.title}
                </h3>
                <p className="text-sm text-gray-600">{occasion.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Experience Section */}
      <Section background="white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-sage mb-6">
            O Que Esperar da Sua Sessão
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Cada sessão de massagem é uma experiência única de bem-estar, cuidadosamente
            preparada para proporcionar o máximo de relaxamento e benefícios terapêuticos.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div>
              <div className="w-12 h-12 rounded-full bg-sage/10 flex items-center justify-center text-sage mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-semibold text-sage mb-2">Ambiente Preparado</h3>
              <p className="text-sm text-gray-600">
                Sala tranquila, aromatizada e com música relaxante para criar o clima perfeito.
              </p>
            </div>

            <div>
              <div className="w-12 h-12 rounded-full bg-sage/10 flex items-center justify-center text-sage mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-sage mb-2">Atendimento Personalizado</h3>
              <p className="text-sm text-gray-600">
                Nossa terapeuta adapta a massagem às suas necessidades específicas.
              </p>
            </div>

            <div>
              <div className="w-12 h-12 rounded-full bg-sage/10 flex items-center justify-center text-sage mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-sage mb-2">Relaxamento Total</h3>
              <p className="text-sm text-gray-600">
                Momento só seu para relaxar, renovar energias e cuidar de você.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Contact />
    </SiteLayout>
  );
}
