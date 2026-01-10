'use client';

import { Section, SectionHeader } from '@/components/ui/section';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { WhatsAppButton } from '@/components/whatsapp-button';
import Image from 'next/image';

const wavelengths = [
  {
    nm: '755nm',
    name: 'Alexandrite',
    target: 'Pelos finos e claros',
    color: 'from-purple-500 to-purple-600',
    icon: '✨',
  },
  {
    nm: '808nm',
    name: 'Diode',
    target: 'Todos os tipos de pelos',
    color: 'from-blue-500 to-blue-600',
    icon: '💎',
  },
  {
    nm: '940nm',
    name: 'Diode',
    target: 'Pelos grossos e profundos',
    color: 'from-red-500 to-red-600',
    icon: '🔥',
  },
  {
    nm: '1064nm',
    name: 'Nd:YAG',
    target: 'Peles escuras (seguro)',
    color: 'from-amber-500 to-amber-600',
    icon: '🌟',
  },
];

const features = [
  {
    icon: '❄️',
    title: 'Sistema de Resfriamento -12°C',
    description: 'Conforto máximo durante o procedimento. Tecnologia Peltier reduz desconforto e protege a pele.',
  },
  {
    icon: '🎯',
    title: 'Eficácia Comprovada',
    description: 'Até 90% de redução permanente dos pelos. Resultados visíveis desde as primeiras sessões.',
  },
  {
    icon: '🛡️',
    title: 'Seguro para Todos os Fototipos',
    description: 'Tecnologia aprovada pela Anvisa. Eficaz e seguro para peles claras, morenas e negras.',
  },
  {
    icon: '⚡',
    title: 'Menos Sessões Necessárias',
    description: '4 comprimentos de onda simultâneos aceleram resultados. Economia de tempo e investimento.',
  },
];

export function TechnologyShowcase() {
  return (
    <Section background="white" id="tecnologia">
      <SectionHeader
        title="Nossa Tecnologia: Hakon 4D"
        subtitle="O equipamento mais avançado de depilação a laser. 4 comprimentos de onda para máxima eficácia."
      />

      {/* Hero Image - Hakon 4D Equipment */}
      <div className="mb-12 lg:mb-16">
        <Card className="overflow-hidden border-sage/20">
          <div className="relative h-64 lg:h-96">
            <Image
              src="/images/equipment/hakon-4d.jpg"
              alt="Equipamento Hakon 4D - Depilação a Laser"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
              priority
            />
            <div className="absolute top-4 right-4 lg:top-6 lg:right-6">
              <Badge className="bg-sage text-white text-sm lg:text-base px-4 py-2">
                Tecnologia 4D
              </Badge>
            </div>
          </div>
        </Card>
      </div>

      {/* 4 Wavelengths Visualization */}
      <div className="mb-16">
        <h3 className="text-2xl lg:text-3xl font-serif font-bold text-center mb-3">
          4 Comprimentos de Onda Simultâneos
        </h3>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Cada comprimento de onda atua em um tipo específico de pelo, garantindo eficácia para todos os tipos de pele e pelos.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {wavelengths.map((wave, index) => (
            <Card
              key={index}
              className="border-2 border-transparent hover:border-sage/40 transition-all group"
            >
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">{wave.icon}</div>
                <div
                  className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${wave.color} text-white font-bold text-lg mb-3`}
                >
                  {wave.nm}
                </div>
                <h4 className="font-semibold text-sage mb-2">{wave.name}</h4>
                <p className="text-sm text-gray-600">{wave.target}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="border-beige-light hover:shadow-lg transition-shadow">
            <CardContent className="p-6 lg:p-8">
              <div className="flex items-start gap-4">
                <div className="text-4xl flex-shrink-0">{feature.icon}</div>
                <div>
                  <h4 className="text-lg font-semibold text-sage mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <p className="text-lg text-gray-700 mb-6">
          Quer conhecer o Hakon 4D pessoalmente e ver os resultados?
        </p>
        <WhatsAppButton
          size="lg"
          message="Olá! Quero conhecer a tecnologia Hakon 4D e agendar uma avaliação gratuita para depilação a laser."
          serviceInterest="Depilação a Laser - Hakon 4D"
        >
          Agendar Avaliação Gratuita
        </WhatsAppButton>
      </div>
    </Section>
  );
}
