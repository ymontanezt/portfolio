"use client"

import Head from "next/head"

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: "website" | "article" | "profile"
  author?: string
  publishedTime?: string
  modifiedTime?: string
  section?: string
  locale?: string
}

const SEOHead: React.FC<SEOProps> = ({
  title = "Yuri Michael Montañez Tuncar - Senior Software Engineer | Full Stack Developer",
  description = "Senior Software Engineer especializado en desarrollo full-stack con React, Next.js, TypeScript y tecnologías modernas. Experiencia en AWS, arquitecturas escalables y optimización de performance.",
  keywords = [
    "Yuri Montañez",
    "Software Engineer", 
    "Full Stack Developer",
    "React Developer",
    "Next.js Expert",
    "TypeScript",
    "AWS Solutions Architect",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript",
    "Node.js",
    "Python",
    "Portfolio",
    "Desarrollo Web",
    "Aplicaciones Web"
  ],
  image = "/professional-developer-headshot.svg",
  url = "https://portfolio-yuri-montanez.vercel.app",
  type = "website",
  author = "Yuri Michael Montañez Tuncar",
  publishedTime,
  modifiedTime,
  section,
  locale = "es_ES"
}) => {
  const fullTitle = title.includes("Yuri") ? title : `${title} | Yuri Montañez`
  const fullUrl = url.startsWith("http") ? url : `https://portfolio-yuri-montanez.vercel.app${url}`
  const fullImageUrl = image.startsWith("http") ? image : `https://portfolio-yuri-montanez.vercel.app${image}`

  // Structured Data para Google
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Yuri Michael Montañez Tuncar",
    "alternateName": "Yuri Montañez",
    "description": description,
    "url": fullUrl,
    "image": fullImageUrl,
    "sameAs": [
      "https://www.linkedin.com/in/yuri-michael-montañez-tuncar-39744496/",
      "https://github.com/ymontanez"
    ],
    "jobTitle": "Senior Software Engineer",
    "worksFor": {
      "@type": "Organization", 
      "name": "Freelance"
    },
    "knowsAbout": [
      "React",
      "Next.js", 
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Python",
      "AWS",
      "Software Architecture",
      "Full Stack Development",
      "Frontend Development",
      "Backend Development"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Universidad"
    }
  }

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Viewport and Mobile */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Language and Locale */}
      <meta httpEquiv="content-language" content="es-ES" />
      <meta name="language" content="Spanish" />
      <link rel="alternate" hrefLang="es" href={fullUrl} />
      <link rel="alternate" hrefLang="en" href={fullUrl.replace("/es", "/en")} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:alt" content={`${author} - Professional Photo`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content="Yuri Montañez Portfolio" />
      <meta property="og:locale" content={locale} />
      <meta property="og:locale:alternate" content="en_US" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@yurimontanez" />
      <meta name="twitter:creator" content="@yurimontanez" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:image:alt" content={`${author} - Professional Developer`} />
      
      {/* LinkedIn */}
      <meta property="linkedin:owner" content="yuri-michael-montañez-tuncar-39744496" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#10b981" />
      <meta name="msapplication-TileColor" content="#10b981" />
      <meta name="application-name" content="Yuri Montañez Portfolio" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Favicon and Icons */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="icon" type="image/png" href="/favicon.png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />
      
      {/* Preconnect for Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//vercel.app" />
      <link rel="dns-prefetch" href="//github.com" />
      <link rel="dns-prefetch" href="//linkedin.com" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      
      {/* Additional Meta for Professional Portfolio */}
      <meta name="category" content="Technology" />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="General" />
      <meta name="target" content="Developers, Recruiters, Tech Companies" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="MobileOptimized" content="320" />
      
      {/* Professional Skills Meta */}
      <meta name="skills" content="React, Next.js, TypeScript, JavaScript, Node.js, Python, AWS, Docker, PostgreSQL, MongoDB" />
      <meta name="experience" content="Senior Software Engineer, Full Stack Developer, Frontend Specialist" />
      <meta name="location" content="Available Worldwide, Remote Work" />
      
      {/* Page-specific meta */}
      {type === "article" && (
        <>
          <meta property="article:author" content={author} />
          <meta property="article:section" content={section || "Technology"} />
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
        </>
      )}
    </Head>
  )
}

export default SEOHead
