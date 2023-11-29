"use client"
import React from 'react'
import Tab from './tab'

const Group = ({data}) => {

    const datas = data.map((e)=>{
        return(
            <div className=' mb-6'><Tab e={e}/></div>
        )
    })
    return datas
}

export default Group