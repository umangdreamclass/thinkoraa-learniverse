import { Search, ShoppingCart, MapPin } from "lucide-react";

const actions = [
  {
    icon: Search,
    title: "Explore Programs",
    description: "Browse our comprehensive course catalog",
  },
  {
    icon: ShoppingCart,
    title: "Enroll Now",
    description: "Start your learning journey today",
  },
  {
    icon: MapPin,
    title: "Find a Center",
    description: "Locate a center near you",
  },
];

const ActionCards = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        
        <div className="flex flex-col lg:flex-row items-center gap-8">
          
          {/* Left Content */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Grow Smarter<br />
              <span className="text-primary">Achieve Faster</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Start learning with our curated programs driven by knowledge, ambition, and results.
            </p>
          </div>

          {/* Right Action Cards */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            {actions.map((action, index) => {
              const Icon = action.icon;
              return (
                <div
                  key={action.title}
                  className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-card-foreground mb-1">{action.title}</h3>
                  <p className="text-sm text-muted-foreground">{action.description}</p>
                </div>
              );
            })}
          </div>
          
        </div>
        
      </div>
    </section>
  );
};

export default ActionCards;
