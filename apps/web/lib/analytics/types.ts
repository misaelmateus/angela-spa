// Analytics types (inlined from @angela/shared for easier deployment)

export interface TrackEventParams {
  sessionId: string;
  eventType: string;
  eventName?: string;
  eventData?: Record<string, any>;
  elementId?: string;
  elementText?: string;
  pagePath: string;
}

export interface SessionData {
  sessionId: string;
  ipAddress: string;
  userAgent?: string;
  referrer?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
  landingPage: string;
  deviceType?: string;
  browser?: string;
  os?: string;
}

export interface ConversionData {
  sessionId: string;
  eventId: number;
  conversionType: string;
  pagePath: string;
  serviceInterest?: string;
}

export type EventType =
  | 'page_view'
  | 'scroll_depth'
  | 'time_on_page'
  | 'session_start'
  | 'session_end'
  | 'whatsapp_click'
  | 'phone_click'
  | 'navigation_click'
  | 'service_card_click'
  | 'cta_click'
  | 'social_media_click'
  | 'gallery_image_click'
  | 'map_click'
  | 'form_focus'
  | 'form_field_complete'
  | 'form_submit'
  | 'video_play'
  | 'before_after_view'
  | 'testimonial_view'
  | 'pricing_view';
