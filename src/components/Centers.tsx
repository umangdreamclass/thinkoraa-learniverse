import { MapPin } from "lucide-react";

const centers = [
  {
    name: "Delhi Center",
    address: "Connaught Place, New Delhi",
  },
  {
    name: "Mumbai Center",
    address: "Andheri West, Mumbai",
  },
  {
    name: "Bangalore Center",
    address: "Koramangala, Bangalore",
  },
];

const Centers = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
            Our Centers
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {centers.map((center, index) => (
              <div
                key={center.name}
                className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary transition-all duration-300 hover:shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg text-card-foreground mb-2">
                  {center.name}
                </h3>
                <p className="text-sm text-muted-foreground">{center.address}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Centers;
