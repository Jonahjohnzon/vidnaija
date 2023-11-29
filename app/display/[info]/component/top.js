import React from 'react'
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link"
import { IoSearch } from "react-icons/io5";

const Top = ({info}) => {
  return (
    <main className=" relative bg-[url('/slider-bg2.jpg')]   w-[100vw] overflow-hidden text-[#A5AFBE] flex justify-center  bg-cover bg-no-repeat ">
        <div className=' absolute w-full h-full bg-black bg-opacity-40'></div>
        <form>
          
        </form>
        <div className=' flex justify-end flex-col w-full items-center py-32 relative z-40'>
        <div className=' w-1/2 mb-4 flex items-center'><select className='h-14 border-y-4  outline-none border-l-4 border-r-[1px] border-[#020B19] bg-[#243651] px-7 text-white'>
          <option>Hollywood</option>
          <option>Bollywood</option>
          <option>Nollywood</option>
          </select><input type='text' placeholder='Search for Movie or TV Show' className='px-4 font-medium w-full h-14 border-y-4  outline-none border-[#020B19] bg-[#243651] text-white'/>
          <div className='h-14 border-y-4 border-r-4  border-[#020B19] bg-[#243651] text-white flex items-center px-3 text-2xl'><IoSearch /></div>
          </div>
            <header className=' font-bold text-4xl text-white mb-5'>MOVIE LISTING - {info.toUpperCase()}</header>
            <div className=' flex items-center'><Link href={"/"}><p className=' mr-3 text-blue-500 cursor-pointer'>HOME</p></Link> <p className='text-xs mr-3'><FaChevronRight/></p><p>{info.toUpperCase()}</p></div>
        </div>
    </main>
  )
}

export default Top