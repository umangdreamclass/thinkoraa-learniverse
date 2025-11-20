import Header from "@/components/Header";
import BannerSlider from "@/components/BannerSlider";
import Categories from "@/components/Categories";
import ActionCards from "@/components/ActionCards";
import Testimonials from "@/components/Testimonials";
import Faculty from "@/components/Faculty";
import Partnership from "@/components/Partnership";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <BannerSlider />
      <Categories />
      <ActionCards />
      <Testimonials />
      <Faculty />
      <Partnership />
      <Footer />
    </div>
  );
};

export default Index;
