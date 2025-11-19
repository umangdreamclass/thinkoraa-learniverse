import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary-hover to-primary py-20 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block mb-6 animate-fade-in">
              <img src={logo} alt="Thinkoraa" className="h-16 md:h-20 mx-auto lg:mx-0" />
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in">
              Think Big, <br />
              <span className="text-accent-foreground">Achieve Bigger</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto lg:mx-0 animate-fade-in">
              Prepare for MBA, Law, CUET, IPM, BBA and more with structured courses by experts. 
              Join thousands of successful students.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in">
              <Button size="lg" variant="secondary" className="text-lg px-8 hover:scale-105 transition-transform">
                Explore Programs <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                Find a Center
              </Button>
            </div>
          </div>
          
          {/* Right Illustration */}
          <div className="flex-1 relative animate-fade-in">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/20 backdrop-blur rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-white mb-2">20+</div>
                  <div className="text-white/80 text-sm">Years Excellence</div>
                </div>
                <div className="bg-white/20 backdrop-blur rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-white mb-2">50K+</div>
                  <div className="text-white/80 text-sm">Students Trained</div>
                </div>
                <div className="bg-white/20 backdrop-blur rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-white mb-2">95%</div>
                  <div className="text-white/80 text-sm">Success Rate</div>
                </div>
                <div className="bg-white/20 backdrop-blur rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-white mb-2">100+</div>
                  <div className="text-white/80 text-sm">Expert Faculty</div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
