import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { Code, ArrowRight, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const mcaExams = [
  { 
    name: "NIMCET", 
    fullName: "NIT MCA Common Entrance Test",
    description: "National level entrance exam for MCA programs in NITs and other institutes",
    difficulty: "High",
    link: "#"
  },
  { 
    name: "CMAT", 
    fullName: "Common Management Admission Test",
    description: "Also applicable for MCA programs in various institutes",
    difficulty: "Medium",
    link: "/cmat"
  },
  { 
    name: "GUJCET MCA", 
    fullName: "Gujarat CET for MCA",
    description: "State-level entrance exam for MCA admissions in Gujarat",
    difficulty: "Medium",
    link: "#"
  },
  { 
    name: "MAH MCA CET", 
    fullName: "Maharashtra MCA CET",
    description: "State-level entrance test for MCA programs in Maharashtra",
    difficulty: "Medium",
    link: "#"
  },
  { 
    name: "IPU CET MCA", 
    fullName: "IPU Common Entrance Test",
    description: "Entrance exam for MCA admissions in IPU and affiliated colleges",
    difficulty: "Medium",
    link: "#"
  },
  { 
    name: "TANCET MCA", 
    fullName: "Tamil Nadu CET for MCA",
    description: "State-level entrance exam for MCA programs in Tamil Nadu",
    difficulty: "Medium",
    link: "#"
  },
  { 
    name: "BHU MCA", 
    fullName: "BHU MCA Entrance",
    description: "University-level entrance test for MCA at Banaras Hindu University",
    difficulty: "High",
    link: "#"
  },
];

const MCA = () => {
  const navigate = useNavigate();

  const handleExamClick = (link: string) => {
    if (link === "#") return;
    navigate(link);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "High": return "text-red-500";
      case "Medium": return "text-orange-500";
      case "Low": return "text-green-500";
      default: return "text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">MCA Entrance Exams</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Choose Your MCA Entrance Exam
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore all major MCA entrance exams in India. Select the exam that best fits your academic aspirations and prepare with expert coaching.
            </p>
          </div>
        </div>
      </section>

      {/* Exams Grid */}
      <section className="py-16 relative">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mcaExams.map((exam, index) => (
              <Card
                key={exam.name}
                onClick={() => handleExamClick(exam.link)}
                className={`group cursor-pointer border-2 hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-card/50 backdrop-blur-sm animate-fade-in ${
                  exam.link === "#" ? "opacity-60 cursor-not-allowed" : ""
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Code className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                    {exam.name}
                  </CardTitle>
                  <CardDescription className="font-medium text-foreground/80">
                    {exam.fullName}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {exam.description}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">Difficulty:</span>
                    <span className={`text-sm font-semibold ${getDifficultyColor(exam.difficulty)}`}>
                      {exam.difficulty}
                    </span>
                  </div>
                  {exam.link === "#" && (
                    <div className="text-xs text-muted-foreground italic">
                      Coming soon...
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MCA;
