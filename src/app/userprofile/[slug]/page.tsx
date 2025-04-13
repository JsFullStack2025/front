'use client'

import Image from "next/image";
import "./stylePageUP.css";

import { Button } from '@/components/ui/button'

import testFetch from '@/lib/api/test-fetch'

export default function UserProfile() {

     const onClick = async () => {
         const data = await testFetch()
         console.log(data)
     }

  return (
    <div className="h-screen font-sans  overflow-y-auto">
    <form>
        <fieldset>
            <div className="flex items-center flex-wrap sm:flex-nowrap gap-8 justify-between p-8 h-screen">
                <div
                    className="flex flex-col bg-white text-gray-800 p-6 rounded-lg w-full sm:w-1/3 sm:min-w-sm sm:h-3/4 overflow-y-auto">
                    <div className="mb-6 ">
                        <h2 className="text-xl text-center">Редактировать профиль</h2>

                    </div>
                   <Button onClick={onClick} type="button" variant="outline" size="sm">Send</Button>
                    <div className="flex justify-center mb-6 gap-4 items-center ">

                        <Image className="w-32 h-32 rounded-full border-2 border-indigo-300" src="/img/foto.jpg"
                            alt="Profile Picture"
                            width={124}
                            height={124}
                            priority/>
                        <div className="w-full text-field">
                            <label htmlFor="name" className="block text-sm">Имя пользователя:</label>

                            <div className="text-gray-500">
                                @Erin_Lindford
                            </div>
                        </div>
                    </div>
                    <div className="mb-4 text-field">
                        <label htmlFor="email" className="block text-sm">Электронная почта</label>
                        <div className="text-field__icon text-field__icon_email">
                            <input type="email" id="email" name="email" required
                                className="w-full p-2 mt-2 rounded-lg text-field__input"
                                placeholder="Введите электронную почту"/>
                        </div>

                    </div>
                    <div className="h-full flex flex-row items-end justify-end">
                        <button className="bg-gradient text-white py-1 px-3  rounded-md ">
                            <svg className="icon-button" width="20" height="20"
                                viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M14.1667 17.5V10.8333H5.83333V17.5M5.83333 2.5V6.66667H12.5M15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H13.3333L17.5 6.66667V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5Z"
                                    stroke="#F3F3F3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <span>Сохранить</span>

                        </button>
                    </div>


                </div>


                <div className="bg-white text-gray-800 rounded-lg w-full sm:h-3/4 sm:min-w-xl overflow-y-auto mb-8 sm:mb-0">
                    <div className="flex justify-between items-center rounded-t-lg  h-15 px-8 bg-header-project-list">
                        <h2 className="text-xl text-white">Проекты</h2>
                        <button className="bg-gradient text-white py-1 px-3  rounded-md"><svg className="icon-button" width="27"
                                height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.3994 5V19M5.58301 12H21.2158" stroke="#F3F3F3" stroke-width="2.5"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            Новый проект
                        </button>

                    </div>
                    <ul className="p-6">
                        <li className="flex flex-row justify-between items-center h-min">
                            <button className=""><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 21C6.45 21 5.97917 20.8042 5.5875 20.4125C5.19583 20.0208 5 19.55 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.8042 20.0208 18.4125 20.4125C18.0208 20.8042 17.55 21 17 21H7ZM17 6H7V19H17V6ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z"
                                        fill="#49454F" />
                                </svg>
                            </button>
                            <span className="grow mx-5">Проект 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto blanditiis debitis nesciunt, dicta sapiente facere nulla aperiam animi qui nemo rem? Id, nam dolor fugit sed veniam optio mollitia a.</span>
                            <button className="text-blue-500"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M5 19H6.425L16.2 9.225L14.775 7.8L5 17.575V19ZM3 21V16.75L16.2 3.575C16.4 3.39167 16.6208 3.25 16.8625 3.15C17.1042 3.05 17.3583 3 17.625 3C17.8917 3 18.15 3.05 18.4 3.15C18.65 3.25 18.8667 3.4 19.05 3.6L20.425 5C20.625 5.18333 20.7708 5.4 20.8625 5.65C20.9542 5.9 21 6.15 21 6.4C21 6.66667 20.9542 6.92083 20.8625 7.1625C20.7708 7.40417 20.625 7.625 20.425 7.825L7.25 21H3ZM15.475 8.525L14.775 7.8L16.2 9.225L15.475 8.525Z"
                                        fill="#49454F" />
                                </svg>
                            </button>
                        </li>
                        <li className="flex justify-between items-center ">
                            <button className=""><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 21C6.45 21 5.97917 20.8042 5.5875 20.4125C5.19583 20.0208 5 19.55 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.8042 20.0208 18.4125 20.4125C18.0208 20.8042 17.55 21 17 21H7ZM17 6H7V19H17V6ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z"
                                        fill="#49454F" />
                                </svg>
                            </button>
                            <span className="grow mx-5">Проект 2</span>
                            <button className="text-blue-500"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M5 19H6.425L16.2 9.225L14.775 7.8L5 17.575V19ZM3 21V16.75L16.2 3.575C16.4 3.39167 16.6208 3.25 16.8625 3.15C17.1042 3.05 17.3583 3 17.625 3C17.8917 3 18.15 3.05 18.4 3.15C18.65 3.25 18.8667 3.4 19.05 3.6L20.425 5C20.625 5.18333 20.7708 5.4 20.8625 5.65C20.9542 5.9 21 6.15 21 6.4C21 6.66667 20.9542 6.92083 20.8625 7.1625C20.7708 7.40417 20.625 7.625 20.425 7.825L7.25 21H3ZM15.475 8.525L14.775 7.8L16.2 9.225L15.475 8.525Z"
                                        fill="#49454F" />
                                </svg>
                            </button>
                        </li>
                        <li className="flex justify-between items-center  ">
                            <button className=""><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 21C6.45 21 5.97917 20.8042 5.5875 20.4125C5.19583 20.0208 5 19.55 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.8042 20.0208 18.4125 20.4125C18.0208 20.8042 17.55 21 17 21H7ZM17 6H7V19H17V6ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z"
                                        fill="#49454F" />
                                </svg>
                            </button>
                            <span className="grow mx-5">Проект 3</span>
                            <button className="text-blue-500"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M5 19H6.425L16.2 9.225L14.775 7.8L5 17.575V19ZM3 21V16.75L16.2 3.575C16.4 3.39167 16.6208 3.25 16.8625 3.15C17.1042 3.05 17.3583 3 17.625 3C17.8917 3 18.15 3.05 18.4 3.15C18.65 3.25 18.8667 3.4 19.05 3.6L20.425 5C20.625 5.18333 20.7708 5.4 20.8625 5.65C20.9542 5.9 21 6.15 21 6.4C21 6.66667 20.9542 6.92083 20.8625 7.1625C20.7708 7.40417 20.625 7.625 20.425 7.825L7.25 21H3ZM15.475 8.525L14.775 7.8L16.2 9.225L15.475 8.525Z"
                                        fill="#49454F" />
                                </svg>
                            </button>
                        </li>
                        <li className="flex justify-between items-center">
                            <button className=""><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 21C6.45 21 5.97917 20.8042 5.5875 20.4125C5.19583 20.0208 5 19.55 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.8042 20.0208 18.4125 20.4125C18.0208 20.8042 17.55 21 17 21H7ZM17 6H7V19H17V6ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z"
                                        fill="#49454F" />
                                </svg>
                            </button>
                            <span className="grow mx-5">Проект 4</span>
                            <button className="text-blue-500"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M5 19H6.425L16.2 9.225L14.775 7.8L5 17.575V19ZM3 21V16.75L16.2 3.575C16.4 3.39167 16.6208 3.25 16.8625 3.15C17.1042 3.05 17.3583 3 17.625 3C17.8917 3 18.15 3.05 18.4 3.15C18.65 3.25 18.8667 3.4 19.05 3.6L20.425 5C20.625 5.18333 20.7708 5.4 20.8625 5.65C20.9542 5.9 21 6.15 21 6.4C21 6.66667 20.9542 6.92083 20.8625 7.1625C20.7708 7.40417 20.625 7.625 20.425 7.825L7.25 21H3ZM15.475 8.525L14.775 7.8L16.2 9.225L15.475 8.525Z"
                                        fill="#49454F" />
                                </svg>
                            </button>
                        </li>
                        <li className="flex justify-between items-center ">
                            <button className=""><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 21C6.45 21 5.97917 20.8042 5.5875 20.4125C5.19583 20.0208 5 19.55 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.8042 20.0208 18.4125 20.4125C18.0208 20.8042 17.55 21 17 21H7ZM17 6H7V19H17V6ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z"
                                        fill="#49454F" />
                                </svg>
                            </button>
                            <span className="grow mx-5">Проект 5</span>
                            <button className="text-blue-500"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M5 19H6.425L16.2 9.225L14.775 7.8L5 17.575V19ZM3 21V16.75L16.2 3.575C16.4 3.39167 16.6208 3.25 16.8625 3.15C17.1042 3.05 17.3583 3 17.625 3C17.8917 3 18.15 3.05 18.4 3.15C18.65 3.25 18.8667 3.4 19.05 3.6L20.425 5C20.625 5.18333 20.7708 5.4 20.8625 5.65C20.9542 5.9 21 6.15 21 6.4C21 6.66667 20.9542 6.92083 20.8625 7.1625C20.7708 7.40417 20.625 7.625 20.425 7.825L7.25 21H3ZM15.475 8.525L14.775 7.8L16.2 9.225L15.475 8.525Z"
                                        fill="#49454F" />
                                </svg>
                            </button>
                        </li>

                    </ul>
                </div>
            </div>
        </fieldset>
    </form>
</div>
  );
}
