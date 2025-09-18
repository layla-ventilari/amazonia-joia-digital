import { ProductProps } from '@/types/product';

export const allProducts: ProductProps[] = [
  // Colares
  {
    id: '1',
    name: 'Colar Vitória-Régia',
    description: 'Inspirado nas folhas sagradas que flutuam nas águas amazônicas, criado com sementes naturais de açaí.',
    price: 'R$ 189,00',
    imageSrc: '/assets/colar-1.png',
    category: 'Colares',
  },
  {
    id: '2',
    name: 'Colar Rio Negro',
    description: 'Peças em tons que evocam o mistério das águas profundas do maior rio de água preta do mundo.',
    price: 'R$ 210,00',
    imageSrc: '/assets/colar-2.png',
    category: 'Colares',
  },
  
  // Brincos
  {
    id: '3',
    name: 'Brincos Folha Dourada',
    description: 'Delicados brincos em formato de folha com banho de ouro vegetal que capturam a luz como o sol entre as árvores.',
    price: 'R$ 129,00',
    imageSrc: '/assets/colar-3.png',
    category: 'Brincos',
  },
  {
    id: '4',
    name: 'Brincos Cipó Trançado',
    description: 'Brincos longos que dançam ao movimento, inspirados nos cipós da floresta, adornados com sementes coloridas.',
    price: 'R$ 145,00',
    imageSrc: '/assets/colar-4.png',
    category: 'Brincos',
  },
  
  // Pulseiras
  {
    id: '5',
    name: 'Pulseira Águas do Rio Negro',
    description: 'Pulseira com contas de sementes coloridas e fechos artesanais em latão, ecoando o movimento das águas escuras.',
    price: 'R$ 98,00',
    imageSrc: '/assets/pulseira.png',
    category: 'Pulseiras',
  },
  {
    id: '6',
    name: 'Pulseira Floresta Densa',
    description: 'Pulseira com várias voltas em tons verdejantes, representando as camadas vitais da floresta.',
    price: 'R$ 110,00',
    imageSrc: '/assets/colar-5.png',
    category: 'Pulseiras',
  },
  
  // Anéis
  {
    id: '7',
    name: 'Anel Fibras da Terra',
    description: 'Anel ajustável tecido com fibras naturais e detalhes em prata, como raízes que abraçam seu dedo.',
    price: 'R$ 75,00',
    imageSrc: '/assets/colar-6.png',
    category: 'Anéis',
  },
  {
    id: '8',
    name: 'Anel Tronco Antigo',
    description: 'Inspirado nos anéis de árvores centenárias, talhado em madeira reciclada que guarda memórias do tempo.',
    price: 'R$ 85,00',
    imageSrc: '/assets/colar-7.png',
    category: 'Anéis',
  },
  
  // Conjuntos
  {
    id: '9',
    name: 'Conjunto Amazônia Profunda',
    description: 'Kit completo que entrelaça colar, brincos e pulseira em tons que ecoam o verde e o marrom da mata densa.',
    price: 'R$ 299,00',
    imageSrc: '/assets/colar-8.png',
    category: 'Conjuntos',
  },
  
  // Tornozeleiras
  {
    id: '10',
    name: 'Tornozeleira Raízes',
    description: 'Tornozeleira delicada com detalhes que sussurram a história das raízes ancestrais das árvores amazônicas.',
    price: 'R$ 89,00',
    imageSrc: '/assets/colar-9.png',
    category: 'Tornozeleiras',
  },
];

export const categories = ['Todos', 'Colares', 'Brincos', 'Pulseiras', 'Anéis', 'Conjuntos', 'Tornozeleiras'];