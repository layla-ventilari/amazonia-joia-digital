
import { useState } from 'react';
import ProductCard, { ProductProps } from '../ui/ProductCard';
import { ShoppingBag, Filter } from 'lucide-react';

const allProducts: ProductProps[] = [
  // Colares
  {
    id: '1',
    name: 'Colar Vitória-Régia',
    description: 'Inspirado nas folhas da planta aquática amazônica, com sementes naturais de açaí.',
    price: 'R$ 189,00',
    imageSrc: 'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?q=80&w=2000',
    category: 'Colares',
  },
  {
    id: '2',
    name: 'Colar Rio Negro',
    description: 'Peças em tons azuis e pretos que remetem às águas profundas do maior rio de água preta do mundo.',
    price: 'R$ 210,00',
    imageSrc: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=2000',
    category: 'Colares',
  },
  
  // Brincos
  {
    id: '3',
    name: 'Brincos Folha Dourada',
    description: 'Delicados brincos em formato de folha com banho de ouro vegetal.',
    price: 'R$ 129,00',
    imageSrc: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=2000',
    category: 'Brincos',
  },
  {
    id: '4',
    name: 'Brincos Cipó Trançado',
    description: 'Brincos longos inspirados nos cipós da floresta, com detalhes em sementes coloridas.',
    price: 'R$ 145,00',
    imageSrc: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=2000',
    category: 'Brincos',
  },
  
  // Pulseiras
  {
    id: '5',
    name: 'Pulseira Águas do Rio Negro',
    description: 'Pulseira com contas de sementes coloridas e fechos artesanais em latão.',
    price: 'R$ 98,00',
    imageSrc: 'https://images.unsplash.com/photo-1573408301428-9525646d1acd?q=80&w=2000',
    category: 'Pulseiras',
  },
  {
    id: '6',
    name: 'Pulseira Floresta Densa',
    description: 'Pulseira com várias voltas em tons de verde, representando as camadas da floresta.',
    price: 'R$ 110,00',
    imageSrc: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=2000',
    category: 'Pulseiras',
  },
  
  // Anéis
  {
    id: '7',
    name: 'Anel Fibras da Terra',
    description: 'Anel ajustável feito com tramas de fibras naturais e detalhes em prata.',
    price: 'R$ 75,00',
    imageSrc: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2000',
    category: 'Anéis',
  },
  {
    id: '8',
    name: 'Anel Tronco Antigo',
    description: 'Inspirado nos anéis de árvores centenárias, talhado em madeira de reaproveitamento.',
    price: 'R$ 85,00',
    imageSrc: 'https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?q=80&w=2000',
    category: 'Anéis',
  },
  
  // Conjuntos
  {
    id: '9',
    name: 'Conjunto Amazônia Profunda',
    description: 'Kit completo com colar, brincos e pulseira em tons de verde e marrom.',
    price: 'R$ 299,00',
    imageSrc: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=2000',
    category: 'Conjuntos',
  }
];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const categories = ['Todos', 'Colares', 'Brincos', 'Pulseiras', 'Anéis', 'Conjuntos'];
  
  const filteredProducts = selectedCategory === 'Todos' 
    ? allProducts 
    : allProducts.filter(product => product.category === selectedCategory);
  
  return (
    <section id="shop" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Loja</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-earth/80">
            Descubra nossa coleção de biojoias artesanais, 
            cada uma com uma história única da Amazônia.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div className="flex items-center mb-4 md:mb-0">
            <ShoppingBag className="text-green-forest mr-2" size={20} />
            <h3 className="font-playfair text-xl text-green-forest">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'Produto' : 'Produtos'}
            </h3>
          </div>
          
          <div className="flex items-center flex-wrap gap-3">
            <Filter className="text-green-forest mr-1" size={18} />
            <span className="text-earth mr-3">Filtrar:</span>
            
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-1 rounded-full text-sm transition-colors ${
                  selectedCategory === category
                    ? 'bg-green-forest text-cream'
                    : 'bg-muted text-earth hover:bg-gold/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="gallery-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-12 flex flex-col items-center">
          <p className="text-lg text-green-forest font-medium mb-4">
            Gostou de alguma peça? Entre em contato para adquirir ou tirar dúvidas
          </p>
          <a 
            href="https://wa.me/5592987654321" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-secondary animate-pulse-light"
          >
            Comprar via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Shop;
