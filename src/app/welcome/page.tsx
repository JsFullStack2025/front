
import Image from "next/image"

import {Card} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function welcome() {
    return(
       <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center  p-8 pb-20 gap-16 sm:p-20">

        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
           
           <Card className ="flex flex-row bg-gradient-to-r from-white via-white via-30% via-transparent via-53%">
            <p className=" basis-1/3 font-jet text-3xl text-right text-balance text-transparent bg-gradient-to-r from-primary-from to-primary-to bg-clip-text">
             Создавайте кастомизируйте и делитесь своими визитками с помощью VISITEO." </p>
            <Image
            className="basis "
            src="/logo.png"
            alt="Welcomelogo"
            width={100}
            height={100}
            />
           </Card>
           <Button
           type="submit" variant="customSecondary" size="customLg">Зарегестрируйтесь бесплатно. </Button>
           <Card>
            <p> "Хелло" </p>
            <Image
            className=""
            src="/logo.png"
            alt="Welcomelogo"
            width={200}
            height={200}
            />
           </Card>
           <Card>
            <p> "Хелло" </p>
        
           </Card>
        </main>

  
        </div>
    ) 
}