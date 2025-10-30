"use client"

import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
  duration?: number
  splitBy?: "word" | "letter" | "line"
}

export function AnimatedText({ 
  text, 
  className = "", 
  delay = 0, 
  duration = 0.6,
  splitBy = "word"
}: AnimatedTextProps) {
  const { ref, isVisible } = useScrollAnimation(0.1)
  
  const splitText = splitBy === "word" 
    ? text.split(" ") 
    : splitBy === "letter" 
    ? text.split("") 
    : text.split("\n")

  return (
    <div ref={ref} className={className}>
      {splitText.map((item, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration,
            delay: delay + index * 0.1,
            ease: "easeOut"
          }}
          className="inline-block"
        >
          {item}
          {splitBy === "word" && index < splitText.length - 1 && " "}
        </motion.span>
      ))}
    </div>
  )
}

interface AnimatedCounterProps {
  end: number
  duration?: number
  delay?: number
  suffix?: string
  className?: string
}

export function AnimatedCounter({ 
  end, 
  duration = 2, 
  delay = 0, 
  suffix = "",
  className = ""
}: AnimatedCounterProps) {
  const { ref, isVisible } = useScrollAnimation(0.1)
  
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration, delay: delay + 0.3 }}
      >
        {isVisible ? end : 0}{suffix}
      </motion.span>
    </motion.div>
  )
}
