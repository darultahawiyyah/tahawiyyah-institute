"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { User, Clock, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card, CardContent } from "@/components/ui/Card";
import { semester1Courses } from "@/lib/curriculum-data";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

export default function Curriculum() {
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
              Academic Program
            </p>
            <h1 className="font-display text-4xl font-semibold tracking-tight text-text md:text-5xl lg:text-6xl">
              Curriculum
            </h1>
            <div className="mt-3 flex items-center gap-3">
              <div className="h-px w-10 bg-gradient-to-r from-gold to-gold/20" />
              <div className="h-1.5 w-1.5 rounded-full bg-gold/50" />
              <div className="h-px w-10 bg-gradient-to-l from-gold to-gold/20" />
            </div>
            <p className="mt-5 max-w-prose text-base leading-relaxed text-muted md:text-lg">
              A comprehensive program covering essential Islamic sciences with
              progressive depth and increasing complexity across four semesters.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* SEMESTER 1 */}
      <section className="relative border-b border-border bg-bg py-16 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(139,115,85,0.05)_0%,transparent_60%)] pointer-events-none" />
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariants}
            transition={{ duration: 0.5 }}
          >
            <SectionHeader
              eyebrow="Year 1"
              title="Semester 1"
              description="Six core subjects taught by expert scholars — online and in person."
            />
          </motion.div>

          <motion.div
            className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {semester1Courses.map((course) => (
              <motion.div key={course.slug} variants={fadeUpVariants}>
                <Link
                  href={`/curriculum/${course.slug}`}
                  className="group block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded-2xl"
                >
                  <Card className="h-full overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                    <div className="h-2 rounded-t-2xl bg-gradient-to-r from-gold to-gold2" />
                    <CardContent className="pt-5 space-y-4">
                      {/* Code badge */}
                      <div className="inline-flex items-center rounded-full border border-gold/25 bg-gold/8 px-3 py-1 text-xs font-bold uppercase tracking-widest text-gold">
                        {course.code}
                      </div>

                      {/* Title */}
                      <h3 className="font-display text-xl font-semibold text-text group-hover:text-gold transition-colors leading-snug">
                        {course.fullName}
                      </h3>

                      {/* Description preview */}
                      <p className="text-sm leading-relaxed text-muted line-clamp-2">
                        {course.description}
                      </p>

                      {/* Meta */}
                      <div className="space-y-2 pt-1 border-t border-border">
                        <div className="flex items-center gap-2 text-xs text-muted pt-2">
                          <User className="h-3.5 w-3.5 shrink-0 text-gold" />
                          <span>{course.instructor ?? "Instructor TBD"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-muted">
                          <Clock className="h-3.5 w-3.5 shrink-0 text-gold" />
                          <span>{course.schedule}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-muted">
                          <MapPin className="h-3.5 w-3.5 shrink-0 text-gold" />
                          <span>{course.location}</span>
                        </div>
                      </div>

                      {/* CTA */}
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-gold transition-colors group-hover:text-gold2">
                        View Course Details
                        <svg
                          className="h-4 w-4 transition-transform group-hover:translate-x-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* ASSESSMENT NOTE */}
      <section className="border-b border-border bg-surface2 py-16 md:py-24">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <Card className="border-gold/20 ring-1 ring-gold/10">
              <div className="h-2 rounded-t-2xl bg-gradient-to-r from-gold to-gold2" />
              <CardContent className="pt-6">
                <p className="text-base leading-relaxed text-muted md:text-lg">
                  <strong className="text-text">Assessment:</strong> Exams are
                  conducted at the end of every semester to evaluate student
                  progress and ensure mastery of the material. Successful
                  completion of all four semesters is required for program
                  completion.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
