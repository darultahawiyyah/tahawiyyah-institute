export interface CourseData {
  slug: string;
  code: string;
  name: string;
  fullName: string;
  instructor: string | null;
  instructorSlug: string | null;
  location: string;
  schedule: string;
  description: string;
  texts: string[];
}

export const semester1Courses: CourseData[] = [
  {
    slug: "fqh-101",
    code: "FQH 101",
    name: "Fiqh",
    fullName: "Introduction to Islamic Jurisprudence (Fiqh)",
    instructor: "Mawlānā Abdurraḥmān Khān",
    instructorSlug: "mawlana-abdurrahman-khan",
    location: "Online",
    schedule: "Monday 8:00–8:50 AM",
    description:
      "This course provides a thorough grounding in Islamic jurisprudence according to the Ḥanafī school. Students will begin with the fundamentals of purification, prayer, and fasting before progressing to more advanced topics such as Zakāt, Ḥajj, transactions, and family law. Alongside practical rulings, students will study the principles of jurisprudence (Uṣūl al-Fiqh) to understand how scholars derive rulings from the primary sources, developing the analytical skills needed to engage with the tradition critically and faithfully.",
    texts: ["TBA"],
  },
  {
    slug: "aqd-101",
    code: "AQD 101",
    name: "ʿAqīda",
    fullName: "Foundations of Islamic Theology (ʿAqīda)",
    instructor: "Mawlānā Rohan",
    instructorSlug: "mawlana-rohan",
    location: "In Person — Madani Masjid",
    schedule: "Friday 8:55–9:45 AM",
    description:
      "This course covers the foundations of Islamic creed and theology, guiding students through the classical texts that define orthodox Sunnī belief. Beginning with the attributes of Allāh and the pillars of faith, the course advances into topics such as prophethood, eschatology, and contemporary issues in creed. Students will learn not just what to believe, but why — engaging with the intellectual tradition to develop a deeply rooted conviction that is both spiritually grounded and intellectually sound.",
    texts: ["TBA"],
  },
  {
    slug: "taj-101",
    code: "TAJ 101",
    name: "Tajwīd",
    fullName: "Principles of Qurʾānic Recitation (Tajwīd)",
    instructor: "Mawlānā Rohan",
    instructorSlug: "mawlana-rohan",
    location: "Online",
    schedule: "Tuesday 8:55–9:45 AM",
    description:
      "This course covers the rules and practical application of proper Qurʾānic recitation. Students will learn the articulation points of each letter (Makhārij al-Ḥurūf), the characteristics of letters, and the rules governing elongation, nasalization, stopping, and more. The course progresses from foundational rules to mastery-level recitation, with the goal of preparing students for accurate and beautiful recitation of the Qurʾān. Regular guided recitation sessions provide hands-on practice and personalized feedback.",
    texts: ["TBA"],
  },
  {
    slug: "arb-101",
    code: "ARB 101",
    name: "Naḥw",
    fullName: "Classical Arabic Grammar (Naḥw)",
    instructor: "Mawlānā Abdurraḥmān Khān",
    instructorSlug: "mawlana-abdurrahman-khan",
    location: "Online",
    schedule: "Monday 8:55–9:45 AM",
    description:
      "This course builds a strong foundation in classical Arabic grammar (Naḥw), the essential tool for accessing Islamic texts in their original language. Students will start with the basics of sentence structure before advancing into grammatical analysis (Iʿrāb), complex sentence constructions, and rhetorical devices. By the end of the course, students will have the grammatical foundation to begin reading classical Islamic texts with confidence and independence.",
    texts: ["TBA"],
  },
  {
    slug: "sar-101",
    code: "SAR 101",
    name: "Ṣarf",
    fullName: "Foundations of Arabic Morphology (Ṣarf)",
    instructor: "Mawlānā Arqam Masroor",
    instructorSlug: "mawlana-arqam",
    location: "In Person — Madani Masjid",
    schedule: "Friday 8:00–8:50 AM",
    description:
      "This course introduces students to the science of Arabic morphology (Ṣarf), which governs the internal structure and transformation of Arabic words. Students will learn the patterns of verb conjugation, noun derivation, and word formation that are essential for reading and understanding classical Arabic texts. A firm grounding in Ṣarf complements the study of Naḥw and unlocks the ability to analyze unfamiliar words encountered in the Qurʾān, Ḥadīth, and classical Islamic literature.",
    texts: ["TBA"],
  },
  {
    slug: "taf-101",
    code: "TAF 101",
    name: "Qurʾān",
    fullName: "Introduction to Qurʾānic Exegesis (Tafsīr)",
    instructor: "Mawlānā Arqam Masroor",
    instructorSlug: "mawlana-arqam",
    location: "Online",
    schedule: "Tuesday 8:00–8:50 AM",
    description:
      "This course takes students on a guided journey through the exegesis of the Qurʾān, drawing on classical commentaries to illuminate the meaning and context of the divine text. Students will study selected sūras and learn the methodology of Tafsīr, including the reasons of revelation (Asbāb al-Nuzūl), the sciences of the Qurʾān (ʿUlūm al-Qurʾān), and thematic analysis. The goal is to help students develop a personal, reflective relationship with the Qurʾān that goes beyond surface-level reading.",
    texts: ["TBA"],
  },
];
