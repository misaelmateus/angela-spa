'use client';

import { Section } from '@/components/ui/section';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { WhatsAppButton } from '@/components/whatsapp-button';

export function FreeSessionsPromo() {
  return (
    <Section background="beige-light" id="promocao" className="py-16 lg:py-24">
      <div className="max-w-5xl mx-auto">
        <Card className="border-none shadow-2xl bg-gradient-to-br from-white to-beige-light/50 overflow-hidden">
          <CardContent className="p-0">
            {/* Decorative top bar */}
            <div className="h-2 bg-gradient-to-r from-sage via-sage-dark to-sage" />

            <div className="p-8 lg:p-12 text-center">
              {/* Badge */}
              <div className="flex justify-center mb-6">
                <Badge className="bg-red-500 text-white px-6 py-2.5 text-sm lg:text-base font-bold animate-pulse">
                  🔥 Promoção por Tempo Limitado
                </Badge>
              </div>

              {/* Main Headline */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-4 leading-tight">
                Ganhe <span className="text-sage">3 Sessões</span>
                <br />
                <span className="text-sage">Gratuitas</span> de Depilação a Laser
              </h2>

              {/* Subheadline */}
              <p className="text-lg lg:text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
                Conheça a tecnologia <strong>Hakon 4D</strong> sem compromisso.
                Experimente os resultados e sinta a diferença de uma depilação definitiva.
              </p>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mb-10 text-left">
                {[
                  {
                    icon: '✨',
                    title: 'Sem Compromisso',
                    description: 'Experimente grátis, sem obrigação de compra',
                  },
                  {
                    icon: '🎯',
                    title: 'Tecnologia Hakon 4D',
                    description: 'Equipamento de última geração com 4 comprimentos de onda',
                  },
                  {
                    icon: '👩‍⚕️',
                    title: 'Profissionais Certificados',
                    description: 'Equipe especializada com 40 anos de experiência',
                  },
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-5 lg:p-6 border-2 border-beige hover:border-sage transition-all hover:shadow-md"
                  >
                    <div className="text-3xl lg:text-4xl mb-3">{benefit.icon}</div>
                    <h3 className="font-semibold text-sage mb-2 text-base lg:text-lg">
                      {benefit.title}
                    </h3>
                    <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="mb-6">
                <WhatsAppButton
                  size="xl"
                  className="w-full sm:w-auto text-lg lg:text-xl px-8 lg:px-12 py-4 lg:py-5 shadow-2xl hover:scale-105 transition-transform"
                  message="Olá! Quero aproveitar a promoção de 3 sessões gratuitas de depilação a laser! Como funciona?"
                  serviceInterest="Depilação a Laser - 3 Sessões Gratuitas"
                >
                  Quero Minhas 3 Sessões Gratuitas!
                </WhatsAppButton>
              </div>

              {/* Fine print */}
              <div className="text-xs lg:text-sm text-gray-500 max-w-2xl mx-auto space-y-1">
                <p>
                  * Promoção válida apenas para <strong>Axilas, Virilha ou Buço</strong>
                </p>
                <p>✓ Sem custo • ✓ Sem compromisso • ✓ Agende agora mesmo</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
