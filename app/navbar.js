"use client";
import React, { useState, useEffect, useCallback } from "react";
import { FaChevronDown } from "react-icons/fa6";
import Button from "./component/frontpage/button";
import { useRouter } from 'next/navigation'
import Sign from "./sign";
import Imagesprofile from "./component/frontpage/images";
import { IoIosNotifications } from "react-icons/io";

const Navbar = () => {
  const [color, setcolor] = useState(true);
  const [h, sh] = useState("")
  const [c, sc] = useState("")
  const [co, sco] = useState("")
  const [k, sk] = useState("")
  const [a, sa] = useState("")
  const [ad, sad] = useState("")
  const [log, setlog] = useState(true)
  const [src, setsrc] = useState()
  const [signup, setsignup] = useState(false)
  const [login, setlogin] = useState()
  const [notify, setnotify] = useState(false)
  const [id, setid] = useState()
  const router = useRouter()
  const handleNavigation = (e) => {
    const window = e.currentTarget;
    const newY = window.scrollY;
    if (newY <= 30) {
      setcolor(true);
    } else {
      setcolor(false);
    }
  };
  const Get =async()=>{
      const logg= await localStorage.getItem('data')
      const logged = await JSON.parse(logg)
      if(logged != null)
      {
        setsrc(logged.profile_image)
        setlog(false)
        setnotify(logged.Notification)
        setid(logged._id)
     
      }
      else{
        setlog(true)
      }

  }

  useEffect(() => {
    Get()
    window.addEventListener("scroll", handleNavigation);
    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, []);
  const List = () => {
    return (
      <ul className=" font-semibold text-sm">
       <li onClick={()=>router.push('/display/movies')} > <div className=" mb-2 hover:bg-[#1F375F] hover:bg-opacity-10 px-10 " ><p className=" w-32">ALL</p></div></li>
       <li onClick={()=>router.push('/display/action')}><div className=" mb-2 hover:bg-[#1F375F] hover:bg-opacity-10 px-10 "><p className=" w-32">ACTION</p></div></li>
       <li onClick={()=>router.push('/display/adventure')}><div className=" mb-2 hover:bg-[#1F375F] hover:bg-opacity-10 px-10 "><p className=" w-32">ADVENTURE</p></div></li>
       <li onClick={()=>router.push('/display/animation')}><div className=" mb-2 hover:bg-[#1F375F] hover:bg-opacity-10 px-10 "><p className=" w-32">ANIMATION</p></div></li>
       <li onClick={()=>router.push('/display/comedy')}><div className=" mb-2 hover:bg-[#1F375F] hover:bg-opacity-10 px-10 "><p className=" w-32">COMEDY</p></div></li>
       <li onClick={()=>router.push('/display/crime')}><div className=" mb-2 hover:bg-[#1F375F] hover:bg-opacity-10 px-10 "><p className=" w-32">CRIME</p></div></li>
       <li onClick={()=>router.push('/display/drama')}><div className=" mb-2 hover:bg-[#1F375F] hover:bg-opacity-10 px-10 "><p className=" w-32">DRAMA</p></div></li>
       <li onClick={()=>router.push('/display/family')}><div className=" mb-2 hover:bg-[#1F375F] hover:bg-opacity-10 px-10 "><p className=" w-32">FAMILY</p></div></li>
       <li onClick={()=>router.push('/display/history')}> <div className=" mb-2 hover:bg-[#1F375F] hover:bg-opacity-10 px-10 "><p className=" w-32">HISTORY</p></div></li>
       <li onClick={()=>router.push('/display/horror')}> <div className=" mb-2 hover:bg-[#1F375F] hover:bg-opacity-10 px-10 "><p className=" w-32">HORROR</p></div></li>
       <li onClick={()=>router.push('/display/musical')}> <div className=" mb-2 hover:bg-[#1F375F] hover:bg-opacity-10 px-10 "><p className=" w-32">MUSICAL</p></div></li>
       <li onClick={()=>router.push('/display/romance')}> <div className=" mb-2 hover:bg-[#1F375F] hover:bg-opacity-10 px-10 "><p className=" w-32">ROMANCE</p></div></li>
       <li onClick={()=>router.push('/display/scifi')}> <div className=" mb-2 hover:bg-[#1F375F] hover:bg-opacity-10 px-10 "><p className=" w-32">SCI-FI</p></div></li>
       <li onClick={()=>router.push('/display/sport')}> <div className=" mb-2 hover:bg-[#1F375F] hover:bg-opacity-10 px-10 "><p className=" w-32">SPORT</p></div></li>
       <li onClick={()=>router.push('/display/thriler')}> <div className=" mb-2 hover:bg-[#1F375F] hover:bg-opacity-10 px-10 "><p className=" w-32">THRILER</p></div></li>
       <li onClick={()=>router.push('/display/war')}> <div className=" mb-2 hover:bg-[#1F375F] hover:bg-opacity-10 px-10 "><p className=" w-32">WAR</p></div></li>
      </ul>
    );
  };
  const Hom =(h)=>{
    if(h == "h")
    {
    sh("#EABC00")}
    else{
      sh("")
    }
    if(h == "c")
    {
    sc("#EABC00")}
    else{
      sc("")
    }
    if(h == "k")
    {
    sk("#EABC00")
    router.push('/display/kseries')
  }
    else{
      sk("")
    }
    if(h == "a")
    {
    sa("#EABC00")
    router.push('/display/anime')
  }
    else{
      sa("")
    }
    if(h == "ad")
    {
    sad("#EABC00")}
    else{
      sad("")
    }
    if(h == "co")
    {
    sco("#EABC00")
    router.push('/forum')}
    else{
      sco("")
    }
  }
  const Signnow = () =>{
    setlogin(false)
    setsignup(!signup)
  }
  const Lognow = () =>{
    setlogin(true)
    setsignup(!signup)
  }
  const Logoff = () =>{
    localStorage.clear()
    window.location.reload();
  }
  return (
    <header
      className="w-full fixed z-50 top-0 flex items-center justify-center transition-all ease-in-out duration-300 text-[#A5AFBE]"
      style={
        color
          ? { backgroundColor: "", height: "100px" }
          : { backgroundColor: "#111E34", height: "80px" }
      }
    >
      <div className=" flex  justify-between w-11/12">
        <section className=" flex w-full items-center">
          <div className=" flex items-end mr-20">
            <img src="/logos.png" className=" w-24" />
          </div>
          <ul className=" flex font-bold text-sm w-8/12 justify-between">
            <li onClick={()=>router.push('/')}><div className=" cursor-pointer hover:text-yellow-500 flex items-center  h-20 justify-center" style={{color:h}} onClick={()=>Hom('h')}>HOME</div></li>
            <li > <div className=" group cursor-pointer hover:text-yellow-500 flex items-center relative h-20 justify-center " style={{color:c}} onClick={()=>Hom('c')}>
              <p>CATEGORY</p>
              <div className=" text-[0.6rem]">
                <FaChevronDown />
                <div className=" absolute left-0 top-16 bg-white text-black hidden  group-hover:block py-5  rounded-sm">
                  <List />
                </div>
              </div>
            </div></li>
            <li className=" cursor-pointer hover:text-yellow-500 flex items-center  h-20 justify-center" style={{color:k}} onClick={()=>Hom('k')}>K-SERIES</li>
            <li className=" cursor-pointer hover:text-yellow-500 flex items-center  h-20 justify-center" style={{color:a}} onClick={()=>Hom('a')}>ANIME</li>
            <li className=" cursor-pointer hover:text-yellow-500 flex items-center  h-20 justify-center" style={{color:co}} onClick={()=>Hom('co')}>COMMUNITY-FORUM</li>
            <li className=" cursor-pointer hover:text-yellow-500 flex items-center  h-20 justify-center" style={{color:ad}} onClick={()=>Hom('ad')}>ADVERTISE</li>
          </ul>
        </section>
        <section className=" w-full flex justify-end">
          <div className=" flex items-center">
              <ul className="flex font-bold text-sm ">
                <li className=" cursor-pointer hover:text-yellow-500 flex items-center  h-20 justify-center">FIND MY MOVIE</li>
                <li className=" cursor-pointer hover:text-yellow-500 flex items-center  h-20 justify-center ml-8">HELP</li>
                {(log)&&<li className=" cursor-pointer hover:text-yellow-500 flex items-center  h-20 justify-center ml-8" onClick={Lognow}>LOGIN</li>}
              </ul>
            <div className=" ml-8 flex items-center">
              {(log)&&<button className=' bg-red-600 text-white px-9 py-2 ml-5 rounded-3xl font-semibold' onClick={Signnow}>SIGN UP</button>}
              {log||<div className=" w-14 cursor-pointer"><Imagesprofile src={src}/></div>}
              {log||<div className="relative"><IoIosNotifications  className=" text-4xl mx-3 cursor-pointer"/>{notify&&<div className=" h-3 w-3 bg-red-600 absolute bottom-1 right-4 rounded-full"></div>}</div>}
              {(log)||<button className=' bg-red-600 text-white px-9 py-2 ml-5 rounded-3xl font-semibold' onClick={Logoff}>LOG OFF</button>}
            </div>
          </div>
        </section>
      </div>
      {(log && signup)&&<Sign login={login} signup={setsignup}/>}
    </header>
  );
};

export default Navbar;
