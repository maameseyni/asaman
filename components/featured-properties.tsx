"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Bed, Bath, Maximize, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const properties = [
  {
    id: 1,
    title: "Villa Moderne Almadies",
    location: "Dakar, Sénégal",
    price: "850 000 000 FCFA",
    image: "/modern-luxury-villa-with-pool-french-riviera.jpg",
    beds: 5,
    baths: 4,
    area: "450 m²",
    tags: ["Vue océan", "Piscine", "Nouveau"],
  },
  {
    id: 2,
    title: "Penthouse Plateau",
    location: "Dakar Plateau, Sénégal",
    price: "650 000 000 FCFA",
    image: "/luxury-penthouse-paris-eiffel-tower-view.jpg",
    beds: 4,
    baths: 3,
    area: "320 m²",
    tags: ["Vue mer", "Terrasse"],
  },
  {
    id: 3,
    title: "Appartement Fann",
    location: "Fann, Dakar, Sénégal",
    price: "350 000 000 FCFA",
    image: "/haussmann-apartment-paris-high-ceilings-moldings.jpg",
    beds: 3,
    baths: 2,
    area: "180 m²",
    tags: ["Rénové", "Climatisé"],
  },
  {
    id: 4,
    title: "Villa Historique Gorée",
    location: "Île de Gorée, Sénégal",
    price: "1 200 000 000 FCFA",
    image: "/french-chateau-provence-lavender-fields.jpg",
    beds: 8,
    baths: 6,
    area: "850 m²",
    tags: ["Historique", "Patrimoine", "Exclusif"],
  },
  {
    id: 5,
    title: "Villa Contemporaine Saly",
    location: "Saly, Sénégal",
    price: "750 000 000 FCFA",
    image: "/contemporary-villa-lake-geneva-mountains.jpg",
    beds: 6,
    baths: 5,
    area: "520 m²",
    tags: ["Vue mer", "Spa", "Nouveau"],
  },
  {
    id: 6,
    title: "Villa Traditionnelle Thiès",
    location: "Thiès, Sénégal",
    price: "450 000 000 FCFA",
    image: "/provencal-mas-stone-house-olive-trees.jpg",
    beds: 5,
    baths: 4,
    area: "380 m²",
    tags: ["Authentique", "Jardin"],
  },
]

export function FeaturedProperties() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [itemsPerView, setItemsPerView] = useState(3)
  const { ref, isVisible } = useScrollAnimation(0.1)
  
  useEffect(() => {
    const updateItemsPerView = () => {
      let newItemsPerView = 1
      if (window.innerWidth >= 1280) { // xl breakpoint
        newItemsPerView = 3
      } else if (window.innerWidth >= 768) { // md breakpoint
        newItemsPerView = 2
      }
      
      setItemsPerView(newItemsPerView)
      const maxIdx = Math.max(0, properties.length - newItemsPerView)
      setCurrentIndex((currentIdx) => Math.min(currentIdx, maxIdx))
    }
    
    updateItemsPerView()
    window.addEventListener('resize', updateItemsPerView)
    return () => window.removeEventListener('resize', updateItemsPerView)
  }, [])

  const maxIndex = Math.max(0, properties.length - itemsPerView)

  const nextProperties = () => {
    setCurrentIndex((prev) => Math.min(prev + itemsPerView, maxIndex))
  }

  const prevProperties = () => {
    setCurrentIndex((prev) => Math.max(prev - itemsPerView, 0))
  }

  const visibleProperties = properties.slice(currentIndex, currentIndex + itemsPerView)

  return (
    <section id="properties" className="py-24 px-4 lg:px-8 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-balance">
            Propriétés <span className="font-semibold">d'exception</span>
          </h2>
          <p className="text-lg text-muted-foreground font-light text-pretty">
            Une sélection exclusive de biens immobiliers prestigieux, choisis avec soin pour leur caractère unique et
            leur emplacement privilégié
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Properties Carousel */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            {/* Navigation Buttons - Centered on Cards Height */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-20 z-20 hidden xl:flex items-center">
              <Button
                variant="outline"
                size="icon"
                onClick={prevProperties}
                disabled={currentIndex === 0}
                className="rounded-full h-14 w-14 bg-background/95 backdrop-blur-md border-border shadow-xl hover:bg-accent hover:text-accent-foreground hover:border-accent hover:scale-110 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <ChevronLeft className="size-6" />
              </Button>
            </div>

            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-20 z-20 hidden xl:flex items-center">
              <Button
                variant="outline"
                size="icon"
                onClick={nextProperties}
                disabled={currentIndex >= maxIndex}
                className="rounded-full h-14 w-14 bg-background/95 backdrop-blur-md border-border shadow-xl hover:bg-accent hover:text-accent-foreground hover:border-accent hover:scale-110 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <ChevronRight className="size-6" />
              </Button>
            </div>
            {visibleProperties.map((property, index) => (
              <motion.div
                key={`${property.id}-${currentIndex}`}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group cursor-pointer"
              >
                <Card
                  className="overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 bg-card relative p-0 h-full"
                  onMouseEnter={() => setHoveredId(property.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                {/* Image Container */}
                <div className="relative h-80 md:h-96 overflow-hidden">
                    <Image
                      src={property.image || "/placeholder.svg"}
                      alt={property.title}
                      fill
                      className="object-cover object-[center_top] transition-transform duration-1000 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      style={{ objectPosition: 'center 20%' }}
                    />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-700" />

                  {/* Tags */}
                  <div className="absolute top-6 left-6 flex flex-wrap gap-2 z-10">
                    {property.tags.map((tag) => (
                      <Badge 
                        key={tag} 
                        className="bg-white/95 text-foreground backdrop-blur-md border-0 shadow-lg px-3 py-1 text-sm font-medium"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="absolute bottom-6 left-6 z-10">
                    <p className="text-3xl md:text-4xl font-bold text-white mb-1 drop-shadow-lg">
                      {property.price}
                    </p>
                  </div>

                  {/* Overlay Hover Effect */}
                  <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>

                <CardContent className="p-6 pt-0">
                  {/* Title & Location */}
                  <div className="mb-4">
                    <h3 className="text-xl md:text-2xl font-semibold mb-2 group-hover:text-accent transition-colors duration-300">
                      {property.title}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="size-4" />
                      <span className="text-sm font-light">{property.location}</span>
                    </div>
                  </div>

                  {/* Property Details */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <Bed className="size-4" />
                        <span className="font-medium">{property.beds}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Bath className="size-4" />
                        <span className="font-medium">{property.baths}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Maximize className="size-4" />
                        <span className="font-medium">{property.area}</span>
                      </div>
                    </div>

                    {/* View Details Arrow */}
                    <div
                      className={`transition-all duration-500 ${
                        hoveredId === property.id 
                          ? "translate-x-1 scale-105" 
                          : ""
                      }`}
                    >
                      <div className="p-2 rounded-full bg-accent/10 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                        <ArrowRight className="size-4 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
                      </div>
                    </div>
                  </div>
                </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8 xl:hidden">
            <Button
              variant="outline"
              size="icon"
              onClick={prevProperties}
              disabled={currentIndex === 0}
              className="rounded-full h-10 w-10 bg-background border-border shadow-lg hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300 disabled:opacity-50"
            >
              <ChevronLeft className="size-4" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {Array.from({ length: Math.ceil(properties.length / itemsPerView) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index * itemsPerView)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    Math.floor(currentIndex / itemsPerView) === index
                      ? "w-6 bg-accent"
                      : "w-2 bg-border hover:bg-accent/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextProperties}
              disabled={currentIndex >= maxIndex}
              className="rounded-full h-10 w-10 bg-background border-border shadow-lg hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300 disabled:opacity-50"
            >
              <ChevronRight className="size-4" />
            </Button>
          </div>

          {/* Desktop Dots Indicator */}
          <div className="hidden xl:flex items-center justify-center gap-2 mt-12">
            {Array.from({ length: Math.ceil(properties.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * 3)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / 3) === index
                    ? "w-6 bg-accent"
                    : "w-2 bg-border hover:bg-accent/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Button className="rounded-full px-10 py-6 text-lg font-medium shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 bg-accent text-accent-foreground hover:bg-accent/90">
            Voir toutes les propriétés
            <ArrowRight className="ml-2 size-5" />
          </Button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}