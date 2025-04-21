import { z } from "zod"

export const formSchema = z.object({

  password: z.string().min(1, {
    message: "",
  }),
  email: z.string().email({
    message: "",
  }),
 // username: z.string().min(1, {
  //  message: "",
 // }),
})
