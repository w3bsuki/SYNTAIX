"use client";
import React, { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine, Engine, Container } from "@tsparticles/react";
import type { Container } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { motion, useAnimation } from "framer-motion";

interface ParticleValue {
  value: string | number | Record<string, unknown>;
}

interface ParticleOptions extends Record<string, ParticleValue | unknown> {
  value: ParticleValue;
}

type ParticlesProps = {
  id?: string;
  className?: string;
  options?: ParticleOptions;
};

type ParticlesLoadedCallback = (container: Container) => Promise<void>;

export const SparklesCore = (props: ParticlesProps) => {
  const { id, className, options } = props;
  const [init, setInit] = useState(false);
  const controls = useAnimation();

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    if (container) {
      controls.start({
        opacity: 1,
      });
    }
  }, [controls]);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  useEffect(() => {
    initParticlesEngine(particlesInit).then(() => {
      setInit(true);
    });
  }, [particlesInit]);

  const generatedId = useCallback(() => {
    return Math.random().toString(36).substr(2, 9);
  }, []);

  return (
    <motion.div animate={controls} className={`opacity-0 ${className}`}>
      {init && (
        <Particles
          id={id || generatedId()}
          className={`h-full w-full`}
          particlesLoaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "transparent",
              },
            },
            fullScreen: {
              enable: false,
              zIndex: 0,
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: false,
                  mode: "repulse",
                },
                resize: true as any,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "out",
                },
                random: false,
                speed: {
                  min: 0.1,
                  max: 1,
                },
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  width: 400,
                  height: 400,
                },
                value: 80,
              },
              opacity: {
                value: {
                  min: 0.1,
                  max: 0.5,
                },
                animation: {
                  enable: true,
                  speed: 3,
                  sync: false,
                },
              },
              shape: {
                type: "circle",
              },
              size: {
                value: {
                  min: 1,
                  max: 2,
                },
              },
            },
            detectRetina: true,
            ...options,
          }}
        />
      )}
    </motion.div>
  );
}; 