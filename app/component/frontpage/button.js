import React from 'react'
import { useRouter } from 'next/navigation'

const Button = ({name,url}) => {
  const router = useRouter()
  return (
    <button className=' bg-red-600 text-white px-9 py-2 rounded-3xl font-semibold' onClick={()=>router.push(url)}>{name}</button>
  )
}

export default Button