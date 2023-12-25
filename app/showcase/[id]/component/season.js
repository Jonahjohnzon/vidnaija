"use client"
import React, { useState, useEffect } from 'react'
import { FaAngleDown } from "react-icons/fa";
import Link from "next/link"
const Season = ({season,seano, setseason,seasonno,  setload}) => {
    const [co, setco] = useState(false)
    const [sno, setsno] = useState(1)
    console.log(season)
    const result = Array.from({ length: seano }, (_, i) => i + 1);
    const Episode = ({array}) =>{
    
        const data = array?.map((e)=>{
            return(
                <Link href={{pathname:"/download",query:{uri:e.link}}}  className=' mr-5 px-2 bg-red-500 font-bold mb-10 text-white py-1 rounded-sm'>Episode {e.no}</Link>
            )
        })
        return data
    }
    
    const Seasons = () =>{
        const data = result.map((e)=>{
            return(
                <div  key={e._id}   className=' py-2 w-full   px-10 border-[#020B19] bg-[#243651] border-2 ' onClick={()=>{
                    if(e !== seasonno)
                    {
                    setload(true)
                    setseason(e)}
                }}>
                         Season {e}   
                </div>
            )
        })
        return data
    }
    
useEffect(()=>{

},[])
  return (
    <div  className=' mt-5 flex f w-full'>

        <div className=' flex flex-col w-full'>
            <div className=' outline-none mb-9 w-fit relative  border-[#020B19] rounded-md flex items-center bg-[#243651] cursor-pointer text-white' onClick={()=>setco(!co)}>
            <h1 className=' font-bold px-7 py-2  text-lg'>Seasons</h1>
            <FaAngleDown className=' mx-2' />
            {co &&<div className=' absolute  top-12'><Seasons /></div>}
            </div>
            <div><h1 className=' text-white font-bold mb-5 text-xl underline'>Season {seasonno}</h1></div>
            <div className=' flex w-full flex-wrap'>
            <Episode array={season?.episode}/>
            </div>
        </div>
    </div>
  )
}

export default Season