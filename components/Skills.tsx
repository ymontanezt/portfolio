"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Code, Cloud, Database, Globe } from "lucide-react"
import { useSkills, useCertifications } from "@/hooks/usePortfolioData"
import { useI18n } from "@/contexts/I18nContext"
import LoadingSpinner from "@/components/LoadingSpinner"
import ErrorMessage from "@/components/ErrorMessage"
import GitHubStats from "@/components/GitHubStats"
import TechIcon from "@/components/TechIcon"

// Principio de Responsabilidad Única (SRP)
interface Certification {
  name: string
  issuer: string
  year: string
}

// Función para obtener años de experiencia basado en el nivel
const getYearsFromLevel = (level: string): string => {
  switch (level) {
    case "Expert": return "5+"
    case "Advanced": return "3+"
    case "Intermediate": return "2+"
    case "Beginner": return "1+"
    default: return "2+"
  }
}

const CERTIFICATIONS: Certification[] = [
  { name: "Ingeniero de Sistemas", issuer: "Universidad Nacional", year: "2018" },
  { name: "Spring Framework Professional", issuer: "Pivotal", year: "2022" },
  { name: "AWS Cloud Practitioner", issuer: "AWS", year: "2023" },
  { name: "React Developer", issuer: "Meta", year: "2023" }
]


// Principio de Inversión de Dependencias (DIP) - Componente reutilizable
const CertificationBadge: React.FC<{ cert: Certification }> = ({ cert }) => (
  <div className="flex items-center gap-2 p-3 rounded-lg bg-primary/5 border border-primary/20">
    <Award className="w-4 h-4 text-primary flex-shrink-0" />
    <div className="min-w-0 flex-1">
      <p className="font-medium text-sm text-foreground truncate">{cert.name}</p>
      <p className="text-xs text-muted-foreground">{cert.issuer} • {cert.year}</p>
    </div>
  </div>
)

export default function Skills() {
  const { translation, language } = useI18n()
  const { skills, loading, error } = useSkills(language)
  const { certifications, loading: certLoading, error: certError } = useCertifications()

  // Estados de carga y error - Principio de Responsabilidad Única
  if (loading) {
    return (
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              {translation.skills.title}
            </h2>
            <p className="text-muted-foreground text-lg">
              {translation.skills.subtitle}
            </p>
          </div>
          <LoadingSpinner size="lg" className="py-20" />
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              {translation.skills.title}
            </h2>
            <p className="text-muted-foreground text-lg">
              {translation.skills.subtitle}
            </p>
          </div>
          <ErrorMessage message={error} />
        </div>
      </section>
    )
  }

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">
            {translation.skills.title}
          </h2>
          <p className="text-muted-foreground text-lg">
            {translation.skills.subtitle}
          </p>
        </motion.div>

        {/* Technical Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-primary-enhanced mb-2">
              {translation.skills.techStackTitle}
            </h3>
            <p className="text-muted-enhanced">
              {translation.skills.techStackSubtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.slice(0, 12).map((skill, index) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TechIcon 
                  name={skill.name}
                  level={skill.level}
                  years={getYearsFromLevel(skill.level)}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Professional Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              {translation.skills.certifications}
            </h3>
            <p className="text-muted-foreground">
              {translation.skills.certificationsSubtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CertificationBadge cert={{
                  name: cert.name,
                  issuer: cert.issuer,
                  year: cert.date.split(' ')[1] || cert.date
                }} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* GitHub Stats Integration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-16"
        >
          <GitHubStats username="ymontanez" />
        </motion.div>
      </div>
    </section>
  )
}