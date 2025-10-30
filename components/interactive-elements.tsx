"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface HoverCardProps {
  children: ReactNode
  className?: string
  intensity?: number
}

export function HoverCard({ children, className = "", intensity = 5 }: HoverCardProps) {
  return (
    <motion.div
      className={className}
      whileHover={{ 
        y: -intensity,
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      whileTap={{ 
        scale: 0.98,
        transition: { duration: 0.1 }
      }}
    >
      {children}
    </motion.div>
  )
}

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  intensity?: number
}

export function MagneticButton({ children, className = "", intensity = 20 }: MagneticButtonProps) {
  return (
    <motion.div
      className={className}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      whileTap={{ 
        scale: 0.95,
        transition: { duration: 0.1 }
      }}
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={0.2}
    >
      {children}
    </motion.div>
  )
}

interface PulseElementProps {
  children: ReactNode
  className?: string
  duration?: number
  scale?: number
}

export function PulseElement({ 
  children, 
  className = "", 
  duration = 2,
  scale = 1.05
}: PulseElementProps) {
  return (
    <motion.div
      className={className}
      animate={{
        scale: [1, scale, 1],
        opacity: [0.8, 1, 0.8]
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  )
}

interface ShakeElementProps {
  children: ReactNode
  className?: string
  trigger?: boolean
}

export function ShakeElement({ children, className = "", trigger = false }: ShakeElementProps) {
  return (
    <motion.div
      className={className}
      animate={trigger ? {
        x: [0, -10, 10, -10, 10, 0],
        transition: { duration: 0.5 }
      } : {}}
    >
      {children}
    </motion.div>
  )
}

interface GlowEffectProps {
  children: ReactNode
  className?: string
  color?: string
  intensity?: number
}

export function GlowEffect({ 
  children, 
  className = "", 
  color = "#81653f",
  intensity = 0.5
}: GlowEffectProps) {
  return (
    <motion.div
      className={className}
      whileHover={{
        boxShadow: `0 0 20px ${color}${Math.round(intensity * 255).toString(16).padStart(2, '0')}`,
        transition: { duration: 0.3 }
      }}
    >
      {children}
    </motion.div>
  )
}
