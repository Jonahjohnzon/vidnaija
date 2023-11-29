import Button from "@/app/component/frontpage/button";
import React from "react";
import { FaPlay } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Season from "./season";
import Link from "next/link"

const Body = ({ data }) => {
  const router = useRouter();
  const series = data.series;
  return (
    <div>
    <div className=" h-full w-full flex justify-center items-center z-30 pt-[240px]">
      <div className="   w-full z-30 flex justify-between">
        <div className=" rounded-lg overflow-hidden w-[500px] mr-10">
          <img src={data.image} className="w-full h-[500px]" />
        </div>
        <div className=" w-full">
          <div className="  mb-5">
            <h1 className=" text-4xl font-semibold  text-white whitespace-nowrap">
              {data.title}
              <span className=" text-2xl font-light ml-3 text-[#A5AFBE] whitespace-nowrap">
                {data.year}
              </span>
            </h1>
          </div>
          <div
            className=" group hover:text-yellow-500 text-red-600 mb-14 cursor-pointer"
            onClick={() => router.push(data.trailer)}
          >
            <section className=" flex items-center">
              <div className=" text-sm w-12 h-12 border-[1px] rounded-full flex justify-center items-center group-hover:border-yellow-500 border-red-600 mr-3">
                <FaPlay />
              </div>
              <p className=" font-semibold">WATCH TRAILER</p>
            </section>
          </div>
          <div>
            <div className=" flex items-center">
              <div className=" mr-4">
                <p className=" font-bold text-yellow-500 whitespace-nowrap ">
                  OVERVIEW
                </p>
                <div className=" w-full h-1 bg-yellow-500"></div>
              </div>
              <div>
                <p className=" font-bold text-yellow-500">
                  {data.category.toUpperCase()}
                </p>
                <div className=" w-full h-1 bg-yellow-500"></div>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <p className=" font-light text-sm  mb-3 text-white">
              {data.overview}
            </p>
            <div className=" flex items-center mb-3">
              <div className=" text-orange-300 mb-2">
                <FaStar />
              </div>
              <div className=" font-semibold text-xl">
                {data.rating} <span className=" text-xs font-bold">/10</span>
              </div>
            </div>
            <div className=" flex items-center mb-3">
              <div className="  font-medium mr-4">Run Time: {data.runtime}</div>
              <div className=" font-medium ">Release: {data.release}</div>
            </div>
            <div className=" font-medium mb-4 ">Rated: {data.rated}</div>
            <p className=" text-sm mb-5 text-yellow-500">
              IF LINK NOT WORKING PLEASE LET US KNOW{" "}
              <span className=" text-blue-500 underline">HERE</span>
            </p>
            {series || (
              <Link href={{pathname:"/download",query:{uri:data.download}}} className="bg-red-600 text-white px-9 py-2 rounded-3xl font-semibold">DOWNLOAD</Link>
            )}
          </div>
        </div>
      </div>
     
    </div>
    {series && <Season season={data.seasons}/>}
    </div>
  );
};

export default Body;
