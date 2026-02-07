"use client";

import { Eye, EyeOff, Facebook } from "lucide-react";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type MetafiSignupProps = {
  title?: string;
  subtitle?: string;
  fullNameLabel?: string;
  fullNamePlaceholder?: string;
  emailLabel?: string;
  emailPlaceholder?: string;
  passwordLabel?: string;
  passwordPlaceholder?: string;
  createAccountButton?: string;
  orSignUpWith?: string;
  signUpGoogle?: string;
  signUpFacebook?: string;
  haveAccount?: string;
  signInLink?: string;
  signInUrl?: string;
  termsText?: string;
  termsLink?: string;
  andText?: string;
  privacyLink?: string;
  showPasswordLabel?: string;
  hidePasswordLabel?: string;
};

export default function MetafiSignup({
  title = "Create your account",
  subtitle = "Get started for free. No credit card required.",
  fullNameLabel = "Full name",
  fullNamePlaceholder = "Your name",
  emailLabel = "Email",
  emailPlaceholder = "you@email.com",
  passwordLabel = "Password",
  passwordPlaceholder = "Minimum 8 characters",
  createAccountButton = "Create account",
  orSignUpWith = "Or sign up with",
  signUpGoogle = "Sign up with Google",
  signUpFacebook = "Sign up with Facebook",
  haveAccount = "Already have an account?",
  signInLink = "Sign In",
  signInUrl = "/login",
  termsText = "By signing up, you agree to our",
  termsLink = "Terms of Service",
  andText = "and",
  privacyLink = "Privacy Policy",
  showPasswordLabel = "Show password",
  hidePasswordLabel = "Hide password",
}: MetafiSignupProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section id="metafi-signup" className="bg-background px-6 lg:px-0">
      <div className="container px-0 py-16 md:px-6">
        <div className="bg-features-hero rounded-[16px] px-6 py-12 text-center sm:px-8 sm:py-16 md:py-20">
          <div className="mb-4 flex size-12 w-full items-center justify-center rounded-full sm:mb-5">
            <img
              src="/favicon.svg"
              alt="Qamarero"
              width={40}
              height={40}
              className="h-10 w-10"
            />
          </div>

          <h1 className="text-foreground text-2xl font-medium tracking-tight sm:text-3xl">
            {title}
          </h1>
          <p className="text-muted-foreground mx-auto mt-2 max-w-md text-sm">
            {subtitle}
          </p>

          <Card className="border-border-light shadow-light bg-card mx-auto mt-6 w-full max-w-md rounded-[12px] border text-left sm:mt-8">
            <CardHeader className="pb-0" />
            <CardContent className="pt-6">
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="fullname"
                    className="text-muted-foreground mb-2 block text-sm"
                  >
                    {fullNameLabel}
                  </label>
                  <Input
                    id="fullname"
                    type="text"
                    placeholder={fullNamePlaceholder}
                    className="h-11 rounded-[8px]"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-muted-foreground mb-2 block text-sm"
                  >
                    {emailLabel}
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={emailPlaceholder}
                    className="h-11 rounded-[8px]"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="text-muted-foreground mb-2 block text-sm"
                  >
                    {passwordLabel}
                  </label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder={passwordPlaceholder}
                      className="h-11 rounded-[8px] pr-10"
                      required
                    />
                    <button
                      type="button"
                      aria-label={
                        showPassword ? hidePasswordLabel : showPasswordLabel
                      }
                      className="text-muted-foreground/80 hover:text-foreground absolute right-2 top-1/2 -translate-y-1/2 rounded p-1"
                      onClick={() => setShowPassword((s) => !s)}
                    >
                      {showPassword ? (
                        <EyeOff className="size-4" />
                      ) : (
                        <Eye className="size-4" />
                      )}
                    </button>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="bg-foreground text-primary-foreground hover:bg-foreground/90 h-11 w-full rounded-[8px]"
                >
                  {createAccountButton}
                </Button>

                <div className="my-2 flex items-center">
                  <span className="bg-border/70 h-px flex-1" />
                  <span className="text-muted-foreground mx-3 whitespace-nowrap text-xs">
                    {orSignUpWith}
                  </span>
                  <span className="bg-border/70 h-px flex-1" />
                </div>

                <div className="mt-4 space-y-3">
                  <Button
                    type="button"
                    variant="outline"
                    className="h-11 w-full justify-center rounded-[8px] font-medium"
                  >
                    <FcGoogle className="mr-2 size-5" />
                    {signUpGoogle}
                  </Button>

                  <Button
                    type="button"
                    variant="outline"
                    className="h-11 w-full justify-center rounded-[8px] font-medium"
                  >
                    <Facebook className="mr-2 size-5" />
                    {signUpFacebook}
                  </Button>
                </div>

                <p className="text-muted-foreground text-center text-xs">
                  {termsText}{" "}
                  <a href="/terms" className="text-tagline hover:underline">
                    {termsLink}
                  </a>{" "}
                  {andText}{" "}
                  <a href="/privacy" className="text-tagline hover:underline">
                    {privacyLink}
                  </a>
                </p>
              </form>

              <p className="text-muted-foreground mt-6 text-center text-sm">
                {haveAccount}{" "}
                <a href={signInUrl} className="text-tagline hover:underline">
                  {signInLink}
                </a>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
