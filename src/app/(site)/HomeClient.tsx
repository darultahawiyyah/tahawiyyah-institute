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
  Star,
  GraduationCap,
  Scroll,
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

const stats = [
  { value: "2", label: "Year Program" },
  { value: "6", label: "Core Subjects" },
  { value: "4", label: "Semesters" },
  { value: "5+", label: "Expert Scholars" },
];

const highlights = [
  {
    icon: BookOpen,
    number: "01",
    title: "Comprehensive Curriculum",
    description:
      "Covering Fiqh, ʿAqīdah, Tajwīd, Arabic, Ṣarf, and Tafsīr across four structured semesters — each building on the last.",
  },
  {
    icon: Users,
    number: "02",
    title: "Expert Instruction",
    description:
      "Learn directly from qualified scholars with authentic chains of transmission and years of dedicated teaching experience.",
  },
  {
    icon: Award,
    number: "03",
    title: "Structured Learning",
    description:
      "Progressive curriculum with clear milestones, regular assessments, and end-of-semester examinations to ensure mastery.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-bg pb-20 md:pb-0">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-border bg-bg pb-16 md:py-24">
        {/* Decorative glows */}
        <div className="absolute right-0 top-1/2 h-[700px] w-[700px] -translate-y-1/2 translate-x-1/3 rounded-full bg-gold/6 blur-3xl pointer-events-none" />
        <div className="absolute left-0 bottom-0 h-[400px] w-[500px] translate-y-1/2 -translate-x-1/4 rounded-full bg-brand/20 blur-3xl pointer-events-none" />

        <Container className="pt-4 md:pt-0">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">

            {/* Left Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUpVariants}
              transition={{ duration: 0.7 }}
              className="flex flex-col justify-center space-y-6"
            >
              <Badge variant="gold" className="w-fit">
                Islamic Studies Program
              </Badge>

              <div className="space-y-3">
                <h1 className="font-display text-4xl font-semibold tracking-tight text-text md:text-5xl lg:text-6xl leading-[1.15]">
                  Transform Your Understanding
                  <br />
                  <span className="text-gold">Through Sacred Knowledge</span>
                </h1>
                {/* Ornamental divider */}
                <div className="flex items-center gap-3 pt-1">
                  <div className="h-px w-10 bg-gradient-to-r from-gold to-gold/20" />
                  <div className="h-1.5 w-1.5 rounded-full bg-gold/60" />
                  <div className="h-px w-10 bg-gradient-to-l from-gold to-gold/20" />
                </div>
              </div>

              <p className="max-w-prose text-base leading-relaxed text-muted md:text-lg">
                Join our comprehensive 2-year Islamic studies program designed to
                deepen your understanding of the faith. Study with experienced
                scholars in a structured curriculum that balances traditional
                knowledge with contemporary application.
              </p>

              {/* CTA Row */}
              <div className="flex flex-col gap-4 sm:flex-row">
                <ButtonLink href="/apply" variant="primary" size="lg">
                  Apply Now
                </ButtonLink>
                <ButtonLink href="/curriculum" variant="outline" size="lg">
                  View Curriculum
                </ButtonLink>
              </div>

              {/* Stats strip */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border pt-6">
                {stats.map((stat, i) => (
                  <React.Fragment key={i}>
                    {i > 0 && <div className="hidden h-7 w-px bg-border sm:block" />}
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-display text-2xl font-semibold text-text">
                        {stat.value}
                      </span>
                      <span className="text-xs uppercase tracking-wide text-muted">
                        {stat.label}
                      </span>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </motion.div>

            {/* Right — Card + Logo */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUpVariants}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative flex h-full flex-col"
            >
              <Card className="relative border-gold/30 shadow-xl ring-2 ring-gold/10 overflow-hidden">
                <div className="h-2 rounded-t-2xl bg-gradient-to-r from-gold to-gold2" />
                <div className="absolute inset-0 bg-gradient-to-br from-gold/4 to-transparent pointer-events-none" />
                <CardHeader>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                    Next Cohort
                  </p>
                  <CardTitle className="font-display text-3xl text-text">
                    April 24, 2026
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold/10">
                      <Clock className="h-4 w-4 text-gold" />
                    </div>
                    <div>
                      <p className="text-xs text-muted">Schedule</p>
                      <p className="text-sm font-medium text-text">Mon · Tue · Fri evenings</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold/10">
                      <GraduationCap className="h-4 w-4 text-gold" />
                    </div>
                    <div>
                      <p className="text-xs text-muted">Duration</p>
                      <p className="text-sm font-medium text-text">2 Years · 4 Semesters</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold/10">
                      <Scroll className="h-4 w-4 text-gold" />
                    </div>
                    <div>
                      <p className="text-xs text-muted">Certification</p>
                      <p className="text-sm font-medium text-text">Certificate opportunity upon completion</p>
                    </div>
                  </div>

                  <div className="mt-2 pt-4 border-t border-border">
                    <ButtonLink href="/apply" variant="primary" size="md" className="w-full text-center">
                      Apply Now →
                    </ButtonLink>
                  </div>
                </CardContent>
              </Card>

              {/* Logo */}
              <div className="mt-6 flex flex-1 items-end justify-center">
                <Image
                  src="/logo2.svg"
                  alt="Tahawiyyah Institute Logo"
                  width={480}
                  height={480}
                  className="h-auto w-full max-w-[380px] object-contain opacity-75 md:max-w-[460px]"
                />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ── PROGRAM HIGHLIGHTS ───────────────────────────────── */}
      <section className="relative border-b border-border bg-surface2 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(139,115,85,0.07)_0%,transparent_65%)] pointer-events-none" />
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
              description="Comprehensive Islamic education designed for serious students seeking authentic, structured knowledge."
            />
          </motion.div>

          <motion.div
            className="mt-12 grid gap-6 md:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {highlights.map((h, index) => (
              <motion.div key={index} variants={fadeUpVariants}>
                <Card className="h-full relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="h-2 rounded-t-2xl bg-gradient-to-r from-gold to-gold2" />
                  {/* Background number */}
                  <span className="absolute right-5 top-5 font-display text-7xl font-bold text-gold/6 select-none pointer-events-none leading-none">
                    {h.number}
                  </span>
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 ring-1 ring-gold/20">
                      <h.icon className="h-6 w-6 text-gold" />
                    </div>
                    <CardTitle className="text-lg">{h.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed text-sm">
                      {h.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* ── WHO IT'S FOR ─────────────────────────────────────── */}
      <section className="border-b border-border bg-bg py-16 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
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

              <div className="mt-8">
                <ButtonLink href="/program" variant="outline" size="md">
                  Learn About the Program →
                </ButtonLink>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariants}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="border-gold/20 ring-1 ring-gold/10">
                <div className="h-2 rounded-t-2xl bg-gradient-to-r from-gold to-gold2" />
                <CardContent className="pt-6">
                  <ul className="space-y-4">
                    {[
                      "Muslims seeking structured, traditional Islamic education",
                      "Students ready for a meaningful 2-year commitment",
                      "Those seeking flexible online and in-person learning",
                      "Learners interested in the classical Islamic sciences",
                      "Individuals preparing for deeper religious study or teaching",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15">
                          <CheckCircle2 className="h-3.5 w-3.5 text-gold" />
                        </div>
                        <span className="text-sm leading-relaxed text-muted">
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

      {/* ── CURRICULUM PREVIEW ───────────────────────────────── */}
      <section className="relative border-b border-border bg-surface2 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(139,115,85,0.07)_0%,transparent_65%)] pointer-events-none" />
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
              description="A structured 2-year program covering essential Islamic sciences with progressive depth and complexity."
            />
          </motion.div>

          <motion.div
            className="mt-12 max-w-sm"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            transition={{ duration: 0.5 }}
          >
            <Card className="relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="h-2 rounded-t-2xl bg-gradient-to-r from-gold to-gold2" />
              <span className="absolute right-4 top-4 font-display text-6xl font-bold text-gold/6 select-none pointer-events-none leading-none">
                1
              </span>
              <CardHeader>
                <CardTitle className="font-display text-lg">Semester 1</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Fiqh", "ʿAqīdah", "Tajwīd", "Arabic", "Ṣarf", "Tafsīr"].map((badge) => (
                    <Badge key={badge} variant="default">
                      {badge}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 text-center"
          >
            <ButtonLink href="/curriculum" variant="outline" size="md">
              View Full Curriculum →
            </ButtonLink>
          </motion.div>
        </Container>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────── */}
      <section className="border-b border-border bg-bg py-16 md:py-24">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            transition={{ duration: 0.6 }}
          >
            <Card className="relative overflow-hidden border-gold/25 bg-surface2 ring-1 ring-gold/15">
              <div className="h-2 rounded-t-2xl bg-gradient-to-r from-gold to-gold2" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,115,85,0.06)_0%,transparent_70%)] pointer-events-none" />
              <CardContent className="relative py-14 text-center md:py-20">
                <div className="mx-auto mb-6 flex items-center justify-center gap-3">
                  <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold/50" />
                  <Star className="h-5 w-5 text-gold" />
                  <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold/50" />
                </div>
                <h2 className="font-display mb-4 text-3xl font-semibold text-text md:text-4xl">
                  Ready to Begin Your Journey?
                </h2>
                <p className="mb-8 mx-auto max-w-xl text-base leading-relaxed text-muted md:text-lg">
                  Join our next cohort and start your comprehensive Islamic studies
                  program. Applications are now open for April 24, 2026.
                </p>
                <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                  <ButtonLink href="/apply" variant="primary" size="lg">
                    Apply Now
                  </ButtonLink>
                  <ButtonLink href="/contact" variant="outline" size="lg">
                    Get in Touch
                  </ButtonLink>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
