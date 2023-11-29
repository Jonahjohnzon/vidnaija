"use client"
import React, { useState } from 'react'
import { trailer, anime } from '@/app/API/api'

const Info =({no})=>{
 
 const info = trailer.filter((e)=>e.id == no)
 const data = info.map((e)=>{
    return(
        <div key={e.id}>
        <div>
                                <iframe 
   className=' w-[740px] h-[441px]'
  src={e.scr} 
  title="YouTube video player" 
 allowFullScreen></iframe>
        </div>
        <div></div>
        </div>
    )
 })
 return data
}
const Control = ({no, setno}) =>{
    const info = trailer.map((e)=>{

        return(
            <div className=' py-3 w-full cursor-pointer pl-5 hover:bg-[#1F375F]' key={e.id} style={no==e.id?{backgroundColor:"#1F375F"}:{backgroundColor:""}} onClick={()=>setno(e.id)}>
                <div className=' flex items-start'>
                    <div className=' w-36 rounded-sm h-20 bg-cover mr-2' style={{backgroundImage:`url(${e.image})`}} ></div>
                    <p className=' font-bold whitespace-normal w-full'>{e.title}</p>
                </div>
            </div>
        )
    })
    return info
}
const Anime =()=>{
    const info = anime.map((e)=>{
        return(
            <div key={e.id}>
            <div className=' font-bold underline text-xl text-red-500 mb-3 w-full cursor-pointer hover:text-yellow-500' >{e.title}</div>
            </div>
        )
    })
    return info
}
const Trailer = () => {
    const [no,setno] = useState(0)
  return (
    <main className=' w-full py-20 bg-[#07101F]'>
        <div className=' flex flex-col items-center justify-center' >
        <header className=' font-bold text-2xl text-white mb-5 flex text-start w-[75%]'>UPCOMING MOVIES</header> 
                <div className=' w-[75%] flex justify-between items-center '>
                    <section className=' flex w-[78%] bg-[#0D172B]'>
                    <Info no={no}/>
                    <div className='  w-full overflow-y-scroll scrollbar-thumb-[#141935] h-[441px] scrollbar-[#03091A] scrollbar-thin'>
                    <Control no={no} setno={setno}/>
                    </div>
                    </section>
                    <section className=' w-[20%] h-[441px] overflow-y-scroll p-4 bg-[#0D172B] scrollbar-thumb-[#141935] scrollbar-[#03091A] scrollbar-thin'>
                        <div className=' '>
                            <header className=' font-bold text-xl mb-2'>LATEST ANIME</header>
                            <div className=' w-full h-[1px] bg-[#A5AFBE] mb-4'> </div>
                            <div className=' flex flex-col items-center'> 
                                <div style={{backgroundImage:`url("/demonslayer.png")`}} className=' mb-3 w-full bg-cover bg-center h-40 rounded-md'></div>
                                <div className=' w-full'><Anime/></div>
                            </div>
                        </div>
                    </section>
                </div> 
        </div>
    </main>
  )
}

export default Trailer