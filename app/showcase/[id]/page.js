"use client"
import React, { use, useEffect, useState } from 'react'
import { Data } from '../../API/api'
import Top from './component/top'
import Body from './component/body'
import Note from './note'
import Chat from '@/app/chatbox/chat'
import Loading from '@/app/loading'
import { Formik } from 'formik'
import Commentss from '@/app/comment'

const Showcase = ({params}) => {
  const [load, setload] = useState(true)
  const [disable, setDisable] = useState(false)
  const [comment_display, setDispay] = useState(false)
  const [data, setdata] = useState()
    const id = params?.id
    const Result = async()=>{
        const info = await fetch(`http://localhost:8000/getGame/${id}`)
        const data_ = await info.json()
        setdata(data_)
        setload(false)
    }
   useEffect(()=>{
  Result()
   },[])
  return (
      <>
    {load?<Loading/>:<main className=' overflow-x-hidden relative flex flex-col items-center '>
      <Top data={data}/>
    <div className='w-[56%]'>
      <div className=' mb-10'>
        <Body data={data}/>
        </div>
        <section className='mb-10'>
          <div>
            <h1 className=' font-bold text-white mb-5 text-xl'>Comments: </h1>
          </div>
          <div className='border-[1px] border-gray-600'>
          <div className='border-[1px] border-gray-600 m-1'>
          <Chat chat={data.comment}/>
          </div></div>
        </section>
      <Commentss url={`http://localhost:8000/postComment/${id}`}  comment_display={comment_display} setDispay={setDispay}  setDisable={ setDisable} disable={disable} Result={Result}/>
        <section  className=' w-full mb-5 mt-40'>
          <div className=' '>
        <Note/>
        </div>
        </section>
    </div>
    </main>}</>
  )
}

export default Showcase