"use client"
import React, { useState } from 'react'
import Note from '../showcase/[id]/note'

const Page = ({searchParams}) => {
const openWindow = () => {
  window.open("//shulugoo.net/4/6809571", '_blank', 'rel=noopener noreferrer');
};
const handleButtonClick = () => {
  openWindow()
  window.location.href = searchParams.uri;
};
  return (
    <div className=' min-h-[100vh] pt-40 pb-20 flex justify-center items-center'>
      <div className=' flex flex-col justify-center items-centers'>
        <div className='flex justify-center mb-10'><img src='/logos.png' className=' sm:w-24 w-12'/></div>
        <div className=' flex justify-center mb-10 relative'><button className=' bg-red-600 hover:bg-red-800 text-white px-9 py-2 rounded-3xl font-semibold' onClick={handleButtonClick}>DOWNLOAD</button></div>
      <div className='px-5'><Note/></div>
      </div>
    </div>
  )
}

export default Page