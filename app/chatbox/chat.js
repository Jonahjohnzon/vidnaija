import React from 'react'
import Chatbox from './chatbox'


const Chat = ({chat}) => {
    const Displaychat =()=>{
            const info = chat.map((e)=>{
                return(
                  <div key={e._id}>
                    <Chatbox info={e}/>
                    </div>
                )
            })
            return info
    }
    
  return (
    <div className=' w-full min-h-[200px] shadow-inner shadow-black  py-5 px-2'>
        <Displaychat/>
    </div>
  )
}

export default Chat