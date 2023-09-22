import React from 'react'
import MenImage from './men-talking-on-the-mobile.png'
export default function HomePage() {
  return (
    <>
        <main className='sm:py-8
                         md:py-10
                         lg:py-12 
                         xl:py-14
                         2xl:py-10 flex py-4 bg-fuchsia-300'>
            <div className='sm:ml-10 
                            md:ml-12
                            lg:ml-14
                            xl:ml-18
                            2xl:ml-20 2xl:py-10 ml-4 '>
                <h1 className='sm:text-[25px] 
                               md:text-[35px]
                               lg:text-[50px]
                               xl:text-[60px]
                               2xl:text-[70px] font-bold antialiased	'>Best Mobile in the Chhapra</h1>
                <p className='sm:text-[16px] sm:w-4/5
                              md:text-[18px]
                              lg:text-[20px]
                              xl:text-[22px]
                              2xl:text-[24px] text-[11px]'>Research Online: Look for online reviews, tech websites,<br/> and customer feedback to identify popular and highly-rated  mobile phones in your price range.</p>
                <button className='
                            lg:text-[16px] lg:px-6 lg:py-3
                            xl:text-[18px] xl:px-7 xl:py-3 xl:mt-5
                            2xl:text-[20px] 2xl:px-7 2xl:py-3 2xl:mt-6 2xl:border-l-4 bg-yellow-400 hover:bg-yellow-500 mt-2 border-l-2 border-black  text-[12px] px-2 py-1 rounded-sm '>Buy Now</button>
                <button className='
                            lg:text-[16px] lg:px-6 lg:py-3
                            xl:text-[18px] xl:px-7 xl:py-3 xl:mt-5
                            2xl:text-[20px] 2xl:px-7 2xl:py-3 2xl:mt-6 2xl:border-l-4 bg-yellow-400 hover:bg-yellow-500 mt-2 border-l-2 border-black  text-[12px] px-2 py-1 rounded-sm ml-3'>Coupon</button>
            </div>
            <img className='sm:mr-10 sm:mt-0 sm:h-44
                            md:mr-12 md:mt-0 md:h-52 
                            lg:mr-14 lg:mt-0 lg:h-72
                            xl:mr-18 xl:mt-0 xl:h-80
                            2xl:mr-20 2xl:mt-0 2xl:h-[500px]  h-36 mr-1 mt-5 ' src={MenImage} alt="#" />
        </main>
    </>
  )
}
