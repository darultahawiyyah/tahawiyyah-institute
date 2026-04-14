"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card, CardContent } from "@/components/ui/Card";
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

const teachers = [
  {
    slug: "mawlana-arqam",
    name: "Mawlānā Arqam Masroor",
    title: "Instructor — Ṣarf & Qurʾān",
    courses: ["SAR 101", "TAF 101"],
    summary:
      "Mawlānā Arqam Masroor is an Islamic studies scholar and educator based in New York, specializing in classical Arabic sciences and Qurʾānic studies, and currently pursuing a postgraduate specialization in Islamic law.",
  },
  {
    slug: "mawlana-abdurrahman-khan",
    name: "Mawlānā Abdurrahman Khan",
    title: "Instructor — Fiqh | Administration",
    courses: ["FQH 101"],
    summary:
      "Mawlānā Abdurrahman Khan is a scholar from Queens, New York, who completed his ʿĀlimiyyah studies at Darul Uloom New York and graduated with a Master's in Islamic Sciences from Jamia Binoria. He teaches Fiqh at Ṭaḥāwiyyah Institute.",
  },
  {
    slug: "mawlana-ibraheem",
    name: "Mawlānā Ibraheem",
    title: "Instructor — Naḥw",
    courses: ["ARB 101"],
    summary:
      "Mawlānā Ibraheem completed his Ḥifẓ at Darul Uloom New York and his ʿĀlimiyyah at Darul Quran wa Sunnah, studying under distinguished scholars including Mufti Ruhul Amin, Mufti Nouman, and Mawlana Hammad. He holds a degree in Cybersecurity from John Jay College and currently serves as a certified chaplain and Imam at Flushing Muslim Center.",
  },
  {
    slug: "mufti-umair",
    name: "Muftī Umair",
    title: "Instructor — Ṣarf",
    courses: [],
    summary:
      "Muftī Umair completed his Ḥifẓ, ʿĀlimiyyah, and Iftāʾ at Darul Uloom New York, studying under senior scholars including Mawlana Rafiq, Mawlana Abdurraheem, and Mawlana Azizurrahman, and specializing in Iftāʾ under Mufti Manzoor and Mufti Mahdi. He currently serves as a Ḥifẓ teacher at Jamia Quraniah Academy.",
  },
  {
    slug: "mawlana-fahim",
    name: "Mawlānā Fahim",
    title: "Instructor & Scholar in Residence",
    courses: [],
    summary:
      "Mawlānā Fahim completed the seven-year ʿĀlimiyyah program at Darul Qurʾān wa Sunnah and a postgraduate specialization in Fiqh and Iftāʾ, and currently serves as a chaplain at Queens College.",
  },
  {
    slug: "mawlana-rohan",
    name: "Mawlānā Rohan",
    title: "Instructor — ʿAqīda & Tajwīd",
    courses: ["AQD 101", "TAJ 101"],
    summary:
      "Mawlānā Rohan is a graduate of Jāmiʿah Nuʿmāniyyah in South Africa, where he studied under Mawlānā Faḍlur Raḥmān Aẓmī, and studied the sciences of Qirāʾāt under Qāriʾ ʿAbdullāh Motara. He currently serves as Imām and Resident Scholar at Shelter Rock Islamic Center.",
  },
  {
    slug: "qari-nazrul",
    name: "Qāriʾ Nazrul",
    title: "Instructor — Qirāʾāt",
    courses: [],
    summary:
      "Qāriʾ Nazrul is a distinguished scholar and teacher of the Qurʾān who completed the ʿĀlimiyyah program, studied Qirāʾāt under Qāriʾ Ismāʿīl Essack (رحمه الله), and currently serves as Religious Director at Shelter Rock Islamic Center.",
  },
];

function Initials({ name }: { name: string }) {
  return (
    <>
      {name
        .split(" ")
        .filter((n) => n !== "—" && n !== "TBD")
        .map((n) => n[0])
        .slice(0, 2)
        .join("")}
    </>
  );
}

export default function TeachersPage() {
  return (
    <div className="relative min-h-screen bg-bg py-16 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(139,115,85,0.07)_0%,transparent_60%)] pointer-events-none" />
      <Container className="relative">

        {/* Page Header */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
        >
          <SectionHeader
            eyebrow="Our Faculty"
            title="Meet Our Faculty"
            description="Our instructors are dedicated scholars with years of study and teaching experience. Get to know the educators guiding your journey through the Ṭaḥāwiyyah program."
          />
        </motion.div>

        {/* Teachers Grid */}
        <motion.div
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {teachers.map((teacher, index) => (
            <motion.div
              key={teacher.slug}
              variants={fadeUpVariants}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Link
                href={`/teachers/${teacher.slug}`}
                className="group block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded-2xl"
              >
                <Card className="h-full overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                  {/* Accent bar */}
                  <div className="h-2 rounded-t-2xl bg-gradient-to-r from-gold to-gold2" />

                  <CardContent className="pt-6 space-y-5">
                    {/* Avatar + Name */}
                    <div className="flex items-center gap-4">
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold/20 to-gold2/35 text-xl font-semibold text-gold ring-2 ring-gold/15 shadow-sm">
                        <Initials name={teacher.name} />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-display text-lg font-semibold text-text group-hover:text-gold transition-colors leading-snug">
                          {teacher.name}
                        </h3>
                      </div>
                    </div>

                    {/* Summary */}
                    <p className="text-sm leading-relaxed text-muted line-clamp-3">
                      {teacher.summary}
                    </p>

                    {/* CTA */}
                    <span className={cn(
                      "inline-flex items-center gap-1 text-sm font-medium text-gold transition-colors",
                      "group-hover:text-gold2"
                    )}>
                      View Full Biography
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
    </div>
  );
}
