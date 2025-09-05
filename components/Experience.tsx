"use client";

import ErrorMessage from "@/components/ErrorMessage";
import LoadingSpinner from "@/components/LoadingSpinner";
import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/contexts/I18nContext";
import { useExperience } from "@/hooks/usePortfolioData";
import { motion } from "framer-motion";
import { Briefcase, Calendar, ExternalLink } from "lucide-react";

export default function Experience() {
  const { translation, language } = useI18n();
  const { experience, loading, error } = useExperience(language);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <ErrorMessage message={translation.common.error} />;
  }

  if (!experience || experience.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-muted-foreground">
          {translation.experience.noDataAvailable}
        </p>
      </div>
    );
  }

  return (
    <section
      id="experience"
      className="py-12 sm:py-16 lg:py-20 px-4 bg-muted/20 relative"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
              {translation.experience.title}
            </h2>
          </div>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
            {translation.experience.subtitle}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/60 to-primary/20"></div>

          {/* Experience Items */}
          <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative flex items-start gap-8"
              >
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                  className="relative z-10 flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg"
                >
                  <Briefcase className="w-8 h-8 text-primary-foreground" />
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                  className="flex-1 bg-background rounded-xl border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="p-3 sm:p-6 lg:p-8">
                    {/* Header - Mobile optimized */}
                    <div className="flex items-center justify-between mb-3 sm:mb-6">
                      <div className="flex-1 min-w-0 pr-2">
                        <h3 className="text-base sm:text-xl lg:text-2xl font-bold text-primary mb-1 truncate">
                          {exp.role}
                        </h3>
                        <div className="text-xs sm:text-base lg:text-lg font-semibold text-foreground mb-1 truncate">
                          {exp.company}
                        </div>
                        <div className="flex items-center gap-1 text-xs sm:text-sm text-muted-foreground">
                          <Calendar className="w-3 h-3 flex-shrink-0" />
                          <span className="truncate">{exp.period}</span>
                        </div>
                      </div>

                      {/* Mobile: Only chevron */}
                      <div className="lg:hidden flex-shrink-0">
                        <svg
                          className="w-4 h-4 text-muted-foreground"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>

                      {/* Desktop: Status Badge */}
                      <div className="hidden lg:flex gap-2">
                        <Badge
                          variant="default"
                          className="bg-primary text-primary-foreground"
                        >
                          {exp.period.includes("Actualmente") ||
                          exp.period.includes("Present")
                            ? translation.experience.current
                            : translation.experience.completed}
                        </Badge>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mb-3 sm:mb-6">
                      <ul className="space-y-1 sm:space-y-2">
                        {exp.description.map((desc, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            className="flex items-start gap-2 text-muted-foreground text-xs sm:text-base"
                          >
                            <span className="text-primary mt-1 text-xs flex-shrink-0">
                              •
                            </span>
                            <span className="leading-tight sm:leading-relaxed">
                              {desc}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    {exp.techUsed && exp.techUsed.length > 0 && (
                      <div className="pt-2 sm:pt-4 border-t border-border/50">
                        <h4 className="text-xs font-semibold text-foreground mb-1.5 sm:mb-3">
                          {translation.experience.technologiesUsed}
                        </h4>
                        <div className="flex flex-wrap gap-1 sm:gap-2">
                          {exp.techUsed.map((tech, i) => (
                            <motion.div
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: i * 0.05 }}
                              whileHover={{ scale: 1.05 }}
                            >
                              <Badge
                                variant="secondary"
                                className="text-xs font-mono hover:bg-primary/10 transition-colors cursor-default px-1.5 py-0.5"
                              >
                                {tech}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-4">
            {translation.experience.interestedInWorking}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 font-semibold"
          >
            <ExternalLink className="w-4 h-4" />
            {translation.experience.letsConnect}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
