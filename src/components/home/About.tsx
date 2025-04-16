
const About = () => {
  return (
    <section id="about" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">A Alma por trás das Criações</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="font-playfair text-2xl md:text-3xl text-green-forest mb-4">
              Hadassa - Tecelã de Histórias da Floresta
            </h3>
            
            <p className="mb-4 text-lg">
              Nascida e criada às margens do Rio Negro, minha jornada artística floresceu quando percebi que a Amazônia não era apenas meu lar, mas um santuário infinito de beleza e inspiração.
            </p>
            
            <p className="mb-4 text-lg">
              Cada <span className="highlight-text">Puranga Biojoia</span> é uma narrativa viva, onde entrelaço técnicas ancestrais indígenas com a essência contemporânea, utilizando apenas elementos naturais colhidos em harmonia com os ciclos da floresta.
            </p>
            
            <p className="mb-8 text-lg">
              Em minhas criações, sementes, fibras, madeiras e minerais despertam para uma nova existência, conectando quem as usa à energia vital da floresta amazônica.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-6">
              <div className="bg-muted px-4 py-2 rounded-full text-earth">
                Artesanato Consciente
              </div>
              <div className="bg-muted px-4 py-2 rounded-full text-earth">
                Saberes Ancestrais
              </div>
              <div className="bg-muted px-4 py-2 rounded-full text-earth">
                Materiais da Floresta
              </div>
              <div className="bg-muted px-4 py-2 rounded-full text-earth">
                Peças com Alma
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="bg-green-forest/10 rounded-full w-[300px] h-[300px] md:w-[400px] md:h-[400px] absolute top-4 left-4 -z-10"></div>
              <img 
                src="/lovable-uploads/1a692621-f525-42d3-ad3a-bb4a7f5d6a08.png" 
                alt="Hadassa - Artesã de Biojoias" 
                className="rounded-full w-[300px] h-[300px] md:w-[400px] md:h-[400px] object-cover object-center shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 bg-gold/20 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                <p className="italic text-green-forest font-playfair">
                  "Transformo a essência da natureza em arte que se conecta à alma."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
