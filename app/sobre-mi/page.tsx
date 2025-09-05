"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useI18n } from "@/contexts/I18nContext";
import { motion } from "framer-motion";
import { ArrowLeft, Award, Briefcase, GraduationCap } from "lucide-react";
import Link from "next/link";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function SobreMiPage() {
  const { translation, language } = useI18n();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-8"
        >
          <Button variant="ghost" size="sm" asChild>
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {translation.nav.home}
            </Link>
          </Button>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* Hero Section */}
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <div className="mb-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl"
              >
                <img
                  src="/yuri-montanez-profile.jpg"
                  alt="Yuri Montañez - Full Stack Developer"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {translation.aboutMe.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {translation.aboutMe.subtitle}
            </p>
          </motion.div>

          {/* Professional Summary */}
          <motion.div variants={fadeInUp} className="mb-8">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-8">
                <p className="text-lg text-foreground leading-relaxed mb-6">
                  {translation.aboutMe.professionalSummary.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-sm">
                    {translation.aboutMe.professionalSummary.badges.fullStack}
                  </Badge>
                  <Badge variant="secondary" className="text-sm">
                    {translation.aboutMe.professionalSummary.badges.mobile}
                  </Badge>
                  <Badge variant="secondary" className="text-sm">
                    {translation.aboutMe.professionalSummary.badges.agile}
                  </Badge>
                  <Badge variant="secondary" className="text-sm">
                    {translation.aboutMe.professionalSummary.badges.cloud}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div variants={fadeInUp} className="mb-8">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5" />
                  {translation.aboutMe.experience.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Auna */}
                <div className="border-l-2 border-primary/30 pl-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {
                        translation.aboutMe.experience.positions
                          .softwareEngineer.title
                      }
                    </h3>
                    <span className="text-sm text-muted-foreground">
                      {
                        translation.aboutMe.experience.positions
                          .softwareEngineer.period
                      }
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {
                      translation.aboutMe.experience.positions.softwareEngineer
                        .company
                    }
                  </p>
                  <p className="text-sm text-foreground mb-3">
                    {
                      translation.aboutMe.experience.positions.softwareEngineer
                        .description
                    }
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {translation.aboutMe.experience.positions.softwareEngineer.technologies.map(
                      (tech, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ),
                    )}
                  </div>
                </div>

                {/* Front Agile Developer */}
                <div className="border-l-2 border-primary/30 pl-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {
                        translation.aboutMe.experience.positions
                          .frontAgileDeveloper.title
                      }
                    </h3>
                    <span className="text-sm text-muted-foreground">
                      {
                        translation.aboutMe.experience.positions
                          .frontAgileDeveloper.period
                      }
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {
                      translation.aboutMe.experience.positions
                        .frontAgileDeveloper.company
                    }
                  </p>
                  <p className="text-sm text-foreground mb-3">
                    {
                      translation.aboutMe.experience.positions
                        .frontAgileDeveloper.description
                    }
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {translation.aboutMe.experience.positions.frontAgileDeveloper.technologies.map(
                      (tech, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ),
                    )}
                  </div>
                </div>

                {/* Full Stack Developer */}
                <div className="border-l-2 border-primary/30 pl-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {
                        translation.aboutMe.experience.positions
                          .fullStackDeveloper.title
                      }
                    </h3>
                    <span className="text-sm text-muted-foreground">
                      {
                        translation.aboutMe.experience.positions
                          .fullStackDeveloper.period
                      }
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {
                      translation.aboutMe.experience.positions
                        .fullStackDeveloper.company
                    }
                  </p>
                  <p className="text-sm text-foreground mb-3">
                    {
                      translation.aboutMe.experience.positions
                        .fullStackDeveloper.description
                    }
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {translation.aboutMe.experience.positions.fullStackDeveloper.technologies.map(
                      (tech, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ),
                    )}
                  </div>
                </div>

                {/* Previous Experience */}
                <div className="border-l-2 border-primary/30 pl-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {
                        translation.aboutMe.experience.positions
                          .developmentEngineer.title
                      }
                    </h3>
                    <span className="text-sm text-muted-foreground">
                      {
                        translation.aboutMe.experience.positions
                          .developmentEngineer.period
                      }
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {
                      translation.aboutMe.experience.positions
                        .developmentEngineer.company
                    }
                  </p>
                  <p className="text-sm text-foreground mb-3">
                    {
                      translation.aboutMe.experience.positions
                        .developmentEngineer.description
                    }
                  </p>
                </div>

                <div className="border-l-2 border-primary/30 pl-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {
                        translation.aboutMe.experience.positions
                          .developmentAnalyst.title
                      }
                    </h3>
                    <span className="text-sm text-muted-foreground">
                      {
                        translation.aboutMe.experience.positions
                          .developmentAnalyst.period
                      }
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {
                      translation.aboutMe.experience.positions
                        .developmentAnalyst.company
                    }
                  </p>
                  <p className="text-sm text-foreground mb-3">
                    {
                      translation.aboutMe.experience.positions
                        .developmentAnalyst.description
                    }
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Education */}
          <motion.div variants={fadeInUp} className="mb-8">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" />
                  {translation.aboutMe.education.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <GraduationCap className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {translation.aboutMe.education.studies.english.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {
                        translation.aboutMe.education.studies.english
                          .institution
                      }
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {translation.aboutMe.education.studies.english.period}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <GraduationCap className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {translation.aboutMe.education.studies.masters.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {
                        translation.aboutMe.education.studies.masters
                          .institution
                      }
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {translation.aboutMe.education.studies.masters.period}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <GraduationCap className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {translation.aboutMe.education.studies.bachelor.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {
                        translation.aboutMe.education.studies.bachelor
                          .institution
                      }
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {translation.aboutMe.education.studies.bachelor.period}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Certifications */}
          <motion.div variants={fadeInUp} className="mb-8">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  {translation.aboutMe.certifications.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Award className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {translation.aboutMe.certifications.items.scrum.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {translation.aboutMe.certifications.items.scrum.issuer}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {translation.aboutMe.certifications.items.scrum.period}
                    </p>
                    <Badge
                      variant="secondary"
                      className="mt-1 text-xs bg-amber-50 text-amber-700 border-amber-200"
                    >
                      {translation.aboutMe.certifications.items.scrum.status}
                    </Badge>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Award className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {translation.aboutMe.certifications.items.android.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {translation.aboutMe.certifications.items.android.issuer}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {translation.aboutMe.certifications.items.android.period}
                    </p>
                    <Badge
                      variant="secondary"
                      className="mt-1 text-xs bg-amber-50 text-amber-700 border-amber-200"
                    >
                      {translation.aboutMe.certifications.items.android.status}
                    </Badge>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Award className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {translation.aboutMe.certifications.items.aws.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {translation.aboutMe.certifications.items.aws.issuer}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {translation.aboutMe.certifications.items.aws.period}
                    </p>
                    <Badge
                      variant="secondary"
                      className="mt-1 text-xs bg-amber-50 text-amber-700 border-amber-200"
                    >
                      {translation.aboutMe.certifications.items.aws.status}
                    </Badge>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Award className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {translation.aboutMe.certifications.items.java.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {translation.aboutMe.certifications.items.java.issuer}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {translation.aboutMe.certifications.items.java.period}
                    </p>
                    <Badge
                      variant="secondary"
                      className="mt-1 text-xs bg-amber-50 text-amber-700 border-amber-200"
                    >
                      {translation.aboutMe.certifications.items.java.status}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Skills Summary */}
          <motion.div variants={fadeInUp} className="mb-8">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle>{translation.aboutMe.skills.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">
                      {translation.aboutMe.skills.categories.frontend}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {translation.aboutMe.skills.technologies.frontend.map(
                        (tech, index) => (
                          <Badge key={index} variant="secondary">
                            {tech}
                          </Badge>
                        ),
                      )}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">
                      {translation.aboutMe.skills.categories.backend}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {translation.aboutMe.skills.technologies.backend.map(
                        (tech, index) => (
                          <Badge key={index} variant="secondary">
                            {tech}
                          </Badge>
                        ),
                      )}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">
                      {translation.aboutMe.skills.categories.mobile}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {translation.aboutMe.skills.technologies.mobile.map(
                        (tech, index) => (
                          <Badge key={index} variant="secondary">
                            {tech}
                          </Badge>
                        ),
                      )}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">
                      {translation.aboutMe.skills.categories.cloudDevOps}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {translation.aboutMe.skills.technologies.cloudDevOps.map(
                        (tech, index) => (
                          <Badge key={index} variant="secondary">
                            {tech}
                          </Badge>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Additional Information */}
          <motion.div variants={fadeInUp} className="mb-8">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle>
                  {translation.aboutMe.additionalInfo.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">
                      {
                        translation.aboutMe.additionalInfo.workMethodologies
                          .title
                      }
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {translation.aboutMe.additionalInfo.workMethodologies.items.map(
                        (item, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            {item}
                          </li>
                        ),
                      )}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">
                      {
                        translation.aboutMe.additionalInfo.experienceSectors
                          .title
                      }
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {translation.aboutMe.additionalInfo.experienceSectors.items.map(
                        (item, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            {item}
                          </li>
                        ),
                      )}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-border/30">
                  <h4 className="font-semibold text-foreground mb-3">
                    {translation.aboutMe.additionalInfo.achievements.title}
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-muted/30 rounded-lg">
                      <h5 className="font-medium text-foreground mb-2">
                        {
                          translation.aboutMe.additionalInfo.achievements.items
                            .aunaProject.title
                        }
                      </h5>
                      <p className="text-sm text-muted-foreground">
                        {
                          translation.aboutMe.additionalInfo.achievements.items
                            .aunaProject.description
                        }
                      </p>
                    </div>
                    <div className="p-4 bg-muted/30 rounded-lg">
                      <h5 className="font-medium text-foreground mb-2">
                        {
                          translation.aboutMe.additionalInfo.achievements.items
                            .bffArchitecture.title
                        }
                      </h5>
                      <p className="text-sm text-muted-foreground">
                        {
                          translation.aboutMe.additionalInfo.achievements.items
                            .bffArchitecture.description
                        }
                      </p>
                    </div>
                    <div className="p-4 bg-muted/30 rounded-lg">
                      <h5 className="font-medium text-foreground mb-2">
                        {
                          translation.aboutMe.additionalInfo.achievements.items
                            .microfrontends.title
                        }
                      </h5>
                      <p className="text-sm text-muted-foreground">
                        {
                          translation.aboutMe.additionalInfo.achievements.items
                            .microfrontends.description
                        }
                      </p>
                    </div>
                    <div className="p-4 bg-muted/30 rounded-lg">
                      <h5 className="font-medium text-foreground mb-2">
                        {
                          translation.aboutMe.additionalInfo.achievements.items
                            .performanceOptimization.title
                        }
                      </h5>
                      <p className="text-sm text-muted-foreground">
                        {
                          translation.aboutMe.additionalInfo.achievements.items
                            .performanceOptimization.description
                        }
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-border/30">
                  <h4 className="font-semibold text-foreground mb-3">
                    {translation.aboutMe.additionalInfo.softSkills.title}
                  </h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-3 bg-muted/20 rounded-lg">
                      <h5 className="font-medium text-foreground mb-1">
                        {
                          translation.aboutMe.additionalInfo.softSkills.items
                            .technicalLeadership.title
                        }
                      </h5>
                      <p className="text-xs text-muted-foreground">
                        {
                          translation.aboutMe.additionalInfo.softSkills.items
                            .technicalLeadership.description
                        }
                      </p>
                    </div>
                    <div className="text-center p-3 bg-muted/20 rounded-lg">
                      <h5 className="font-medium text-foreground mb-1">
                        {
                          translation.aboutMe.additionalInfo.softSkills.items
                            .problemSolving.title
                        }
                      </h5>
                      <p className="text-xs text-muted-foreground">
                        {
                          translation.aboutMe.additionalInfo.softSkills.items
                            .problemSolving.description
                        }
                      </p>
                    </div>
                    <div className="text-center p-3 bg-muted/20 rounded-lg">
                      <h5 className="font-medium text-foreground mb-1">
                        {
                          translation.aboutMe.additionalInfo.softSkills.items
                            .communication.title
                        }
                      </h5>
                      <p className="text-xs text-muted-foreground">
                        {
                          translation.aboutMe.additionalInfo.softSkills.items
                            .communication.description
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={fadeInUp} className="text-center">
            <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {translation.aboutMe.callToAction.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {translation.aboutMe.callToAction.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild>
                    <Link
                      href="https://wa.me/51969960969?text=Hola%20Yuri,%20vi%20tu%20portafolio%20y%20me%20interesa%20conversar%20sobre%20oportunidades%20de%20trabajo%20o%20proyectos%20freelance."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {translation.aboutMe.callToAction.contactMe}
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/#portafolio">
                      {translation.aboutMe.callToAction.viewPortfolio}
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
