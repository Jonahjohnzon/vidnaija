import React from 'react'

const Footer = ({date}) => {
  return (
    <footer  className='  w-full  bg-[#111E34] flex min-h-[30vh] relative'>
        <main className=' justify-center w-full flex items-center'>
            <div className=' w-[65%]  items-center flex justify-between'>
                <section>
                    <img src='/logos.png'/>
                    <ul>
                        <li className='font-bold  text-xl mb-4'>Nigeria, Abuja</li>
                    </ul>
                </section>
                <section>
                    <header className='font-bold text-white text-xl mb-4'>Socal Media</header>
                    <ul>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                        <li>Telegram</li>
                    </ul>
                </section>
                <section>
                    <header className='font-bold text-white text-xl mb-4' >Resources</header>
                    <ul>
                        <li>Login</li>
                        <li>Sign Up</li>
                        <li>Contact Us</li>
                        <li>Advertise</li>
                        <li>DMCA Takedown</li>
                    </ul>
                </section>
                <section className=''>
                <header className='font-bold text-white text-xl mb-4' >Newsletter</header>
                <p className='mb-3'>Subscribe to our newsletter system now
                 to get latest news from us</p>
                 <form className=' flex flex-col items-start'>
                    <input type='text' placeholder='Enter your email..' className=' w-80 h-10  bg-transparent border-[#A5AFBE] border-[1px] px-3 mb-3  text-sm'/>
                    <input type='submit' value="SUBSCRIBE >" className=' text-red-500 font-bold text-sm'/>
                </form>
                </section>
             
            </div>
        </main>
        <section className=' absolute bottom-0 w-full left-0 h-10 flex justify-center bg-[#141935] bg-opacity-60'>
            <div className=' flex items-center w-[65%]'>
                <p className=' mr-1'>&copy;</p>
                <p>{date} Vidnaija. Deigned by Anubiz</p>
            </div>
        </section>
    </footer>
  )
}

export default Footer