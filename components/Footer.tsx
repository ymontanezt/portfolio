'use client'

import { motion } from 'framer-motion'
import { useI18n } from '@/contexts/I18nContext'

const Footer: React.FC = () => {
  const { translation } = useI18n()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background/80 backdrop-blur-md border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-muted-foreground text-sm">
            © {currentYear} michcode. {translation.footer.copyright}
          </p>
          <div className="flex items-center gap-1 text-muted-foreground text-sm">
            <a 
              href="/sobre-mi" 
              className="hover:text-primary transition-colors"
            >
              {translation.footer.aboutMe}
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
