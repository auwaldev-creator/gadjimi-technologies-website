'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowDown } from 'lucide-react'

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-background"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-core-orange/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-core-coral/20 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-core-gold/10 rounded-full blur-3xl animate-pulse-slow" />
      </div>
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--core-orange)/0.1)_0%,transparent_70%)] pointer-events-none" />
      
      {/* Content */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center"
      >
        {/* Company Name with Kinetic Typography */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-2">
            <span className="inline-block">
              <span className="text-foreground">Gadji</span>
              <motion.span
                className="text-core-orange glow-orange"
                animate={{
                  textShadow: [
                    '0 0 20px hsla(16, 100%, 60%, 0.8)',
                    '0 0 40px hsla(16, 100%, 60%, 1)',
                    '0 0 20px hsla(16, 100%, 60%, 0.8)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                mi
              </motion.span>
            </span>
            <br />
            <span className="inline-block mt-2">
              <span className="text-core-coral glow-coral">Techno</span>
              <span className="text-core-gold glow-gold">logies</span>
            </span>
            <span className="block text-3xl md:text-4xl lg:text-5xl mt-4 text-muted-foreground font-sans">
              SARL
            </span>
          </h1>
        </motion.div>

        {/* French Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-sm md:text-base text-core-coral mb-2 font-light tracking-widest uppercase"
        >
          Innover pour l&apos;avenir
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-3xl lg:text-4xl font-light mb-8 max-w-4xl text-pretty"
        >
          <span className="text-foreground">Next-Gen </span>
          <span className="text-core-orange glow-orange">Fintech</span>
          <span className="text-foreground"> & </span>
          <span className="text-core-gold glow-gold">IT Solutions</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 mb-16"
        >
          <Button
            size="lg"
            className="bg-core-orange hover:bg-core-orange/90 text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-lg shadow-core-orange/50 hover:shadow-core-orange/70 transition-all duration-300"
          >
            Explore Services
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-core-gold text-core-gold hover:bg-core-gold/10 px-8 py-6 text-lg rounded-xl shadow-lg shadow-core-gold/30 hover:shadow-core-gold/50 transition-all duration-300 bg-transparent"
          >
            Contact Us
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="w-8 h-8 text-core-orange" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
