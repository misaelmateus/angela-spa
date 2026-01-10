import * as React from 'react';
import { Section, SectionHeader } from '@/components/ui/section';
import { Card } from '@/components/ui/card';
import { WhatsAppButton } from '@/components/whatsapp-button';

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: 'Telefone',
    value: '(62) 98126-0247',
    link: 'tel:+5562981260247',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Endereço',
    value: 'R. T-53, 1185 - St. Bueno, Goiânia - GO',
    link: 'https://www.google.com/maps/place/Angela+Spa+%26+Est%C3%A9tica/@-16.7068318,-49.2572795,17z',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Horário',
    value: 'Seg-Sex: 07:30-20:00 • Sáb: 07:30-14:00',
    link: null,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
      </svg>
    ),
    title: 'Instagram',
    value: '@angelacentrodeestetica',
    link: 'https://instagram.com/angelacentrodeestetica',
  },
];

export function Contact() {
  return (
    <Section background="white" id="contato">
      <SectionHeader
        title="Entre em Contato"
        subtitle="Estamos prontos para atendê-la. Agende sua consulta hoje mesmo."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Contact Info - Clean List Design */}
        <div className="space-y-6">
          {/* Contact Items - Minimal Cards */}
          <div className="bg-beige-light/30 rounded-2xl p-5 lg:p-6 space-y-4">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start gap-3 group">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-sage/10 flex items-center justify-center text-sage group-hover:bg-sage group-hover:text-white transition-colors">
                  {info.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-gray-900 mb-0.5">
                    {info.title}
                  </h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-sage hover:text-sage/80 transition-colors break-words"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-sm text-gray-600">
                      {info.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CTA - Compact */}
          <div className="bg-gradient-to-br from-sage to-sage/80 rounded-2xl p-6 text-white">
            <h3 className="text-xl lg:text-2xl font-serif font-bold mb-2">
              Pronta para Transformar sua Beleza?
            </h3>
            <p className="text-white/90 mb-5 text-sm lg:text-base">
              Agende uma avaliação gratuita e conheça nossos tratamentos personalizados.
            </p>
            <WhatsAppButton
              variant="beige"
              size="lg"
              className="w-full sm:w-auto"
              message="Olá! Gostaria de agendar uma avaliação gratuita."
            >
              Agendar Avaliação Gratuita
            </WhatsAppButton>
          </div>
        </div>

        {/* Map */}
        <div className="relative">
          <Card className="border-beige-light overflow-hidden h-full min-h-[350px] lg:min-h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15285.728292372678!2d-49.28372094851976!3d-16.70527964512096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef13a854ce309%3A0x7125e1a08101d3!2sAngela%20Spa%20%26%20Est%C3%A9tica!5e0!3m2!1spt-BR!2sbr!4v1768062162152!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '350px', height: '100%' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Card>
        </div>
      </div>
    </Section>
  );
}
