import { Section } from '@/components/ui/section';
import { Badge } from '@/components/ui/badge';

const credentials = [
  'Mais de 40 Anos de Experiência',
  'Tecnologia Hakon 4D de Última Geração',
  'Profissionais Certificados e Especializados',
  'Mais de 5.000 Clientes Satisfeitas',
  'Atendimento 100% Personalizado',
  'Protocolos de Segurança Rigorosos',
];

export function AboutLaser() {
  return (
    <Section background="white" className="py-12 lg:py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 lg:mb-12">
          <Badge variant="beige" className="mb-3 lg:mb-4">
            Sobre Nós
          </Badge>
          <h2 className="text-2xl lg:text-4xl font-serif font-bold text-sage mb-3 lg:mb-4">
            40 Anos de Excelência em Estética
          </h2>
          <p className="text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Somos referência em tratamentos estéticos em Goiânia. Com equipamentos de última geração como o Hakon 4D e uma equipe altamente qualificada, garantimos resultados seguros e eficazes.
          </p>
        </div>

        {/* Credentials Grid - Compact Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
          {credentials.map((credential, index) => (
            <div key={index} className="flex items-start gap-2.5 lg:gap-3 p-3 lg:p-4 rounded-lg bg-beige-light/30">
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
    </Section>
  );
}
