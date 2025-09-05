export interface HeroProps {
  name: string
  role: string
  tagline: string
  photoUrl?: string
}

export interface ProjectMetrics {
  developmentTime: string
  performance: number
  complexity: "Low" | "Medium" | "High" | "Expert"
  impact: string
  users?: string
  lighthouse?: {
    performance: number
    accessibility: number
    bestPractices: number
    seo: number
  }
}

export interface Project {
  id: string
  title: string
  description: string
  imageUrl: string
  techStack: string[]
  liveUrl?: string
  repoUrl?: string
  type: "Personal" | "Professional"
  isPrivate?: boolean
  metrics?: ProjectMetrics
  detailedDescription?: string
  features?: string[]
  challenges?: string[]
  images?: string[]
}

export interface Experience {
  id: string
  role: string
  company: string
  period: string
  location: string
  description: string[]
  techUsed?: string[]
}

// Alias for backward compatibility
export type PortfolioExperience = Experience

export interface Skill {
  id: string
  name: string
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert"
  category: string
}

export interface Education {
  id: string
  degree: string
  institution: string
  period: string
  description: string
  location: string
  gpa?: string
  relevantCourses?: string[]
}

export interface Certification {
  id: string
  name: string
  issuer: string
  date: string
  credentialId?: string
  description: string
  skills: string[]
  verificationUrl?: string
}

export interface ContactProps {
  email: string
  linkedin?: string
  github?: string
  portfolioUrl?: string
}
