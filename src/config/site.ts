export const siteConfig = {
  brandName: 'Betinho Games',
  instructorName: 'Betinho Games',
  instructorHandle: 'BetinhoGames',
  role: 'Editor e Criador de Faces para PES',
  tagline: 'Criação de rostos 3D para PES 2021',
  niche: 'FaceMaker para PES eFootball 2021',
  sinceYear: 2018,
  teamAffiliation: 'Copa LE Patch',
  
  // URL base do projeto
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL || 'https://betinhogames.com.br',

  // Redes Sociais Oficiais
  social: {
    instagram: {
      handle: '@betinho_games',
      url: 'https://instagram.com/betinho_games',
    },
    youtube: {
      handle: '@betinhogames',
      url: 'https://youtube.com/@betinhogames?si=_wKmnD8w3403WjGN',
    },
  },

  // Metadados Padrão de SEO
  seo: {
    defaultTitle: 'Curso FaceMaker para PES 2021 | Betinho Games',
    courseTitle: 'Curso FaceMaker para PES 2021 | Betinho Games',
    courseDescription: 'Aprenda com Betinho Games o processo de criação de rostos 3D para PES eFootball 2021 utilizando referências, Blender e Photoshop.',
    linksTitle: 'Betinho Games | FaceMaker e Curso de Rostos 3D',
    linksDescription: 'Acesse o curso de FaceMaker, solicite seu rosto personalizado e acompanhe os conteúdos do Betinho Games.',
    ogImage: '/images/og-image.jpg',
  },

  // Dados Jurídicos e Contato
  legal: {
    companyName: 'Betinho Games — Designer FaceMaker',
    legalName: '[CONFIRMAR RAZÃO SOCIAL OU NOME COMPLETO COM PRODUTOR]',
    document: '[CONFIRMAR CPF OU CNPJ COM PRODUTOR]',
    contactEmail: 'contato@betinhogames.com.br',
    dpoEmail: 'privacidade@betinhogames.com.br',
    hostingProvider: 'Vercel Inc.',
  },
};
