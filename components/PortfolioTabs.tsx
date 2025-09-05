'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Briefcase, 
  Code, 
  Award, 
  Github, 
  ExternalLink,
  Calendar,
  MapPin,
  Star,
  GitBranch,
  Users,
  Zap,
  Shield,
  Eye
} from 'lucide-react'
import { useProjects, useExperience, useSkills } from '@/hooks/usePortfolioData'
import { useI18n } from '@/contexts/I18nContext'
import { getSkillCategoryTranslations } from "@/data/translations/skills-en"
import { getSkillCategoryTranslations as getSkillCategoryTranslationsEs } from "@/data/translations/skills-es"
import LoadingSpinner from '@/components/LoadingSpinner'
import ErrorMessage from '@/components/ErrorMessage'
import TechIcon from '@/components/TechIcon'
import GitHubStats from '@/components/GitHubStats'
import ProjectModal from '@/components/ProjectModal'
import type { Project, Experience, Skill } from '@/types/portfolio'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function PortfolioTabs() {
  const [activeTab, setActiveTab] = useState('projects')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const { translation, language } = useI18n()
  const { projects, loading: projectsLoading, error: projectsError } = useProjects(language)
  const { experience, loading: experienceLoading, error: experienceError } = useExperience(language)
  const { skills, loading: skillsLoading, error: skillsError } = useSkills(language)

  if (projectsLoading || experienceLoading || skillsLoading) {
    return (
      <div className="flex justify-center items-center py-20">
        <LoadingSpinner />
      </div>
    )
  }

  if (projectsError || experienceError || skillsError) {
    return <ErrorMessage message={translation.common.error} />
  }

  return (
     <section id="portafolio" className="py-20 px-4 bg-muted/20 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">
            {translation.projects.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {translation.projects.subtitle}
          </p>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="projects" className="flex items-center gap-2">
              <Code className="w-4 h-4" />
              {translation.nav.projects}
            </TabsTrigger>
            <TabsTrigger value="experience" className="flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              {translation.nav.experience}
            </TabsTrigger>
            <TabsTrigger value="skills" className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              {translation.nav.skills}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="projects" className="mt-0">
            <motion.div
              key="projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {projects?.slice(0, 6).map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/50 h-full flex flex-col">
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="aspect-video relative mb-4 rounded-lg overflow-hidden bg-muted">
                          <img
                            src={project.imageUrl}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="flex flex-col flex-1 space-y-3">
                          <div className="flex-1">
                            <h3 className="font-semibold text-foreground text-lg mb-2">
                              {project.title}
                            </h3>
                            <p className="text-sm text-muted-foreground line-clamp-3">
                              {project.description}
                            </p>
                          </div>
                          <div className="flex flex-wrap gap-1 mb-3">
                            {project.techStack.slice(0, 3).map((tech, techIndex) => (
                              <Badge key={`${project.id}-tech-${techIndex}`} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                            {project.techStack.length > 3 && (
                              <Badge key={`${project.id}-more`} variant="outline" className="text-xs">
                                +{project.techStack.length - 3}
                              </Badge>
                            )}
                          </div>
                          <div className="mt-6 pt-4 border-t border-border/20">
                            <div className="flex gap-2">
                              {project.repoUrl && (
                                <a
                                  href={project.repoUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors px-3 py-2 rounded-lg hover:bg-muted/50"
                                >
                                  <Github className="w-4 h-4" />
                                  {translation.projects.code}
                                </a>
                              )}
                              <button
                                onClick={() => setSelectedProject(project)}
                                className="flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors px-3 py-2 rounded-lg hover:bg-primary/10 font-semibold"
                              >
                                <Eye className="w-4 h-4" />
                                {translation.projects.viewDetails}
                              </button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="experience" className="mt-0">
              <motion.div
                key="experience"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Accordion type="single" collapsible className="space-y-4">
                  {experience?.map((exp, index) => (
                    <AccordionItem key={exp.id} value={`exp-${exp.id}`}>
                      <Card>
                        <AccordionTrigger value={`exp-${exp.id}`} className="px-6 py-4 hover:no-underline w-full">
                          <div className="flex items-center justify-between w-full">
                            <div className="flex items-center gap-4 text-left flex-1">
                              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                <Briefcase className="w-6 h-6 text-primary" />
                              </div>
                              <div className="flex-1">
                                <h3 className="font-semibold text-foreground text-lg">
                                  {exp.role}
                                </h3>
                                <p className="text-muted-foreground">{exp.company}</p>
                                <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                                  <span className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    {exp.period}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="text-sm text-muted-foreground ml-4">
                              {translation.experience.keyAchievements}
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent value={`exp-${exp.id}`}>
                          <CardContent className="px-6 pb-6">
                            <div className="space-y-3 mb-4">
                              {exp.description.map((desc, index) => (
                                <p key={index} className="text-muted-foreground text-sm">
                                  • {desc}
                                </p>
                              ))}
                            </div>
                            {exp.techUsed && (
                              <div className="flex flex-wrap gap-2">
                                {exp.techUsed.map((tech, techIndex) => (
                                  <Badge key={`${exp.id}-tech-${techIndex}`} variant="secondary" className="text-xs">
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            )}
                          </CardContent>
                        </AccordionContent>
                      </Card>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            </TabsContent>

            <TabsContent value="skills" className="mt-0">
              <motion.div
                key="skills"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-8 text-center">{translation.skills.title}</h3>
                  
                  {/* Agrupar habilidades por categoría */}
                  {(() => {
                    const groupedSkills = skills?.reduce((acc, skill) => {
                      if (!acc[skill.category]) {
                        acc[skill.category] = []
                      }
                      acc[skill.category].push(skill)
                      return acc
                    }, {} as Record<string, typeof skills>)

                    // Get category translations
                    const categoryTranslations = language === 'en' 
                      ? getSkillCategoryTranslations(language)
                      : getSkillCategoryTranslationsEs(language)
                    
                    const categoryOrder = [
                      'Backend',
                      'Frontend Web',
                      'Frontend Mobile', 
                      'Base de Datos',
                      'Cloud & DevOps',
                      'Librerías',
                      'Arquitectura',
                      'Metodologías'
                    ]

                    const categoryColors = {
                      'Backend': 'from-green-500/10 to-emerald-500/5 border-green-500/20',
                      'Frontend Web': 'from-blue-500/10 to-cyan-500/5 border-blue-500/20',
                      'Frontend Mobile': 'from-purple-500/10 to-pink-500/5 border-purple-500/20',
                      'Base de Datos': 'from-orange-500/10 to-yellow-500/5 border-orange-500/20',
                      'Cloud & DevOps': 'from-indigo-500/10 to-blue-500/5 border-indigo-500/20',
                      'Librerías': 'from-rose-500/10 to-pink-500/5 border-rose-500/20',
                      'Arquitectura': 'from-violet-500/10 to-purple-500/5 border-violet-500/20',
                      'Metodologías': 'from-teal-500/10 to-cyan-500/5 border-teal-500/20'
                    }

                    return categoryOrder.map((category) => {
                      // Find the translated category key in groupedSkills
                      const translatedCategory = Object.keys(groupedSkills || {}).find(key => 
                        categoryTranslations[key as keyof typeof categoryTranslations] === categoryTranslations[category as keyof typeof categoryTranslations] ||
                        key === category
                      ) || category
                      
                      const categorySkills = groupedSkills?.[translatedCategory] || []
                      if (categorySkills.length === 0) return null

                      return (
                        <div key={category} className="mb-8">
                          <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold mb-4 bg-gradient-to-r ${categoryColors[category as keyof typeof categoryColors]} border`}>
                            {categoryTranslations[category as keyof typeof categoryTranslations] || category}
                          </div>
                          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                            {categorySkills.map((skill) => (
                              <motion.div
                                key={skill.id}
                                whileHover={{ 
                                  scale: 1.05,
                                  y: -3,
                                  transition: { duration: 0.2 }
                                }}
                                whileTap={{ scale: 0.95 }}
                                className="group relative"
                              >
                                <div className="flex flex-col items-center p-4 rounded-xl bg-gradient-to-br from-card/60 to-card/30 border border-border/20 hover:border-primary/40 hover:shadow-md hover:shadow-primary/5 transition-all duration-300 backdrop-blur-sm">
                                  {/* Icon Container */}
                                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-300 mb-3">
                                    <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                                      <TechIcon name={skill.name} level={skill.level} size="md" />
                                    </div>
                                  </div>
                                  
                                  {/* Skill Name */}
                                  <h4 className="text-xs font-semibold text-foreground text-center mb-2 group-hover:text-primary transition-colors duration-300">
                                    {skill.name}
                                  </h4>
                                  
                                  {/* Level Badge */}
                                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                                    skill.level === 'Expert' 
                                      ? 'bg-purple-500/10 text-purple-600 border border-purple-500/20' 
                                      : skill.level === 'Advanced' 
                                      ? 'bg-green-500/10 text-green-600 border border-green-500/20'
                                      : skill.level === 'Intermediate'
                                      ? 'bg-blue-500/10 text-blue-600 border border-blue-500/20'
                                      : 'bg-gray-500/10 text-gray-600 border border-gray-500/20'
                                  }`}>
                                    {skill.level}
                                  </div>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      )
                    })
                  })()}
                </div>

                {/* GitHub Activity - Comentado temporalmente
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Estadísticas GitHub</h3>
                  <GitHubStats username="ymontanez" />
                </div>
                */}
              </motion.div>
            </TabsContent>
        </Tabs>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  )
}
