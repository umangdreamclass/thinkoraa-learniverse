import { Trophy } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import hemangImg from "@/assets/toppers/hemang-mohite.jpg";
import manavImg from "@/assets/toppers/manav-bhatia.jpg";
import sahilImg from "@/assets/toppers/sahil-rajput.jpg";
import nikitaImg from "@/assets/toppers/nikita-rai.jpg";
import ishaImg from "@/assets/toppers/isha-solanki.jpg";
import kritikImg from "@/assets/toppers/kritik-lalwani.jpg";
import bhavyaImg from "@/assets/toppers/bhavya-naik.jpg";
import nisargImg from "@/assets/toppers/nisarg-amin.jpg";

const toppers = [
  { name: "Hemang Mohite", percentile: "99.64", image: hemangImg },
  { name: "Sahil Rajput", percentile: "99.64", image: sahilImg },
  { name: "Nikita Rai", percentile: "99.37", image: nikitaImg },
  { name: "Nisarg Amin", percentile: "99.09", image: nisargImg },
  { name: "Manav Bhatia", percentile: "99.04", image: manavImg },
  { name: "Isha Solanki", percentile: "98.73", image: ishaImg },
  { name: "Bhavya Naik", percentile: "98.45", image: bhavyaImg },
  { name: "Kritik Lalwani", percentile: "98.00", image: kritikImg },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full mb-4">
            <Trophy className="w-4 h-4" />
            <span className="font-semibold text-sm">OUR TOPPERS 2024-25</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Success Stories
          </h2>
        </div>

        {/* Toppers Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2500,
            }),
          ]}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-3">
            {toppers.map((topper, index) => (
              <CarouselItem key={topper.name} className="pl-3 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                <div
                  className="group text-center animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {/* Image Container */}
                  <div className="relative mb-3">
                    <div className="w-24 h-24 md:w-28 md:h-28 mx-auto rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary transition-colors duration-300 shadow-lg">
                      <img
                        src={topper.image}
                        alt={topper.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    {/* Percentile Badge */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold shadow-md">
                      {topper.percentile}%ile
                    </div>
                  </div>
                  
                  {/* Name */}
                  <h3 className="font-semibold text-sm md:text-base text-card-foreground mt-4">
                    {topper.name}
                  </h3>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-10 border-primary bg-background hover:bg-primary hover:text-primary-foreground" />
          <CarouselNext className="hidden md:flex -right-10 border-primary bg-background hover:bg-primary hover:text-primary-foreground" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
