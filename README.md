# 🚀 Portfolio Personal - Yuri Michael Montañez Tuncar

[![Next.js](https://img.shields.io/badge/Next.js-15.1.3-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.15.0-0055FF?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

> Portfolio profesional desarrollado con tecnologías modernas, mostrando experiencia en desarrollo full-stack, arquitecturas de microservicios y mejores prácticas de desarrollo.

## 🌟 Características

### ✨ **Funcionalidades Principales**
- 🎨 **Diseño Responsivo** - Adaptable a todos los dispositivos
- 🌍 **Internacionalización** - Soporte para Español e Inglés
- 🌙 **Tema Oscuro/Claro** - Interfaz adaptable con persistencia
- ⚡ **Performance Optimizada** - Carga rápida y experiencia fluida
- 🔍 **SEO Optimizado** - Metadatos, sitemap y robots.txt
- 📱 **PWA Ready** - Preparado para instalación como app

### 🛠️ **Tecnologías Utilizadas**
- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **UI Components**: Radix UI, Lucide React
- **Deployment**: Vercel
- **Analytics**: Vercel Analytics

## 🚀 Inicio Rápido

### Prerrequisitos
- Node.js 18+ 
- pnpm (recomendado) o npm

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/ymontanezt/portfolio.git

# Navegar al directorio
cd portfolio

# Instalar dependencias
pnpm install
# o
npm install

# Ejecutar en modo desarrollo
pnpm dev
# o
npm run dev
```

### Scripts Disponibles

```bash
# Desarrollo
pnpm dev          # Servidor de desarrollo en http://localhost:3000

# Producción
pnpm build        # Construir para producción
pnpm start        # Servidor de producción
pnpm lint         # Ejecutar linter

# Análisis
pnpm analyze      # Analizar bundle (si está configurado)
```

## 📁 Estructura del Proyecto

```
portfolio/
├── app/                    # App Router de Next.js
│   ├── globals.css        # Estilos globales
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página principal
│   ├── robots.ts          # Configuración de robots
│   ├── sitemap.ts         # Generación de sitemap
│   └── sobre-mi/          # Página "Sobre mí"
├── components/            # Componentes reutilizables
│   ├── ui/               # Componentes base de UI
│   ├── Hero.tsx          # Sección principal
│   ├── PortfolioTabs.tsx # Pestañas de portfolio
│   └── ...               # Otros componentes
├── contexts/             # Contextos de React
│   ├── I18nContext.tsx   # Internacionalización
│   └── ThemeContext.tsx  # Gestión de temas
├── data/                 # Datos y traducciones
│   ├── mock/            # Datos mock
│   └── translations/    # Archivos de traducción
├── hooks/               # Custom hooks
├── lib/                 # Utilidades y helpers
├── public/              # Archivos estáticos
├── services/            # Servicios de datos
├── types/               # Definiciones de TypeScript
└── repositories/        # Repositorios de datos
```

## 🎯 Secciones del Portfolio

### 🏠 **Hero Section**
- Presentación personal con animaciones
- Terminal animado con tecnologías
- Botones de contacto directo

### 💼 **Proyectos**
- Grid responsivo de proyectos
- Modal detallado con información completa
- Filtros por tecnología y categoría
- Métricas de impacto y resultados

### 🚀 **Experiencia**
- Timeline de experiencia profesional
- Descripción detallada de roles
- Tecnologías utilizadas en cada posición
- Logros y responsabilidades clave

### 🛠️ **Habilidades**
- Categorización por tipo de tecnología
- Niveles de experiencia (Expert, Advanced, Intermediate)
- Iconos personalizados para cada tecnología
- Animaciones hover interactivas

### 💬 **Testimonios**
- Recomendaciones de colegas y clientes
- Sistema de rotación automática
- Diseño de tarjetas elegante

### 📞 **Contacto**
- Formulario de contacto funcional
- Enlaces a redes sociales
- Información de contacto directo

## 🌍 Internacionalización

El portfolio soporta múltiples idiomas:

- 🇪🇸 **Español** (idioma principal)
- 🇺🇸 **Inglés** (traducción completa)

### Agregar Nuevos Idiomas

1. Crear archivo en `data/translations/[idioma].ts`
2. Agregar tipo en `types/i18n.ts`
3. Actualizar `I18nContext.tsx`

## 🎨 Personalización

### Colores y Temas

Los colores se pueden personalizar en `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: "hsl(var(--primary))",
      secondary: "hsl(var(--secondary))",
      // ... más colores
    }
  }
}
```

### Contenido

- **Datos personales**: `data/mock/hero.ts`
- **Proyectos**: `data/mock/projects.ts`
- **Experiencia**: `data/mock/experience.ts`
- **Habilidades**: `data/mock/skills.ts`

## 🚀 Deployment

### Vercel (Recomendado)

1. Conectar repositorio en [Vercel](https://vercel.com)
2. Configurar variables de entorno (si es necesario)
3. Deploy automático en cada push a `main`

### Otros Proveedores

- **Netlify**: Compatible con Next.js
- **AWS Amplify**: Soporte nativo
- **Railway**: Deploy simple

## 📊 Performance

### Métricas Objetivo
- **Lighthouse Score**: 90+
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

### Optimizaciones Implementadas
- ✅ **Image Optimization** - Next.js Image
- ✅ **Code Splitting** - Lazy loading automático
- ✅ **Font Optimization** - Google Fonts optimizadas
- ✅ **Bundle Analysis** - Análisis de tamaño
- ✅ **SEO Meta Tags** - Metadatos completos

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 👨‍💻 Autor

**Yuri Michael Montañez Tuncar**
- GitHub: [@ymontanezt](https://github.com/ymontanezt)
- LinkedIn: [Yuri Montañez](https://www.linkedin.com/in/yuri-michael-montañez-tuncar-39744496/)
- Email: yuri.montanez@michcode.dev
- Portfolio: [michcode.dev](https://michcode.dev)

## 🙏 Agradecimientos

- [Next.js](https://nextjs.org/) - Framework de React
- [Tailwind CSS](https://tailwindcss.com/) - Framework de CSS
- [Framer Motion](https://www.framer.com/motion/) - Animaciones
- [Radix UI](https://www.radix-ui.com/) - Componentes accesibles
- [Lucide](https://lucide.dev/) - Iconos

---

⭐ **¡Si te gusta este proyecto, no olvides darle una estrella!** ⭐
