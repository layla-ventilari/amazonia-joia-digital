
import { useState } from 'react';
import { Send, Mail, MapPin, Phone, MessageSquare } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    console.log('Form submitted:', formData);
    
    // Show success toast
    toast({
      title: "Sua mensagem foi enviada com sucesso!",
      description: "Agradecemos seu contato. Em breve, a própria artista responderá com o mesmo cuidado que dedica às suas criações.",
      variant: "default",
    });
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/5592987654321', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Teça uma Conexão Conosco</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-earth/80">
            Deseja uma peça personalizada ou tem interesse em conhecer mais sobre nosso processo criativo? 
            Ficaremos felizes em construir uma ponte entre você e a floresta.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="font-playfair text-2xl text-green-forest mb-6">Compartilhe seus sonhos conosco</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-earth mb-2">Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gold/30 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50"
                  placeholder="Como a floresta deve te chamar"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-earth mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gold/30 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50"
                  placeholder="Onde enviaremos nossa resposta"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-earth mb-2">Sua mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gold/30 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50"
                  placeholder="Conte-nos que história você deseja carregar consigo..."
                />
              </div>
              
              <button 
                type="submit" 
                className="btn-primary w-full flex items-center justify-center"
              >
                Enviar mensagem à criadora
                <Send size={16} className="ml-2" />
              </button>
            </form>
          </div>
          
          <div>
            <h3 className="font-playfair text-2xl text-green-forest mb-6">Encontre-nos na jornada</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-green-forest/10 p-3 rounded-full mr-4">
                  <MapPin className="text-green-forest" />
                </div>
                <div>
                  <h4 className="font-medium text-earth">Nosso ateliê criativo</h4>
                  <p className="text-earth/70">Manaus, Amazonas - Brasil</p>
                  <p className="text-earth/70">Enviamos nossas criações vivas para qualquer lugar do mundo.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-forest/10 p-3 rounded-full mr-4">
                  <Mail className="text-green-forest" />
                </div>
                <div>
                  <h4 className="font-medium text-earth">Email</h4>
                  <p className="text-earth/70">purangabiojoias@gmail.com</p>
                  <p className="text-earth/70">Cada mensagem é lida com o mesmo cuidado que dedicamos às nossas criações.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-forest/10 p-3 rounded-full mr-4">
                  <Phone className="text-green-forest" />
                </div>
                <div>
                  <h4 className="font-medium text-earth">Telefone</h4>
                  <p className="text-earth/70">+55 (92) 98765-4321</p>
                </div>
              </div>
              
              <div className="mt-8">
                <button 
                  onClick={handleWhatsApp}
                  className="btn-secondary w-full flex items-center justify-center animate-pulse-light"
                >
                  <MessageSquare size={18} className="mr-2" />
                  Fale diretamente com a artista
                </button>
                <p className="text-sm text-earth/60 mt-2 text-center">
                  Atendimento de segunda a sexta, das 9h às 18h (horário de Manaus)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
