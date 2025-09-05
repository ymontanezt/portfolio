export const experienceTranslations = {
  positions: {
    softwareEngineer: {
      title: "Software Engineer",
      period: "ene. 2022 - actualidad",
      company: "Auna · Lima, Perú",
      description: [
        "Especializado en desarrollo Front-End con tecnologías modernas",
        "Desarrollo de interfaces dinámicas con React y aplicaciones móviles con React Native",
        "Implementación de microfrontends y microapps para aplicaciones empresariales",
        "Desarrollo de aplicaciones SPA con Angular y aplicaciones web/móviles con Ionic",
        "Trabajo en metodologías ágiles SCRUM y Kanban para entrega continua"
      ],
      technologies: ["React", "React Native", "Angular", "Ionic", "TypeScript", "RTK Query"]
    },
    frontAgileDeveloper: {
      title: "Front Agile Developer",
      period: "nov. 2020 - ene. 2022",
      company: "Auna · Lima, Perú",
      description: [
        "Desarrollo de aplicaciones con Angular e Ionic para el sector salud",
        "Implementación de metodologías ágiles SCRUM y Kanban",
        "Trabajo con tecnologías como Angular 9, TypeScript, RxJS e Ionic 4",
        "Integración con servicios de AWS para despliegue y escalabilidad",
        "Colaboración estrecha con equipos de producto y diseño"
      ],
      technologies: ["Angular", "Ionic", "TypeScript", "RxJS", "AWS", "Scrum", "Kanban"]
    },
    fullStackDeveloper: {
      title: "Desarrollador Full Stack",
      period: "may. 2018 - oct. 2021",
      company: "NVO SOLUTION - Grupo Leña & Carbón",
      location: "Lima, Perú",
      description: [
        "Análisis, diseño e implementación de servicios REST con Spring Framework",
        "Desarrollo de aplicaciones web con Angular y aplicaciones móviles Android",
        "Despliegue en AWS con gestión de recursos EC2, ECS, S3, VPC, IAM, CloudFront, Route53, RDS",
        "Implementación de arquitecturas de microservicios para aplicaciones empresariales",
        "Optimización de bases de datos MySQL para aplicaciones de alto tráfico"
      ],
      technologies: ["Spring Boot", "Angular", "Android", "AWS", "MySQL", "REST APIs", "Microservicios"]
    },
    developmentEngineer: {
      title: "Ingeniero de Desarrollo",
      period: "jul. 2017 - mar. 2018",
      company: "SUMTEC",
      location: "Lima, Perú",
      description: [
        "Ingeniero de Desarrollo y Soporte para aplicaciones empresariales",
        "Ingeniero de Pre-Venta para propuestas técnicas y comerciales",
        "Análisis y desarrollo de aplicaciones de gestión empresarial",
        "Soporte técnico a clientes y resolución de incidencias",
        "Documentación técnica y capacitación a usuarios finales"
      ],
      technologies: ["Java", "Spring", "MySQL", "JavaScript", "HTML", "CSS"]
    },
    developmentAnalyst: {
      title: "Analista de Desarrollo",
      period: "ene. 2016 - dic. 2016",
      company: "PTR SYSTEM INGENIEROS SAC",
      location: "Huancayo, Perú",
      description: [
        "Análisis, diseño e implementación de proyectos de software",
        "Desarrollo de aplicaciones de registros civiles para entidades gubernamentales",
        "Implementación de sistemas de inventarios y trámite documentario",
        "Trabajo con metodologías de desarrollo tradicional y ágil",
        "Capacitación a usuarios y soporte técnico en campo"
      ],
      technologies: ["Java", "Spring", "MySQL", "JavaScript", "Bootstrap", "jQuery"]
    }
  }
}

export const getExperienceTranslations = (language: string) => {
  return experienceTranslations
}
