// src/utils/validation.ts
import { z } from "zod";

export const registerSchema = z.object({
  firstName: z.string().min(1),
  middleName: z.string().optional(),
  lastName: z.string().min(1),
  email: z.string().email(),
  idNumber: z.string().min(4),
  kraPin: z.string().min(5),
  ntsaPhone: z.string().min(10),
  phoneNumber: z.string().min(10), // ✅ must be 10 digits minimum
  password: z.string().min(6),
});
