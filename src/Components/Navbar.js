import React from 'react'
import logo from './logo.png'
export default function Navbar() {
  return (
    <>
        <nav className='flex bg-purple-600 text-white'>
            <img className=' sm:ml-10 sm:h-12 sm:w-20
                             md:ml-12 md:h-14 md:w-24
                             lg:ml-14 lg:h-16 lg:w-32
                             2xl:ml-20  w-12 h-10 ml-4 py-2  '   src={logo} alt="" />
            <ul className=' sm:mr-10 sm:text-[20px]
                            md:mr-12 md:text-[22px]
                            lg:mr-14 lg:text-[24px] text-center w-full flex justify-end mr-4 py-2 text-[15px] font-semibold '>
                <li className='sm:mx-[10px]
                               md:mx-[12px]
                               lg:mx-[14px]
                               2xl:hover:bg-yellow-400 2xl:px-3 pt-1 rounded mx-[6px]'>Home</li>
                <li className='sm:mx-[10px]
                               md:mx-[12px]
                               lg:mx-[14px]
                               2xl:hover:bg-yellow-400 2xl:px-3 pt-1 rounded mx-[6px]'>Photo</li>
                <li className='sm:mx-[10px]
                               md:mx-[12px]
                               lg:mx-[14px]
                               2xl:hover:bg-yellow-400 2xl:px-3 pt-1 rounded mx-[6px]'>Video</li>
                <button className='
                               md:text-[12px] md:px-4
                               lg:text-[14px] lg:px-5
                               2xl:border-b-4 bg-yellow-400 hover:bg:yellow-500 border-b-2 border-black px-2 text-xs rounded-sm hover:bg-yellow-500'>Try Now</button>
            </ul>
        </nav>
        
    </>
  )
}
