
import Image from "next/image"

import {Card} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function welcome() {
    return(
       <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 sm:p-20">

        <main className="flex flex-col gap-30 row-start-2 items-center sm:items-start">
            <div className="grid grid-rows gap-10 justify-items-center sm:items-start">
                <Card className =" white-on-small-width flex h-[100%] w-full items-center justify-between gap-8 px-8 lg:flex-row  bg-gradient-to-r from-white via-white via-40% via-transparent via-75%">
                    <p className=" basis-1/3 font-jet text-6xl text-center text-balance text-transparent bg-gradient-to-r from-primary-from to-primary-to bg-clip-text">
                    Создавайте кастомизируйте и делитесь своими визитками с помощью VISITEO. </p>
                    <Image
                    className="shadow-xl rounded-md"
                    src="/card.png"
                    alt="CardExample"
                    width={400}
                    height={700}/>
                </Card>

                <Button className=""
                    type="submit" variant="customSecondary" size="customSm">
                    <p className="text-3xl text-center text-balance text-transparent bg-gradient-to-r from-primary-from to-primary-to bg-clip-text">
                    Зарегестрируйтесь бесплатно.</p>
                </Button>
            </div>

            <Card className="white-on-small-width flex h-[100%] w-full items-center justify-between gap-8 px-8 lg:flex-row  bg-gradient-to-r via-transparent via-20% via-white via-60% to-white">
                <Image
                className="shadow-xl rounded-md"
                src="/dragndrop.png"
                alt="Drag'n'drop"
                width={400}
                height={400}
                />
                <p className="p-3 basis-1/3 font-jet text-5xl text-center text-balance text-transparent bg-gradient-to-r from-primary-from to-primary-to bg-clip-text">
                    Удобный редактор с функцией Drag'n'Drop 
                </p>
           </Card>

           <Card className="white-on-small-width flex h-[100%] w-full items-center justify-between gap-8 px-8 lg:flex-row  bg-gradient-to-r via-transparent via-20% via-white via-60% to-white">
            <Image
                className="shadow-xl rounded-md"
                src="/template.png"
                alt="template"
                width={600}
                height={400}
                />
                <p className=" p-3 basis-1/3 font-jet text-5xl text-center text-balance text-transparent bg-gradient-to-r from-primary-from to-primary-to bg-clip-text">
                Настраеваемые шаблоны помогут создать визитки на все случаи жизни 
                </p>
           </Card>
           
            <Card className="p-3 white-on-small-width flex h-[100%] w-full items-center justify-between gap-8 px-8 lg:flex-row  bg-gradient-to-r via-transparent via-20% via-white via-60% to-white">
                <Image
                className="shadow-xl rounded-md"
                src="/share.jpg"
                alt="template"
                width={300}
                height={300}
                />
                <p className=" p-3 basis-1/3 font-jet text-5xl text-center text-balance text-transparent bg-gradient-to-r from-primary-from to-primary-to bg-clip-text">
                 Делитесть своими карточками как вам удобно и где удобно </p>
            </Card>

        </main>

  
        </div>
    ) 
}