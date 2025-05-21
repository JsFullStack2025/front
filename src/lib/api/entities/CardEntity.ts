export interface CardEntity {
    id:number;
    title: string;
    cardData?: string;
    authorId?: number;
    //author?: boolean;
    shared?: boolean;
    sharedUrl?:String
    //designPrototype:
    designPrototypeId?:number
}

export interface CreateCardDto {
    authorId: number
    title:string
    cardData?: string
    designPrototypeId?: number
    shared?: boolean | undefined
}