"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Card, CardContent } from "@/components/ui/Card";
import { Divider } from "@/components/ui/Divider";
import { Badge } from "@/components/ui/Badge";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const semester1Subjects = [
  {
    code: "FQH 101",
    name: "Fiqh",
    fullName: "Fiqh & Uṣūl al-Fiqh",
    instructor: "Mawlānā Arqam",
    instructorSlug: "mawlana-arqam",
    description:
      "This course provides a thorough grounding in Islamic jurisprudence according to the Ḥanafī school. Students will begin with the fundamentals of purification, prayer, and fasting before progressing to more advanced topics such as Zakāt, Ḥajj, transactions, and family law. Alongside practical rulings, students will study the principles of jurisprudence (Uṣūl al-Fiqh) to understand how scholars derive rulings from the primary sources, developing the analytical skills needed to engage with the tradition critically and faithfully.",
    texts: [
      "al-Fiqh al-Muyassar",
      "Mukhtaṣar al-Qudūrī",
      "Uṣūl al-Shāshī",
      "Bidāyat al-Mujtahid",
    ],
  },
  {
    code: "AQD 101",
    name: "ʿAqīda",
    fullName: "ʿAqīda & Islamic Theology",
    instructor: "Mawlānā Rohan",
    instructorSlug: "mawlana-rohan",
    description:
      "This course covers the foundations of Islamic creed and theology, guiding students through the classical texts that define orthodox Sunnī belief. Beginning with the attributes of Allāh and the pillars of faith, the course advances into topics such as prophethood, eschatology, and contemporary issues in creed. Students will learn not just what to believe, but why — engaging with the intellectual tradition to develop a deeply rooted conviction that is both spiritually grounded and intellectually sound.",
    texts: [
      "al-ʿAqīda al-Wāsiṭiyya",
      "Sharḥ al-ʿAqīda al-Ṭaḥāwiyya",
      "al-Fiqh al-Akbar",
    ],
  },
  {
    code: "HAD 101",
    name: "Ḥadīth",
    fullName: "Ḥadīth Sciences",
    instructor: "Mawlānā Fahim",
    instructorSlug: "mawlana-fahim",
    description:
      "This course introduces students to the Prophetic traditions and the sciences surrounding their preservation and authentication. Students will study selected ḥadīth from the major collections, learning both the content of the narrations and the methodology used to verify them. Topics include ḥadīth terminology (Muṣṭalaḥ al-Ḥadīth), chains of transmission, narrator criticism, and the classification of ḥadīth. By the end of the program, students will be equipped to evaluate narrations and engage meaningfully with the Sunna.",
    texts: [
      "Riyāḍ al-Ṣāliḥīn (selections)",
      "Nukhbat al-Fikar",
      "al-Bayqūniyya",
      "Bulūgh al-Marām",
      "al-Arbaʿīn al-Nawawiyya",
    ],
  },
  {
    code: "TAF 101",
    name: "Tafsīr",
    fullName: "Tafsīr & Qurʾānic Studies",
    instructor: null,
    instructorSlug: null,
    description:
      "This course takes students on a guided journey through the exegesis of the Qurʾān, drawing on classical commentaries to illuminate the meaning and context of the divine text. Students will study selected sūras and learn the methodology of Tafsīr, including the reasons of revelation (Asbāb al-Nuzūl), the sciences of the Qurʾān (ʿUlūm al-Qurʾān), and thematic analysis. The goal is to help students develop a personal, reflective relationship with the Qurʾān that goes beyond surface-level reading.",
    texts: [
      "Tafsīr al-Saʿdī (selected ajzāʾ)",
      "Tafsīr al-Jalālayn (selected sūras)",
      "ʿUlūm al-Qurʾān",
    ],
  },
  {
    code: "TAJ 101",
    name: "Tajwīd",
    fullName: "Tajwīd & Qurʾānic Recitation",
    instructor: null,
    instructorSlug: null,
    description:
      "This course covers the rules and practical application of proper Qurʾānic recitation. Students will learn the articulation points of each letter (Makhārij al-Ḥurūf), the characteristics of letters, and the rules governing elongation, nasalization, stopping, and more. The course progresses from foundational rules to mastery-level recitation, with the goal of preparing students for accurate and beautiful recitation of the Qurʾān. Regular guided recitation sessions provide hands-on practice and personalized feedback.",
    texts: ["al-Jazariyya", "al-Muqaddima"],
  },
  {
    code: "ARB 101",
    name: "Arabic",
    fullName: "Arabic Language & Grammar",
    instructor: null,
    instructorSlug: null,
    description:
      "This course builds a strong foundation in classical Arabic grammar (Naḥw) and morphology (Ṣarf), the essential tools for accessing Islamic texts in their original language. Students will start with the basics of sentence structure and word forms before advancing into grammatical analysis (Iʿrāb), complex sentence constructions, and rhetorical devices (Balāgha). By the end of the program, students should be able to pick up a classical Islamic text and begin reading it with confidence and independence.",
    texts: [
      "al-Ājurrūmiyya",
      "al-Bināʾ wa-al-Asās",
      "Qaṭr al-Nadā",
      "Alfiyyat Ibn Mālik (selections)",
    ],
  },
];

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
      <section className="border-b border-border bg-bg py-16 md:py-24">
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
            <div className="space-y-6">
              {semester1Subjects.map((subject) => (
                <Card key={subject.name}>
                  <div className="h-1 rounded-t-2xl bg-gradient-to-r from-gold to-gold2" />
                  <CardContent className="pt-5 space-y-4">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-3">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gold">
                          {subject.code}
                        </span>
                        <h3 className="text-xl font-semibold text-text">
                          {subject.fullName}
                        </h3>
                      </div>
                      {subject.instructor && subject.instructorSlug && (
                        <Link
                          href={`/teachers/${subject.instructorSlug}`}
                          className="text-sm font-medium text-gold transition-colors hover:text-gold2"
                        >
                          {subject.instructor}
                        </Link>
                      )}
                    </div>
                    <p className="max-w-prose text-base leading-relaxed text-muted">
                      {subject.description}
                    </p>
                    <Divider />
                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">
                        Primary Texts
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {subject.texts.map((text) => (
                          <span
                            key={text}
                            className="rounded-lg bg-surface2 px-3 py-1 text-sm text-text"
                          >
                            {text}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
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
