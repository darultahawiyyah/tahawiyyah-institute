"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Target,
  BookOpen,
  Calendar,
  GraduationCap,
  FileText,
  CheckCircle2,
  Award,
  Users,
  Lightbulb,
  Heart,
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

export default function Program() {
  return (
    <div className="min-h-screen bg-bg pb-20 md:pb-0">
      {/* HEADER */}
      <section className="border-b border-border bg-bg pb-12 md:py-16">
        <Container className="pt-4 md:pt-0">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariants}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl font-semibold tracking-tight text-text md:text-5xl lg:text-6xl">
              Islamic Studies Program
            </h1>
            <p className="mt-4 max-w-prose text-base leading-relaxed text-muted md:text-lg">
              A comprehensive 2-year program designed to deepen your understanding
              of Islamic sciences through structured learning and expert guidance.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* VISION */}
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
              eyebrow="Our Mission"
              title="Vision"
              description="To provide authentic Islamic education that combines traditional knowledge with contemporary understanding."
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8"
          >
            <Card>
              <CardContent className="pt-6">
                <p className="max-w-prose text-base leading-relaxed text-muted md:text-lg">
                  Our program is built on the foundation of authentic Islamic
                  scholarship, drawing from centuries of traditional learning while
                  addressing the needs of modern students. We aim to cultivate a
                  deep understanding of Islamic sciences that empowers students to
                  apply knowledge with wisdom and compassion in their daily lives.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </Container>
      </section>

      {/* PROGRAM OBJECTIVES */}
      <section className="border-b border-border bg-bg py-16 md:py-24">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader
              eyebrow="Goals"
              title="Program Objectives"
              description="Clear learning outcomes designed to guide your educational journey."
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8"
          >
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  {[
                    "Develop a comprehensive understanding of core Islamic sciences including Fiqh, Aqidah, Hadith, Tafsir, Tajwid, and Arabic",
                    "Build a strong foundation in traditional Islamic scholarship and methodology",
                    "Cultivate the ability to read and understand classical Islamic texts",
                    "Gain practical skills in applying Islamic knowledge to contemporary contexts",
                    "Foster a deep connection with the Qur'an through proper recitation and understanding",
                    "Prepare students for advanced study or teaching roles in Islamic education",
                  ].map((objective, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Target className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
                      <span className="max-w-prose text-sm leading-relaxed text-muted md:text-base">
                        {objective}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </Container>
      </section>

      {/* PROGRAM STRUCTURE */}
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
              eyebrow="Structure"
              title="Program Structure"
              description="A clear framework for your learning journey."
            />
          </motion.div>

          <motion.div
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              {
                icon: Calendar,
                label: "Duration",
                value: "2 years",
              },
              {
                icon: BookOpen,
                label: "Semesters",
                value: "4",
              },
              {
                icon: GraduationCap,
                label: "Core Subjects",
                value: "Fiqh, Aqidah, Tafsir, Hadith, Tajwid, Arabic",
              },
              {
                icon: FileText,
                label: "Exams",
                value: "End of every semester",
              },
            ].map((stat, index) => (
              <motion.div key={index} variants={fadeUpVariants}>
                <Card className="h-full text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <CardContent className="pt-6">
                    <stat.icon className="mx-auto mb-4 h-8 w-8 text-gold" />
                    <p className="mb-2 text-sm font-medium uppercase tracking-wide text-muted">
                      {stat.label}
                    </p>
                    {stat.label === "Core Subjects" ? (
                      <p className="text-sm font-semibold leading-relaxed text-text md:text-base">
                        {stat.value}
                      </p>
                    ) : (
                      <p className="text-lg font-semibold text-text md:text-xl">
                        {stat.value}
                      </p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* END-OF-PROGRAM OUTCOMES */}
      <section className="border-b border-border bg-bg py-16 md:py-24">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader
              eyebrow="Results"
              title="End-of-Program Outcomes"
              description="What you'll achieve upon successful completion of the program."
            />
          </motion.div>

          <motion.div
            className="mt-12 grid gap-6 md:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              {
                icon: BookOpen,
                title: "Comprehensive Knowledge",
                description:
                  "Master the fundamentals of Fiqh, Aqidah, Hadith, Tafsir, Tajwid, and Arabic with confidence and depth.",
              },
              {
                icon: CheckCircle2,
                title: "Textual Competency",
                description:
                  "Read and understand classical Islamic texts in Arabic, with the ability to navigate traditional sources independently.",
              },
              {
                icon: Award,
                title: "Qur'anic Mastery",
                description:
                  "Recite the Qur'an with proper Tajwid and develop a meaningful relationship with the sacred text.",
              },
              {
                icon: Users,
                title: "Teaching Readiness",
                description:
                  "Be prepared to teach foundational Islamic knowledge to others, whether in formal or informal settings.",
              },
              {
                icon: Lightbulb,
                title: "Critical Thinking",
                description:
                  "Apply Islamic principles to contemporary issues with wisdom, understanding context and nuance.",
              },
              {
                icon: Heart,
                title: "Spiritual Growth",
                description:
                  "Deepen your connection with Allah through knowledge, practice, and the application of learned principles.",
              },
            ].map((outcome, index) => (
              <motion.div key={index} variants={fadeUpVariants}>
                <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <CardHeader>
                    <outcome.icon className="mb-4 h-8 w-8 text-gold" />
                    <CardTitle>{outcome.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="max-w-prose">
                      {outcome.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* IJAZAH CALLOUT */}
      <section className="border-b border-border bg-surface2 py-16 md:py-24">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <Card className="border-gold/30 bg-surface2 ring-1 ring-gold/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Award className="h-6 w-6 text-gold" />
                  <CardTitle className="text-gold">Ijazah Opportunity</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="max-w-prose text-base leading-relaxed text-muted md:text-lg">
                  Students who successfully complete the program and meet all
                  academic and recitation standards may be eligible to receive an
                  <strong className="text-text"> Ijazah in Qur'an Recitation</strong>.
                  This traditional certification is granted contingent upon
                  demonstrating mastery of Tajwid rules, accurate memorization, and
                  meeting the rigorous standards set by our qualified instructors.
                  The Ijazah represents a recognized chain of transmission
                  (sanad) connecting you to the authentic tradition of Qur'anic
                  recitation.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
