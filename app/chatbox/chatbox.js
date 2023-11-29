import React from 'react'
import { FaReply } from "react-icons/fa";
import { MdAddReaction } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import Imagesprofile from '../component/frontpage/images';
import TimeAgo from "timeago-react";
import Link from "next/link"
import Stars from '../stars'


const Chatbox = ({info}) => {

  return (
    <div className=' mb-3 w-full flex '  >
        {info.title?<div className=' w-full'>
          <div className=" flex flex-col  w-[60%]  items-start">
            <header className='bg-blue-500 text-white font-bold px-4 py-2'>{info.titles}</header>
            {info.wordings&&<div className=" text-white border-[1px] border-blue-500 py-2 w-full min-h-[150px]  px-1"><p className=' w-ful'>{info.wordings}</p></div>}
            <div className=' flex justify-between w-full'>{info.link&&<Link className=' bg-red-500 text-white font-bold px-4 py-1  whitespace-nowrap' href={info.link}>LINK DOWNLOAD</Link>}<div><TimeAgo datetime={info.data} className=' whitespace-nowrap'/></div></div>
          </div>
        </div>:<div className='   relative  shadow-md w-[100%] p-1 bg-[#09152A]'>
            <div className=' h-full'>
                <section className=' flex w-full flex-col bg-[#0f2236] border-[1px] border-gray-800 p-2 h-full'>
                    <div className=' flex justify-between h-full w-full items-start mr-5'>
                    <div className=' w-14 flex items-center'><Imagesprofile src={info.profile_image} /> <h4 className=' ml-5 text-yellow-500 text-xs font-bold mb-1'>{info?.name?.toUpperCase()}</h4></div>
                    <BsThreeDotsVertical />
                    </div>
                    <div className=' h-[1px] w-full bg-gray-200 bg-opacity-20'></div>
                    <div className=' flex justify-between w-full'>
                      <div className='  pt-3 w-14 flex flex-col justify-evenly'>
                        <div className='flex justify-between'>
                        <div className=' flex justify-center'><Stars no={info.star}/></div>
                        <div className='  flex justify-center'><Stars no={info.star}/></div>
                        </div>
                        <div className='flex justify-between'>
                        <div className=' flex justify-center'><Stars no={info.star}/></div>
                        <div className='  flex justify-center'><Stars no={info.star}/></div>
                        </div>
                      </div>
                      <div className=' w-[1px] h-full bg-opacity-20 bg-gray-200 mr-5'></div>
                    <div className=' w-full flex justify-start'>
                <div className=' pt-2 pr-5'>
                <p className=' text-white w-full  h-full min-h-[100px]'><div dangerouslySetInnerHTML={{__html:info.chat}}/></p>
               
                </div>
                </div>
                </div>
                <div> 
                 <div className=' h-[1px] w-full bg-gray-200 bg-opacity-20'></div>
                 <div className=' flex  justify-between items-center mt-2'>
               <section className=' text-sm  items-center flex'>
                <p className=' mr-5 text-lg' ><FaReply /></p> 
                <p className='text-lg'><MdAddReaction /></p>
                </section>
                <div className=' flex items-center'><p>Posted: </p><TimeAgo datetime={info.data} className=' ml-2 whitespace-nowrap'/></div>
                </div>
                </div>
                </section>
    

            </div>
        </div>}
    </div>
  )
}

export default Chatbox