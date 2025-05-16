"use client";
import { useRef, useState, useEffect } from "react";
import "../stylePageUP.css";
import { Plus, Pencil, Trash2 } from "lucide-react";
import DialogDel from "../Dialogs/DialogDel"
import DialogNewCard from "../Dialogs/DialogNewCard"
import { Card } from "../types"
//import { cards } from "../data";

export default function ListUserProject({ cardList
}: {
    cardList: Card[]
}) {
    console.log("cardList", cardList)
   
    let [cardListLength, setCardListLength] = useState(cardList.sort((a, b)=>b.id-a.id).length || [].length);
    function deleteCardHandler(cardId: number) {
        const ind = cardList.findIndex((elm) => elm.id === cardId)
        cardList.splice(ind, 1)
        setCardListLength(cardList.length)
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
        alert("Удален проект № " + cardId)
    }
    function createNewCard(title: string) {
        const newId = Math.max(...cardList.map(elm => elm.id)) + 1
        cardList.push(new Card(title, newId))
        setCardListLength(cardList.length)
        // const temp = [...cardList];
        // temp.push(new Card(title, newId))
        // setCardList(temp)

        //setCardList(cardList)

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

            <div className="bg-header-project-list flex h-15 items-center justify-between rounded-t-lg px-8">
                <h2 className="text-xl text-white">Мои визитки</h2>
                {/* <Button className="bg-gradient">
                            {" "}
                            <Plus className="size-7" />
                            <span>Новый проект</span>
                        </Button> */}
                <DialogNewCard createCard={createNewCard} />

            </div>
            <ul className="p-6">
                {cardList.map((card) => (
                    <li className="flex flex-row items-center justify-between" key={card.id}>
                        {/* <button className="">
                <Trash2 />
            </button> */}<DialogDel cardId={card.id} deleteCard={deleteCardHandler} />
                        <span className="mx-5 grow hover:cursor-pointer hover:underline">
                            {card.title}
                        </span>
                        <button className="">
                            <Pencil size={24} />
                            {/* <Image src="/img/UserProfile/edit.svg" alt="github logo" width={28} height={28} /> */}
                        </button>
                    </li>
                ))}
            </ul>

        </>
    );
}
