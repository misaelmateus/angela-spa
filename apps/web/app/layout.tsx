import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import { Providers } from '@/components/providers';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const audrey = localFont({
  src: '../public/fonts/audrey.woff2',
  variable: '--font-audrey',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Angela Spa & Estética - Clínica de Estética em Goiânia',
  description:
    'Clínica de estética completa em Goiânia. Depilação a laser, tratamentos corporais, massagens e muito mais.',
  keywords: [
    'clinica de estetica goiania',
    'estetica goiania',
    'depilacao a laser goiania',
    'tratamentos corporais goiania',
    'massagem goiania',
    'spa goiania',
  ],
  authors: [{ name: 'Angela Spa & Estética' }],
  creator: 'Angela Spa & Estética',
  publisher: 'Angela Spa & Estética',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://angela-spa.com',
    siteName: 'Angela Spa & Estética',
    title: 'Angela Spa & Estética - Clínica de Estética em Goiânia',
    description:
      'Clínica de estética completa em Goiânia. Depilação a laser, tratamentos corporais, massagens e muito mais.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Angela Spa & Estética',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Angela Spa & Estética - Clínica de Estética em Goiânia',
    description:
      'Clínica de estética completa em Goiânia. Depilação a laser, tratamentos corporais, massagens e muito mais.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable} ${audrey.variable}`}>
      <body className="font-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
