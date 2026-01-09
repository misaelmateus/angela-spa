import * as React from 'react';
import Image from 'next/image';
import { Section } from '@/components/ui/section';
import { WhatsAppButton } from '@/components/whatsapp-button';

const experienceFeatures = [
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
    text: 'Ambiente tranquilo e sofisticado',
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    text: 'Tempo dedicado exclusivamente para você',
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    text: 'Conforto em cada detalhe',
  },
];

export function Experience() {
  return (
    <Section background="white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Content Side - Left on Desktop */}
        <div className="space-y-6 lg:order-1">
          <div>
            <span className="inline-block px-4 py-1.5 bg-sage/10 text-sage text-sm font-medium rounded-full mb-4">
              Experiência Premium
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-sage mb-6 leading-tight">
              Um Momento só Seu
            </h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              Nosso espaço foi cuidadosamente projetado para ser um refúgio do
              dia a dia. Cada visita é uma experiência de autocuidado genuíno,
              onde você pode relaxar, renovar e se reconectar consigo mesma.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Da recepção acolhedora aos tratamentos personalizados, cada
              detalhe foi pensado para proporcionar conforto, privacidade e
              bem-estar. Aqui, você não é apenas mais uma cliente — você é
              única.
            </p>
          </div>

          {/* Experience Features */}
          <div className="space-y-4">
            {experienceFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-3 group transition-all duration-300 hover:translate-x-2"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center text-sage group-hover:bg-sage group-hover:text-white transition-all duration-300">
                  {feature.icon}
                </div>
                <p className="text-gray-700 pt-2">{feature.text}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="pt-6">
            <WhatsAppButton
              size="lg"
              message="Olá! Gostaria de conhecer o espaço e agendar uma visita."
            >
              Conheça Nosso Espaço
            </WhatsAppButton>
          </div>
        </div>

        {/* Image Side - Right on Desktop */}
        <div className="relative lg:order-2">
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/reception/client-coffee.jpg"
              alt="Cliente relaxando no Angela Spa & Estética - Experiência Premium"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Subtle overlay for premium feel */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Floating Quote Badge */}
          <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-6 max-w-[280px] transition-transform hover:scale-105 duration-300 hidden md:block">
            <div className="flex items-start gap-3">
              <svg
                className="w-8 h-8 text-sage flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-sm text-gray-700 italic leading-relaxed">
                Um espaço onde o autocuidado não é luxo, é essencial.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
