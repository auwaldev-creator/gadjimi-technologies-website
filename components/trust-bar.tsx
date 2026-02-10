'use client'

import { motion } from 'framer-motion'
import { Shield, CheckCircle2 } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export function TrustBar() {
  return (
    <section className="relative py-12 border-y border-core-orange/20 bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 text-center"
        >
          {/* Shield Icon with Animation */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="relative"
          >
            <div className="absolute inset-0 bg-core-orange/20 blur-xl rounded-full" />
            <Shield className="w-16 h-16 text-core-orange relative z-10" strokeWidth={1.5} />
          </motion.div>

          {/* Text Content */}
          <div className="space-y-2">
            <Badge
              variant="outline"
              className="border-core-orange text-core-orange px-4 py-2 text-sm font-semibold mb-2"
            >
              <CheckCircle2 className="w-4 h-4 mr-2" />
              OFFICIALLY LICENSED
            </Badge>
            
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-balance">
              <span className="text-foreground">Licensed & Regulated by the </span>
              <span className="text-core-orange glow-orange">Niger Republic Government</span>
            </h2>
            
            <p className="text-sm md:text-base text-muted-foreground italic">
              Licencié par le Gouvernement du Niger
            </p>
          </div>

          {/* Decorative Glow */}
          <motion.div
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-gradient-to-r from-core-orange/5 via-core-coral/5 to-core-gold/5 pointer-events-none"
          />
        </motion.div>
      </div>
    </section>
  )
}
