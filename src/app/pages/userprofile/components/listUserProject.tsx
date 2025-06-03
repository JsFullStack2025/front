"use client";
import { useRef, useState, useEffect } from "react";
import "../stylePageUP.css";
import { Plus, Pencil, Trash2 } from "lucide-react";
import DialogDel from "../Dialogs/DialogDel"
import DialogNewCard from "../Dialogs/DialogNewCard"
import { CardEntity, CreateCardDto } from "@/lib/api/entities/CardEntity";
import { AxiosDeleteCard } from "@/lib/api/cards";
import { Input } from "@/components/ui/input";
//import { Card } from "../types"
//import { cards } from "../data";

export default function ListUserProject({ cardList, deleteCard, createCard, filterByTitle
}: {
    cardList: CardEntity[], deleteCard: any, createCard: any, filterByTitle: any
}) {
    console.log("cardList", cardList)

    // let [cardListLength, setCardListLength] = useState(cardList.sort((a, b)=>b.id-a.id).length || [].length);
    async function deleteCardHandler(cardId: number) {
        const res = await deleteCard(cardId)
        console.log("deleteCardHandler", res)


        // const ind = cardList.findIndex((elm) => elm.id === cardId)
        //  cardList.splice(ind, 1)
        //  setCardListLength(cardList.length)
        // assigning the list to temp variable
        // const temp = [...cardList];

        // // removing the element using splice
        // temp.splice(ind, 1);
        // setCardList(temp)
        // cardList = cardList.filter((item) => item.id !== cardId)

        // console.log(cardList)
        // cardList = cardList.filter((item) => item.id !== cardId)
        // setCardList((l) => {
        //     const ind = l.findIndex((elm) => elm.id === cardId)

        //     const updetedList = l.filter((item) => item.id !== cardId)
        //     return updetedList; //l.splice(ind, 1)
        // })
        // alert("Удален проект № " + cardId)
    }
    async function createNewCardHandler(title: string) {

        const res = await createCard(title)
        // const newId = Math.max(...cardList.map(elm => elm.id)) + 1
        // cardList.push(new Card(title, newId))
        // setCardListLength(cardList.length)
        // const temp = [...cardList];
        // temp.push(new Card(title, newId))
        // setCardList(temp)

        //setCardList(cardList)

    }
    function editCardHandler(event: any, idCard: number) {
        event.preventDefault()
        event.stopPropagation();
        console.log(event)

        alert(`Должен быть переход в редактор визитки ИД${idCard}`)
    }
    function viewCardHandler(event: any, idCard: number) {
        event.preventDefault()
        event.stopPropagation();
        console.log(event)

        alert(`Должен быть переход в просмотр визитки ИД${idCard}`)
    }
    function filterHandler(event: any) {
        event.preventDefault()
        event.stopPropagation();
        console.log(event)
        filterByTitle(event.target.value, cardList)


    }
    // const listCard = cards.map((card) => (
    //     <li className="flex flex-row items-center justify-between" key={card.id}>
    //         {/* <button className="">
    //             <Trash2 />
    //         </button> */}<DialogDel cardId={card.id} deleteCard={deleteCardHandler} />
    //         <span className="mx-5 grow hover:cursor-pointer hover:underline">
    //             {card.title}
    //         </span>
    //         <button className="">
    //             <Pencil size={24} />
    //             {/* <Image src="/img/UserProfile/edit.svg" alt="github logo" width={28} height={28} /> */}
    //         </button>
    //     </li>
    // ));

    //  const curUrlFoto = curUser.linkImg?` bg-indigo-300`: 'bg-[url(/img/userprofile/nofoto.svg)]  bg-indigo-300 '
    // const MyEditor = () => {
    //     const editor = useRef(null);
    return (
        <>
            <div className="flex h-full flex-col space-y-4">
                <div className="bg-header-project-list flex flex-none h-15 items-center justify-between rounded-t-lg px-8">
                    <h2 className="text-xl text-white">Мои визитки</h2>
                    {/* <Button className="bg-gradient">
                            {" "}
                            <Plus className="size-7" />
                            <span>Новый проект</span>
                        </Button> */}
                    <DialogNewCard createCard={createNewCardHandler} />

                </div>
                <div className="flex flex-none h-15 items-center justify-between rounded-t-lg px-6">
                    <div className="w-full xl:w-1/4">
                    <input  name="q" type="search" className="text-field__input" placeholder="Найти по названию" onChange={filterHandler} />
                        </div>
                </div>
                <div className="overflow-y-auto ">
                    <ul className="px-6 pb-8 ">
                        {cardList.sort((a, b) => b.id - a.id).map((card) => (
                            <li className="flex flex-row items-center justify-between" key={card.id}>
                                {/* <button className="">
                <Trash2 />
            </button> */}<DialogDel cardId={card.id} title={card.title} deleteCard={deleteCardHandler} />
                                <span className="mx-5 grow hover:cursor-pointer hover:underline" onClick={() => viewCardHandler(event, card.id)}>
                                    {card.title}
                                </span>
                                <button className="" onClick={() => editCardHandler(event, card.id)}>
                                    <Pencil size={24} />
                                    {/* <Image src="/img/UserProfile/edit.svg" alt="github logo" width={28} height={28} /> */}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}
