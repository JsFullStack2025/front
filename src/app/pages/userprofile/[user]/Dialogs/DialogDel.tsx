import { Button } from "@/components/ui/button"
import { Save, Plus, Pencil, Trash2, Mail, Camera } from "lucide-react";
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
//import { Card } from "../types"
//https://blog.greenroots.info/shadcn-dialog-with-form-three-tips
export function DialogDel({ cardId }: {cardId:number}) {
  let [openDel, setOpenDel] = useState(false);
  async function delCard(cardIds: number) {
    alert("Удалена проект № " + cardIds)
    //setOpenDel(false)
    ref.current?.click();
  }
  const ref:any = useRef(null);
  return (
    <Dialog open={openDel} onOpenChange={setOpenDel}>
      <DialogTrigger ref={ref} asChild>
        <button className="">
          <Trash2 />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Удалить проект № {cardId}</DialogTitle>

        </DialogHeader>

        <DialogFooter>
          <Button onClick={() => delCard(cardId)}>Да</Button>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Нет
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}