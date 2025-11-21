import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { Scale, ArrowRight, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const lawExams = [
  { 
    name: "CLAT", 
    fullName: "Common Law Admission Test",
    description: "Premier national level entrance exam for UG and PG law programs in National Law Universities",
    difficulty: "High",
    link: "#"
  },
  { 
    name: "SLAT", 
    fullName: "Symbiosis Law Admission Test",
    description: "Entrance test for law programs at Symbiosis Law School campuses",
    difficulty: "Medium",
    link: "#"
  },
  { 
    name: "AILET", 
    fullName: "All India Law Entrance Test",
    description: "National level test conducted by NLU Delhi for BA LLB and LLM programs",
    difficulty: "High",
    link: "#"
  },
  { 
    name: "MHCET Law", 
    fullName: "Maharashtra CET for Law",
    description: "State-level entrance exam for 3-year and 5-year LLB programs in Maharashtra",
    difficulty: "Medium",
    link: "#"
  },
  { 
    name: "LSAT India", 
    fullName: "Law School Admission Test",
    description: "Standardized test for admission to law programs in participating universities",
    difficulty: "Medium",
    link: "#"
  },
  { 
    name: "DU LLB", 
    fullName: "Delhi University LLB Entrance",
    description: "University-level entrance test for LLB programs at Faculty of Law, DU",
    difficulty: "High",
    link: "#"
  },
  { 
    name: "CUET Law", 
    fullName: "CUET for Law Programs",
    description: "Common entrance test for law admissions in central universities",
    difficulty: "Medium",
    link: "#"
  },
];

const Law = () => {
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
              <span className="text-sm font-medium text-primary">Law Entrance Exams</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Choose Your Law Entrance Exam
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore all major law entrance exams in India. Select the exam that opens doors to prestigious law schools and prepare with expert guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Exams Grid */}
      <section className="py-16 relative">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lawExams.map((exam, index) => (
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
                      <Scale className="w-6 h-6 text-primary-foreground" />
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

export default Law;
