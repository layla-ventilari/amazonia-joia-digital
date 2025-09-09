const About = () => {
  return <section id="about" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Sobre a Artista</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="font-playfair text-2xl md:text-3xl text-green-forest mb-4">Circe Ventilari</h3>
            
            <p className="mb-4 text-lg">
              Artista plástica e designer de biojoias nascida na Amazônia. Transforma tradições ancestrais em peças únicas.
            </p>
            
            <p className="mb-4 text-lg">
              Especialista em <span className="highlight-text">biojoias e tingimento natural</span>, combina sustentabilidade com arte contemporânea.
            </p>
            
            <p className="mb-8 text-lg"> Sua missão é traduzir a alma da floresta em joias que tocam outras almas.</p>
            
            <div className="flex flex-wrap gap-4 mt-6">
              <div className="bg-muted px-4 py-2 rounded-full text-earth">
                Tradição
              </div>
              <div className="bg-muted px-4 py-2 rounded-full text-earth">
                Sustentável
              </div>
              <div className="bg-muted px-4 py-2 rounded-full text-earth">
                Materiais Naturais
              </div>
              <div className="bg-muted px-4 py-2 rounded-full text-earth">
                Feito à Mão
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="bg-green-forest/10 rounded-full w-[300px] h-[300px] md:w-[400px] md:h-[400px] absolute top-4 left-4 -z-10"></div>
              <img alt="Circe Ventilari - Artista de Biojoias" className="rounded-full w-[300px] h-[300px] md:w-[400px] md:h-[400px] object-cover object-center shadow-lg" src="/public/profile.png" />
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
