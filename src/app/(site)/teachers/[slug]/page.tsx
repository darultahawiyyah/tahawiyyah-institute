"use client";

import * as React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Card, CardContent } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import { Divider } from "@/components/ui/Divider";
import { cn } from "@/lib/cn";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

interface TeacherData {
  slug: string;
  name: string;
  title: string;
  summary: string;
  education: string[];
  specializations: string[];
  biography: string;
  teachingPhilosophy: string;
  courses: string[];
}

const teachersData: TeacherData[] = [
  {
    slug: "mawlana-arqam",
    name: "Mawlana Arqam",
    title: "Instructor — Fiqh & Usul al-Fiqh",
    summary:
      "Mawlana Arqam specializes in Hanafi jurisprudence and its foundational principles, bringing years of study and teaching experience to the institute.",
    education: [
      "Traditional Alim course in Hanafi Fiqh",
      "Advanced studies in Usul al-Fiqh",
      "Ijazat in classical Fiqh texts",
    ],
    specializations: [
      "Hanafi Fiqh",
      "Usul al-Fiqh (Principles of Jurisprudence)",
      "Comparative Jurisprudence",
      "Islamic Legal Theory",
    ],
    biography:
      "Mawlana Arqam began his journey of Islamic scholarship at a young age and went on to complete a rigorous traditional Alim course with a focus on Hanafi Fiqh. He studied under senior scholars and received personal Ijazat in several classical texts of jurisprudence. His deep engagement with the principles of Fiqh allows him to not only convey rulings but help students understand the reasoning behind them. He has dedicated his career to teaching and has trained numerous students in the intricacies of Hanafi jurisprudence. At Tahawiyyah Institute, Mawlana Arqam oversees the Fiqh curriculum and ensures students develop both knowledge and analytical thinking.",
    teachingPhilosophy:
      "Mawlana Arqam believes that Fiqh should not be learned in isolation from its principles. By grounding students in Usul al-Fiqh alongside practical rulings, he helps them develop the analytical skills needed to engage with the tradition critically and faithfully. His classes combine close reading of classical texts with real-world application.",
    courses: ["Al-Fiqh al-Muyassar", "Mukhtasar al-Quduri", "Usul al-Shashi"],
  },
  {
    slug: "mawlana-fahim",
    name: "Mawlana Fahim",
    title: "Instructor — Hadith Sciences",
    summary:
      "Mawlana Fahim brings rigorous training in hadith authentication and the study of prophetic traditions, helping students connect with the Sunnah.",
    education: [
      "Traditional Alim course with specialization in Hadith",
      "Advanced studies in Mustalah al-Hadith",
      "Ijazat in the Six Books of Hadith",
    ],
    specializations: [
      "Mustalah al-Hadith (Hadith Terminology)",
      "Takhrij al-Hadith (Hadith Verification)",
      "Study of the Six Canonical Collections",
      "Prophetic Biography through Hadith",
    ],
    biography:
      "Mawlana Fahim developed an early passion for the Prophetic traditions and dedicated years to studying under scholars of hadith. He specialized in Hadith Sciences during his traditional studies and developed a deep expertise in the methodology of hadith authentication. Beyond his formal education, he participated in private study circles where he received detailed Ijazat in the six canonical collections. His approach combines traditional methodology with an awareness of how hadith scholarship connects to contemporary Muslim life. At Tahawiyyah Institute, Mawlana Fahim leads the Hadith Sciences track and helps students develop a meaningful relationship with the Sunnah.",
    teachingPhilosophy:
      "Mawlana Fahim believes that understanding hadith methodology is essential for any student of knowledge. Without knowing how to verify a narration, one cannot truly engage with the Prophetic tradition. His classes go beyond just reading hadith texts — they teach students how those texts were preserved, transmitted, and authenticated across generations.",
    courses: [
      "Riyadh al-Saliheen",
      "Al-Bayquniyyah",
      "Selected chapters from Sahih al-Bukhari",
    ],
  },
  {
    slug: "mawlana-rohan",
    name: "Mawlana Rohan",
    title: "Instructor — Aqidah & Islamic Theology",
    summary:
      "Mawlana Rohan is dedicated to making classical creedal texts accessible to contemporary students, grounding them in sound Islamic belief.",
    education: [
      "Traditional Alim course with focus on Aqidah",
      "Advanced studies in Maturidi Theology",
      "Ijazah in Al-Aqidah al-Tahawiyyah",
    ],
    specializations: [
      "Maturidi Theology",
      "Classical Creedal Texts",
      "Comparative Theology",
      "History of Islamic Thought",
    ],
    biography:
      "Mawlana Rohan's passion for Islamic theology grew during his traditional studies, where he immersed himself in the works of classical Maturidi scholars. He has spent years building a comprehensive understanding of creedal theology and its historical development. His ability to present complex theological concepts in a clear and relatable manner has made him a valued instructor. At Tahawiyyah Institute, Mawlana Rohan leads the Aqidah track and ensures that students not only memorize creedal points but truly understand the reasoning behind them, building conviction that is both intellectually sound and spiritually grounded.",
    teachingPhilosophy:
      "Mawlana Rohan emphasizes the importance of understanding why we believe what we believe. Rather than rote memorization of creedal statements, he encourages his students to engage with the intellectual tradition, ask questions, and develop a deeply rooted conviction that can withstand modern challenges.",
    courses: [
      "Al-Aqidah al-Wasitiyyah",
      "Sharh al-Aqidah al-Tahawiyyah",
      "Al-Fiqh al-Akbar",
    ],
  },
  {
    slug: "bint-instructor-1",
    name: "Bint — TBD",
    title: "Instructor — Tafsir & Qur'anic Studies",
    summary:
      "Biography coming soon.",
    education: [
      "Details coming soon",
    ],
    specializations: [
      "Tafsir & Qur'anic Studies",
    ],
    biography:
      "Full biography coming soon. This instructor will be teaching Tafsir and Qur'anic Studies at Tahawiyyah Institute.",
    teachingPhilosophy:
      "Details coming soon.",
    courses: [
      "Tafsir al-Jalalayn (selected surahs)",
      "Uloom al-Qur'an",
    ],
  },
  {
    slug: "bint-instructor-2",
    name: "Bint — TBD",
    title: "Instructor — Tajwid & Qur'anic Recitation",
    summary:
      "Biography coming soon.",
    education: [
      "Details coming soon",
    ],
    specializations: [
      "Tajwid & Qur'anic Recitation",
    ],
    biography:
      "Full biography coming soon. This instructor will be teaching Tajwid and Qur'anic Recitation at Tahawiyyah Institute.",
    teachingPhilosophy:
      "Details coming soon.",
    courses: [
      "Al-Jazariyyah",
      "Practical Tajwid Application",
    ],
  },
  {
    slug: "bint-instructor-3",
    name: "Bint — TBD",
    title: "Instructor — Arabic Language & Grammar",
    summary:
      "Biography coming soon.",
    education: [
      "Details coming soon",
    ],
    specializations: [
      "Arabic Language & Grammar",
    ],
    biography:
      "Full biography coming soon. This instructor will be teaching Arabic Language and Grammar at Tahawiyyah Institute.",
    teachingPhilosophy:
      "Details coming soon.",
    courses: [
      "Al-Ajrumiyyah",
      "Qatr al-Nada",
    ],
  },
];

export default function TeacherBiographyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = React.use(params);
  const teacher = teachersData.find((t) => t.slug === resolvedParams.slug);

  if (!teacher) {
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
              <Link href="/teachers" className="transition-colors hover:text-gold">
                Teachers
              </Link>
            </li>
            <li aria-hidden="true">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </li>
            <li className="text-text font-medium">{teacher.name}</li>
          </ol>
        </motion.nav>

        {/* Teacher Header */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            {/* Large Avatar */}
            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-surface2 text-3xl font-semibold text-gold border-2 border-border">
              {teacher.name
                .split(" ")
                .filter((n) => n !== "—" && n !== "TBD")
                .map((n) => n[0])
                .slice(0, 2)
                .join("")}
            </div>
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-text md:text-4xl">
                {teacher.name}
              </h1>
              <p className="mt-2 text-lg text-gold">{teacher.title}</p>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content — Left Column */}
          <div className="space-y-10 lg:col-span-2">
            {/* Biography */}
            <motion.section
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-semibold text-text">Biography</h2>
              <Divider />
              <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
                {teacher.biography}
              </p>
            </motion.section>

            {/* Teaching Philosophy */}
            <motion.section
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-2xl font-semibold text-text">
                Teaching Philosophy
              </h2>
              <Divider />
              <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
                {teacher.teachingPhilosophy}
              </p>
            </motion.section>
          </div>

          {/* Sidebar — Right Column */}
          <div className="space-y-6">
            {/* Education */}
            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold text-text">Education</h3>
                  <ul className="mt-3 space-y-2">
                    {teacher.education.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm leading-relaxed text-muted"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Specializations */}
            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold text-text">
                    Specializations
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {teacher.specializations.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm leading-relaxed text-muted"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Courses Taught */}
            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.45 }}
            >
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold text-text">
                    Courses Taught
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {teacher.courses.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm leading-relaxed text-muted"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                        {item}
                      </li>
                    ))}
                  </ul>
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
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16"
        >
          <ButtonLink href="/teachers" variant="outline" size="md">
            ← Back to All Teachers
          </ButtonLink>
        </motion.div>
      </Container>
    </div>
  );
}
