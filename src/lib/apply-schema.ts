import { z } from "zod";

export const applySchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  preferredTrack: z.enum(["madani", "sric"], {
    message: "Please select a preferred track",
  }),
  notes: z.string().optional(),
});

export type ApplyFormData = z.infer<typeof applySchema>;
