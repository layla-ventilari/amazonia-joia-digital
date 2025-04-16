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
  return <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-cream bg-opacity-95 shadow-md py-3' : 'py-5'}`}>
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="flex items-center">
          <img alt="Puranga Biojoias Logo" className="h-12" src="/lovable-uploads/cc264314-9caf-4e55-b788-5133ad739b3b.png" />
          <div className="ml-3">
            <h1 className="font-playfair font-medium text-green-forest text-xl">Puranga Biojoias</h1>
            <p className="text-xs text-earth">Arte viva da floresta amazônica</p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-green-forest">
          <a href="#home" className="hover:text-gold transition-colors">Portal</a>
          <a href="#about" className="hover:text-gold transition-colors">A Criadora</a>
          <a href="#collections" className="hover:text-gold transition-colors">Histórias</a>
          <a href="#shop" className="hover:text-gold transition-colors">Criações</a>
          <a href="#contact" className="hover:text-gold transition-colors">Conexão</a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-green-forest" onClick={toggleMenu} aria-label="Abrir menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && <div className="md:hidden fixed top-[4rem] left-0 right-0 bg-cream bg-opacity-98 border-b border-gold">
          <div className="flex flex-col space-y-4 p-4">
            <a href="#home" className="text-green-forest hover:text-gold transition-colors py-2 px-4" onClick={() => setIsMenuOpen(false)}>
              Portal
            </a>
            <a href="#about" className="text-green-forest hover:text-gold transition-colors py-2 px-4" onClick={() => setIsMenuOpen(false)}>
              A Criadora
            </a>
            <a href="#collections" className="text-green-forest hover:text-gold transition-colors py-2 px-4" onClick={() => setIsMenuOpen(false)}>
              Histórias
            </a>
            <a href="#shop" className="text-green-forest hover:text-gold transition-colors py-2 px-4" onClick={() => setIsMenuOpen(false)}>
              Criações
            </a>
            <a href="#contact" className="text-green-forest hover:text-gold transition-colors py-2 px-4" onClick={() => setIsMenuOpen(false)}>
              Conexão
            </a>
          </div>
        </div>}
    </nav>;
};
export default Navbar;