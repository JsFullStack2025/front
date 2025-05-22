import { z } from "zod"

export const formSchema = z.object({

  password: z.string().min(1, {
    message: "",
  }),
  email: z.string().email({//.email({ // убрал пока валидацию с поля email, так как сейчас по логину авторизует
    message: "",
  }),
  username: z.string().min(1, {
    message: "",
  }),
})
