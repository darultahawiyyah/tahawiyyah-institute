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
  biography: string;
  courses: string[];
}

const teachersData: TeacherData[] = [
  {
    slug: "mawlana-arqam",
    name: "Shaykh Arqam Masroor",
    title: "Instructor — Fiqh",
    summary:
      "Shaykh Arqam Masroor is an Islamic studies scholar and educator based in New York, specializing in Ḥanafī jurisprudence and currently pursuing a postgraduate specialization in Islamic law.",
    education: [
      "Memorization of the Qurʾān at Darul Qurʾān wa Sunnah (USA)",
      "ʿĀlimiyyah program at Jamia Binoria Al-ʿĀlamiyyah, Pakistan",
      "Currently pursuing Takhaṣṣuṣ fī al-Iftāʾ (postgraduate specialization in Islamic law)",
    ],
    biography:
      "Shaykh Arqam Masroor is an Islamic studies scholar and educator based in New York. He began his studies at Darul Qurʾān wa Sunnah in the United States, where he memorized the Qurʾān and commenced formal Islamic studies. He later continued his education in Pakistan at Jamia Binoria Al-ʿĀlamiyyah, completing the ʿĀlimiyyah program, and is currently pursuing Takhaṣṣuṣ fī al-Iftāʾ, a postgraduate specialization in Islamic law. He serves as a local Imām at Elmhurst Islamic Center and an instructor at Darul Qurʾān wa Sunnah. In addition to his teaching and community work, he is a founder of Ṭaḥāwiyya Institute and is involved in various religious services and initiatives.",
    courses: ["FQH 101"],
  },
  {
    slug: "mawlana-fahim",
    name: "Mawlānā Fahim",
    title: "Instructor — Ḥadīth Sciences",
    summary:
      "Mawlānā Fahim brings rigorous training in ḥadīth authentication and the study of Prophetic traditions, helping students connect with the Sunna.",
    education: [
      "Traditional ʿĀlim course with specialization in Ḥadīth",
      "Advanced studies in Muṣṭalaḥ al-Ḥadīth",
      "Ijāzāt in the Six Books of Ḥadīth",
    ],
    biography:
      "Mawlānā Fahim developed an early passion for the Prophetic traditions and dedicated years to studying under scholars of ḥadīth. He specialized in Ḥadīth Sciences during his traditional studies and developed a deep expertise in the methodology of ḥadīth authentication. Beyond his formal education, he participated in private study circles where he received detailed Ijāzāt in the six canonical collections. His approach combines traditional methodology with an awareness of how ḥadīth scholarship connects to contemporary Muslim life. At Ṭaḥāwiyya Institute, Mawlānā Fahim leads the Ḥadīth Sciences track and helps students develop a meaningful relationship with the Sunna.",
    courses: ["HAD 101"],
  },
  {
    slug: "mawlana-rohan",
    name: "Mawlānā Rohan",
    title: "Instructor — ʿAqīda & Islamic Theology",
    summary:
      "Mawlānā Rohan is a graduate of Darul Uloom Azaadville in South Africa, currently serving as Imām and Resident Scholar at Shelter Rock Islamic Center and co-founder of Ṭaḥāwiyya Institute.",
    education: [
      "ʿĀlimiyyah program at Darul Uloom Azaadville, South Africa",
      "Specialization in the science of Qirāʾāt (modes of Qurʾānic recitation)",
      "Currently advancing specialization in Fiqh and Islamic jurisprudence",
    ],
    biography:
      "Mawlānā Rohan is a graduate of the rigorous ʿĀlimiyyah program from Darul Uloom Azaadville in South Africa — one of the most prominent and prestigious Islamic institutions in the world — where he completed extensive studies in the traditional Islamic sciences. He further specialized in the science of Qirāʾāt, mastering the various modes of Qurʾānic recitation, and is currently advancing his specialization in Fiqh and Islamic jurisprudence. He presently serves as the Imām and Resident Scholar at Shelter Rock Islamic Center, where he teaches advanced Islamic sciences, and also serves as a high school Islamic teacher at Crescent School. Alongside his colleagues, he recently co-founded Ṭaḥāwiyya Institute, an initiative dedicated to providing structured traditional Islamic education for brothers and sisters who are balancing their academic studies and professional careers.",
    courses: ["AQD 101"],
  },
  {
    slug: "qari-nazrul",
    name: "Qāriʾ Nazrul",
    title: "Instructor — Tajwīd & Qurʾānic Recitation",
    summary:
      "Qāriʾ Nazrul brings expertise in the rules and application of Tajwīd, guiding students toward accurate and beautiful recitation of the Qurʾān.",
    education: [
      "Formal certification in Qurʾānic recitation and Tajwīd",
      "Ijāza in Ḥafṣ ʿan ʿĀṣim via the recognized chain of transmission",
      "Advanced study of Makhārij al-Ḥurūf and recitation characteristics",
    ],
    biography:
      "Qāriʾ Nazrul has devoted his life to the recitation and transmission of the Qurʾān. Having studied under accomplished scholars of Tajwīd, he received his Ijāza through a verified sanad connecting to the authentic tradition of Qurʾānic recitation. His patient and methodical teaching style makes the rules of Tajwīd accessible to students at all levels. At Ṭaḥāwiyya Institute, Qāriʾ Nazrul teaches Tajwīd & Qurʾānic Recitation, ensuring students develop the correct articulation points and recitation characteristics needed for accurate and beautiful tilāwa.",
    courses: ["TAJ 101"],
  },
  {
    slug: "bint-instructor-1",
    name: "Ustādha Bint — TBD",
    title: "Instructor — Tafsīr & Qurʾānic Studies",
    summary:
      "Biography coming soon.",
    education: [
      "Details coming soon",
    ],
    biography:
      "Full biography coming soon. This instructor will be teaching Tafsīr and Qurʾānic Studies at Ṭaḥāwiyya Institute.",
    courses: ["TAF 101"],
  },
  {
    slug: "bint-instructor-2",
    name: "Ustādha Bint — TBD",
    title: "Instructor — Tajwīd & Qurʾānic Recitation",
    summary:
      "Biography coming soon.",
    education: [
      "Details coming soon",
    ],
    biography:
      "Full biography coming soon. This instructor will be teaching Tajwīd and Qurʾānic Recitation at Ṭaḥāwiyya Institute.",
    courses: ["TAJ 101"],
  },
  {
    slug: "bint-instructor-3",
    name: "Ustādha Bint — TBD",
    title: "Instructor — Arabic Language & Grammar",
    summary:
      "Biography coming soon.",
    education: [
      "Details coming soon",
    ],
    biography:
      "Full biography coming soon. This instructor will be teaching Arabic Language and Grammar at Ṭaḥāwiyya Institute.",
    courses: ["ARB 101"],
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

            {/* Courses Taught */}
            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.4 }}
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
          transition={{ duration: 0.5, delay: 0.45 }}
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
