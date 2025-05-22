"use client" 
import React from 'react';
import {
    motion,
} from "motion/react"
import Link from "next/link";
function Card(){


    return (
        <div className="flex items-center font-jet justify-center">


            <div className="flex flex-col items-center justify-center w-lg bg-white">

                <div className="w-full h-30 bg-gradient-to-r from-pink-500 to-orange-500">
                    <div className="flex justify-center mt-17">
                        <img
                            src="https://placehold.co/100 "
                            alt="Profile Picture"
                            className="rounded-full z-10"
                        />
                    </div>
                </div>


                <div className="max-w-md px-4 py-8 bg-white shadow-lg rounded-lg">
                    {/* Avatar */}


                    {/* Name */}
                    <h1 className="text-2xl font-bold text-center mt-4 mb-2">Николай Матвеев</h1>
                    <p className="text-[#374151] text-center mb-4">Разработчик JS/TS Fullstack & UX/UI дизайнер</p>

                    {/* Contacts */}
                    <div className="mb-4">
                        <div className="flex items-center mb-2">

                            <a href="mailto:nclaus.code@gmail.com" className="ml-2 text-[#374151] hover:underline">
                                nclaus.code@gmail.com
                            </a>
                        </div>
                        <div className="flex items-center mb-2">

                            <p className="ml-2 text-[#374151]">+7 (123) 456-78-90</p>
                        </div>
                        <div className="flex items-center mb-2">

                            <a href="https://www.white-shard.ru " className="ml-2 text-[#374151]hover:underline">
                                www.white-shard.ru
                            </a>
                        </div>
                    </div>

                    {/* QR-Code*/}
                    <div className="flex justify-center mb-4">
                        <img src="https://placehold.co/150"
                            alt="QR-Code"
                            className="w-80 h-80 " />
                    </div>

                    {/* Text */}
                    <p className="text-[#374151] mb-4">
                        Fullstack разработчик JavaScript. Работаю с React, Node.js, Express и базами данных. Создаю современные веб-приложения с акцентом на качество и производительность.
                    </p>

                    <motion.button className="bg-gray-200 w-full h-15 rounded-md gap-2 px-5"
                        whileHover={{
                            scale: 0.9,
                            transition: { duration: 0.4 },
                        }}
                        whileTap={{ scale: 0.7 }}>
                        <Link href=""> <p className=" widefold-on-small-width text-3xl text-center text-balance gradient font-jet p-1 ">
                            Поделиться</p></Link>
                    </motion.button>

                </div>
            </div>
        </div>
    );
};

export default Card;