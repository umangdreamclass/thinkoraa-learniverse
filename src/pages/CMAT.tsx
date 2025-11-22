import { Download, Calendar, BookOpen, Users, Trophy, CheckCircle, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CMAT = () => {
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
              <span className="text-primary-foreground font-semibold">MCA Entrance Exam</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Common Management Admission Test (CMAT)
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              National-level entrance test for admission to management programmes across India
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-lg">
                <Download className="mr-2 h-5 w-5" />
                Download Syllabus
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-primary shadow-lg">
                <FileText className="mr-2 h-5 w-5" />
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is CMAT Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <Card className="border-primary/20 shadow-lg">
            <CardHeader>
              <CardTitle className="text-3xl flex items-center gap-3">
                <BookOpen className="h-8 w-8 text-primary" />
                What is CMAT?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The CMAT (Common Management Admission Test) is a national-level entrance examination conducted by the National Testing Agency (NTA). 
                It is designed for admission to management programmes (MBA/PGDM) across AICTE-approved institutions in India. 
                CMAT provides a single window for candidates to appear for a common test and seek admission to various management institutes.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Take CMAT Section */}
      <section className="py-16 bg-accent">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Why Take CMAT?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <Trophy className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Wide Acceptance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Accepted by numerous AICTE-approved B-Schools across India for MBA/PGDM admissions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <CheckCircle className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Skill Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Evaluates quantitative skills, logical reasoning, language comprehension and general awareness.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Career Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Opens doors to quality management education and enhances career opportunities in various sectors.
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
                  <CardDescription>Who can apply for CMAT?</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-success mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      Candidates must have a bachelor's degree (10+2+3 pattern) from a recognized university.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-success mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      Final year students awaiting results can also apply.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-success mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      There is no age limit for appearing in CMAT.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-success mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      Minimum aggregate marks requirement may vary by institute (typically 50% for general category).
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
                  <CardDescription>CMAT 2025 Schedule</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 rounded-lg bg-primary-light border border-primary/20">
                      <span className="font-semibold text-foreground">Registration Opens</span>
                      <span className="text-primary font-bold">January 2025</span>
                    </div>
                    <div className="flex justify-between items-center p-4 rounded-lg bg-primary-light border border-primary/20">
                      <span className="font-semibold text-foreground">Exam Date</span>
                      <span className="text-primary font-bold">March 2025</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">
                      * Exact dates are announced by NTA. Check the official website for updated schedule.
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
                    <p className="text-lg font-semibold text-foreground">3 hours (180 minutes)</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Number of Sections</p>
                    <p className="text-lg font-semibold text-foreground">4 Sections</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Total Questions</p>
                    <p className="text-lg font-semibold text-foreground">100 Questions</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Marking Scheme</p>
                    <p className="text-lg font-semibold text-foreground">+4 for correct, -1 for wrong</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="quant" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold">
                  Section 1: Quantitative Techniques & Data Interpretation (25 Questions)
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    This section tests mathematical aptitude, problem-solving abilities, and data interpretation skills. 
                    Topics include arithmetic, algebra, geometry, data sufficiency, charts, and graphs.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="logical" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold">
                  Section 2: Logical Reasoning (25 Questions)
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    This section assesses analytical and logical thinking abilities. Topics include puzzles, arrangements, 
                    blood relations, syllogisms, coding-decoding, and critical reasoning.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="language" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold">
                  Section 3: Language Comprehension (25 Questions)
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    This section evaluates English language proficiency, reading comprehension, grammar, vocabulary, 
                    and verbal ability through passages, sentence correction, and synonym-antonym questions.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="gk" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold">
                  Section 4: General Awareness (25 Questions)
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    This section tests knowledge of current affairs, business, economy, static GK, awards, sports, 
                    and international events. Stay updated with newspapers and current affairs magazines.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="mt-6 p-4 bg-primary-light rounded-lg border border-primary/30">
              <p className="text-sm text-foreground">
                <strong>Scoring:</strong> Each correct answer carries +4 marks. Each incorrect answer has negative marking of -1 mark.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Selection Process Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Selection Process After CMAT</h2>
            
            <div className="space-y-6">
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold">1</span>
                    Score Declaration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    NTA declares CMAT scores and candidates receive their scorecards with percentile ranks.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold">2</span>
                    Institute Shortlisting
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Participating institutes shortlist candidates based on CMAT scores, academic records, and institute-specific criteria.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold">3</span>
                    GD & PI Rounds
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Shortlisted candidates participate in Group Discussion (GD) and Personal Interview (PI) rounds conducted by individual institutes.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold">4</span>
                    Final Selection
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Final merit list is prepared based on overall performance (CMAT score + GD/PI performance + academic background).
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

export default CMAT;
