import { z } from "zod";

export const trackOptions = [
  { group: "Full Tracks", value: "madani", label: "Madani" },
  { group: "Full Tracks", value: "sric", label: "SRIC" },
  { group: "Individual Courses", value: "fqh-101", label: "FQH 101 — Fiqh & Uṣūl al-Fiqh" },
  { group: "Individual Courses", value: "aqd-101", label: "AQD 101 — ʿAqīda & Islamic Theology" },
  { group: "Individual Courses", value: "had-101", label: "HAD 101 — Ḥadīth Sciences" },
  { group: "Individual Courses", value: "taf-101", label: "TAF 101 — Tafsīr & Qurʾānic Studies" },
  { group: "Individual Courses", value: "taj-101", label: "TAJ 101 — Tajwīd & Qurʾānic Recitation" },
  { group: "Individual Courses", value: "arb-101", label: "ARB 101 — Arabic Language & Grammar" },
] as const;

export const applySchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  preferredTrack: z.enum(
    ["madani", "sric", "fqh-101", "aqd-101", "had-101", "taf-101", "taj-101", "arb-101"],
    { message: "Please select a preferred track" }
  ),
  notes: z.string().optional(),
});

export type ApplyFormData = z.infer<typeof applySchema>;
