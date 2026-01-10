'use client';

import { Section, SectionHeader } from '@/components/ui/section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { useABTest } from '@/hooks/use-ab-test';

interface PricingTier {
  tier: 1 | 2 | 3;
  name: string;
  pricePerSession?: string;
  pricePackage?: string;
  duration: string;
  sessions: string;
  popular?: boolean;
  badge?: string;
}

const pricingData: PricingTier[] = [
  {
    tier: 1,
    name: 'Axilas',
    pricePerSession: 'R$ 149',
    pricePackage: 'R$ 790 (6 sessões)',
    duration: '10-15 min',
    sessions: '6-8 sessões',
    popular: true,
    badge: 'Mais Popular',
  },
  {
    tier: 1,
    name: 'Buço',
    pricePerSession: 'R$ 99',
    pricePackage: 'R$ 530 (6 sessões)',
    duration: '5-10 min',
    sessions: '8-10 sessões',
  },
  {
    tier: 2,
    name: 'Meia Perna',
    pricePerSession: 'A partir de R$ 250',
    duration: '30-40 min',
    sessions: '6-8 sessões',
  },
  {
    tier: 2,
    name: 'Virilha Completa',
    pricePerSession: 'A partir de R$ 180',
    duration: '20-25 min',
    sessions: '6-8 sessões',
  },
  {
    tier: 2,
    name: 'Braços',
    pricePerSession: 'A partir de R$ 200',
    duration: '25-30 min',
    sessions: '6-8 sessões',
  },
  {
    tier: 3,
    name: 'Perna Completa',
    pricePerSession: 'Consulte',
    duration: '50-60 min',
    sessions: '6-8 sessões',
  },
  {
    tier: 3,
    name: 'Costas',
    pricePerSession: 'Consulte',
    duration: '40-50 min',
    sessions: '6-8 sessões',
  },
  {
    tier: 3,
    name: 'Corpo Completo',
    pricePerSession: 'Pacote Personalizado',
    duration: 'Consulte',
    sessions: 'Consulte',
    badge: 'Melhor Custo-Benefício',
  },
];

export function PricingSection() {
  // A/B Test: Show vs Hide Pricing
  const { variant } = useABTest('laser-pricing-visibility');
  const showPricing = variant !== 'hide-prices';

  if (!showPricing) {
    // Variant B: Sem preços, CTA direto
    return (
      <Section background="beige-light" id="precos">
        <SectionHeader
          title="Investimento"
          subtitle="Solicite um orçamento personalizado para suas necessidades"
        />
        <div className="max-w-2xl mx-auto text-center">
          <Card className="border-sage/20">
            <CardContent className="p-8 lg:p-12">
              <h3 className="text-2xl font-serif font-bold mb-4">
                Avaliação Gratuita + Orçamento Personalizado
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Cada pessoa é única. Agende uma avaliação gratuita para receber um orçamento
                personalizado baseado nas suas necessidades e objetivos.
              </p>
              <WhatsAppButton
                size="lg"
                className="w-full sm:w-auto"
                message="Olá! Quero solicitar um orçamento personalizado para depilação a laser."
                serviceInterest="Depilação a Laser - Orçamento"
              >
                Solicitar Orçamento Gratuito
              </WhatsAppButton>
            </CardContent>
          </Card>
        </div>
      </Section>
    );
  }

  // Variant A: Preços estratégicos
  return (
    <Section background="beige-light" id="precos">
      <SectionHeader
        title="Investimento"
        subtitle="Preços transparentes para você planejar sua transformação"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {pricingData.map((item, index) => (
          <Card
            key={index}
            className={`border-2 transition-all hover:shadow-xl ${
              item.popular ? 'border-sage shadow-lg' : 'border-beige hover:border-sage/40'
            }`}
          >
            <CardHeader>
              <div className="flex items-start justify-between mb-2">
                <CardTitle className="text-xl">{item.name}</CardTitle>
                {item.badge && (
                  <Badge className="bg-sage text-white text-xs">
                    {item.badge}
                  </Badge>
                )}
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-sage">
                  {item.pricePerSession}
                </div>
                {item.pricePackage && (
                  <div className="text-sm text-gray-600">
                    {item.pricePackage}
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{item.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <span>{item.sessions}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <p className="text-gray-700 mb-6">
          Não encontrou a área que procura? Fazemos pacotes personalizados!
        </p>
        <WhatsAppButton
          size="lg"
          message="Olá! Vi os preços no site e quero saber mais sobre depilação a laser."
          serviceInterest="Depilação a Laser - Consulta de Preços"
        >
          Solicitar Orçamento Completo
        </WhatsAppButton>
      </div>

      {/* Payment Info */}
      <div className="mt-12 text-center">
        <Card className="border-sage/20 bg-white/50 inline-block">
          <CardContent className="p-6">
            <p className="text-sm text-gray-600">
              💳 Parcelamento disponível • 💰 PIX aceito • 🎁 Pacotes com desconto
            </p>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
