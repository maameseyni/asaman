"use client"

import { motion } from "framer-motion"
import { useParallax } from "@/hooks/use-scroll-animation"

interface ParallaxSectionProps {
  children: React.ReactNode
  speed?: number
  className?: string
}

export function ParallaxSection({ children, speed = 0.5, className = "" }: ParallaxSectionProps) {
  const y = useParallax(speed)
  
  return (
    <motion.div
      className={className}
      style={{ y }}
    >
      {children}
    </motion.div>
  )
}

interface RevealSectionProps {
  children: React.ReactNode
  direction?: "up" | "down" | "left" | "right"
  delay?: number
  duration?: number
  className?: string
}

export function RevealSection({ 
  children, 
  direction = "up", 
  delay = 0, 
  duration = 0.8,
  className = ""
}: RevealSectionProps) {
  const directionMap = {
    up: { y: 50 },
    down: { y: -50 },
    left: { x: 50 },
    right: { x: -50 }
  }

  return (
    <motion.div
      className={className}
      initial={{ 
        opacity: 0, 
        ...directionMap[direction]
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0 
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration,
        delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  )
}

interface FloatingElementProps {
  children: React.ReactNode
  intensity?: number
  duration?: number
  className?: string
}

export function FloatingElement({ 
  children, 
  intensity = 10, 
  duration = 3,
  className = ""
}: FloatingElementProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -intensity, 0],
        rotate: [0, 1, -1, 0]
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
