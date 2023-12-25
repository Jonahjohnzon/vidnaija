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
    const data = await fetch("https://vidnaija.com.ng:8443/latest")
    const result = await data.json()
    setlist(result)
    setload(false)
  }

  useEffect(() => {
    // Load the external script
    const script = document.createElement('script');
    script.src = 'https://mutcheng.net/400/6809566';
    script.async = true;
    document.body.appendChild(script);

    // Clean up the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []); 
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
                  const episode = e.seasons[season - 1]?.episode.length
                    function padWithZero(number) {
                  let numberString = number?.toString();
                  if(numberString)
                  {
                    return numberString?.length === 1 ? '0' + numberString : numberString;
                  }
                  else{
                    return 0
                  }
                   }
                  const s = padWithZero(season)
                  const ep = padWithZero(episode)
                  const tit = e.title+ "  " + `S${s}E${ep}`
                  return(
                    
                    <a href={`/showcase/${e._id}`} onClick={()=>window.open("//greewepi.net/4/6809571")} className=' flex flex-col items-center group  mb-5 px-2 ' key={e._id}>
                      <div><div style={{backgroundImage:`url(${e.image})`}} className=' rounded-full border-white border-[2px] group-hover:border-yellow-500 w-[100px]  flex justify-center items-center h-[100px] bg-cover group sm:cursor-pointer' onClick={()=>router.push()}></div></div>
                      <div  className=' mb-5 w-[100px] text-white  sm:cursor-pointer group-hover:text-yellow-500 text-center break-all' >{tit.toUpperCase()}</div></a>
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