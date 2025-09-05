import type { Education } from "@/types/portfolio"

export const mockEducation: Education[] = [
  {
    id: "1",
    degree: "Ingeniería de Sistemas",
    institution: "Universidad Nacional del Centro del Perú",
    period: "2011 - 2015",
    description: "Formación integral en ingeniería de software, sistemas de información y desarrollo de aplicaciones empresariales.",
    location: "Huancayo, Perú",
    gpa: "3.8/4.0",
    relevantCourses: [
      "Ingeniería de Software",
      "Desarrollo de Aplicaciones Web",
      "Bases de Datos",
      "Arquitectura de Software",
      "Metodologías de Desarrollo"
    ]
  },
  {
    id: "2",
    degree: "Inglés",
    institution: "Idiomas PUCP",
    period: "Sept. 2024",
    description: "Programa de inglés avanzado enfocado en comunicación técnica y profesional.",
    location: "Lima, Perú",
    gpa: "A",
    relevantCourses: [
      "Inglés Técnico",
      "Comunicación Profesional",
      "Presentaciones en Inglés"
    ]
  }
]
