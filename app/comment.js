"use client"
import React,{useState,  useMemo} from 'react'
import dynamic from "next/dynamic";
import { Formik } from 'formik'

import 'react-quill/dist/quill.snow.css';


const Commentss = ({url, comment_display, disable, setDispay,setDisable,Result , setload}) => {
    
    const ReactQuill = useMemo(() => dynamic(() => import('react-quill'), { ssr: false }),[]);
    const [show, setshow] =  useState(false)
  return (
    <section className=" w-full">
    <Formik className=' w-full'
    initialValues={{chat:"",link:"",titles:"",wordings:""}}
    onSubmit={async(form,{resetForm})=>{
      setload(true)
      if(disable)
      {
        return}
      setDispay(true)
      setDisable(true)
      setshow(false)
      let value = true
      if(form.titles == "")
      {
        value = false
      }
      const obj ={
            name:"jonah",
            id_user:"12345",
            profile_image:"1",
            rank:1,
            star:10,
            reaction:0,
            title:value
      }
      const total = {...form,...obj}
        const data = await fetch(url,{
          method: "PUT",
          headers: { 'Content-Type': 'application/json' },
          body:JSON.stringify({comment:total})

        })
        try{
          const info = await data.json()
         
          Result()
          resetForm()
          setDisable(false)
          setDispay(false)
        }
        catch(e)
        {
          console.log(e)
          resetForm()
          setDisable(false)
          setDispay(false) 
          setload(false)

        }
    }}
    >
      {(probs)=>{
        return(
          <div className=' w-full'>
       <div className=' flex w-full items-center justify-between'>
        <h1 className=' text-white font-bold text-xl mb-5'>Comment</h1>
        <div className='relative' ><div onClick={()=>setshow(!show)} className='py-2 text-white rounded-md cursor-pointer hover:bg-yellow-500 px-6 bg-blue-500 font-bold '>Title Link</div>
        {show&&<div  className=' absolute  w-[570px] rounded-lg z-40  top-10 right-0 bg-[#0f2236]'>
          <div className=" w-full flex flex-col px-3 ">
           <div className='mb-3 flex flex-col justify-center'> <label className='text-white  mb-2 mt-3'>Title</label>
          <input type='text' className="   text-white h-9 px-2 bg-[#03091A]  border-[1px] outline-none  rounded-lg w-full" value={probs.values.titles} onChange={probs.handleChange('titles')}/></div>
          <div className='mb-5 flex flex-col'><label className=' text-white  mb-2'>Link</label>
          <input type='text' className=" h-9  text-white px-2 bg-[#03091A] border-white border-[1px] outline-none rounded-lg w-full" value={probs.values.link} onChange={probs.handleChange('link')}/></div>
          <div className='mb-5 flex flex-col'><label className=' text-white  mb-2'>Comment</label>
          <textarea rows={6} value={probs.values.wordings} onChange={probs.handleChange('wordings')}  className=' text-white px-2 bg-[#03091A] border-white border-[1px]  mb-4 outline-none rounded-lg w-full'/></div>
          <div className=' flex justify-center mb-4'><input type='submit' className=' bg-red-600 text-white px-9 py-2 rounded-3xl font-semibold cursor-pointer' value="CREATE"  onClick={probs.handleSubmit} /></div>
          </div>
          </div>}</div>
       </div>
      <div>
    <div className='border-[1px] relative border-gray-600 mb-20'>
      {comment_display&&<div className=' absolute w-full h-full flex justify-end items-end p-5 bg-black  bg-opacity-30 z-30'>
          <div >
  <div className=' w-10 h-10 rounded-full border-t-4 border-t-[#03091A] border-yellow-600 border-x-4 border-b-4 animate-spin flex justify-center items-center'>
  <div className=' w-6 h-6 rounded-full border-b-4 border-b-[#03091A] transform -scale-y-180 border-red-600 border-x-4 border-t-4 animate-spin'></div>
  </div>
  </div>
          </div>}
          <ReactQuill theme="snow" value={probs.values.chat} onChange={probs.handleChange('chat')}  className=' h-40 text-white'/>
        
        </div>
        <div><input type='submit' className=' bg-red-600 text-white px-9 py-2 rounded-3xl font-semibold cursor-pointer' onClick={probs.handleSubmit} value="SUBMIT" /></div>

      </div></div>)}}
    </Formik>
  </section>
  )
}

export default Commentss