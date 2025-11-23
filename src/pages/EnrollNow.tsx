import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { User, Mail, Phone, GraduationCap, BookOpen, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address"),
  mobile: z.string().regex(/^[0-9]{10}$/, "Mobile number must be 10 digits"),
  gender: z.enum(["Male", "Female", "Other"], { required_error: "Please select gender" }),
  examCategory: z.string({ required_error: "Please select exam category" }),
  tenthResult: z.string().regex(/^[0-9]{1,3}(\.[0-9]{1,2})?$/, "Enter valid percentage").refine(
    (val) => parseFloat(val) >= 0 && parseFloat(val) <= 100,
    "Percentage must be between 0 and 100"
  ),
  twelfthResult: z.string().regex(/^[0-9]{1,3}(\.[0-9]{1,2})?$/, "Enter valid percentage").refine(
    (val) => parseFloat(val) >= 0 && parseFloat(val) <= 100,
    "Percentage must be between 0 and 100"
  ),
});

const EnrollNow = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      mobile: "",
      tenthResult: "",
      twelfthResult: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast({
      title: "Enrollment Successful! 🎉",
      description: "We'll contact you soon with further details.",
    });
    form.reset();
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-background via-primary-light/20 to-background">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,hsl(var(--primary)/0.1),transparent_50%)]" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <GraduationCap className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-primary">Begin Your Success Story</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-hover to-primary bg-clip-text text-transparent leading-tight">
              Start Your Journey Today
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of successful students. Fill in your details and take the first step towards your dream career.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-8 pb-20 relative">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto backdrop-blur-sm bg-card/80 border-primary/10 overflow-hidden animate-scale-in" style={{ boxShadow: 'var(--shadow-card)' }}>
            {/* Card Header with Gradient Border */}
            <div className="relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
              <CardHeader className="space-y-3 text-center pt-10 pb-8 px-6">
                <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-hover flex items-center justify-center mb-2 shadow-lg">
                  <GraduationCap className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Enrollment Form
                </CardTitle>
                <CardDescription className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                  Complete the form below to register for our entrance exam preparation courses
                </CardDescription>
              </CardHeader>
            </div>
            <CardContent className="px-6 md:px-10 pb-10">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem className="group">
                          <FormLabel className="text-base font-semibold text-foreground/90">Full Name *</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground transition-colors group-focus-within:text-primary" />
                              <Input 
                                placeholder="Enter your full name" 
                                className="pl-12 h-14 text-base border-2 border-border bg-background/50 focus:border-primary focus:bg-background transition-all duration-200 focus:shadow-[0_0_0_3px_hsl(var(--primary)/0.1)]" 
                                {...field} 
                              />
                            </div>
                          </FormControl>
                          <FormMessage className="text-xs" />
                        </FormItem>
                      )}
                    />

                    {/* Email */}
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className="group">
                          <FormLabel className="text-base font-semibold text-foreground/90">Email *</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground transition-colors group-focus-within:text-primary" />
                              <Input 
                                type="email" 
                                placeholder="your.email@example.com" 
                                className="pl-12 h-14 text-base border-2 border-border bg-background/50 focus:border-primary focus:bg-background transition-all duration-200 focus:shadow-[0_0_0_3px_hsl(var(--primary)/0.1)]" 
                                {...field} 
                              />
                            </div>
                          </FormControl>
                          <FormMessage className="text-xs" />
                        </FormItem>
                      )}
                    />

                    {/* Mobile */}
                    <FormField
                      control={form.control}
                      name="mobile"
                      render={({ field }) => (
                        <FormItem className="md:col-span-2 group">
                          <FormLabel className="text-base font-semibold text-foreground/90">Mobile Number *</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground transition-colors group-focus-within:text-primary" />
                              <Input 
                                placeholder="10-digit mobile number" 
                                className="pl-12 h-14 text-base border-2 border-border bg-background/50 focus:border-primary focus:bg-background transition-all duration-200 focus:shadow-[0_0_0_3px_hsl(var(--primary)/0.1)]" 
                                {...field} 
                              />
                            </div>
                          </FormControl>
                          <FormMessage className="text-xs" />
                        </FormItem>
                      )}
                    />

                    {/* Gender */}
                    <FormField
                      control={form.control}
                      name="gender"
                      render={({ field }) => (
                        <FormItem className="group">
                          <FormLabel className="text-base font-semibold text-foreground/90">Gender *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-14 text-base border-2 border-border bg-background/50 focus:border-primary focus:bg-background transition-all duration-200 focus:shadow-[0_0_0_3px_hsl(var(--primary)/0.1)]">
                                <SelectValue placeholder="Select gender" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Male">Male</SelectItem>
                              <SelectItem value="Female">Female</SelectItem>
                              <SelectItem value="Other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage className="text-xs" />
                        </FormItem>
                      )}
                    />

                    {/* Exam Category */}
                    <FormField
                      control={form.control}
                      name="examCategory"
                      render={({ field }) => (
                        <FormItem className="group">
                          <FormLabel className="text-base font-semibold text-foreground/90">Exam Category *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-14 text-base border-2 border-border bg-background/50 focus:border-primary focus:bg-background transition-all duration-200 focus:shadow-[0_0_0_3px_hsl(var(--primary)/0.1)]">
                                <SelectValue placeholder="Select exam" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="MBA">MBA</SelectItem>
                              <SelectItem value="MCA">MCA</SelectItem>
                              <SelectItem value="BBA">IPM BBA</SelectItem>
                              <SelectItem value="LAW">LAW</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage className="text-xs" />
                        </FormItem>
                      )}
                    />

                    {/* 10th Result */}
                    <FormField
                      control={form.control}
                      name="tenthResult"
                      render={({ field }) => (
                        <FormItem className="group">
                          <FormLabel className="text-base font-semibold text-foreground/90">10th Result (%) *</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground transition-colors group-focus-within:text-primary" />
                              <Input 
                                placeholder="e.g. 85.5" 
                                className="pl-12 h-14 text-base border-2 border-border bg-background/50 focus:border-primary focus:bg-background transition-all duration-200 focus:shadow-[0_0_0_3px_hsl(var(--primary)/0.1)]" 
                                {...field} 
                              />
                            </div>
                          </FormControl>
                          <FormMessage className="text-xs" />
                        </FormItem>
                      )}
                    />

                    {/* 12th Result */}
                    <FormField
                      control={form.control}
                      name="twelfthResult"
                      render={({ field }) => (
                        <FormItem className="group">
                          <FormLabel className="text-base font-semibold text-foreground/90">12th Result (%) *</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Trophy className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground transition-colors group-focus-within:text-primary" />
                              <Input 
                                placeholder="e.g. 88.0" 
                                className="pl-12 h-14 text-base border-2 border-border bg-background/50 focus:border-primary focus:bg-background transition-all duration-200 focus:shadow-[0_0_0_3px_hsl(var(--primary)/0.1)]" 
                                {...field} 
                              />
                            </div>
                          </FormControl>
                          <FormMessage className="text-xs" />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Submit Button Section */}
                  <div className="space-y-5 pt-6">
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full h-14 text-base font-semibold bg-gradient-to-r from-primary to-primary-hover hover:shadow-[0_8px_30px_hsl(var(--primary)/0.3)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <GraduationCap className="mr-2 h-5 w-5" />
                      Complete Enrollment
                    </Button>
                    
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-border" />
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-card px-4 text-muted-foreground font-medium">or</span>
                      </div>
                    </div>
                    
                    <Button
                      type="button"
                      variant="outline"
                      size="lg"
                      className="w-full h-14 text-base font-semibold border-2 hover:bg-primary/5 hover:border-primary/50 transition-all duration-300"
                      onClick={() => navigate("/student-login")}
                    >
                      Already Enrolled? Login
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EnrollNow;
