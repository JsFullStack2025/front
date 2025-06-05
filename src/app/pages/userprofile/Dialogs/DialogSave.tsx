
import { Button } from "@/components/ui/button"
import { Trash2} from "lucide-react";
import {  useRef, useState } from "react";
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
import { AnyAaaaRecord } from "node:dns";
import { AppContext } from "@/app/Context/AppContext";
//https://blog.greenroots.info/shadcn-dialog-with-form-three-tips
export default function DialogSave({open, setOpen }: { open:any, setOpen:any}) {
 // let [openDel, setOpenDel] = useState(false);
 // const ref:any = useRef(null);


  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* <DialogTrigger ref={ref} asChild>
        <button className="">
          <Trash2 />
        </button>
      </DialogTrigger> */}
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Данные сохранены</DialogTitle>

        </DialogHeader>

        <DialogFooter >
           <DialogClose asChild>
          <Button className="bg-gradient" >Отлично</Button>
             </DialogClose>


        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}