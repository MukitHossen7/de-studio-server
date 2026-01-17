import z from "zod";

export const ContactZodSchema = z.object({
  name: z
    .string({ error: "Name must be string" })
    .min(2, { message: "Name must be at least 2 characters long." })
    .max(100, { message: "Name cannot exceed 100 characters." }),
  email: z
    .string({ error: "Email must be string" })
    .email({ message: "Invalid email address format." })
    .max(100, { message: "Email cannot exceed 100 characters." }),
  companyName: z.string().optional(),
  phone: z.string({ error: "Phone must be string" }),
  service: z.string({ error: "Service must be string" }),
  amount: z.string({ error: "Amount must be string" }),
  message: z
    .string({ error: "Message must be string" })
    .min(10, { message: "Message must be at least 10 characters long." })
    .max(1000, { message: "Message cannot exceed 1000 characters." }),
});
