"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Mail, Phone, Clock, CheckCircle2, Loader2 } from "lucide-react";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { useState } from "react";
import { BorderBeam } from "@/components/ui/border-beam";

const formSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name must be less than 50 characters"),
  lastName: z
    .string()
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name must be less than 50 characters"),
  email: z
    .string()
    .email("Please enter a valid email address")
    .min(5, "Email must be at least 5 characters")
    .max(100, "Email must be less than 100 characters"),
  company: z
    .string()
    .min(2, "Company name must be at least 2 characters")
    .max(100, "Company name must be less than 100 characters"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
});

const benefits = [
  "24/7 AI-powered support",
  "Dedicated account manager",
  "Custom solution design",
  "Priority response time"
];

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsSubmitting(true);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log(values);
      setIsSuccess(true);
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="w-full py-24 relative overflow-hidden bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_-30%,rgba(59,130,246,0.1),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-black via-black to-black/90" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.1]" />

      <div className="container relative z-10 max-w-6xl mx-auto px-4">
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 lg:gap-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Content */}
          <div className="flex flex-col gap-8 lg:sticky lg:top-24">
            <div className="space-y-6">
              <motion.span
                className="text-white/60 font-medium"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                Contact Us
              </motion.span>
              <motion.h2 
                className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Let&apos;s discuss your AI transformation
              </motion.h2>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <motion.div 
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="p-2.5 rounded-xl bg-white/5 ring-1 ring-white/10">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="font-medium text-white">Email us</span>
                  <Link href="mailto:contact@finalagency.com" className="text-white/60 hover:text-white transition-colors">
                    contact@finalagency.com
                  </Link>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="p-2.5 rounded-xl bg-white/5 ring-1 ring-white/10">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="font-medium text-white">Call us</span>
                  <Link href="tel:+15550000000" className="text-white/60 hover:text-white transition-colors">
                    +1 (555) 000-0000
                  </Link>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="p-2.5 rounded-xl bg-white/5 ring-1 ring-white/10">
                  <Clock className="h-5 w-5 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="font-medium text-white">Business hours</span>
                  <span className="text-white/60">24/7 Support Available</span>
                </div>
              </motion.div>
            </div>

            {/* Benefits */}
            <div className="border-t border-white/10 pt-6 mt-6">
              <h3 className="text-lg font-semibold text-white mb-4">Why work with us?</h3>
              <div className="grid gap-3">
                {benefits.map((benefit, index) => (
                  <motion.div 
                    key={benefit}
                    className="flex items-center gap-2 text-white/60"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <CheckCircle2 className="h-5 w-5 text-white" />
                    <span>{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="relative">
            <Card className="p-6 bg-black/40 backdrop-blur-sm border-white/10">
              <BorderBeam 
                colorFrom="rgba(255, 255, 255, 0.2)"
                colorTo="rgba(255, 255, 255, 0.1)"
                duration={4}
                size={100}
              />
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-medium text-white">First name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter your first name" 
                              className="h-12 bg-white/5 border-white/10 text-white placeholder:text-white/40" 
                              disabled={isSubmitting}
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-medium text-white">Last name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter your last name" 
                              className="h-12 bg-white/5 border-white/10 text-white placeholder:text-white/40" 
                              disabled={isSubmitting}
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium text-white">Work email</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter your work email" 
                            type="email" 
                            className="h-12 bg-white/5 border-white/10 text-white placeholder:text-white/40" 
                            disabled={isSubmitting}
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium text-white">Company</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter your company name" 
                            className="h-12 bg-white/5 border-white/10 text-white placeholder:text-white/40" 
                            disabled={isSubmitting}
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium text-white">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your project and requirements" 
                            className="min-h-[120px] resize-none bg-white/5 border-white/10 text-white placeholder:text-white/40"
                            disabled={isSubmitting}
                            {...field}
                          />
                        </FormControl>
                        <FormDescription className="text-xs text-white/40">
                          Please provide details about your project, goals, and any specific requirements.
                        </FormDescription>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full h-12 text-base rounded-full bg-white text-black hover:bg-white/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : isSuccess ? (
                      <>
                        <CheckCircle2 className="mr-2 h-5 w-5" />
                        Message Sent
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>

                  <p className="text-sm text-white/40 text-center">
                    By submitting this form, you agree to our{' '}
                    <Link href="/terms" className="underline underline-offset-4 hover:text-white">
                      Terms of Service
                    </Link>
                    {' '}and{' '}
                    <Link href="/privacy" className="underline underline-offset-4 hover:text-white">
                      Privacy Policy
                    </Link>
                  </p>
                </form>
              </Form>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 