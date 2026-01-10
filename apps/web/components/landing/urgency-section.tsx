'use client';

import { useState, useEffect } from 'react';
import { Section } from '@/components/ui/section';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { useABTest } from '@/hooks/use-ab-test';

const COUNTDOWN_DURATION = 48 * 60 * 60 * 1000; // 48 hours

export function UrgencySection() {
  const { variant } = useABTest('laser-urgency-elements');
  const showUrgency = variant !== 'no-urgency';

  const [timeLeft, setTimeLeft] = useState<number | null>(null);

  useEffect(() => {
    if (!showUrgency) return;

    // Get or create countdown end time
    const storageKey = 'laser-countdown-end';
    let endTime = localStorage.getItem(storageKey);

    if (!endTime) {
      const end = Date.now() + COUNTDOWN_DURATION;
      localStorage.setItem(storageKey, end.toString());
      endTime = end.toString();
    }

    const updateTimer = () => {
      const remaining = parseInt(endTime!) - Date.now();
      if (remaining <= 0) {
        // Reset timer
        const newEnd = Date.now() + COUNTDOWN_DURATION;
        localStorage.setItem(storageKey, newEnd.toString());
        setTimeLeft(COUNTDOWN_DURATION);
      } else {
        setTimeLeft(remaining);
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, [showUrgency]);

  if (!showUrgency) return null;

  const formatTime = (ms: number) => {
    const hours = Math.floor(ms / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ms % (1000 * 60)) / 1000);
    return { hours, minutes, seconds };
  };

  const time = timeLeft ? formatTime(timeLeft) : { hours: 0, minutes: 0, seconds: 0 };

  return (
    <Section background="sage" className="py-12 lg:py-16">
      <div className="max-w-4xl mx-auto">
        <Card className="border-none shadow-2xl bg-white">
          <CardContent className="p-8 lg:p-12 text-center">
            {/* Scarcity Badge */}
            <div className="flex justify-center mb-6">
              <Badge className="bg-red-500 text-white px-4 py-2 text-sm lg:text-base">
                🔥 Apenas 8 vagas disponíveis esta semana
              </Badge>
            </div>

            {/* Headline */}
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-4">
              Oferta Especial por Tempo Limitado
            </h2>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Agende sua <strong>avaliação gratuita</strong> nas próximas 48h e ganhe{' '}
              <strong className="text-sage">10% de desconto</strong> na sua primeira sessão com o Hakon 4D.
            </p>

            {/* Countdown Timer */}
            <div className="mb-8">
              <p className="text-sm text-gray-600 mb-3">Oferta válida por:</p>
              <div className="flex justify-center gap-4">
                {[
                  { value: time.hours, label: 'Horas' },
                  { value: time.minutes, label: 'Minutos' },
                  { value: time.seconds, label: 'Segundos' },
                ].map((unit, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="bg-sage text-white rounded-lg w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center">
                      <span className="text-2xl lg:text-3xl font-bold">
                        {unit.value.toString().padStart(2, '0')}
                      </span>
                    </div>
                    <span className="text-xs lg:text-sm text-gray-600 mt-2">
                      {unit.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits Checklist */}
            <div className="bg-beige-light/50 rounded-xl p-6 mb-8 text-left">
              <h3 className="font-semibold text-sage mb-4 text-center">O que está incluído:</h3>
              <ul className="space-y-3">
                {[
                  'Avaliação completa gratuita com especialista',
                  'Teste de sensibilidade com o equipamento Hakon 4D',
                  'Protocolo personalizado para suas necessidades',
                  '10% de desconto na primeira sessão',
                  'Sem compromisso de compra',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <WhatsAppButton
              size="xl"
              className="w-full sm:w-auto text-lg"
              message="Olá! Quero aproveitar a oferta de avaliação gratuita + 10% de desconto nas próximas 48h!"
              serviceInterest="Depilação a Laser - Oferta 48h"
            >
              Garantir Minha Vaga Agora
            </WhatsAppButton>

            <p className="text-xs text-gray-500 mt-4">
              * Sujeito à disponibilidade de agenda
            </p>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
