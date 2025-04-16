const About = () => {
  return <section id="about" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">A Alma por trás das Criações</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="font-playfair text-2xl md:text-3xl text-green-forest mb-4">
              Hadassa - Nômade, Artista, Guardiã do Batik Ancestral
            </h3>
            
            <p className="mb-4 text-lg">
              Nascida entre as águas e folhas da Amazônia, artista plástica, designer de moda e nômade digital, ela transforma caminhos em criações.
            </p>
            
            <p className="mb-4 text-lg">
              Especialista em <span className="highlight-text">batik com tingimento natural</span>, suas peças misturam ancestralidade indígena, tecnologia e sustentabilidade com um toque de arte que já brilhou em galerias culturais e hotéis renomados.
            </p>
            
            <p className="mb-8 text-lg">
              Hoje, de volta a Manaus, ela segue criando para o mundo. Sua missão é simples e profunda: traduzir a alma da floresta em peças que toquem outras almas.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-6">
              <div className="bg-muted px-4 py-2 rounded-full text-earth">
                Tingimento Natural
              </div>
              <div className="bg-muted px-4 py-2 rounded-full text-earth">
                Saberes Ancestrais
              </div>
              <div className="bg-muted px-4 py-2 rounded-full text-earth">
                Materiais da Floresta
              </div>
              <div className="bg-muted px-4 py-2 rounded-full text-earth">
                Arte com Propósito
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="bg-green-forest/10 rounded-full w-[300px] h-[300px] md:w-[400px] md:h-[400px] absolute top-4 left-4 -z-10"></div>
              <img alt="Hadassa - Artesã de Biojoias" className="rounded-full w-[300px] h-[300px] md:w-[400px] md:h-[400px] object-cover object-center shadow-lg" src="/lovable-uploads/0501c30a-43e1-4881-b7b6-47f53da5e8c6.jpg" />
              <div className="absolute -bottom-4 -right-4 bg-gold/20 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                <p className="italic text-green-forest font-playfair">
                  "Puranga significa beleza em Nheengatu. A beleza que nasce do tempo, do toque, da verdade."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;