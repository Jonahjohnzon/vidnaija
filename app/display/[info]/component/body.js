import React from 'react'
import { FaStar } from "react-icons/fa";
import Button from '@/app/component/frontpage/button';
import { IoChatboxEllipses } from "react-icons/io5";
import { useRouter } from 'next/navigation';

const Data=({Datas})=>{
const router = useRouter()
    const info = Datas.map((e)=>{
        const comment = e.comment.length
        
        return(
            <div key={e._id} className=' mb-10 mx-3' onClick={()=>router.push(`/showcase/${e._id}`)}>
                <div style={{backgroundImage:`url(${e.image})`}} className=' relative w-[200px]  flex justify-center mb-2 items-center h-[300px] bg-cover group sm:cursor-pointer'>
                    <div className=' absolute w-full h-full bg-black z-30 opacity-20 group-hover:opacity-70 transition-all duration-500 '></div>
                    <div className=' relative z-40 opacity-0 group-hover:opacity-100 flex flex-col items-center ease-in-out transition-all duration-700'>
                       <div > <Button name="DOWNLOAD"   url={`/showcase/${e._id}`} /></div>
                        <div className=' flex items-center'><IoChatboxEllipses /> <p className=' ml-1'>{comment}</p></div>
                        </div>
                    <div className=' text-white font-bold absolute left-3 bottom-2 w-3/4'>

                    </div>
                </div>
                <div>
                <p className=' font-bold text-white text-sm w-[200px] '>{e.title}</p>
                        <div className=' flex items-center'><div className=' text-yellow-400 mr-1'><FaStar /></div><div className=' font-semibold text-white'>{e.rating} <span className=' text-xs font-bold text-[#A5AFBE]'>/10</span></div></div>
                </div>
            </div>
        )
    })
    return info
}

const Body = ({Datas,info}) => {

  return (
    <main>
            <div>
            <header className=' font-bold text-2xl text-white mb-5 flex items-center justify-between'></header>
            <ul className=' font-bold text-sm flex items-center mb-8'>
                <li className=' mr-7 hover:text-yellow-500 sm:cursor-pointer text-yellow-500'>#{info.toUpperCase()}</li>
            </ul>
            <div className=' flex flex-wrap justify-center sm:justify-between '>
                <Data Datas={Datas}/>
            </div>
        </div>
    </main>
  )
}

export default Body