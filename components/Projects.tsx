"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  ExternalLink, 
  Github, 
  Eye, 
  Code, 
  Star, 
  GitBranch,
  Calendar,
  Users,
  Zap,
  Shield,
  ArrowRight,
  Play
} from "lucide-react"
import { useProjects } from "@/hooks/usePortfolioData"
import { useI18n } from "@/contexts/I18nContext"
import LoadingSpinner from "@/components/LoadingSpinner"
import ErrorMessage from "@/components/ErrorMessage"
import ProjectModal from "@/components/ProjectModal"
import type { Project } from "@/types/portfolio"

export default function Projects() {
  const { translation, language } = useI18n()
  const { projects, loading, error } = useProjects(language)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <LoadingSpinner />
      </div>
    )
  }

  if (error) {
    return <ErrorMessage message={translation.common.error} />
  }

  if (!projects || projects.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-muted-foreground">No projects available</p>
      </div>
    )
  }

  const getProjectTypeColor = (type: string) => {
    switch (type) {
      case "Personal": return "bg-primary"
      case "Professional": return "bg-secondary text-secondary-foreground"
      default: return "bg-muted text-muted-foreground"
    }
  }

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case "Low": return "text-green-600"
      case "Medium": return "text-yellow-600"
      case "High": return "text-orange-600"
      case "Expert": return "text-red-600"
      default: return "text-muted-foreground"
    }
  }

  return (
    <section id="projects" className="py-20 px-4 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">
            {translation.projects.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {translation.projects.subtitle}
          </p>
        </motion.div>

        {/* Projects Grid - Layout Innovador */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              className="group relative"
            >
              {/* Project Container */}
              <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-background to-muted/20">
                <CardContent className="p-0">
                  {/* Image Section */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.imageUrl || '/placeholder.svg'}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = '/placeholder.svg'
                      }}
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            className="bg-primary hover:bg-primary/90 text-primary-foreground"
                            onClick={() => setSelectedProject(project)}
                          >
                            <Eye className="w-4 h-4 mr-1" />
                            {translation.projects.viewDetails}
                          </Button>
                          {project.repoUrl && (
                            <Button
                              size="sm"
                              variant="outline"
                              className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                              onClick={() => window.open(project.repoUrl, '_blank')}
                            >
                              <Github className="w-4 h-4 mr-1" />
                              Código
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Type Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge 
                        className={`${getProjectTypeColor(project.type)} border-0`}
                      >
                        {project.type}
                      </Badge>
                    </div>

                    {/* Private Badge */}
                    {project.isPrivate && (
                      <div className="absolute top-4 right-4">
                        <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 border-yellow-300 dark:bg-yellow-500/20 dark:text-yellow-400 dark:border-yellow-500/30">
                          <Shield className="w-3 h-3 mr-1" />
                          {translation.projects.private}
                        </Badge>
                      </div>
                    )}
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    {/* Title and Description */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {project.techStack.slice(0, 4).map((tech, i) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs font-mono"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.techStack.length > 4 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.techStack.length - 4} {translation.projects.more}
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Metrics */}
                    {project.metrics && (
                      <div className="grid grid-cols-2 gap-4 mb-6 p-3 bg-muted/30 rounded-lg">
                        <div className="text-center">
                          <div className="text-sm text-muted-foreground">{translation.projects.performance}</div>
                          <div className="text-lg font-bold text-foreground">
                            {project.metrics.performance}%
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm text-muted-foreground">{translation.projects.complexity}</div>
                          <div className={`text-lg font-bold ${getComplexityColor(project.metrics.complexity)}`}>
                            {project.metrics.complexity}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Action Button */}
                    <div className="mt-6 pt-4 border-t border-border/20">
                      <Button
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                        onClick={() => setSelectedProject(project)}
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        {translation.projects.viewDetails}
                      </Button>
                    </div>

                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-muted-foreground mb-6">
            {translation.projects.interestedInMore}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => window.open('https://github.com/ymontanez', '_blank')}
              className="bg-primary hover:bg-primary/90"
            >
              <Github className="w-5 h-5 mr-2" />
              {translation.projects.viewOnGitHub}
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Play className="w-5 h-5 mr-2" />
              {translation.projects.collaborate}
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  )
}