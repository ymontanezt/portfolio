"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Linkedin, Github, ExternalLink, Send, Check, Phone, MessageCircle, AlertCircle } from "lucide-react"
import { useState, useEffect } from "react"
import { useI18n } from "@/contexts/I18nContext"
import { useScrollAnimation, fadeInUp, fadeInLeft, fadeInRight } from "@/hooks/useScrollAnimation"
import type { ContactProps } from "@/types/portfolio"

interface FormData {
  name: string
  email: string
  phone: string
  message: string
}

interface FormErrors {
  name: string
  email: string
  phone: string
  message: string
}

interface TouchedFields {
  name: boolean
  email: boolean
  phone: boolean
  message: boolean
}

export default function Contact({ email, linkedin, github, portfolioUrl }: ContactProps) {
  const { translation, language } = useI18n()
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [formErrors, setFormErrors] = useState<FormErrors>({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [touchedFields, setTouchedFields] = useState<TouchedFields>({
    name: false,
    email: false,
    phone: false,
    message: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [isFormValid, setIsFormValid] = useState(false)

  // Validación en tiempo real
  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'name':
        if (!value.trim()) return translation.contact.name + ' ' + translation.contact.validation.nameRequired
        if (value.trim().length < 2) return translation.contact.name + ' ' + translation.contact.validation.nameMinLength
        return ''
      
      case 'email':
        if (!value.trim()) return translation.contact.email + ' ' + translation.contact.validation.emailRequired
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(value)) return translation.contact.validation.emailInvalid
        return ''
      
      case 'phone':
        if (!value.trim()) return translation.contact.validation.phoneRequired
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/
        if (!phoneRegex.test(value.replace(/\s/g, ''))) return translation.contact.validation.phoneInvalid
        return ''
      
      case 'message':
        if (!value.trim()) return translation.contact.message + ' ' + translation.contact.validation.messageRequired
        if (value.trim().length < 10) return translation.contact.message + ' ' + translation.contact.validation.messageMinLength
        return ''
      
      default:
        return ''
    }
  }

  const validateForm = (): boolean => {
    const errors: FormErrors = {
      name: touchedFields.name ? validateField('name', formData.name) : '',
      email: touchedFields.email ? validateField('email', formData.email) : '',
      phone: touchedFields.phone ? validateField('phone', formData.phone) : '',
      message: touchedFields.message ? validateField('message', formData.message) : '',
    }
    
    setFormErrors(errors)
    
    const isValid = Object.values(errors).every(error => error === '') && 
                   Object.values(formData).every(value => value.trim() !== '')
    
    setIsFormValid(isValid)
    return isValid
  }

  useEffect(() => {
    validateForm()
  }, [formData, touchedFields])


  const { ref: headerRef, controls: headerControls } = useScrollAnimation()
  const { ref: formRef, controls: formControls } = useScrollAnimation()
  const { ref: contactRef, controls: contactControls } = useScrollAnimation()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    
    // Marcar el campo como tocado
    setTouchedFields((prev) => ({ ...prev, [name]: true }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Marcar todos los campos como tocados al intentar enviar
    setTouchedFields({
      name: true,
      email: true,
      phone: true,
      message: true,
    })
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Crear mensaje estructurado para WhatsApp
      const whatsappMessage = `${translation.contact.whatsappMessage.greeting}

${translation.contact.whatsappMessage.fromPortfolio}

${translation.contact.whatsappMessage.name} ${formData.name}
${translation.contact.whatsappMessage.email} ${formData.email}
${translation.contact.whatsappMessage.phone} ${formData.phone}

${translation.contact.whatsappMessage.message}
${formData.message}

${translation.contact.whatsappMessage.sentFrom}
${translation.contact.whatsappMessage.date} ${new Date().toLocaleString(language === 'es' ? 'es-ES' : 'en-US')}`

      // Codificar el mensaje para URL
      const encodedMessage = encodeURIComponent(whatsappMessage)
      const whatsappUrl = `https://wa.me/51969960969?text=${encodedMessage}`

      // Abrir WhatsApp en nueva pestaña
      window.open(whatsappUrl, '_blank')

      setSubmitStatus("success")
      setFormData({ name: "", email: "", phone: "", message: "" })
      setFormErrors({ name: "", email: "", phone: "", message: "" })
      setTouchedFields({ name: false, email: false, phone: false, message: false })
      setIsFormValid(false)
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-12 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">{translation.contact.title}</h2>
          <p className="text-muted-foreground text-lg">{translation.contact.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div ref={formRef} initial="hidden" animate={formControls} variants={fadeInLeft}>
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 h-full">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2">
                  <Send className="w-5 h-5 text-primary" />
                  {translation.contact.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder={translation.contact.name + " *"}
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`bg-background/50 border-border/50 focus:border-primary/50 ${
                        formErrors.name ? 'border-destructive' : ''
                      }`}
                    />
                    {formErrors.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-1 mt-1 text-destructive text-xs"
                      >
                        <AlertCircle className="w-3 h-3" />
                        {formErrors.name}
                      </motion.div>
                    )}
                  </div>

                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder={translation.contact.email + " *"}
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`bg-background/50 border-border/50 focus:border-primary/50 ${
                        formErrors.email ? 'border-destructive' : ''
                      }`}
                    />
                    {formErrors.email && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-1 mt-1 text-destructive text-xs"
                      >
                        <AlertCircle className="w-3 h-3" />
                        {formErrors.email}
                      </motion.div>
                    )}
                  </div>

                  <div>
                    <Input
                      type="tel"
                      name="phone"
                      placeholder={translation.contact.phone + " *"}
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`bg-background/50 border-border/50 focus:border-primary/50 ${
                        formErrors.phone ? 'border-destructive' : ''
                      }`}
                    />
                    {formErrors.phone && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-1 mt-1 text-destructive text-xs"
                      >
                        <AlertCircle className="w-3 h-3" />
                        {formErrors.phone}
                      </motion.div>
                    )}
                  </div>

                  <div>
                    <Textarea
                      name="message"
                      placeholder={translation.contact.message + " *"}
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className={`bg-background/50 border-border/50 focus:border-primary/50 resize-none ${
                        formErrors.message ? 'border-destructive' : ''
                      }`}
                    />
                    {formErrors.message && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-1 mt-1 text-destructive text-xs"
                      >
                        <AlertCircle className="w-3 h-3" />
                        {formErrors.message}
                      </motion.div>
                    )}
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting || !isFormValid} 
                    className="w-full"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                        {translation.contact.sending}
                      </>
                    ) : (
                      <>
                        <MessageCircle className="w-4 h-4 mr-2" />
                        {translation.contact.send}
                      </>
                    )}
                  </Button>

                  {!isFormValid && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center text-muted-foreground text-xs"
                    >
                      {translation.contact.completeFields}
                    </motion.div>
                  )}

                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-green-500 text-sm text-center flex items-center justify-center gap-2"
                    >
                      <Check className="w-4 h-4" />
                      {translation.contact.messageSent}
                    </motion.div>
                  )}

                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm text-center flex items-center justify-center gap-2"
                    >
                      <AlertCircle className="w-4 h-4" />
                      {translation.contact.sendError}
                    </motion.div>
                  )}
                  
                  {/* Information Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="pt-4 border-t border-border/30 mt-6"
                  >
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-2">
                        {translation.contact.availableNow}
                      </p>
                    </div>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div ref={contactRef} initial="hidden" animate={contactControls} variants={fadeInRight}>
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 h-full">
              <CardHeader>
                <CardTitle className="text-foreground">{translation.contact.contactInfo}</CardTitle>
              </CardHeader>

              <CardContent>
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full h-auto p-3 flex items-center gap-3 hover:bg-primary/10 hover:border-primary/50 bg-transparent justify-start"
                    asChild
                  >
                    <a href={`mailto:${email}`}>
                      <Mail className="w-6 h-6 text-primary flex-shrink-0" />
                      <div className="text-left">
                        <div className="text-sm font-medium">{translation.contact.emailLabel}</div>
                        <div className="text-xs text-muted-foreground break-all">{email}</div>
                      </div>
                    </a>
                  </Button>

                  {linkedin && (
                    <Button
                      variant="outline"
                      className="w-full h-auto p-3 flex items-center gap-3 hover:bg-primary/10 hover:border-primary/50 bg-transparent justify-start"
                      asChild
                    >
                      <a href={linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-6 h-6 text-primary flex-shrink-0" />
                        <div className="text-left">
                          <div className="text-sm font-medium">{translation.contact.linkedinLabel}</div>
                          <div className="text-xs text-muted-foreground">{translation.contact.linkedinDesc}</div>
                        </div>
                      </a>
                    </Button>
                  )}

                  {github && (
                    <Button
                      variant="outline"
                      className="w-full h-auto p-3 flex items-center gap-3 hover:bg-primary/10 hover:border-primary/50 bg-transparent justify-start"
                      asChild
                    >
                      <a href={github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-6 h-6 text-primary flex-shrink-0" />
                        <div className="text-left">
                          <div className="text-sm font-medium">{translation.contact.githubLabel}</div>
                          <div className="text-xs text-muted-foreground">{translation.contact.githubDesc}</div>
                        </div>
                      </a>
                    </Button>
                  )}

                  <Button
                    variant="outline"
                    className="w-full h-auto p-3 flex items-center gap-3 hover:bg-green-500/10 hover:border-green-500/50 bg-transparent justify-start"
                    onClick={() => window.open('https://wa.me/51969960969?text=Hola%20Yuri,%20vi%20tu%20portafolio%20y%20me%20interesa%20conversar%20sobre%20oportunidades%20de%20trabajo%20o%20proyectos%20freelance.', '_blank')}
                  >
                    <MessageCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <div className="text-left">
                      <div className="text-sm font-medium">{translation.contact.whatsappLabel}</div>
                      <div className="text-xs text-muted-foreground">{translation.contact.whatsappNumber}</div>
                    </div>
                  </Button>

                </div>

                <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                  <p className="text-sm text-muted-foreground text-center">
                    {translation.contact.buildTogether}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
