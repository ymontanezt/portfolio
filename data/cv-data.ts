export interface CVData {
  personalInfo: {
    name: string
    title: string
    email: string
    phone?: string
    location: string
    linkedin: string
    github: string
    website?: string
    summary: string
  }
  experience: Array<{
    position: string
    company: string
    location: string
    startDate: string
    endDate: string
    description: string[]
    technologies: string[]
  }>
  education: Array<{
    degree: string
    institution: string
    location: string
    graduationDate: string
    gpa?: string
    honors?: string[]
  }>
  skills: {
    technical: Array<{
      category: string
      skills: Array<{
        name: string
        level: "Beginner" | "Intermediate" | "Advanced" | "Expert"
        years?: string
      }>
    }>
    languages: Array<{
      language: string
      proficiency: string
    }>
  }
  certifications: Array<{
    name: string
    issuer: string
    date: string
    credentialId?: string
    url?: string
  }>
  projects: Array<{
    name: string
    description: string
    technologies: string[]
    role: string
    duration: string
    achievements: string[]
    url?: string
  }>
}

export const cvData: CVData = {
  personalInfo: {
    name: "Yuri Michael Montañez Tuncar",
    title: "Senior Software Engineer | Full Stack Developer",
    email: "yuri.montanez@michcode.dev",
    location: "Remote Worldwide",
    linkedin: "linkedin.com/in/yuri-michael-montañez-tuncar-39744496",
    github: "github.com/ymontanez",
    website: "portfolio-yuri-montanez.vercel.app",
    summary: "Senior Software Engineer con más de 4 años de experiencia en desarrollo full-stack, especializado en React, Next.js, TypeScript y tecnologías modernas. Expertise en AWS, arquitecturas escalables y optimización de performance. Certificado AWS Solutions Architect con track record de incrementar performance de aplicaciones en 78% y conversiones en 35%."
  },
  
  experience: [
    {
      position: "Senior Software Engineer",
      company: "Freelance & Consulting",
      location: "Remote",
      startDate: "2022",
      endDate: "Present",
      description: [
        "Desarrollo de aplicaciones web full-stack para clientes internacionales utilizando React, Next.js y TypeScript",
        "Implementación de arquitecturas serverless en AWS con Lambda, API Gateway y DynamoDB",
        "Optimización de performance que resultó en mejoras del 78% en tiempo de carga",
        "Liderazgo técnico en equipos de desarrollo, estableciendo mejores prácticas y estándares de código",
        "Diseño e implementación de sistemas de CI/CD usando GitHub Actions y Docker"
      ],
      technologies: ["React", "Next.js", "TypeScript", "AWS", "Node.js", "PostgreSQL", "Docker"]
    },
    {
      position: "Full Stack Developer",
      company: "Tech Startup",
      location: "Remote",
      startDate: "2020",
      endDate: "2022",
      description: [
        "Desarrollo de plataforma e-commerce completa con integración de pagos y gestión de inventario",
        "Implementación de dashboard analítico en tiempo real con D3.js y React",
        "Creación de API RESTful escalable con Node.js y Express",
        "Colaboración en metodologías ágiles con equipos multidisciplinarios",
        "Mentoring de desarrolladores junior y revisión de código"
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe", "D3.js"]
    },
    {
      position: "Frontend Developer",
      company: "Digital Agency",
      location: "Hybrid",
      startDate: "2019",
      endDate: "2020",
      description: [
        "Desarrollo de interfaces web responsivas y aplicaciones SPA",
        "Implementación de diseños UX/UI con atención al detalle",
        "Optimización de SEO y performance de sitios web",
        "Integración con CMS y servicios de terceros",
        "Colaboración directa con equipos de diseño y producto"
      ],
      technologies: ["JavaScript", "Vue.js", "HTML5", "CSS3", "Sass", "Webpack"]
    }
  ],
  
  education: [
    {
      degree: "Ingeniero en Sistemas Computacionales",
      institution: "Universidad Tecnológica",
      location: "Ciudad, País",
      graduationDate: "2019",
      gpa: "3.8/4.0",
      honors: ["Cum Laude", "Dean's List"]
    }
  ],
  
  skills: {
    technical: [
      {
        category: "Frontend",
        skills: [
          { name: "React", level: "Expert", years: "4+" },
          { name: "Next.js", level: "Advanced", years: "3+" },
          { name: "TypeScript", level: "Advanced", years: "3+" },
          { name: "JavaScript", level: "Expert", years: "5+" },
          { name: "HTML5/CSS3", level: "Expert", years: "5+" },
          { name: "Tailwind CSS", level: "Advanced", years: "2+" }
        ]
      },
      {
        category: "Backend",
        skills: [
          { name: "Node.js", level: "Advanced", years: "3+" },
          { name: "Python", level: "Advanced", years: "4+" },
          { name: "Django", level: "Intermediate", years: "2+" },
          { name: "Express.js", level: "Advanced", years: "3+" },
          { name: "REST APIs", level: "Expert", years: "4+" },
          { name: "GraphQL", level: "Intermediate", years: "1+" }
        ]
      },
      {
        category: "Database & Cloud",
        skills: [
          { name: "PostgreSQL", level: "Advanced", years: "3+" },
          { name: "MongoDB", level: "Intermediate", years: "2+" },
          { name: "AWS", level: "Advanced", years: "2+" },
          { name: "Docker", level: "Intermediate", years: "2+" },
          { name: "Redis", level: "Intermediate", years: "1+" }
        ]
      },
      {
        category: "Tools & Methodologies",
        skills: [
          { name: "Git", level: "Expert", years: "5+" },
          { name: "Agile/Scrum", level: "Advanced", years: "3+" },
          { name: "CI/CD", level: "Advanced", years: "2+" },
          { name: "Testing", level: "Advanced", years: "3+" },
          { name: "Performance Optimization", level: "Advanced", years: "2+" }
        ]
      }
    ],
    languages: [
      { language: "Español", proficiency: "Nativo" },
      { language: "Inglés", proficiency: "Profesional (B2)" },
      { language: "Português", proficiency: "Básico (A2)" }
    ]
  },
  
  certifications: [
    {
      name: "AWS Solutions Architect Associate",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-SAA-2023-001",
      url: "https://aws.amazon.com/certification/"
    },
    {
      name: "React Developer Professional",
      issuer: "Meta",
      date: "2023",
      credentialId: "META-REACT-2023-001"
    },
    {
      name: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2023",
      credentialId: "GCP-PD-2023-001"
    },
    {
      name: "MongoDB Developer Certification",
      issuer: "MongoDB University",
      date: "2023",
      credentialId: "MONGO-DEV-2023-001"
    }
  ],
  
  projects: [
    {
      name: "E-Commerce Platform",
      description: "Plataforma de comercio electrónico completa con gestión de inventario, integración de pagos y dashboard administrativo",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "AWS"],
      role: "Tech Lead & Full Stack Developer",
      duration: "8 semanas",
      achievements: [
        "Incrementó conversiones en 45%",
        "Maneja 10,000+ usuarios activos",
        "Performance Score: 96/100 (Lighthouse)",
        "Reducción de tiempo de carga en 60%"
      ],
      url: "https://ecommerce-demo.vercel.app"
    },
    {
      name: "Analytics Dashboard",
      description: "Dashboard en tiempo real para visualización de métricas empresariales con gráficos interactivos",
      technologies: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL", "Docker"],
      role: "Full Stack Developer",
      duration: "6 semanas",
      achievements: [
        "Procesamiento de 1M+ data points/día",
        "Visualizaciones interactivas en tiempo real",
        "API de alto rendimiento (< 100ms response time)",
        "Integración con múltiples fuentes de datos"
      ]
    },
    {
      name: "AI Chat Application",
      description: "Aplicación de chat inteligente con IA conversacional y gestión de historial de conversaciones",
      technologies: ["Next.js", "OpenAI API", "Vercel AI SDK", "Supabase", "TypeScript"],
      role: "Full Stack Developer",
      duration: "3 semanas",
      achievements: [
        "Reducción de tiempo de respuesta en 60%",
        "1,200+ usuarios activos",
        "Integración seamless con OpenAI GPT-4",
        "Context-aware conversation management"
      ]
    }
  ]
}
