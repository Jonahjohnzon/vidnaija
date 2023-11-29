import Imagesprofile from '@/app/component/frontpage/images'
import React from 'react'

const Latest = ({newdata}) => {
    const Data = () =>{
        const info = newdata.map((e)=>{
            const no = e.comment.length
            return(
                <div key={e._id} className='mb-5 flex justify-between items-center px-3 bg-[#383B42] py-4 border-[1px] border-blue-500'>
                    <div className=' flex items-center'><div className=' w-14 mr-4'><Imagesprofile src={e.profile}/></div>
                    <div><div className=' text-white font-bold'>{e.title}</div><p className=' text-xs font-bold'>created by {e.owner}</p></div></div>
                    <div className=' flex flex-col justify-center items-center text-white'>
                        <p className=' font-bold text-xs'>posts</p>
                        <p>{no}</p>
                    </div>
                </div>
            )
        })
        return info
    }
  return (
    <div className='sticky top-20 '>
        <div className=' w-full flex flex-col'>
            <div className='  bg-blue-500 flex justify-center items-center py-6'>
                <p className=' whitespace-nowrap font-bold text-white text-3xl'>LATEST COMMUNITIES</p>
            </div>
            <div>
                <Data/>
            </div>
        </div>
    </div>
  )
}

export default Latest