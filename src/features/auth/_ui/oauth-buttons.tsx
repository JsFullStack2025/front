import { useMutation } from "@tanstack/react-query"
import "lucide-react"
import { useRouter } from "next/navigation"
import { FaGithub, FaYandex, FaGoogle } from "react-icons/fa"
import { toast } from "sonner"

import { Button } from "@/shared/ui/button"

import { authService } from "../_services/auth.service"
import Link from "next/link"

export function OAuthButtons() {
  const router = useRouter()

  const { mutateAsync } = useMutation({
    mutationKey: ["oauth"],
    mutationFn: async (provider: "google" | "yandex") =>
      await authService.oauth(provider),
    onSuccess: () => {
      console.log("google sign in tanstack")
      router.push("/")
    },
    onError: () =>
      toast.error("Что-то пошло не так", {
        description: "На стороне сервера возникла ошибка, попробуйте позже"
      })
  })

  const { mutateAsync: mutateAsync2 } = useMutation({
    mutationKey: ["session"],
    mutationFn: async () => await authService.getSession(),
    
  })

  const handleSubmit = async (provider: "google" | "yandex") => {
    const response = await mutateAsync(provider)

    if (response) {
      router.push(response)
      
    }
  }
  /*
    return (
      <div className="grid grid-cols-2 gap-6">
        <Button variant="outline" onClick={() => handleSubmit("yandex")}>
          <FaYandex className="mr-2 size-4" />
          Яндекс
        </Button>
        <Button variant="outline" onClick={() => handleSubmit("github")}>
          <FaGithub className="mr-2 size-4" />
          GitHub
        </Button>
      </div>
    )
  }
  */

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-center gap-4">
        <div className="w-full h-[1px]  bg-gray-300 "></div>
        <div className="w-full text-sm text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 font-medium whitespace-nowrap">
          Или войти через
        </div>
        <div className="w-full h-[1px]  bg-gray-300"></div>
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <Button variant="outline" size="customLg" onClick={() => handleSubmit("google")}>
          <FaGoogle className="mr-2 size-4" />
        </Button>
        <Button variant="outline" size="customLg" onClick={() => handleSubmit("yandex")}>
          <FaYandex className="mr-2 size-4" />
        </Button>
        <div className="space-y-0 flex flex-col w-full">
          <p className="text-xs text-muted-foreground text-left">Создавая аккаунт, вы соглашаетесь с нашими</p>
          <Link className="text-xs text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 text-left" href={"/"}> условиями использования
            <p className=" bottom-0 left-0 w-37 h-[1px] bg-gradient-to-r from-purple-500 to-blue-500"></p>
          </Link>
        </div>
      </div>
    </div>
  )
}