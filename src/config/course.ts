export const courseConfig = {
  id: 'curso-facemaker-pes-2021',
  name: 'Curso FaceMaker Crie Rostos 3D para PES 2021',
  shortName: 'Curso FaceMaker',
  price: 297.00,
  formattedPrice: 'R$ 297,00',
  currency: 'BRL',
  category: 'Curso online de criação de rostos 3D para PES eFootball 2021',
  targetGame: 'PES eFootball 2021',
  
  // Checkout Oficial InfinitePay
  checkoutUrl: 'https://loja.infinitepay.io/betinhogamesbr/fvt6457-curso-facemaker-pes-21-j',

  securityMicrotext: 'Compra realizada em ambiente seguro de pagamento.',

  // Configuração da Seção de Apresentação em Vídeo
  videoSection: {
    enabled: true,
    provider: 'youtube', // 'youtube' | 'vimeo' | 'custom'
    videoUrl: '', // URL oficial a ser configurada quando disponível
    videoId: '', // ID oficial do vídeo no YouTube (ex: 'dQw4w9WgXcQ')
    poster: '/images/hero-facemaker-betinho-games.jpg',
    title: 'Apresentação do Curso FaceMaker por Betinho Games',
    description: 'Neste vídeo, Betinho Games apresenta a proposta do curso, as ferramentas utilizadas e o processo ensinado para transformar fotografias em faces 3D personalizadas para o PES eFootball 2021.',
  },
  
  checkoutNotes: [
    'Você será direcionado para o ambiente seguro de pagamento da InfinitePay.',
    'Formas e condições de pagamento exibidas diretamente no checkout.',
    'Acesso liberado conforme o processo definido pelo produtor após a confirmação.',
  ],

  disclaimerResults: 'O desenvolvimento dos resultados dependerá da prática, dedicação e evolução técnica de cada aluno.',
};
