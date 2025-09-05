"use client";

import Contact from "@/components/Contact";
import ErrorMessage from "@/components/ErrorMessage";
import Hero from "@/components/Hero";
import LoadingSpinner from "@/components/LoadingSpinner";
import Navigation from "@/components/Navigation";
import NoSSR from "@/components/NoSSR";
import PortfolioTabs from "@/components/PortfolioTabs";
import Testimonials from "@/components/Testimonials";
import { useI18n } from "@/contexts/I18nContext";
import { useHero, useTestimonials } from "@/hooks/usePortfolioData";

function HomeContent() {
  const { translation, language } = useI18n();
  const { heroData, loading: heroLoading, error: heroError } = useHero();
  const {
    testimonials,
    loading: testimonialsLoading,
    error: testimonialsError,
  } = useTestimonials(language);

  if (heroLoading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-background">
        <LoadingSpinner size="lg" />
      </main>
    );
  }

  if (heroError || !heroData) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-background">
        <ErrorMessage message={heroError || translation.common.error} />
      </main>
    );
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
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
  );
}

export default function Home() {
  return (
    <NoSSR
      fallback={
        <main className="min-h-screen flex items-center justify-center bg-background">
          <LoadingSpinner size="lg" />
        </main>
      }
    >
      <HomeContent />
    </NoSSR>
  );
}
