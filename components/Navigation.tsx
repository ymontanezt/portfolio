"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Globe } from "lucide-react"
import { useI18n } from "@/contexts/I18nContext"
import { ThemeToggle } from "./ThemeToggle"

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const { translation, language, setLanguage, availableLanguages } = useI18n()

  const navItems = [
    { id: "portafolio", label: translation.nav.projects },
    { id: "contact", label: translation.nav.contact },
  ]


  useEffect(() => {
    const handleScroll = () => {
      const allSections = [
        { id: "home", element: document.getElementById("home") },
        ...navItems.map((item) => ({ id: item.id, element: document.getElementById(item.id) }))
      ]
      
      // Use different offset for mobile vs desktop
      const isMobile = window.innerWidth < 768
      const offset = isMobile ? window.innerHeight * 0.3 : window.innerHeight * 0.5
      const scrollPosition = window.scrollY + offset

      // Find the section that is currently most visible
      let currentSection = "home"
      
      for (let i = 0; i < allSections.length; i++) {
        const section = allSections[i]
        if (section.element) {
          const rect = section.element.getBoundingClientRect()
          const sectionTop = rect.top + window.scrollY
          const sectionBottom = sectionTop + rect.height
          
          // If the detection point is within this section
          if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
            currentSection = section.id
            break
          }
          
          // If we're past the section, use it as fallback
          if (scrollPosition >= sectionTop) {
            currentSection = section.id
          }
        }
      }
      
      setActiveSection(currentSection)
    }

    // Initial call to set correct section on page load
    handleScroll()
    
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleScroll) // Handle orientation changes
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [])

  // Handle Escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isOpen])

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false) // Close mobile menu first
    
    setTimeout(() => {
      const element = document.getElementById(sectionId)
      if (element) {
        const navHeight = 64 // Height of navigation bar (16 * 4)
        const isMobile = window.innerWidth < 768
        const additionalOffset = isMobile ? 20 : 0 // Extra offset for mobile
        
        const elementPosition = element.getBoundingClientRect().top + window.scrollY
        const offsetPosition = elementPosition - navHeight - additionalOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        })
      }
    }, 100) // Small delay to let the mobile menu close first
  }

  const handleNavClick = (item: any) => {
    if (item.isExternal && item.href) {
      window.location.href = item.href
    } else {
      scrollToSection(item.id)
    }
  }

  const toggleLanguage = () => {
    const currentIndex = availableLanguages.indexOf(language)
    const nextIndex = (currentIndex + 1) % availableLanguages.length
    setLanguage(availableLanguages[nextIndex])
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold text-primary cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            {"<michcode />"}
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? "text-primary border-b-2 border-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            ))}

            <div className="flex items-center space-x-3">
              <ThemeToggle />

              <motion.button
                onClick={toggleLanguage}
                className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Globe size={16} />
                <span className="uppercase">{language}</span>
              </motion.button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />

            <motion.button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 px-2 py-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Globe size={16} />
              <span className="uppercase">{language}</span>
            </motion.button>

            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Menu */}
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="relative z-50 md:hidden bg-background/95 backdrop-blur-md border-t border-border"
            >
              <div className="px-4 py-4 space-y-2">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => handleNavClick(item)}
                    className={`block w-full text-left px-4 py-3 text-base font-medium rounded-lg transition-colors min-h-[48px] ${
                      activeSection === item.id
                        ? "text-primary bg-accent border border-primary/20"
                        : "text-muted-foreground hover:text-primary hover:bg-accent/50"
                    }`}
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navigation
