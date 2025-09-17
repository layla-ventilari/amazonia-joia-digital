import { useState, useEffect } from 'react';

const CampaignGallery = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Galeria urbana da campanha
  const galleryImages = [
    {
      src: '/lovable-uploads/d7358554-d12f-4307-bbd9-8c0ef71f616c.jpg',
      alt: 'Modelo urbana usando biojoias Ybirá',
      caption: 'Força ancestral na modernidade'
    },
    {
      src: '/lovable-uploads/2c9eda4d-567f-4212-8d6d-1ff47641ee0c.png',
      alt: 'Detalhes das peças da coleção Ybirá',
      caption: 'Artesania que conecta'
    },
    {
      src: '/lovable-uploads/8a28f948-4f94-41d9-aa52-5e9524d4a231.png',
      alt: 'Biojoias em harmonia com a natureza',
      caption: 'Equilíbrio natural'
    }
  ];

  // Auto-rotate gallery
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % galleryImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [galleryImages.length]);

  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Galeria Urbana</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A essência Ybirá nas ruas: onde ancestralidade e modernidade se encontram
          </p>
        </div>

        {/* Main Gallery Display */}
        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            
            {/* Side Images (Desktop) */}
            <div className="hidden lg:block space-y-4">
              {galleryImages.map((image, index) => (
                <div
                  key={`side-${index}`}
                  className={`relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer transition-all duration-500 ${
                    index === currentImage 
                      ? 'opacity-100 scale-105 shadow-xl' 
                      : 'opacity-60 hover:opacity-80'
                  }`}
                  onClick={() => setCurrentImage(index)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent"></div>
                </div>
              ))}
            </div>

            {/* Main Image */}
            <div className="lg:col-span-1 relative">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                {galleryImages.map((image, index) => (
                  <div
                    key={`main-${index}`}
                    className={`absolute inset-0 transition-all duration-1000 ${
                      index === currentImage 
                        ? 'opacity-100 scale-100' 
                        : 'opacity-0 scale-105'
                    }`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                      loading={index === 0 ? 'eager' : 'lazy'}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent"></div>
                    
                    {/* Caption Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-card font-lato text-sm font-medium opacity-90">
                        {image.caption}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Progress Indicator */}
                <div className="absolute top-4 right-4 flex space-x-1">
                  {galleryImages.map((_, index) => (
                    <div
                      key={`indicator-${index}`}
                      className={`h-1 transition-all duration-500 rounded-full ${
                        index === currentImage 
                          ? 'bg-card w-8 shadow-lg' 
                          : 'bg-card/40 w-1'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-playfair text-2xl lg:text-3xl font-semibold text-foreground">
                  Narrativa Visual
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  Cada imagem conta uma história de conexão. Das ruas da cidade às raízes 
                  amazônicas, nossa campanha Ybirá celebra a força feminina que carrega 
                  em si a sabedoria ancestral.
                </p>

                <div className="pt-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm text-foreground font-medium">
                      Autenticidade urbana
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-foreground font-medium">
                      Conexão ancestral
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-sm text-foreground font-medium">
                      Sustentabilidade consciente
                    </span>
                  </div>
                </div>
              </div>

              {/* Mobile Gallery Navigation */}
              <div className="lg:hidden flex justify-center space-x-2">
                {galleryImages.map((_, index) => (
                  <button
                    key={`mobile-nav-${index}`}
                    onClick={() => setCurrentImage(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentImage
                        ? 'bg-primary w-8'
                        : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampaignGallery;