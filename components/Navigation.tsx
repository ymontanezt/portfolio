"use client";

import { useI18n } from "@/contexts/I18nContext";
import { AnimatePresence, motion } from "framer-motion";
import { Globe, Menu, User, X } from "lucide-react";
import type React from "react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { translation, language, setLanguage, availableLanguages } = useI18n();

  const navItems = [
    { id: "portafolio", label: translation.nav.projects },
    { id: "contact", label: translation.nav.contact },
  ];

  const mobileNavItems = [
    { id: "portafolio", label: translation.nav.projects },
    { id: "contact", label: translation.nav.contact },
    {
      id: "sobre-mi",
      label: translation.nav.about,
      isSpecial: true,
      isExternal: true,
      href: "/sobre-mi",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const allSections = [
        { id: "home", element: document.getElementById("home") },
        ...navItems.map((item) => ({
          id: item.id,
          element: document.getElementById(item.id),
        })),
      ];

      // Use different offset for mobile vs desktop
      const isMobile = window.innerWidth < 768;
      const offset = isMobile
        ? window.innerHeight * 0.3
        : window.innerHeight * 0.5;
      const scrollPosition = window.scrollY + offset;

      // Find the section that is currently most visible
      let currentSection = "home";

      for (let i = 0; i < allSections.length; i++) {
        const section = allSections[i];
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          const sectionTop = rect.top + window.scrollY;
          const sectionBottom = sectionTop + rect.height;

          // If the detection point is within this section
          if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
            currentSection = section.id;
            break;
          }

          // If we're past the section, use it as fallback
          if (scrollPosition >= sectionTop) {
            currentSection = section.id;
          }
        }
      }

      setActiveSection(currentSection);
    };

    // Initial call to set correct section on page load
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll); // Handle orientation changes

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Handle Escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false); // Close mobile menu first

    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const navHeight = 64; // Height of navigation bar (16 * 4)
        const isMobile = window.innerWidth < 768;
        const additionalOffset = isMobile ? 20 : 0; // Extra offset for mobile

        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - navHeight - additionalOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 100); // Small delay to let the mobile menu close first
  };

  const handleNavClick = (item: any) => {
    if (item.isExternal && item.href) {
      window.location.href = item.href;
    } else {
      scrollToSection(item.id);
    }
  };

  const toggleLanguage = () => {
    const currentIndex = availableLanguages.indexOf(language);
    const nextIndex = (currentIndex + 1) % availableLanguages.length;
    setLanguage(availableLanguages[nextIndex]);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold text-primary cursor-pointer min-h-[44px] min-w-[44px] flex items-center"
            onClick={() => scrollToSection("home")}
            aria-label="Ir al inicio - michcode"
          >
            {"<michcode />"}
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 text-sm font-medium transition-colors min-h-[44px] min-w-[44px] flex items-center ${
                  activeSection === item.id
                    ? "text-primary border-b-2 border-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={`Ir a la sección ${item.label}`}
              >
                {item.label}
              </motion.button>
            ))}

            <div className="flex items-center space-x-3">
              <ThemeToggle />

              <motion.button
                onClick={toggleLanguage}
                className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors min-h-[44px] min-w-[44px]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={`Cambiar idioma a ${language === "es" ? "inglés" : "español"}`}
              >
                <Globe size={16} aria-hidden="true" />
                <span className="uppercase">{language}</span>
              </motion.button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-1">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-colors p-2 rounded-md hover:bg-accent/50 border border-border/50 hover:border-primary/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X size={24} className="text-primary" />
              ) : (
                <Menu size={24} />
              )}
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
              {/* Controles mínimos */}
              <div className="px-4 py-3 border-b border-border/30">
                <div className="flex items-center justify-end gap-3">
                  <motion.button
                    onClick={toggleLanguage}
                    className="text-xs text-muted-foreground hover:text-primary transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {language.toUpperCase()}
                  </motion.button>
                  <ThemeToggle />
                </div>
              </div>

              {/* Contenido del menú */}
              <div className="px-4 py-4 space-y-1">
                {/* Enlaces de navegación principales */}
                {mobileNavItems
                  .filter((item) => !item.isSpecial)
                  .map((item, index) => (
                    <motion.button
                      key={item.id}
                      onClick={() => handleNavClick(item)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`w-full text-left px-3 py-3 text-base font-medium rounded-lg transition-colors ${
                        activeSection === item.id
                          ? "text-primary bg-accent/50"
                          : "text-muted-foreground hover:text-primary hover:bg-accent/30"
                      }`}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {item.label}
                    </motion.button>
                  ))}

                {/* Separador elegante */}
                <div className="flex items-center my-4">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border/60 to-transparent"></div>
                  <div className="px-3">
                    <div className="w-1 h-1 bg-primary rounded-full"></div>
                  </div>
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border/60 to-transparent"></div>
                </div>

                {/* Acerca de mí - Al final con diseño especial */}
                {mobileNavItems
                  .filter((item) => item.isSpecial)
                  .map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay:
                          (mobileNavItems.filter((i) => !i.isSpecial).length +
                            index) *
                          0.1,
                      }}
                      className="relative"
                    >
                      <motion.button
                        onClick={() => handleNavClick(item)}
                        className={`group relative flex items-center w-full text-left px-4 py-4 text-base font-medium rounded-xl transition-all duration-300 min-h-[52px] ${
                          activeSection === item.id
                            ? "text-primary bg-gradient-to-r from-primary/15 to-primary/5 border border-primary/40 shadow-lg"
                            : "text-muted-foreground hover:text-primary hover:bg-gradient-to-r hover:from-accent/20 hover:to-accent/10 hover:shadow-md"
                        }`}
                        whileHover={{ x: 8, scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center gap-3 flex-1">
                          <div className="relative">
                            <User className="w-5 h-5" />
                            <motion.div
                              className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full"
                              animate={{ scale: [1, 1.3, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                          </div>
                          <div className="flex-1">
                            <span className="font-semibold text-base">
                              {item.label}
                            </span>
                            <div className="text-xs text-muted-foreground group-hover:text-primary/70 transition-colors">
                              {translation.nav.aboutSubtitle}
                            </div>
                          </div>
                          <motion.div
                            className="flex items-center gap-1"
                            animate={{ x: [0, 2, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <div className="w-1 h-1 bg-primary rounded-full"></div>
                            <div className="w-1 h-1 bg-primary/60 rounded-full"></div>
                            <div className="w-1 h-1 bg-primary/40 rounded-full"></div>
                          </motion.div>
                        </div>
                      </motion.button>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
