import z from "zod";

export type ContactSchema = z.infer<typeof contactSchema>;

export const contactSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters.")
    .max(100, "Full name must be at most 100 characters."),
  email: z.email(),
  message: z
    .string()
    .min(20, "Message must be at least 20 characters.")
    .max(500, "Message must be at most 500 characters."),
});
