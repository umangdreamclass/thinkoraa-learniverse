import { Puzzle, Users, Phone } from "lucide-react";

const opportunities = [
  {
    icon: Puzzle,
    title: "Join us",
    subtitle: "as a Franchisee",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Users,
    title: "Partner with",
    subtitle: "us for outreach",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Phone,
    title: "Contact us",
    subtitle: "& Know more",
    color: "from-green-500 to-green-600",
  },
];

const Partnership = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left - Opportunity Cards */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {opportunities.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-card border border-border rounded-2xl p-8 text-center hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg text-card-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                </div>
              );
            })}
          </div>

          {/* Right - About Text */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Join Our Growing Network
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              Thinkoraa focuses on diverse segments of education and caters to learners from multiple age groups.
            </p>
            <p className="text-lg text-muted-foreground">
              Led by a team of highly qualified professionals, including IIT-IIM alumni, we have shaped the lives 
              and careers of countless students over our 20+ years of excellence.
            </p>
          </div>
          
        </div>
        
      </div>
    </section>
  );
};

export default Partnership;
