'use client';

import * as React from 'react';
import { Header } from './header';
import { Footer } from './footer';
import { FloatingWhatsAppButton } from '@/components/whatsapp-button';

interface SiteLayoutProps {
  children: React.ReactNode;
}

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
}
