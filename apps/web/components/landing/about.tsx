import * as React from 'react';
import Image from 'next/image';
import { Section, SectionHeader } from '@/components/ui/section';
import { Badge } from '@/components/ui/badge';
import { WhatsAppButton } from '@/components/whatsapp-button';

const credentials = [
  'Anos de Experiência no Mercado',
  'Profissionais Certificados',
  'Equipamentos de Última Geração',
  'Atendimento Personalizado',
  'Ambiente Acolhedor e Moderno',
  'Protocolos de Segurança Rigorosos',
];

export function About() {
  return (
    <Section background="beige-light" id="sobre">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Image Side */}
        <div className="relative">
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/reception/main.jpg"
              alt="Recepção Angela Spa & Estética"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Floating Badge */}
          <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-6 max-w-[200px]">
            <div className="text-center">
              <div className="text-4xl font-bold text-sage mb-2">500+</div>
              <div className="text-sm text-gray-600">
                Clientes Satisfeitas
              </div>
            </div>
          </div>
        </div>

        {/* Content Side */}
        <div className="space-y-6">
          <div>
            <Badge variant="beige" className="mb-4">
              Sobre Nós
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-sage mb-4">
              Sua Beleza Natural em Mãos Especializadas
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Na Angela Spa & Estética, acreditamos que cada pessoa possui uma
              beleza única que merece ser realçada com cuidado e atenção
              profissional.
            </p>
            <p className="text-gray-600 mb-6">
              Nossa clínica oferece uma experiência completa de bem-estar,
              combinando tecnologia de ponta com o toque humano de profissionais
              altamente qualificados. Cada tratamento é personalizado para atender
              às suas necessidades específicas, garantindo resultados visíveis e
              duradouros.
            </p>
          </div>

          {/* Credentials Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {credentials.map((credential, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-sage flex items-center justify-center mt-0.5">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-gray-700 text-sm">{credential}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="pt-4">
            <WhatsAppButton
              size="lg"
              message="Olá! Gostaria de agendar uma avaliação gratuita na Angela Spa & Estética."
            >
              Agendar Avaliação Gratuita
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </Section>
  );
}
