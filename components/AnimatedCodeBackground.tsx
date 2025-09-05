'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface CodeSnippet {
  language: string
  code: string
  description: string
}

const codeSnippets: CodeSnippet[] = [
  {
    language: 'typescript',
    description: 'React Component with TypeScript',
    code: `const Portfolio: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    setIsVisible(true)
  }, [])
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="portfolio-container"
    >
      <h1>Full Stack Developer</h1>
    </motion.div>
  )
}`
  },
  {
    language: 'javascript',
    description: 'Modern JavaScript with Async/Await',
    code: `const fetchUserData = async () => {
  try {
    const response = await fetch('/api/users')
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error:', error)
  }
}

const processData = (data) => {
  return data.map(user => ({
    ...user,
    fullName: \`\${user.firstName} \${user.lastName}\`
  }))
}`
  },
  {
    language: 'java',
    description: 'Spring Boot REST Controller',
    code: `@RestController
@RequestMapping("/api/patients")
@Validated
@SecurityRequirement(name = "bearerAuth")
public class PatientController {

    private final PatientService patientService;

    @GetMapping
    @PreAuthorize("hasRole('DOCTOR') or hasRole('ADMIN')")
    public ResponseEntity<Page<PatientDto>> getPatients(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(required = false) String search) {
        
        Page<PatientDto> patients = patientService.findAllPatients(page, size, search);
        return ResponseEntity.ok(patients);
    }

    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<PatientDto> createPatient(
            @Valid @RequestBody CreatePatientRequest request) {
        
        PatientDto patient = patientService.createPatient(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(patient);
    }
}`
  },
  {
    language: 'typescript',
    description: 'Next.js API Route with TypeScript',
    code: `import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      const projects = await prisma.project.findMany({
        include: {
          technologies: true,
          user: true
        }
      })
      
      res.status(200).json({ success: true, data: projects })
    } catch (error) {
      res.status(500).json({ success: false, error: 'Failed to fetch projects' })
    }
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).end(\`Method \${req.method} Not Allowed\`)
  }
}`
  },
  {
    language: 'typescript',
    description: 'React Native with TypeScript',
    code: `import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useQuery } from '@tanstack/react-query'

interface AppointmentCardProps {
  appointment: {
    id: string
    doctorName: string
    specialty: string
    date: string
    time: string
    status: 'scheduled' | 'completed' | 'cancelled'
  }
}

export const AppointmentCard: React.FC<AppointmentCardProps> = ({ appointment }) => {
  const navigation = useNavigation()
  const [isLoading, setIsLoading] = useState(false)

  const { data: doctorInfo } = useQuery({
    queryKey: ['doctor', appointment.doctorName],
    queryFn: () => fetchDoctorInfo(appointment.doctorName)
  })

  const handlePress = () => {
    navigation.navigate('AppointmentDetails', { 
      appointmentId: appointment.id 
    })
  }

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <Text style={styles.doctorName}>{appointment.doctorName}</Text>
      <Text style={styles.specialty}>{appointment.specialty}</Text>
    </TouchableOpacity>
  )
}`
  }
]

const AnimatedCodeBackground: React.FC = () => {
  const [currentSnippet, setCurrentSnippet] = useState(0)
  const [displayedCode, setDisplayedCode] = useState('')
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const snippet = codeSnippets[currentSnippet]
    let currentIndex = 0
    const typingSpeed = 30 // ms per character

    const typeCode = () => {
      if (currentIndex < snippet.code.length) {
        setDisplayedCode(snippet.code.slice(0, currentIndex + 1))
        currentIndex++
        setTimeout(typeCode, typingSpeed)
      } else {
        // Wait before erasing
        setTimeout(() => {
          setIsTyping(false)
          const eraseCode = () => {
            if (currentIndex > 0) {
              setDisplayedCode(snippet.code.slice(0, currentIndex - 1))
              currentIndex--
              setTimeout(eraseCode, typingSpeed / 2)
            } else {
              // Move to next snippet
              setCurrentSnippet((prev) => (prev + 1) % codeSnippets.length)
              setIsTyping(true)
            }
          }
          eraseCode()
        }, 2000)
      }
    }

    typeCode()
  }, [currentSnippet])

  const getLanguageColor = (language: string) => {
    const colors = {
      typescript: '#3178c6',
      javascript: '#f7df1e',
      java: '#ed8b00',
      css: '#1572b6',
      sql: '#336791'
    }
    return colors[language as keyof typeof colors] || '#64748b'
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient Overlay - Optimizado para código visible */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/30 via-slate-800/15 to-slate-900/30 z-10" />
      
      {/* Code Container - Más visible */}
      <div className="absolute inset-0 flex items-center justify-center p-8 z-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.6, scale: 1 }}
          className="w-full max-w-4xl"
        >
          {/* Language Badge */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div 
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: getLanguageColor(codeSnippets[currentSnippet].language) }}
              />
              <span className="text-slate-400 text-sm font-mono">
                {codeSnippets[currentSnippet].language}
              </span>
            </div>
            <div className="text-slate-500 text-xs font-mono">
              {codeSnippets[currentSnippet].description}
            </div>
          </div>

          {/* Code Display - Más notorio */}
          <div className="bg-slate-900/70 backdrop-blur-sm rounded-lg p-6 border border-slate-500/60 shadow-xl">
            <pre className="text-slate-200 font-mono text-sm leading-relaxed overflow-hidden">
              <code className="text-green-300">
                {displayedCode}
                {isTyping && (
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="text-green-300"
                  >
                    |
                  </motion.span>
                )}
              </code>
            </pre>
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center mt-4 gap-2">
            {codeSnippets.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSnippet
                    ? 'bg-green-400 scale-125'
                    : 'bg-slate-600'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Floating Code Elements - Más notorios */}
      <div className="absolute inset-0 z-5">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-slate-400/30 font-mono text-sm font-medium"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -25, 0],
              opacity: [0.15, 0.4, 0.15],
            }}
            transition={{
              duration: 2.5 + Math.random() * 1.5,
              repeat: Infinity,
              delay: Math.random() * 1.5,
            }}
          >
            {['<div>', '</div>', 'const', 'function', 'return', 'useState', 'useEffect', 'import'][i % 8]}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default AnimatedCodeBackground
