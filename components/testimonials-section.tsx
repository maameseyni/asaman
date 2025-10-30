"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const testimonials = [
  {
    id: 1,
    name: "Aminata Diop",
    role: "Propriétaire à Dakar",
    image: "/elegant-woman-professional-portrait.jpg",
    rating: 5,
    text: "Une expérience exceptionnelle du début à la fin. L'équipe d'ASAMAN a su comprendre exactement ce que nous recherchions et nous a trouvé la villa de nos rêves aux Almadies. Professionnalisme et discrétion remarquables.",
  },
  {
    id: 2,
    name: "Moussa Fall",
    role: "Investisseur à Saly",
    image: "/distinguished-businessman-portrait.jpg",
    rating: 5,
    text: "Après avoir travaillé avec plusieurs agences, j'ai enfin trouvé des professionnels à la hauteur. Leur connaissance du marché immobilier sénégalais est impressionnante. Ils ont géré toute la transaction avec une efficacité remarquable.",
  },
  {
    id: 3,
    name: "Fatou Sarr",
    role: "Acheteuse à Thiès",
    image: "/sophisticated-woman-portrait.jpg",
    rating: 5,
    text: "Le service personnalisé et l'attention aux détails font toute la différence. L'équipe a été présente à chaque étape, répondant à toutes nos questions avec patience et expertise. Je recommande vivement leurs services.",
  },
  {
    id: 4,
    name: "Ibrahima Ndiaye",
    role: "Vendeur à Gorée",
    image: "/mature-gentleman-portrait.jpg",
    rating: 5,
    text: "Vendre une propriété familiale historique n'est jamais facile, mais ASAMAN a rendu le processus fluide et transparent. Leur stratégie de valorisation a dépassé nos attentes. Une équipe digne de confiance.",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section id="testimonials" className="py-24 px-4 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-balance">
            Ils nous font <span className="font-semibold">confiance</span>
          </h2>
          <p className="text-lg text-muted-foreground font-light text-pretty">
            Découvrez les témoignages de nos clients qui ont réalisé leurs projets immobiliers avec Prestige
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-5xl mx-auto">
          <Card className="border-0 shadow-2xl bg-card overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-5 gap-0">
                {/* Image Side */}
                <div className="md:col-span-2 relative h-64 md:h-auto">
                  <img
                    src={currentTestimonial.image || "/placeholder.svg"}
                    alt={currentTestimonial.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-card via-card/50 to-transparent" />
                </div>

                {/* Content Side */}
                <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
                  {/* Quote Icon */}
                  <Quote className="size-12 text-accent/20 mb-6" />

                  {/* Rating */}
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                      <Star key={i} className="size-5 fill-accent text-accent" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-lg md:text-xl font-light text-foreground mb-8 leading-relaxed text-pretty">
                    "{currentTestimonial.text}"
                  </p>

                  {/* Author Info */}
                  <div className="mb-8">
                    <p className="font-semibold text-lg">{currentTestimonial.name}</p>
                    <p className="text-muted-foreground font-light">{currentTestimonial.role}</p>
                  </div>

                  {/* Navigation */}
                  <div className="flex items-center gap-4">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={prevTestimonial}
                      className="rounded-full hover:bg-accent hover:text-accent-foreground hover:border-accent bg-transparent"
                    >
                      <ChevronLeft className="size-5" />
                    </Button>

                    {/* Dots Indicator */}
                    <div className="flex gap-2">
                      {testimonials.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentIndex(index)}
                          className={`h-2 rounded-full transition-all ${index === currentIndex ? "w-8 bg-accent" : "w-2 bg-border hover:bg-accent/50"}`}
                        />
                      ))}
                    </div>

                    <Button
                      variant="outline"
                      size="icon"
                      onClick={nextTestimonial}
                      className="rounded-full hover:bg-accent hover:text-accent-foreground hover:border-accent bg-transparent"
                    >
                      <ChevronRight className="size-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mt-16">
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-semibold text-accent mb-2">500+</p>
            <p className="text-muted-foreground font-light">Propriétés vendues</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-semibold text-accent mb-2">98%</p>
            <p className="text-muted-foreground font-light">Clients satisfaits</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-semibold text-accent mb-2">15+</p>
            <p className="text-muted-foreground font-light">Années d'expérience</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-semibold text-accent mb-2">4</p>
            <p className="text-muted-foreground font-light">Agences en France</p>
          </div>
        </div>
      </div>
    </section>
  )
}
