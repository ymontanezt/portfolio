"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MessageCircle, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/contexts/I18nContext";
import type { HeroProps } from "@/types/portfolio";
import AnimatedTerminal from "./AnimatedTerminal";

export default function Hero({ name, role, tagline, photoUrl }: HeroProps) {
  const { translation } = useI18n();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 py-20 pt-32 relative"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 relative z-10"
        >
          {photoUrl && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="flex justify-center mb-8"
            >
              <div className="relative w-32 h-32 md:w-40 md:h-40 float-animation">
                <Image
                  src={photoUrl || "/avatar-placeholder.svg"}
                  alt={`${name} - Profile Photo`}
                  fill
                  className="object-cover rounded-full border-4 border-primary/20 shadow-2xl pulse-glow"
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9IiMxZTI5M2IiLz4KPC9zdmc+"
                  sizes="(max-width: 768px) 128px, 160px"
                  quality={85}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/avatar-placeholder.svg";
                  }}
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-secondary/20" />
              </div>
            </motion.div>
          )}

          <motion.p
            className="text-lg md:text-xl text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {translation.hero.greeting}
          </motion.p>

          <motion.h1
            className="font-bold text-foreground text-balance"
            style={{ fontSize: "clamp(2.5rem, 8vw, 4.5rem)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {translation.hero.name}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center"
          >
            <AnimatedTerminal
              text={translation.hero.title}
              className="text-responsive-title"
            />
          </motion.h2>

          <motion.p
            className="text-responsive-body text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {translation.hero.description}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() =>
                  window.open(
                    "https://wa.me/51969960969?text=Hola%20Yuri,%20vi%20tu%20portafolio%20y%20me%20interesa%20conversar%20sobre%20oportunidades%20de%20trabajo%20o%20proyectos%20freelance.",
                    "_blank",
                  )
                }
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl min-h-[44px] min-w-[44px]"
                aria-label={`${translation.hero.contactMe} - Abre WhatsApp en nueva ventana`}
              >
                <MessageCircle className="w-5 h-5 mr-2" aria-hidden="true" />
                {translation.hero.contactMe}
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() =>
                  window.open(
                    "https://linkedin.com/in/yuri-michael-montañez-tuncar-39744496",
                    "_blank",
                  )
                }
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 hover:border-primary/80 px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl min-h-[44px] min-w-[44px]"
                aria-label="Ver perfil de LinkedIn de Yuri Montañez - Abre en nueva ventana"
              >
                <Linkedin className="w-5 h-5 mr-2" aria-hidden="true" />
                LinkedIn
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex justify-center pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
