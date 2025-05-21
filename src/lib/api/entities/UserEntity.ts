export interface userEntity {
    id: number
    fio?: string
    foto: string
    email: string
    username: string
    //  password    String
    // refreshToken String?
    //  refreshTokenExp DateTime?
    isAdmin?: boolean
    first_name?: string
    middle_name?: string
    last_name?: string
    created_at?: string
    updated_at?: string
    banned?: boolean

}

export interface UpdateUserDto {
    id: number;
    foto?: string;
    first_name?:string;
    middle_name?:string;
    last_name?:string;
    email?:string;
}