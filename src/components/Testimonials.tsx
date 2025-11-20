import { Star, Trophy, TrendingUp, MessageCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    name: "Priya Sharma",
    exam: "CAT 2024",
    percentile: "99.8",
    rank: "AIR 12",
    college: "IIM Ahmedabad",
    image: "https://i.pravatar.cc/150?img=1",
    quote: "Thinkoraa's structured approach and expert guidance helped me achieve my dream of getting into IIM-A.",
  },
  {
    name: "Rahul Verma",
    exam: "CLAT 2024",
    percentile: "99.5",
    rank: "AIR 8",
    college: "NLSIU Bangalore",
    image: "https://i.pravatar.cc/150?img=3",
    quote: "The mock tests and personalized mentoring were game-changers in my CLAT preparation journey.",
  },
  {
    name: "Ananya Patel",
    exam: "CUET 2024",
    percentile: "99.2",
    rank: "AIR 45",
    college: "DU - St. Stephen's",
    image: "https://i.pravatar.cc/150?img=5",
    quote: "Best decision to join Thinkoraa! The faculty's dedication and study material quality is unmatched.",
  },
  {
    name: "Arjun Mehta",
    exam: "IPMAT 2024",
    percentile: "99.6",
    rank: "AIR 18",
    college: "IIM Indore",
    image: "https://i.pravatar.cc/150?img=7",
    quote: "From average scores to top percentile - Thinkoraa made it possible with their amazing teaching methodology.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-light via-accent to-background relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent-foreground rounded-full blur-3xl"></div>
      </div>
      
      <div className="container relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full shadow-lg">
              <Trophy className="w-5 h-5" />
              <span className="font-bold text-sm tracking-wide">SUCCESS STORIES</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
            Our Students Excel Everywhere
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Join thousands of successful students who achieved their dreams with Thinkoraa
          </p>
        </div>

        {/* Testimonials Slider */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className="w-full max-w-7xl mx-auto"
        >
          <CarouselContent className="-ml-4 md:-ml-6">
            {testimonials.map((student, index) => (
              <CarouselItem key={student.name} className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/3">
                <Card
                  className="group relative bg-card/80 backdrop-blur-sm border-2 border-border hover:border-primary transition-all duration-500 hover:shadow-2xl overflow-hidden h-full"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Rank Badge */}
                  <div className="relative bg-gradient-to-r from-primary to-primary-hover text-primary-foreground px-6 py-3 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <Trophy className="w-5 h-5" />
                      <span className="font-bold text-lg">{student.rank}</span>
                    </div>
                  </div>

                  <div className="relative p-8">
                    {/* Student Photo */}
                    <div className="relative mb-6">
                      <div className="relative w-28 h-28 mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent-foreground rounded-full blur-md opacity-50"></div>
                        <img
                          src={student.image}
                          alt={student.name}
                          className="relative w-full h-full rounded-full border-4 border-background object-cover shadow-xl"
                        />
                      </div>
                      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-success text-success-foreground px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-1.5 shadow-lg">
                        <TrendingUp className="w-4 h-4" />
                        {student.percentile}%ile
                      </div>
                    </div>

                    {/* Student Info */}
                    <div className="text-center mb-6 space-y-2">
                      <h3 className="font-bold text-xl text-card-foreground">{student.name}</h3>
                      <p className="text-sm text-primary font-bold tracking-wide">{student.exam}</p>
                      <p className="text-xs text-muted-foreground font-medium">{student.college}</p>
                    </div>

                    {/* Quote */}
                    <div className="mb-6">
                      <p className="text-sm text-muted-foreground text-center italic leading-relaxed line-clamp-3">
                        "{student.quote}"
                      </p>
                    </div>

                    {/* Rating */}
                    <div className="flex justify-center gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>

                    {/* Action Button */}
                    <Button 
                      asChild
                      size="sm"
                      className="w-full bg-primary text-primary-foreground hover:bg-primary-hover shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      <a href="https://wa.me/911234567890" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                        <MessageCircle className="w-4 h-4" />
                        <span className="font-semibold">Connect with Us</span>
                      </a>
                    </Button>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 border-2 border-primary bg-background hover:bg-primary hover:text-primary-foreground shadow-lg" />
          <CarouselNext className="hidden md:flex -right-12 border-2 border-primary bg-background hover:bg-primary hover:text-primary-foreground shadow-lg" />
        </Carousel>
        
      </div>
    </section>
  );
};

export default Testimonials;
