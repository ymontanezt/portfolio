import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Fira_Code, Inter } from "next/font/google";
import type React from "react";
import ErrorBoundary from "../components/ErrorBoundary";
import Footer from "../components/Footer";
import { I18nProvider } from "../contexts/I18nContext";
import { ThemeProvider } from "../contexts/ThemeContext";
import "./globals.css";
import { themeScript } from "./theme-script";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fira-code",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://michcode.dev"),
  title:
    "Yuri Michael Montañez Tuncar | michcode - Ingeniero de Sistemas | Full Stack Developer",
  description:
    "Portfolio profesional de Yuri Michael Montañez Tuncar (michcode) - Ingeniero de Sistemas con más de 8 años de experiencia en desarrollo full-stack, Spring Framework, Angular, React, React Native y arquitecturas de microservicios.",
  keywords: [
    "Yuri Michael Montañez Tuncar",
    "Yuri Montañez",
    "michcode",
    "Ingeniero de Sistemas",
    "Full Stack Developer",
    "Spring Framework",
    "Angular",
    "React",
    "React Native",
    "Node.js",
    "Java",
    "TypeScript",
    "Microservicios",
    "AWS",
    "Docker",
    "Portfolio",
  ],
  authors: [
    { name: "Yuri Michael Montañez Tuncar", url: "https://michcode.dev" },
  ],
  creator: "Yuri Michael Montañez Tuncar",
  publisher: "michcode",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    alternateLocale: ["en_US"],
    url: "https://michcode.dev",
    siteName: "michcode - Yuri Montañez Portfolio",
    title:
      "Yuri Michael Montañez Tuncar | michcode - Ingeniero de Sistemas | Full Stack Developer",
    description:
      "Portfolio profesional mostrando experiencia en desarrollo full-stack, Spring Framework, Angular, React, React Native y arquitecturas de microservicios.",
    images: [
      {
        url: "/yuri-montanez-profile.jpg",
        width: 1200,
        height: 630,
        alt: "Yuri Michael Montañez Tuncar - Ingeniero de Sistemas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yuri Michael Montañez Tuncar | michcode - Ingeniero de Sistemas",
    description:
      "Portfolio profesional mostrando experiencia en desarrollo full-stack y tecnologías modernas.",
    images: ["/yuri-montanez-profile.jpg"],
    creator: "@michcode",
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://michcode.dev",
    languages: {
      "es-ES": "https://michcode.dev/es",
      "en-US": "https://michcode.dev/en",
    },
  },
  generator: "Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        {/* Preload critical resources */}
        <link
          rel="preload"
          href="/yuri-montanez-profile.jpg"
          as="image"
          type="image/jpeg"
        />
        <link
          rel="preload"
          href="/fonts/inter.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/fira-code.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {/* JSON-LD temporalmente removido para debug */}
        <script
          dangerouslySetInnerHTML={{
            __html: themeScript,
          }}
        />
      </head>
      <body
        className={`font-sans ${inter.variable} ${firaCode.variable} antialiased`}
      >
        <ErrorBoundary>
          <ThemeProvider>
            <I18nProvider>
              {children}
              <Footer />
            </I18nProvider>
          </ThemeProvider>
        </ErrorBoundary>
        <Analytics />
      </body>
    </html>
  );
}
