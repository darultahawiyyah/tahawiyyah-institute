"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Clock, User } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card, CardContent } from "@/components/ui/Card";
import { semester1Courses } from "@/lib/curriculum-data";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
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
              Curriculum
            </h1>
            <p className="mt-4 max-w-prose text-base leading-relaxed text-muted md:text-lg">
              A comprehensive program covering essential Islamic sciences with
              progressive depth and increasing complexity.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* SEMESTER 1 SUBJECTS */}
      <section className="relative border-b border-border bg-bg py-16 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(139,115,85,0.06)_0%,transparent_60%)] pointer-events-none" />
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariants}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-8 text-2xl font-semibold text-text md:text-3xl">
              Semester 1
            </h2>
          </motion.div>

          <motion.div
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
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
                  <Card className="h-full transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                    <div className="h-2 rounded-t-2xl bg-gradient-to-r from-gold to-gold2" />
                    <CardContent className="pt-5 space-y-4">
                      {/* Code + Title */}
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-gold">
                          {course.code}
                        </span>
                        <h3 className="mt-1 text-lg font-semibold text-text group-hover:text-gold transition-colors">
                          {course.fullName}
                        </h3>
                      </div>

                      {/* Description preview */}
                      <p className="text-sm leading-relaxed text-muted line-clamp-3">
                        {course.description}
                      </p>

                      {/* Meta info */}
                      <div className="space-y-2 pt-1">
                        <div className="flex items-center gap-2 text-sm text-muted">
                          <User className="h-4 w-4 shrink-0 text-gold" />
                          <span>{course.instructor ?? "Instructor TBD"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted">
                          <MapPin className="h-4 w-4 shrink-0 text-gold" />
                          <span>{course.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted">
                          <Clock className="h-4 w-4 shrink-0 text-gold" />
                          <span>{course.schedule}</span>
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
      <section className="border-b border-border bg-bg py-16 md:py-24">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <Card className="bg-surface2">
              <CardContent className="pt-6">
                <p className="max-w-prose text-base leading-relaxed text-muted md:text-lg">
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
