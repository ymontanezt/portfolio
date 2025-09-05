"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote, ExternalLink, Linkedin, ChevronLeft, ChevronRight } from "lucide-react"
import { useI18n } from "@/contexts/I18nContext"
import Image from "next/image"
import { useState, useEffect } from "react"

interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  photo?: string
  content: string
  rating: number
  linkedinUrl?: string
  date: string
}

interface TestimonialsProps {
  testimonials: Testimonial[]
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  const { translation, language } = useI18n()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || !testimonials || testimonials.length === 0) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials])

  if (!testimonials || testimonials.length === 0) {
    return null
  }

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)
    setIsAutoPlaying(false)
  }

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      goToNext()
    } else if (isRightSwipe) {
      goToPrevious()
    }
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-3 h-3 ${
          i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
        }`}
      />
    ))
  }

  return (
    <section id="testimonials" className="py-12 px-4 bg-gradient-to-br from-muted/30 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold text-foreground mb-2">
            {translation.testimonials.title}
          </h2>
          <p className="text-base text-muted-foreground max-w-xl mx-auto">
            {translation.testimonials.subtitle}
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Carousel Container */}
          <div 
            className="relative overflow-hidden rounded-2xl"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="flex transition-transform duration-500 ease-in-out">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto"
                  >
                    <Card className="border-0 shadow-lg bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-sm">
                      <CardContent className="p-6">
                        <div className="text-center">
                          {/* Quote Icon */}
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                            className="flex justify-center mb-4"
                          >
                            <div className="p-2 rounded-full bg-primary/10">
                              <Quote className="w-5 h-5 text-primary" />
                            </div>
                          </motion.div>

                          {/* Rating */}
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex justify-center mb-4"
                          >
                            <div className="flex gap-1">
                              {renderStars(testimonial.rating)}
                            </div>
                          </motion.div>

                          {/* Content */}
                          <motion.blockquote
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-base md:text-lg text-foreground/90 leading-relaxed mb-6 font-medium max-w-2xl mx-auto"
                          >
                            "{testimonial.content}"
                          </motion.blockquote>

                          {/* Author */}
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex items-center justify-center gap-3"
                          >
                            {/* Photo */}
                            <div className="relative w-10 h-10">
                              {testimonial.photo ? (
                                <Image
                                  src={testimonial.photo}
                                  alt={testimonial.name}
                                  fill
                                  className="rounded-full object-cover border-2 border-primary/20 shadow-md"
                                />
                              ) : (
                                <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center shadow-md">
                                  <span className="text-primary font-bold text-sm">
                                    {testimonial.name.charAt(0)}
                                  </span>
                                </div>
                              )}
                            </div>

                            {/* Name and Role */}
                            <div className="text-left">
                              <h4 className="font-bold text-foreground text-sm">
                                {testimonial.name}
                              </h4>
                              <p className="text-muted-foreground text-xs">
                                {testimonial.role} • {testimonial.company}
                              </p>
                            </div>
                          </motion.div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-3 mt-6">
            {/* Previous Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={goToPrevious}
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors duration-300"
            >
              <ChevronLeft className="w-4 h-4" />
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex gap-1.5">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-primary scale-125"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={goToNext}
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors duration-300"
            >
              <ChevronRight className="w-4 h-4" />
            </motion.button>
          </div>

          {/* Auto-play Toggle */}
          <div className="flex justify-center mt-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                isAutoPlaying
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {isAutoPlaying ? translation.testimonials.pause : translation.testimonials.play}
            </motion.button>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <motion.a
            href="https://www.linkedin.com/in/yuri-michael-monta%C3%B1ez-tuncar-39744496/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg text-sm font-medium transition-all duration-300"
          >
            <Linkedin className="w-4 h-4" />
            {translation.testimonials.connectOnLinkedIn}
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
