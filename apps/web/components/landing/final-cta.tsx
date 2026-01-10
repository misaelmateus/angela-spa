import { Section } from '@/components/ui/section';
import { WhatsAppButton } from '@/components/whatsapp-button';

export function FinalCTA() {
  return (
    <Section background="sage" className="py-16 lg:py-24">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-3xl lg:text-5xl font-serif font-bold mb-6">
          Pronta para Conquistar a Pele Lisa que Você Sempre Sonhou?
        </h2>

        <p className="text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed">
          Milhares de mulheres já transformaram suas vidas com a depilação a laser.
          Sua vez chegou.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <div className="flex items-center gap-2 text-white/90">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>4.9/5.0 no Google</span>
          </div>
          <div className="flex items-center gap-2 text-white/90">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span>+5.000 clientes satisfeitas</span>
          </div>
        </div>

        <WhatsAppButton
          variant="beige"
          size="xl"
          className="w-full sm:w-auto text-lg shadow-2xl"
          message="Olá! Estou pronta para começar minha jornada com depilação a laser. Vamos agendar?"
          serviceInterest="Depilação a Laser - Final CTA"
        >
          Sim, Quero Agendar Minha Avaliação Gratuita!
        </WhatsAppButton>

        <p className="text-sm text-white/70 mt-6">
          ✓ Sem compromisso • ✓ Avaliação 100% gratuita • ✓ Atendimento em até 1 hora
        </p>
      </div>
    </Section>
  );
}
