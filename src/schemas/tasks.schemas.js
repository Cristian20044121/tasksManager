import { date, z } from "zod";

const createTask = z.object({
  title: z.string({
    required_error: "title is required",
    invalid_type_error: "title debe ser cadena de texto",
  }),
  description: z.string({
    required_error: "description is required",
    invalid_type_error: "description debe ser cadena de texto",
  }),
  date: z.string().datetime().optional(),
});

const updateTask = z.object({
  title: z.string({
    required_error: "title is required",
    invalid_type_error: "title debe ser cadena de texto",
  }),
  description: z.string({
    required_error: "description is required",
    invalid_type_error: "description debe ser cadena de texto",
  }),
  date: z.string().datetime().optional(),
});

export default {
  createTask,
  updateTask,
};
