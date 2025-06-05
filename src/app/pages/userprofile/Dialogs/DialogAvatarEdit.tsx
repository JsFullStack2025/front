import { Button } from "@/components/ui/button"
import AvatarEditor from 'react-avatar-editor'
import { Slider } from "@/components/ui/slider"
import { useRef, useState } from "react";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "../types"
import { HtmlContext } from "next/dist/server/route-modules/pages/vendored/contexts/entrypoints";
//https://codesandbox.io/p/sandbox/react-avatar-editor-example-bvbqyb?file=%2Fsrc%2FCropper.jsx%3A127%2C12-127%2C50
//
export default function DialogAvatarEdit({ saveAvatar, urlImg, open, setOpen }: { saveAvatar: any, urlImg: any, open: any, setOpen: any }) {
    // let [openNew, setOpenNew] = useState(false);
    const [slideValue, setSlideValue] = useState([10]);
    const editor: any = useRef(null);
    const save = async (event: any) => {
        if (editor) {
            // This returns a HTMLCanvasElement, it can be made into a data URL or a blob,
            // drawn on another canvas, or added to the DOM.
            const canvas = editor.current.getImage()
            console.log(canvas.toDataURL())
            // If you want the image resized to the canvas size (also a HTMLCanvasElement)
            const canvasScaled = editor.current.getImageScaledToCanvas()
            console.log(canvasScaled)
           // saveAvatar(canvas.toDataURL())
            saveAvatar(canvasScaled.toDataURL())
            setSlideValue([10])
        }
        // Usage
        const imageURL = await getImageUrl()
        console.log("imageURL", imageURL)

        event.preventDefault();
        setOpen(false);
        // ref.current?.click();

    }
    const getImageUrl = async () => {
        const dataUrl = editor.current.getImage().toDataURL()
        const res = await fetch(dataUrl)
        const blob = await res.blob()

        return window.URL.createObjectURL(blob)
    }
function sliderChange(val:number[]) {
    console.log(val)
    setSlideValue(val)
   // (e:any) => setSlideValue(e.target.value)
}

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            {/* <DialogTrigger  asChild>

      </DialogTrigger> */}
            <DialogContent >
                <DialogHeader>
                    <DialogTitle>Редактировать фото</DialogTitle>
                    <DialogDescription>

                    </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col w-full justify-center gap-4" >
                    <AvatarEditor
                        ref={editor}
                        style={{ width: "100%", height: "100%" }}
                        image={urlImg}
                        border={40}
                        borderRadius={150}
                        scale={slideValue[0]/10}
                    />
                    <Slider min={10}
                        max={100} step={1}
                        defaultValue={slideValue}
                        onValueChange={(vals) => {
                            sliderChange(vals);
                          }} />
                </div>



                <DialogFooter>
                    <div className="flex w-full justify-center">
                        <Button className="bg-gradient" type="submit" onClick={save}>Применить</Button>
                    </div>

                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
