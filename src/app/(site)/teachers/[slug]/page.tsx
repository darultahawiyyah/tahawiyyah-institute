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
      "Mawlānā Arqam Masroor is an Islamic studies scholar and educator based in New York. He began his studies at Darul Qurʾān wa Sunnah in the United States, where he memorized the Qurʾān and commenced formal Islamic studies. He later continued his education in Pakistan at Jamia Binoria Al-ʿĀlamiyyah, one of the most distinguished institutions of Islamic learning in the world, where he completed the ʿĀlimiyyah program under accomplished scholars of the traditional sciences. He is currently pursuing Takhaṣṣuṣ fī al-Iftāʾ, a rigorous postgraduate specialization in Islamic law, deepening his command of jurisprudence and its application to contemporary questions. He serves as a local Imām at Elmhurst Islamic Center and as an instructor at Darul Qurʾān wa Sunnah, where he continues to transmit the sacred sciences to the next generation. In addition to his teaching and community work, he is a founder of Ṭaḥāwiyyah Institute, an initiative dedicated to providing structured traditional Islamic education for students balancing demanding academic and professional lives.",
    courses: [],
  },
  {
    slug: "mawlana-abdurrahman-khan",
    name: "Mawlānā Abdurrahman Khan",
    title: "Instructor — Fiqh | Administration",
    summary:
      "Mawlānā Abdurrahman Khan is a scholar from Queens, New York, who completed his ʿĀlimiyyah studies at Darul Uloom New York and graduated with a Master's in Islamic Sciences from Jamia Binoria. He teaches Fiqh at Ṭaḥāwiyyah Institute.",
    education: [
      "Ḥifẓ al-Qurʾān at Darul Uloom New York (completed 2014)",
      "ʿĀlimiyyah program at Jamia Qurania Academy; completed at Darul Uloom New York",
      "Master's in Islamic Sciences, Jamia Binoria (graduated August 2025)",
      "B.A. in Computer Science, CUNY Queens College — Cum Laude (January 2026)",
      "Currently pursuing Takhaṣṣuṣ fī al-Fiqh wa-al-Iftāʾ under Muftī Mizanur Rahman and Muftī Manzoor at Darul Uloom New York",
    ],
    biography:
      "Mawlānā Abdurrahman Khan was born and raised in Flushing, Queens, New York. He memorized the Qurʾān at Darul Uloom New York, completing his Ḥifẓ in 2014. He then pursued the ʿĀlimiyyah program, beginning at Jamia Qurania Academy and completing his studies at Darul Uloom New York, graduating in August 2025 with a Master's in Islamic Sciences from Jamia Binoria. Alongside his ʿĀlimiyyah training, he earned a Bachelor of Arts in Computer Science from CUNY Queens College, graduating Cum Laude in January 2026. He is currently pursuing a postgraduate specialization in Islamic jurisprudence and Fatwā issuance (Takhaṣṣuṣ fī al-Fiqh wa-al-Iftāʾ) under senior scholars Muftī Mizanur Rahman and Muftī Manzoor at Darul Uloom New York. At Ṭaḥāwiyyah Institute, Mawlānā Abdurrahman serves as an instructor teaching Ḥanafī Jurisprudence and Legal Methodology, and as the primary administrator, managing the logistics and communications that keep the program running smoothly.",
    courses: [],
  },
  {
    slug: "mawlana-fahim",
    name: "Mawlānā Fahim",
    title: "Instructor & Scholar in Residence",
    summary:
      "Mawlānā Fahim completed the seven-year ʿĀlimiyyah program at Darul Qurʾān wa Sunnah and a postgraduate specialization in Fiqh and Iftāʾ, and currently serves as a chaplain at Queens College.",
    education: [
      "Seven-year ʿĀlimiyyah program at Darul Qurʾān wa Sunnah",
      "Studied under Muftī Ruhul Amin and Muftī Nouman",
      "Takhaṣṣuṣ fī al-Fiqh wa-al-Iftāʾ (postgraduate specialization in Islamic jurisprudence and fatwā)",
    ],
    biography:
      "Mawlānā Fahim is a dedicated student of Islamic scholarship and a committed servant of the Muslim community. He completed the rigorous seven-year ʿĀlimiyyah program at Darul Qurʾān wa Sunnah, where he studied the traditional Islamic sciences — including Qurʾān, Ḥadīth, Fiqh, and Arabic — under the guidance of esteemed scholars. During his studies, he had the privilege of learning under respected senior scholars such as Muftī Ruhul Amin and Muftī Nouman, benefiting greatly from their depth of knowledge and years of experience in the tradition. Following his graduation, Mawlānā Fahim pursued an additional year of Takhaṣṣuṣ fī al-Fiqh wa-al-Iftāʾ, specializing in Islamic jurisprudence and the principles of issuing legal verdicts (fatāwā). This advanced training refined his ability to engage contemporary questions through the lens of classical scholarship. Currently, Mawlānā Fahim serves as a chaplain at Queens College, where he is actively engaged in supporting and nurturing the spiritual and intellectual growth of Muslim students. Through mentorship, counseling, and educational initiatives, he strives to guide the next generation with knowledge, wisdom, and a strong connection to their faith.",
    courses: [],
  },
  {
    slug: "mawlana-rohan",
    name: "Mawlānā Rohan",
    title: "Instructor — ʿAqīdah & Tajwīd",
    summary:
      "Mawlānā Rohan is a graduate of Jami'ah Nu'maniyyah in South Africa, where he studied under the renowned Mawlānā Fadlur Rahman Azmi, and also studied the sciences of Qirāʾāt under Qāriʾ Abdullah Motara. He currently serves as Imām and Resident Scholar at Shelter Rock Islamic Center and is a co-founder of Ṭaḥāwiyyah Institute.",
    education: [
      "ʿĀlimiyyah program at Jami'ah Nu'maniyyah, South Africa — under the tutelage of Mawlānā Fadlur Rahman Azmi",
      "Sciences of Qirāʾāt under Qāriʾ Abdullah Motara",
      "Currently advancing specialization in Fiqh and Islamic jurisprudence",
    ],
    biography:
      "Mawlānā Rohan is a graduate of the ʿĀlimiyyah program from Jami'ah Nu'maniyyah in South Africa, a distinguished institution of traditional Islamic learning, where he had the privilege of studying under the renowned Mawlānā Fadlur Rahman Azmi — a senior scholar and expert in the Ḥadīth sciences who has benefited students across the world. Under his tutelage, Mawlānā Rohan received a thorough grounding in the classical Islamic disciplines, including Qurʾān, Ḥadīth, Fiqh, ʿAqīdah, and Arabic. He further studied the sciences of Qirāʾāt — the various authenticated modes of Qurʾānic recitation — under Qāriʾ Abdullah Motara, a master of the recitational arts, deepening his connection to the living oral tradition of the Qurʾān. He is currently advancing his specialization in Fiqh and Islamic jurisprudence, continuing his lifelong commitment to scholarship and growth. He presently serves as the Imām and Resident Scholar at Shelter Rock Islamic Center, where he teaches advanced Islamic sciences and provides spiritual guidance to the community. He also serves as a high school Islamic teacher at Crescent School. Alongside his colleagues, he co-founded Ṭaḥāwiyyah Institute, an initiative dedicated to providing structured traditional Islamic education for brothers and sisters who are balancing their academic studies and professional careers.",
    courses: [],
  },
  {
    slug: "qari-nazrul",
    name: "Qāriʾ Nazrul",
    title: "Instructor — Qirāʾāt",
    summary:
      "Qāriʾ Nazrul is a distinguished scholar and teacher of the Qurʾān who completed the ʿĀlimiyyah program, studied Qirāʾāt under Qāriʾ Ismail Essack (رحمه الله), and currently serves as Religious Director at Shelter Rock Islamic Center.",
    education: [
      "ʿĀlimiyyah program — studied under Muftī Ibrahim Salajee, Qāriʾ Abdullah Motara, and Muftī Ahmad Ali",
      "Qirāʾāt under Qāriʾ Ismail Essack (رحمه الله)",
      "Takhaṣṣuṣ fī al-Fiqh wa-al-Iftāʾ under Muftī Tasir Miah at Darul Ilm Birmingham",
    ],
    biography:
      "Qāriʾ Nazrul is a distinguished scholar and teacher of the Qurʾān, known for his deep commitment to the preservation and transmission of the sacred sciences. He completed the ʿĀlimiyyah program, where he studied the traditional Islamic sciences — including Qurʾān, Ḥadīth, Fiqh, and Arabic — under some of the most senior scholars of our time. Among his teachers were esteemed figures such as Muftī Ibrahim Salajee, Qāriʾ Abdullah Motara, and Muftī Ahmad Ali. He studied Qirāʾāt under the renowned Qāriʾ Ismail Essack (رحمه الله), gaining a strong foundation in the precise and authentic modes of Qurʾānic recitation. In addition to his studies, Qāriʾ Nazrul pursued advanced training in Islamic jurisprudence, completing the Takhaṣṣuṣ fī al-Fiqh wa-al-Iftāʾ under Muftī Tasir Miah at Darul Ilm Birmingham. Upon completing his studies, he returned to the United States to serve his community with dedication and sincerity. He currently serves as the Religious Director at Shelter Rock Islamic Center, where he plays a vital role in guiding and educating the community. For many years, he has been actively teaching the sciences of Qirāʾāt, including Tajwīd, Sabʿah (the seven modes of recitation), and Thalāthah Qirāʾāt.",
    courses: [],
  },
  {
    slug: "mawlana-ibraheem",
    name: "Mawlānā Ibraheem",
    title: "Instructor — Naḥw",
    summary:
      "Mawlānā Ibraheem completed his Ḥifẓ at Darul Uloom New York and his ʿĀlimiyyah at Darul Quran wa Sunnah, studying under distinguished scholars including Mufti Ruhul Amin, Mufti Nouman, and Mawlana Hammad. He holds a degree in Cybersecurity from John Jay College and currently serves as a certified chaplain and Imam at Flushing Muslim Center.",
    education: [
      "Ḥifẓ al-Qurʾān at Darul Uloom New York",
      "ʿĀlimiyyah program at Darul Quran wa Sunnah — studied under Mufti Ruhul Amin, Mufti Nouman, and Mawlana Hammad",
      "B.S. in Cybersecurity, John Jay College of Criminal Justice",
      "Certified Chaplain",
    ],
    biography:
      "Mawlānā Ibraheem completed his Ḥifẓ of the Qurʾān at Darul Uloom New York, laying a strong foundation in the sacred sciences from an early stage. Driven by a deep commitment to Islamic scholarship and a desire to serve the dīn, he continued his studies at Darul Quran wa Sunnah, where he enrolled in and successfully completed the rigorous ʿĀlimiyyah program. Throughout his years of study, he had the privilege of benefiting from the guidance and mentorship of distinguished scholars in New York, including Mufti Ruhul Amin, Mufti Nouman, and Mawlana Hammad, among others. His studies encompassed a wide range of traditional Islamic disciplines, including Fiqh, Tafsīr, Ḥadīth, Arabic language, and Uṣūl al-Fiqh, equipping him with a well-rounded and grounded understanding of the tradition. Following the completion of his religious education, Mawlānā Ibraheem broadened his academic and professional horizons by enrolling at John Jay College of Criminal Justice, where he earned a degree in Cybersecurity. This unique combination of traditional Islamic scholarship and contemporary academic training enables him to effectively navigate and address the challenges facing modern Muslim communities. He is currently a certified chaplain, providing spiritual care, counseling, and pastoral support in diverse settings. In addition, he serves as the Imam at Flushing Muslim Center, where he is actively engaged in community leadership, delivering sermons, teaching, and working closely with congregants to foster spiritual growth, education, and a strong sense of community.",
    courses: [],
  },
  {
    slug: "mufti-umair",
    name: "Muftī Umair",
    title: "Instructor — Ṣarf",
    summary:
      "Muftī Umair completed his Ḥifẓ, ʿĀlimiyyah, and Iftāʾ at Darul Uloom New York, studying under senior scholars including Mawlana Rafiq, Mawlana Abdurraheem, and Mawlana Azizurrahman, and specializing in Iftāʾ under Mufti Manzoor and Mufti Mahdi. He currently serves as a Ḥifẓ teacher at Jamia Quraniah Academy.",
    education: [
      "Ḥifẓ al-Qurʾān at Darul Uloom New York",
      "ʿĀlimiyyah program at Darul Uloom New York — studied under Mawlana Rafiq, Mawlana Abdurraheem, and Mawlana Azizurrahman",
      "Takhaṣṣuṣ fī al-Iftāʾ at Darul Uloom New York — under Mufti Manzoor and Mufti Mahdi",
    ],
    biography:
      "Muftī Umair completed his Ḥifẓ of the Noble Qurʾān, as well as the rigorous ʿĀlimiyyah and specialized Iftāʾ programs, at Darul Uloom New York. His academic journey is marked by dedication, discipline, and a deep commitment to preserving and conveying the sacred sciences. From an early stage, he devoted himself to the memorization of the Qurʾān, followed by years of intensive study in the traditional Islamic sciences. During his ʿĀlimiyyah training, Muftī Umair studied under some of the most senior and respected scholars in New York, including Mawlana Rafiq, Mawlana Abdurraheem, and Mawlana Azizurrahman. Under their guidance, he developed a strong foundation in disciplines such as Fiqh, Tafsīr, Ḥadīth, Arabic language, and Uṣūl al-Fiqh, equipping him with both depth and breadth in the Islamic scholarly tradition. Following the completion of his ʿĀlimiyyah degree, he advanced to specialize in Iftāʾ, where he trained under distinguished jurists such as Mufti Manzoor and Mufti Mahdi. Through this advanced training, he refined his ability to analyze complex legal matters, apply classical jurisprudential principles, and provide well-reasoned guidance on contemporary issues affecting the Muslim community. Currently, Muftī Umair serves as a dedicated Ḥifẓ teacher at Jamia Quraniah Academy, where he plays a pivotal role in shaping the next generation of Ḥuffāẓ. In this capacity, he not only focuses on the precise memorization and retention of the Qurʾān, but also instills in his students the values of sincerity, discipline, and a deep spiritual connection to the Book of Allah. Through his teaching, mentorship, and ongoing service, Muftī Umair continues to contribute meaningfully to the preservation of Qurʾānic tradition and the strengthening of Islamic scholarship in America, striving to cultivate individuals who embody both knowledge and character in their service to the dīn and the wider community.",
    courses: [],
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
    <div className="relative min-h-screen bg-bg py-16 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(212,175,55,0.06)_0%,transparent_60%)] pointer-events-none" />
      <Container className="relative">
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
            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold/20 to-gold2/30 text-3xl font-semibold text-gold border-2 border-gold/20 shadow-md">
              {teacher.name
                .split(" ")
                .filter((n) => n !== "—" && n !== "TBD")
                .map((n) => n[0])
                .slice(0, 2)
                .join("")}
            </div>
            <div>
              <h1 className="font-display text-3xl font-semibold tracking-tight text-text md:text-4xl">
                {teacher.name}
              </h1>
              <p className="mt-2 text-lg text-gold">{teacher.title}</p>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-3">
          {/* Main Bio */}
          <div className="lg:col-span-2 space-y-10">
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

          {/* Sidebar */}
          <div className="space-y-6">
            <motion.section
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-2xl border border-gold/20 bg-surface p-6 shadow-soft ring-1 ring-gold/10"
            >
              <h3 className="text-base font-semibold text-text mb-4">Education</h3>
              <ul className="space-y-3">
                {teacher.education.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    <span className="text-sm leading-relaxed text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.section>

            <motion.section
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.35 }}
              className="rounded-2xl border border-border bg-surface2 p-6"
            >
              <h3 className="text-base font-semibold text-text mb-4">Courses</h3>
              <ul className="space-y-2">
                {teacher.courses.map((course, i) => (
                  <li key={i} className="text-sm text-muted leading-relaxed">
                    {course}
                  </li>
                ))}
              </ul>
            </motion.section>
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
