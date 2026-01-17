import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { GraduationCap, Mail, Lock, Eye, EyeOff, BookOpen, Target, Users } from "lucide-react";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  rememberMe: z.boolean().default(false),
});

type LoginFormData = z.infer<typeof loginSchema>;

const StudentLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    // Simulate login - replace with actual authentication
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Login Successful!",
        description: "Welcome back to Thinkoraa!",
      });
      navigate("/");
    }, 1500);
  };

  const benefits = [
    { icon: BookOpen, text: "Access Study Materials" },
    { icon: Target, text: "Track Your Progress" },
    { icon: Users, text: "Connect with Mentors" },
  ];

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Decorative Panel */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary via-primary to-primary-hover relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl" />
        <div className="absolute bottom-32 right-20 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/10 rounded-full blur-lg" />
        <div className="absolute bottom-20 left-16 w-16 h-16 bg-white/15 rounded-full" />
        <div className="absolute top-32 right-32 w-20 h-20 bg-white/10 rounded-full blur-md" />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-center w-full px-12 text-white">
          <div className="bg-white/20 backdrop-blur-sm p-6 rounded-full mb-8">
            <GraduationCap className="w-16 h-16" />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-center">Welcome Back!</h1>
          <p className="text-xl text-white/90 mb-12 text-center max-w-md">
            Continue your journey towards success with Thinkoraa
          </p>

          {/* Benefits */}
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4"
              >
                <div className="bg-white/20 p-3 rounded-lg">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <span className="text-lg font-medium">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 bg-gradient-to-br from-background via-background to-muted/30">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden flex justify-center mb-8">
            <div className="bg-gradient-to-br from-primary to-primary-hover p-4 rounded-2xl">
              <GraduationCap className="w-10 h-10 text-white" />
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl shadow-xl border border-border/50 p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-primary-hover rounded-2xl mb-4 shadow-lg">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Student Login</h2>
              <p className="text-muted-foreground mt-2">
                Sign in to access your dashboard
              </p>
            </div>

            {/* Form */}
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground font-medium">
                        Email Address
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                          <Input
                            {...field}
                            type="email"
                            placeholder="Enter your email"
                            className="pl-12 h-14 bg-background border-border/60 focus:border-primary focus:ring-primary/20 rounded-xl"
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground font-medium">
                        Password
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                          <Input
                            {...field}
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            className="pl-12 pr-12 h-14 bg-background border-border/60 focus:border-primary focus:ring-primary/20 rounded-xl"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                          >
                            {showPassword ? (
                              <EyeOff className="w-5 h-5" />
                            ) : (
                              <Eye className="w-5 h-5" />
                            )}
                          </button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex items-center justify-between">
                  <FormField
                    control={form.control}
                    name="rememberMe"
                    render={({ field }) => (
                      <FormItem className="flex items-center space-x-2 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="border-border data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                          />
                        </FormControl>
                        <FormLabel className="text-sm text-muted-foreground font-normal cursor-pointer">
                          Remember me
                        </FormLabel>
                      </FormItem>
                    )}
                  />
                  <Link
                    to="/forgot-password"
                    className="text-sm text-primary hover:text-primary-hover font-medium transition-colors"
                  >
                    Forgot Password?
                  </Link>
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-14 bg-gradient-to-r from-primary to-primary-hover hover:from-primary-hover hover:to-primary text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Signing in...
                    </div>
                  ) : (
                    "Sign In"
                  )}
                </Button>
              </form>
            </Form>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border/60" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-card text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>

            {/* Social Login */}
            <Button
              type="button"
              variant="outline"
              className="w-full h-14 border-border/60 hover:bg-muted/50 rounded-xl font-medium"
            >
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continue with Google
            </Button>

            {/* Sign Up Link */}
            <p className="text-center mt-8 text-muted-foreground">
              New student?{" "}
              <Link
                to="/enroll"
                className="text-primary hover:text-primary-hover font-semibold transition-colors"
              >
                Enroll Now
              </Link>
            </p>
          </div>

          {/* Back to Home */}
          <p className="text-center mt-6">
            <Link
              to="/"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              ← Back to Home
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentLogin;
