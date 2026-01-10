import Image from 'next/image';
import { Section } from '@/components/ui/section';
import { Badge } from '@/components/ui/badge';

const credentials = [
  'Mais de 40 Anos de Experiência',
  'Tecnologia Hakon 4D de Última Geração',
  'Profissionais Certificados e Especializados',
  'Mais de 1.000 Clientes Satisfeitas',
  'Atendimento 100% Personalizado',
  'Protocolos de Segurança Rigorosos',
];

export function AboutLaser() {
  return (
    <Section background="white" className="py-12 lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Image Side */}
        <div className="relative order-2 lg:order-1">
          <div className="relative h-[350px] md:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/reception/receptionist.jpg"
              alt="Recepcionista Angela Spa & Estética"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Floating Badge */}
          <div className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 bg-white rounded-2xl shadow-2xl p-4 lg:p-6 max-w-[160px] lg:max-w-[200px] transition-transform hover:scale-105 duration-300">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-serif font-bold text-sage mb-1 lg:mb-2">1000+</div>
              <div className="text-xs lg:text-sm text-gray-600 font-medium">
                Clientes Satisfeitas
              </div>
            </div>
          </div>
        </div>

        {/* Content Side */}
        <div className="space-y-4 lg:space-y-6 order-1 lg:order-2">
          <div>
            <Badge variant="beige" className="mb-3 lg:mb-4">
              Sobre Nós
            </Badge>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-sage mb-3 lg:mb-4 leading-tight">
              40 Anos de Excelência em Estética
            </h2>
            <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
              Somos referência em tratamentos estéticos em Goiânia. Com equipamentos de última geração como o Hakon 4D e uma equipe altamente qualificada, garantimos resultados seguros e eficazes.
            </p>
          </div>

          {/* Credentials Grid - Compact Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
            {credentials.map((credential, index) => (
              <div key={index} className="flex items-start gap-2.5 lg:gap-3">
                <div className="flex-shrink-0 w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-sage flex items-center justify-center mt-0.5">
                  <svg
                    className="w-3 h-3 lg:w-4 lg:h-4 text-white"
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
                <span className="text-gray-700 text-sm lg:text-base">{credential}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
