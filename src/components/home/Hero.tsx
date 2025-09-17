import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-20 flex items-center hero-section relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          {/* Simplified Brand Identity */}
          <div className="space-y-6">
            <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl text-primary mb-4 animate-fade-in leading-tight">
              Puranga Biojoias
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in max-w-2xl mx-auto leading-relaxed" style={{
              animationDelay: '0.2s'
            }}>
              Biojoias sustentáveis que conectam você com a natureza. 
              <span className="block mt-2 text-accent font-medium">
                Peças únicas feitas com amor e tradição amazônica.
              </span>
            </p>
          </div>

          {/* Minimal CTA */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 animate-fade-in" style={{
            animationDelay: '0.4s'
          }}>
            <a 
              href="#campaign" 
              className="btn-primary inline-flex items-center justify-center gap-2 text-sm px-8 py-3 hover:scale-105 transition-transform"
            >
              Descobrir Ybirá
              <ArrowRight size={16} />
            </a>
            <a 
              href="#collections" 
              className="btn-secondary text-sm px-8 py-3 hover:scale-105 transition-transform"
            >
              Ver Coleção
            </a>
          </div>

          {/* Subtle Brand Values */}
          <div className="flex justify-center items-center gap-8 text-xs text-muted-foreground/60 animate-fade-in pt-8" style={{
            animationDelay: '0.6s'
          }}>
            <span className="flex items-center gap-2">
              <div className="w-1 h-1 bg-accent rounded-full"></div>
              Sustentável
            </span>
            <span className="flex items-center gap-2">
              <div className="w-1 h-1 bg-primary rounded-full"></div>
              Artesanal
            </span>
            <span className="flex items-center gap-2">
              <div className="w-1 h-1 bg-secondary rounded-full"></div>
              Amazônico
            </span>
          </div>
        </div>
      </div>

      {/* Subtle Background Elements */}
      <div className="absolute top-1/4 right-10 w-24 h-24 bg-accent/5 rounded-full blur-2xl animate-float"></div>
      <div className="absolute bottom-1/3 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse-light"></div>
    </section>
  );
};
export default Hero;