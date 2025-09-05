export const experienceTranslations = {
  positions: {
    softwareEngineer: {
      title: "Software Engineer",
      period: "Jan. 2022 - present",
      company: "Auna · Lima, Perú",
      description: [
        "Specialized in Front-End development with modern technologies",
        "Development of dynamic interfaces with React and mobile applications with React Native",
        "Implementation of microfrontends and microapps for enterprise applications",
        "Development of SPA applications with Angular and web/mobile applications with Ionic",
        "Work in agile SCRUM and Kanban methodologies for continuous delivery"
      ],
      technologies: ["React", "React Native", "Angular", "Ionic", "TypeScript", "RTK Query"]
    },
    frontAgileDeveloper: {
      title: "Front Agile Developer",
      period: "Nov. 2020 - Jan. 2022",
      company: "Auna · Lima, Perú",
      description: [
        "Development of applications with Angular and Ionic for the health sector",
        "Implementation of agile SCRUM and Kanban methodologies",
        "Work with technologies like Angular 9, TypeScript, RxJS and Ionic 4",
        "Integration with AWS services for deployment and scalability",
        "Close collaboration with product and design teams"
      ],
      technologies: ["Angular", "Ionic", "TypeScript", "RxJS", "AWS", "Scrum", "Kanban"]
    },
    fullStackDeveloper: {
      title: "Full Stack Developer",
      period: "May 2018 - Oct. 2021",
      company: "NVO SOLUTION - Grupo Leña & Carbón",
      location: "Lima, Perú",
      description: [
        "Analysis, design and implementation of REST services with Spring Framework",
        "Development of web applications with Angular and Android mobile applications",
        "Deployment on AWS with management of EC2, ECS, S3, VPC, IAM, CloudFront, Route53, RDS resources",
        "Implementation of microservices architectures for enterprise applications",
        "MySQL database optimization for high-traffic applications"
      ],
      technologies: ["Spring Boot", "Angular", "Android", "AWS", "MySQL", "REST APIs", "Microservices"]
    },
    developmentEngineer: {
      title: "Development Engineer",
      period: "Jul. 2017 - Mar. 2018",
      company: "SUMTEC",
      location: "Lima, Perú",
      description: [
        "Development and Support Engineer for enterprise applications",
        "Pre-Sales Engineer for technical and commercial proposals",
        "Analysis and development of enterprise management applications",
        "Technical support to clients and incident resolution",
        "Technical documentation and end-user training"
      ],
      technologies: ["Java", "Spring", "MySQL", "JavaScript", "HTML", "CSS"]
    },
    developmentAnalyst: {
      title: "Development Analyst",
      period: "Jan. 2016 - Dec. 2016",
      company: "PTR SYSTEM INGENIEROS SAC",
      location: "Huancayo, Perú",
      description: [
        "Analysis, design and implementation of software projects",
        "Development of civil registry applications for government entities",
        "Implementation of inventory and document processing systems",
        "Work with traditional and agile development methodologies",
        "User training and field technical support"
      ],
      technologies: ["Java", "Spring", "MySQL", "JavaScript", "Bootstrap", "jQuery"]
    }
  }
}

export const getExperienceTranslations = (language: string) => {
  return experienceTranslations
}
