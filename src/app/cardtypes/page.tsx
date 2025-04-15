"use client"
import React from "react";
import { API_CONFIG } from '@/lib/api/api.consts'
import axios from 'axios';
import { CardTypeEntity } from '@/lib/api/entities/cardTypeEntity';
import "./stylePageUP.css";
import Link from 'next/link'

export default function Page() {
    const [cardTypesList, setCardTypesList] = React.useState([]);
    React.useEffect(() => {
        axios.get(API_CONFIG.Url+'/cardtypes')
        .then((res) =>{
            const data = res.data;
            //console.log(data);
            setCardTypesList(data);
        })
    },[]);
    return <>
        <div className="h-screen font-sans overflow-y-auto p-20">
            <div className="bg-white text-gray-800 rounded-lg w-full sm:h-3/4 sm:min-w-xl overflow-y-auto mb-2 sm:mb-0">
                <div className="flex justify-between items-center rounded-t-lg  h-15 px-8 bg-header-project-list">
                    <h3 className="text-xl text-white">Шаблоны визиток</h3>
                    <button className="bg-gradient text-white py-1 px-3  rounded-md">
                        Добавить шаблон
                    </button>

                </div>
                <ul className="p-6">
                {
                    cardTypesList.map((cardType:CardTypeEntity, key) => {
                        return <li key={key}>
                            <Link className='flex flex-row justify-between items-center h-min"' href={`/cardtypes/${cardType.id}`}>
                                <div className='flex flex-col'>{cardType.title}</div>
                                <div className='flex flex-col text-sm px-3'>{cardType.description}</div>
                            </Link>
                        </li>
                    })
                }
                </ul>
            </div>
        </div>
    </>
  }