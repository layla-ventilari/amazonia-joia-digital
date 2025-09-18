import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen pt-16 sm:pt-20 flex items-center bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('/assets/hero-bg-green.png')" }}
    >
      <div className="container mx-auto px-4 sm:px-6 relative z-10 flex items-center min-h-[70vh]">
        {/* Esquerda: textos e botões */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start text-left py-16 sm:py-24 md:py-32 px-2 sm:px-4 md:pl-16">
          <div className="max-w-xl w-full">
            <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-green-forest mb-4 sm:mb-6 animate-fade-in leading-tight">
              Puranga Biojoias
            </h1>
            <p
              className="text-lg sm:text-xl md:text-2xl text-earth/80 mb-6 sm:mb-8 animate-fade-in leading-relaxed"
              style={{ animationDelay: "0.2s" }}
            >
              Biojoias sustentáveis que conectam você com a natureza. Peças únicas
              feitas com amor e tradição amazônica.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in w-full"
              style={{ animationDelay: "0.4s" }}
            >
              <a href="#collections" className="btn-primary flex items-center justify-center w-full sm:w-auto">
                Ver Coleção
                <ArrowRight size={18} className="ml-2" />
              </a>
              <a href="#about" className="btn-secondary w-full sm:w-auto text-center">
                Sobre a artista
              </a>
            </div>
          </div>
        </div>
        {/* Direita: espaço vazio para split visual */}
        <div className="hidden md:block md:w-1/2"></div>
      </div>
    </section>
  );
};

export default Hero;
