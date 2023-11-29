"use client"
import Chatbox from '@/app/chatbox/chatbox'
import Commentss from '@/app/comment'
import Imagesprofile from '@/app/component/frontpage/images'
import Welcome from '@/app/forum/component/welcome'
import Loading from '@/app/loading'
import React, { useEffect, useState } from 'react'
import Latest from './componenet/latest'



const page = ({params}) => {
  const data = params.id
  const [start, setstart] = useState(0)
  const [limit, setlimit] = useState(20)
  const [load, setload] = useState(true)
  const [array, setarray] = useState([])
  const [disable, setDisable] = useState(false)
  const [comment_display, setDispay] = useState(false)
 

  const Chatpage = ({arrays,title,owner}) =>{
    const result = arrays.map((e)=>{
      return(<div className=' w-full' key={e._id}><Chatbox info={e} title={title} owner={owner}/></div>)
    })
    return result
  }
  const Get = async() =>{
    try{
    const result = await fetch(`http://localhost:8000/getGroupSlice/${data}?start=${start}&limit=${limit}`)
    const info = await result.json()
    setarray(info)
    setload(false)
  }
    catch(e)
    { console.log(e)}
  }
  useEffect(()=>{
    Get()
  },[])
  return (
    <main className='  flex justify-center mb-40'>
      {load?<Loading/>:
      <div className='pt-28 w-[80%] flex flex-col items-center'>
      <div className='bg-[#383B42] mb-20 border-[1px] border-blue-500 rounded-sm'><Welcome/></div>
      <div className=' flex justify-between relative'>
        <div className=' w-[75%]'>
        <div className=' flex justify-between px-4 py-6 items-center bg-blue-500'>
      <header className=' text-3xl font-bold text-white '>{array.title}</header>
      <div className='flex items-center'>
        <div className=' w-16 '><Imagesprofile src={array.profile}/></div>
      <div className=' text-base font-bold text-white ml-4'>
        <p>{array.owner}</p>
        <p>{array.subtitle}</p>
      </div>
      </div>
      </div>
      <section className=' p-4  w-[100%]  border-blue-800 border-[1px] '>
        <div><Chatpage arrays={array?.comments} title={array.title}  owner={array.owner}/></div>
      </section>
      </div>
      <div className='w-[24%] '>
        <Latest newdata={array?.newdata}/>
      </div>
      </div>
     <div className=' w-full'><section className=' w-[75%] mt-20'>
        <div>
        <Commentss url={`http://localhost:8000/pushgroupcomment/${array._id}`} comment_display={comment_display} setDispay={setDispay}  setDisable={ setDisable} disable={disable} setload={setload} Result={Get}/>
        </div>
      </section>
      </div> 
      </div>}
    </main>
  )
}

export default page