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
    fullName: "Ḥanafī Jurisprudence and Legal Methodology",
    instructor: "Mawlānā Abdurrahman Khan",
    instructorSlug: "mawlana-abdurrahman-khan",
    location: "Online",
    schedule: "Monday 8:00–8:50 PM",
    description:
      "This course offers a comprehensive introduction to Fiqh through the lens of the Ḥanafī madhhab, one of the most widely followed schools of Islamic jurisprudence. Students will explore the historical origins and development of the Ḥanafī tradition, tracing its roots back to the great Imām, Abū Ḥanīfah (رحمه الله), and examining how the madhhab was preserved, systematized, and transmitted through generations of scholars. The course will cover key figures, foundational texts, and the process of canonization within the madhhab, providing insight into how authoritative positions were established and upheld. Students will also be introduced to the methodology (uṣūl) of the Ḥanafī school — how legal rulings are derived from the Qurʾān, Sunnah, consensus, and reasoned principles. In addition, the course will highlight the importance of adhering to a madhhab in maintaining consistency, scholarly integrity, and a structured approach to practicing Islam. By the end of the course, students will gain a clear understanding of how the Ḥanafī madhhab functions, its intellectual framework, and its enduring relevance in the lives of Muslims today.",
    texts: [
      "المدخل المفصل الي فقه الحنفي",
      "المدخل الي تاريخ التشريع الاسلامي",
      "تاريخ التشريع الاسلامي",
      "التقليد في نظر الشريعة",
      "فقه اهل العراق و حديثهم",
    ],
  },
  {
    slug: "aqd-101",
    code: "AQD 101",
    name: "ʿAqīdah",
    fullName: "Foundations of Islamic Theology (ʿAqīdah)",
    instructor: "Mawlānā Rohan",
    instructorSlug: "mawlana-rohan",
    location: "Online",
    schedule: "Monday 8:55–9:45 PM",
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
    location: "In Person — Masjid Ḥanafiyyah",
    schedule: "Saturday 3:55–4:45 PM",
    description:
      "This course covers the rules and practical application of proper Qurʾānic recitation. Students will learn the articulation points of each letter (Makhārij al-Ḥurūf), the characteristics of letters, and the rules governing elongation, nasalization, stopping, and more. The course progresses from foundational rules to mastery-level recitation, with the goal of preparing students for accurate and beautiful recitation of the Qurʾān. Regular guided recitation sessions provide hands-on practice and personalized feedback.",
    texts: ["TBA"],
  },
  {
    slug: "arb-101",
    code: "ARB 101",
    name: "Naḥw",
    fullName: "Classical Arabic Grammar (Naḥw)",
    instructor: "Mawlānā Ibraheem",
    instructorSlug: "mawlana-ibraheem",
    location: "Online",
    schedule: "Tuesday 8:55–9:45 PM",
    description:
      "This course builds a strong foundation in classical Arabic grammar (Naḥw), the essential tool for accessing Islamic texts in their original language. Students will start with the basics of sentence structure before advancing into grammatical analysis (Iʿrāb), complex sentence constructions, and rhetorical devices. By the end of the course, students will have the grammatical foundation to begin reading classical Islamic texts with confidence and independence.",
    texts: ["Ten Lessons", "Tasheel Nahw"],
  },
  {
    slug: "sar-101",
    code: "SAR 101",
    name: "Ṣarf",
    fullName: "Foundations of Arabic Morphology (Ṣarf)",
    instructor: "Mawlānā Arqam Masroor",
    instructorSlug: "mawlana-arqam",
    location: "Online",
    schedule: "Tuesday 8:00–8:50 PM",
    description:
      "This course introduces students to the foundational principles of Arabic morphology, focusing on word patterns, verb forms, and the structural development of Arabic words. The study will be guided through classical introductory texts including Āsān Ṣarf (collection), Miftāḥ al-Ṣarf, and ʿIlm al-Ṣīghah, enabling students to develop a clear understanding of verb conjugation, patterns (awzān), and the formation of nouns and verbs. The aim is to equip students with the tools necessary to analyze Arabic words and strengthen their ability to read and understand classical Islamic texts.",
    texts: ["Āsān Ṣarf (collection)", "Miftāḥ al-Ṣarf", "ʿIlm al-Ṣīghah", "Easy Morphology"],
  },
  {
    slug: "taf-101",
    code: "TAF 101",
    name: "Qurʾān",
    fullName: "Classical Tafsīr and Qurʾānic Sciences",
    instructor: "Mawlānā Arqam Masroor",
    instructorSlug: "mawlana-arqam",
    location: "In Person — Masjid Ḥanafiyyah",
    schedule: "Saturday 3:00–3:50 PM",
    description:
      "This course helps students understand and reflect on the meanings of the Qurʾān. Selected verses will be studied with the help of well-known tafsīr works such as Rūḥ al-Maʿānī, Tafsīr Ibn Kathīr, Tafsīr Maẓharī, and Tafsīr al-Qurṭubī. The goal is to help students understand the message of the verses, learn the explanations of classical scholars, and develop a deeper connection with the Qurʾān than just the translation.",
    texts: ["Rūḥ al-Maʿānī", "Tafsīr Ibn Kathīr", "Tafsīr Maẓharī", "Tafsīr al-Qurṭubī"],
  },
];
