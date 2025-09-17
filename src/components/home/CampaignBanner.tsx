import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CampaignBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Imagens da campanha Ybirá
  const campaignImages = [
    '/lovable-uploads/2c9eda4d-567f-4212-8d6d-1ff47641ee0c.png',
    '/lovable-uploads/8a28f948-4f94-41d9-aa52-5e9524d4a231.png',
    '/lovable-uploads/90b37dc2-89d6-40ca-9443-107cbc388edc.png',
    '/lovable-uploads/cc264314-9caf-4e55-b788-5133ad739b3b.png'
  ];

  const campaignContent = {
    title: "Ybirá",
    subtitle: "Árvore • Força • Ancestralidade",
    description: "Uma jornada através das raízes amazônicas, onde cada biojoia carrega a sabedoria ancestral e a força da natureza. Vestir-se de natureza como ritual de identidade e pertencimento.",
    dimensions: [
      { name: "Raízes", description: "Conexão com as origens" },
      { name: "Crescimento", description: "Evolução sustentável" },
      { name: "Equilíbrio", description: "Harmonia com a natureza" },
      { name: "Ancestralidade", description: "Sabedoria tradicional" },
      { name: "Conexão", description: "União com o todo" }
    ]
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % campaignImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, campaignImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % campaignImages.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + campaignImages.length) % campaignImages.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background to-muted">
      {/* Main Campaign Content */}
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Campaign Text */}
          <div className="order-2 lg:order-1 space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="text-sm font-lato font-medium tracking-wider text-accent uppercase px-3 py-1 bg-accent/10 rounded-full">
                  Campanha 2024
                </span>
              </div>
              
              <h1 className="font-playfair text-5xl lg:text-7xl font-bold text-primary leading-tight">
                {campaignContent.title}
              </h1>
              
              <p className="text-lg text-accent font-lato font-medium tracking-wide">
                {campaignContent.subtitle}
              </p>
              
              <p className="text-base text-muted-foreground leading-relaxed max-w-lg">
                {campaignContent.description}
              </p>
            </div>

            {/* Campaign Dimensions */}
            <div className="space-y-3">
              <h3 className="font-playfair text-xl text-foreground font-semibold">
                Cinco Dimensões
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {campaignContent.dimensions.map((dimension, index) => (
                  <div key={index} className="group">
                    <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-125 transition-transform"></div>
                      <div>
                        <span className="font-lato font-semibold text-foreground text-sm">
                          {dimension.name}
                        </span>
                        <p className="text-xs text-muted-foreground">
                          {dimension.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <a href="#collections" className="btn-primary inline-flex items-center gap-2 text-sm">
                Explorar Coleção Ybirá
              </a>
            </div>
          </div>

          {/* Campaign Image Carousel */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-muted shadow-2xl">
              {/* Images */}
              {campaignImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={image}
                    alt={`Campanha Ybirá ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                </div>
              ))}

              {/* Navigation Overlay */}
              <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={prevSlide}
                  className="p-2 rounded-full bg-card/80 backdrop-blur-sm hover:bg-card transition-colors shadow-lg"
                  aria-label="Imagem anterior"
                >
                  <ChevronLeft size={20} className="text-foreground" />
                </button>
                
                <button
                  onClick={nextSlide}
                  className="p-2 rounded-full bg-card/80 backdrop-blur-sm hover:bg-card transition-colors shadow-lg"
                  aria-label="Próxima imagem"
                >
                  <ChevronRight size={20} className="text-foreground" />
                </button>
              </div>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {campaignImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? 'bg-card w-6 shadow-lg'
                        : 'bg-card/50 hover:bg-card/75'
                    }`}
                    aria-label={`Ir para imagem ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default CampaignBanner;