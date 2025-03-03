"use client";

import { Button } from "@/components/ui/button";
import { Brain, MoveRight, Search, LineChart, Database } from "lucide-react";
import { motion } from "framer-motion";

export function AidrHero() {
  return (
    <section className="w-full">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex gap-12 py-16 sm:py-20 lg:py-32 items-center justify-between flex-col lg:flex-row">
          <div className="flex gap-6 flex-col lg:max-w-[600px]">
            <div className="inline-flex items-center gap-2">
              <div className="p-2 rounded-md bg-blue-500/10">
                <Brain className="h-5 w-5 text-blue-500" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">AIDR Agent</span>
            </div>
            
            <div className="flex gap-4 flex-col">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                Your Intelligent Research Assistant
              </h1>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground">
                Accelerate your research process with AI-powered data analysis, pattern recognition, and insight generation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2">
                Try AIDR Now
                <MoveRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                View Documentation
              </Button>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: Search, label: "10x Faster Research" },
                  { icon: LineChart, label: "95% Accuracy" },
                  { icon: Database, label: "Unlimited Data" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center gap-2 text-center"
                  >
                    <div className="p-2 rounded-md bg-blue-500/10">
                      <stat.icon className="h-5 w-5 text-blue-500" />
                    </div>
                    <p className="text-xs sm:text-sm font-medium">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:max-w-[500px] w-full aspect-square relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-500/5 rounded-3xl" />
            {/* Add research/analysis themed illustration here */}
          </div>
        </div>
      </div>
    </section>
  );
} 