"use client"
import { API_CONFIG } from '@/lib/api/api.consts'
import  React from 'react'
import axios from 'axios'
import { CardTypeEntity } from '@/lib/api/entities/cardTypeEntity';
import "../stylePageUP.css";
import { useForm } from "react-hook-form"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { title } from 'node:process';
import { Description } from '@radix-ui/react-dialog';
import { redirect, usePathname } from 'next/navigation'

export default function Page({ params }: { params: Promise<{ slug: string }>}) {
    const [cardType, setCardType] = React.useState<CardTypeEntity>({id:0,title:'',description:'', designData:'', isCustomTemplate:false, readonly:false});

    React.useEffect(() => {
        const fetchData = async () => {
            const { slug } = await params
            const response = await axios.get(`${API_CONFIG.Url}/cardtypes${slug}`)
            const data = response.data;
            //console.log(data)
            setCardType(data);
        };
            fetchData();
    },[]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCardType((prevValues) => ({
          ...prevValues,
          [name]: value
        }));
        //console.log(cardType)
      };

      const onSubmit = (event : React.FormEvent)=> {
        event.preventDefault()
         const response =  axios.patch(`${API_CONFIG.Url}/cardtypes`,{
            ...cardType
         })
         .then((res)=>{
            const data = res.data;
            //console.log(cardType)
         })
         .catch((e)=>{
            console.log(e)
         });
         redirect('/cardtypes')
      }

    return <div className="h-screen font-sans overflow-y-auto p-20">
        <div className="bg-white text-gray-800 rounded-lg w-full sm:h-3/4 sm:min-w-xl overflow-y-auto mb-2 sm:mb-0">
            <div className="flex items-center rounded-t-lg  h-15 px-8 bg-header-project-list">
                <h3 className="text-xl text-white">Шаблон визитки : {cardType.id}</h3>
            </div>
            <form onSubmit={onSubmit}>
                <div className='p-3'>
                    <Label htmlFor='title' className='text-sm text-muted-foreground' >Название</Label>
                    <Input
                        className='mb-2'
                        name="title"
                        placeholder='Название'
                        value={cardType.title}
                        onChange={handleChange}
                        required
                    />
                    <Label htmlFor='description' className='text-sm text-muted-foreground' >Описание</Label>
                    <Input
                        className='mb-2'
                        name="description"
                        placeholder='Описание'
                        value={cardType.description}
                        onChange={handleChange}
                    />
                    <Label htmlFor='designData' className='text-sm text-muted-foreground' >JSON template</Label>
                    <Input
                        className='mb-2'
                        name="designData"
                        placeholder='JSON template'
                        value={cardType.designData}
                        onChange={handleChange}
                    />
                    <Button type='submit'>Сохранить</Button>
                </div>
            </form>
        </div>
    </div>
}