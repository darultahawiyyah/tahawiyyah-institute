import { z } from "zod";

export const individualCourseOptions = [
  { value: "fqh-101", label: "FQH 101 — Ḥanafī Jurisprudence and Legal Methodology" },
  { value: "aqd-101", label: "AQD 101 — Foundations of Islamic Theology (ʿAqīdah)" },
  { value: "taj-101", label: "TAJ 101 — Principles of Qurʾānic Recitation (Tajwīd)" },
  { value: "arb-101", label: "ARB 101 — Classical Arabic Grammar (Naḥw)" },
  { value: "sar-101", label: "SAR 101 — Foundations of Arabic Morphology (Ṣarf)" },
  { value: "taf-101", label: "TAF 101 — Classical Tafsīr and Qurʾānic Sciences" },
] as const;

export const courseValues = individualCourseOptions.map((c) => c.value);

export const applySchema = z
  .object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Please enter a valid email address"),
    phone: z.string().min(1, "Phone number is required"),
    gender: z.enum(["male", "female"], { message: "Please select a gender" }),
    previousStudies: z.string().min(1, "Please describe your previous Islamic studies"),
    trackType: z.enum(["madani", "individual"], {
      message: "Please select a track",
    }),
    selectedCourses: z.array(z.string()).optional(),
    notes: z.string().optional(),
    priceAcknowledged: z.literal(true, {
      message: "Please acknowledge the price to continue",
    }),
    financialAid: z.object({
      name: z.string().min(1),
      reason: z.string().min(1),
      employment: z.enum(["fulltime", "parttime", "nojob"]),
    }).optional(),
  })
  .superRefine((data, ctx) => {
    if (
      data.trackType === "individual" &&
      (!data.selectedCourses || data.selectedCourses.length === 0)
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Please select at least one course",
        path: ["selectedCourses"],
      });
    }
  });

export type ApplyFormData = z.infer<typeof applySchema>;
