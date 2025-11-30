import { GraduationCap, Target, Users, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary via-primary-hover to-primary">
        <div className="absolute inset-0 bg-grid-white/[0.05]" />
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Mentor Academy</h1>
            <p className="text-lg md:text-xl text-white/90">
              Empowering students to achieve their dreams through quality education and expert guidance
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            
            {/* Who We Are */}
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
                Who We Are
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Mentor Academy is a premier coaching institute dedicated to preparing students for 
                competitive entrance examinations. With years of experience and a proven track record, 
                we help students unlock their potential and secure admissions to top institutions across India.
              </p>
            </div>

            {/* Core Values Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              <Card className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-primary to-primary-hover">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                      <p className="text-muted-foreground">
                        To provide comprehensive, result-oriented coaching that transforms aspirations into achievements.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-primary to-primary-hover">
                      <GraduationCap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                      <p className="text-muted-foreground">
                        To be the most trusted name in competitive exam preparation across the nation.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-primary to-primary-hover">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Expert Faculty</h3>
                      <p className="text-muted-foreground">
                        Highly qualified and experienced instructors committed to student success.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-primary to-primary-hover">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
                      <p className="text-muted-foreground">
                        Consistent track record of students securing top ranks in competitive exams.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Why Choose Us */}
            <div className="text-center bg-gradient-to-br from-primary/5 to-primary-hover/5 rounded-2xl p-8 md:p-12 border border-primary/10">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
                Why Choose Mentor Academy?
              </h2>
              <div className="grid md:grid-cols-3 gap-8 text-left">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Comprehensive Study Material</h3>
                  <p className="text-muted-foreground text-sm">
                    Updated content aligned with latest exam patterns
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Regular Mock Tests</h3>
                  <p className="text-muted-foreground text-sm">
                    Practice tests to build confidence and accuracy
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Personal Mentorship</h3>
                  <p className="text-muted-foreground text-sm">
                    Individual attention and guidance for every student
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
