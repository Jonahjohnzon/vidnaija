"use client"
import React, { useEffect, useState } from 'react'
import Top from './component/top'
import Body from './component/body'
import { FaCaretRight, FaCaretLeft } from "react-icons/fa6";
import { BiSolidGrid } from "react-icons/bi";
import Ads from '../../ads/ads';
import Loading from '../../loading'
import Note from '@/app/showcase/[id]/note';
import Pager from '@/app/pager';


const Display = ({params}) => {
  const [loads, setload] = useState(true)
    const info = params.info.toUpperCase()
    const [Data, setData] = useState()
    const [len, setlen] = useState()
    const [start, setstart] = useState(0)
    const [limit, setlimit] = useState(20)
    const [page , setpage] = useState(1)
    const [array, setArray] = useState()
    const [number, setnumber] = useState(1)
    const Get =async()=>{
      const data = await fetch(`http://localhost:8000/listGames/${info}?start=${start}&limit=${limit}`)
      try{
        const data_ = await data.json()
        setData(data_.info)
        const no = data_.length/20
        const round = Math.ceil(no)
        setpage(round)
        setlen(data_.length)
        setload(false)
        var myArray = [];
       for (var i = 1; i <= round; i++) {
       myArray.push(i);
       }
       setArray(myArray)
      }catch(e){
        console.log(e)
      }
    }
    useEffect(()=>{
      Get()
    },[limit])

    const Right = () =>{
      if (number < page)
      {
        setload(true)
        setstart((e)=>e + 20)
        setlimit((e)=>e + 20)
        setnumber((e)=>e + 1)
      }
    }
    const Left = () =>{
      if (number > 1)
      {
        setload(true)
        setstart((e)=>e - 20)
        setlimit((e)=>e - 20)
        setnumber((e)=>e - 1)
      }
    }
    const Move =(e)=>{
    setload(true)
    setstart((e * 20) - 20)
    setlimit(e * 20)
    setnumber(e)
    }
  return (
    <>
    {loads?<Loading/>:<div>
        <Top info={info}/>
        <div className='min-h-[180vh] flex flex-col items-center  relative mb-20'>
          <div className=' w-[60%] overflow-hidden pt-20 relative z-30 mb-20'>
            <div className=' h-[1px] bg-[#A5AFBE] bg-opacity-40'></div>
          <div className=' w-full  flex justify-between'>
            <div className=' py-1'>
            <p className=''>Found <span className=' text-blue-500 mx-1'>{len} movies </span>in total</p>
            </div>
            <section className=' flex items-center'>
              <p className=' pr-4'>Sort by:</p>
              <div className='bg-[#A5AFBE] bg-opacity-40 w-[1px] h-full mr-3'></div>
              <p><select className=' bg-[#03091A] border-none outline-none w-52 pr-3'>
                <option>Release date Descending</option>
                <option>Release date Ascending</option>
                </select></p>
                <div className='bg-[#A5AFBE] bg-opacity-40 w-[1px] h-full mr-3'></div>
                <BiSolidGrid  className=' text-yellow-500'/>
            </section>
          </div>
          <div className=' h-[1px] overflow-x-hidden w-full bg-[#A5AFBE] bg-opacity-40'></div>
          <Body Datas={Data} info={info}/>
          <div className=' h-[1px] bg-[#A5AFBE] bg-opacity-40'></div>
          <Pager number={number} Move={Move} array={array} page={page} type={"Movies"} Right={Right} Left={Left}/>
          <div className=' h-[1px] overflow-x-hidden w-full bg-[#A5AFBE] bg-opacity-40'></div>
        </div>
        <section className=' absolute right-0 top-40 z-20'>
          <div className=' w-[400px] mb-10 flex flex-col items-center'>
          <Ads/>
          <Ads/>
          </div>
          <div className=' w-[400px] flex flex-col items-center'>
          <Ads/>
          <Ads/>
          </div>
        </section>
        <section className=' absolute left-0 top-80 z-20'>
          <div className=' w-[400px] flex flex-col items-center'>
          <Ads/>
          <Ads/>
          </div>
        </section>
        <div className=' w-[60%]'>
          <Note/>
        </div>
        </div>
    </div>}</>
  )
}

export default Display