import Hero from "@/components/Hero";
import BannerSlider from "@/components/BannerSlider";
import Categories from "@/components/Categories";
import ActionCards from "@/components/ActionCards";
import Testimonials from "@/components/Testimonials";
import Partnership from "@/components/Partnership";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <BannerSlider />
      <Categories />
      <ActionCards />
      <Testimonials />
      <Partnership />
      <Footer />
    </div>
  );
};

export default Index;
