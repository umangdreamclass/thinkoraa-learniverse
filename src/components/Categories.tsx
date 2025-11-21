import { GraduationCap, Scale, Briefcase, BookOpen, School, Book, Plane } from "lucide-react";
import { useNavigate } from "react-router-dom";

const categories = [
  { name: "MBA", icon: GraduationCap, color: "from-blue-500 to-blue-600", link: "/cat" },
  { name: "Law", icon: Scale, color: "from-purple-500 to-purple-600", link: "#" },
  { name: "IPM", icon: Briefcase, color: "from-green-500 to-green-600", link: "#" },
  { name: "BBA", icon: BookOpen, color: "from-orange-500 to-orange-600", link: "#" },
  { name: "CUET", icon: School, color: "from-pink-500 to-pink-600", link: "#" },
  { name: "Tuitions", icon: Book, color: "from-indigo-500 to-indigo-600", link: "#" },
  { name: "Study Abroad", icon: Plane, color: "from-cyan-500 to-cyan-600", link: "#" },
];

const Categories = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (link: string, name: string) => {
    if (link === "#") return;
    if (name === "MBA") {
      navigate("/cat");
    } else if (name === "MCA") {
      navigate("/cmat");
    } else {
      navigate(link);
    }
  };

  return (
    <section className="py-16 bg-accent">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Are You Looking For?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Prepare for MBA, Law, CUET, IPM, BBA and more with structured courses by experts.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.name}
                onClick={() => handleCategoryClick(category.link, category.name)}
                className="group bg-card rounded-2xl p-6 text-center border border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-2 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-card-foreground group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
};

export default Categories;
