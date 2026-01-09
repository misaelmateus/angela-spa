'use client';

import * as React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { WhatsAppButton } from '@/components/whatsapp-button';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaMessage?: string;
  serviceInterest?: string;
  backgroundImage?: string;
  imageAlt?: string;
  overlay?: 'none' | 'light' | 'medium' | 'dark';
  alignment?: 'left' | 'center' | 'right';
  className?: string;
}

export function Hero({
  title,
  subtitle,
  ctaText = 'Fale no WhatsApp',
  ctaMessage,
  serviceInterest,
  backgroundImage = '/images/hero/main-hero.jpg',
  imageAlt = 'Angela Spa & Estética',
  overlay = 'medium',
  alignment = 'center',
  className,
}: HeroProps) {
  const overlayClasses = {
    none: 'bg-transparent',
    light: 'bg-black/20',
    medium: 'bg-black/40',
    dark: 'bg-black/60',
  };

  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  return (
    <section
      className={cn(
        'relative min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-center',
        className
      )}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Overlay with gradient for better text readability */}
        {overlay !== 'none' && (
          <>
            <div className={cn('absolute inset-0', overlayClasses[overlay])} />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
          </>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-20">
        <div
          className={cn(
            'flex flex-col space-y-6 max-w-3xl',
            alignmentClasses[alignment],
            alignment === 'center' && 'mx-auto'
          )}
        >
          {/* Google Rating Badge */}
          <div className="flex items-center gap-2 mb-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-white text-xs font-semibold uppercase tracking-wider">
              4,8 NO GOOGLE
            </span>
          </div>

          {/* Title */}
          <h1 className={cn(
            "text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-white leading-tight",
            overlay === 'none' && "drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] [text-shadow:_2px_2px_8px_rgb(0_0_0_/_90%)]"
          )}>
            {title}
          </h1>

          {/* Subtitle */}
          <p className={cn(
            "text-base md:text-lg lg:text-xl text-white/90 max-w-2xl font-light",
            overlay === 'none' && "drop-shadow-[0_3px_10px_rgba(0,0,0,0.85)] [text-shadow:_1px_1px_6px_rgb(0_0_0_/_85%)]"
          )}>
            {subtitle}
          </p>

          {/* CTA */}
          <div className="flex flex-col gap-4 items-center pt-4">
            <div className="flex flex-col gap-2 w-full sm:w-auto">
              <WhatsAppButton
                size="xl"
                message={ctaMessage}
                serviceInterest={serviceInterest}
                className="shadow-xl hover:shadow-2xl w-full sm:w-auto bg-sage hover:bg-sage-dark transition-all duration-300"
              >
                {ctaText}
              </WhatsAppButton>
              <p className="text-white/70 text-[10px] md:text-xs text-center font-light">
                Resposta imediata via WhatsApp
              </p>
            </div>

            <button
              className="text-white/90 hover:text-white text-sm font-medium flex items-center gap-2 transition-all duration-300 hover:gap-3 group"
              onClick={() => {
                const sobreSection = document.getElementById('sobre');
                sobreSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Saiba Mais
              <svg
                className="w-4 h-4 transform group-hover:translate-y-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </button>
          </div>

          {/* Trust Indicators - Horizontal Outline Icons */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-6 pt-6 md:pt-8 text-white max-w-2xl">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 md:w-6 md:h-6 text-white/80"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                />
              </svg>
              <span className="text-xs md:text-sm font-light">Certificados</span>
            </div>

            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 md:w-6 md:h-6 text-white/80"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
                />
              </svg>
              <span className="text-xs md:text-sm font-light">Tecnologia</span>
            </div>

            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 md:w-6 md:h-6 text-white/80"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
              <span className="text-xs md:text-sm font-light">Personalizado</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
