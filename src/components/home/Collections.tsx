
import ProductCard, { ProductProps } from '../ui/ProductCard';

const collections = [
  {
    id: '1',
    name: 'Colar Vitória-Régia',
    description: 'Inspirado nas folhas sagradas que flutuam nas águas amazônicas, criado com sementes naturais de açaí.',
    price: 'R$ 189,00',
    imageSrc: 'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?q=80&w=2000',
    category: 'Colares',
  },
  {
    id: '2',
    name: 'Brincos Folha Dourada',
    description: 'Delicados brincos em formato de folha com banho de ouro vegetal que capturam a luz como o sol entre as árvores.',
    price: 'R$ 129,00',
    imageSrc: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=2000',
    category: 'Brincos',
  },
  {
    id: '3',
    name: 'Pulseira Águas do Rio Negro',
    description: 'Pulseira com contas de sementes coloridas e fechos artesanais em latão, ecoando o movimento das águas escuras.',
    price: 'R$ 98,00',
    imageSrc: 'https://images.unsplash.com/photo-1573408301428-9525646d1acd?q=80&w=2000',
    category: 'Pulseiras',
  },
  {
    id: '4',
    name: 'Anel Fibras da Terra',
    description: 'Anel ajustável tecido com fibras naturais e detalhes em prata, como raízes que abraçam seu dedo.',
    price: 'R$ 75,00',
    imageSrc: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2000',
    category: 'Anéis',
  },
  {
    id: '5',
    name: 'Conjunto Amazônia Profunda',
    description: 'Kit completo que entrelaça colar, brincos e pulseira em tons que ecoam o verde e o marrom da mata densa.',
    price: 'R$ 299,00',
    imageSrc: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=2000',
    category: 'Conjuntos',
  },
  {
    id: '6',
    name: 'Tornozeleira Raízes',
    description: 'Tornozeleira delicada com detalhes que sussurram a história das raízes ancestrais das árvores amazônicas.',
    price: 'R$ 89,00',
    imageSrc: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2000',
    category: 'Tornozeleiras',
  },
];

const Collections = () => {
  return (
    <section id="collections" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Coleções que Contam Histórias</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-earth/80">
            Em cada biojoia, carregamos o som das folhas, o silêncio do barro, a dança das cores naturais. 
            Em cada peça, uma história. Em cada história, um reencontro.
          </p>
        </div>
        
        <div className="gallery-grid">
          {collections.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#shop" className="btn-primary">Explore a Coleção Viva</a>
        </div>
      </div>
    </section>
  );
};

export default Collections;
