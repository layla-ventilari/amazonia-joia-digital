import { ProductProps } from "@/types/product";
import { useNavigate } from "react-router-dom";

const ProductCardMinimal = ({ product }: { product: ProductProps }) => {
  const navigate = useNavigate();

  return (
    <div 
      className="cursor-pointer group"
      onClick={() => navigate(`/produto/${product.id}`)}
    >
      {/* Imagem */}
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={product.imageSrc} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Nome + Preço */}
      <div className="mt-3 text-center">
        <h3 className="font-serif text-base font-medium text-foreground group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground mt-1">
          {product.price}
        </p>
      </div>
    </div>
  );
};

export default ProductCardMinimal;