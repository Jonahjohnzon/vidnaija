import React, { useState } from 'react'
import { Formik, ErrorMessage } from 'formik'
import * as yup from 'yup'


const Movie = ({obj,id, setload, Gets}) => {
  const schema = yup.object({
    category:yup.string().required().min(2),
    image:yup.string().required(),
    title:yup.string().required().max(100),
    year:yup.number().required().max(2099).min(1900),
    runtime:yup.string().required(),
    release:yup.string().required(),
    rated:yup.string().required(),
    overview:yup.string().required().min(100),
    trailer:yup.string().required(),
    rating:yup.number().required()
  })
    const Cate = ["","hollywood","bollywood"]
    const [top,settop] = useState(obj.top)
    const [low, setlow] = useState(obj.lowdownload.link)
    const [sizelow,setsizelow] = useState(obj.lowdownload.size)
    const [sizehigh,setsizehigh] = useState(obj.highdownload.size)
    const [high, sethigh] = useState(obj.highdownload.link)
    const genres = ['WAR', 'THRILER', 'SPORT', 'SCI-FI', 'ROMANCE', 'MUSICAL', 'HORROR', 'HISTORY', 'FAMILY', 'DRAMA', 'CRIME', 'COMEDY', 'ANIMATION', 'ADVENTURE', 'ACTION'];
    const [selectedGenres, setSelectedGenres] = useState([obj.type.a,obj.type.b,obj.type.c]);
    const handleGenreChange = (genre) => {
        if (selectedGenres.includes(genre)) {
          setSelectedGenres(selectedGenres.filter((g) => g !== genre));
        } else {
          if (selectedGenres.length < 3) {
            setSelectedGenres([...selectedGenres, genre]);
          }
        }
      };
  return (
    <>
    <div>
          <header className=' flex justify-center text-3xl font-bold text-white mb-5'><h1>MOVIE EDIT</h1></header>
            <div>
                <Formik initialValues={{category:obj.category,image:obj.image,title:obj.title,top:obj.top,year:obj.year,runtime:obj.runtime,release:obj.release,rated:obj.rated,overview:obj.overview,trailer:obj.trailer, rating:obj.rating}}
                validationSchema={schema}
                onSubmit={async(form)=>{
                  setload(true)
                    const lows = {
                            lowdownload:{size:sizelow,
                            link:low}
                    }
                    const highs ={
                        highdownload:{size:sizehigh,
                        link:high}
                    }
                    const tops = {
                        top:top
                    }
                    const cate ={
                        type:{a:selectedGenres[0],
                        b:selectedGenres[1],
                        c:selectedGenres[2]}
                    }
                    if(selectedGenres.length < 3)
                    {
                        return
                    }
                    const tok = localStorage.getItem('data')
                    if(!tok){
                      return router.push("/")
                    }
                    const token = JSON.parse(tok).token
                    const total = {...form,...lows,...highs,...cate,...tops}
                    console.log(total)
                    const url =`http://79.133.57.156:8000/editMovie/${id}`
                    const data = await fetch(url,{
                        method: "PUT",
                        headers: { 'Content-Type': 'application/json' , 'auth-token':token},
                        body:JSON.stringify(total)
                      })
                      const result = await data.json()
                      if(result?.auth == false)
                      {
                        return router.push('/')
                      }
                      if(result.mgs)
                      {
                      Gets()
                     
                      }
                      
                }}
                >
                    {(props)=>{
                        return(
                            <div className=' px-10 text-white text-xs lg:text-sm'>
                                <div className=' flex flex-wrap justify-between items-center mb-10'>
                                <div className=' flex items-center justify-between mb-5 lg:mb-0'><p className=' mr-2'>CATEGORY: </p><div><select value={props.values.category} onChange={props.handleChange('category')} className=' bg-transparent border-gray-100 h-9 border-[1px] border-opacity-30 text-white w-60 lg:w-80'> 
                                    {Cate.map((e)=>{
                                        return(
                                            <option className='bg-black' value={e}>{e}</option>
                                        )
                                    })}
                                    </select><ErrorMessage name='category' component='div' className='text-red-500 text-sm mt-1' /></div></div>
                                    <div className=' flex flex-col sm:flex-row  justify-between items-center mb-5 lg:mb-0'><p className=' mr-2'>TITLE: </p><form className='w-full'><input type='text' placeholder='* * * * *' className='w-full sm:w-96 h-9 px-3 bg-transparent border-[1px] border-gray-200 border-opacity-25' value={props.values.title} onChange={props.handleChange("title")}/><ErrorMessage name='title' component='div' className='text-red-500 text-sm mt-1' /></form></div>
                                    
                                    <div className=' flex flex-col sm:flex-row  justify-between items-center mb-5 lg:mb-0 '><p className=' mr-2'>IMAGE: </p><form className='w-full'><input type='text' placeholder='* * * * *' className='w-full sm:w-96 h-9 px-3 bg-transparent border-[1px] border-gray-200 border-opacity-25' value={props.values.image} onChange={props.handleChange("image")}/><ErrorMessage name='image' component='div' className='text-red-500 text-sm mt-1' /></form></div>
                                  </div>
                                  <div className=' flex justify-between mb-10 items-center  flex-wrap'>
                                    <div className=' flex flex-col sm:flex-row  justify-between items-center  mb-5 lg:mb-0'><p className=' mr-2'>YEAR: </p><form className='w-full'><input type='number'  min={1900} max={2099} placeholder='* * * * *' className='w-full sm:w-96 h-9 px-3 bg-transparent border-[1px] border-gray-200 border-opacity-25' value={props.values.year} onChange={props.handleChange("year")}/><ErrorMessage name='year' component='div' className='text-red-500 text-sm mt-1' /></form></div>
                                    <div className=' flex flex-col sm:flex-row  justify-between items-center  mb-5 lg:mb-0'><p className=' mr-2'>RUNTIME: </p><form className='w-full'><input type='text' placeholder='* * * * *' className='w-full sm:w-96 h-9 px-3 bg-transparent border-[1px] border-gray-200 border-opacity-25' value={props.values.runtime} onChange={props.handleChange("runtime")}/><ErrorMessage name='runtime' component='div' className='text-red-500 text-sm mt-1' /></form></div>
                                    <div className=' flex flex-col sm:flex-row  justify-between items-center  mb-5 lg:mb-0'><p className=' mr-2'>RELEASE: </p><form className='w-full'><input type='date' placeholder='* * * * *' className='w-full sm:w-96 h-9 px-3 bg-transparent border-[1px] border-gray-200 border-opacity-25' value={props.values.release} onChange={props.handleChange("release")}/><ErrorMessage name='release' component='div' className='text-red-500 text-sm mt-1' /></form></div>
                                    </div>
                                    <div className=' flex justify-between mb-10 items-center  flex-wrap'>
                                    <div className=' flex flex-col sm:flex-row  justify-between items-center  mb-5 lg:mb-0'><p className=' mr-2'>RATED: </p><form className='w-full'><input type='text' placeholder='* * * * *' className='w-full sm:w-96 h-9 px-3 bg-transparent border-[1px] border-gray-200 border-opacity-25' value={props.values.rated} onChange={props.handleChange("rated")}/><ErrorMessage name='rated' component='div' className='text-red-500 text-sm mt-1' /></form></div>
                                    <div className=' flex flex-col sm:flex-row  justify-between items-center  mb-5 lg:mb-0'><p className=' mr-2'>OVERVIEW: </p><form className='w-full'><input type='text' placeholder='* * * * *' className='w-full sm:w-96 h-9 px-3 bg-transparent border-[1px] border-gray-200 border-opacity-25' value={props.values.overview} onChange={props.handleChange("overview")}/><ErrorMessage name='overview' component='div' className='text-red-500 text-sm mt-1' /></form></div>
                                    <div className=' flex flex-col sm:flex-row  justify-between items-center  mb-5 lg:mb-0'><p className=' mr-2'>TRAILER: </p><form className='w-full'><input type='text' placeholder='* * * * *' className='w-full sm:w-96 h-9 px-3 bg-transparent border-[1px] border-gray-200 border-opacity-25' value={props.values.trailer} onChange={props.handleChange("trailer")}/><ErrorMessage name='trailer' component='div' className='text-red-500 text-sm mt-1' /></form></div>
                                    </div>
                                  <div className=' flex justify-between items-center mb-20 '>
                                  <div className=' flex flex-col sm:flex-row  justify-center mb-20 items-center '><p className=' mr-2'>RATING: </p><form className='w-full'><input type='number' min={0} max={10} placeholder='* * * * *' className='w-full sm:w-96 h-9 px-3 bg-transparent border-[1px] border-gray-200 border-opacity-25' value={props.values.rating} onChange={props.handleChange("rating")}/><ErrorMessage name='rating' component='div' className='text-red-500 text-sm mt-1' /></form></div>
                                  
                                  </div>
                                    <div className=' flex justify-center mb-4'><p className='px-40 py-2 bg-red-500 text-white font-bold whitespace-nowrap'>LOW DOWNLOAD EDIT</p></div>
                                    <div className=' flex justify-between mb-10 items-center  flex-wrap'>
                                    <div className=' flex flex-col sm:flex-row  justify-between items-center mb-5 lg:mb-0'><p className=' mr-2'>LINK: </p><form className='w-full'><input type='text' placeholder='* * * * *' className='w-full sm:w-96 h-9 px-3 bg-transparent border-[1px] border-gray-200 border-opacity-25' value={low} onChange={(e)=>setlow(e.target.value)}/></form></div>
                                    <div className=' flex flex-col sm:flex-row  justify-between items-center mb-5 lg:mb-0'><p className=' mr-2'>SIZE: </p><form className='w-full'><input type='text' placeholder='* * * * *' className='w-full sm:w-96 h-9 px-3 bg-transparent border-[1px] border-gray-200 border-opacity-25' value={sizelow} onChange={(e)=>setsizelow(e.target.value)}/></form></div>
                                    </div>
                                    <div className=' flex justify-center mb-4'><p className='px-40 py-2 bg-red-500 text-white font-bold whitespace-nowrap'>HIGH DOWNLOAD EDIT</p></div>
                                    <div className=' flex justify-between mb-10 items-center  flex-wrap'>
                                    <div className=' flex flex-col sm:flex-row  justify-between items-center mb-5 lg:mb-0'><p className=' mr-2'>LINK: </p><form className='w-full'><input type='text' placeholder='* * * * *' className='w-full sm:w-96 h-9 px-3 bg-transparent border-[1px] border-gray-200 border-opacity-25' value={high} onChange={(e)=>sethigh(e.target.value)}/></form></div>
                                    <div className=' flex flex-col sm:flex-row  justify-between items-center mb-5 lg:mb-0'><p className=' mr-2'>SIZE: </p><form className='w-full'><input type='text' placeholder='* * * * *' className='w-full sm:w-96 h-9 px-3 bg-transparent border-[1px] border-gray-200 border-opacity-25' value={sizehigh} onChange={(e)=>setsizehigh(e.target.value)}/></form></div>
                                    </div>
                                    <div>
                                        
                                        <div className='flex justify-center mb-10'><label htmlFor='top' className=' mr-2 text-xl font-bold '>TOP</label><input type="checkbox" id='top' value={top}  checked={top} onChange={()=>settop(!top)}/></div>
                                        <div className=' justify-center w-full flex flex-col items-center'>
                                            <p className=' text-center font-bold  mb-10 text-xl'>Type</p>
                                            <div className=' flex flex-wrap justify-between mb-10 w-[50%]'>
                                            {genres.map((genre) => (
        <label key={genre} className="block mb-10 cursor-pointer hover:bg-[#1F375F] hover:bg-opacity-10 px-10">
          <input
            type="checkbox"
            value={genre}
            checked={selectedGenres.includes(genre)}
            onChange={() => handleGenreChange(genre)}
          />
          <span className="ml-2">{genre}</span>
        </label>
      ))}</div>
                                        </div>
                                    </div>
                                    <div className=' flex justify-center mb-10 '><input className=' px-20 py-2 hover:bg-red-700 bg-red-500 text-white font-bold cursor-pointer' type='submit' onClick={props.handleSubmit} value={"SUBMIT"}/></div>
                            </div>
                        )
                    }}
                </Formik>
            </div>
    </div></>
  )
}

export default Movie