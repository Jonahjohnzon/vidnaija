import React from 'react'

const Welcome = () => {
  return (
    <div className='  w-[60%] font-bold py-3 pl-3'>
        <h1 className='text-yellow-500 text-xl underline mb-3'>🎬 Welcome to Vid_Forum - The Cinematic Cloud Community! 🍿</h1>
        <h3>Hello Movie Lovers!</h3>
        <p className='mb-3'>Welcome to <span className=' text-blue-500 text-xl'>Vid_Forum</span>, the ultimate online haven for cinephiles like you. We're delighted to have you as a part of our community, where the love for movies knows no bounds.</p>
        <p  className='text-yellow-500 underline '>🌐 Cinematic Cloud Sharing:</p>
        <p className=' mb-4'>One of the unique features of our forum is the ability to share your favorite movie files seamlessly through cloud links. It's like having your own virtual movie theater where members can exchange recommendations, discuss plot twists, and enjoy the magic of cinema together.</p>
        <p className='text-yellow-500  underline mb-2'>💡 How to Share Your Cinematic Treasures:</p>
        <p className='text-red-500 '>Upload to the Cloud:</p> <p className=' mb-2'>Use your preferred cloud storage service to upload your movie files.</p> 
        <p className='text-red-500 '>Generate Shareable Links:</p><p className=' mb-2'>reate shareable links for your files. Most cloud services provide this feature.</p> 
        <p className='text-red-500 '>Share with the Community: </p><p className=' mb-5'>Head over to the dedicated section for cloud sharing, post your link, and let the movie magic unfold!</p>
        <p className='text-yellow-500'>Contribute to the communal movie library by sharing your files through cloud links.</p>
    </div>
  )
}

export default Welcome