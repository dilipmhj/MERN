import z, { maxLength, minLength, regex } from "zod";
import { userSchema } from "./user.schema.js";
import { emailRegex, passwordRegex } from "../../constants/regex.js";

/**
 * *login
 * email: required, email format
 * phone required, min length 5, max length 15
 * password: required, min length 6, password format *
 */

export const loginSchema = z
  .object({
    email: z
      .string({ error: "Email is required." })
      .regex(emailRegex, { error: "Invalid email address." })
      .optional(),
    phone: z.string({ error: "Phone number is required." }).optional(),
    password: z.string(),
  })
  .refine((data) => data.email || data.phone, {
    message: "Either email or phone is required",
    path: ["email", "phone"], // Path to highlight the error
  });

export const registerSchema = userSchema;
