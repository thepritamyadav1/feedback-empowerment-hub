
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FadeTransition } from "@/components/ui/FadeTransition";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BlurContainer } from "@/components/ui/BlurContainer";
import { Logo } from "@/components/icons";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!form.email || !form.password) {
      toast.error("Please enter your email and password");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Login successful!", {
        description: "Welcome back to Feedback Hub!",
      });
      
      // Navigate to dashboard after successful login
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-32 pb-16 px-6 flex items-center justify-center">
      <div className="w-full max-w-md">
        <FadeTransition>
          <div className="text-center mb-8">
            <Logo className="text-primary mx-auto mb-4" size={40} />
            <h1 className="heading-lg mb-2">Welcome Back</h1>
            <p className="text-muted-foreground">
              Log in to your Feedback Hub account
            </p>
          </div>
        </FadeTransition>

        <FadeTransition delay={100}>
          <BlurContainer className="p-1">
            <Card className="border-0 shadow-none bg-transparent">
              <CardHeader className="px-6 pt-6">
                <CardTitle>Log In</CardTitle>
                <CardDescription>
                  Enter your credentials to access your account
                </CardDescription>
              </CardHeader>

              <form onSubmit={handleSubmit}>
                <CardContent className="px-6 py-4 space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Password</Label>
                      <Link
                        to="#"
                        className="text-sm text-primary hover:underline"
                      >
                        Forgot password?
                      </Link>
                    </div>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      value={form.password}
                      onChange={handleChange}
                      placeholder="••••••••"
                      required
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="rememberMe"
                      name="rememberMe"
                      checked={form.rememberMe}
                      onChange={handleChange}
                      className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <Label
                      htmlFor="rememberMe"
                      className="text-sm font-normal cursor-pointer"
                    >
                      Remember me for 30 days
                    </Label>
                  </div>
                </CardContent>

                <CardFooter className="px-6 py-4 flex flex-col">
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Logging in..." : "Log In"}
                  </Button>

                  <div className="mt-6 text-center">
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t"></div>
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-background px-2 text-muted-foreground">
                          Or continue with
                        </span>
                      </div>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-4">
                      <Button variant="outline" type="button">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="h-5 w-5 mr-2"
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
                      <Button variant="outline" type="button">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="h-5 w-5 mr-2 fill-current"
                        >
                          <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z" />
                        </svg>
                        Apple
                      </Button>
                    </div>
                  </div>

                  <div className="mt-6 text-center text-sm">
                    <p className="text-muted-foreground">
                      Don't have an account?{" "}
                      <Link to="/register" className="text-primary hover:underline">
                        Sign up
                      </Link>
                    </p>
                  </div>
                </CardFooter>
              </form>
            </Card>
          </BlurContainer>
        </FadeTransition>
      </div>
    </div>
  );
};

export default Login;
