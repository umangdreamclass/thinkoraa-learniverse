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
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Start Your Journey Today
            </h1>
            <p className="text-xl text-muted-foreground">
              Fill in your details and take the first step towards your dream career
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 pb-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto shadow-2xl border-primary/10">
            <CardHeader className="space-y-1 text-center pb-8">
              <CardTitle className="text-3xl font-bold">Enrollment Form</CardTitle>
              <CardDescription className="text-base">
                Complete the form below to register for our entrance exam preparation courses
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-semibold">Full Name *</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <User className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                              <Input placeholder="Enter your full name" className="pl-10 h-12" {...field} />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Email */}
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-semibold">Email *</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                              <Input type="email" placeholder="your.email@example.com" className="pl-10 h-12" {...field} />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Mobile */}
                    <FormField
                      control={form.control}
                      name="mobile"
                      render={({ field }) => (
                        <FormItem className="md:col-span-2">
                          <FormLabel className="text-base font-semibold">Mobile Number *</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Phone className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                              <Input placeholder="10-digit mobile number" className="pl-10 h-12" {...field} />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Gender */}
                    <FormField
                      control={form.control}
                      name="gender"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-semibold">Gender *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-12">
                                <SelectValue placeholder="Select gender" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Male">Male</SelectItem>
                              <SelectItem value="Female">Female</SelectItem>
                              <SelectItem value="Other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Exam Category */}
                    <FormField
                      control={form.control}
                      name="examCategory"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-semibold">Exam Category *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-12">
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
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* 10th Result */}
                    <FormField
                      control={form.control}
                      name="tenthResult"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-semibold">10th Result (%) *</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <BookOpen className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                              <Input placeholder="e.g. 85.5" className="pl-10 h-12" {...field} />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* 12th Result */}
                    <FormField
                      control={form.control}
                      name="twelfthResult"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-semibold">12th Result (%) *</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Trophy className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                              <Input placeholder="e.g. 88.0" className="pl-10 h-12" {...field} />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="space-y-4 pt-4">
                    <Button type="submit" size="lg" className="w-full h-12 text-base font-semibold">
                      <GraduationCap className="mr-2 h-5 w-5" />
                      Complete Enrollment
                    </Button>
                    
                    <div className="text-center">
                      <span className="text-muted-foreground">or</span>
                    </div>
                    
                    <Button
                      type="button"
                      variant="outline"
                      size="lg"
                      className="w-full h-12 text-base font-semibold"
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
