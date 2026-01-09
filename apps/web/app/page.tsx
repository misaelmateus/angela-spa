import { SiteLayout } from '@/components/layout/site-layout';
import { Hero } from '@/components/landing/hero';
import { ServicesOverview } from '@/components/landing/services-overview';
import { Experience } from '@/components/landing/experience';
import { About } from '@/components/landing/about';
import { Contact } from '@/components/landing/contact';

export default function Home() {
  return (
    <SiteLayout>
      <Hero
        title="Recupere sua melhor versão com quem é referência há 40 anos no Setor Bueno."
        subtitle="Especialistas em Depilação a Laser, Massagens, Tratamentos Faciais e Corporais. Junte-se a mais de 1000 clientes satisfeitos e viva uma experiência personalizada."
        ctaText="Quero minha Avaliação Gratuita"
        ctaMessage="Olá! Gostaria de agendar uma avaliação gratuita na Angela Spa & Estética."
        backgroundImage="/images/hero/main-hero.jpg"
        imageAlt="Angela Spa & Estética - Clínica de Estética em Goiânia"
      />

      <Experience />

      <ServicesOverview />

      <About />

      <Contact />
    </SiteLayout>
  );
}
