import React from 'react'
import { FaStar } from "react-icons/fa";
import Button from './button';
import { IoChatboxEllipses } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa";
import Ads from '@/app/ads/ads';

const Animes = ({header, Datas}) => {
    const Data = ()=>{
        const info = Datas.map((e)=>{
            const comment = e.comment.length
            
            return(
                <div key={e._id}>
                    <div style={{backgroundImage:`url(${e.image})`}} className=' relative w-[200px] flex justify-center items-center h-[280px] bg-cover group cursor-pointer'>
                        <div className=' absolute w-full h-full bg-black z-30 opacity-20 group-hover:opacity-70 transition-all duration-500 '></div>
                        <div className=' relative z-40 opacity-0 group-hover:opacity-100 flex flex-col items-center ease-in-out transition-all duration-700'>
                            <Button name="DOWNLOAD"  url={`/showcase/${e._id}`}/>
                            <div className=' flex items-center'><IoChatboxEllipses /> <p className=' ml-1'>{comment}</p></div>
                            </div>
                        <div className=' text-white font-bold absolute left-3 bottom-2 w-3/4'>
                            <p>{e.title}</p>
                            <div className=' flex items-center'><div className=' text-yellow-400 mr-1'><FaStar /></div><div className=' font-semibold text-xl'>{e.rating} <span className=' text-xs font-bold'>/10</span></div></div>
                        </div>
                    </div>
                </div>
            )
        })
        return info
    }
  return (
    <main className=' pb-10 mb-20 flex justify-between w-full'>
        <div className=' w-[65%] '>
            <header className=' font-bold text-2xl text-white mb-5 flex items-center justify-between w-[100%]'><div>{header}</div><div className='flex items-center text-sm text-[#A5AFBE]'><p>VIEW ALL </p><FaChevronRight/></div></header>
            <div className=' flex justify-between w-[100%]'>
                <Data/>
            </div>
        </div>
        <div className=' w-[35%] flex flex-col items-center justify-between'>
            <Ads/>
        </div>
    </main>
  )
}

export default Animes