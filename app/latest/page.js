"use client"
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Loading from '../loading'

const page = () => {
  const [list, setlist] = useState()
  const [load,setload] = useState(true)
  const router = useRouter()
  const Gets =async()=>{
    setload(true)
    const data = await fetch("http://79.133.57.156:8000/latest")
    const result = await data.json()
    setlist(result)
    setload(false)
  }

  useEffect(()=>{
    Gets()
  },[])
  return (
    <>{load?
      <Loading/>:
    <div className=' min-h-[100vh] pt-32'>
                <section className=' w-full flex flex-col items-center justify-center mt-10 '>
              <h1 className=' font-bold text-white text-3xl mb-10'>NEWEST UPLOAD</h1>
              <div className=' w-[80%]'>
            <div className=' flex flex-wrap justify-between'>
                {list.map((e)=>{
                  const season = e.seasons.length
                  const episode = e.seasons[season - 1].episode.length
                    function padWithZero(number) {
                  let numberString = number.toString();
                    return numberString.length === 1 ? '0' + numberString : numberString;
                   }
                  const s = padWithZero(season)
                  const ep = padWithZero(episode)
                  const tit = e.title+ "  " + `S${s}E${ep}`
                  return(
                    
                    <div className=' flex flex-col items-center group  mb-5 px-2 ' key={e._id}>
                      <div><div style={{backgroundImage:`url(${e.image})`}} className=' rounded-full border-white border-[2px] group-hover:border-yellow-500 w-[100px]  flex justify-center items-center h-[100px] bg-cover group sm:cursor-pointer' onClick={()=>router.push(`/showcase/${e._id}`)}></div></div>
                      <div  className=' mb-5 text-white  sm:cursor-pointer group-hover:text-yellow-500 whitespace-normal ' onClick={()=>router.push(`/showcase/${e._id}`)}>{tit.toUpperCase()}</div></div>
                  )
                })
                  
                }
              </div>
              </div>
            </section>
    </div>}</>
  )
}

export default page