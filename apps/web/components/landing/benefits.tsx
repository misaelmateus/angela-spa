import * as React from 'react';
import { Section, SectionHeader } from '@/components/ui/section';
import { Card, CardContent } from '@/components/ui/card';

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface BenefitsProps {
  title?: string;
  subtitle?: string;
  benefits: Benefit[];
  background?: 'white' | 'beige-light' | 'sage-light';
}

export function Benefits({
  title = 'Benefícios',
  subtitle,
  benefits,
  background = 'beige-light',
}: BenefitsProps) {
  return (
    <Section background={background}>
      <SectionHeader title={title} subtitle={subtitle} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {benefits.map((benefit, index) => (
          <Card key={index} className="border-beige-light transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-sage/10 flex items-center justify-center text-sage">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-semibold text-sage mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
