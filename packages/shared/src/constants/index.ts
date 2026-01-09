// Shared constants

export const WHATSAPP_NUMBER = '5562981260247';

export const WHATSAPP_MESSAGES = {
  general: 'Olá! Gostaria de saber mais sobre os serviços da Angela Spa.',
  laser:
    'Olá! Gostaria de saber mais sobre depilação a laser e agendar uma avaliação.',
  body: 'Olá! Quero saber mais sobre tratamentos corporais e agendar uma avaliação.',
  massage: 'Olá! Gostaria de agendar uma massagem. Qual a disponibilidade?',
};

export const SERVICE_CATEGORIES = {
  laser: 'Depilação a Laser',
  body: 'Tratamentos Corporais',
  massage: 'Massagens',
  facial: 'Tratamentos Faciais',
} as const;

export const BRAND_COLORS = {
  sage: '#9DAB97',
  beigeLight: '#EDE5DB',
  beige: '#C4AE91',
  white: '#FFFFFF',
} as const;

export const API_ENDPOINTS = {
  track: '/api/backend/v1/analytics/track',
  variant: '/api/backend/v1/ab-tests/variant',
  session: '/api/backend/v1/analytics/session',
} as const;

export const LOCAL_STORAGE_KEYS = {
  sessionId: 'angela_session_id',
  abTestVariants: 'angela_ab_variants',
  cookieConsent: 'angela_cookie_consent',
} as const;

export const EVENT_TYPES = {
  pageView: 'page_view',
  scrollDepth: 'scroll_depth',
  timeOnPage: 'time_on_page',
  whatsappClick: 'whatsapp_click',
  ctaClick: 'cta_click',
  serviceCardClick: 'service_card_click',
} as const;
