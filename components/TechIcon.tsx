"use client";

interface TechIconProps {
  name: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  years?: string;
  size?: "sm" | "md" | "lg";
}

// Iconos SVG para todas las tecnologías
const techIcons: { [key: string]: React.ReactNode } = {
  // Frontend
  React: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <circle cx="12" cy="12" r="2" fill="#61dafb" />
      <path
        d="M12,8 C15.866,8 19,9.79 19,12 C19,14.21 15.866,16 12,16 C8.134,16 5,14.21 5,12 C5,9.79 8.134,8 12,8 Z"
        fill="none"
        stroke="#61dafb"
        strokeWidth="1"
      />
      <path
        d="M12,8 C15.866,8 19,9.79 19,12 C19,14.21 15.866,16 12,16 C8.134,16 5,14.21 5,12 C5,9.79 8.134,8 12,8 Z"
        fill="none"
        stroke="#61dafb"
        strokeWidth="1"
        transform="rotate(60 12 12)"
      />
      <path
        d="M12,8 C15.866,8 19,9.79 19,12 C19,14.21 15.866,16 12,16 C8.134,16 5,14.21 5,12 C5,9.79 8.134,8 12,8 Z"
        fill="none"
        stroke="#61dafb"
        strokeWidth="1"
        transform="rotate(120 12 12)"
      />
    </svg>
  ),
  Angular: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2 L14.5 6 L12 10 L9.5 6 Z" fill="#dd0031" />
      <path d="M12 2 L20 7 L12 12 L4 7 Z" fill="#dd0031" />
      <path d="M12 12 L20 17 L12 22 L4 17 Z" fill="#dd0031" />
    </svg>
  ),
  TypeScript: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <rect x="2" y="2" width="20" height="20" rx="2" fill="#3178c6" />
      <text
        x="12"
        y="14"
        textAnchor="middle"
        fill="white"
        fontSize="8"
        fontWeight="bold"
      >
        TS
      </text>
    </svg>
  ),
  "JavaScript ES6+": (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <rect x="2" y="2" width="20" height="20" rx="2" fill="#f1e05a" />
      <text
        x="12"
        y="14"
        textAnchor="middle"
        fill="black"
        fontSize="8"
        fontWeight="bold"
      >
        JS
      </text>
    </svg>
  ),
  "CSS3/SCSS": (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M2 2 L6 2 L6 6 L2 6 Z" fill="#1572b6" />
      <path d="M6 2 L10 2 L10 6 L6 6 Z" fill="#1572b6" />
      <path d="M10 2 L14 2 L14 6 L10 6 Z" fill="#1572b6" />
    </svg>
  ),
  "Tailwind CSS": (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2 L22 8 L22 16 L12 22 L2 16 L2 8 Z" fill="#06b6d4" />
      <path d="M8 8 L16 8 L16 16 L8 16 Z" fill="white" />
    </svg>
  ),
  "Next.js": (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.572 0c-.176 0-.31.001-.358.012a.27.27 0 0 0-.12.049c-.07.06-.09.117-.09.172v21.52c0 .055.02.112.09.172.03.026.069.043.12.05.048.01.182.01.358.01s.31-.001.358-.01a.27.27 0 0 0 .12-.05c.07-.06.09-.117.09-.172V.233c0-.055-.02-.112-.09-.172a.27.27 0 0 0-.12-.049A1.023 1.023 0 0 0 11.572 0zM23.827 5.618a.27.27 0 0 0-.12-.05A1.023 1.023 0 0 0 23.35 5.6a1.023 1.023 0 0 0-.358.01.27.27 0 0 0-.12.05c-.07.06-.09.117-.09.172v12.84c0 .055.02.112.09.172.03.026.069.043.12.05.048.01.182.01.358.01s.31-.001.358-.01a.27.27 0 0 0 .12-.05c.07-.06.09-.117.09-.172V5.79c0-.055-.02-.112-.09-.172zM17.74 8.306c-.176 0-.31.001-.358.012a.27.27 0 0 0-.12.049c-.07.06-.09.117-.09.172v7.84c0 .055.02.112.09.172.03.026.069.043.12.05.048.01.182.01.358.01s.31-.001.358-.01a.27.27 0 0 0 .12-.05c.07-.06.09-.117.09-.172V8.528c0-.055-.02-.112-.09-.172a.27.27 0 0 0-.12-.049 1.023 1.023 0 0 0-.358-.01z" />
    </svg>
  ),
  "Angular Material": (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2 L20 6 L20 18 L12 22 L4 18 L4 6 Z" fill="#dd0031" />
      <path d="M12 4 L18 7 L12 10 L6 7 Z" fill="white" />
    </svg>
  ),
  "Angular CLI": (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2 L20 6 L20 18 L12 22 L4 18 L4 6 Z" fill="#dd0031" />
      <text
        x="12"
        y="15"
        textAnchor="middle"
        fill="white"
        fontSize="8"
        fontWeight="bold"
      >
        CLI
      </text>
    </svg>
  ),
  "React Router": (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2 L20 6 L20 18 L12 22 L4 18 L4 6 Z" fill="#ca4245" />
      <text
        x="12"
        y="15"
        textAnchor="middle"
        fill="white"
        fontSize="6"
        fontWeight="bold"
      >
        RR
      </text>
    </svg>
  ),
  Zustand: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path
        d="M12 2 C6 2 2 6 2 12 C2 18 6 22 12 22 C18 22 22 18 22 12 C22 6 18 2 12 2 Z"
        fill="#ff6b6b"
      />
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fill="white"
        fontSize="8"
        fontWeight="bold"
      >
        Z
      </text>
    </svg>
  ),
  "Jetpack Compose": (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path
        d="M6 4 L18 4 C19 4 20 5 20 6 L20 18 C20 19 19 20 18 20 L6 20 C5 20 4 19 4 18 L4 6 C4 5 5 4 6 4 Z"
        fill="#3ddc84"
      />
      <circle cx="8" cy="12" r="1" fill="white" />
      <circle cx="16" cy="12" r="1" fill="white" />
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fill="white"
        fontSize="6"
        fontWeight="bold"
      >
        JC
      </text>
    </svg>
  ),
  "Redux Toolkit": (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path
        d="M12 2 C6 2 2 6 2 12 C2 18 6 22 12 22 C18 22 22 18 22 12 C22 6 18 2 12 2 Z"
        fill="#764abc"
      />
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fill="white"
        fontSize="8"
        fontWeight="bold"
      >
        RTK
      </text>
    </svg>
  ),
  NgRx: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path
        d="M12 2 C6 2 2 6 2 12 C2 18 6 22 12 22 C18 22 22 18 22 12 C22 6 18 2 12 2 Z"
        fill="#dd0031"
      />
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fill="white"
        fontSize="8"
        fontWeight="bold"
      >
        N
      </text>
    </svg>
  ),
  "React Hook Form": (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path
        d="M12 2 C6 2 2 6 2 12 C2 18 6 22 12 22 C18 22 22 18 22 12 C22 6 18 2 12 2 Z"
        fill="#61dafb"
      />
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fill="white"
        fontSize="5"
        fontWeight="bold"
      >
        RHF
      </text>
    </svg>
  ),
  "Angular Forms": (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2 L20 6 L20 18 L12 22 L4 18 L4 6 Z" fill="#dd0031" />
      <text
        x="12"
        y="15"
        textAnchor="middle"
        fill="white"
        fontSize="6"
        fontWeight="bold"
      >
        F
      </text>
    </svg>
  ),
  "Event-Driven Architecture": (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path
        d="M12 2 C6 2 2 6 2 12 C2 18 6 22 12 22 C18 22 22 18 22 12 C22 6 18 2 12 2 Z"
        fill="#a55eea"
      />
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fill="white"
        fontSize="5"
        fontWeight="bold"
      >
        EDA
      </text>
    </svg>
  ),
  "Scrum/Agile": (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path
        d="M12 2 C6 2 2 6 2 12 C2 18 6 22 12 22 C18 22 22 18 22 12 C22 6 18 2 12 2 Z"
        fill="#ff6b6b"
      />
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fill="white"
        fontSize="6"
        fontWeight="bold"
      >
        S/A
      </text>
    </svg>
  ),

  // Mobile
  "React Native": (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <rect x="4" y="4" width="16" height="16" rx="2" fill="#61dafb" />
      <circle cx="12" cy="12" r="3" fill="white" />
    </svg>
  ),
  Ionic: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="10" fill="#3880ff" />
      <circle cx="12" cy="12" r="6" fill="white" />
      <circle cx="12" cy="12" r="2" fill="#3880ff" />
    </svg>
  ),
  "Android (Nativo)": (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path
        d="M6 4 L18 4 C19 4 20 5 20 6 L20 18 C20 19 19 20 18 20 L6 20 C5 20 4 19 4 18 L4 6 C4 5 5 4 6 4 Z"
        fill="#3ddc84"
      />
      <circle cx="8" cy="12" r="1" fill="white" />
      <circle cx="16" cy="12" r="1" fill="white" />
    </svg>
  ),
  Flutter: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path
        d="M12 2 C6 2 2 6 2 12 C2 18 6 22 12 22 C18 22 22 18 22 12 C22 6 18 2 12 2 Z"
        fill="#02569b"
      />
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fill="white"
        fontSize="6"
        fontWeight="bold"
      >
        F
      </text>
    </svg>
  ),

  // Backend
  "Java 17+": (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path
        d="M8 4 L16 4 C18 4 20 6 20 8 L20 16 C20 18 18 20 16 20 L8 20 C6 20 4 18 4 16 L4 8 C4 6 6 4 8 4 Z"
        fill="#f89820"
      />
      <text
        x="12"
        y="15"
        textAnchor="middle"
        fill="white"
        fontSize="10"
        fontWeight="bold"
      >
        J
      </text>
    </svg>
  ),
  Java: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path
        d="M8 4 L16 4 C18 4 20 6 20 8 L20 16 C20 18 18 20 16 20 L8 20 C6 20 4 18 4 16 L4 8 C4 6 6 4 8 4 Z"
        fill="#f89820"
      />
      <text
        x="12"
        y="15"
        textAnchor="middle"
        fill="white"
        fontSize="10"
        fontWeight="bold"
      >
        J
      </text>
    </svg>
  ),
  "Spring Framework": (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path
        d="M12 2 C6 2 2 6 2 12 C2 18 6 22 12 22 C18 22 22 18 22 12 C22 6 18 2 12 2 Z"
        fill="#6db33f"
      />
      <path
        d="M12 4 C7.5 4 4 7.5 4 12 C4 16.5 7.5 20 12 20 C16.5 20 20 16.5 20 12 C20 7.5 16.5 4 12 4 Z"
        fill="white"
      />
    </svg>
  ),
  "Spring Boot": (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path
        d="M12 2 C6 2 2 6 2 12 C2 18 6 22 12 22 C18 22 22 18 22 12 C22 6 18 2 12 2 Z"
        fill="#6db33f"
      />
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fill="white"
        fontSize="8"
        fontWeight="bold"
      >
        SB
      </text>
    </svg>
  ),
  "Spring Security": (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path
        d="M12 2 C6 2 2 6 2 12 C2 18 6 22 12 22 C18 22 22 18 22 12 C22 6 18 2 12 2 Z"
        fill="#6db33f"
      />
      <path
        d="M12 4 C7.5 4 4 7.5 4 12 C4 16.5 7.5 20 12 20 C16.5 20 20 16.5 20 12 C20 7.5 16.5 4 12 4 Z"
        fill="white"
      />
      <path
        d="M12 6 C8.5 6 6 8.5 6 12 C6 15.5 8.5 18 12 18 C15.5 18 18 15.5 18 12 C18 8.5 15.5 6 12 6 Z"
        fill="#6db33f"
      />
      <circle cx="12" cy="12" r="2" fill="white" />
    </svg>
  ),
  "Spring Data JPA": (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path
        d="M12 2 C6 2 2 6 2 12 C2 18 6 22 12 22 C18 22 22 18 22 12 C22 6 18 2 12 2 Z"
        fill="#6db33f"
      />
      <path
        d="M12 4 C7.5 4 4 7.5 4 12 C4 16.5 7.5 20 12 20 C16.5 20 20 16.5 20 12 C20 7.5 16.5 4 12 4 Z"
        fill="white"
      />
      <rect x="8" y="8" width="8" height="8" rx="1" fill="#6db33f" />
      <rect x="9" y="9" width="6" height="6" rx="0.5" fill="white" />
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fill="white"
        fontSize="5"
        fontWeight="bold"
      >
        JPA
      </text>
    </svg>
  ),
  "Spring Data": (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path
        d="M12 2 C6 2 2 6 2 12 C2 18 6 22 12 22 C18 22 22 18 22 12 C22 6 18 2 12 2 Z"
        fill="#6db33f"
      />
      <path
        d="M12 4 C7.5 4 4 7.5 4 12 C4 16.5 7.5 20 12 20 C16.5 20 20 16.5 20 12 C20 7.5 16.5 4 12 4 Z"
        fill="white"
      />
      <rect x="8" y="8" width="8" height="8" rx="1" fill="#6db33f" />
      <rect x="9" y="9" width="6" height="6" rx="0.5" fill="white" />
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fill="white"
        fontSize="6"
        fontWeight="bold"
      >
        SD
      </text>
    </svg>
  ),
  "Spring WebFlux": (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path
        d="M12 2 C6 2 2 6 2 12 C2 18 6 22 12 22 C18 22 22 18 22 12 C22 6 18 2 12 2 Z"
        fill="#6db33f"
      />
      <path
        d="M12 4 C7.5 4 4 7.5 4 12 C4 16.5 7.5 20 12 20 C16.5 20 20 16.5 20 12 C20 7.5 16.5 4 12 4 Z"
        fill="white"
      />
      <path d="M8 8 L16 8 L16 16 L8 16 Z" fill="#6db33f" />
      <path d="M9 9 L15 9 L15 15 L9 15 Z" fill="white" />
      <text
        x="12"
        y="13"
        textAnchor="middle"
        fill="#6db33f"
        fontSize="5"
        fontWeight="bold"
      >
        WF
      </text>
    </svg>
  ),
  Microservicios: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path
        d="M12 2 C6 2 2 6 2 12 C2 18 6 22 12 22 C18 22 22 18 22 12 C22 6 18 2 12 2 Z"
        fill="#ff6b6b"
      />
      <circle cx="8" cy="8" r="2" fill="white" />
      <circle cx="16" cy="8" r="2" fill="white" />
      <circle cx="8" cy="16" r="2" fill="white" />
      <circle cx="16" cy="16" r="2" fill="white" />
      <circle cx="12" cy="12" r="1.5" fill="white" />
    </svg>
  ),
  "Spring Boot 3": (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path
        d="M12 2 C6 2 2 6 2 12 C2 18 6 22 12 22 C18 22 22 18 22 12 C22 6 18 2 12 2 Z"
        fill="#6db33f"
      />
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fill="white"
        fontSize="8"
        fontWeight="bold"
      >
        SB
      </text>
    </svg>
  ),
  "Spring Security 6": (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2 L16 6 L12 10 L8 6 Z" fill="#6db33f" />
      <path d="M12 10 L16 14 L12 18 L8 14 Z" fill="#6db33f" />
    </svg>
  ),
  "Hibernate 6": (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2 L20 6 L20 18 L12 22 L4 18 L4 6 Z" fill="#bcae79" />
      <text
        x="12"
        y="15"
        textAnchor="middle"
        fill="white"
        fontSize="8"
        fontWeight="bold"
      >
        H
      </text>
    </svg>
  ),
  "REST APIs": (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M4 6 L20 6 L20 8 L4 8 Z" fill="#ff6b6b" />
      <path d="M4 10 L20 10 L20 12 L4 12 Z" fill="#4ecdc4" />
      <path d="M4 14 L20 14 L20 16 L4 16 Z" fill="#45b7d1" />
      <path d="M4 18 L20 18 L20 20 L4 20 Z" fill="#96ceb4" />
    </svg>
  ),
  GraphQL: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2 L20 6 L20 18 L12 22 L4 18 L4 6 Z" fill="#e10098" />
      <path d="M12 6 L16 8 L12 10 L8 8 Z" fill="white" />
    </svg>
  ),
  Microservices: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <rect x="2" y="2" width="6" height="6" rx="1" fill="#ff6b6b" />
      <rect x="9" y="2" width="6" height="6" rx="1" fill="#4ecdc4" />
      <rect x="16" y="2" width="6" height="6" rx="1" fill="#45b7d1" />
      <rect x="2" y="9" width="6" height="6" rx="1" fill="#96ceb4" />
      <rect x="9" y="9" width="6" height="6" rx="1" fill="#feca57" />
      <rect x="16" y="9" width="6" height="6" rx="1" fill="#ff9ff3" />
    </svg>
  ),

  // Database
  "MySQL 8": (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path
        d="M12 2 C6 2 2 6 2 12 C2 18 6 22 12 22 C18 22 22 18 22 12 C22 6 18 2 12 2 Z"
        fill="#4479a1"
      />
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fill="white"
        fontSize="8"
        fontWeight="bold"
      >
        SQL
      </text>
    </svg>
  ),
  MySQL: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path
        d="M12 2 C6 2 2 6 2 12 C2 18 6 22 12 22 C18 22 22 18 22 12 C22 6 18 2 12 2 Z"
        fill="#4479a1"
      />
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fill="white"
        fontSize="8"
        fontWeight="bold"
      >
        SQL
      </text>
    </svg>
  ),
  PostgreSQL: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <ellipse cx="12" cy="12" rx="8" ry="10" fill="#336791" />
      <text
        x="12"
        y="15"
        textAnchor="middle"
        fill="white"
        fontSize="8"
        fontWeight="bold"
      >
        SQL
      </text>
    </svg>
  ),
  MongoDB: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path
        d="M12 2 C8 2 6 6 6 10 C6 14 8 18 12 22 C16 18 18 14 18 10 C18 6 16 2 12 2 Z"
        fill="#47a248"
      />
      <path d="M12 2 L12 22" stroke="#fff" strokeWidth="1" />
    </svg>
  ),
  Redis: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path
        d="M12 2 C6 2 2 6 2 12 C2 18 6 22 12 22 C18 22 22 18 22 12 C22 6 18 2 12 2 Z"
        fill="#dc382d"
      />
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fill="white"
        fontSize="8"
        fontWeight="bold"
      >
        R
      </text>
    </svg>
  ),
  Elasticsearch: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path
        d="M12 2 C6 2 2 6 2 12 C2 18 6 22 12 22 C18 22 22 18 22 12 C22 6 18 2 12 2 Z"
        fill="#005571"
      />
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fill="white"
        fontSize="6"
        fontWeight="bold"
      >
        ES
      </text>
    </svg>
  ),
  "SQL Server": (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path
        d="M12 2 C6 2 2 6 2 12 C2 18 6 22 12 22 C18 22 22 18 22 12 C22 6 18 2 12 2 Z"
        fill="#cc2927"
      />
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fill="white"
        fontSize="6"
        fontWeight="bold"
      >
        SQL
      </text>
    </svg>
  ),

  // Cloud & DevOps
  AWS: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M6 8 L18 8 L15 14 L9 14 Z" fill="#ff9900" />
      <path
        d="M4 16 L20 16 C20.5 16 21 16.5 21 17 C21 17.5 20.5 18 20 18 L4 18 C3.5 18 3 17.5 3 17 C3 16.5 3.5 16 4 16 Z"
        fill="#ff9900"
      />
    </svg>
  ),
  Docker: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path
        d="M12 2 C6 2 2 6 2 12 C2 18 6 22 12 22 C18 22 22 18 22 12 C22 6 18 2 12 2 Z"
        fill="#2496ed"
      />
      <rect x="6" y="8" width="2" height="2" fill="white" />
      <rect x="9" y="8" width="2" height="2" fill="white" />
      <rect x="12" y="8" width="2" height="2" fill="white" />
      <rect x="15" y="8" width="2" height="2" fill="white" />
      <rect x="6" y="11" width="2" height="2" fill="white" />
      <rect x="9" y="11" width="2" height="2" fill="white" />
      <rect x="12" y="11" width="2" height="2" fill="white" />
      <rect x="15" y="11" width="2" height="2" fill="white" />
      <rect x="9" y="14" width="2" height="2" fill="white" />
      <rect x="12" y="14" width="2" height="2" fill="white" />
      <rect x="15" y="14" width="2" height="2" fill="white" />
    </svg>
  ),
  Jenkins: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2 L20 6 L20 18 L12 22 L4 18 L4 6 Z" fill="#d24939" />
      <path d="M8 8 L16 8 L16 16 L8 16 Z" fill="white" />
    </svg>
  ),
  Git: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path
        d="M12 2 C6 2 2 6 2 12 C2 18 6 22 12 22 C18 22 22 18 22 12 C22 6 18 2 12 2 Z"
        fill="#f05032"
      />
      <path d="M8 8 L16 8 L16 16 L8 16 Z" fill="white" />
      <path d="M10 10 L14 10 L14 14 L10 14 Z" fill="#f05032" />
      <circle cx="9" cy="9" r="1" fill="white" />
      <circle cx="15" cy="9" r="1" fill="white" />
      <circle cx="9" cy="15" r="1" fill="white" />
      <circle cx="15" cy="15" r="1" fill="white" />
    </svg>
  ),
  NGINX: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2 L20 6 L20 18 L12 22 L4 18 L4 6 Z" fill="#009639" />
      <text
        x="12"
        y="15"
        textAnchor="middle"
        fill="white"
        fontSize="8"
        fontWeight="bold"
      >
        N
      </text>
    </svg>
  ),
  Kubernetes: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2 L20 6 L20 18 L12 22 L4 18 L4 6 Z" fill="#326ce5" />
      <circle cx="12" cy="12" r="3" fill="white" />
    </svg>
  ),
  Terraform: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path
        d="M12 2 C6 2 2 6 2 12 C2 18 6 22 12 22 C18 22 22 18 22 12 C22 6 18 2 12 2 Z"
        fill="#623ce4"
      />
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fill="white"
        fontSize="6"
        fontWeight="bold"
      >
        T
      </text>
    </svg>
  ),
  Serverless: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path
        d="M12 2 C6 2 2 6 2 12 C2 18 6 22 12 22 C18 22 22 18 22 12 C22 6 18 2 12 2 Z"
        fill="#fd5750"
      />
      <path d="M8 8 L16 8 L16 16 L8 16 Z" fill="white" />
    </svg>
  ),

  // State Management & Libraries
  "RTK Query": (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path
        d="M12 2 C6 2 2 6 2 12 C2 18 6 22 12 22 C18 22 22 18 22 12 C22 6 18 2 12 2 Z"
        fill="#764abc"
      />
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fill="white"
        fontSize="6"
        fontWeight="bold"
      >
        RTK
      </text>
    </svg>
  ),
  RxJS: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path
        d="M12 2 C6 2 2 6 2 12 C2 18 6 22 12 22 C18 22 22 18 22 12 C22 6 18 2 12 2 Z"
        fill="#b7178c"
      />
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fill="white"
        fontSize="8"
        fontWeight="bold"
      >
        R
      </text>
    </svg>
  ),
  Zod: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path
        d="M12 2 C6 2 2 6 2 12 C2 18 6 22 12 22 C18 22 22 18 22 12 C22 6 18 2 12 2 Z"
        fill="#3e63dd"
      />
      <path d="M8 8 L16 8 L16 16 L8 16 Z" fill="white" />
      <path d="M10 10 L14 10 L14 14 L10 14 Z" fill="#3e63dd" />
    </svg>
  ),
  "Firebase Database": (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path
        d="M12 2 C6 2 2 6 2 12 C2 18 6 22 12 22 C18 22 22 18 22 12 C22 6 18 2 12 2 Z"
        fill="#ffca28"
      />
      <path
        d="M12 4 C7.5 4 4 7.5 4 12 C4 16.5 7.5 20 12 20 C16.5 20 20 16.5 20 12 C20 7.5 16.5 4 12 4 Z"
        fill="white"
      />
      <rect x="8" y="8" width="8" height="8" rx="1" fill="#ffca28" />
      <rect x="9" y="9" width="6" height="6" rx="0.5" fill="white" />
      <rect x="10" y="10" width="4" height="4" rx="0.5" fill="#ffca28" />
    </svg>
  ),
  "React Router 6": (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2 L20 6 L20 18 L12 22 L4 18 L4 6 Z" fill="#ca4245" />
      <text
        x="12"
        y="15"
        textAnchor="middle"
        fill="white"
        fontSize="6"
        fontWeight="bold"
      >
        RR
      </text>
    </svg>
  ),
  "React Navigation 6": (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2 L20 6 L20 18 L12 22 L4 18 L4 6 Z" fill="#61dafb" />
      <text
        x="12"
        y="15"
        textAnchor="middle"
        fill="white"
        fontSize="6"
        fontWeight="bold"
      >
        RN
      </text>
    </svg>
  ),
  Axios: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path
        d="M12 2 C6 2 2 6 2 12 C2 18 6 22 12 22 C18 22 22 18 22 12 C22 6 18 2 12 2 Z"
        fill="#5a29e4"
      />
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fill="white"
        fontSize="8"
        fontWeight="bold"
      >
        A
      </text>
    </svg>
  ),
  Lodash: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path
        d="M12 2 C6 2 2 6 2 12 C2 18 6 22 12 22 C18 22 22 18 22 12 C22 6 18 2 12 2 Z"
        fill="#3492ff"
      />
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fill="white"
        fontSize="8"
        fontWeight="bold"
      >
        L
      </text>
    </svg>
  ),

  // Testing
  Jest: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path
        d="M12 2 C6 2 2 6 2 12 C2 18 6 22 12 22 C18 22 22 18 22 12 C22 6 18 2 12 2 Z"
        fill="#c21325"
      />
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fill="white"
        fontSize="8"
        fontWeight="bold"
      >
        J
      </text>
    </svg>
  ),
  "React Testing Library": (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path
        d="M12 2 C6 2 2 6 2 12 C2 18 6 22 12 22 C18 22 22 18 22 12 C22 6 18 2 12 2 Z"
        fill="#61dafb"
      />
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fill="white"
        fontSize="6"
        fontWeight="bold"
      >
        RTL
      </text>
    </svg>
  ),
  Jasmine: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path
        d="M12 2 C6 2 2 6 2 12 C2 18 6 22 12 22 C18 22 22 18 22 12 C22 6 18 2 12 2 Z"
        fill="#8a4182"
      />
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fill="white"
        fontSize="8"
        fontWeight="bold"
      >
        J
      </text>
    </svg>
  ),
  Karma: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path
        d="M12 2 C6 2 2 6 2 12 C2 18 6 22 12 22 C18 22 22 18 22 12 C22 6 18 2 12 2 Z"
        fill="#c76b19"
      />
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fill="white"
        fontSize="8"
        fontWeight="bold"
      >
        K
      </text>
    </svg>
  ),
  Cypress: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path
        d="M12 2 C6 2 2 6 2 12 C2 18 6 22 12 22 C18 22 22 18 22 12 C22 6 18 2 12 2 Z"
        fill="#17202c"
      />
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fill="white"
        fontSize="8"
        fontWeight="bold"
      >
        C
      </text>
    </svg>
  ),
  Playwright: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path
        d="M12 2 C6 2 2 6 2 12 C2 18 6 22 12 22 C18 22 22 18 22 12 C22 6 18 2 12 2 Z"
        fill="#2eade0"
      />
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fill="white"
        fontSize="8"
        fontWeight="bold"
      >
        P
      </text>
    </svg>
  ),

  // Tools
  Jira: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path
        d="M12 2 C6 2 2 6 2 12 C2 18 6 22 12 22 C18 22 22 18 22 12 C22 6 18 2 12 2 Z"
        fill="#0052cc"
      />
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fill="white"
        fontSize="8"
        fontWeight="bold"
      >
        J
      </text>
    </svg>
  ),
  Figma: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path
        d="M12 2 C6 2 2 6 2 12 C2 18 6 22 12 22 C18 22 22 18 22 12 C22 6 18 2 12 2 Z"
        fill="#f24e1e"
      />
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fill="white"
        fontSize="8"
        fontWeight="bold"
      >
        F
      </text>
    </svg>
  ),
  Postman: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path
        d="M12 2 C6 2 2 6 2 12 C2 18 6 22 12 22 C18 22 22 18 22 12 C22 6 18 2 12 2 Z"
        fill="#ff6c37"
      />
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fill="white"
        fontSize="8"
        fontWeight="bold"
      >
        P
      </text>
    </svg>
  ),
  "Swagger/OpenAPI": (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path
        d="M12 2 C6 2 2 6 2 12 C2 18 6 22 12 22 C18 22 22 18 22 12 C22 6 18 2 12 2 Z"
        fill="#85ea2d"
      />
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fill="white"
        fontSize="6"
        fontWeight="bold"
      >
        API
      </text>
    </svg>
  ),
  "IntelliJ IDEA": (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path
        d="M12 2 C6 2 2 6 2 12 C2 18 6 22 12 22 C18 22 22 18 22 12 C22 6 18 2 12 2 Z"
        fill="#000000"
      />
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fill="white"
        fontSize="8"
        fontWeight="bold"
      >
        I
      </text>
    </svg>
  ),
  "VS Code": (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path
        d="M12 2 C6 2 2 6 2 12 C2 18 6 22 12 22 C18 22 22 18 22 12 C22 6 18 2 12 2 Z"
        fill="#007acc"
      />
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fill="white"
        fontSize="8"
        fontWeight="bold"
      >
        VS
      </text>
    </svg>
  ),
  "Android Studio": (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path
        d="M12 2 C6 2 2 6 2 12 C2 18 6 22 12 22 C18 22 22 18 22 12 C22 6 18 2 12 2 Z"
        fill="#3ddc84"
      />
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fill="white"
        fontSize="6"
        fontWeight="bold"
      >
        AS
      </text>
    </svg>
  ),

  // Methodologies
  SCRUM: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path
        d="M12 2 C6 2 2 6 2 12 C2 18 6 22 12 22 C18 22 22 18 22 12 C22 6 18 2 12 2 Z"
        fill="#ff6b6b"
      />
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fill="white"
        fontSize="8"
        fontWeight="bold"
      >
        S
      </text>
    </svg>
  ),
  Kanban: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path
        d="M12 2 C6 2 2 6 2 12 C2 18 6 22 12 22 C18 22 22 18 22 12 C22 6 18 2 12 2 Z"
        fill="#4ecdc4"
      />
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fill="white"
        fontSize="8"
        fontWeight="bold"
      >
        K
      </text>
    </svg>
  ),
  Agile: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path
        d="M12 2 C6 2 2 6 2 12 C2 18 6 22 12 22 C18 22 22 18 22 12 C22 6 18 2 12 2 Z"
        fill="#45b7d1"
      />
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fill="white"
        fontSize="8"
        fontWeight="bold"
      >
        A
      </text>
    </svg>
  ),
  "Agile/Scrum": (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path
        d="M12 2 C6 2 2 6 2 12 C2 18 6 22 12 22 C18 22 22 18 22 12 C22 6 18 2 12 2 Z"
        fill="#45b7d1"
      />
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fill="white"
        fontSize="6"
        fontWeight="bold"
      >
        A/S
      </text>
    </svg>
  ),
  Microapps: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path
        d="M12 2 C6 2 2 6 2 12 C2 18 6 22 12 22 C18 22 22 18 22 12 C22 6 18 2 12 2 Z"
        fill="#a55eea"
      />
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fill="white"
        fontSize="6"
        fontWeight="bold"
      >
        MA
      </text>
    </svg>
  ),
  "CI/CD": (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path
        d="M12 2 C6 2 2 6 2 12 C2 18 6 22 12 22 C18 22 22 18 22 12 C22 6 18 2 12 2 Z"
        fill="#26de81"
      />
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fill="white"
        fontSize="6"
        fontWeight="bold"
      >
        CI
      </text>
    </svg>
  ),
  TDD: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path
        d="M12 2 C6 2 2 6 2 12 C2 18 6 22 12 22 C18 22 22 18 22 12 C22 6 18 2 12 2 Z"
        fill="#96ceb4"
      />
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fill="white"
        fontSize="8"
        fontWeight="bold"
      >
        T
      </text>
    </svg>
  ),
  BDD: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path
        d="M12 2 C6 2 2 6 2 12 C2 18 6 22 12 22 C18 22 22 18 22 12 C22 6 18 2 12 2 Z"
        fill="#feca57"
      />
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fill="white"
        fontSize="8"
        fontWeight="bold"
      >
        B
      </text>
    </svg>
  ),
};

const levelColors = {
  Beginner: {
    bg: "bg-yellow-500/20",
    text: "text-yellow-300",
    border: "border-yellow-500/30",
  },
  Intermediate: {
    bg: "bg-blue-500/20",
    text: "text-blue-300",
    border: "border-blue-500/30",
  },
  Advanced: {
    bg: "bg-green-500/20",
    text: "text-green-300",
    border: "border-green-500/30",
  },
  Expert: {
    bg: "bg-purple-500/20",
    text: "text-purple-300",
    border: "border-purple-500/30",
  },
};

const sizeClasses = {
  sm: "w-6 h-6",
  md: "w-8 h-8 sm:w-10 sm:h-10",
  lg: "w-16 h-16",
};

const TechIcon: React.FC<TechIconProps> = ({
  name,
  level,
  years,
  size = "md",
}) => {
  const sizeClass = sizeClasses[size];
  const icon = techIcons[name];

  return (
    <div
      className={`${sizeClass} flex items-center justify-center relative overflow-hidden`}
    >
      {icon ? (
        <div className="w-full h-full flex items-center justify-center p-1">
          <div className="w-full h-full flex items-center justify-center">
            {icon}
          </div>
        </div>
      ) : (
        <div
          className={`${sizeClass} rounded-lg bg-muted flex items-center justify-center`}
        >
          <span className="text-xs font-bold text-muted-foreground">
            {name.slice(0, 2).toUpperCase()}
          </span>
        </div>
      )}
    </div>
  );
};

export default TechIcon;
