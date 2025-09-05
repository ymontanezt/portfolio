"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X, ExternalLink, Github, Calendar, Users, Zap, Shield, Star, GitBranch, Code, Eye, ArrowRight, CheckCircle, AlertCircle, Clock, Target, TrendingUp, Sparkles, Award, Rocket, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useI18n } from "@/contexts/I18nContext"
import type { Project } from "@/types/portfolio"

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { translation } = useI18n()

  if (!project) return null

  const getProjectTypeColor = (type: string) => {
    switch (type) {
      case "Personal": return "bg-blue-500"
      case "Professional": return "bg-green-500"
      default: return "bg-gray-500"
    }
  }

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case "Low": return "text-green-500"
      case "Medium": return "text-yellow-500"
      case "High": return "text-orange-500"
      case "Expert": return "text-red-500"
      default: return "text-gray-500"
    }
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 z-50"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 50 }}
          transition={{ 
            type: "spring", 
            damping: 20, 
            stiffness: 300,
            duration: 0.4
          }}
          className="bg-background/95 backdrop-blur-xl rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-border/20 flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header with Hero Image */}
          <div className="relative">
            <div className="h-56 sm:h-72 md:h-80 lg:h-96 relative overflow-hidden">
              <Image
                src={project.imageUrl || '/placeholder.svg'}
                alt={project.title}
                fill
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
                priority
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = '/placeholder.svg'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />
              
              {/* Floating Elements */}
              <div className="absolute inset-0 overflow-hidden">
                <motion.div
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 20, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                  className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-xl"
                />
                <motion.div
                  animate={{ 
                    rotate: -360,
                    scale: [1, 0.9, 1]
                  }}
                  transition={{ 
                    duration: 15, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                  className="absolute -bottom-20 -left-20 w-32 h-32 bg-secondary/10 rounded-full blur-xl"
                />
              </div>
              
              {/* Close Button */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="absolute top-4 right-4 z-10"
              >
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-10 w-10 rounded-full bg-black/40 hover:bg-red-500/80 text-white border-2 border-white/30 hover:border-red-400 backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                  onClick={onClose}
                >
                  <X className="w-5 h-5" />
                </Button>
              </motion.div>

              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <Badge className={`${getProjectTypeColor(project.type)} text-white border-0 shadow-xl backdrop-blur-sm font-semibold px-3 py-1`}>
                    <Sparkles className="w-3 h-3 mr-1" />
                    {project.type}
                  </Badge>
                </motion.div>

                {project.isPrivate && (
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Badge variant="secondary" className="bg-yellow-500/30 text-yellow-100 border-yellow-400/50 backdrop-blur-sm shadow-xl font-semibold px-3 py-1">
                      <Shield className="w-3 h-3 mr-1" />
                      {translation.projects.private}
                    </Badge>
                  </motion.div>
                )}
              </div>

              {/* Title Section */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/95 via-black/50 to-transparent"
              >
                <div className="max-w-4xl">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight drop-shadow-2xl">
                    {project.title}
                  </h2>
                  <p className="text-white/95 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed drop-shadow-lg max-w-3xl">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Content with Custom Scrollbar */}
          <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-primary/30 scrollbar-track-transparent">
            <div className="p-4 sm:p-6 md:p-8">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="space-y-6"
            >
              {/* Detailed Description */}
              {project.detailedDescription && (
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  <Card className="border border-border/20 shadow-xl bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm">
                    <CardHeader className="pb-4">
                      <CardTitle className="flex items-center gap-3 text-xl font-bold text-foreground">
                        <div className="p-2 rounded-lg bg-primary/20 border border-primary/30">
                          <Eye className="w-5 h-5 text-primary" />
                        </div>
                        {translation.projects.detailedDescription}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground/90 leading-relaxed text-base font-medium">
                        {project.detailedDescription}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {/* Features */}
              {project.features && project.features.length > 0 && (
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <Card className="border border-green-500/20 shadow-xl bg-gradient-to-br from-green-500/10 to-emerald-500/5 backdrop-blur-sm">
                    <CardHeader className="pb-4">
                      <CardTitle className="flex items-center gap-3 text-xl font-bold text-foreground">
                        <div className="p-2 rounded-lg bg-green-500/20 border border-green-500/30">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        </div>
                        {translation.projects.mainFeatures}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-3">
                        {project.features.map((feature, index) => (
                          <motion.div
                            key={index}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.9 + index * 0.1 }}
                            className="flex items-start gap-3 p-4 rounded-lg bg-white/10 hover:bg-white/20 transition-colors border border-white/10"
                          >
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-foreground/90 font-medium">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {/* Challenges */}
              {project.challenges && project.challenges.length > 0 && (
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.0 }}
                >
                  <Card className="border border-orange-500/20 shadow-xl bg-gradient-to-br from-orange-500/10 to-red-500/5 backdrop-blur-sm">
                    <CardHeader className="pb-4">
                      <CardTitle className="flex items-center gap-3 text-xl font-bold text-foreground">
                        <div className="p-2 rounded-lg bg-orange-500/20 border border-orange-500/30">
                          <AlertCircle className="w-5 h-5 text-orange-500" />
                        </div>
                        {translation.projects.technicalChallenges}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-3">
                        {project.challenges.map((challenge, index) => (
                          <motion.div
                            key={index}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 1.1 + index * 0.1 }}
                            className="flex items-start gap-3 p-4 rounded-lg bg-white/10 hover:bg-white/20 transition-colors border border-white/10"
                          >
                            <AlertCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                            <span className="text-foreground/90 font-medium">{challenge}</span>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {/* Tech Stack */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                <Card className="border border-blue-500/20 shadow-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/5 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-xl font-bold text-foreground">
                      <div className="p-2 rounded-lg bg-blue-500/20 border border-blue-500/30">
                        <Layers className="w-5 h-5 text-blue-500" />
                      </div>
                      {translation.projects.techStack}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, index) => (
                        <motion.div
                          key={tech}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 1.3 + index * 0.05 }}
                        >
                          <Badge 
                            variant="outline" 
                            className="font-mono text-xs px-3 py-1 bg-white/20 hover:bg-white/30 transition-colors border-white/30 font-semibold text-foreground/90"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Metrics */}
              {project.metrics && (
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.4 }}
                >
                  <Card className="border border-purple-500/20 shadow-xl bg-gradient-to-br from-purple-500/10 to-pink-500/5 backdrop-blur-sm">
                    <CardHeader className="pb-4">
                      <CardTitle className="flex items-center gap-3 text-xl font-bold text-foreground">
                        <div className="p-2 rounded-lg bg-purple-500/20 border border-purple-500/30">
                          <TrendingUp className="w-5 h-5 text-purple-500" />
                        </div>
                        {translation.projects.projectMetrics}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                          { icon: Clock, label: translation.projects.developmentTime, value: project.metrics.developmentTime, color: "text-blue-500" },
                          { icon: Zap, label: translation.projects.performance, value: `${project.metrics.performance}%`, color: "text-green-500" },
                          { icon: Target, label: translation.projects.complexity, value: project.metrics.complexity, color: getComplexityColor(project.metrics.complexity) },
                          { icon: Users, label: translation.projects.users, value: project.metrics.users || "N/A", color: "text-purple-500" }
                        ].map((metric, index) => (
                          <motion.div
                            key={metric.label}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 1.5 + index * 0.1 }}
                            className="text-center p-4 bg-white/20 rounded-xl hover:bg-white/30 transition-all duration-300 hover:scale-105 border border-white/20"
                          >
                            <metric.icon className={`w-6 h-6 mx-auto mb-2 ${metric.color}`} />
                                                    <div className="text-sm text-foreground/80 mb-1 font-medium">{metric.label}</div>
                        <div className={`font-bold text-lg ${metric.color}`}>{metric.value}</div>
                          </motion.div>
                        ))}
                      </div>
                      
                      {/* Impact */}
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1.9 }}
                        className="p-6 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl border border-primary/20"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className="p-2 rounded-lg bg-primary/20">
                            <Star className="w-5 h-5 text-primary" />
                          </div>
                          <span className="font-semibold text-lg">{translation.projects.projectImpact}</span>
                        </div>
                        <p className="text-foreground/90 leading-relaxed font-medium">{project.metrics.impact}</p>
                      </motion.div>

                      {/* Lighthouse Scores */}
                      {project.metrics.lighthouse && (
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 2.0 }}
                          className="space-y-4"
                        >
                          <h4 className="font-semibold text-lg flex items-center gap-2">
                            <Award className="w-5 h-5 text-primary" />
                            {translation.projects.lighthouseScores}
                          </h4>
                          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                            {[
                              { label: translation.projects.performance, value: project.metrics.lighthouse.performance, color: "text-green-500" },
                              { label: translation.projects.accessibility, value: project.metrics.lighthouse.accessibility, color: "text-blue-500" },
                              { label: translation.projects.bestPractices, value: project.metrics.lighthouse.bestPractices, color: "text-purple-500" },
                              { label: translation.projects.seo, value: project.metrics.lighthouse.seo, color: "text-orange-500" }
                            ].map((score, index) => (
                              <motion.div
                                key={score.label}
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 2.1 + index * 0.1 }}
                                className="text-center p-4 bg-white/20 rounded-lg hover:bg-white/30 transition-all duration-300 border border-white/20"
                              >
                                <div className="text-sm text-foreground/80 mb-2 font-medium">{score.label}</div>
                                <div className={`font-bold text-2xl ${score.color}`}>{score.value}</div>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {/* Action Buttons */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 2.2 }}
                className="flex flex-col sm:flex-row gap-4 pt-8 pb-4"
              >
                {project.liveUrl && (
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1"
                  >
                    <Button
                      onClick={() => window.open(project.liveUrl, '_blank')}
                      className="w-full h-14 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 border-0 font-semibold text-lg group"
                      size="lg"
                    >
                      <div className="flex items-center justify-center gap-3">
                        <Rocket className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                        <span>{translation.projects.viewLiveProject}</span>
                        <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </Button>
                  </motion.div>
                )}
                {project.repoUrl && (
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1"
                  >
                    <Button
                      variant="outline"
                      onClick={() => window.open(project.repoUrl, '_blank')}
                      className="w-full h-14 border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-800 transition-all duration-300 font-semibold text-lg group"
                      size="lg"
                    >
                      <div className="flex items-center justify-center gap-3">
                        <Github className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                        <span>{translation.projects.viewSourceCode}</span>
                        <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </Button>
                  </motion.div>
                )}
                {!project.liveUrl && !project.repoUrl && project.isPrivate && (
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 2.3 }}
                    className="flex-1 text-center p-8 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl border-2 border-amber-200 dark:border-amber-800"
                  >
                    <Shield className="w-16 h-16 mx-auto mb-4 text-amber-600 dark:text-amber-400" />
                    <p className="text-amber-800 dark:text-amber-200 font-semibold text-lg">{translation.projects.privateProjectMessage}</p>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
