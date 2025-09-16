
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, ShoppingBag } from 'lucide-react';
import { ProductProps } from '@/types/product';

const ProductCard = ({ product }: { product: ProductProps }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  
  const handleProductClick = () => {
    navigate(`/produto/${product.id}`);
  };
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    // TODO: Implementar carrinho de compras
    console.log('Adicionado ao carrinho:', product.name);
  };
  
  return (
    <div 
      className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer card-hover"
      onClick={handleProductClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Container da Imagem com Proporção Mantida */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img 
          src={product.imageSrc} 
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-105' : 'scale-100'}`}
          loading="lazy"
        />
        
        {/* Overlay Elegante */}
        <div className={`absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent flex flex-col justify-end items-center p-6 transition-all duration-500 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="text-center mb-4 transform transition-transform duration-500">
            <h3 className="text-card font-playfair text-lg font-semibold mb-1 line-clamp-1">
              {product.name}
            </h3>
            <p className="text-card/90 font-lato text-sm font-medium">
              {product.price}
            </p>
          </div>
          
          <div className="flex gap-3">
            <button 
              className="bg-card text-primary px-4 py-2 rounded-xl font-medium flex items-center gap-2 hover:bg-card/90 transition-all duration-300 hover:scale-105 shadow-lg"
              onClick={(e) => {
                e.stopPropagation();
                handleProductClick();
              }}
            >
              <Eye size={16} />
              Ver Detalhes
            </button>
            
            <button 
              onClick={handleAddToCart}
              className="bg-primary text-primary-foreground px-4 py-2 rounded-xl font-medium flex items-center gap-2 hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <ShoppingBag size={16} />
              Carrinho
            </button>
          </div>
        </div>
      </div>
      
      {/* Informações do Produto */}
      <div className="p-4 sm:p-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs text-accent font-lato font-medium uppercase tracking-wide px-2 py-1 bg-accent/10 rounded-full">
            {product.category}
          </span>
        </div>
        
        <h3 className="font-playfair text-lg sm:text-xl text-foreground font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2 leading-relaxed">
          {product.description}
        </p>
        
        <div className="flex justify-between items-center">
          <span className="text-primary font-lato font-bold text-lg">
            {product.price}
          </span>
          <div className="w-12 h-1 bg-gradient-to-r from-accent to-primary rounded-full opacity-60"></div>
        </div>
      </div>
      
      {/* Indicator de Hover para Mobile */}
      <div className="md:hidden absolute top-4 right-4 bg-card/90 backdrop-blur-sm rounded-full p-2 opacity-80">
        <Eye size={16} className="text-primary" />
      </div>
    </div>
  );
};

export default ProductCard;
