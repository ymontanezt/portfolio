import type { Metadata } from "next"

interface SEOConfig {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: "website" | "article"
  publishedTime?: string
  modifiedTime?: string
  section?: string
}

export const defaultSEO = {
  title: "Yuri Michael Montañez Tuncar - Ingeniero de Sistemas | Full Stack Developer",
  description: "Ingeniero de Sistemas con más de 8 años de experiencia en desarrollo full-stack. Especialista en Spring Framework, Angular, React, React Native, Node.js y arquitecturas de microservicios. Apasionado por crear soluciones escalables y de alto rendimiento.",
  url: "https://michcode.dev",
  image: "/yuri-montanez-profile.jpg",
  keywords: [
    "Yuri Michael Montañez Tuncar",
    "Yuri Montañez", 
    "Ingeniero de Sistemas",
    "Full Stack Developer",
    "Spring Framework",
    "Angular Developer",
    "React Developer",
    "React Native",
    "Node.js",
    "Java Developer",
    "TypeScript",
    "JavaScript",
    "Microservicios",
    "AWS",
    "Docker",
    "PostgreSQL",
    "MongoDB",
    "Portfolio",
    "Desarrollo Web",
    "Desarrollo Móvil",
    "Arquitectura de Software"
  ]
}

export function generateSEO(config: SEOConfig = {}): Metadata {
  const {
    title = defaultSEO.title,
    description = defaultSEO.description,
    image = defaultSEO.image,
    url = defaultSEO.url,
    type = "website",
    publishedTime,
    modifiedTime,
    section
  } = config

  const fullTitle = title.includes("Yuri") ? title : `${title} | Yuri Montañez`
  const fullUrl = url.startsWith("http") ? url : `${defaultSEO.url}${url}`
  const fullImageUrl = image.startsWith("http") ? image : `${defaultSEO.url}${image}`

  return {
    title: fullTitle,
    description,
    openGraph: {
      type,
      title: fullTitle,
      description,
      url: fullUrl,
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      siteName: "Yuri Montañez Portfolio",
      locale: "es_ES",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [fullImageUrl],
      creator: "@yurimontanez",
    },
    alternates: {
      canonical: fullUrl,
    },
    ...(type === "article" && {
      other: {
        "article:author": "Yuri Michael Montañez Tuncar",
        "article:section": section || "Technology",
        ...(publishedTime && { "article:published_time": publishedTime }),
        ...(modifiedTime && { "article:modified_time": modifiedTime }),
      },
    }),
  }
}

// Configuraciones SEO específicas por página
export const pageSEO = {
  home: generateSEO({
    title: "Yuri Michael Montañez Tuncar - Ingeniero de Sistemas | Full Stack Developer",
    description: "Portfolio profesional de Yuri Montañez - Ingeniero de Sistemas con más de 8 años de experiencia en desarrollo full-stack, Spring Framework, Angular, React, React Native y arquitecturas de microservicios.",
    url: "/",
  }),
  
  projects: generateSEO({
    title: "Proyectos - Portfolio de Desarrollo",
    description: "Explora los proyectos de desarrollo de Yuri Montañez: sistemas de gestión gubernamental, plataformas e-commerce, aplicaciones de telemedicina, dashboards analíticos y más. Tecnologías: Spring Framework, Angular, React, React Native, Node.js.",
    url: "/projects",
  }),
  
  experience: generateSEO({
    title: "Experiencia Profesional - Ingeniero de Sistemas",
    description: "Experiencia profesional de Yuri Montañez como Ingeniero de Sistemas: desarrollo full-stack, liderazgo técnico, arquitectura de microservicios y optimización de performance en empresas del sector salud, e-commerce y gobierno.",
    url: "/experience",
  }),
  
  skills: generateSEO({
    title: "Habilidades Técnicas - Spring Framework, Angular, React, AWS",
    description: "Habilidades técnicas de Yuri Montañez: Spring Framework Expert, Angular, React, React Native, Node.js, Java, TypeScript, AWS, Docker, PostgreSQL, MongoDB y arquitecturas de microservicios.",
    url: "/skills",
  }),
  
  contact: generateSEO({
    title: "Contacto - Colaboremos en tu Próximo Proyecto",
    description: "Contacta a Yuri Montañez para colaborar en proyectos de desarrollo web, consultoría técnica o oportunidades profesionales. Disponible para trabajos remotos worldwide.",
    url: "/contact",
  }),
}

// JSON-LD Structured Data
export const structuredData = {
  person: {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Yuri Michael Montañez Tuncar",
    "alternateName": "Yuri Montañez",
    "description": defaultSEO.description,
    "url": defaultSEO.url,
    "image": `${defaultSEO.url}${defaultSEO.image}`,
    "sameAs": [
      "https://www.linkedin.com/in/yuri-michael-montañez-tuncar-39744496/",
      "https://github.com/ymontanez"
    ],
    "jobTitle": "Ingeniero de Sistemas",
    "worksFor": {
      "@type": "Organization",
      "name": "TechCorp Solutions"
    },
    "knowsAbout": [
      "Spring Framework",
      "Angular",
      "React",
      "React Native",
      "Node.js",
      "Java",
      "TypeScript", 
      "JavaScript",
      "AWS",
      "Docker",
      "PostgreSQL",
      "MongoDB",
      "Microservicios",
      "Software Architecture",
      "Full Stack Development"
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Ingeniero de Sistemas",
        "credentialCategory": "degree"
      },
      {
        "@type": "EducationalOccupationalCredential", 
        "name": "Spring Framework Professional",
        "credentialCategory": "certification"
      },
      {
        "@type": "EducationalOccupationalCredential", 
        "name": "AWS Cloud Practitioner",
        "credentialCategory": "certification"
      }
    ]
  },
  
  website: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Yuri Montañez Portfolio",
    "description": defaultSEO.description,
    "url": defaultSEO.url,
    "author": {
      "@type": "Person",
      "name": "Yuri Michael Montañez Tuncar"
    },
    "inLanguage": "es-ES",
    "copyrightYear": new Date().getFullYear(),
    "genre": "Technology Portfolio"
  },

  portfolio: {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": "Yuri Montañez - Professional Portfolio",
    "description": "Portfolio profesional mostrando proyectos de desarrollo web, experiencia técnica y habilidades en tecnologías modernas",
    "url": defaultSEO.url,
    "author": {
      "@type": "Person",
      "name": "Yuri Michael Montañez Tuncar"
    },
    "dateCreated": "2024-01-01",
    "dateModified": new Date().toISOString().split('T')[0],
    "inLanguage": "es-ES",
    "keywords": defaultSEO.keywords.join(", ")
  }
}

// Función para generar breadcrumbs
export function generateBreadcrumbs(paths: Array<{ name: string; href: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": paths.map((path, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": path.name,
      "item": `${defaultSEO.url}${path.href}`
    }))
  }
}
