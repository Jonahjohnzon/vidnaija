"use client"
import { Formik } from 'formik'
import React, { useState } from 'react'
import Loading from '../loading'

const page = () => {
    const [load, setload] = useState(false)
  return (
    <main className=' min-h-[100vh] flex justify-center items-center'>
        {load ?<Loading/>:
        <div>
            <Formik
            initialValues={{title:"",src:"",image:""}}
            onSubmit={async(form,{resetForm})=>{
                setload(true)
                const url ="https://vidnaija.com.ng:8443/upcomingPush"
                const data = await fetch(url,{
                    method: "POST",
                    headers: { 'Content-Type': 'application/json' },
                    body:JSON.stringify(form)
                  })
                  const re = await data.json()
                if(re.mgs)
                {
                   resetForm()
                    setload(false)

                }
            }}
            >{(props)=>{
                    return(
                        <div className='flex flex-col items-center'>
                            <h1 className=' text-white font-bold text-2xl mb-5'>UPCOMING</h1>
                            <input type='text' value={props.values.title} placeholder='TITLE' className='w-full sm:w-96 h-9 px-3 mb-3 bg-transparent border-[1px] border-gray-200 border-opacity-25' onChange={props.handleChange("title")}/>
                            <input type='text' value={props.values.src} placeholder='SRC' className='w-full sm:w-96 h-9 px-3 mb-3 bg-transparent border-[1px] border-gray-200 border-opacity-25' onChange={props.handleChange("src")}/>
                            <input type='text' value={props.values.image} placeholder='IMAGE' className='w-full sm:w-96 h-9 px-3 bg-transparent border-[1px] border-gray-200 border-opacity-25 mb-5' onChange={props.handleChange("image")}/>
                            <div className=' flex justify-center mb-10 '><input className=' px-20 py-2 hover:bg-red-700 bg-red-500 text-white font-bold cursor-pointer' type='submit' onClick={props.handleSubmit} value={"SUBMIT"}/></div>
                        </div>
                    )
                }}
            </Formik>
        </div>}
    </main>
  )
}

export default page