"use client"
import { useEffect, useState } from "react";
import Second from "./component/frontpage/second";
import Top from "./component/frontpage/top";
import Trailer from "./component/frontpage/trailer";
import Animes from "./component/frontpage/animes";
import Loading from "./loading";



export default function Home() {
  const [datas,setdatas] = useState()
  const [second, setSecond] = useState()
 const [third, setThird] = useState()
 const [fourth, setFourth] = useState()
 const [anime, setanime]  = useState()
 const [load, setload] = useState(false)
  const First =async()=>{
    const url = "http://localhost:8000/getcate"
    try{
    const games = await fetch(url)
    const Data = await games.json()
    if(Data)
    {
    setload(true)
    const info  = Data?.top
    const secondinfo  = Data?.hollywood
    const thirdinfo  = Data?.bollywood
    const fourthinfo  = Data?.nollywood
    const ani = Data.datak
    setdatas(info)
    setSecond(secondinfo)
    setThird(thirdinfo)
    setFourth(fourthinfo)
    setanime(ani)}}

    catch(e){
            console.log(e)
    }
  }
  useEffect(()=>{
    First()
  },[])
  return (
    <main className="flex min-h-screen w-full flex-col items-center overflow-x-hidden justify-between">
     { load  ?<section className=" flex flex-col items-center">
      <Top Datas={datas}/>
      <div className=" w-[88%] overflow-hidden pt-16">
      <Second header={"HOLLYWOOD RELEASE"} Datas={second} />
      <Second header={"BOLLYWOOD RELEASE"} Datas={third}/>
      <Second header={"NOLLYWOOD RELEASE"} Datas={fourth}/>
      </div>
      <Trailer/>
      <div className=" w-[88%] overflow-hidden pt-16"><Animes header={"K-SERIES RELEASE"} Datas={anime} /></div>
     </section>:<Loading/>}
    </main>
  )
}

