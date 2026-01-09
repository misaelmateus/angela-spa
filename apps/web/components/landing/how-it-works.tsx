import * as React from 'react';
import { Section, SectionHeader } from '@/components/ui/section';

interface Step {
  number: string;
  title: string;
  description: string;
}

interface HowItWorksProps {
  title?: string;
  subtitle?: string;
  steps: Step[];
  background?: 'white' | 'beige-light' | 'sage-light';
}

export function HowItWorks({
  title = 'Como Funciona',
  subtitle,
  steps,
  background = 'white',
}: HowItWorksProps) {
  return (
    <Section background={background}>
      <SectionHeader title={title} subtitle={subtitle} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            {/* Connection Line (desktop only) */}
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-sage/20 z-0" />
            )}

            {/* Step Content */}
            <div className="relative z-10 text-center">
              {/* Step Number */}
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-sage to-sage/80 flex items-center justify-center text-white shadow-lg">
                <span className="text-3xl font-bold">{step.number}</span>
              </div>

              {/* Step Title */}
              <h3 className="text-xl font-semibold text-sage mb-3">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-gray-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
