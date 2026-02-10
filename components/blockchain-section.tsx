'use client'

import { motion } from 'framer-motion'
import { Zap, Lock, Globe, Cpu } from 'lucide-react'

const steps = [
  {
    icon: Zap,
    title: 'Consultation',
    description: 'We analyze your business needs and design tailored solutions',
    color: 'neon-gold',
  },
  {
    icon: Cpu,
    title: 'Implementation',
    description: 'Our expert team deploys cutting-edge technology infrastructure',
    color: 'neon-blue',
  },
  {
    icon: Lock,
    title: 'Security & Compliance',
    description: 'Ensure regulatory compliance and robust security protocols',
    color: 'neon-purple',
  },
  {
    icon: Globe,
    title: 'Scale & Support',
    description: 'Continuous monitoring, optimization, and 24/7 technical support',
    color: 'neon-cyan',
  },
]

export function BlockchainSection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden bg-muted/20">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--neon-cyan) / 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--neon-cyan) / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span
            className="inline-block text-neon-purple text-sm font-semibold tracking-widest uppercase mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            How We Work
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-balance">
            <span className="text-foreground">From </span>
            <span className="text-neon-gold glow-gold">Vision</span>
            <span className="text-foreground"> to </span>
            <span className="text-neon-cyan glow-cyan">Reality</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Our streamlined process ensures seamless integration of advanced technology into your business operations
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-purple via-neon-gold to-neon-cyan" />

            {/* Steps */}
            <div className="space-y-16">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    <motion.div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-${step.color}/10 border-2 border-${step.color}/50 mb-4`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <step.icon className={`w-8 h-8 text-${step.color}`} strokeWidth={1.5} />
                    </motion.div>
                    
                    <h3 className="text-2xl font-display font-bold mb-3">
                      <span className={`text-${step.color}`}>{String(index + 1).padStart(2, '0')}.</span>
                      {' '}
                      {step.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-pretty leading-relaxed max-w-md mx-auto md:mx-0">
                      {step.description}
                    </p>
                  </div>

                  {/* Center Node */}
                  <motion.div
                    className={`hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-${step.color} border-4 border-background shadow-lg shadow-${step.color}/50`}
                    animate={{
                      scale: [1, 1.2, 1],
                      boxShadow: [
                        `0 0 20px hsl(var(--${step.color}) / 0.5)`,
                        `0 0 40px hsl(var(--${step.color}) / 0.8)`,
                        `0 0 20px hsl(var(--${step.color}) / 0.5)`,
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  />

                  {/* Spacer for alignment */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-20"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Ready to transform your business with cutting-edge technology?
          </p>
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-neon-purple via-neon-gold to-neon-cyan text-background font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Journey
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
  }
        
