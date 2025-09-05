import { testimonialsEs } from "../translations/testimonials-es"
import { testimonialsEn } from "../translations/testimonials-en"

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  photo?: string
  content: string
  rating: number
  linkedinUrl?: string
  date: string
}

// Función para obtener traducciones de testimonios
export const getTestimonialTranslations = (language: string) => {
  return language === 'es' ? testimonialsEs : testimonialsEn
}

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "María González",
    role: "Product Manager",
    company: "TechCorp Solutions",
    content: "Yuri es un desarrollador excepcional con una capacidad impresionante para traducir requerimientos complejos en soluciones técnicas robustas. Su dedicación y expertise técnico han sido fundamentales para el éxito de nuestros proyectos.",
    rating: 5,
    linkedinUrl: "https://linkedin.com/in/maria-gonzalez",
    date: "Enero 2024"
  },
  {
    id: "testimonial-2",
    name: "Carlos Rodríguez",
    role: "CTO",
    company: "StartupXYZ",
    content: "La arquitectura de microservicios que Yuri diseñó para nuestra plataforma fue clave para escalar de 1,000 a 50,000 usuarios. Su conocimiento en tecnologías modernas y mejores prácticas es excepcional. Un desarrollador de clase mundial.",
    rating: 5,
    linkedinUrl: "https://linkedin.com/in/carlos-rodriguez",
    date: "Diciembre 2023"
  },
  {
    id: "testimonial-3",
    name: "Ana Martínez",
    role: "Lead Developer",
    company: "Digital Agency Pro",
    content: "Yuri no solo es un programador excepcional, sino también un mentor increíble. Su paciencia para explicar conceptos complejos y su disposición para ayudar al equipo lo hacen invaluable. Ha elevado el nivel técnico de todo el equipo.",
    rating: 5,
    linkedinUrl: "https://linkedin.com/in/ana-martinez",
    date: "Noviembre 2023"
  },
  {
    id: "testimonial-4",
    name: "Roberto Silva",
    role: "Project Director",
    company: "Enterprise Solutions",
    content: "El sistema de gestión que desarrollamos con Yuri superó todas nuestras expectativas. Su atención al detalle, comunicación clara y entrega siempre puntual son características que destacan en su trabajo. Un profesional de primera.",
    rating: 5,
    linkedinUrl: "https://linkedin.com/in/roberto-silva",
    date: "Octubre 2023"
  },
  {
    id: "testimonial-5",
    name: "Laura Fernández",
    role: "UX Designer",
    company: "Creative Studio",
    content: "La colaboración con Yuri en el frontend fue excepcional. Entiende perfectamente las necesidades del usuario y sabe cómo implementar diseños complejos manteniendo la funcionalidad y rendimiento. Un desarrollador muy completo.",
    rating: 5,
    linkedinUrl: "https://linkedin.com/in/laura-fernandez",
    date: "Septiembre 2023"
  },
  {
    id: "testimonial-6",
    name: "Diego Herrera",
    role: "DevOps Engineer",
    company: "CloudTech",
    content: "Yuri tiene un enfoque muy profesional hacia el desarrollo. Su código es limpio, bien documentado y sigue las mejores prácticas. Su comprensión de arquitecturas escalables es impresionante. Es un placer trabajar con él.",
    rating: 5,
    linkedinUrl: "https://linkedin.com/in/diego-herrera",
    date: "Agosto 2023"
  }
]
