
import { Button } from "@/components/ui/button"
import { Trash2} from "lucide-react";
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
import { AnyAaaaRecord } from "node:dns";
//https://blog.greenroots.info/shadcn-dialog-with-form-three-tips
export default function DialogDel({ cardId, deleteCard }: {cardId:number, deleteCard:any}) {
  let [openDel, setOpenDel] = useState(false);
  const ref:any = useRef(null);
   const delCard = (cardId: number) => {

    deleteCard(cardId)
    setOpenDel(false)
    // ref.current?.click();

  }

  return (
    <Dialog open={openDel} onOpenChange={setOpenDel}>
      <DialogTrigger ref={ref} asChild>
        <button className="">
          <Trash2 />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Удалить визитку № {cardId}</DialogTitle>

        </DialogHeader>

        <DialogFooter>
          <Button className="bg-gradient" onClick={() => delCard(cardId)}>Да</Button>
          <DialogClose asChild>
            <Button type="button" variant="secondary" >
              Нет
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}