
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-20 flex items-center hero-section">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-green-forest mb-6 animate-fade-in">
            Biojoias que narram os segredos da Amazônia
          </h1>
          
          <p className="text-xl md:text-2xl text-earth/80 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Cada peça da floresta carrega uma história ancestral. Permita que uma delas te encontre e desperte sua conexão com a natureza.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <a href="#collections" className="btn-primary flex items-center justify-center">
              Descubra nossas joias únicas
              <ArrowRight size={18} className="ml-2" />
            </a>
            <a href="#about" className="btn-secondary">Conheça a artesã</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
