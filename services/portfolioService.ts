import type {
  Certification,
  Education,
  HeroProps,
  PortfolioExperience,
  Project,
  Skill,
} from "@/types/portfolio";

// Abstract interfaces for data access (Dependency Inversion Principle)
export interface IProjectRepository {
  getAllProjects(): Promise<Project[]>;
  getProjectsByType(type: "Professional" | "Personal"): Promise<Project[]>;
}

export interface IExperienceRepository {
  getAllExperience(): Promise<PortfolioExperience[]>;
}

export interface ISkillRepository {
  getAllSkills(): Promise<Skill[]>;
  getSkillsByCategory(category: string): Promise<Skill[]>;
}

export interface IHeroRepository {
  getHeroData(): Promise<HeroProps>;
}

export interface IEducationRepository {
  getAllEducation(): Promise<Education[]>;
}

export interface ICertificationRepository {
  getAllCertifications(): Promise<Certification[]>;
}

// Service classes implementing Single Responsibility Principle
export class ProjectService {
  constructor(private repository: IProjectRepository) {}

  async getProjects(): Promise<Project[]> {
    return this.repository.getAllProjects();
  }

  async getProjectsByType(
    type: "Professional" | "Personal",
  ): Promise<Project[]> {
    return this.repository.getProjectsByType(type);
  }

  async getFeaturedProjects(limit = 6): Promise<Project[]> {
    const projects = await this.repository.getAllProjects();
    return projects.slice(0, limit);
  }
}

export class ExperienceService {
  constructor(private repository: IExperienceRepository) {}

  async getExperience(): Promise<PortfolioExperience[]> {
    return this.repository.getAllExperience();
  }

  async getRecentExperience(limit = 3): Promise<PortfolioExperience[]> {
    const experience = await this.repository.getAllExperience();
    return experience.slice(0, limit);
  }
}

export class SkillService {
  constructor(private repository: ISkillRepository) {}

  async getSkills(): Promise<Skill[]> {
    return this.repository.getAllSkills();
  }

  async getSkillsByCategory(category: string): Promise<Skill[]> {
    return this.repository.getSkillsByCategory(category);
  }

  async getSkillCategories(): Promise<string[]> {
    const skills = await this.repository.getAllSkills();
    return [...new Set(skills.map((skill) => skill.category))];
  }
}

export class HeroService {
  constructor(private repository: IHeroRepository) {}

  async getHeroData(): Promise<HeroProps> {
    return this.repository.getHeroData();
  }
}

export class EducationService {
  constructor(private repository: IEducationRepository) {}

  async getEducation(): Promise<Education[]> {
    return this.repository.getAllEducation();
  }
}

export class CertificationService {
  constructor(private repository: ICertificationRepository) {}

  async getCertifications(): Promise<Certification[]> {
    return this.repository.getAllCertifications();
  }
}
