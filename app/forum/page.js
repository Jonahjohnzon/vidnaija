"use client"
import React, { useEffect, useState } from 'react'
import Welcome from './component/welcome'
import Loading from '../loading'
import Group from './component/group'

const page = () => {
const [load, setload] = useState(false)
const [data, setData]  = useState()
const Get = async() =>{
const Data = await fetch('http://localhost:8000/getGroup')
try{const Info =await Data.json()
setData(Info)
setload(true)}
catch(e)
{
    console.log(e)
}
}
useEffect(()=>{
Get()
},[])
  return (
    <main className='min-h-[100vh] flex justify-center mb-32'>
        {load?<section className=' pt-28 w-[80%]'>
       <div className='bg-[#383B42] border-2 border-blue-500 rounded-sm'> <Welcome/></div>
        <div className=' mt-10'>
        {
        <Group data={data}/>}
        </div>
        </section>:<Loading/>}
    </main>
  )
}

export default page