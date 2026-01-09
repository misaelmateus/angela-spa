import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Section, SectionHeader } from '@/components/ui/section';
import { Button } from '@/components/ui/button';

interface Service {
  name: string;
  description: string;
  icon: string;
  href: string;
  image: string;
}

const services: Service[] = [
  {
    name: 'Depilação a Laser',
    description:
      'Tecnologia avançada para resultados duradouros. Pele lisa e livre de pelos por muito mais tempo.',
    icon: '✨',
    href: '/depilacao-laser',
    image: '/images/services/laser.jpg',
  },
  {
    name: 'Tratamentos Corporais',
    description:
      'Modelagem corporal com equipamentos de última geração. Resultados visíveis e duradouros.',
    icon: '💆',
    href: '/tratamentos-corporais',
    image: '/images/services/body.jpg',
  },
  {
    name: 'Massagens',
    description:
      'Relaxamento e bem-estar em um ambiente tranquilo. Técnicas terapêuticas especializadas.',
    icon: '🌿',
    href: '/massagens',
    image: '/images/services/massage.jpg',
  },
  {
    name: 'Tratamentos Faciais',
    description:
      'Cuidados especializados para sua pele. Revitalização e rejuvenescimento facial.',
    icon: '✨',
    href: '/#contato',
    image: '/images/services/facial.jpg',
  },
];

export function ServicesOverview() {
  return (
    <Section background="white" id="servicos">
      <SectionHeader
        title="Nossos Serviços"
        subtitle="Tratamentos especializados para realçar sua beleza natural"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {services.map((service) => (
          <Link
            key={service.name}
            href={service.href}
            className="group block h-full"
          >
            <Card className="h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-beige-light overflow-hidden">
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10" />
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute top-4 right-4 z-20 text-4xl">
                  {service.icon}
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-sage mb-3 group-hover:text-sage/80 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <div className="flex items-center text-sage text-sm font-medium group-hover:translate-x-2 transition-transform">
                  Saiba mais
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button
          size="lg"
          variant="outline"
          onClick={() => {
            const contatoSection = document.getElementById('contato');
            contatoSection?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Ver Todos os Tratamentos
        </Button>
      </div>
    </Section>
  );
}
