'use client';

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
    image: '/images/services/body.png',
  },
  {
    name: 'Massagens',
    description:
      'Relaxamento e bem-estar em um ambiente tranquilo. Técnicas terapêuticas especializadas.',
    icon: '🌿',
    href: '/massagens',
    image: '/images/services/massage.png',
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

      {/* Desktop Grid */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {services.map((service) => (
          <Link
            key={service.name}
            href={service.href}
            className="group block h-full"
          >
            <Card className="h-full transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border-beige-light overflow-hidden cursor-pointer">
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10 transition-opacity group-hover:opacity-80" />
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute top-4 right-4 z-20 text-4xl transition-transform duration-300 group-hover:scale-110">
                  {service.icon}
                </div>
              </div>

              <CardContent className="p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-serif font-semibold text-sage mb-2 md:mb-3 group-hover:text-sage/80 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
                <div className="inline-flex items-center gap-2 text-sage text-sm font-medium px-4 py-2 bg-sage/5 rounded-full group-hover:bg-sage group-hover:text-white transition-all duration-300">
                  <span>Saiba mais</span>
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
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

      {/* Mobile Horizontal Scroll */}
      <div className="md:hidden">
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4">
          {services.map((service) => (
            <Link
              key={service.name}
              href={service.href}
              className="group block flex-shrink-0 w-[85vw] snap-center"
            >
              <Card className="h-full transition-all duration-500 active:scale-95 border-beige-light overflow-hidden">
                {/* Service Image */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10" />
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover"
                    sizes="85vw"
                  />
                  <div className="absolute top-3 right-3 z-20 text-3xl">
                    {service.icon}
                  </div>
                </div>

                <CardContent className="p-4">
                  <h3 className="text-lg font-serif font-semibold text-sage mb-2">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed line-clamp-2">
                    {service.description}
                  </p>
                  <div className="inline-flex items-center gap-2 text-sage text-sm font-medium">
                    <span>Saiba mais</span>
                    <svg
                      className="w-4 h-4"
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

        {/* Scroll Indicator Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {services.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-sage/20"
            />
          ))}
        </div>
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
