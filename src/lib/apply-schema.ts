import { z } from "zod";

export const individualCourseOptions = [
  { value: "fqh-101", label: "FQH 101 — Fiqh" },
  { value: "aqd-101", label: "AQD 101 — ʿAqīda & Islamic Theology" },
  { value: "had-101", label: "HAD 101 — Ḥadīth Sciences" },
  { value: "taj-101", label: "TAJ 101 — Tajwīd & Qurʾānic Recitation" },
  { value: "arb-101", label: "ARB 101 — Naḥw (Arabic Grammar)" },
  { value: "sar-101", label: "SAR 101 — Ṣarf (Arabic Morphology)" },
  { value: "taf-101", label: "TAF 101 — Qurʾān & Tafsīr" },
] as const;

export const courseValues = individualCourseOptions.map((c) => c.value);

export const applySchema = z
  .object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Please enter a valid email address"),
    phone: z.string().optional(),
    trackType: z.enum(["madani", "individual"], {
      message: "Please select a track",
    }),
    selectedCourses: z.array(z.string()).optional(),
    notes: z.string().optional(),
    paymentConfirmed: z.literal(true, {
      message: "Please confirm that you have sent payment",
    }),
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
