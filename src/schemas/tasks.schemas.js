import { date, z } from "zod";

const createTask = z.object({
  title: z.string({
    required_error: "title is required",
  }),
  description: z.string({
    required_error: "description is required",
  }),
  date: z.string().datetime().optional(),
});

const updateTask = z.object({
  title: z.string({
    required_error: "title is required",
  }),
  description: z.string({
    required_error: "description is required",
  }),
  date: z.string().datetime().optional(),
});

export default {
  createTask,
  updateTask,
};
