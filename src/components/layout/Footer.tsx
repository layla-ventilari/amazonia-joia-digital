
import { Instagram, Facebook, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-green-forest text-cream py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-playfair text-xl mb-4">Puranga Biojoias</h3>
            <p className="mb-4 text-cream/80">
              Arte que nasce das mãos e do coração, transformando elementos naturais da Amazônia em joias que conectam pessoas à essência da floresta.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://instagram.com" className="text-cream hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" className="text-cream hover:text-gold transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="mailto:contato@puranga.com" className="text-cream hover:text-gold transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-playfair text-xl mb-4">Navegue</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-cream/80 hover:text-gold transition-colors">Início</a></li>
              <li><a href="#about" className="text-cream/80 hover:text-gold transition-colors">Sobre a Artesã</a></li>
              <li><a href="#collections" className="text-cream/80 hover:text-gold transition-colors">Coleções</a></li>
              <li><a href="#shop" className="text-cream/80 hover:text-gold transition-colors">Espaço das Criações</a></li>
              <li><a href="#contact" className="text-cream/80 hover:text-gold transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-playfair text-xl mb-4">Fale Conosco</h3>
            <div className="flex items-center mb-3">
              <Phone size={18} className="mr-2" />
              <span>+55 (92) 98765-4321</span>
            </div>
            <div className="flex items-center mb-3">
              <Mail size={18} className="mr-2" />
              <span>contato@puranga.com</span>
            </div>
            <p className="mt-4 text-cream/80">
              Manaus, Amazonas - Brasil
            </p>
          </div>
        </div>
        
        <div className="border-t border-cream/20 mt-8 pt-8 text-center text-cream/60">
          <p>&copy; {new Date().getFullYear()} Puranga Biojoias da Amazônia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
