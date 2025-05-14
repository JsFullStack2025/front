import {Card, User} from "./types"

// export const cards: Сard[] = [
//     new Сard("Проект 1", 1),
//     new Сard(`Проект 2 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 Minima architecto iste consectetur fuga eligendi sed adipisci,
//                 eaque quidem! Nam, libero. Tempore perferendis architecto
//                 recusandae rem blanditiis unde doloribus laborum optio? .`, 2),
//     new Сard("Проект 3",3 ),
//     new Сard("Проект 4", 4),
//     new Сard("Проект 5", 5),
// ]

export let cards: Card[] = [
  { title: " Проект 1", id: 1 },
  {
    title: `Проект 2 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Minima architecto iste consectetur fuga eligendi sed adipisci,
                            eaque quidem! Nam, libero. Tempore perferendis architecto
                            recusandae rem blanditiis unde doloribus laborum optio? .`,
    id: 2,
  },
  { title: "Проект 3", id: 3 },
  { title: "Проект 4", id: 4 },
  { title: "Проект 5", id: 5 },
  { title: "Проект 6", id: 6 },
];


export let users: User[] = [
  { id: 1, login: "User1", linkImg: "", email: "User1@email.ru" },
  {
    id: 2,
    login: "User2",
    linkImg: "/userprofile/foto.jpg",
    email: "User2@email.ru",
  },
];