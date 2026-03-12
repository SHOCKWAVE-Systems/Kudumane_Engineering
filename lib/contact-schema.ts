import { z } from "zod";

export const serviceOptions = [
  "Brake Testing",
  "AutoStop Heavy Brake Meter",
  "Brakes, Clutches, Truck & Trailer Components",
  "Brake Repairs and Maintenance",
] as const;

export const contactSubmissionSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  company: z.string().max(120, "Company name is too long.").optional().default(""),
  phone: z.string().min(7, "Please enter a valid phone number."),
  email: z.email("Please enter a valid email address."),
  serviceInterestedIn: z.enum(serviceOptions, {
    error: "Please select a service.",
  }),
  message: z.string().min(10, "Message should be at least 10 characters."),
  website: z.string().optional().default(""),
});

export type ContactSubmission = z.infer<typeof contactSubmissionSchema>;
