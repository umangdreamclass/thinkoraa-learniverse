import { Star, Trophy, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

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

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((student, index) => (
            <Card
              key={student.name}
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
                <div className="relative">
                  <div className="absolute -top-2 -left-2 text-4xl text-primary/20">"</div>
                  <p className="text-sm text-muted-foreground italic relative z-10 pl-4">
                    {student.quote}
                  </p>
                </div>

                {/* Rating */}
                <div className="flex justify-center gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">95%</div>
            <div className="text-sm text-muted-foreground">Selection Rate</div>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Top Rankers</div>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">99+%ile</div>
            <div className="text-sm text-muted-foreground">Average Score</div>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">50K+</div>
            <div className="text-sm text-muted-foreground">Happy Students</div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Testimonials;
