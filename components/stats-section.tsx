'use client'

import React from "react"

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Users, Building2, Globe, Award } from 'lucide-react'

interface StatItemProps {
  icon: React.ElementType
  value: number
  suffix?: string
  label: string
  color: string
}

function StatItem({ icon: Icon, value, suffix = '', label, color }: StatItemProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const duration = 2000
      const increment = value / (duration / 16)

      const timer = setInterval(() => {
        start += increment
        if (start >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative group"
    >
      <div className="relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-transparent hover:border-neon-purple/30 transition-all duration-300">
        {/* Glow effect on hover */}
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-${color}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        
        <div className="relative z-10 text-center">
          {/* Icon */}
          <motion.div
            className="inline-flex mb-4"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className={`p-4 rounded-xl bg-${color}/10 border border-${color}/30`}>
              <Icon className={`w-8 h-8 text-${color}`} strokeWidth={1.5} />
            </div>
          </motion.div>

          {/* Counter */}
          <div className="mb-2">
            <span className={`text-4xl md:text-5xl font-display font-bold text-${color} glow-${color.split('-')[1]}`}>
              {count}
              {suffix}
            </span>
          </div>

          {/* Label */}
          <p className="text-sm md:text-base text-muted-foreground font-medium">
            {label}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export function StatsSection() {
  const stats = [
    {
      icon: Users,
      value: 500,
      suffix: '+',
      label: 'Clients Served',
      color: 'neon-gold',
    },
    {
      icon: Building2,
      value: 50,
      suffix: '+',
      label: 'Enterprise Solutions',
      color: 'neon-purple',
    },
    {
      icon: Globe,
      value: 10,
      suffix: '+',
      label: 'Countries Reached',
      color: 'neon-cyan',
    },
    {
      icon: Award,
      value: 99,
      suffix: '%',
      label: 'Client Satisfaction',
      color: 'neon-blue',
    },
  ]

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background pointer-events-none" />
      
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
            className="inline-block text-neon-gold text-sm font-semibold tracking-widest uppercase mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our Impact
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-balance">
            <span className="text-foreground">Trusted by </span>
            <span className="text-neon-purple glow-purple">Businesses</span>
            <br />
            <span className="text-neon-cyan glow-cyan">Across Niger & Beyond</span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              icon={stat.icon}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              color={stat.color}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
