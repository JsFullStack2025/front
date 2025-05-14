export class Card {
    title: string;
    id: number;
    constructor(title: string, id: number) {
      this.title = title;
      this.id = id;
    }
  }
  export class User {
      id:number
      login:string
      linkImg:string
      email:string
      constructor(id:number = 0, login:string = "", linkImg:string = "", email:string = "") {
          this.id = id
          this.login = login
          this.linkImg = linkImg
          this.email = email
      }
  }

  // export interface User {
  //   id: number;
  //   login: string;
  //   linkImg: string;
  //   email: string;
  // }