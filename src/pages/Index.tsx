
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Collections from "@/components/home/Collections";
import Shop from "@/components/home/Shop";
import Contact from "@/components/home/Contact";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <Hero />
      <Collections />
      <About />
      <Shop />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
