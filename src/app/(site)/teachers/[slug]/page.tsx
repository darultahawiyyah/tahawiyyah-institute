"use client";

import * as React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Divider } from "@/components/ui/Divider";

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
    name: "Mawlānā Arqam Masroor",
    title: "Instructor — Ṣarf & Qurʾān",
    summary:
      "Mawlānā Arqam Masroor is an Islamic studies scholar and educator based in New York, specializing in classical Arabic sciences and Qurʾānic studies, and currently pursuing a postgraduate specialization in Islamic law.",
    education: [
      "Memorization of the Qurʾān at Darul Qurʾān wa Sunnah (USA)",
      "ʿĀlimiyyah program at Jamia Binoria Al-ʿĀlamiyyah, Pakistan",
      "Currently pursuing Takhaṣṣuṣ fī al-Iftāʾ (postgraduate specialization in Islamic law)",
    ],
    biography:
      "Mawlānā Arqam Masroor is an Islamic studies scholar and educator based in New York. He began his studies at Darul Qurʾān wa Sunnah in the United States, where he memorized the Qurʾān and commenced formal Islamic studies. He later continued his education in Pakistan at Jamia Binoria Al-ʿĀlamiyyah, completing the ʿĀlimiyyah program, and is currently pursuing Takhaṣṣuṣ fī al-Iftāʾ, a postgraduate specialization in Islamic law. He serves as a local Imām at Elmhurst Islamic Center and an instructor at Darul Qurʾān wa Sunnah. In addition to his teaching and community work, he is a founder of Ṭaḥāwiyya Institute and is involved in various religious services and initiatives.",
    courses: ["SAR 101 — Ṣarf", "TAF 101 — Qurʾān & Tafsīr"],
  },
  {
    slug: "mawlana-abdurrahman-khan",
    name: "Mawlānā Abdurraḥmān Khān",
    title: "Administration & Logistics",
    summary:
      "Mawlānā Abdurraḥmān Khān is a scholar from Queens, New York, who completed his ʿĀlimiyyah studies at Darul Uloom New York and graduated with a Master's in Islamic Sciences from Jamia Binoria. He oversees the administration, logistics, and communications of Ṭaḥāwiyyah Institute.",
    education: [
      "Ḥifẓ al-Qurʾān at Darul Uloom New York (completed 2014)",
      "ʿĀlimiyyah program at Jamia Qurania Academy; completed at Darul Uloom New York",
      "Master's in Islamic Sciences, Jamia Binoria (graduated August 2025)",
      "B.A. in Computer Science, CUNY Queens College — Cum Laude (January 2026)",
      "Currently pursuing Takhaṣṣuṣ fī al-Fiqh wa-al-Iftāʾ under Muftī Mīzānur Raḥmān and Muftī Manzūr at Darul Uloom New York",
    ],
    biography:
      "Mawlānā Abdurraḥmān Khān was born and raised in Flushing, Queens, New York. He memorized the Qurʾān at Darul Uloom New York, completing his Ḥifẓ in 2014. He then pursued the ʿĀlimiyyah ʿĀlimiyyah Program program, beginning at Jamia Qurania Academy and completing his studies at Darul Uloom New York, graduating in August 2025 with a Master's in Islamic Sciences from Jamia Binoria. Alongside his ʿĀlimiyyah Program training, he earned a Bachelor of Arts in Computer Science from CUNY Queens College, graduating Cum Laude in January 2026. He is currently pursuing a postgraduate specialization in Islamic jurisprudence and Fatwā issuance (Takhaṣṣuṣ) under senior muftīs Muftī Mīzānur Raḥmān and Muftī Manzūr at Darul Uloom New York. At Ṭaḥāwiyya Institute, he manages the administration, logistics, and communications, coordinating the day-to-day operations of the program.",
    courses: ["Administration, Logistics & Communications — Ṭaḥāwiyya Institute"],
  },
  {
    slug: "mawlana-fahim",
    name: "Mawlānā Fahim",
    title: "Instructor — Fiqh, Ḥadīth & Naḥw",
    summary:
      "Mawlānā Fahim completed the seven-year ʿĀlimiyyah program at Darul Qurʾān wa Sunnah and a postgraduate specialization in Fiqh and Iftāʾ, and currently serves as a chaplain at Queens College.",
    education: [
      "Seven-year ʿĀlimiyyah program at Darul Qurʾān wa Sunnah",
      "Studied under Muftī Rūḥul Amīn and Muftī Noʿmān",
      "Takhaṣṣuṣ fī al-Fiqh wa-al-Iftāʾ (postgraduate specialization in Islamic jurisprudence and fatwā)",
    ],
    biography:
      "Mawlānā Fahim is a dedicated student of Islamic scholarship and a committed servant of the Muslim community. He completed the rigorous seven-year ʿĀlimiyyah program at Darul Qurʾān wa Sunnah, where he studied the traditional Islamic sciences, including Qurʾān, Ḥadīth, Fiqh, and Arabic. During his studies, he had the privilege of learning under respected senior scholars such as Muftī Rūḥul Amīn and Muftī Noʿmān, benefiting from their depth of knowledge and experience. Following his graduation, Mawlānā Fahim pursued an additional year of Takhaṣṣuṣ fī al-Fiqh wa-al-Iftāʾ, specializing in Islamic jurisprudence and the principles of issuing legal verdicts (fatāwā). This advanced training further refined his ability to address contemporary issues through the lens of classical scholarship. Currently, Mawlānā Fahim serves as a chaplain at Queens College, where he is actively engaged in supporting and nurturing the spiritual and intellectual growth of Muslim students. Through mentorship, counseling, and educational initiatives, he strives to guide the next generation with knowledge, wisdom, and a strong connection to their faith.",
    courses: ["FQH 101 — Fiqh", "HAD 101 — Ḥadīth Sciences", "ARB 101 — Naḥw"],
  },
  {
    slug: "mawlana-rohan",
    name: "Mawlānā Rohan",
    title: "Instructor — ʿAqīda & Tajwīd",
    summary:
      "Mawlānā Rohan is a graduate of Darul Uloom Azaadville in South Africa, currently serving as Imām and Resident Scholar at Shelter Rock Islamic Center and co-founder of Ṭaḥāwiyya Institute.",
    education: [
      "ʿĀlimiyyah program at Darul Uloom Azaadville, South Africa",
      "Specialization in the science of Qirāʾāt (modes of Qurʾānic recitation)",
      "Currently advancing specialization in Fiqh and Islamic jurisprudence",
    ],
    biography:
      "Mawlānā Rohan is a graduate of the rigorous ʿĀlimiyyah program from Darul Uloom Azaadville in South Africa — one of the most prominent and prestigious Islamic institutions in the world — where he completed extensive studies in the traditional Islamic sciences. He further specialized in the science of Qirāʾāt, mastering the various modes of Qurʾānic recitation, and is currently advancing his specialization in Fiqh and Islamic jurisprudence. He presently serves as the Imām and Resident Scholar at Shelter Rock Islamic Center, where he teaches advanced Islamic sciences, and also serves as a high school Islamic teacher at Crescent School. Alongside his colleagues, he recently co-founded Ṭaḥāwiyya Institute, an initiative dedicated to providing structured traditional Islamic education for brothers and sisters who are balancing their academic studies and professional careers.",
    courses: ["AQD 101 — ʿAqīda & Islamic Theology", "TAJ 101 — Tajwīd & Qurʾānic Recitation"],
  },
  {
    slug: "qari-nazrul",
    name: "Qāriʾ Nazrul",
    title: "Instructor — Qirāʾāt",
    summary:
      "Qāriʾ Nazrul is a distinguished scholar and teacher of the Qurʾān who completed the ʿĀlimiyyah program, studied Qirāʾāt under Qāriʾ Ismāʿīl Essack (رحمه الله), and currently serves as Religious Director at Shelter Rock Islamic Center.",
    education: [
      "ʿĀlimiyyah program — studied under Muftī Ibrāhīm Salājee, Qāriʾ ʿAbdullāh Motara, and Muftī Aḥmad ʿAlī",
      "Qirāʾāt under Qāriʾ Ismāʿīl Essack (رحمه الله)",
      "Takhaṣṣuṣ fī al-Fiqh wa-al-Iftāʾ under Muftī Tāsir Miah at Darul Ilm Birmingham",
    ],
    biography:
      "Qāriʾ Nazrul is a distinguished scholar and teacher of the Qurʾān, known for his deep commitment to the preservation and transmission of the sacred sciences. He completed the ʿĀlimiyyah program, where he studied the traditional Islamic sciences — including Qurʾān, Ḥadīth, Fiqh, and Arabic — under some of the most senior scholars of our time. Among his teachers were esteemed figures such as Muftī Ibrāhīm Salājee, Qāriʾ ʿAbdullāh Motara, and Muftī Aḥmad ʿAlī. He studied Qirāʾāt under the renowned Qāriʾ Ismāʿīl Essack (رحمه الله), gaining a strong foundation in the precise and authentic modes of Qurʾānic recitation. In addition to his studies, Qāriʾ Nazrul pursued advanced training in Islamic jurisprudence, completing the Takhaṣṣuṣ fī al-Fiqh wa-al-Iftāʾ under Muftī Tāsir Miah at Darul Ilm Birmingham. Upon completing his studies, he returned to the United States to serve his community with dedication and sincerity. He currently serves as the Religious Director at Shelter Rock Islamic Center, where he plays a vital role in guiding and educating the community. For many years, he has been actively teaching the sciences of Qirāʾāt, including Tajwīd, Sabʿah (the seven modes of recitation), and Thalāthah Qirāʾāt.",
    courses: ["Qirāʾāt — Advanced (coming soon)"],
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

        <div className="max-w-2xl">
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
