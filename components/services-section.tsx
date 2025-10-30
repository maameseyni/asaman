"use client"

import { Key, Search, FileText, TrendingUp, Shield, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const services = [
  {
    id: 1,
    icon: Search,
    title: "Recherche personnalisée",
    description: "Notre équipe d'experts identifie les propriétés qui correspondent parfaitement à vos critères et aspirations au Sénégal.",
  },
  {
    id: 2,
    icon: FileText,
    title: "Accompagnement juridique",
    description: "Un suivi complet de toutes les démarches administratives et juridiques sénégalaises pour une transaction en toute sérénité.",
  },
  {
    id: 3,
    icon: TrendingUp,
    title: "Estimation & valorisation",
    description: "Analyse approfondie du marché immobilier sénégalais pour déterminer la juste valeur de votre bien et optimiser votre investissement.",
  },
  {
    id: 4,
    icon: Key,
    title: "Gestion locative",
    description: "Service complet de gestion pour vos biens locatifs au Sénégal, de la recherche de locataires à l'entretien régulier.",
  },
  {
    id: 5,
    icon: Shield,
    title: "Conseil patrimonial",
    description: "Stratégies d'investissement personnalisées pour développer et protéger votre patrimoine immobilier au Sénégal.",
  },
  {
    id: 6,
    icon: Users,
    title: "Réseau exclusif",
    description: "Accès privilégié à des propriétés hors marché grâce à notre réseau d'acheteurs et vendeurs au Sénégal et en Afrique de l'Ouest.",
  },
]

export function ServicesSection() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section id="services" className="py-24 px-4 lg:px-8 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
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
            Nos <span className="font-semibold">services</span>
          </h2>
          <p className="text-lg text-muted-foreground font-light text-pretty">
            Une gamme complète de services immobiliers pour répondre à tous vos besoins au Sénégal
          </p>
        </motion.div>

        {/* Services Grid - 3x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group cursor-pointer"
              >
                <Card
                  className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-white relative p-0 h-64"
                >
                <CardContent className="p-6 h-64 flex flex-col justify-center bg-white">
                  {/* Icon */}
                  <div className="mb-3">
                    <div className="p-2 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-all duration-500 group-hover:scale-105 w-fit">
                      <Icon className="size-8 text-accent group-hover:text-accent/80 transition-colors duration-500" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed text-sm group-hover:text-foreground/80 transition-colors duration-300">
                    {service.description}
                  </p>
                </CardContent>
                </Card>
              </motion.div>
            )
          })}
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