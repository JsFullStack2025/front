export type CardTypeEntity = {
    id:number;
    title: string;
    description?: string;
    designData?: string;
    isCustomTemplate?: boolean;
    readonly?: boolean;
}
export type CardTypeAddEntity = Omit<CardTypeEntity, 'id'>;
