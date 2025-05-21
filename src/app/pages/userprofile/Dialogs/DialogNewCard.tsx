import { Button } from "@/components/ui/button"
import { Plus} from "lucide-react";
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

export default function DialogNewCard({createCard}:{createCard:any}) {
    let [openNew, setOpenNew] = useState(false);
    let [titleNewCard, setTitleNewCard] = useState("")
    const newCard = () => {

        createCard(titleNewCard)
        setOpenNew(false)
        setTitleNewCard("")
        // ref.current?.click();
    
      }
      let newTitle = (e:any)=>{
        setTitleNewCard(e.target.value)
      }
    return (
      <Dialog open={openNew} onOpenChange={setOpenNew}>
        <DialogTrigger  asChild>
        <Button className="bg-gradient">
                            {" "}
                            <Plus className="size-7" />
                            <span>Создать</span>
                        </Button>
      </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Новая визитка</DialogTitle>
            <DialogDescription>

            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="Title" className="text-right">
                Название
              </Label>
              <Input
                id="Title"
                className="col-span-3"

                onChange={newTitle}
              />
            </div>
          </div>
          <DialogFooter>
            <Button className="bg-gradient" type="submit" onClick={newCard}>Создать</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
  }
