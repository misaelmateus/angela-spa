import { SiteLayout } from '@/components/layout/site-layout';
import { Hero } from '@/components/landing/hero';
import { ServicesOverview } from '@/components/landing/services-overview';
import { About } from '@/components/landing/about';
import { Contact } from '@/components/landing/contact';

export default function Home() {
  return (
    <SiteLayout>
      <Hero
        title="Sua Beleza Natural em Mãos Especializadas"
        subtitle="Clínica de Estética Completa no Setor Bueno, Goiânia. Tratamentos personalizados com tecnologia de ponta."
        ctaText="Agendar Avaliação Gratuita"
        ctaMessage="Olá! Gostaria de agendar uma avaliação gratuita na Angela Spa & Estética."
        backgroundImage="/images/hero/main-hero.jpg"
        imageAlt="Angela Spa & Estética - Clínica de Estética em Goiânia"
      />

      <ServicesOverview />

      <About />

      <Contact />
    </SiteLayout>
  );
}
