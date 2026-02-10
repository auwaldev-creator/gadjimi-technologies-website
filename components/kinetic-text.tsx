'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface KineticTextProps {
  text: string
  highlightStart: number
  highlightEnd: number
  baseColor?: string
  highlightColor?: string
  className?: string
}

export function KineticText({
  text,
  highlightStart,
  highlightEnd,
  baseColor = 'text-foreground',
  highlightColor = 'text-neon-gold',
  className = '',
}: KineticTextProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const beforeText = text.slice(0, highlightStart)
  const highlightText = text.slice(highlightStart, highlightEnd)
  const afterText = text.slice(highlightEnd)

  return (
    <span ref={ref} className={className}>
      <span className={baseColor}>{beforeText}</span>
      <motion.span
        className={highlightColor}
        style={{
          opacity: useTransform(scrollYProgress, [0.3, 0.5], [0.5, 1]),
        }}
      >
        {highlightText}
      </motion.span>
      <span className={baseColor}>{afterText}</span>
    </span>
  )
}

interface SplitTextProps {
  children: string
  className?: string
}

export function SplitText({ children, className = '' }: SplitTextProps) {
  const words = children.split(' ')
  
  return (
    <span className={className}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-2">
          {word.split('').map((char, charIndex) => (
            <motion.span
              key={charIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: (wordIndex * word.length + charIndex) * 0.03,
              }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </span>
  )
}

interface GlitchTextProps {
  children: string
  className?: string
}

export function GlitchText({ children, className = '' }: GlitchTextProps) {
  return (
    <motion.span
      className={`relative inline-block ${className}`}
      whileHover="hover"
    >
      <span className="relative z-10">{children}</span>
      <motion.span
        className="absolute inset-0 text-neon-cyan"
        variants={{
          hover: {
            x: [-2, 2, -2, 2, 0],
            y: [2, -2, 2, -2, 0],
            transition: { duration: 0.3 },
          },
        }}
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)' }}
      >
        {children}
      </motion.span>
      <motion.span
        className="absolute inset-0 text-neon-purple"
        variants={{
          hover: {
            x: [2, -2, 2, -2, 0],
            y: [-2, 2, -2, 2, 0],
            transition: { duration: 0.3 },
          },
        }}
        style={{ clipPath: 'polygon(0 55%, 100% 55%, 100% 100%, 0 100%)' }}
      >
        {children}
      </motion.span>
    </motion.span>
  )
}
