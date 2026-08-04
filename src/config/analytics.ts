export const analyticsConfig = {
  // IDs de rastreamento (carregados via variáveis de ambiente)
  // Deixe em branco no .env se ainda não possuir os IDs
  googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID || '',
  googleTagManagerId: process.env.NEXT_PUBLIC_GTM_ID || '',
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID || '',
  googleAdsId: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || '',

  // Lista de eventos suportados na camada de dados
  events: {
    VIEW_COURSE_PAGE: 'view_course_page',
    CLICK_PRIMARY_CTA: 'click_primary_cta',
    CLICK_CHECKOUT: 'click_checkout',
    VIEW_OFFER: 'view_offer',
    OPEN_FAQ: 'open_faq',
    CLICK_INSTAGRAM: 'click_instagram',
    CLICK_YOUTUBE: 'click_youtube',
    CLICK_CUSTOM_FACE_STORE: 'click_custom_face_store',
    VIEW_LINKS_PAGE: 'view_links_page',
    CLICK_LINK_BIO_COURSE: 'click_link_bio_course',
    VIEW_PORTFOLIO_ITEM: 'view_portfolio_item',
    CLICK_FINAL_CTA: 'click_final_cta',
  },
};
