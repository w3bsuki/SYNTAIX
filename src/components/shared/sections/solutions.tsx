"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const solutions = [
  {
    title: "Enterprise",
    description: "Transform your business with AI-powered automation and analytics",
    icon: (className?: string) => (
      <svg 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        className={className}
        strokeWidth="1"
      >
        <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16" strokeLinecap="round"/>
        <path d="M12 7v8" strokeLinecap="round"/>
        <path d="M8 10h8" strokeLinecap="round"/>
      </svg>
    ),
    metric: "40%",
    metricLabel: "Cost Reduction",
    href: "/solutions/business"
  },
  {
    title: "Industrial",
    description: "Optimize manufacturing and industrial processes with AI",
    icon: (className?: string) => (
      <svg 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        className={className}
        strokeWidth="1"
      >
        <path d="M20 16V8l-4-4H4v16h16" strokeLinecap="round"/>
        <path d="M8 8h4" strokeLinecap="round"/>
        <path d="M8 12h8" strokeLinecap="round"/>
        <path d="M8 16h4" strokeLinecap="round"/>
      </svg>
    ),
    metric: "85%",
    metricLabel: "Efficiency Gain",
    href: "/solutions/industry"
  },
  {
    title: "Government",
    description: "Secure and compliant AI solutions for public sector",
    icon: (className?: string) => (
      <svg 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        className={className}
        strokeWidth="1"
      >
        <path d="M12 3L3 8h18l-9-5z" strokeLinecap="round"/>
        <path d="M5 20h14" strokeLinecap="round"/>
        <path d="M6 10v8" strokeLinecap="round"/>
        <path d="M12 10v8" strokeLinecap="round"/>
        <path d="M18 10v8" strokeLinecap="round"/>
      </svg>
    ),
    metric: "99.9%",
    metricLabel: "Security",
    href: "/solutions/government"
  }
];

export function Solutions() {
  return (
    <section className="relative w-full flex flex-col items-center justify-center overflow-hidden bg-black py-24">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_-100px,rgba(147,51,234,0.1),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-black via-black to-black/90" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.1]" />

      <div className="container relative z-10 max-w-6xl mx-auto px-4">
        {/* Header with separator */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-3xl text-white font-light tracking-wide">Solutions</span>
          <div className="h-[1px] flex-grow bg-white/10" />
          <Link 
            href="/solutions" 
            className="text-lg text-white/60 hover:text-white transition-colors flex items-center gap-2 group font-light tracking-wide"
          >
            View All
            <ArrowRight className="w-5 h-5 text-white/60 group-hover:text-white transition-colors group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0, transition: { delay: index * 0.1 } }
              }}
              className="w-full max-w-sm"
            >
              <Link href={solution.href} className="block group">
                <div className="relative p-6 rounded-lg border border-white/10 bg-black/40 backdrop-blur-sm hover:bg-black/60 transition-colors h-[280px] flex flex-col items-center text-center">
                  <GlowingEffect
                    disabled={false}
                    glow={true}
                    variant="default"
                    blur={2}
                    spread={40}
                    inactiveZone={0.2}
                    borderWidth={1}
                  />
                  
                  {/* Icon Container */}
                  <div className="p-2.5 rounded-lg backdrop-blur-sm border border-white/10 mb-4 transition-transform duration-300 group-hover:scale-110">
                    {solution.icon("w-6 h-6 text-white/80")}
                  </div>
                  
                  <h3 className="text-3xl font-light text-white mb-2">
                    {solution.title}
                  </h3>
                  <p className="text-sm text-white/60 mb-auto">
                    {solution.description}
                  </p>
                  
                  {/* Metric */}
                  <div className="mt-4 pt-4 border-t border-white/10 w-full flex items-center justify-between">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-xl font-semibold text-white">
                        {solution.metric}
                      </span>
                      <span className="text-xs text-white/60">
                        {solution.metricLabel}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-white/60 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Minimalist CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-2xl mx-auto text-center"
        >
          <div className="relative p-8 rounded-lg border border-white/10 bg-black/40 backdrop-blur-sm">
            <GlowingEffect
              disabled={false}
              glow={true}
              variant="default"
              blur={2}
              spread={40}
              inactiveZone={0.2}
              borderWidth={1}
            />
            <h2 className="text-3xl text-white font-light mb-4">Ready to Transform Your Business?</h2>
            <p className="text-base text-white/60 mb-8">
              Schedule a consultation to discover how our AI solutions can drive your success
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors group"
            >
              <span className="text-lg font-light">Get Started</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}