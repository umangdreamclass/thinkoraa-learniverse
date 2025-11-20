import { Star, Trophy, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
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
    <section className="py-16 bg-accent">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
              <Trophy className="w-5 h-5" />
              <span className="font-semibold">Success Stories</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Students Excel Everywhere
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((student, index) => (
              <CarouselItem key={student.name} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card
                  className="bg-card border-border hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Rank Badge */}
                  <div className="bg-gradient-to-r from-primary to-primary-hover text-white px-4 py-2 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <Trophy className="w-4 h-4" />
                      <span className="font-bold">{student.rank}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    {/* Student Photo */}
                    <div className="relative mb-4">
                      <img
                        src={student.image}
                        alt={student.name}
                        className="w-20 h-20 rounded-full mx-auto border-4 border-primary/20"
                      />
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-success text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        {student.percentile}%ile
                      </div>
                    </div>

                    {/* Student Info */}
                    <div className="text-center mb-4">
                      <h3 className="font-bold text-lg text-card-foreground mb-1">{student.name}</h3>
                      <p className="text-sm text-primary font-semibold mb-1">{student.exam}</p>
                      <p className="text-xs text-muted-foreground">{student.college}</p>
                    </div>

                    {/* Quote */}
                    <div className="mb-4">
                      <p className="text-sm text-muted-foreground text-center italic line-clamp-3">
                        "{student.quote}"
                      </p>
                    </div>

                    {/* Rating */}
                    <div className="flex justify-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        
      </div>
    </section>
  );
};

export default Testimonials;
