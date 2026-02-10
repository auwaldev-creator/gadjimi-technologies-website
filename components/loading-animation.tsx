'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function LoadingAnimation() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Hide loading after 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
        >
          <div className="relative">
            {/* Rotating Logo */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="relative w-24 h-24"
            >
              {/* Outer Ring */}
              <div className="absolute inset-0 rounded-full border-4 border-neon-gold/30 border-t-neon-gold" />
              
              {/* Middle Ring */}
              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute inset-2 rounded-full border-4 border-neon-purple/30 border-r-neon-purple"
              />
              
              {/* Inner Ring */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute inset-4 rounded-full border-4 border-neon-cyan/30 border-b-neon-cyan"
              />
              
              {/* Center Core */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                }}
                className="absolute inset-8 rounded-full bg-neon-gold shadow-lg shadow-neon-gold/50"
              />
            </motion.div>

            {/* Particle Trail */}
            <div className="absolute inset-0">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-neon-cyan"
                  style={{
                    top: '50%',
                    left: '50%',
                  }}
                  animate={{
                    x: [0, Math.cos((i * Math.PI * 2) / 12) * 60],
                    y: [0, Math.sin((i * Math.PI * 2) / 12) * 60],
                    opacity: [1, 0],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.08,
                  }}
                />
              ))}
            </div>

            {/* Loading Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
            >
              <p className="text-lg font-display font-semibold">
                <span className="text-neon-gold">Loading</span>
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  ...
                </motion.span>
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
