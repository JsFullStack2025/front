import { z } from "zod"

export const formSchema = z.object({
  email: z.string().email({
    message: "",
  }),
  password: z.string().min(1, {
    message: "",
  }),
})
