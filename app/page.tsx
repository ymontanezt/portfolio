"use client"

import Navigation from "@/components/Navigation"
import Hero from "@/components/Hero"
import PortfolioTabs from "@/components/PortfolioTabs"
import Testimonials from "@/components/Testimonials"
import Contact from "@/components/Contact"
import StructuredData from "@/components/StructuredData"
import { useHero, useTestimonials } from "@/hooks/usePortfolioData"
import LoadingSpinner from "@/components/LoadingSpinner"
import ErrorMessage from "@/components/ErrorMessage"
import { useI18n } from "@/contexts/I18nContext"
import HydrationBoundary from "@/components/HydrationBoundary"

export default function Home() {
  const { translation, language } = useI18n()
  const { heroData, loading: heroLoading, error: heroError } = useHero()
  const { testimonials, loading: testimonialsLoading, error: testimonialsError } = useTestimonials(language)

  return (
    <HydrationBoundary fallback={
      <main className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </main>
    }>
      {heroLoading ? (
        <main className="min-h-screen flex items-center justify-center">
          <LoadingSpinner size="lg" />
        </main>
      ) : heroError || !heroData ? (
        <main className="min-h-screen flex items-center justify-center">
          <ErrorMessage message={heroError || translation.common.error} />
        </main>
      ) : (
        <>
          <Navigation />
          <main className="min-h-screen">
            <Hero {...heroData} />
            <PortfolioTabs />
            <Testimonials testimonials={testimonials} />
            <Contact
              email="yuri.montanez@michcode.dev"
              linkedin="https://www.linkedin.com/in/yuri-michael-monta%C3%B1ez-tuncar-39744496/"
              github="https://github.com/ymontanez"
              portfolioUrl="https://michcode.dev"
            />
          </main>
          
          {/* Structured Data for SEO - Temporalmente comentado para debug */}
          {/* <StructuredData type="person" />
          <StructuredData type="website" />
          <StructuredData type="portfolio" /> */}
        </>
      )}
    </HydrationBoundary>
  )
}
