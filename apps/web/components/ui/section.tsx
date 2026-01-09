import * as React from 'react';
import { cn } from '@/lib/utils';
import { Container } from './container';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  containerized?: boolean;
  background?: 'white' | 'beige-light' | 'sage-light';
}

export function Section({
  children,
  className,
  containerized = true,
  background = 'white',
  ...props
}: SectionProps) {
  const bgClasses = {
    white: 'bg-white',
    'beige-light': 'bg-beige-light',
    'sage-light': 'bg-sage/5',
  };

  const content = containerized ? <Container>{children}</Container> : children;

  return (
    <section
      className={cn('py-12 md:py-16 lg:py-20', bgClasses[background], className)}
      {...props}
    >
      {content}
    </section>
  );
}

interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeader({
  title,
  subtitle,
  centered = true,
  className,
  ...props
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'mb-8 md:mb-12',
        centered && 'text-center',
        className
      )}
      {...props}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-sage mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
