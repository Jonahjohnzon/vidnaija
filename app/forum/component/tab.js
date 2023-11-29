import Imagesprofile from "@/app/component/frontpage/images";
import React, { useState } from "react";
import TimeAgo from "timeago-react";
import { useRouter } from "next/navigation";


const Tab = ({ e }) => {
  const router = useRouter()
  const length = e.comment.length;
  const lastcomment = e?.comment[length - 1];
  const User = ({ lt }) => {
    let truncatedText;
    if (lt?.chat?.length > 15) {
      truncatedText = lt?.chat?.substring(0, 25) + " . . .";
    } else {
      truncatedText = lt?.chat;
    }
    return (
      <div className=" mr-5 flex items-center" >
        <div className="flex justify-center  mr-5 w-14">
          <Imagesprofile src={e.profile} />
        </div>
        <div>
          <div className=" text-sm text-white font-bold mb-1">
          <div dangerouslySetInnerHTML={{__html:truncatedText}}/>
          </div>
          <div className="  flex items-center text-sm font-bold ">
            <div className=" mr-4 text-yellow-500">{lt.name}</div>
            <div>
              <TimeAgo datetime={lt.data} />
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className=" w-full rounded-sm overflow-hidden cursor-pointer " onClick={()=>router.push(`/forumpage/${e._id}`)}>
      <div className="w h-full">
        <h1 className=" bg-blue-500 px-3 py-3 text-white font-bold w-full">
          {e.title}
        </h1>
        <div className="px-3 py-6 bg-[#383B42]">
          <div className=" flex justify-between">
            <section className=" flex items-center">
              <div className=" w-10 h-10 overflow-hidden flex items-center justify-center mr-5">
                <img src="/mv-it7.jpg" />
              </div>
              <p className=" text-white font-bold">{e.subtitle}</p>
            </section>
            <section className=" flex items-center">
              <div className=" flex flex-col items-center text-white">
                <p className=" text-xs font-bold">Posts</p>
                <p className=" font-bold">{length}</p>
              </div>
              <div className="h-full w-[1px] bg-blue-500 mx-5 "></div>
              <div>
                {lastcomment ? (
                  <div>
                    <User lt={lastcomment} />
                  </div>
                ) : (
                  <div className=" font-bold text-sm">"NO COMMENT YET"</div>
                )}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab;
