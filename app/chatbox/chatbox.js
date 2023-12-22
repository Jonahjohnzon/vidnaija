import React from 'react'
import { FaReply } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import Imagesprofile from '../component/frontpage/images';
import TimeAgo from "timeago-react";
import Stars from '../stars'


const Chatbox = ({info, setload, Result, setreply}) => {
const check = localStorage.getItem("data")
const result = JSON.parse(check)
const id = result?._id

const DELETE =async()=>{
  setload(true)
  if(!result){
    return router.push("/")
  }
  try{
    const results = await fetch(`http://79.133.57.156:8000/deleteComment/${info._id}?ids=${id}`,{
    method:'DELETE',
    headers:{'auth-token':result.token }
  })
  const data = await results.json()
  if(data.message)
  {
    Result()
  }
  else{
    setload(false)
  }
}
catch(e){
  console.log(e)
}

}

const DELETECOMMENT =async(ei)=>{
  setload(true)
  if(!result){
    return router.push("/")
  }
  
  try{
    const results = await fetch(`http://79.133.57.156:8000/deleteoneComment/${ei}?ids=${id}`,{
    method:'DELETE',
    headers:{'auth-token':result.token }
  })
  const data = await results.json()

  if(data.message)
  {
    Result()
  }
  else{
    setload(false)
  }
}
catch(e){
  console.log(e)
}

}

const   Reply=()=>{
  const element = document.getElementById('chat');
  if (element) {
    // 👇 Will scroll smoothly to the top of the next section
    element.scrollIntoView({ behavior: 'smooth' });
  }
  setreply({
    mgs:info.chat,
    id:info._id,
    re:false
  })
}

  return (
    <div className=' mb-3 w-full flex flex-col items-end '  >
<div className='   relative  shadow-md w-[100%] p-1 bg-[#09152A]'>
            <div className=' h-full'>
                <section className=' flex w-full flex-col bg-[#0f2236] border-[1px] border-gray-800 p-2 h-full'>
                    <div className=' flex justify-between h-full w-full items-start mr-5'>
                    <div className=' w-10 flex items-center'><Imagesprofile src={info.profile_image} /> <h4 className=' ml-5 text-yellow-500 text-xs font-bold mb-1 whitespace-nowrap'>{info?.name?.toUpperCase()}</h4></div>
                    {info?.id_user == id &&<div className=' relative group cursor-pointer' ><div className=' absolute z-20 px-3 py-1 rounded-md bg-white text-black top-3 cursor-pointer left-0 hidden hover:block group-hover:block' onClick={DELETE}>DELETE</div><BsThreeDotsVertical /></div>}
                    </div>
                    <div className=' h-[1px] w-full bg-gray-200 bg-opacity-20'></div>
                    <div className=' flex justify-between w-full'>
                      <div className='  pt-2 w-14 flex flex-col justify-evenly  border-r-[1px] border-r-gray-200 border-opacity-20 pr-2'>
                        <div className='flex justify-between'>
                        <div className=' flex justify-center'><Stars no={info.rank}/></div>
                        <div className='  flex justify-center'><Stars no={info.rank}/></div>
                        </div>
                   
                      </div>
                      <div className=' w-[1px] h-full bg-opacity-20 bg-gray-200 mr-5'></div>
                    <div className=' w-full flex justify-start'>
                <div className=' pt-2 pr-5 w-full'>
                <div className=' text-white text-sm lg:text-base  min-h-[40px] break-all flex justify-start'><div className=' '/>{info.chat}</div>
               
                </div>
                </div>
                </div>
                <div> 
                 <div className=' h-[1px] w-full bg-gray-200 bg-opacity-20'></div>
                 <div className=' flex  justify-between items-center mt-2'>
               <section className=' text-sm  items-center flex'>
                {info.reply.length < 2&&<p className=' mr-5 text-lg cursor-pointer hover:text-yellow-500'  onClick={Reply}><FaReply /></p>} 
          
                </section>
                <div className=' flex items-center'><p>Posted: </p><TimeAgo datetime={info.data} className=' ml-2'/></div>
                </div>
                </div>
                </section>
    

            </div>
        </div>
        {
          info.reply.length > 0&&<div className='w-[80%] mt-3'>
            {
              info.reply.map((e)=>{
              
                return(<div className='   relative  shadow-md w-[100%] p-1 bg-[#09152A]' key={e._id}>
                <div className=' h-full'>
                    <section className=' flex w-full flex-col bg-[#0f2236] border-[1px] border-gray-800 p-2 h-full'>
                        <div className=' flex justify-between h-full w-full items-start mr-5'>
                        <div className=' w-10 flex items-center'><Imagesprofile src={e.profile_image} /> <h4 className=' ml-5 text-yellow-500 text-xs font-bold mb-1 whitespace-nowrap'>{e?.name?.toUpperCase()}</h4></div>
                        {info?.id_user == id &&<div className=' relative group cursor-pointer' ><div className=' absolute z-20 px-3 py-1 rounded-md bg-white text-black top-3 cursor-pointer left-0 hidden hover:block group-hover:block' onClick={()=>DELETECOMMENT(e._id)}>DELETE</div><BsThreeDotsVertical /></div>}
                        </div>
                        <div className=' h-[1px] w-full bg-gray-200 bg-opacity-20'></div>
                        <div className=' flex justify-between w-full'>
                          <div className='  pt-3 w-14 flex flex-col justify-evenly border-r-[1px] border-r-gray-200  border-opacity-20 pr-2'>
                            <div className='flex justify-between'>
                            <div className=' flex justify-center'><Stars no={e.rank}/></div>
                            <div className='  flex justify-center'><Stars no={e.rank}/></div>
                            </div>
               
                          </div>
                          <div className=' w-[1px] h-full bg-opacity-20 bg-gray-200 mr-5'></div>
                        <div className=' w-full flex justify-start'>
                    <div className=' pt-2 pr-5 w-full'>
                    <div className=' text-white text-sm lg:text-base  min-h-[40px] break-all flex justify-start'><div className=' '/>{e.chat}</div>
                   
                    </div>
                    </div>
                    </div>
                    <div> 
                     <div className=' h-[1px] w-full bg-gray-200 bg-opacity-20'></div>
                     <div className=' flex  justify-between items-center mt-2'>
                
                    <div className=' flex items-center'><p>Posted: </p><TimeAgo datetime={e.data} className=' ml-2'/></div>
                    </div>
                    </div>
                    </section>
        
    
                </div>
            </div>)
              })
            }
          </div>
        }
    </div>
  )
}

export default Chatbox