import { CourseModule } from '@/types';

export const courseModules: CourseModule[] = [
  {
    id: 'aula-01',
    number: 1,
    title: 'Introdução ao FaceMaker',
    description: 'Apresentação do curso e visão geral do processo de criação de faces 3D.',
    topics: [
      'Visão geral do treinamento e fluxo de trabalho',
      'Entendimento inicial sobre a criação de faces para PES eFootball 2021',
      'Como acompanhar as orientações práticas de forma organizada',
    ],
  },
  {
    id: 'aula-02',
    number: 2,
    title: 'Materiais necessários',
    description: 'Conheça os recursos, referências e ferramentas necessários para iniciar a criação.',
    topics: [
      'Seleção de referências fotográficas de boa qualidade',
      'Apresentação dos programas utilizados no processo (Blender e Photoshop)',
      'Organização dos arquivos de base do projeto',
    ],
  },
  {
    id: 'aula-03',
    number: 3,
    title: 'Preparação e desenvolvimento',
    description: 'Continuação do desenvolvimento apresentado na primeira aula prática.',
    topics: [
      'Ajustes iniciais das referências no ambiente de edição',
      'Mapeamento básico das proporções do rosto',
      'Alinhamento das linhas faciais e pontos de referência',
    ],
  },
  {
    id: 'aula-04',
    number: 4,
    title: 'Criação da face 3D',
    description: 'Aplicação das técnicas apresentadas durante o processo de criação e edição.',
    topics: [
      'Construção e ajuste dos traços característicos do rosto',
      'Aplicação e tratamento visual das texturas de pele',
      'Refinamento de detalhes de expressão e iluminação',
    ],
  },
  {
    id: 'aula-05',
    number: 5,
    title: 'Ajustes e finalização',
    description: 'Conclusão do projeto e preparação da face para utilização no PES eFootball 2021.',
    topics: [
      'Revisão final dos detalhes visuais da face',
      'Exportação e estruturação dos arquivos da face',
      'Preparação final para inclusão no PES eFootball 2021',
    ],
  },
];
