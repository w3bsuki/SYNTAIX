"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { VercelChat } from "@/components/ui/vercel-chat";
import { BorderBeam } from "@/components/ui/border-beam";

const agents = [
  {
    name: "AIDR",
    description: "Most Powerful Agent",
    longDescription: "Experience the power of advanced AI research and data analysis with our flagship agent.",
    href: "/agents/aidr",
    buttonText: "Meet AIDR",
    icon: (className?: string) => (
      <svg 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        className={className}
        strokeWidth="1"
      >
        <path d="M12 4C7 4 3 8 3 13C3 18 7 22 12 22C17 22 21 18 21 13" strokeLinecap="round"/>
        <path d="M12 4C17 4 21 8 21 13" strokeLinecap="round" strokeDasharray="1 3"/>
        <path d="M12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8Z"/>
      </svg>
    ),
    color: "white"
  },
  {
    name: "AIDO",
    description: "Process Optimization Agent",
    longDescription: "Transform your operations with AI-powered optimization and automation.",
    href: "/agents/aido",
    buttonText: "Meet AIDO",
    icon: (className?: string) => (
      <svg 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        className={className}
        strokeWidth="1"
      >
        <path d="M12 3L20 7.5V16.5L12 21L4 16.5V7.5L12 3Z" strokeLinecap="round"/>
        <path d="M12 8V16" strokeLinecap="round"/>
        <path d="M8 10L12 12L16 10" strokeLinecap="round"/>
      </svg>
    ),
    color: "white"
  },
  {
    name: "AIDY",
    description: "Customer Support Agent",
    longDescription: "Experience seamless customer support with our AI-powered assistant that understands and responds in real-time.",
    href: "/agents/aidy",
    buttonText: "Demo",
    icon: (className?: string) => (
      <svg 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        className={className}
        strokeWidth="1"
      >
        <path d="M12 4C6.48 4 2 8.48 2 14C2 16.25 2.99 18.28 4.5 19.75" strokeLinecap="round"/>
        <path d="M19.5 19.75C21.01 18.28 22 16.25 22 14C22 8.48 17.52 4 12 4" strokeLinecap="round"/>
        <path d="M12 14C12.5523 14 13 13.5523 13 13C13 12.4477 12.5523 12 12 12C11.4477 12 11 12.4477 11 13C11 13.5523 11.4477 14 12 14Z" />
        <path d="M8 13C8 13 8 14 12 14C16 14 16 13 16 13" strokeLinecap="round"/>
      </svg>
    ),
    color: "white"
  }
];

export function AgentsPreview() {
  return (
    <section className="relative w-full flex flex-col items-center justify-center overflow-hidden bg-black py-24">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_-100px,rgba(59,130,246,0.1),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-black via-black to-black/90" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.1]" />

      {/* Gradient Orbs */}
      <div 
        className="absolute left-0 top-0 w-[900px] h-[900px] rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.07)_0%,rgba(56,189,248,0)_70%)] blur-[60px] animate-pulse"
        style={{ animationDuration: '12s' }}
      />
      <div 
        className="absolute right-0 bottom-1/4 w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.06)_0%,rgba(59,130,246,0)_70%)] blur-[60px] animate-pulse"
        style={{ animationDuration: '10s', animationDelay: '2s' }}
      />

      <div className="container relative z-10 max-w-6xl mx-auto px-4">
        {/* Header with separator */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-3xl text-white font-light tracking-wide">Agents</span>
          <div className="h-[1px] flex-grow bg-white/10" />
          <Link 
            href="/agents" 
            className="text-lg text-white/60 hover:text-white transition-colors flex items-center gap-2 group font-light tracking-wide"
          >
            All Agents
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 place-items-center">
          {agents.map((agent, index) => (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="w-full max-w-sm"
            >
              <div className="relative p-6 rounded-lg border border-white/10 bg-black/40 backdrop-blur-sm hover:bg-black/60 transition-colors h-[300px] flex flex-col items-center text-center">
                <BorderBeam
                  colorFrom="rgba(255, 255, 255, 0.2)"
                  colorTo="rgba(255, 255, 255, 0.1)"
                  duration={4}
                  size={100}
                />
                
                {/* Icon Container */}
                <div className="p-2.5 rounded-lg backdrop-blur-sm border border-white/10 mb-4 transition-transform duration-300 group-hover:scale-110">
                  {agent.icon("w-6 h-6 text-white/80")}
                </div>
                
                {/* Content Container */}
                <div className="flex-1 flex flex-col items-center">
                  <h3 className="text-3xl font-light text-white mb-2">
                    {agent.name}
                  </h3>
                  
                  <p className="text-sm text-white/60 mb-3">
                    {agent.description}
                  </p>
                  
                  <p className="text-xs text-white/40 max-w-[240px] leading-relaxed">
                    {agent.longDescription}
                  </p>
                </div>

                {/* Action Button - Centered at bottom */}
                <div className="mt-4 w-full px-4">
                  <Link 
                    href={agent.href}
                    className="group relative inline-flex h-11 animate-rainbow cursor-pointer items-center justify-center rounded-xl border-0 bg-[length:200%] px-8 py-2 font-medium text-primary-foreground transition-colors [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 w-full text-[11px] font-light tracking-wider py-1"
                  >
                    <span className="flex items-center justify-center gap-1.5">
                      {agent.buttonText}
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* AI Chat Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl text-white font-light mb-4">Ask our Agents</h2>
              <p className="text-white/60 max-w-2xl mx-auto text-lg">
                Experience the power of our AI agents firsthand. Ask a question or describe your needs.
              </p>
            </div>

            <div className="relative">
              <VercelChat />
              <div className="absolute top-0 left-0 right-0 h-[64px] rounded-lg overflow-hidden">
                <BorderBeam 
                  colorFrom="rgba(255, 255, 255, 0.2)"
                  colorTo="rgba(255, 255, 255, 0.1)"
                  duration={4}
                  size={100}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 