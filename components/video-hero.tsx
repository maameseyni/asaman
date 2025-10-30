"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"
import { motion } from "framer-motion"
import { useParallax } from "@/hooks/use-scroll-animation"

export function VideoHero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const parallaxOffset = useParallax(0.3)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen h-screen w-full overflow-hidden">
      {/* Video Background with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: parallaxOffset }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center"
          poster="/luxury-modern-villa-aerial-view.jpg"
          style={{ 
            minHeight: '100vh',
            minWidth: '100vw',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: 'scale(1.1)',
            transformOrigin: 'center center'
          }}
        >
          <source src="/fond_ASAMAN.mp4" type="video/mp4" />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-5xl"
        >
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-6 tracking-tight text-balance"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          >
            Vivez l'immobilier
            <br />
            <span className="font-semibold">autrement</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-white/90 font-light mb-12 max-w-2xl mx-auto text-pretty"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            Découvrez une sélection exclusive de propriétés d'exception au Sénégal qui redéfinissent le luxe et l'élégance
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          >
            <motion.button 
              className="px-8 py-4 bg-white text-foreground rounded-full font-medium hover:bg-white/90 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Découvrir nos biens
            </motion.button>
            <motion.button 
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-light hover:bg-white/10 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Prendre rendez-vous
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="text-white" size={32} />
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          section {
            height: 100vh !important;
            min-height: 100vh !important;
          }
          video {
            min-height: 100vh !important;
            min-width: 100vw !important;
            width: 100vw !important;
            height: 100vh !important;
            object-fit: cover !important;
            object-position: center center !important;
            transform: scale(1.15) !important;
            transform-origin: center center !important;
          }
        }
        @media (max-width: 480px) {
          video {
            transform: scale(1.2) !important;
          }
        }
      `}</style>
    </section>
  )
}
