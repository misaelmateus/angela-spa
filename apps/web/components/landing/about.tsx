import * as React from 'react';
import Image from 'next/image';
import { Section, SectionHeader } from '@/components/ui/section';
import { Badge } from '@/components/ui/badge';
import { WhatsAppButton } from '@/components/whatsapp-button';

const credentials = [
  'Mais de 40 Anos de Experiência',
  'Profissionais Certificados',
  'Equipamentos de Última Geração',
  'Atendimento Personalizado',
  'Ambientes Exclusivos para Público Masculino',
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
              src="/images/reception/receptionist.jpg"
              alt="Recepcionista Angela Spa & Estética - Atendimento Acolhedor"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Floating Badge */}
          <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-6 max-w-[200px] transition-transform hover:scale-105 duration-300">
            <div className="text-center">
              <div className="text-4xl font-serif font-bold text-sage mb-2">1000+</div>
              <div className="text-sm text-gray-600 font-medium">
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-sage mb-4 leading-tight">
              Mais de 40 Anos de História e Excelência
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Com mais de 40 anos de história, o Angela Spa & Estética é referência em estética facial, corporal e bem-estar em Goiânia, no Setor Bueno. Unimos tradição, tecnologia e atendimento acolhedor para oferecer tratamentos modernos, seguros e totalmente personalizados.
            </p>
            <p className="text-gray-600 mb-6">
              Nosso espaço foi pensado para proporcionar leveza e autocuidado — desde protocolos avançados para pele e corpo até ambientes exclusivos dedicados ao público masculino. Cada detalhe é planejado para que você viva uma experiência completa de relaxamento, cuidado e valorização da sua melhor versão.
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
