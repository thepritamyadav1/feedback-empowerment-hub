
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FadeTransition } from "@/components/ui/FadeTransition";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BlurContainer } from "@/components/ui/BlurContainer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

const Register = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Consumer registration state
  const [consumerForm, setConsumerForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Brand registration state - simplified to just consumer for MVP
  const handleConsumerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setConsumerForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleConsumerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (consumerForm.password !== consumerForm.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (
      !consumerForm.name ||
      !consumerForm.email ||
      !consumerForm.password ||
      !consumerForm.confirmPassword
    ) {
      toast.error("All fields are required");
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(consumerForm.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Registration successful!", {
        description: "Welcome to Feedback Hub!",
      });
      
      // Would normally redirect to login or dashboard here
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-6 flex items-center justify-center">
      <div className="w-full max-w-lg">
        <FadeTransition>
          <div className="text-center mb-8">
            <h1 className="heading-lg text-accessible-3xl font-bold mb-4">Create Your Account</h1>
            <p className="text-accessible-lg text-muted-foreground max-w-lg mx-auto">
              Join our platform to share feedback and earn rewards
            </p>
          </div>
        </FadeTransition>

        <FadeTransition delay={100}>
          <BlurContainer 
            className="p-8" 
            intensity="medium" 
            elevation="medium"
            accessible
          >
            <form onSubmit={handleConsumerSubmit} className="space-y-6">
              <div className="space-y-4">
                <Label htmlFor="name" className="text-accessible-base">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={consumerForm.name}
                  onChange={handleConsumerChange}
                  placeholder="John Doe"
                  className="h-12 text-accessible-base"
                  required
                />
              </div>

              <div className="space-y-4">
                <Label htmlFor="consumer-email" className="text-accessible-base">Email</Label>
                <Input
                  id="consumer-email"
                  name="email"
                  type="email"
                  value={consumerForm.email}
                  onChange={handleConsumerChange}
                  placeholder="john@example.com"
                  className="h-12 text-accessible-base"
                  required
                />
              </div>

              <div className="space-y-4">
                <Label htmlFor="consumer-password" className="text-accessible-base">Password</Label>
                <Input
                  id="consumer-password"
                  name="password"
                  type="password"
                  value={consumerForm.password}
                  onChange={handleConsumerChange}
                  placeholder="••••••••"
                  className="h-12 text-accessible-base"
                  required
                />
                <p className="text-accessible-sm text-muted-foreground">
                  Must be at least 6 characters
                </p>
              </div>

              <div className="space-y-4">
                <Label htmlFor="consumer-confirm-password" className="text-accessible-base">Confirm Password</Label>
                <Input
                  id="consumer-confirm-password"
                  name="confirmPassword"
                  type="password"
                  value={consumerForm.confirmPassword}
                  onChange={handleConsumerChange}
                  placeholder="••••••••"
                  className="h-12 text-accessible-base"
                  required
                />
              </div>
            
              <Button 
                type="submit" 
                className="w-full h-14 text-accessible-base font-medium mt-4"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Creating Account..." : "Create Account"}
              </Button>
              
              <div className="mt-6 text-center">
                <div className="relative mb-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t"></div>
                  </div>
                  <div className="relative flex justify-center text-sm uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                      Or continue with
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" type="button" className="h-14 text-accessible-base border-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="h-6 w-6 mr-2"
                    >
                      <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                        <path
                          fill="#4285F4"
                          d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"
                        />
                        <path
                          fill="#34A853"
                          d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"
                        />
                        <path
                          fill="#EA4335"
                          d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"
                        />
                      </g>
                    </svg>
                    Google
                  </Button>
                  <Button variant="outline" type="button" className="h-14 text-accessible-base border-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="h-6 w-6 mr-2 fill-current"
                    >
                      <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z" />
                    </svg>
                    Apple
                  </Button>
                </div>
              </div>

              <div className="text-center mt-6">
                <p className="text-accessible-base text-muted-foreground">
                  Already have an account?{" "}
                  <Link to="/login" className="text-primary hover:underline font-medium">
                    Log in
                  </Link>
                </p>
              </div>
            </form>
          </BlurContainer>
        </FadeTransition>
      </div>
    </div>
  );
};

export default Register;
