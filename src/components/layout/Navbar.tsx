
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-cream bg-opacity-95 shadow-md py-3' : 'py-5'}`}>
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/90b37dc2-89d6-40ca-9443-107cbc388edc.png"
            alt="Puranga Biojoias Logo" 
            className="h-12" 
          />
          <div className="ml-3">
            <h1 className="font-playfair font-medium text-green-forest text-xl">Puranga Biojoias</h1>
            <p className="text-xs text-earth">Amazônia em cada detalhe</p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-green-forest">
          <a href="#home" className="hover:text-gold transition-colors">Home</a>
          <a href="#about" className="hover:text-gold transition-colors">Sobre</a>
          <a href="#collections" className="hover:text-gold transition-colors">Coleções</a>
          <a href="#shop" className="hover:text-gold transition-colors">Loja</a>
          <a href="#contact" className="hover:text-gold transition-colors">Contato</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-green-forest"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-[4rem] left-0 right-0 bg-cream bg-opacity-98 border-b border-gold">
          <div className="flex flex-col space-y-4 p-4">
            <a 
              href="#home" 
              className="text-green-forest hover:text-gold transition-colors py-2 px-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#about" 
              className="text-green-forest hover:text-gold transition-colors py-2 px-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </a>
            <a 
              href="#collections" 
              className="text-green-forest hover:text-gold transition-colors py-2 px-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Coleções
            </a>
            <a 
              href="#shop" 
              className="text-green-forest hover:text-gold transition-colors py-2 px-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Loja
            </a>
            <a 
              href="#contact" 
              className="text-green-forest hover:text-gold transition-colors py-2 px-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
