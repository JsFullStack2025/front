import { z } from "zod"

export const formSchema = z.object({
  username:z.string().min(3, {
    message: "Мин 3",
  }),
  password: z.string().min(5, {
    message: "Мин 5",
  }),
  // email: z.string().min(1, {//.email({ // убрал пока валидацию с поля email, так как сейчас по логину авторизует
  //   message: "",
  // }),
 // username: z.string().min(1, {
  //  message: "",
 // }),
})
