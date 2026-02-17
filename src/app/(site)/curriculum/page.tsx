"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Accordion, AccordionItem } from "@/components/ui/Accordion";
import { cn } from "@/lib/cn";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const curriculumData = {
  year1: {
    semester1: [
      {
        subject: "Fiqh",
        detail: "Introduction to Islamic Jurisprudence",
        books: "Al-Fiqh al-Muyassar",
      },
      {
        subject: "Aqidah",
        detail: "Foundations of Islamic Creed",
        books: "Al-Aqidah al-Wasitiyyah",
      },
      {
        subject: "Hadith",
        detail: "Introduction to Prophetic Traditions",
        books: "Riyadh al-Saliheen (selections)",
      },
      {
        subject: "Tajwid",
        detail: "Qur'anic Recitation Rules",
        books: "Al-Jazariyyah",
      },
      {
        subject: "Arabic",
        detail: "Classical Arabic Grammar",
        books: "Al-Ajrumiyyah",
      },
    ],
    semester2: [
      {
        subject: "Fiqh",
        detail: "Purification and Prayer",
        books: "Al-Fiqh al-Muyassar",
      },
      {
        subject: "Aqidah",
        detail: "Divine Attributes and Names",
        books: "Sharh al-Aqidah al-Tahawiyyah",
      },
      {
        subject: "Tafsir",
        detail: "Introduction to Qur'anic Exegesis",
        books: "Tafsir al-Sa'di (Juz 1-2)",
      },
      {
        subject: "Hadith",
        detail: "Hadith Methodology",
        books: "Nukhbat al-Fikar",
      },
      {
        subject: "Tajwid",
        detail: "Advanced Recitation Rules",
        books: "Al-Jazariyyah",
      },
      {
        subject: "Arabic",
        detail: "Arabic Morphology",
        books: "Al-Bina' wa al-Asas",
      },
    ],
  },
  year2: {
    semester1: [
      {
        subject: "Fiqh",
        detail: "Zakat, Fasting, and Hajj",
        books: "Al-Fiqh al-Muyassar, Bidayat al-Mujtahid",
      },
      {
        subject: "Aqidah",
        detail: "Eschatology and Prophethood",
        books: "Sharh al-Aqidah al-Tahawiyyah",
      },
      {
        subject: "Tafsir",
        detail: "Selected Chapters",
        books: "Tafsir al-Sa'di (Juz 3-5)",
      },
      {
        subject: "Hadith",
        detail: "Advanced Hadith Studies",
        books: "Bulugh al-Maram",
      },
      {
        subject: "Tajwid",
        detail: "Mastery of Recitation",
        books: "Al-Jazariyyah, Al-Muqaddimah",
      },
      {
        subject: "Arabic",
        detail: "Advanced Grammar and Literature",
        books: "Alfiyyah Ibn Malik (selections)",
      },
    ],
    semester2: [
      {
        subject: "Fiqh",
        detail: "Transactions and Family Law",
        books: "Bidayat al-Mujtahid, Al-Mughni",
      },
      {
        subject: "Aqidah",
        detail: "Contemporary Issues in Creed",
        books: "Sharh al-Aqidah al-Tahawiyyah",
      },
      {
        subject: "Tafsir",
        detail: "Advanced Exegesis",
        books: "Tafsir al-Sa'di (Juz 6-8)",
      },
      {
        subject: "Hadith",
        detail: "Hadith Criticism and Analysis",
        books: "Bulugh al-Maram, Al-Arba'in al-Nawawiyyah",
      },
      {
        subject: "Tajwid",
        detail: "Ijazah Preparation",
        books: "Al-Jazariyyah, Al-Muqaddimah",
      },
      {
        subject: "Arabic",
        detail: "Classical Texts and Rhetoric",
        books: "Alfiyyah Ibn Malik, Al-Balaghah",
      },
    ],
  },
};

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

      {/* CURRICULUM GRID */}
      <section className="border-b border-border bg-surface2 py-16 md:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            {/* YEAR 1 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariants}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Year 1</CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion>
                    <AccordionItem title="Semester 1">
                      <div className="space-y-4">
                        {curriculumData.year1.semester1.map((item, index) => (
                          <div
                            key={index}
                            className="flex flex-col gap-2 border-b border-border/50 pb-4 last:border-0 last:pb-0 sm:flex-row sm:items-start sm:justify-between"
                          >
                            <div className="flex-1">
                              <h4 className="text-base font-semibold text-text">
                                {item.subject}
                              </h4>
                              <p className="mt-1 text-sm text-muted">
                                {item.detail}
                              </p>
                            </div>
                            {item.books && (
                              <div className="mt-1 sm:mt-0 sm:ml-4 sm:text-right">
                                <p className="text-xs text-muted/80">
                                  {item.books}
                                </p>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </AccordionItem>
                    <AccordionItem title="Semester 2">
                      <div className="space-y-4">
                        {curriculumData.year1.semester2.map((item, index) => (
                          <div
                            key={index}
                            className="flex flex-col gap-2 border-b border-border/50 pb-4 last:border-0 last:pb-0 sm:flex-row sm:items-start sm:justify-between"
                          >
                            <div className="flex-1">
                              <h4 className="text-base font-semibold text-text">
                                {item.subject}
                              </h4>
                              <p className="mt-1 text-sm text-muted">
                                {item.detail}
                              </p>
                            </div>
                            {item.books && (
                              <div className="mt-1 sm:mt-0 sm:ml-4 sm:text-right">
                                <p className="text-xs text-muted/80">
                                  {item.books}
                                </p>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </motion.div>

            {/* YEAR 2 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariants}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Year 2</CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion>
                    <AccordionItem title="Semester 3">
                      <div className="space-y-4">
                        {curriculumData.year2.semester1.map((item, index) => (
                          <div
                            key={index}
                            className="flex flex-col gap-2 border-b border-border/50 pb-4 last:border-0 last:pb-0 sm:flex-row sm:items-start sm:justify-between"
                          >
                            <div className="flex-1">
                              <h4 className="text-base font-semibold text-text">
                                {item.subject}
                              </h4>
                              <p className="mt-1 text-sm text-muted">
                                {item.detail}
                              </p>
                            </div>
                            {item.books && (
                              <div className="mt-1 sm:mt-0 sm:ml-4 sm:text-right">
                                <p className="text-xs text-muted/80">
                                  {item.books}
                                </p>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </AccordionItem>
                    <AccordionItem title="Semester 4">
                      <div className="space-y-4">
                        {curriculumData.year2.semester2.map((item, index) => (
                          <div
                            key={index}
                            className="flex flex-col gap-2 border-b border-border/50 pb-4 last:border-0 last:pb-0 sm:flex-row sm:items-start sm:justify-between"
                          >
                            <div className="flex-1">
                              <h4 className="text-base font-semibold text-text">
                                {item.subject}
                              </h4>
                              <p className="mt-1 text-sm text-muted">
                                {item.detail}
                              </p>
                            </div>
                            {item.books && (
                              <div className="mt-1 sm:mt-0 sm:ml-4 sm:text-right">
                                <p className="text-xs text-muted/80">
                                  {item.books}
                                </p>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </motion.div>
          </div>
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
