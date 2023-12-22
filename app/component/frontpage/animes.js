import React from 'react'
import { FaStar } from "react-icons/fa";
import Button from './button';
import { IoChatboxEllipses } from "react-icons/io5";
import { BiSolidGrid } from "react-icons/bi";
import { useRouter } from 'next/navigation';
import Ads from '@/app/ads/ads';

const Animes = ({header, Datas}) => {
    const router = useRouter()
    const Data = ()=>{
        const info = Datas.map((e)=>{
            const comment = e.comment.length
            
            return(
                <div key={e._id} className=' mb-5 lg:mb-0 lg;:mr-0 mr-5'>
                    <div style={{backgroundImage:`url(${e.image})`}} className=' relative 2xl:w-[200px] w-[200px] h-[300px] lg:w-[150px] xl:w-[180px] 3xl:w-[260px] flex justify-center items-center lg:h-[220px] xl:h-[250px] 2xl:h-[300px] 3xl:h-[380px] bg-cover group cursor-pointer' onClick={()=>router.push(`/showcase/${e._id}`)}>
                        <div className=' absolute w-full h-full bg-black z-30 opacity-20 group-hover:opacity-70 transition-all duration-500 '></div>
                        <div className=' relative z-30 opacity-0 group-hover:opacity-100 flex flex-col items-center ease-in-out transition-all duration-700'>
                            <Button name="DOWNLOAD" url={`/showcase/${e._id}`}/>
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
    <main className=' pb-10 mb-20 flex justify-between items-center w-[90vw]'>
        <div className=' w-[100%] 2xl:w-[65%]'>
            <header className=' font-bold text-2xl text-white mb-5 flex items-center justify-between'><div>{header}</div><div className='flex items-center text-sm text-[#A5AFBE]'><BiSolidGrid  className=' text-yellow-500'/></div></header>
            <ul className=' font-bold text-sm flex items-center mb-8'>
                <li className=' mr-7 hover:text-yellow-500  text-yellow-500'>#LATEST</li>
                <li className='hover:text-yellow-500 hidden sm:block text-yellow-500'>#MOST REVIEWED</li>
            </ul>
            <div className=' flex xl:justify-between overflow-x-scroll scrollbar-none'>
                <Data/>
            </div>
        </div>
        <div className=' w-[35%] 2xl:flex flex-col items-center justify-between hidden'>
            <Ads/>
        </div>
     
    </main>
  )
}

export default Animes