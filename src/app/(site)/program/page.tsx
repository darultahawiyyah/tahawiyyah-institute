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
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const outcomes = [
  {
    icon: BookOpen,
    title: "Comprehensive Knowledge",
    description:
      "Master the fundamentals of Fiqh, ʿAqīda, Tafsīr, Tajwīd, and Arabic with confidence and depth across all four semesters.",
  },
  {
    icon: CheckCircle2,
    title: "Textual Competency",
    description:
      "Read and understand classical Islamic texts in Arabic, with the ability to navigate traditional sources independently.",
  },
  {
    icon: Award,
    title: "Qurʾānic Mastery",
    description:
      "Recite the Qurʾān with proper Tajwīd and develop a meaningful, enduring relationship with the sacred text.",
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
      "Apply Islamic principles to contemporary issues with wisdom, understanding context, nuance, and scholarly methodology.",
  },
  {
    icon: Heart,
    title: "Spiritual Growth",
    description:
      "Deepen your connection with Allāh through knowledge, practice, and the faithful application of learned principles.",
  },
];

export default function Program() {
  return (
    <div className="min-h-screen bg-bg pb-20 md:pb-0">

      {/* HEADER */}
      <section className="relative border-b border-border bg-bg pb-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(139,115,85,0.08)_0%,transparent_60%)] pointer-events-none" />
        <Container className="relative pt-4 md:pt-0">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariants}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-gold">
              Overview
            </p>
            <h1 className="font-display text-4xl font-semibold tracking-tight text-text md:text-5xl lg:text-6xl">
              Islamic Studies Program
            </h1>
            <div className="mt-3 flex items-center gap-3">
              <div className="h-px w-10 bg-gradient-to-r from-gold to-gold/20" />
              <div className="h-1.5 w-1.5 rounded-full bg-gold/50" />
              <div className="h-px w-10 bg-gradient-to-l from-gold to-gold/20" />
            </div>
            <p className="mt-5 max-w-prose text-base leading-relaxed text-muted md:text-lg">
              A comprehensive 2-year program designed to deepen your understanding
              of Islamic sciences through structured learning and expert guidance.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* VISION */}
      <section className="relative border-b border-border bg-surface2 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(139,115,85,0.06)_0%,transparent_65%)] pointer-events-none" />
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
            className="mt-8 max-w-3xl"
          >
            <Card className="border-gold/20 ring-1 ring-gold/10">
              <div className="h-2 rounded-t-2xl bg-gradient-to-r from-gold to-gold2" />
              <CardContent className="pt-6">
                <p className="text-base leading-relaxed text-muted md:text-lg">
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
              description="Clear learning outcomes designed to guide your educational journey from the first semester to the last."
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 max-w-3xl"
          >
            <Card>
              <div className="h-2 rounded-t-2xl bg-gradient-to-r from-gold to-gold2" />
              <CardContent className="pt-6">
                <ul className="space-y-5">
                  {[
                    "Develop a comprehensive understanding of core Islamic sciences including Fiqh, ʿAqīda, Tafsīr, Tajwīd, and Arabic",
                    "Build a strong foundation in traditional Islamic scholarship and methodology",
                    "Cultivate the ability to read and understand classical Islamic texts",
                    "Gain practical skills in applying Islamic knowledge to contemporary contexts",
                    "Foster a deep connection with the Qurʾān through proper recitation and understanding",
                    "Prepare students for advanced study or teaching roles in Islamic education",
                  ].map((objective, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/15 ring-1 ring-gold/20">
                        <Target className="h-3.5 w-3.5 text-gold" />
                      </div>
                      <span className="text-sm leading-relaxed text-muted md:text-base">
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
      <section className="relative border-b border-border bg-surface2 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(139,115,85,0.06)_0%,transparent_65%)] pointer-events-none" />
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
              description="A clear, progressive framework for your learning journey."
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
              { icon: Calendar, label: "Duration", value: "2 Years" },
              { icon: BookOpen, label: "Semesters", value: "4" },
              { icon: GraduationCap, label: "Core Subjects", value: "Fiqh · ʿAqīda · Tafsīr · Tajwīd · Arabic" },
              { icon: FileText, label: "Assessments", value: "End of every semester" },
            ].map((stat, index) => (
              <motion.div key={index} variants={fadeUpVariants}>
                <Card className="h-full relative overflow-hidden text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="h-2 rounded-t-2xl bg-gradient-to-r from-gold to-gold2" />
                  <CardContent className="pt-6">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 ring-1 ring-gold/20">
                      <stat.icon className="h-6 w-6 text-gold" />
                    </div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted">
                      {stat.label}
                    </p>
                    <p className={cn(
                      "font-semibold text-text",
                      stat.label === "Core Subjects" ? "text-sm leading-relaxed" : "font-display text-2xl"
                    )}>
                      {stat.value}
                    </p>
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
              description="What you will achieve upon successful completion of the program."
            />
          </motion.div>

          <motion.div
            className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {outcomes.map((outcome, index) => (
              <motion.div key={index} variants={fadeUpVariants}>
                <Card className="h-full relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="h-2 rounded-t-2xl bg-gradient-to-r from-gold to-gold2" />
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 ring-1 ring-gold/20">
                      <outcome.icon className="h-6 w-6 text-gold" />
                    </div>
                    <CardTitle className="text-lg">{outcome.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed">
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
      <section className="relative border-b border-border bg-surface2 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,115,85,0.07)_0%,transparent_70%)] pointer-events-none" />
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <Card className="border-gold/30 ring-2 ring-gold/15 overflow-hidden">
              <div className="h-2 rounded-t-2xl bg-gradient-to-r from-gold to-gold2" />
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 ring-1 ring-gold/20">
                    <Award className="h-6 w-6 text-gold" />
                  </div>
                  <CardTitle className="font-display text-2xl text-gold">
                    Ijāza Opportunity
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="max-w-prose text-base leading-relaxed text-muted md:text-lg">
                  Students who successfully complete the program and meet all
                  academic and recitation standards may be eligible to receive an{" "}
                  <strong className="text-text">Ijāza in Qurʾān Recitation</strong>.
                  This traditional certification is granted contingent upon
                  demonstrating mastery of Tajwīd rules, accurate memorization, and
                  meeting the rigorous standards set by our qualified instructors.
                  The Ijāza represents a recognized chain of transmission (sanad)
                  connecting you to the authentic tradition of Qurʾānic recitation.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
