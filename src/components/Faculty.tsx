import { GraduationCap, Award, BookOpen, Phone } from "lucide-react";
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
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Decorative Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      
      <div className="container relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-2 bg-gradient-to-r from-primary to-primary-hover text-primary-foreground px-6 py-3 rounded-full shadow-lg">
              <GraduationCap className="w-5 h-5" />
              <span className="font-bold text-sm tracking-wide">OUR FACULTY</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
            Learn from the Best Minds
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
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
          className="w-full max-w-7xl mx-auto"
        >
          <CarouselContent className="-ml-4 md:-ml-6">
            {faculty.map((member, index) => (
              <CarouselItem key={member.name} className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/3">
                <Card
                  className="group relative bg-card border-2 border-border hover:border-primary transition-all duration-500 hover:shadow-2xl overflow-hidden h-full"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-accent/0 to-primary/0 group-hover:from-primary/5 group-hover:via-accent/5 group-hover:to-primary/5 transition-all duration-500"></div>
                  
                  <div className="relative p-8">
                    {/* Faculty Photo with Decorative Ring */}
                    <div className="relative mb-6">
                      <div className="relative w-36 h-36 mx-auto">
                        {/* Animated Ring */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent-foreground to-primary animate-spin" style={{ animationDuration: '3s' }}></div>
                        <div className="absolute inset-1 rounded-full bg-card"></div>
                        <img
                          src={member.image}
                          alt={member.name}
                          className="absolute inset-2 w-32 h-32 rounded-full object-cover shadow-xl"
                        />
                      </div>
                      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-primary-hover text-primary-foreground px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-1.5 shadow-lg">
                        <Award className="w-4 h-4" />
                        {member.experience}
                      </div>
                    </div>

                    {/* Faculty Info */}
                    <div className="text-center mb-6 space-y-3">
                      <h3 className="font-bold text-xl text-card-foreground">{member.name}</h3>
                      <p className="text-sm text-primary font-bold tracking-wide">{member.designation}</p>
                      <p className="text-xs text-muted-foreground font-medium leading-relaxed">{member.qualification}</p>
                      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground bg-accent/50 rounded-full px-4 py-2 mx-auto w-fit">
                        <BookOpen className="w-4 h-4 text-primary" />
                        <span className="font-medium">{member.specialty}</span>
                      </div>
                    </div>

                    {/* Action Button */}
                    <Button 
                      asChild
                      size="sm"
                      className="w-full bg-gradient-to-r from-primary to-primary-hover text-primary-foreground hover:opacity-90 shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      <a href="tel:+911234567890" className="flex items-center justify-center gap-2">
                        <Phone className="w-4 h-4" />
                        <span className="font-semibold">Book a Session</span>
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

export default Faculty;
