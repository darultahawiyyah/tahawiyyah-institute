"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, User, Wifi, WifiOff } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/Card";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const scheduleData = [
  {
    day: "Monday",
    dayAbbr: "Mon",
    sessions: [
      {
        time: "8:00–8:50 PM",
        courseCode: "FQH 101",
        courseSlug: "fqh-101",
        courseName: "Ḥanafī Jurisprudence and Legal Methodology",
        instructor: "Mawlānā Abdurrahman Khan",
        instructorSlug: "mawlana-abdurrahman-khan",
        location: "Online",
        isOnline: true,
      },
      {
        time: "8:55–9:45 PM",
        courseCode: "ARB 101",
        courseSlug: "arb-101",
        courseName: "Classical Arabic Grammar (Naḥw)",
        instructor: "Mawlānā Abdurrahman Khan",
        instructorSlug: "mawlana-abdurrahman-khan",
        location: "Online",
        isOnline: true,
      },
    ],
  },
  {
    day: "Tuesday",
    dayAbbr: "Tue",
    sessions: [
      {
        time: "8:00–8:50 PM",
        courseCode: "TAF 101",
        courseSlug: "taf-101",
        courseName: "Classical Tafsīr and Qurʾānic Sciences",
        instructor: "Mawlānā Arqam Masroor",
        instructorSlug: "mawlana-arqam",
        location: "Online",
        isOnline: true,
      },
      {
        time: "8:55–9:45 PM",
        courseCode: "TAJ 101",
        courseSlug: "taj-101",
        courseName: "Principles of Qurʾānic Recitation (Tajwīd)",
        instructor: "Mawlānā Rohan",
        instructorSlug: "mawlana-rohan",
        location: "Online",
        isOnline: true,
      },
    ],
  },
  {
    day: "Saturday",
    dayAbbr: "Sat",
    sessions: [
      {
        time: "2:10–3:00 PM",
        courseCode: "TAJ 101",
        courseSlug: "taj-101",
        courseName: "Principles of Qurʾānic Recitation (Tajwīd)",
        instructor: "Mawlānā Rohan",
        instructorSlug: "mawlana-rohan",
        location: "TBD",
        isOnline: false,
      },
      {
        time: "3:05–3:55 PM",
        courseCode: "TAF 101",
        courseSlug: "taf-101",
        courseName: "Classical Tafsīr and Qurʾānic Sciences",
        instructor: "Mawlānā Arqam Masroor",
        instructorSlug: "mawlana-arqam",
        location: "TBD",
        isOnline: false,
      },
    ],
  },
];

export default function Schedule() {
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
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-gold">
              Semester 1
            </p>
            <h1 className="font-display text-4xl font-semibold tracking-tight text-text md:text-5xl lg:text-6xl">
              Schedule
            </h1>
            <div className="mt-3 flex items-center gap-3">
              <div className="h-px w-10 bg-gradient-to-r from-gold to-gold/20" />
              <div className="h-1.5 w-1.5 rounded-full bg-gold/50" />
              <div className="h-px w-10 bg-gradient-to-l from-gold to-gold/20" />
            </div>
            <p className="mt-4 max-w-prose text-base leading-relaxed text-muted md:text-lg">
              Classes run Monday, Tuesday, and Saturday. In-person session locations are TBD; online sessions are conducted via a virtual platform.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* WEEKLY TIMETABLE */}
      <section className="border-b border-border bg-surface2 py-16 md:py-24">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariants}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <h2 className="text-2xl font-semibold text-text md:text-3xl">
              Weekly Timetable
            </h2>
            <p className="mt-2 text-sm text-muted">All times are Eastern Time (ET)</p>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {scheduleData.map((day) => (
              <motion.div key={day.day} variants={fadeUpVariants}>
                {/* Day label */}
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold text-sm font-bold text-surface">
                    {day.dayAbbr}
                  </div>
                  <h3 className="text-xl font-semibold text-text">{day.day}</h3>
                  <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
                </div>

                {/* Sessions */}
                <div className="ml-0 md:ml-14 grid gap-4 sm:grid-cols-2">
                  {day.sessions.map((session, idx) => (
                    <Link
                      key={idx}
                      href={`/curriculum/${session.courseSlug}`}
                      className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded-2xl"
                    >
                    <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 group-hover:border-gold/30">
                      <div className="h-1.5 rounded-t-2xl bg-gradient-to-r from-gold to-gold2" />
                      <CardContent className="pt-5 space-y-3">
                        {/* Time */}
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-gold shrink-0" />
                          <span className="text-sm font-semibold text-gold">{session.time}</span>
                        </div>

                        {/* Course */}
                        <div>
                          <span className="text-xs font-semibold uppercase tracking-wide text-muted">
                            {session.courseCode}
                          </span>
                          <p className="mt-0.5 text-base font-semibold text-text leading-snug group-hover:text-gold transition-colors">
                            {session.courseName}
                          </p>
                        </div>

                        {/* Instructor */}
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4 text-gold shrink-0" />
                          <span className="text-sm text-muted">
                            {session.instructor}
                          </span>
                        </div>

                        {/* Location badge */}
                        <div className="flex items-center gap-2">
                          {session.isOnline ? (
                            <Wifi className="h-4 w-4 text-gold shrink-0" />
                          ) : (
                            <MapPin className="h-4 w-4 text-gold shrink-0" />
                          )}
                          <span className="inline-flex items-center rounded-full border border-gold/30 bg-gold/8 px-2.5 py-0.5 text-xs font-medium text-gold">
                            {session.isOnline ? "Online" : `In Person — ${session.location}`}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* LOCATIONS */}
      <section className="border-b border-border bg-bg py-16 md:py-24">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariants}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <h2 className="text-2xl font-semibold text-text md:text-3xl">
              Locations
            </h2>
          </motion.div>

          <motion.div
            className="grid gap-6 sm:grid-cols-2 max-w-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* MADANI MASJID */}
            <motion.div variants={fadeUpVariants}>
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="h-2 rounded-t-2xl bg-gradient-to-r from-gold to-gold2" />
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10">
                      <MapPin className="h-6 w-6 text-gold" />
                    </div>
                    <CardTitle className="text-xl">TBD</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted leading-relaxed">
                    In-person class location to be determined.
                  </p>
                  <div className="rounded-lg border border-border bg-surface p-3">
                    <p className="text-xs text-muted">
                      <strong className="text-text">Sessions:</strong> Saturday afternoons
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* SRIC — COMING SOON */}
            <motion.div variants={fadeUpVariants}>
              <Card className="h-full relative overflow-hidden">
                <div className="h-2 rounded-t-2xl bg-gradient-to-r from-brand to-brand2" />
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface2">
                      <MapPin className="h-6 w-6 text-muted" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-muted">SRIC</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted leading-relaxed">
                    Shelter Rock Islamic Center — additional classes coming soon.
                  </p>
                  <div className="inline-flex items-center rounded-full border border-border bg-surface2 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-muted">
                    Coming Soon
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 text-xs italic text-muted/70 max-w-lg"
          >
            Schedule subject to change. Students will be notified of any updates.
          </motion.p>
        </Container>
      </section>
    </div>
  );
}
