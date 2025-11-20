import { GraduationCap, Award, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const faculty = [
  {
    name: "Dr. Rajesh Kumar",
    designation: "Head of Quantitative Aptitude",
    qualification: "PhD Mathematics, IIT Delhi",
    experience: "15+ Years",
    specialty: "CAT, GMAT, GRE",
    image: "https://i.pravatar.cc/200?img=12",
  },
  {
    name: "Prof. Anita Sharma",
    designation: "Senior Faculty - Verbal Ability",
    qualification: "MA English Literature, DU",
    experience: "12+ Years",
    specialty: "CAT, CLAT, CUET",
    image: "https://i.pravatar.cc/200?img=47",
  },
  {
    name: "Dr. Vikram Singh",
    designation: "CLAT Expert",
    qualification: "LLM, National Law School",
    experience: "10+ Years",
    specialty: "CLAT, AILET",
    image: "https://i.pravatar.cc/200?img=33",
  },
  {
    name: "Ms. Priya Kapoor",
    designation: "Logical Reasoning Specialist",
    qualification: "MBA, IIM Bangalore",
    experience: "8+ Years",
    specialty: "CAT, IPMAT, BBA",
    image: "https://i.pravatar.cc/200?img=45",
  },
  {
    name: "Dr. Amit Patel",
    designation: "Data Interpretation Expert",
    qualification: "PhD Statistics, ISI Kolkata",
    experience: "14+ Years",
    specialty: "CAT, XAT, SNAP",
    image: "https://i.pravatar.cc/200?img=68",
  },
  {
    name: "Prof. Neha Gupta",
    designation: "CUET Subject Specialist",
    qualification: "M.Phil Psychology, JNU",
    experience: "9+ Years",
    specialty: "CUET, IPM",
    image: "https://i.pravatar.cc/200?img=28",
  },
];

const Faculty = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
              <GraduationCap className="w-5 h-5" />
              <span className="font-semibold">Our Faculty</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Learn from the Best Minds
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert faculty members with proven track records in guiding students to top institutes
          </p>
        </div>

        {/* Faculty Slider */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3500,
            }),
          ]}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {faculty.map((member, index) => (
              <CarouselItem key={member.name} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card
                  className="bg-card border-border hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="p-6">
                    {/* Faculty Photo */}
                    <div className="relative mb-4">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-32 h-32 rounded-full mx-auto border-4 border-primary/20 object-cover"
                      />
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                        <Award className="w-3 h-3" />
                        {member.experience}
                      </div>
                    </div>

                    {/* Faculty Info */}
                    <div className="text-center mb-4">
                      <h3 className="font-bold text-lg text-card-foreground mb-1">{member.name}</h3>
                      <p className="text-sm text-primary font-semibold mb-2">{member.designation}</p>
                      <p className="text-xs text-muted-foreground mb-2">{member.qualification}</p>
                      <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
                        <BookOpen className="w-3 h-3" />
                        <span>{member.specialty}</span>
                      </div>
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

export default Faculty;
