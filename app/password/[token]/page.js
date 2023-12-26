import React from 'react'

const page = ({params}) => {
    const token = params.token
    console.log(token)
  return (
    <div>page</div>
  )
}

export default page