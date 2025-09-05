"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import type { Language, Translation } from "../types/i18n"
import { en } from "../data/translations/en"
import { es } from "../data/translations/es"

interface I18nContextType {
  language: Language
  translation: Translation
  setLanguage: (lang: Language) => void
  availableLanguages: Language[]
}

const translations: Record<Language, Translation> = {
  en,
  es,
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

interface I18nProviderProps {
  children: ReactNode
}

export function I18nProvider({ children }: I18nProviderProps) {
  const [language, setLanguageState] = useState<Language>("es") // Default to Spanish
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Only access browser APIs after component mounts
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem("portfolio-language") as Language
      const browserLanguage = navigator.language.split("-")[0] as Language

      if (savedLanguage && translations[savedLanguage]) {
        setLanguageState(savedLanguage)
      } else if (translations[browserLanguage]) {
        setLanguageState(browserLanguage)
      }
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    if (mounted && typeof window !== 'undefined') {
      localStorage.setItem("portfolio-language", lang)
    }
  }

  const value: I18nContextType = {
    language,
    translation: translations[language],
    setLanguage,
    availableLanguages: Object.keys(translations) as Language[],
  }

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (context === undefined) {
    throw new Error("useI18n must be used within an I18nProvider")
  }
  return context
}
