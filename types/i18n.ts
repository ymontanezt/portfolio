export type Language = "en" | "es";

export interface Translation {
  nav: {
    home: string;
    projects: string;
    experience: string;
    skills: string;
    about: string;
    aboutSubtitle: string;
    education: string;
    certifications: string;
    contact: string;
  };
  hero: {
    greeting: string;
    name: string;
    title: string;
    description: string;
    downloadCV: string;
    contactMe: string;
  };
  projects: {
    title: string;
    subtitle: string;
    viewCode: string;
    viewDemo: string;
    privateRepo: string;
    technologies: string;
    live: string;
    code: string;
    private: string;
    viewDetails: string;
    performance: string;
    complexity: string;
    developmentTime: string;
    impact: string;
    viewProject: string;
    interestedInMore: string;
    viewOnGitHub: string;
    collaborate: string;
    more: string;
    detailedDescription: string;
    mainFeatures: string;
    technicalChallenges: string;
    techStack: string;
    projectMetrics: string;
    projectImpact: string;
    lighthouseScores: string;
    viewLiveProject: string;
    viewSourceCode: string;
    privateProjectMessage: string;
    users: string;
    accessibility: string;
    bestPractices: string;
    seo: string;
  };
  experience: {
    title: string;
    subtitle: string;
    present: string;
    completed: string;
    current: string;
    keyAchievements: string;
    technologiesUsed: string;
    interestedInWorking: string;
    letsConnect: string;
    noDataAvailable: string;
  };
  skills: {
    title: string;
    subtitle: string;
    certifications: string;
    certificationsSubtitle: string;
    techStackTitle: string;
    techStackSubtitle: string;
  };
  education: {
    title: string;
    subtitle: string;
    degree: string;
    institution: string;
    period: string;
    location: string;
    gpa: string;
    relevantCourses: string;
  };
  certifications: {
    title: string;
    subtitle: string;
    issuer: string;
    date: string;
    credentialId: string;
    description: string;
    skills: string;
    verify: string;
  };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    phone: string;
    message: string;
    send: string;
    sending: string;
    completeFields: string;
    messageSent: string;
    sendError: string;
    availableNow: string;
    contactInfo: string;
    emailLabel: string;
    linkedinLabel: string;
    linkedinDesc: string;
    githubLabel: string;
    githubDesc: string;
    whatsappLabel: string;
    whatsappNumber: string;
    buildTogether: string;
    validation: {
      nameRequired: string;
      nameMinLength: string;
      emailRequired: string;
      emailInvalid: string;
      phoneRequired: string;
      phoneInvalid: string;
      messageRequired: string;
      messageMinLength: string;
    };
    whatsappMessage: {
      greeting: string;
      fromPortfolio: string;
      name: string;
      email: string;
      phone: string;
      message: string;
      sentFrom: string;
      date: string;
    };
  };
  privateModal: {
    title: string;
    description: string;
    reason: string;
    close: string;
  };
  testimonials: {
    title: string;
    subtitle: string;
    interestedInWorking: string;
    connectOnLinkedIn: string;
    pause: string;
    play: string;
  };
  common: {
    loading: string;
    error: string;
  };
  footer: {
    copyright: string;
    aboutMe: string;
  };
  aboutMe: {
    title: string;
    subtitle: string;
    professionalSummary: {
      title: string;
      description: string;
      badges: {
        fullStack: string;
        mobile: string;
        agile: string;
        cloud: string;
      };
    };
    experience: {
      title: string;
      positions: {
        softwareEngineer: {
          title: string;
          period: string;
          company: string;
          description: string;
          technologies: string[];
        };
        frontAgileDeveloper: {
          title: string;
          period: string;
          company: string;
          description: string;
          technologies: string[];
        };
        fullStackDeveloper: {
          title: string;
          period: string;
          company: string;
          description: string;
          technologies: string[];
        };
        developmentEngineer: {
          title: string;
          period: string;
          company: string;
          description: string;
        };
        developmentAnalyst: {
          title: string;
          period: string;
          company: string;
          description: string;
        };
      };
    };
    education: {
      title: string;
      studies: {
        english: {
          title: string;
          institution: string;
          period: string;
        };
        masters: {
          title: string;
          institution: string;
          period: string;
        };
        bachelor: {
          title: string;
          institution: string;
          period: string;
        };
      };
    };
    certifications: {
      title: string;
      items: {
        scrum: {
          title: string;
          issuer: string;
          period: string;
          status: string;
        };
        android: {
          title: string;
          issuer: string;
          period: string;
          status: string;
        };
        aws: {
          title: string;
          issuer: string;
          period: string;
          status: string;
        };
        java: {
          title: string;
          issuer: string;
          period: string;
          status: string;
        };
      };
    };
    skills: {
      title: string;
      categories: {
        frontend: string;
        backend: string;
        mobile: string;
        cloudDevOps: string;
      };
      technologies: {
        frontend: string[];
        backend: string[];
        mobile: string[];
        cloudDevOps: string[];
      };
    };
    additionalInfo: {
      title: string;
      workMethodologies: {
        title: string;
        items: string[];
      };
      experienceSectors: {
        title: string;
        items: string[];
      };
      achievements: {
        title: string;
        items: {
          aunaProject: {
            title: string;
            description: string;
          };
          bffArchitecture: {
            title: string;
            description: string;
          };
          microfrontends: {
            title: string;
            description: string;
          };
          performanceOptimization: {
            title: string;
            description: string;
          };
        };
      };
      softSkills: {
        title: string;
        items: {
          technicalLeadership: {
            title: string;
            description: string;
          };
          problemSolving: {
            title: string;
            description: string;
          };
          communication: {
            title: string;
            description: string;
          };
        };
      };
    };
    callToAction: {
      title: string;
      description: string;
      contactMe: string;
      viewPortfolio: string;
    };
  };
}
