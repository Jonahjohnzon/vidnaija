import React from 'react'
import { FaCaretRight, FaCaretLeft } from "react-icons/fa6";

const Pager = ({number,Move,array,page,type,Right,Left}) => {
  return (
    <div className=' w-full  flex justify-between'>
    <div className=' py-1'>
    <p className=''>{type} per page <span className=' text-blue-500 mx-1'>20 movies </span>in total</p>
    </div>
    <section className=' flex items-center'>
      <p className=' pr-4'>Page {number} of <span className=' text-blue-500'>{page}</span>:</p>
      <div className='bg-[#A5AFBE] bg-opacity-40 w-[1px] h-full mr-3'></div>
      <div className=' flex items-center'>
      {number > 1 && <FaCaretLeft className=' mr-3 text-blue-500 cursor-pointer'  onClick={Left}/>}
      <div className=' flex items-center'>
        {array.map((e,i,a)=>{
          return(<>
          {(e < 4 || i == a.length - 1)?
            <p className=' mr-3 cursor-pointer' style={e == number?{color:"blue"}:{color:""}} key={i} onClick={()=>{Move(e)}}>{e}</p>:
            <p className=' mr-3'>.</p>}
            </>
          )
        }) 
        }
      </div>
      {number < page&&<FaCaretRight  className=' text-blue-500 cursor-pointer' onClick={Right}/>}
      </div>
    </section>
  </div>
  )
}

export default Pager