import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ArrowLeft, ShoppingBag, Heart, Share2, Minus, Plus, Star } from 'lucide-react';
import { productService } from '@/data/productService';
import { ProductProps } from '@/types/product';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<ProductProps | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (id) {
      const foundProduct = productService.getProductById(id);
      if (foundProduct) {
        setProduct(foundProduct);
      } else {
        navigate('/404');
      }
    }
  }, [id, navigate]);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse">
          <div className="h-8 w-32 bg-muted rounded mb-4"></div>
          <div className="h-4 w-48 bg-muted rounded"></div>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    // TODO: Implementar funcionalidade do carrinho
    console.log(`Adicionado ao carrinho: ${product.name} (${quantity}x)`);
  };

  const handleWhatsApp = () => {
    const message = `Olá! Gostaria de saber mais sobre "${product.name}" (${product.price}). Tenho interesse em adquirir ${quantity} unidade(s).`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5592987654321?text=${encodedMessage}`, '_blank');
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.name,
          text: product.description,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Erro ao compartilhar:', error);
      }
    } else {
      // Fallback: copiar URL para clipboard
      navigator.clipboard.writeText(window.location.href);
    }
  };

  // Para demonstração, usando a mesma imagem múltiplas vezes
  const productImages = [product.imageSrc, product.imageSrc, product.imageSrc];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        {/* Botão Voltar */}
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Voltar
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Galeria de Imagens */}
          <div className="space-y-4">
            {/* Imagem Principal */}
            <div className="aspect-square bg-muted rounded-2xl overflow-hidden">
              <img 
                src={productImages[selectedImageIndex]} 
                alt={product.name}
                className="w-full h-full object-contain hover:object-cover transition-all duration-500 cursor-zoom-in"
              />
            </div>
            
            {/* Miniaturas */}
            <div className="flex gap-3 overflow-x-auto pb-2">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImageIndex === index 
                      ? 'border-primary shadow-lg' 
                      : 'border-transparent hover:border-muted-foreground/30'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} - ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Informações do Produto */}
          <div className="space-y-6">
            {/* Cabeçalho */}
            <div>
              <Badge variant="outline" className="mb-3">
                {product.category}
              </Badge>
              
              <h1 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl font-bold text-primary">
                  {product.price}
                </span>
                
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">(Peça única)</span>
                </div>
              </div>
            </div>

            {/* Descrição */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-playfair text-lg font-semibold mb-3">
                  Sobre esta peça
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {product.description}
                </p>
                
                {/* Informações Técnicas */}
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Material:</span>
                    <span className="font-medium">Materiais naturais selecionados</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Categoria:</span>
                    <span className="font-medium">{product.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Disponibilidade:</span>
                    <span className="font-medium text-green-600">Em estoque</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Controles */}
            <div className="space-y-4">
              {/* Quantidade */}
              <div className="flex items-center gap-4">
                <span className="font-medium">Quantidade:</span>
                <div className="flex items-center border rounded-lg">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-muted transition-colors"
                    disabled={quantity <= 1}
                  >
                    <Minus size={16} />
                  </button>
                  <span className="px-4 py-2 min-w-[3rem] text-center">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-muted transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              {/* Botões de Ação */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  onClick={handleAddToCart}
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-xl font-medium"
                  size="lg"
                >
                  <ShoppingBag size={20} className="mr-2" />
                  Adicionar ao Carrinho
                </Button>
                
                <Button 
                  onClick={handleWhatsApp}
                  variant="outline"
                  className="flex-1 py-3 rounded-xl font-medium border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  size="lg"
                >
                  Conversar via WhatsApp
                </Button>
              </div>

              {/* Ações Secundárias */}
              <div className="flex justify-center gap-4 pt-4">
                <button 
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={`p-2 rounded-full transition-colors ${
                    isFavorite 
                      ? 'text-red-500 bg-red-50 hover:bg-red-100' 
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  <Heart size={20} fill={isFavorite ? 'currentColor' : 'none'} />
                </button>
                
                <button 
                  onClick={handleShare}
                  className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                >
                  <Share2 size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Produtos Relacionados */}
        <section className="mt-16">
          <h2 className="section-title text-center mb-12">Outras Peças da Coleção</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productService.getProductsByCategory(product.category)
              .filter(p => p.id !== product.id)
              .slice(0, 4)
              .map((relatedProduct) => (
                <Card 
                  key={relatedProduct.id}
                  className="cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => navigate(`/produto/${relatedProduct.id}`)}
                >
                  <div className="aspect-square bg-muted rounded-t-lg overflow-hidden">
                    <img 
                      src={relatedProduct.imageSrc} 
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-medium text-sm mb-1 line-clamp-1">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-primary font-semibold">
                      {relatedProduct.price}
                    </p>
                  </CardContent>
                </Card>
              ))}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductPage;