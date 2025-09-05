import type { Project } from "@/types/portfolio"
import { projectsEs } from "../translations/projects-es"
import { projectsEn } from "../translations/projects-en"

// Función para obtener traducciones de proyectos
export const getProjectTranslations = (language: string) => {
  return language === 'es' ? projectsEs : projectsEn
}

export const mockProjects: Project[] = [
  {
    id: "1",
    title: "Sistema de Gestión de Registro Civil",
    description: "Plataforma web para la gestión digital de trámites de registro civil, incluyendo solicitudes, seguimiento y notificaciones automáticas.",
    techStack: ["Angular", "Spring Boot", "PostgreSQL", "Docker", "AWS", "Redis"],
    type: "Professional",
    imageUrl: "/civil-registry.png",
    isPrivate: true,
    liveUrl: null,
    repoUrl: null,
    detailedDescription: "Desarrollé un sistema completo de gestión digital para el registro civil que digitalizó todos los procesos administrativos. La plataforma permite a los ciudadanos realizar trámites en línea, hacer seguimiento del estado de sus solicitudes y recibir notificaciones automáticas.",
    features: [
      "Portal ciudadano para solicitudes en línea",
      "Sistema de seguimiento de trámites en tiempo real",
      "Notificaciones automáticas por email y SMS",
      "Dashboard administrativo con métricas detalladas",
      "Integración con sistemas gubernamentales existentes",
      "Generación automática de documentos oficiales"
    ],
    challenges: [
      "Integración con sistemas legacy del gobierno",
      "Cumplimiento de normativas de seguridad gubernamental",
      "Manejo de grandes volúmenes de datos sensibles",
      "Optimización para usuarios con conectividad limitada"
    ],
    metrics: {
      developmentTime: "12 meses",
      performance: 92,
      complexity: "Expert",
      impact: "Redujo tiempo de trámites de 15 días a 3 días",
      users: "25,000+",
      lighthouse: {
        performance: 92,
        accessibility: 94,
        bestPractices: 90,
        seo: 85
      }
    }
  },
  {
    id: "2",
    title: "Plataforma E-commerce Móvil",
    description: "Aplicación móvil de e-commerce con React Native, incluyendo catálogo de productos, carrito de compras, pagos y gestión de pedidos.",
    techStack: ["React Native", "Node.js", "Express", "MongoDB", "Stripe", "Firebase"],
    type: "Professional",
    imageUrl: "/ecommerce-mobile.png",
    isPrivate: true,
    liveUrl: null,
    repoUrl: null,
    detailedDescription: "Desarrollé una aplicación móvil completa de e-commerce que permitió a la empresa expandir su presencia digital. La app incluye funcionalidades avanzadas como búsqueda inteligente, recomendaciones personalizadas y múltiples métodos de pago.",
    features: [
      "Catálogo de productos con filtros avanzados",
      "Carrito de compras persistente",
      "Sistema de pagos integrado con Stripe",
      "Notificaciones push para ofertas",
      "Sistema de calificaciones y reseñas",
      "Tracking de pedidos en tiempo real"
    ],
    challenges: [
      "Optimización de rendimiento en dispositivos de gama baja",
      "Sincronización offline de datos del carrito",
      "Integración con múltiples pasarelas de pago",
      "Manejo de estados complejos en React Native"
    ],
    metrics: {
      developmentTime: "8 meses",
      performance: 88,
      complexity: "High",
      impact: "Aumentó ventas móviles en 150%",
      users: "10,000+",
      lighthouse: {
        performance: 88,
        accessibility: 90,
        bestPractices: 85,
        seo: 80
      }
    }
  },
  {
    id: "3",
    title: "Sistema de Telemedicina",
    description: "Plataforma web de telemedicina que conecta pacientes con médicos para consultas virtuales, incluyendo videollamadas y gestión de historiales.",
    techStack: ["React", "WebRTC", "Node.js", "Socket.io", "MongoDB", "AWS"],
    type: "Professional",
    imageUrl: "/telemedicine-app.png",
    isPrivate: true,
    liveUrl: null,
    repoUrl: null,
    detailedDescription: "Desarrollé una plataforma completa de telemedicina que revolucionó la atención médica durante la pandemia. El sistema incluye videollamadas de alta calidad, gestión de citas, historiales médicos digitales y un sistema de notificaciones inteligente.",
    features: [
      "Videollamadas HD con WebRTC",
      "Sistema de citas médicas automatizado",
      "Historiales médicos digitales seguros",
      "Chat en tiempo real entre pacientes y médicos",
      "Sistema de notificaciones push",
      "Dashboard para administración médica"
    ],
    challenges: [
      "Optimización de videollamadas para conexiones lentas",
      "Cumplimiento de normativas de privacidad médica",
      "Integración con sistemas de historiales existentes",
      "Escalabilidad para miles de consultas simultáneas"
    ],
    metrics: {
      developmentTime: "10 meses",
      performance: 90,
      complexity: "Expert",
      impact: "Permitió 50,000+ consultas virtuales",
      users: "15,000+",
      lighthouse: {
        performance: 90,
        accessibility: 92,
        bestPractices: 88,
        seo: 82
      }
    }
  },
  {
    id: "4",
    title: "Dashboard de Analytics Empresarial",
    description: "Dashboard interactivo para análisis de datos empresariales con visualizaciones en tiempo real y reportes personalizables.",
    techStack: ["Angular", "D3.js", "Spring Boot", "PostgreSQL", "Redis", "Docker"],
    type: "Professional",
    imageUrl: "/analytics-dashboard.png",
    isPrivate: true,
    liveUrl: null,
    repoUrl: null,
    detailedDescription: "Creé un dashboard avanzado de analytics que transformó la forma en que la empresa analiza sus datos. La plataforma incluye visualizaciones interactivas, reportes automatizados y alertas inteligentes basadas en patrones de datos.",
    features: [
      "Visualizaciones interactivas con D3.js",
      "Reportes automatizados programables",
      "Alertas inteligentes basadas en umbrales",
      "Exportación de datos en múltiples formatos",
      "Dashboard personalizable por usuario",
      "Integración con múltiples fuentes de datos"
    ],
    challenges: [
      "Optimización de consultas para grandes datasets",
      "Renderizado eficiente de visualizaciones complejas",
      "Sincronización de datos en tiempo real",
      "Manejo de múltiples formatos de datos"
    ],
    metrics: {
      developmentTime: "6 meses",
      performance: 87,
      complexity: "High",
      impact: "Mejoró toma de decisiones en 70%",
      users: "500+",
      lighthouse: {
        performance: 87,
        accessibility: 89,
        bestPractices: 86,
        seo: 78
      }
    }
  },
  {
    id: "5",
    title: "App de Gestión de Tareas",
    description: "Aplicación web de gestión de tareas con funcionalidades de colaboración en equipo, seguimiento de tiempo y reportes de productividad.",
    techStack: ["React", "Redux", "Node.js", "MongoDB", "Socket.io", "JWT"],
    type: "Personal",
    imageUrl: "/task-management-kanban.svg",
    isPrivate: false,
    liveUrl: "https://taskmanager-demo.vercel.app",
    repoUrl: "https://github.com/ymontanez/task-manager",
    detailedDescription: "Desarrollé una aplicación completa de gestión de tareas inspirada en metodologías ágiles. La app incluye tableros Kanban, seguimiento de tiempo, colaboración en equipo y reportes detallados de productividad.",
    features: [
      "Tableros Kanban interactivos",
      "Seguimiento de tiempo por tarea",
      "Colaboración en tiempo real",
      "Sistema de notificaciones",
      "Reportes de productividad",
      "Integración con calendarios"
    ],
    challenges: [
      "Sincronización en tiempo real entre usuarios",
      "Optimización de rendimiento con muchos datos",
      "Implementación de permisos granulares",
      "Manejo de conflictos de concurrencia"
    ],
    metrics: {
      developmentTime: "4 meses",
      performance: 89,
      complexity: "Medium",
      impact: "Mejoró productividad del equipo en 40%",
      users: "200+",
      lighthouse: {
        performance: 89,
        accessibility: 91,
        bestPractices: 87,
        seo: 85
      }
    }
  },
  {
    id: "6",
    title: "Sistema de Chat en Tiempo Real",
    description: "Aplicación de mensajería instantánea con funcionalidades avanzadas como videollamadas, compartir archivos y salas de chat grupales.",
    techStack: ["React", "Socket.io", "Node.js", "Express", "MongoDB", "WebRTC"],
    type: "Personal",
    imageUrl: "/ai-chatbot-interface-with-messages.svg",
    isPrivate: false,
    liveUrl: "https://chat-app-demo.vercel.app",
    repoUrl: "https://github.com/ymontanez/chat-app",
    detailedDescription: "Creé una aplicación de chat moderna con funcionalidades avanzadas de comunicación. El sistema incluye mensajería instantánea, videollamadas, compartir archivos, salas de chat y un sistema de notificaciones inteligente.",
    features: [
      "Mensajería instantánea en tiempo real",
      "Videollamadas grupales",
      "Compartir archivos y multimedia",
      "Salas de chat personalizables",
      "Sistema de notificaciones push",
      "Historial de mensajes con búsqueda"
    ],
    challenges: [
      "Optimización de WebRTC para múltiples usuarios",
      "Manejo eficiente de archivos grandes",
      "Escalabilidad para miles de usuarios concurrentes",
      "Implementación de seguridad end-to-end"
    ],
    metrics: {
      developmentTime: "5 meses",
      performance: 86,
      complexity: "High",
      impact: "Facilitó comunicación de 1,000+ usuarios",
      users: "1,000+",
      lighthouse: {
        performance: 86,
        accessibility: 88,
        bestPractices: 84,
        seo: 80
      }
    }
  }
]