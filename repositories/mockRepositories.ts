import type { Project, PortfolioExperience, Skill, HeroProps, Education, Certification } from "@/types/portfolio"
import type {
  IProjectRepository,
  IExperienceRepository,
  ISkillRepository,
  IHeroRepository,
  IEducationRepository,
  ICertificationRepository,
} from "@/services/portfolioService"
import { mockProjects } from "@/data/mock/projects"
import { mockExperience } from "@/data/mock/experience"
import { mockSkills } from "@/data/mock/skills"
import { mockHeroData } from "@/data/mock/hero"
import { mockEducation } from "@/data/mock/education"
import { mockCertifications } from "@/data/mock/certifications"

// Mock repositories implementing the interfaces
export class MockProjectRepository implements IProjectRepository {
  async getAllProjects(): Promise<Project[]> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 100))
    return mockProjects
  }

  async getProjectsByType(type: "Professional" | "Personal"): Promise<Project[]> {
    await new Promise((resolve) => setTimeout(resolve, 100))
    return mockProjects.filter((project) => project.type === type)
  }
}

export class MockExperienceRepository implements IExperienceRepository {
  async getAllExperience(): Promise<PortfolioExperience[]> {
    await new Promise((resolve) => setTimeout(resolve, 100))
    return mockExperience
  }
}

export class MockSkillRepository implements ISkillRepository {
  async getAllSkills(): Promise<Skill[]> {
    await new Promise((resolve) => setTimeout(resolve, 100))
    return mockSkills
  }

  async getSkillsByCategory(category: string): Promise<Skill[]> {
    await new Promise((resolve) => setTimeout(resolve, 100))
    return mockSkills.filter((skill) => skill.category === category)
  }
}

export class MockHeroRepository implements IHeroRepository {
  async getHeroData(): Promise<HeroProps> {
    await new Promise((resolve) => setTimeout(resolve, 100))
    return mockHeroData
  }
}

export class MockEducationRepository implements IEducationRepository {
  async getAllEducation(): Promise<Education[]> {
    await new Promise((resolve) => setTimeout(resolve, 100))
    return mockEducation
  }
}

export class MockCertificationRepository implements ICertificationRepository {
  async getAllCertifications(): Promise<Certification[]> {
    await new Promise((resolve) => setTimeout(resolve, 100))
    return mockCertifications
  }
}
