export const courseConfig = {
  id: 'curso-facemaker-pes-2021',
  name: 'Curso FaceMaker Crie Rostos 3D para PES 2021',
  shortName: 'Curso FaceMaker',
  price: 297.00,
  formattedPrice: 'R$ 297,00',
  installments: {
    count: 12,
    value: 'R$ 30,72',
    formatted: '12x de R$ 30,72',
  },
  accessType: 'Acesso vitalício',
  currency: 'BRL',
  category: 'Curso online de criação de rostos 3D para PES eFootball 2021',
  targetGame: 'PES eFootball 2021',
  
  // Checkout Oficial Kiwify
  checkoutUrl: 'https://pay.kiwify.com.br/KotQF7P',

  securityMicrotext: 'Compra realizada em ambiente seguro de pagamento.',

  // Destaques rápidos com check verde
  highlights: [
    'Grupo de suporte',
    'Passo a passo',
    'Materiais para download',
    'Acesso Imediato',
  ],

  // Configuração da Seção de Apresentação em Vídeo
  videoSection: {
    enabled: true,
    provider: 'youtube', // 'youtube' | 'vimeo' | 'custom'
    videoUrl: 'https://youtube.com/shorts/Sez9gT0_t-I?feature=share', // URL oficial do vídeo no YouTube Shorts
    videoId: 'Sez9gT0_t-I', // ID oficial do vídeo
    isShorts: true,
    poster: '/images/hero-facemaker-betinho-games.jpg',
    title: 'Apresentação do Curso FaceMaker por Betinho Games',
    description: 'Neste vídeo, Betinho Games apresenta a proposta do curso, as ferramentas utilizadas e o processo ensinado para transformar fotografias em faces 3D personalizadas para o PES eFootball 2021.',
  },
  
  checkoutNotes: [
    'Você será direcionado para o ambiente seguro de pagamento da Kiwify.',
    'Formas e condições de pagamento exibidas diretamente no checkout.',
    'Acesso liberado conforme o processo definido pelo produtor após a confirmação.',
  ],

  disclaimerResults: 'O desenvolvimento dos resultados dependerá da prática, dedicação e evolução técnica de cada aluno.',
};
