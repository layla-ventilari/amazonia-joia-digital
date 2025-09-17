
import Hero from "@/components/home/Hero";
import CampaignBanner from "@/components/home/CampaignBanner";
import Collections from "@/components/home/Collections";
import Shop from "@/components/home/Shop";
import CampaignGallery from "@/components/home/CampaignGallery";
import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <CampaignBanner />
      <Collections />
      <Shop />
      <CampaignGallery />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
