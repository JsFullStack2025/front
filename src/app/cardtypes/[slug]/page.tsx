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

export default function Page({ params }: { params: Promise<{ slug: string }>}) {
    const [cardType, setCardType] = React.useState<CardTypeEntity>({id:0,title:''});

    React.useEffect(() => {
        const fetchData = async () => {
            const { slug } = await params
            const response = await axios.get(`${API_CONFIG.Url}/cardtypes${slug}`)
            const data = response.data;
            console.log(data)
            setCardType(data);
        };
            fetchData();
    },[]);
    // const onTitleChange = (e)=>{
    //     console.log(e.target.value)
    //     const tmp = cardType
    //     tmp.title = e.target.value
    //     console.log(tmp)
    //     setCardType(tmp)
    // }

    const form = useForm<CardTypeEntity>();

    return <div className="h-screen font-sans overflow-y-auto p-20">
    <div className="bg-white text-gray-800 rounded-lg w-full sm:h-3/4 sm:min-w-xl overflow-y-auto mb-2 sm:mb-0">
        <div className="flex items-center rounded-t-lg  h-15 px-8 bg-header-project-list">
                <h3 className="text-xl text-white">{cardType.title}</h3>
        </div>
            {/* <form >
        <input className="w-full p-2" onChange={onTitleChange} placeholder="title" defaultValue={cardType.title} />
        <div className='p-3'>{cardType?.description}</div>
            </form> */}
            <Form {...form}>
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-sm text-muted-foreground">Название</FormLabel>
                            <FormControl>
                                <Input className="w-full" placeholder="title" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </Form>
        </div>
    </div>
  }