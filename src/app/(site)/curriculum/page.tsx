"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Card, CardContent } from "@/components/ui/Card";
import { Accordion, AccordionItem } from "@/components/ui/Accordion";
import { Divider } from "@/components/ui/Divider";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/cn";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const semester1Subjects = [
  {
    name: "Fiqh",
    fullName: "Fiqh & Usul al-Fiqh",
    instructor: "Mawlana Arqam",
    instructorSlug: "mawlana-arqam",
    description:
      "This course provides a thorough grounding in Islamic jurisprudence according to the Hanafi school. Students will begin with the fundamentals of purification, prayer, and fasting before progressing to more advanced topics such as Zakat, Hajj, transactions, and family law. Alongside practical rulings, students will study the principles of jurisprudence (Usul al-Fiqh) to understand how scholars derive rulings from the primary sources, developing the analytical skills needed to engage with the tradition critically and faithfully.",
    texts: [
      "Al-Fiqh al-Muyassar",
      "Mukhtasar al-Quduri",
      "Usul al-Shashi",
      "Bidayat al-Mujtahid",
    ],
  },
  {
    name: "Aqidah",
    fullName: "Aqidah & Islamic Theology",
    instructor: "Mawlana Rohan",
    instructorSlug: "mawlana-rohan",
    description:
      "This course covers the foundations of Islamic creed and theology, guiding students through the classical texts that define orthodox Sunni belief. Beginning with the attributes of Allah and the pillars of faith, the course advances into topics such as prophethood, eschatology, and contemporary issues in creed. Students will learn not just what to believe, but why — engaging with the intellectual tradition to develop a deeply rooted conviction that is both spiritually grounded and intellectually sound.",
    texts: [
      "Al-Aqidah al-Wasitiyyah",
      "Sharh al-Aqidah al-Tahawiyyah",
      "Al-Fiqh al-Akbar",
    ],
  },
  {
    name: "Hadith",
    fullName: "Hadith Sciences",
    instructor: "Mawlana Fahim",
    instructorSlug: "mawlana-fahim",
    description:
      "This course introduces students to the Prophetic traditions and the sciences surrounding their preservation and authentication. Students will study selected hadith from the major collections, learning both the content of the narrations and the methodology used to verify them. Topics include hadith terminology (Mustalah al-Hadith), chains of transmission, narrator criticism, and the classification of hadith. By the end of the program, students will be equipped to evaluate narrations and engage meaningfully with the Sunnah.",
    texts: [
      "Riyadh al-Saliheen (selections)",
      "Nukhbat al-Fikar",
      "Al-Bayquniyyah",
      "Bulugh al-Maram",
      "Al-Arba'in al-Nawawiyyah",
    ],
  },
  {
    name: "Tafsir",
    fullName: "Tafsir & Qur'anic Studies",
    instructor: null,
    instructorSlug: null,
    description:
      "This course takes students on a guided journey through the exegesis of the Qur'an, drawing on classical commentaries to illuminate the meaning and context of the divine text. Students will study selected surahs and learn the methodology of Tafsir, including the reasons of revelation (Asbab al-Nuzul), the sciences of the Qur'an (Uloom al-Qur'an), and thematic analysis. The goal is to help students develop a personal, reflective relationship with the Qur'an that goes beyond surface-level reading.",
    texts: [
      "Tafsir al-Sa'di (selected Juz)",
      "Tafsir al-Jalalayn (selected surahs)",
      "Uloom al-Qur'an",
    ],
  },
  {
    name: "Tajwid",
    fullName: "Tajwid & Qur'anic Recitation",
    instructor: null,
    instructorSlug: null,
    description:
      "This course covers the rules and practical application of proper Qur'anic recitation. Students will learn the articulation points of each letter (Makhaarij al-Huruf), the characteristics of letters, and the rules governing elongation, nasalization, stopping, and more. The course progresses from foundational rules to mastery-level recitation, with the goal of preparing students for accurate and beautiful recitation of the Qur'an. Regular guided recitation sessions provide hands-on practice and personalized feedback.",
    texts: ["Al-Jazariyyah", "Al-Muqaddimah"],
  },
  {
    name: "Arabic",
    fullName: "Arabic Language & Grammar",
    instructor: null,
    instructorSlug: null,
    description:
      "This course builds a strong foundation in classical Arabic grammar (Nahw) and morphology (Sarf), the essential tools for accessing Islamic texts in their original language. Students will start with the basics of sentence structure and word forms before advancing into grammatical analysis (I'rab), complex sentence constructions, and rhetorical devices (Balaghah). By the end of the program, students should be able to pick up a classical Islamic text and begin reading it with confidence and independence.",
    texts: [
      "Al-Ajrumiyyah",
      "Al-Bina' wa al-Asas",
      "Qatr al-Nada",
      "Alfiyyah Ibn Malik (selections)",
    ],
  },
];

const tbdSemesters = [
  { number: 2, label: "Semester 2" },
  { number: 3, label: "Semester 3" },
  { number: 4, label: "Semester 4" },
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
              A comprehensive 2-year program structured across four semesters,
              covering essential Islamic sciences with progressive depth and
              increasing complexity.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* SEMESTERS */}
      <section className="border-b border-border bg-bg py-16 md:py-24">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariants}
            transition={{ duration: 0.5 }}
          >
            <Accordion>
              {/* SEMESTER 1 */}
              <AccordionItem
                title="Semester 1 (6 subjects)"
                defaultOpen
        >
                <div className="space-y-6 pt-2">
                  {semester1Subjects.map((subject) => (
                    <Card key={subject.name}>
                      <div className="h-1 rounded-t-2xl bg-gradient-to-r from-gold to-gold2" />
                      <CardContent className="pt-5 space-y-4">
                        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                          <h3 className="text-xl font-semibold text-text">
                            {subject.fullName}
                          </h3>
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
              </AccordionItem>

              {/* SEMESTERS 2, 3, 4 — TBD */}
              {tbdSemesters.map((semester) => (
                <AccordionItem
                  key={semester.number}
                  title={
                    <span className="flex items-center gap-3">
                      {semester.label}
                      <Badge>TBD</Badge>
                    </span>
                  }
                >
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <p className="text-lg font-medium text-muted">
                      Subjects &amp; descriptions — TBD
                    </p>
                    <p className="mt-2 max-w-md text-sm text-muted/70">
                      Details for this semester will be announced soon. Check
                      back for updates on courses, instructors, and required
                      texts.
                    </p>
                  </div>
                </AccordionItem>
              ))}
            </Accordion>
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
