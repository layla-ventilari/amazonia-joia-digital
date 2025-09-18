
import { useState } from 'react';
import ProductCard from '../ui/ProductCard';
import { ShoppingBag, Filter } from 'lucide-react';
import { productService } from '@/data/productService';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const categories = productService.getCategories();
  
  const filteredProducts = productService.getProductsByCategory(selectedCategory);
  
  return (
    <section id="shop" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Loja</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-earth/80">
            Descubra nossas biojoias onde a moda encontra a natureza.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div className="flex items-center mb-4 md:mb-0">
            <ShoppingBag className="text-green-forest mr-2" size={20} />
            <h3 className="font-playfair text-xl text-green-forest">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'Peça' : 'Peças'}
            </h3>
          </div>
          
          <div className="flex items-center flex-wrap gap-3">
            <Filter className="text-green-forest mr-1" size={18} />
            <span className="text-earth mr-3">Filtrar por:</span>
            
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
            Gostou de alguma peça? Fale com a artista
          </p>
          <a 
            href="https://wa.me/5592987654321" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-secondary animate-pulse-light"
          >
            Comprar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Shop;
