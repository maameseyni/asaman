"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Navigation } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const locations = [
  {
    id: 1,
    city: "Dakar",
    region: "Région de Dakar",
    properties: 24,
    coordinates: { top: "35%", left: "45%" },
    description: "Villas modernes aux Almadies et appartements de prestige au Plateau",
    contact: "+221 33 821 00 00",
  },
  {
    id: 2,
    city: "Saly",
    region: "Petite Côte",
    properties: 18,
    coordinates: { top: "55%", left: "40%" },
    description: "Villas contemporaines avec vue mer et complexes touristiques",
    contact: "+221 33 836 00 00",
  },
  {
    id: 3,
    city: "Thiès",
    region: "Région de Thiès",
    properties: 12,
    coordinates: { top: "45%", left: "35%" },
    description: "Villas traditionnelles et propriétés familiales authentiques",
    contact: "+221 33 951 00 00",
  },
  {
    id: 4,
    city: "Gorée",
    region: "Île de Gorée",
    properties: 8,
    coordinates: { top: "40%", left: "50%" },
    description: "Propriétés historiques classées au patrimoine mondial",
    contact: "+221 33 821 00 00",
  },
  {
    id: 5,
    city: "Saint-Louis",
    region: "Région de Saint-Louis",
    properties: 15,
    coordinates: { top: "25%", left: "30%" },
    description: "Maisons coloniales et propriétés historiques du patrimoine sénégalais",
    contact: "+221 33 961 00 00",
  },
]

export function InteractiveMap() {
  const [selectedLocation, setSelectedLocation] = useState<number | null>(null)

  return (
    <section className="py-24 px-4 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-balance">
            Nos <span className="font-semibold">implantations</span>
          </h2>
          <p className="text-lg text-muted-foreground font-light text-pretty">
            Présents dans les plus belles régions du Sénégal pour vous accompagner dans votre projet immobilier
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Map Visualization */}
          <div className="relative aspect-square bg-card rounded-2xl shadow-lg p-8 border border-border">
            {/* Stylized France Map Background */}
            <div className="absolute inset-8 opacity-10">
              <svg viewBox="0 0 200 200" className="w-full h-full" fill="currentColor">
                <path d="M100,20 L120,30 L140,35 L155,45 L165,60 L170,80 L175,100 L170,120 L165,135 L155,150 L140,160 L120,165 L100,170 L80,165 L60,160 L45,150 L35,135 L30,120 L25,100 L30,80 L35,60 L45,45 L60,35 L80,30 Z" />
              </svg>
            </div>

            {/* Location Markers */}
            {locations.map((location) => (
              <button
                key={location.id}
                className="absolute group"
                style={{ top: location.coordinates.top, left: location.coordinates.left }}
                onClick={() => setSelectedLocation(location.id)}
                onMouseEnter={() => setSelectedLocation(location.id)}
              >
                {/* Pulse Animation */}
                <span
                  className={`absolute inset-0 rounded-full bg-accent/30 animate-ping ${selectedLocation === location.id ? "opacity-100" : "opacity-0"}`}
                />

                {/* Marker Pin */}
                <div
                  className={`relative z-10 transition-all duration-300 ${selectedLocation === location.id ? "scale-125" : "scale-100 hover:scale-110"}`}
                >
                  <MapPin
                    className={`size-8 transition-colors ${selectedLocation === location.id ? "text-accent fill-accent" : "text-primary fill-primary"}`}
                  />
                </div>

                {/* City Label */}
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap transition-opacity ${selectedLocation === location.id ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
                >
                  <Badge className="bg-accent text-accent-foreground shadow-lg">{location.city}</Badge>
                </div>
              </button>
            ))}

            {/* Decorative Grid */}
            <div className="absolute inset-0 pointer-events-none opacity-5">
              <div className="w-full h-full grid grid-cols-8 grid-rows-8">
                {Array.from({ length: 64 }).map((_, i) => (
                  <div key={i} className="border border-foreground" />
                ))}
              </div>
            </div>
          </div>

          {/* Location Details */}
          <div className="space-y-6">
            {selectedLocation ? (
              <>
                {locations
                  .filter((loc) => loc.id === selectedLocation)
                  .map((location) => (
                    <div key={location.id} className="animate-fade-in-up">
                      <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
                        <div className="flex items-start justify-between mb-6">
                          <div>
                            <h3 className="text-3xl font-semibold mb-2">{location.city}</h3>
                            <p className="text-muted-foreground font-light">{location.region}</p>
                          </div>
                          <Badge variant="secondary" className="text-lg px-4 py-2">
                            {location.properties} biens
                          </Badge>
                        </div>

                        <p className="text-lg mb-8 text-muted-foreground font-light">{location.description}</p>

                        <div className="space-y-4">
                          <div className="flex items-center gap-3 text-foreground">
                            <div className="size-10 rounded-full bg-accent/10 flex items-center justify-center">
                              <Phone className="size-5 text-accent" />
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground font-light">Téléphone</p>
                              <p className="font-medium">{location.contact}</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3 text-foreground">
                            <div className="size-10 rounded-full bg-accent/10 flex items-center justify-center">
                              <Mail className="size-5 text-accent" />
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground font-light">Email</p>
                              <p className="font-medium">{location.city.toLowerCase()}@prestige-immobilier.fr</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3 text-foreground">
                            <div className="size-10 rounded-full bg-accent/10 flex items-center justify-center">
                              <Navigation className="size-5 text-accent" />
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground font-light">Adresse</p>
                              <p className="font-medium">Centre-ville, {location.city}</p>
                            </div>
                          </div>
                        </div>

                        <button className="w-full mt-8 px-6 py-4 bg-accent text-accent-foreground rounded-full font-medium hover:bg-accent/90 transition-all hover:scale-105">
                          Prendre rendez-vous à {location.city}
                        </button>
                      </div>
                    </div>
                  ))}
              </>
            ) : (
              <div className="bg-card rounded-2xl p-12 shadow-lg border border-border text-center">
                <div className="size-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <MapPin className="size-8 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Sélectionnez une ville</h3>
                <p className="text-muted-foreground font-light text-pretty">
                  Cliquez sur un marqueur pour découvrir nos agences et les propriétés disponibles dans chaque région
                </p>
              </div>
            )}

            {/* All Locations List */}
            <div className="grid grid-cols-2 gap-4">
              {locations.map((location) => (
                <button
                  key={location.id}
                  onClick={() => setSelectedLocation(location.id)}
                  className={`p-4 rounded-xl border transition-all ${selectedLocation === location.id ? "bg-accent text-accent-foreground border-accent" : "bg-card border-border hover:border-accent"}`}
                >
                  <p className="font-semibold mb-1">{location.city}</p>
                  <p
                    className={`text-sm ${selectedLocation === location.id ? "text-accent-foreground/80" : "text-muted-foreground"}`}
                  >
                    {location.properties} propriétés
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
