export interface CardTypeEntity {
    id?:number;
    title: string;
    description?: string;
    designData?: string;
    isCustomTemplate?: boolean;
    readonly?: boolean;
}