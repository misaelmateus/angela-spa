'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { WhatsAppButton } from '@/components/whatsapp-button';

const navigation = [
  { name: 'Início', href: '/' },
  { name: 'Depilação Laser', href: '/depilacao-laser' },
  { name: 'Tratamentos Corporais', href: '/tratamentos-corporais' },
  { name: 'Massagens', href: '/massagens' },
];

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        {/* Mobile & Desktop Layout */}
        <div className="flex items-center justify-between h-20 lg:h-24">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="relative w-44 h-14 sm:w-48 sm:h-16 md:w-52 md:h-16 lg:w-56 lg:h-18">
              <Image
                src="/images/logos/logo-secondary-transparent.png"
                alt="Angela Spa & Estética"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-sage relative',
                  pathname === item.href
                    ? 'text-sage after:absolute after:bottom-[-8px] after:left-0 after:right-0 after:h-0.5 after:bg-sage'
                    : 'text-gray-700'
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex">
            <WhatsAppButton size="default">
              Agendar Consulta
            </WhatsAppButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-sage hover:bg-sage/10 rounded-md transition-colors"
            aria-label="Menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  'block px-4 py-2 text-base font-medium rounded-md transition-colors',
                  pathname === item.href
                    ? 'text-sage bg-sage/10'
                    : 'text-gray-700 hover:text-sage hover:bg-sage/5'
                )}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-4 pt-4">
              <WhatsAppButton size="default" className="w-full">
                Agendar Consulta
              </WhatsAppButton>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
