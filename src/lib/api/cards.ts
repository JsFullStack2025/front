import axios, { AxiosError, AxiosResponse } from "axios"
import { API_CONFIG, AxiosShell, instanceAxios } from "./api.consts"
import { CardEntity, CreateCardDto } from "./entities/CardEntity"

export async function AxiosDeleteCard(idCard: number) {

   const response: any = await AxiosShell(instanceAxios.delete(`/deleteCard${idCard}`))
   return response.data


}
export async function AxiosCreateCard(card:CreateCardDto) {

   const response: any = await AxiosShell(instanceAxios.post(`/createCard`, card ))
   return response.data


}

export async function AxiosUpdateCard(card:CardEntity) {

   const response: any = await AxiosShell(instanceAxios.patch(`/updateCard`, card))
   return response.data


}