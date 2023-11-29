"use client"
import React, { useState, useEffect } from 'react'
import { FaAngleDown } from "react-icons/fa";
import Link from "next/link"
const Season = ({season}) => {
    const [array, setarray] = useState([])
    const [co, setco] = useState(false)
    const [sno, setsno] = useState(1)

    const Episode = ({array}) =>{
    
        const data = array.map((e)=>{
            return(
                <Link href={{pathname:"/download",query:{uri:e.link}}}  className=' mr-3 px-2 bg-red-500 font-bold text-white py-1 rounded-sm'>Episode {e.no}</Link>
            )
        })
        return data
    }
    
    const Seasons = () =>{
        const data = season.map((e)=>{
            return(
                <div  key={e._id}  onClick={()=>{setarray(e.episode)
                setsno(e.number)}} className=' py-2 w-full   px-10 border-[#020B19] bg-[#243651] border-2 '>
                         Season {e.number}   
                </div>
            )
        })
        return data
    }
useEffect(()=>{
if(season[0])
{setarray(season[0]?.episode)}
},[])
  return (
    <div  className=' mt-5 flex flex-wrap'>

        <div className=' flex flex-col'>
            <div className=' outline-none mb-9 w-fit relative  border-[#020B19] rounded-md flex items-center bg-[#243651] cursor-pointer text-white' onClick={()=>setco(!co)}>
            <h1 className=' font-bold px-7 py-2  text-lg'>Seasons</h1>
            <FaAngleDown className=' mx-2' />
            {co &&<div className=' absolute  top-12'><Seasons setarray={setarray}/></div>}
            </div>
            <div><h1 className=' text-white font-bold mb-5 text-xl underline'>Season {sno}</h1></div>
            <div className=' flex'>
            <Episode array={array}/>
            </div>
        </div>
    </div>
  )
}

export default Season