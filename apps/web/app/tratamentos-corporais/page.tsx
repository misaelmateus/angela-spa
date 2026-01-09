import { SiteLayout } from '@/components/layout/site-layout';
import { Hero } from '@/components/landing/hero';
import { Benefits } from '@/components/landing/benefits';
import { Contact } from '@/components/landing/contact';
import { Section, SectionHeader } from '@/components/ui/section';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { WhatsAppButton } from '@/components/whatsapp-button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tratamentos Corporais em Goiânia | Angela Spa & Estética',
  description:
    'Tratamentos corporais com tecnologia avançada em Goiânia. Modelagem, redução de medidas e bem-estar. Agende sua avaliação gratuita.',
  keywords: [
    'tratamentos corporais goiania',
    'estetica corporal',
    'reducao de medidas',
    'modelagem corporal goiania',
    'criolipolise goiania',
  ],
  openGraph: {
    title: 'Tratamentos Corporais em Goiânia | Angela Spa & Estética',
    description:
      'Modelagem corporal com equipamentos de última geração. Resultados visíveis e duradouros.',
  },
};

const benefits = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Resultados Visíveis',
    description:
      'Redução de medidas e modelagem corporal com resultados que você pode ver e sentir.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Tecnologia Avançada',
    description:
      'Equipamentos de última geração que garantem eficácia e segurança em todos os tratamentos.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Sem Cirurgia',
    description:
      'Procedimentos não invasivos, sem cortes ou anestesia. Retorne às atividades imediatamente.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: 'Atendimento Personalizado',
    description:
      'Protocolo individualizado de acordo com suas necessidades e objetivos específicos.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Acompanhamento Completo',
    description:
      'Avaliação inicial, durante e após o tratamento para garantir os melhores resultados.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Bem-Estar Completo',
    description:
      'Mais que estética: promova autoestima, confiança e qualidade de vida.',
  },
];

const treatments = [
  {
    name: 'Criolipólise',
    description: 'Redução de gordura localizada através do congelamento controlado das células de gordura.',
    benefits: ['Redução de até 25% de gordura por sessão', 'Não invasivo', 'Sem tempo de recuperação'],
    duration: '60 min',
    sessions: '1-3 sessões',
  },
  {
    name: 'Radiofrequência',
    description: 'Tratamento de rejuvenescimento que estimula a produção de colágeno e melhora a flacidez.',
    benefits: ['Firmeza da pele', 'Redução de celulite', 'Contorno corporal'],
    duration: '50 min',
    sessions: '6-10 sessões',
  },
  {
    name: 'Ultrassom Focado',
    description: 'Tecnologia de ultrassom para redução de medidas e gordura localizada.',
    benefits: ['Resultados imediatos', 'Quebra de gordura', 'Modelagem corporal'],
    duration: '45 min',
    sessions: '4-8 sessões',
  },
  {
    name: 'Carboxiterapia',
    description: 'Aplicação de gás carbônico medicinal para melhora da circulação e aspecto da pele.',
    benefits: ['Redução de celulite', 'Melhora da circulação', 'Firmeza da pele'],
    duration: '40 min',
    sessions: '8-12 sessões',
  },
  {
    name: 'Drenagem Linfática',
    description: 'Massagem terapêutica que auxilia na eliminação de toxinas e reduz o inchaço.',
    benefits: ['Reduz retenção', 'Desintoxica', 'Relaxamento'],
    duration: '60 min',
    sessions: 'Manutenção semanal',
  },
  {
    name: 'Endermologia',
    description: 'Técnica mecânica de massagem que combate celulite e flacidez.',
    benefits: ['Reduz celulite', 'Melhora circulação', 'Tonifica'],
    duration: '45 min',
    sessions: '10-15 sessões',
  },
];

const targetAreas = [
  'Abdômen',
  'Flancos (Love Handles)',
  'Coxas',
  'Glúteos',
  'Braços',
  'Papada',
  'Costas',
  'Culote',
];

export default function TratamentosCorporais() {
  return (
    <SiteLayout>
      <Hero
        title="Tratamentos Corporais que Transformam"
        subtitle="Tecnologias avançadas para modelagem e bem-estar. Resultados visíveis e duradouros sem cirurgia."
        ctaText="Agendar Avaliação Gratuita"
        ctaMessage="Olá! Gostaria de saber mais sobre tratamentos corporais e agendar uma avaliação gratuita."
        serviceInterest="Tratamentos Corporais"
        backgroundImage="/images/hero/body-hero.jpg"
        imageAlt="Tratamentos Corporais - Angela Spa & Estética"
      />

      <Benefits
        title="Por Que Escolher Nossos Tratamentos Corporais?"
        subtitle="Benefícios que vão além da estética"
        benefits={benefits}
      />

      {/* Treatments */}
      <Section background="white">
        <SectionHeader
          title="Nossos Tratamentos"
          subtitle="Tecnologias de ponta para cada necessidade"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((treatment, index) => (
            <Card key={index} className="border-beige-light hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-sage">{treatment.name}</CardTitle>
                <CardDescription>{treatment.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm text-gray-900 mb-2">Benefícios:</h4>
                    <ul className="space-y-1">
                      {treatment.benefits.map((benefit, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                          <svg className="w-4 h-4 text-sage mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600 pt-3 border-t border-beige-light">
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {treatment.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      {treatment.sessions}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Target Areas */}
      <Section background="beige-light">
        <SectionHeader
          title="Áreas de Tratamento"
          subtitle="Tratamentos personalizados para cada região do corpo"
        />

        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {targetAreas.map((area, index) => (
            <Badge key={index} variant="outline" className="px-4 py-2 text-base">
              {area}
            </Badge>
          ))}
        </div>

        <div className="text-center mt-12">
          <Card className="inline-block border-sage/20 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-sage mb-3">
                Monte Seu Protocolo Personalizado
              </h3>
              <p className="text-gray-600 mb-6 max-w-md">
                Combine diferentes tratamentos para potencializar seus resultados. Nossa equipe irá criar o protocolo ideal para você.
              </p>
              <WhatsAppButton
                size="lg"
                message="Olá! Gostaria de montar um protocolo personalizado de tratamentos corporais e saber os valores."
                serviceInterest="Tratamentos Corporais"
              >
                Solicitar Avaliação Personalizada
              </WhatsAppButton>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Contact />
    </SiteLayout>
  );
}
