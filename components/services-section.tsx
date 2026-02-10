'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Server, ShieldCheck, TrendingUp, Sparkles } from 'lucide-react'

const services = [
  {
    icon: Server,
    title: 'IT & Information Technology',
    description: 'Comprehensive IT solutions including infrastructure, cloud services, cybersecurity, and digital transformation consulting.',
    color: 'core-orange',
    gradient: 'from-core-orange/20 to-core-coral/10',
  },
  {
    icon: ShieldCheck,
    title: 'Identity Verification & KYC',
    description: 'Advanced identity verification systems, KYC compliance solutions, and biometric authentication for secure digital identity management.',
    color: 'core-gold',
    gradient: 'from-core-gold/20 to-core-orange/10',
  },
  {
    icon: TrendingUp,
    title: 'Fintech Solutions',
    description: 'Cutting-edge financial technology services including payment processing, blockchain integration, and digital banking solutions.',
    color: 'core-coral',
    gradient: 'from-core-coral/20 to-core-gold/10',
  },
  {
    icon: Sparkles,
    title: 'Blockchain Technology',
    description: 'Web3 development, smart contract auditing, decentralized applications, and blockchain consulting services.',
    color: 'core-orange',
    gradient: 'from-core-orange/20 to-core-coral/10',
  },
]

export function ServicesSection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background pointer-events-none" />
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-block text-core-coral text-sm font-semibold tracking-widest uppercase mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our Services
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-balance">
            <span className="text-foreground">Comprehensive </span>
            <span className="text-core-orange glow-orange">Solutions</span>
            <br />
            <span className="text-core-gold glow-gold">for the Future</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Empowering businesses with cutting-edge technology and innovative financial solutions
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Card className={`relative p-8 bg-card/50 backdrop-blur-sm border-2 border-transparent hover:border-${service.color}/50 transition-all duration-300 group overflow-hidden`}>
                  {/* Animated Background Gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    initial={false}
                  />
                  
                  {/* Glow Effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} rounded-lg blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      className="mb-6"
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className={`inline-flex p-4 rounded-xl bg-${service.color}/10 border border-${service.color}/30`}>
                        <service.icon className={`w-8 h-8 text-${service.color}`} strokeWidth={1.5} />
                      </div>
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-2xl font-display font-bold mb-4 text-balance">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-pretty leading-relaxed">
                      {service.description}
                    </p>

                    {/* Hover Arrow */}
                    <motion.div
                      className={`mt-6 inline-flex items-center text-${service.color} font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                      initial={false}
                    >
                      <span className="mr-2">Learn More</span>
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
