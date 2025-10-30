"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react"
import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function PremiumFooter() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Contact Form Section */}
      <div id="project" className="container mx-auto px-4 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">
          {/* Left Side - Contact Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-balance">
              Parlons de votre <span className="font-semibold">projet</span>
            </h2>
            <p className="text-lg text-primary-foreground/80 font-light mb-12 text-pretty">
              Notre équipe d'experts est à votre disposition pour vous accompagner dans la réalisation de votre projet
              immobilier. Contactez-nous dès aujourd'hui.
            </p>

            {/* Contact Details */}
            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="size-12 rounded-full bg-primary-foreground/10 flex items-center justify-center shrink-0">
                  <Phone className="size-6" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Téléphone</p>
                  <p className="text-primary-foreground/80 font-light">+221 33 821 00 00</p>
                  <p className="text-sm text-primary-foreground/60 font-light">Lun - Ven: 8h - 18h</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="size-12 rounded-full bg-primary-foreground/10 flex items-center justify-center shrink-0">
                  <Mail className="size-6" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Email</p>
                  <p className="text-primary-foreground/80 font-light">contact@asaman.sn</p>
                  <p className="text-sm text-primary-foreground/60 font-light">Réponse sous 24h</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="size-12 rounded-full bg-primary-foreground/10 flex items-center justify-center shrink-0">
                  <MapPin className="size-6" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Siège social</p>
                  <p className="text-primary-foreground/80 font-light">Avenue Léopold Sédar Senghor</p>
                  <p className="text-primary-foreground/80 font-light">Plateau, Dakar, Sénégal</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="font-semibold mb-4">Suivez-nous</p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="size-11 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                >
                  <Facebook className="size-5" />
                </a>
                <a
                  href="#"
                  className="size-11 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                >
                  <Instagram className="size-5" />
                </a>
                <a
                  href="#"
                  className="size-11 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                >
                  <Linkedin className="size-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-card text-card-foreground rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-semibold mb-6">Envoyez-nous un message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nom complet *
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Jean Dupont"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="jean.dupont@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-background"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Téléphone
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+33 6 12 34 56 78"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-background"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  placeholder="Décrivez votre projet immobilier..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="bg-background resize-none"
                />
              </div>

              <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" size="lg">
                <Send className="size-5 mr-2" />
                Envoyer le message
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                En soumettant ce formulaire, vous acceptez notre politique de confidentialité
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <h4 className="text-xl font-semibold mb-4">PRESTIGE</h4>
              <p className="text-sm text-primary-foreground/70 font-light leading-relaxed">
                L'excellence immobilière depuis 2009. Votre partenaire de confiance pour tous vos projets de prestige.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#properties"
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    Propriétés
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    À propos
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    Témoignages
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li className="text-primary-foreground/70">Achat & Vente</li>
                <li className="text-primary-foreground/70">Gestion locative</li>
                <li className="text-primary-foreground/70">Conseil patrimonial</li>
                <li className="text-primary-foreground/70">Estimation gratuite</li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold mb-4">Informations légales</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    Mentions légales
                  </a>
                </li>
                <li>
                  <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    Politique de confidentialité
                  </a>
                </li>
                <li>
                  <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    CGV
                  </a>
                </li>
                <li>
                  <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-primary-foreground/10 text-center">
            <p className="text-sm text-primary-foreground/60 font-light">
              © 2025 Prestige Immobilier. Tous droits réservés. | Carte professionnelle n° CPI 7501 2024 000 000 001
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
