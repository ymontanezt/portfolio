"use client"

import { useState, useEffect } from "react"
import type {
  Project,
  PortfolioExperience,
  Skill,
  HeroProps,
  Education,
  Certification,
} from "@/types/portfolio"
import type { Testimonial } from "@/data/mock/testimonials"
import {
  ProjectService,
  ExperienceService,
  SkillService,
  HeroService,
  EducationService,
  CertificationService,
} from "@/services/portfolioService"
import {
  MockProjectRepository,
  MockExperienceRepository,
  MockSkillRepository,
  MockHeroRepository,
  MockEducationRepository,
  MockCertificationRepository,
} from "@/repositories/mockRepositories"
import { testimonials, getTestimonialTranslations } from "@/data/mock/testimonials"
import { getProjectTranslations } from "@/data/mock/projects"
import { getExperienceTranslations } from "@/data/translations/experience-en"
import { getExperienceTranslations as getExperienceTranslationsEs } from "@/data/translations/experience-es"
import { getSkillCategoryTranslations } from "@/data/translations/skills-en"
import { getSkillCategoryTranslations as getSkillCategoryTranslationsEs } from "@/data/translations/skills-es"

// Dependency injection setup - Principio de Inversión de Dependencias (DIP)
const projectService = new ProjectService(new MockProjectRepository())
const experienceService = new ExperienceService(new MockExperienceRepository())
const skillService = new SkillService(new MockSkillRepository())
const heroService = new HeroService(new MockHeroRepository())
const educationService = new EducationService(new MockEducationRepository())
const certificationService = new CertificationService(new MockCertificationRepository())

// Custom hooks for data fetching (Single Responsibility Principle)
export function useProjects(language: string = 'es') {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true)
        const data = await projectService.getProjects()
        const translations = getProjectTranslations(language)
        
        // Aplicar traducciones a los proyectos
        const translatedProjects = data.map(project => {
          const translation = translations[project.id as keyof typeof translations]
          if (translation) {
            return {
              ...project,
              title: translation.title,
              description: translation.description,
              detailedDescription: translation.detailedDescription,
              features: translation.features,
              challenges: translation.challenges,
              metrics: {
                ...project.metrics,
                impact: translation.impact
              }
            }
          }
          return project
        })
        
        setProjects(translatedProjects)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch projects")
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [language])

  return { projects, loading, error }
}

export function useExperience(language: string = 'es') {
  const [experience, setExperience] = useState<PortfolioExperience[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        setLoading(true)
        const data = await experienceService.getExperience()
        
        // Apply translations based on language
        const translations = language === 'en' 
          ? getExperienceTranslations(language)
          : getExperienceTranslationsEs(language)
        
        const translatedData = data.map((exp, index) => {
          const keys = Object.keys(translations.positions)
          const translationKey = keys[index] as keyof typeof translations.positions
          const translation = translations.positions[translationKey]
          
          if (translation) {
            return {
              ...exp,
              role: translation.title,
              period: translation.period,
              company: translation.company,
              description: translation.description,
              techUsed: translation.technologies
            }
          }
          return exp
        })
        
        setExperience(translatedData)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch experience")
      } finally {
        setLoading(false)
      }
    }

    fetchExperience()
  }, [language])

  return { experience, loading, error }
}

export function useSkills(language: string = 'es') {
  const [skills, setSkills] = useState<Skill[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        setLoading(true)
        const data = await skillService.getSkills()
        
        // Apply category translations based on language
        const categoryTranslations = language === 'en' 
          ? getSkillCategoryTranslations(language)
          : getSkillCategoryTranslationsEs(language)
        
        const translatedData = data.map(skill => ({
          ...skill,
          category: categoryTranslations[skill.category as keyof typeof categoryTranslations] || skill.category
        }))
        
        setSkills(translatedData)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch skills")
      } finally {
        setLoading(false)
      }
    }

    fetchSkills()
  }, [language])

  return { skills, loading, error }
}

export function useHero() {
  const [heroData, setHeroData] = useState<HeroProps | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const fetchHeroData = async () => {
      try {
        setLoading(true)
        const data = await heroService.getHeroData()
        setHeroData(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch hero data")
      } finally {
        setLoading(false)
      }
    }

    fetchHeroData()
  }, [])

  // Return loading state only after component is mounted
  return { heroData, loading: mounted ? loading : false, error }
}

export function useEducation() {
  const [education, setEducation] = useState<Education[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchEducation = async () => {
      try {
        setLoading(true)
        const data = await educationService.getEducation()
        setEducation(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch education")
      } finally {
        setLoading(false)
      }
    }

    fetchEducation()
  }, [])

  return { education, loading, error }
}

export function useCertifications() {
  const [certifications, setCertifications] = useState<Certification[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchCertifications = async () => {
      try {
        setLoading(true)
        const data = await certificationService.getCertifications()
        setCertifications(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch certifications")
      } finally {
        setLoading(false)
      }
    }

    fetchCertifications()
  }, [])

  return { certifications, loading, error }
}

export function useTestimonials(language: string = 'es') {
  const [testimonialsData, setTestimonialsData] = useState<Testimonial[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setLoading(true)
        // Simular delay de API
        await new Promise(resolve => setTimeout(resolve, 500))
        const translations = getTestimonialTranslations(language)
        
        // Aplicar traducciones a los testimonios
        const translatedTestimonials = testimonials.map(testimonial => {
          const translation = translations[testimonial.id as keyof typeof translations]
          if (translation) {
            return {
              ...testimonial,
              name: translation.name,
              role: translation.role,
              company: translation.company,
              content: translation.content,
              date: translation.date
            }
          }
          return testimonial
        })
        
        setTestimonialsData(translatedTestimonials)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch testimonials")
      } finally {
        setLoading(false)
      }
    }

    fetchTestimonials()
  }, [language])

  return { testimonials: testimonialsData, loading, error }
}
