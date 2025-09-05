"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GitBranch, Star, Users, Code, GitCommit } from "lucide-react"

interface GitHubStatsProps {
  username: string
}

// Mock data simplificado
const mockGitHubData = {
  username: "ymontanez",
  publicRepos: 32,
  followers: 127,
  totalStars: 234,
  totalCommits: 1847,
  topLanguages: ["TypeScript", "Java", "JavaScript", "Python", "React", "Angular", "Spring Boot", "Android"]
}

const GitHubStats: React.FC<GitHubStatsProps> = ({ username }) => {
  const stats = [
    {
      icon: GitBranch,
      label: "Repositories",
      value: mockGitHubData.publicRepos,
      color: "text-blue-500"
    },
    {
      icon: Star,
      label: "Stars",
      value: mockGitHubData.totalStars,
      color: "text-yellow-500"
    },
    {
      icon: Users,
      label: "Followers",
      value: mockGitHubData.followers,
      color: "text-green-500"
    },
    {
      icon: GitCommit,
      label: "Commits",
      value: mockGitHubData.totalCommits,
      color: "text-purple-500"
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      <div className="text-center">
        <h3 className="text-2xl font-bold text-primary-enhanced mb-2">
          GitHub Activity
        </h3>
        <p className="text-muted-enhanced">
          My development activity and contributions on GitHub
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <Card className="text-center hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-4">
                <stat.icon className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
                <div className="text-2xl font-bold text-foreground mb-1">
                  {stat.value.toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Top Languages */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-primary-enhanced flex items-center gap-2">
            <Code className="w-5 h-5" />
            Top Languages
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {mockGitHubData.topLanguages.map((language, index) => (
              <motion.div
                key={language}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Badge 
                  variant="secondary" 
                  className="text-sm font-mono px-3 py-1 hover:bg-primary/10 transition-colors"
                >
                  {language}
                </Badge>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* GitHub Link */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center"
      >
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200"
        >
          <GitBranch className="w-4 h-4" />
          View on GitHub
        </a>
      </motion.div>
    </motion.div>
  )
}

export default GitHubStats