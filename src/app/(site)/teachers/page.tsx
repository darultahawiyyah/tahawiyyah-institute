"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { cn } from "@/lib/cn";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const teachers = [
  {
    slug: "mawlana-arqam",
    name: "Mawlānā Arqam Masroor",
    title: "Instructor — Ṣarf & Qurʾān",
    summary:
      "Mawlānā Arqam Masroor is an Islamic studies scholar and educator based in New York, specializing in classical Arabic sciences and Qurʾānic studies, and currently pursuing a postgraduate specialization in Islamic law.",
  },
  {
    slug: "mawlana-abdurrahman-khan",
    name: "Mawlānā Abdurraḥmān Khān",
    title: "Administration & Logistics",
    summary:
      "Mawlānā Abdurraḥmān Khān is a scholar from Queens, New York, who completed his ʿĀlimiyyah studies at Darul Uloom New York and graduated with a Master's in Islamic Sciences from Jamia Binoria. He oversees the administration, logistics, and communications of Ṭaḥāwiyyahh Institute.",
  },
  {
    slug: "mawlana-fahim",
    name: "Mawlānā Fahim",
    title: "Instructor — Fiqh, Ḥadīth & Naḥw",
    summary:
      "Mawlānā Fahim completed the seven-year ʿĀlimiyyah program at Darul Qurʾān wa Sunnah and a postgraduate specialization in Fiqh and Iftāʾ, and currently serves as a chaplain at Queens College.",
  },
  {
    slug: "mawlana-rohan",
    name: "Mawlānā Rohan",
    title: "Instructor — ʿAqīda & Tajwīd",
    summary:
      "Mawlānā Rohan is a graduate of Darul Uloom Azaadville in South Africa, currently serving as Imām and Resident Scholar at Shelter Rock Islamic Center and co-founder of Ṭaḥāwiyyah Institute.",
  },
  {
    slug: "qari-nazrul",
    name: "Qāriʾ Nazrul",
    title: "Instructor — Qirāʾāt",
    summary:
      "Qāriʾ Nazrul is a distinguished scholar and teacher of the Qurʾān who completed the ʿĀlimiyyah program, studied Qirāʾāt under Qāriʾ Ismāʿīl Essack (رحمه الله), and currently serves as Religious Director at Shelter Rock Islamic Center.",
  },
];

export default function TeachersPage() {
  return (
    <div className="min-h-screen bg-bg py-16 md:py-24">
      <Container>
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
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teachers.map((teacher, index) => (
            <motion.div
              key={teacher.slug}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={`/teachers/${teacher.slug}`}
                className="group block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded-2xl"
              >
                <Card className="h-full transition-shadow duration-300 group-hover:shadow-soft">
                  {/* Decorative top accent */}
                  <div className="h-1.5 rounded-t-2xl bg-gradient-to-r from-gold to-gold2" />
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      {/* Avatar placeholder */}
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-surface2 text-xl font-semibold text-gold">
                        {teacher.name
                          .split(" ")
                          .filter((n) => n !== "—" && n !== "TBD")
                          .map((n) => n[0])
                          .slice(0, 2)
                          .join("")}
                      </div>
                      <div>
                        <CardTitle className="group-hover:text-gold transition-colors">
                          {teacher.name}
                        </CardTitle>
                        <p className="mt-1 text-sm text-muted">{teacher.title}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-base leading-relaxed text-muted">
                      {teacher.summary}
                    </p>
                    <span
                      className={cn(
                        "mt-4 inline-flex items-center gap-1 text-sm font-medium text-gold transition-colors",
                        "group-hover:text-gold2"
                      )}
                    >
                      View Full Biography
                      <svg
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
}
