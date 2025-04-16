
import { useState } from 'react';
import { ExternalLink } from 'lucide-react';

export interface ProductProps {
  id: string;
  name: string;
  description: string;
  price: string;
  imageSrc: string;
  category: string;
}

const ProductCard = ({ product }: { product: ProductProps }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const handleWhatsApp = () => {
    const message = `Olá! Fiquei encantado(a) com a peça "${product.name}" (${product.price}). Gostaria de saber mais sobre a história e processo de criação dela.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5592987654321?text=${encodedMessage}`, '_blank');
  };
  
  return (
    <div 
      className="group bg-white rounded-lg overflow-hidden shadow-md card-hover"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <img 
          src={product.imageSrc} 
          alt={product.name}
          className={`w-full h-64 object-cover transition-transform duration-500 ${isHovered ? 'scale-105' : 'scale-100'}`}
        />
        <div className={`absolute inset-0 bg-green-forest/30 flex items-center justify-center opacity-0 transition-opacity duration-300 ${isHovered ? 'opacity-100' : ''}`}>
          <button 
            onClick={handleWhatsApp}
            className="bg-cream text-green-forest px-4 py-2 rounded-md flex items-center transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
          >
            Converse com a artesã
            <ExternalLink size={16} className="ml-2" />
          </button>
        </div>
      </div>
      
      <div className="p-4">
        <span className="text-xs text-gold font-medium uppercase tracking-wider">{product.category}</span>
        <h3 className="font-playfair text-xl text-green-forest mt-1">{product.name}</h3>
        <p className="text-earth/70 text-sm mt-2">{product.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-green-forest font-medium">{product.price}</span>
          <div className="h-1 w-16 bg-gold/30 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
