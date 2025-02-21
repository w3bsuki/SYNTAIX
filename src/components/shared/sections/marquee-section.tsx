"use client";

import { motion } from "framer-motion";

export function MarqueeSection() {
  return (
    <div className="relative w-full overflow-hidden bg-black py-24">
      {/* Marquee container */}
      <div className="relative flex overflow-x-hidden">
        <motion.div
          className="flex gap-12"
          animate={{ 
            x: ["0%", "-50%"]
          }}
          transition={{ 
            repeat: Infinity,
            ease: "linear",
            duration: 25
          }}
        >
          {[...Array(6)].map((_, index) => (
            <span 
              key={index} 
              className="text-[120px] font-bold text-transparent tracking-wider shrink-0"
              style={{
                WebkitTextStroke: '0.8px rgba(255, 255, 255, 0.95)',
                WebkitFontSmoothing: 'antialiased',
                textRendering: 'optimizeLegibility',
                letterSpacing: '0.15em',
                filter: 'drop-shadow(0 0 0.5px rgba(255, 255, 255, 0.3))',
                mixBlendMode: 'exclusion'
              }}
            >
              SYNTAI
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

// Option 2: Outlined Text (commented out)
/*
export function MarqueeSection() {
  return (
    <div className="relative w-full overflow-hidden bg-black py-24">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ 
          x: ["0%", "-50%"]
        }}
        transition={{ 
          repeat: Infinity,
          ease: "linear",
          duration: 20
        }}
      >
        {[...Array(6)].map((_, index) => (
          <div 
            key={index} 
            className="inline-flex items-center justify-center px-12"
          >
            <span 
              className="text-[120px] font-bold text-transparent"
              style={{
                WebkitTextStroke: '1px rgba(255, 255, 255, 0.8)'
              }}
            >
              SYNTAI
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
*/ 