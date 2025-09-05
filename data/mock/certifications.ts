import type { Certification } from "@/types/portfolio"

export const mockCertifications: Certification[] = [
  {
    id: "1",
    name: "Scrum Foundation Professional Certificate (SFPC)",
    issuer: "CertiProf",
    date: "Jun. 2020",
    credentialId: "FLCLBBSWJW-SSGFDRJG-WHKNDZBHTH",
    description: "Certificación en metodologías ágiles y gestión de proyectos Scrum.",
    skills: ["SCRUM", "Agile", "Project Management", "Team Leadership"],
    verificationUrl: "https://certiprof.com/verify"
  },
  {
    id: "2",
    name: "Android Avanzado con Java",
    issuer: "Academia Móviles SAC",
    date: "Ene. 2020",
    description: "Desarrollo avanzado de aplicaciones móviles nativas para Android usando Java.",
    skills: ["Android", "Java", "Mobile Development", "Material Design"],
    verificationUrl: "https://academiamoviles.com/certificates"
  },
  {
    id: "3",
    name: "Java Amazon Web Services",
    issuer: "MitoCode",
    date: "Mar. 2019",
    description: "Desarrollo de aplicaciones Java en la nube usando servicios de AWS.",
    skills: ["Java", "AWS", "Cloud Computing", "Microservices"],
    verificationUrl: "https://mitocode.com/certificates"
  },
  {
    id: "4",
    name: "Java Full Stack",
    issuer: "MitoCode",
    date: "Feb. 2019",
    description: "Desarrollo completo de aplicaciones web usando el ecosistema Java.",
    skills: ["Java", "Spring Framework", "Frontend", "Backend", "Full Stack"],
    verificationUrl: "https://mitocode.com/certificates"
  },
  {
    id: "5",
    name: "Java Developer",
    issuer: "CJAVA Perú",
    date: "Mar. 2015",
    description: "Certificación oficial como desarrollador Java profesional.",
    skills: ["Java", "OOP", "Data Structures", "Algorithms"],
    verificationUrl: "https://cjavaperu.com/certificates"
  },
  {
    id: "6",
    name: "Java Programmer 8",
    issuer: "CJAVA Perú",
    date: "Ene. 2015",
    description: "Certificación en programación Java 8 con características modernas del lenguaje.",
    skills: ["Java 8", "Lambda Expressions", "Streams API", "Functional Programming"],
    verificationUrl: "https://cjavaperu.com/certificates"
  }
]
