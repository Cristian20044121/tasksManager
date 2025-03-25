import { z } from "zod";

const registerSchema = z.object({
  username: z.string({
    required_error: "Username is required",
  }),
  email: z
    .string({
      required_error: "email is required",
    })
    .email({
      message: "invalid email",
    }),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(6, {
      message: "Password must be at least 6 characters",
    }),
});

const loginSchema = z.object({
  email: z
    .string({
      required_error: "email is required",
      invalid_type_error: "email debe ser cadena de texto",
    })
    .email({
      message: "invalid email",
      invalid_type_error: "debe ser un email valido",
    }),
  password: z
    .string({
      required_error: "Password is required",
      invalid_type_error: "password debe ser cadena de texto",
    })
    .min(6, {
      message: "Password must be at least 6 characters",
    }),
});

export default {
  registerSchema,
  loginSchema,
};
