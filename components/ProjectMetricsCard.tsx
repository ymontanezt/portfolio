"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Clock, Gauge, Users, TrendingUp, Zap } from "lucide-react"
import type { ProjectMetrics } from "@/types/portfolio"

interface ProjectMetricsCardProps {
  metrics: ProjectMetrics
}

const ProjectMetricsCard: React.FC<ProjectMetricsCardProps> = ({ metrics }) => {
  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case "Low": return "bg-green-500/10 text-green-400 border-green-500/30"
      case "Medium": return "bg-yellow-500/10 text-yellow-400 border-yellow-500/30"
      case "High": return "bg-orange-500/10 text-orange-400 border-orange-500/30"
      case "Expert": return "bg-purple-500/10 text-purple-400 border-purple-500/30"
      default: return "bg-gray-500/10 text-gray-400 border-gray-500/30"
    }
  }

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-400"
    if (score >= 75) return "text-yellow-400"
    return "text-red-400"
  }

  return (
    <div className="space-y-3 mt-4 pt-4 border-t border-border/30">
      {/* Métricas principales */}
      <div className="grid grid-cols-2 gap-2 text-xs">
        <div className="flex items-center gap-1">
          <Clock className="w-3 h-3 text-muted-foreground" />
          <span className="text-muted-enhanced">{metrics.developmentTime}</span>
        </div>
        <div className="flex items-center gap-1">
          <Gauge className="w-3 h-3 text-muted-foreground" />
          <span className={getScoreColor(metrics.performance)}>
            {metrics.performance}% Performance
          </span>
        </div>
        {metrics.users && (
          <div className="flex items-center gap-1">
            <Users className="w-3 h-3 text-muted-foreground" />
            <span className="text-muted-enhanced">{metrics.users} usuarios</span>
          </div>
        )}
        <div className="flex items-center gap-1">
          <Badge 
            variant="outline" 
            className={`text-xs px-2 py-0 ${getComplexityColor(metrics.complexity)}`}
          >
            {metrics.complexity}
          </Badge>
        </div>
      </div>

      {/* Impacto */}
      <div className="flex items-center gap-2">
        <TrendingUp className="w-4 h-4 text-primary" />
        <span className="text-sm text-secondary-enhanced font-medium">
          {metrics.impact}
        </span>
      </div>

      {/* Lighthouse scores (si están disponibles) */}
      {metrics.lighthouse && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          whileInView={{ opacity: 1, height: "auto" }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="pt-2 border-t border-border/20"
        >
          <div className="flex items-center gap-1 mb-2">
            <Zap className="w-3 h-3 text-primary" />
            <span className="text-xs text-muted-enhanced font-medium">Lighthouse Scores</span>
          </div>
          <div className="grid grid-cols-2 gap-1 text-xs">
            <div className="flex justify-between">
              <span className="text-muted-enhanced">Performance:</span>
              <span className={getScoreColor(metrics.lighthouse.performance)}>
                {metrics.lighthouse.performance}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-enhanced">Accessibility:</span>
              <span className={getScoreColor(metrics.lighthouse.accessibility)}>
                {metrics.lighthouse.accessibility}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-enhanced">Best Practices:</span>
              <span className={getScoreColor(metrics.lighthouse.bestPractices)}>
                {metrics.lighthouse.bestPractices}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-enhanced">SEO:</span>
              <span className={getScoreColor(metrics.lighthouse.seo)}>
                {metrics.lighthouse.seo}
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default ProjectMetricsCard
