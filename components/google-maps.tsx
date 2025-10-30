"use client"

import { Wrapper, Status } from "@googlemaps/react-wrapper"
import { useState, useEffect, useRef } from "react"
import { MapPin, Phone, Mail } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const locations = [
  {
    id: 1,
    city: "Dakar",
    region: "Région de Dakar",
    properties: 24,
    coordinates: { lat: 14.6928, lng: -17.4467 },
    description: "Villas modernes aux Almadies et appartements de prestige au Plateau",
    contact: "+221 33 821 00 00",
    address: "Avenue Léopold Sédar Senghor, Plateau, Dakar"
  },
  {
    id: 2,
    city: "Saly",
    region: "Petite Côte",
    properties: 18,
    coordinates: { lat: 14.4725, lng: -17.0219 },
    description: "Villas contemporaines avec vue mer et complexes touristiques",
    contact: "+221 33 836 00 00",
    address: "Zone touristique de Saly, Petite Côte"
  },
  {
    id: 3,
    city: "Thiès",
    region: "Région de Thiès",
    properties: 12,
    coordinates: { lat: 14.7894, lng: -16.9260 },
    description: "Villas traditionnelles et propriétés familiales authentiques",
    contact: "+221 33 951 00 00",
    address: "Centre-ville de Thiès"
  },
  {
    id: 4,
    city: "Gorée",
    region: "Île de Gorée",
    properties: 8,
    coordinates: { lat: 14.6708, lng: -17.3975 },
    description: "Propriétés historiques classées au patrimoine mondial",
    contact: "+221 33 821 00 00",
    address: "Île de Gorée, Dakar"
  },
  {
    id: 5,
    city: "Saint-Louis",
    region: "Région de Saint-Louis",
    properties: 15,
    coordinates: { lat: 16.0190, lng: -16.4896 },
    description: "Maisons coloniales et propriétés historiques du patrimoine sénégalais",
    contact: "+221 33 961 00 00",
    address: "Centre historique de Saint-Louis"
  },
]

const MapComponent = ({ center, zoom, onLocationSelect }: { center: { lat: number; lng: number }; zoom: number; onLocationSelect: (location: typeof locations[0]) => void }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [map, setMap] = useState<any>()

  useEffect(() => {
    if (
      ref.current &&
      !map &&
      typeof window !== "undefined" &&
      (window as any).google?.maps
    ) {
      const newMap = new (window as any).google.maps.Map(ref.current, {
        center,
        zoom,
        styles: [
          {
            featureType: "all",
            elementType: "geometry.fill",
            stylers: [{ weight: "2.00" }]
          },
          {
            featureType: "all",
            elementType: "geometry.stroke",
            stylers: [{ color: "#9c9c9c" }]
          },
          {
            featureType: "all",
            elementType: "labels.text",
            stylers: [{ visibility: "on" }]
          },
          {
            featureType: "landscape",
            elementType: "all",
            stylers: [{ color: "#f2f2f2" }]
          },
          {
            featureType: "landscape.man_made",
            elementType: "geometry.fill",
            stylers: [{ color: "#ffffff" }]
          },
          {
            featureType: "poi.park",
            elementType: "geometry.fill",
            stylers: [{ color: "#deecdb" }]
          },
          {
            featureType: "road",
            elementType: "all",
            stylers: [{ color: "#ffffff" }]
          },
          {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{ color: "#424242" }]
          },
          {
            featureType: "road.highway",
            elementType: "all",
            stylers: [{ color: "#dadada" }]
          },
          {
            featureType: "water",
            elementType: "all",
            stylers: [{ color: "#c9c9c9" }]
          }
        ]
      })
      setMap(newMap)
    }
  }, [ref, map, center, zoom])

  useEffect(() => {
    if (map && typeof window !== "undefined" && (window as any).google?.maps) {
      // Clear existing markers
      const markers: any[] = []
      
      locations.forEach((location) => {
        const marker = new (window as any).google.maps.Marker({
          position: location.coordinates,
          map,
          title: location.city,
          icon: {
            path: (window as any).google.maps.SymbolPath.CIRCLE,
            scale: 12,
            fillColor: "#81653f",
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeWeight: 3,
          },
        })

        const infoWindow = new (window as any).google.maps.InfoWindow({
          content: `
            <div class="p-4 max-w-xs">
              <h3 class="font-semibold text-lg mb-2">${location.city}</h3>
              <p class="text-sm text-gray-600 mb-2">${location.region}</p>
              <p class="text-sm mb-3">${location.description}</p>
              <div class="space-y-1">
                <p class="text-sm"><strong>Propriétés:</strong> ${location.properties}</p>
                <p class="text-sm"><strong>Contact:</strong> ${location.contact}</p>
                <p class="text-sm"><strong>Adresse:</strong> ${location.address}</p>
              </div>
            </div>
          `,
        })

        marker.addListener("click", () => {
          infoWindow.open(map, marker)
          onLocationSelect(location)
        })

        markers.push(marker)
      })
    }
  }, [map])

  return <div ref={ref} className="w-full h-[600px] rounded-2xl shadow-lg" />
}

const render = (status: Status) => {
  switch (status) {
    case Status.LOADING:
      return (
        <div className="w-full h-[600px] rounded-2xl shadow-lg bg-muted animate-pulse flex items-center justify-center">
          <div className="text-center">
            <div className="w-8 h-8 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-muted-foreground">Chargement de la carte...</p>
          </div>
        </div>
      )
    case Status.FAILURE:
      return (
        <div className="w-full h-[600px] rounded-2xl shadow-lg bg-muted flex items-center justify-center">
          <div className="text-center">
            <MapPin className="size-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">Impossible de charger la carte</p>
            <p className="text-sm text-muted-foreground mt-2">Veuillez vérifier votre connexion internet</p>
          </div>
        </div>
      )
    default:
      return <></>
  }
}

export function GoogleMaps() {
  const center: { lat: number; lng: number } = { lat: 14.4974, lng: -16.3166 } // Centre du Sénégal
  const zoom = 7
  const [selectedLocation, setSelectedLocation] = useState<typeof locations[0] | null>(null)
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section className="py-24 px-4 lg:px-8 bg-muted/30">
      <div ref={ref} className="container mx-auto">
        {/* Section Header */}
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-balance">
            Nos <span className="font-semibold">implantations</span>
          </h2>
          <p className="text-lg text-muted-foreground font-light text-pretty">
            Présents dans les plus belles régions du Sénégal pour vous accompagner dans votre projet immobilier
          </p>
        </motion.div>

        <motion.div 
          className="hidden lg:grid gap-12 items-stretch max-w-7xl mx-auto" 
          style={{ gridTemplateColumns: selectedLocation ? '1fr 1fr 1fr' : '1fr 1fr' }}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {/* Map */}
          <motion.div 
            className="order-2 lg:order-1 flex flex-col"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <Wrapper apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""} render={render}>
              <MapComponent center={center} zoom={zoom} onLocationSelect={setSelectedLocation} />
            </Wrapper>
          </motion.div>

          {/* Selected Location Info */}
          {selectedLocation && (
            <div className="order-1 lg:order-2 flex flex-col">
              <div className="flex-1 p-6 bg-card rounded-xl border border-border">
                <div className="flex items-start gap-4 h-full">
                  <div className="p-3 rounded-full bg-accent/10 shrink-0">
                    <MapPin className="size-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{selectedLocation.city}</h3>
                    <p className="text-muted-foreground mb-3">{selectedLocation.region}</p>
                    <p className="text-sm mb-4">{selectedLocation.description}</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Phone className="size-4 text-accent" />
                        <span className="text-sm">{selectedLocation.contact}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="size-4 text-accent" />
                        <span className="text-sm">{selectedLocation.address}</span>
                      </div>
                    </div>
                    <Badge className="mt-4 bg-accent/10 text-accent">
                      {selectedLocation.properties} propriétés
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Locations List */}
          <div className={`order-1 lg:order-2 flex flex-col ${selectedLocation ? 'lg:order-3' : ''}`}>
            <div className="flex-1 space-y-3">
              {locations.map((location) => (
                <div
                  key={location.id}
                  onClick={() => setSelectedLocation(location)}
                  className={`p-4 bg-card rounded-xl border transition-colors cursor-pointer group h-28 flex items-center ${
                    selectedLocation?.id === location.id 
                      ? 'border-accent bg-accent/5' 
                      : 'border-border hover:border-accent/50'
                  }`}
                >
                  <div className="flex items-center gap-4 w-full">
                    <div className={`p-2 rounded-full transition-colors shrink-0 ${
                      selectedLocation?.id === location.id 
                        ? 'bg-accent/20' 
                        : 'bg-accent/10 group-hover:bg-accent/20'
                    }`}>
                      <MapPin className="size-5 text-accent" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg font-semibold mb-1 truncate">{location.city}</h4>
                      <p className="text-sm text-muted-foreground mb-1 truncate">{location.region}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Phone className="size-3" />
                          <span className="truncate">{location.contact}</span>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {location.properties}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Mobile Layout - Full Width Cards Above Map */}
        <div className="block lg:hidden">
          <motion.div 
            className="space-y-3 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            {locations.map((location) => (
              <div
                key={location.id}
                onClick={() => setSelectedLocation(location)}
                className={`p-4 bg-card rounded-xl border transition-colors cursor-pointer group h-28 flex items-center w-full ${
                  selectedLocation?.id === location.id 
                    ? 'border-accent bg-accent/5' 
                    : 'border-border hover:border-accent/50'
                }`}
              >
                <div className="flex items-center gap-4 w-full">
                  <div className={`p-2 rounded-full transition-colors shrink-0 ${
                    selectedLocation?.id === location.id 
                      ? 'bg-accent/20' 
                      : 'bg-accent/10 group-hover:bg-accent/20'
                  }`}>
                    <MapPin className="size-5 text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-lg font-semibold mb-1 truncate">{location.city}</h4>
                    <p className="text-sm text-muted-foreground mb-1 truncate">{location.region}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Phone className="size-3" />
                        <span className="truncate">{location.contact}</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {location.properties}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Map Below Cards on Mobile */}
          <motion.div 
            className="w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          >
            <Wrapper apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""} render={render}>
              <MapComponent center={center} zoom={zoom} onLocationSelect={setSelectedLocation} />
            </Wrapper>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
