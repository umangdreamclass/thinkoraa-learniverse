import { Download, Calendar, BookOpen, Users, Trophy, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CAT = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-primary via-primary-hover to-primary">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary-light rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent rounded-full blur-3xl opacity-20"></div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 mb-6 rounded-full bg-primary-light/20 backdrop-blur-sm border border-primary-light/30">
              <span className="text-primary-foreground font-semibold">MBA Entrance Exam</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Common Admission Test (CAT)
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              India's most prestigious management entrance examination conducted by IIMs
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-lg">
              <Download className="mr-2 h-5 w-5" />
              Download Syllabus
            </Button>
          </div>
        </div>
      </section>

      {/* What is CAT Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <Card className="border-primary/20 shadow-lg">
            <CardHeader>
              <CardTitle className="text-3xl flex items-center gap-3">
                <BookOpen className="h-8 w-8 text-primary" />
                What is CAT?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The CAT (Common Admission Test) is India's most prestigious national-level computer-based management entrance examination. 
                It is conducted by the Indian Institutes of Management (IIMs) on a rotation basis and is the gateway for admission to 
                MBA/PGP programmes in IIMs and other top B-schools.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Take CAT Section */}
      <section className="py-16 bg-accent">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Why Take CAT?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <Trophy className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Top B-Schools</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Admission to flagship management programmes (MBA/PGP) in IIMs and many leading business schools.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <CheckCircle className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Skill Proficiency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Demonstrates high proficiency in key skills like quantitative ability, logical reasoning, verbal comprehension and data interpretation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Career Prospects</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A strong CAT score boosts career prospects, leadership roles, and higher salaries in the corporate world.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Eligibility & Dates Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <Tabs defaultValue="eligibility" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="eligibility">Eligibility Criteria</TabsTrigger>
              <TabsTrigger value="dates">Important Dates</TabsTrigger>
            </TabsList>
            
            <TabsContent value="eligibility" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Eligibility Criteria</CardTitle>
                  <CardDescription>Who can apply for CAT?</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-success mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      You must hold a bachelor's degree (10 + 2 + 3 or equivalent) from a recognized university or institute.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-success mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      Final-year students are eligible to apply (subject to later submitting the degree certificate).
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-success mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      There is no upper age limit for CAT.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-success mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      Minimum percentage requirements may vary by category and by the participating institute.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="dates" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-6 w-6 text-primary" />
                    Important Dates
                  </CardTitle>
                  <CardDescription>CAT 2025 Schedule</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 rounded-lg bg-primary-light border border-primary/20">
                      <span className="font-semibold text-foreground">Registration Begins</span>
                      <span className="text-primary font-bold">1 August 2025</span>
                    </div>
                    <div className="flex justify-between items-center p-4 rounded-lg bg-primary-light border border-primary/20">
                      <span className="font-semibold text-foreground">Exam Date</span>
                      <span className="text-primary font-bold">30 November 2025</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">
                      * Admit card download, application fee deadlines, slot selection details vary each year — check the official site
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Exam Pattern Section */}
      <section className="py-16 bg-accent">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Exam Pattern & Structure</h2>
            
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Total Duration</p>
                    <p className="text-lg font-semibold text-foreground">2 hours (120 minutes)</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Number of Sections</p>
                    <p className="text-lg font-semibold text-foreground">3 Sections</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Time per Section</p>
                    <p className="text-lg font-semibold text-foreground">40 minutes (fixed)</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Question Types</p>
                    <p className="text-lg font-semibold text-foreground">MCQ & TITA</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="varc" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold">
                  Section 1: Verbal Ability & Reading Comprehension (VARC)
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    This section tests your English language proficiency, reading comprehension skills, and verbal reasoning abilities. 
                    It includes passages with questions and vocabulary-based questions.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="dilr" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold">
                  Section 2: Data Interpretation & Logical Reasoning (DILR)
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    This section assesses your ability to interpret data from tables, charts, and graphs, as well as solve logical reasoning puzzles. 
                    Both analytical and problem-solving skills are tested.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="qa" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold">
                  Section 3: Quantitative Ability (QA)
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    This section tests your mathematical aptitude and problem-solving abilities. Topics include arithmetic, algebra, 
                    geometry, number systems, and modern mathematics.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="mt-6 p-4 bg-primary-light rounded-lg border border-primary/30">
              <p className="text-sm text-foreground">
                <strong>Important:</strong> Time is section-wise fixed; you cannot go back to a section once its time is over.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Selection Process Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Selection Process After CAT</h2>
            
            <div className="space-y-6">
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold">1</span>
                    Shortlisting
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Eligible candidates are shortlisted by institutes based on a composite score (CAT percentile + academics + 
                    work experience + diversity factors).
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold">2</span>
                    Further Rounds
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Shortlisted candidates undergo further rounds: Written Ability Test (WAT) / Group Discussion (GD) / Personal Interview (PI).
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold">3</span>
                    Final Allotment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Final seat allotment is done by participating institutes based on total score, rank and available seats.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CAT;
