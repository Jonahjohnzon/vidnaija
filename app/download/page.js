"use client"
import React from 'react'
import { useRouter } from "next/navigation"
import Note from '../showcase/[id]/note'
import Button from '../component/frontpage/button'

const Page = ({searchParams}) => {


  return (
    <div className=' min-h-[100vh] pt-40 pb-20 flex justify-center items-center'>
      <div className=' flex flex-col justify-center items-centers'>
        <div className='flex justify-center mb-10'><img src='/logos.png' className=' sm:w-full w-12'/></div>
      <div className=' flex justify-center mb-10'><Button name={"DOWNLOAD"} url={searchParams.uri}/></div>
      <div className='px-5'><Note/></div>
      </div>
    </div>
  )
}

export default Page