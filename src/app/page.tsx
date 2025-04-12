"use client"


import Image from "next/image";

import { Button } from '@/components/ui/button'

import testJWT from '@/lib/api/testjwt'
import { GetUser } from "@/lib/api/user";
import { useState } from 'react';

export default function Home() {

  const handleButtonClick = (action: string) => {
    console.log(`Кнопка с действием "${action}" была нажата`);
    if (action === 'action1') { 
      const data = testJWT()
      console.log(data)
    }  
    if (action === 'action2') {
      const data = GetUser(2)
      console.log(data)
    }
};
/*
  const onClick = async () => {
    const data = await testJWT()
    console.log(data)
}
*/
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center  p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <Button  onClick={() => handleButtonClick('action1')} type="button" variant="outline" size="sm">Send</Button>
      <Button  onClick={() => handleButtonClick('action2')} type="button" variant="outline" size="sm">Send</Button>
      </main>
    </div>
  );
}
