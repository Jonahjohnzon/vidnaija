"use client"
import React, { useEffect, useState } from 'react'

const Imagesprofile = ({src}) => {
const [usr, setusr] = useState('/profileimage/1')
const Get = () =>{
    if(src  == '1')
    {
        setusr('/profileimage/2.png')
    }
    else if (src == '2')
    {
        setusr('/profileimage/3.png')
    }
    else if (src == '3')
    {
        setusr('/profileimage/4.png')
    }
    else if (src == '4')
    {
        setusr('/profileimage/5.png')
    }
    else if (src == '5')
    {
        setusr('/profileimage/6.png')
    }
    else if (src == '6')
    {
        setusr('/profileimage/7.png')
    }
    else if (src == '7')
    {
        setusr('/profileimage/7.png')
    }
    else
    {
        setusr('/profileimage/1.png')
    }
}

    useEffect(()=>{
        Get()
    },[])
  return (
    <img  src={usr} className=' border-black border-[1px] rounded-full'/>
  )
}

export default Imagesprofile