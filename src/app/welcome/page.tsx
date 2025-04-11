import Footer from "../components/moduls/footer"
import Header from "../components/moduls/header"
import Image from "next/image"
export default function welcome() {
    return(
       <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20]">
        <Header/>
        <main className="">
            <Image
            className=""
            src="/logo.png"
            alt="Welcomelogo"
            width={200}
            height={200}
            />

            
        </main>

        <Footer></Footer>
        </div>
    ) 
}