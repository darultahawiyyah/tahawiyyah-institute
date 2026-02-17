"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  BookOpen,
  Users,
  Award,
  CheckCircle2,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/Card";
import { Button, ButtonLink } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/cn";

const fadeUpVariants = {
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

export default function Home() {
  return (
    <div className="min-h-screen bg-bg pb-20 md:pb-0">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden border-b border-border bg-bg pb-16 md:py-24">
        {/* Subtle radial glow behind right card */}
        <div className="absolute right-0 top-1/2 h-[600px] w-[600px] -translate-y-1/2 translate-x-1/4 rounded-full bg-gold/5 blur-3xl" />
        
        <Container className="pt-4 md:pt-0">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-stretch">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUpVariants}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center space-y-6"
            >
              <Badge variant="gold" className="w-fit">
                Islamic Studies Program
              </Badge>
              
              <h1 className="text-4xl font-semibold tracking-tight text-text md:text-5xl lg:text-6xl">
                Transform Your Understanding
                <br />
                <span className="text-gold">Through Sacred Knowledge</span>
              </h1>
              
              <p className="max-w-prose text-base leading-relaxed text-muted md:text-lg">
                Join our comprehensive 2-year Islamic studies program designed to
                deepen your understanding of the faith. Study with experienced
                scholars in a structured curriculum that balances traditional
                knowledge with contemporary application.
              </p>
              
              {/* CTA Row */}
              <div className="flex flex-col gap-4 sm:flex-row">
                <ButtonLink href="/apply" variant="primary" size="md">
                  Apply Now
                </ButtonLink>
                <ButtonLink href="/curriculum" variant="outline" size="md">
                  View Curriculum
                </ButtonLink>
              </div>
              
              {/* Trust Bullets */}
              <div className="flex flex-col gap-4 pt-4">
                <div className="flex items-center gap-3 text-sm text-muted">
                  <Calendar className="h-5 w-5 text-gold" />
                  <span>2-year structured program</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted">
                  <Users className="h-5 w-5 text-gold" />
                  <span>Fully online program</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted">
                  <Award className="h-5 w-5 text-gold" />
                  <span>End-of-semester exams</span>
                </div>
              </div>
            </motion.div>
            
            {/* Right Feature Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUpVariants}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative flex h-full flex-col"
            >
              <Card className="relative border-gold/20 shadow-lg ring-1 ring-gold/10">
                <CardHeader>
                  <CardTitle className="text-gold">Next Start Date</CardTitle>
                  <CardDescription className="text-2xl font-semibold text-text">
                    April 4, 2025
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 flex-shrink-0 text-gold" />
                        <span className="text-xs font-medium text-muted sm:text-sm">Schedule:</span>
                      </div>
                      <span className="text-sm text-text sm:ml-0">Mondays & Wednesdays, 7:10 PM – 9:00 PM</span>
                    </div>
                    <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 flex-shrink-0 text-gold" />
                        <span className="text-xs font-medium text-muted sm:text-sm">Format:</span>
                      </div>
                      <span className="text-sm text-text sm:ml-0">Fully online</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Logo below card - expands to fill remaining space */}
              <div className="mt-6 flex flex-1 items-end justify-center">
                <Image
                  src="/logo2.svg"
                  alt="Tahawiyyah Institute Logo"
                  width={480}
                  height={480}
                  className="h-auto w-full max-w-[400px] object-contain opacity-80 md:max-w-[500px]"
                />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* PROGRAM HIGHLIGHTS */}
      <section className="border-b border-border bg-surface2 py-16 md:py-24">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader
              eyebrow="What We Offer"
              title="Program Highlights"
              description="Comprehensive Islamic education designed for serious students seeking authentic knowledge."
            />
          </motion.div>
          
          <motion.div
            className="mt-12 grid gap-6 md:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              {
                icon: BookOpen,
                title: "Comprehensive Curriculum",
                description:
                  "Covering Fiqh, Aqidah, Hadith, Tajwid, Arabic, and Tafsir across four structured semesters.",
              },
              {
                icon: Users,
                title: "Expert Instruction",
                description:
                  "Learn from qualified scholars with years of teaching experience and deep knowledge of traditional Islamic sciences.",
              },
              {
                icon: Award,
                title: "Structured Learning",
                description:
                  "Progressive curriculum with clear milestones, regular assessments, and end-of-semester examinations.",
              },
            ].map((highlight, index) => (
              <motion.div key={index} variants={fadeUpVariants}>
                <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <CardHeader>
                    <highlight.icon className="mb-4 h-8 w-8 text-gold" />
                    <CardTitle>{highlight.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{highlight.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* WHO IT'S FOR */}
      <section className="border-b border-border bg-bg py-16 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariants}
              transition={{ duration: 0.6 }}
            >
              <SectionHeader
                eyebrow="Ideal For"
                title="Who It's For"
                description="This program is designed for students who are committed to deepening their understanding of Islam through structured, traditional learning."
              />
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariants}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-4">
                    {[
                      "Muslims seeking structured Islamic education",
                      "Students ready for a 2-year commitment",
                      "Those seeking flexible online learning options",
                      "Learners interested in traditional Islamic sciences",
                      "Individuals preparing for deeper religious study",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
                        <span className="max-w-prose text-sm leading-relaxed text-muted">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* CURRICULUM PREVIEW */}
      <section className="border-b border-border bg-surface2 py-16 md:py-24">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader
              eyebrow="Academic Structure"
              title="Curriculum Preview"
              description="Four semesters covering essential Islamic sciences with progressive depth and complexity."
            />
          </motion.div>
          
          <motion.div
            className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              {
                title: "Semester 1",
                badges: ["Fiqh", "Aqidah", "Hadith", "Tajwid", "Arabic"],
              },
              {
                title: "Semester 2",
                badges: ["Fiqh", "Aqidah", "Tafsir", "Tajwid", "Arabic", "Hadith"],
              },
              {
                title: "Semester 3",
                badges: ["Fiqh", "Aqidah", "Tafsir", "Hadith", "Arabic", "Tajwid"],
              },
              {
                title: "Semester 4",
                badges: ["Fiqh", "Aqidah", "Tafsir", "Hadith", "Arabic", "Tajwid"],
              },
            ].map((semester, index) => (
              <motion.div key={index} variants={fadeUpVariants}>
                <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <CardHeader>
                    <CardTitle className="text-lg">{semester.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {semester.badges.map((badge, badgeIndex) => (
                        <Badge key={badgeIndex} variant="default">
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* FINAL CTA STRIP */}
      <section className="border-b border-border bg-bg py-16 md:py-24">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-surface2">
              <CardContent className="py-12 text-center md:py-16">
                <h2 className="mb-4 text-2xl font-semibold text-text md:text-3xl">
                  Ready to Begin Your Journey?
                </h2>
                <p className="mb-8 max-w-2xl mx-auto text-base leading-relaxed text-muted md:text-lg">
                  Join our next cohort and start your comprehensive Islamic studies
                  program. Applications are now open for April 2025.
                </p>
                <ButtonLink href="/apply" variant="primary" size="lg">
                  Apply Now
                </ButtonLink>
              </CardContent>
            </Card>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}

