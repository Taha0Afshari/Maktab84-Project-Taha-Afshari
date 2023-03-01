import React from 'react'
import { RxPerson } from 'react-icons/rx'
import { BsBag } from 'react-icons/bs'

export const Header = () => {
    return (
        <>
            <nav className="bg-[#222222] flex justify-center items-center px-2 sm:px-4 py-3 fixed w-full z-20 top-0 ">
                <div className="grid grid-cols-3 items-center w-full">
                    <div className='justify-self-start gap-5 flex justify-center items-center'>
                        <a href="#" className="flex  items-center">
                            <img src="assets\images\logo-lcman-footer.svg" className="w-full h-full" alt="LC-Man Logo" />
                        </a>
                        <div className='flex gap-2 border rounded-lg justify-center justify-self-start items-center '>
                            <input className='h-10 bg-transparent border-transparent ' type='text' placeholder='جستجو' id='HeaderSearchBar' />
                            <div className='w-10 h-10'>
                                <svg className="w-full h-full p-1 text-white bg-transparent" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                            </div>
                        </div>
                    </div>
                    <div className="items-center justify-self-center justify-between hidden w-full md:flex md:w-auto " id="navbar-sticky">
                        <ul className="flex flex-col p-4 mt-4 border rounded-lg md:flex-row gap-8 md:mt-0 md:text-sm md:font-medium md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="#" className="block py-2 pl-3 pr-4 text-white rounded items-center hover:border-b-4 hover:border-white" aria-current="page">محصولات</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pl-3 pr-4 text-white rounded items-center hover:border-b-4 hover:border-white">فروشگاه ها</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pl-3 pr-4 text-white rounded items-center hover:border-b-4 hover:border-white">درباره ما</a>
                            </li>
                        </ul>
                    </div>
                    <div className="justify-self-end gap-2 flex justify-center items-center">
                        <button className='flex gap-2 rounded justify-center text-white text-lg items-center hover:border-b-4 hover:border-white'>
                            <span>
                                ورود
                            </span>
                            <RxPerson className='text-2xl' />
                        </button>
                        <span className='text-white text-lg'>
                            |
                        </span>
                        <button className='flex gap-2 justify-center rounded text-white text-base items-center hover:border-b-4 hover:border-white'>
                            <span>سبد خرید/ 0 تومان</span>
                            <BsBag className='text-2xl' />
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}
