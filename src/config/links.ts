import { LinkBioButton } from '@/types';
import { courseConfig } from './course';
import { siteConfig } from './site';

// ATENÇÃO PRODUTOR: O endereço da loja de rostos personalizados está pendente de confirmação.
// A variável customFaceStoreUrl deve ser preenchida com a URL completa antes da ativação.
export const customFaceStoreUrl = process.env.NEXT_PUBLIC_CUSTOM_FACE_STORE_URL || '';

export const bioLinks: LinkBioButton[] = [
  {
    id: 'course-page',
    title: 'Conheça o Curso FaceMaker',
    subtitle: 'Aprenda a criar rostos 3D realistas para PES 2021',
    url: '/curso-facemaker',
    isPrimary: true,
    isExternal: false,
    utmCampaign: 'curso_facemaker',
    isEnabled: true,
  },
  {
    id: 'course-checkout',
    title: 'Comece a aprender FaceMaker (Checkout Direto)',
    subtitle: 'Garanta sua inscrição por R$ 250,00',
    url: courseConfig.checkoutUrl,
    isPrimary: false,
    isExternal: true,
    utmCampaign: 'venda_curso_facemaker',
    isEnabled: true,
  },
  {
    id: 'custom-face-store',
    title: 'Peça seu rosto personalizado',
    subtitle: 'Encomende um projeto exclusivo para o seu jogo',
    url: customFaceStoreUrl,
    isPrimary: false,
    isExternal: true,
    utmCampaign: 'encomenda_rosto_personalizado',
    // Desativado e oculto enquanto a URL oficial não for confirmada pelo produtor
    isEnabled: false,
    disabledNotice: 'Em breve, aguardando confirmação da URL oficial da loja.',
  },
  {
    id: 'youtube-channel',
    title: 'Assista aos conteúdos no YouTube',
    subtitle: 'Tutoriais, edições e novidades em vídeo',
    url: siteConfig.social.youtube.url,
    isPrimary: false,
    isExternal: true,
    utmCampaign: 'canal_youtube',
    isEnabled: true,
  },
  {
    id: 'instagram-profile',
    title: 'Acompanhe o Betinho Games',
    subtitle: 'Confira os últimos trabalhos e bastidores no Instagram',
    url: siteConfig.social.instagram.url,
    isPrimary: false,
    isExternal: true,
    utmCampaign: 'perfil_instagram',
    isEnabled: true,
  },
];
