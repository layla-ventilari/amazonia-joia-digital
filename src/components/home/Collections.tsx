
import ProductCardMinimal from '../ui/ProductCardMinimal';
import { productService } from '@/data/productService';

const Collections = () => {
  return (
    <section id="collections" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Coleção Nova</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-earth/80">
            Cada biojoia conta uma história. Cada peça carrega a essência da natureza.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {productService.getFeaturedProducts().map((product) => (
            <ProductCardMinimal key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#shop" className="btn-primary">Ver Mais</a>
        </div>
      </div>
    </section>
  );
};

export default Collections;
