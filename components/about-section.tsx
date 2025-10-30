"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Award, Users, Building, Heart, Target, Shield } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function AboutSection() {
  const { ref, isVisible } = useScrollAnimation(0.1)
  
  const values = [
    {
      icon: Heart,
      title: "Passion",
      description: "Notre amour pour l'immobilier sénégalais se traduit par un service exceptionnel et une connaissance approfondie du marché local."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Nous nous efforçons d'atteindre l'excellence dans chaque transaction, chaque conseil, chaque accompagnement au Sénégal."
    },
    {
      icon: Shield,
      title: "Confiance",
      description: "La discrétion et la confiance sont les piliers de notre relation avec nos clients sénégalais et internationaux."
    }
  ]

  const stats = [
    { number: "300+", label: "Propriétés vendues" },
    { number: "12+", label: "Années d'expérience" },
    { number: "99%", label: "Clients satisfaits" },
    { number: "3", label: "Agences au Sénégal" }
  ]

  return (
    <section id="about" className="py-24 px-4 lg:px-8 bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-balance">
            À <span className="font-semibold">propos</span> de nous
          </h2>
          <p className="text-lg text-muted-foreground font-light text-pretty">
            Depuis plus de 12 ans, ASAMAN redéfinit l'excellence dans l'immobilier de prestige au Sénégal
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-20">
          {/* Content */}
          <div className="space-y-8 text-center">
            <h3 className="text-3xl font-semibold mb-8">
              Une expertise reconnue dans l'immobilier sénégalais
            </h3>
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              Fondée en 2012, ASAMAN s'est imposée comme la référence incontournable de l'immobilier de prestige au Sénégal. 
              Notre équipe d'experts accompagne une clientèle exigeante dans la recherche et la vente de propriétés d'exception.
            </p>
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              De Dakar à Saly, en passant par l'Île de Gorée et Thiès, nous maîtrisons les marchés les plus 
              prestigieux du Sénégal et offrons un service sur-mesure adapté aux besoins de chaque client.
            </p>
            
            {/* Values */}
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <div key={index} className="text-center">
                    <div className="p-4 rounded-2xl bg-accent/10 w-fit mx-auto mb-4">
                      <Icon className="size-8 text-accent" />
                    </div>
                    <h4 className="font-semibold text-lg mb-2">{value.title}</h4>
                    <p className="text-sm text-muted-foreground font-light">{value.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div ref={ref} className="bg-muted/30 rounded-3xl p-12">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h3 className="text-3xl font-semibold mb-4">Nos chiffres parlent d'eux-mêmes</h3>
            <p className="text-lg text-muted-foreground font-light">
              Une réussite mesurée par la satisfaction de nos clients
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.8 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.p 
                  className="text-4xl md:text-5xl font-bold text-accent mb-2"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.1 + 0.3,
                    ease: "easeOut"
                  }}
                >
                  {stat.number}
                </motion.p>
                <motion.p 
                  className="text-muted-foreground font-light"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1 + 0.5,
                    ease: "easeOut"
                  }}
                >
                  {stat.label}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-semibold mb-4">Notre équipe d'experts</h3>
            <p className="text-lg text-muted-foreground font-light">
              Des professionnels passionnés à votre service au Sénégal
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="relative w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden bg-accent/10 flex items-center justify-center">
                  <Users className="size-12 text-accent" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Aminata Diop</h4>
                <p className="text-accent font-medium mb-3">Directrice Générale</p>
                <p className="text-sm text-muted-foreground font-light">
                  12 ans d'expérience dans l'immobilier de prestige au Sénégal
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="relative w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden bg-accent/10 flex items-center justify-center">
                  <Building className="size-12 text-accent" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Moussa Fall</h4>
                <p className="text-accent font-medium mb-3">Directeur Commercial</p>
                <p className="text-sm text-muted-foreground font-light">
                  Spécialiste des propriétés de la Petite Côte et de Saly
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="relative w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden bg-accent/10 flex items-center justify-center">
                  <Award className="size-12 text-accent" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Fatou Sarr</h4>
                <p className="text-accent font-medium mb-3">Conseillère Senior</p>
                <p className="text-sm text-muted-foreground font-light">
                  Experte en investissements immobiliers de prestige au Sénégal
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button className="rounded-full px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            Découvrir notre expertise
          </Button>
        </div>
      </div>
    </section>
  )
}
