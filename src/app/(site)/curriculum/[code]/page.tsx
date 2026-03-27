"use client";

import * as React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { MapPin, Clock, User, BookOpen } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card, CardContent } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import { Divider } from "@/components/ui/Divider";
import { semester1Courses } from "@/lib/curriculum-data";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function CourseDetailPage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const resolvedParams = React.use(params);
  const course = semester1Courses.find((c) => c.slug === resolvedParams.code);

  if (!course) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-bg py-16 md:py-24">
      <Container>
        {/* Breadcrumb */}
        <motion.nav
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.4 }}
          className="mb-8"
          aria-label="Breadcrumb"
        >
          <ol className="flex items-center gap-2 text-sm text-muted">
            <li>
              <Link href="/curriculum" className="transition-colors hover:text-gold">
                Curriculum
              </Link>
            </li>
            <li aria-hidden="true">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </li>
            <li className="text-text font-medium">{course.code}</li>
          </ol>
        </motion.nav>

        {/* Course Header */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <span className="text-sm font-semibold uppercase tracking-wide text-gold">
            {course.code}
          </span>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-text md:text-4xl lg:text-5xl">
            {course.fullName}
          </h1>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="space-y-10 lg:col-span-2">
            {/* Description */}
            <motion.section
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-semibold text-text">Course Description</h2>
              <Divider />
              <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
                {course.description}
              </p>
            </motion.section>

            {/* Primary Texts */}
            <motion.section
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-2xl font-semibold text-text">Primary Texts</h2>
              <Divider />
              <ul className="mt-4 space-y-2">
                {course.texts.map((text, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    <span className="text-base text-muted">{text}</span>
                  </li>
                ))}
              </ul>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Course Info */}
            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              <Card>
                <CardContent className="pt-6 space-y-5">
                  <h3 className="text-lg font-semibold text-text">Course Info</h3>

                  {/* Instructor */}
                  <div className="flex items-start gap-3">
                    <User className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                        Instructor
                      </p>
                      {course.instructor && course.instructorSlug ? (
                        <Link
                          href={`/teachers/${course.instructorSlug}`}
                          className="mt-0.5 text-sm font-medium text-gold transition-colors hover:text-gold2"
                        >
                          {course.instructor}
                        </Link>
                      ) : (
                        <p className="mt-0.5 text-sm text-muted">TBD</p>
                      )}
                    </div>
                  </div>

                  <Divider />

                  {/* Location */}
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                        Location
                      </p>
                      <p className="mt-0.5 text-sm text-text">{course.location}</p>
                    </div>
                  </div>

                  <Divider />

                  {/* Schedule */}
                  <div className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                        Schedule
                      </p>
                      <p className="mt-0.5 text-sm text-text">{course.schedule}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Apply CTA */}
            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="border-gold/20 bg-surface2 ring-1 ring-gold/10">
                <CardContent className="pt-6">
                  <p className="mb-4 text-sm leading-relaxed text-muted">
                    Interested in taking this course? Apply to join the program.
                  </p>
                  <ButtonLink href="/apply" variant="primary" size="md" className="w-full text-center">
                    Apply Now
                  </ButtonLink>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Back Link */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-16"
        >
          <ButtonLink href="/curriculum" variant="outline" size="md">
            ← Back to Curriculum
          </ButtonLink>
        </motion.div>
      </Container>
    </div>
  );
}
