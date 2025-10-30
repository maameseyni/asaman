"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      // Fermer le menu mobile lors du scroll
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isMobileMenuOpen])

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <a href="/" className="flex items-center group cursor-pointer">
            <Image
              src={isScrolled ? "/ASAMAN.png" : "/ASAMAN_BLANC.png"}
              alt="ASAMAN"
              width={180}
              height={65}
              className={`w-auto object-contain h-[80px] transition-all duration-500 ease-out group-hover:scale-105 ${
                isScrolled ? "drop-shadow-md" : "drop-shadow-[0_2px_8px_rgba(255,255,255,0.3)]"
              }`}
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <motion.div 
            className="hidden md:flex items-center gap-10"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.a
              href="#properties"
              className={`text-lg font-medium transition-all duration-300 relative group ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative inline-block group-hover:tracking-wide transition-all duration-300">
                Propriétés
                <span
                  className={`absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${
                    isScrolled ? "bg-accent" : "bg-white"
                  }`}
                />
              </span>
            </motion.a>
            <a
              href="#services"
              className={`text-lg font-medium transition-all duration-300 relative group ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              <span className="relative inline-block group-hover:tracking-wide transition-all duration-300">
                Services
                <span
                  className={`absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${
                    isScrolled ? "bg-accent" : "bg-white"
                  }`}
                />
              </span>
            </a>
            <a
              href="#about"
              className={`text-lg font-medium transition-all duration-300 relative group ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              <span className="relative inline-block group-hover:tracking-wide transition-all duration-300">
                À propos
                <span
                  className={`absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${
                    isScrolled ? "bg-accent" : "bg-white"
                  }`}
                />
              </span>
            </a>
            <a
              href="#testimonials"
              className={`text-lg font-medium transition-all duration-300 relative group ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              <span className="relative inline-block group-hover:tracking-wide transition-all duration-300">
                Témoignages
                <span
                  className={`absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${
                    isScrolled ? "bg-accent" : "bg-white"
                  }`}
                />
              </span>
            </a>
            <a href="#project">
              <Button className="rounded-full px-8 py-3 text-lg font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                Nous contacter
              </Button>
            </a>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-colors ${isScrolled ? "text-foreground" : "text-white"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 z-50 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Content */}
            <motion.div 
              className="relative z-10 w-80 max-w-[85vw] h-auto max-h-[90vh] bg-background/95 backdrop-blur-md rounded-r-2xl shadow-2xl"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-border">
                  <Image
                    src="/ASAMAN.png"
                    alt="ASAMAN"
                    width={180}
                    height={65}
                    className="w-auto h-[80px]"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="rounded-full"
                  >
                    <X size={24} />
                  </Button>
                </div>

                {/* Menu Items */}
                <div className="flex flex-col px-6 py-8 space-y-6">
                  <motion.a
                    href="#properties"
                    className="text-xl font-medium text-foreground hover:text-accent transition-colors py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    Propriétés
                  </motion.a>
                  <motion.a
                    href="#services"
                    className="text-xl font-medium text-foreground hover:text-accent transition-colors py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    Services
                  </motion.a>
                  <motion.a
                    href="#about"
                    className="text-xl font-medium text-foreground hover:text-accent transition-colors py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    À propos
                  </motion.a>
                  <motion.a
                    href="#testimonials"
                    className="text-xl font-medium text-foreground hover:text-accent transition-colors py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    Témoignages
                  </motion.a>
                </div>

                {/* CTA Button */}
                <motion.div 
                  className="p-6 border-t border-border"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <a href="#project" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button className="w-full rounded-full px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                      Nous contacter
                    </Button>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}