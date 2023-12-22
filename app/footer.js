"use client"
import React from 'react'
import Link from  'next/link'

const Footer = ({date}) => {
  return (
    <footer  className='  w-full  bg-[#111E34] flex min-h-[300px] relative'>
        <main className=' justify-center w-full flex  items-center'>
            <div className=' 3xl:w-[65%] w-[92%] xl:w-[85%] py-14 lg:py-0 lg:items-center flex-col lg:flex-row flex justify-between'>
                <section>
                    <img src='/logos.png'/>
                    <ul>
                        <li className='font-bold  text-xl mb-4'>Nigeria, Abuja</li>
                    </ul>
                </section>
                <section>
                    <header className='font-bold text-white text-xl mb-4'>Socal Media</header>
                    <ul>
                        <li className=' hover:text-yellow-500 cursor-pointer'><Link href="https://twitter.com/vidnaija" >Twitter</Link></li>
                        <li className=' hover:text-yellow-500 cursor-pointer'>Telegram</li>
                    </ul>
                </section>
                <section>
                    <header className='font-bold text-white text-xl mb-4' >Resources</header>
                    <ul>
                        <li className=' hover:text-yellow-500 cursor-pointer'><Link href="/dmca">DMCA Takedown</Link></li>
                    </ul>
                </section>
                <section className=' '>
                <header className='font-bold text-white text-xl mb-4' >Newsletter</header>
                <p className='mb-3 w-60 xl:w-full '>Subscribe to our newsletter system now
                 to get latest news from us</p>
                 <form className=' flex flex-col items-start'>
                    <input type='text' placeholder='Enter your email..' className=' w-full lg:w-60 xl:w-80 h-10  bg-transparent border-[#A5AFBE] border-[1px] px-3 mb-3  text-sm'/>
                    <input onClick={()=>window.location.reload()} type='submit' value="SUBSCRIBE >" className=' text-red-500 font-bold text-sm cursor-pointer'/>
                </form>
                </section>
             
            </div>
        </main>
        <section className=' absolute bottom-0 w-full left-0 h-10 flex justify-center bg-[#141935] bg-opacity-60'>
            <div className=' flex items-center w-[65%]'>
                <p className=' mr-1'>&copy;</p>
                <p>{date} Vidnaija. Deigned by Midnight</p>
            </div>
        </section>
    </footer>
  )
}

export default Footer