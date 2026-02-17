import { z } from "zod";

export const applySchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  preferredTrack: z.enum(["online", "not-sure"], {
    message: "Please select a preferred track",
  }),
  availability: z
    .array(z.enum(["mon", "wed"]))
    .min(1, "Please select at least one availability option"),
  notes: z.string().optional(),
});

export type ApplyFormData = z.infer<typeof applySchema>;

