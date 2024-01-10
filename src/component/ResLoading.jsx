/* eslint-disable no-unused-vars */
import React from "react";
import loading from "../assets/image/robot-dance.gif"
const ResLoading = () => {
  return (
    <>
      <div className="relative z-50 bg-white w-full  dark:bg-gray-900">
        <div className="absoulte  top-0  ">
          <div className="w-full h-screen text-center pt-60">
            <img  className="block w-[190px] mx-auto" src='https://media1.giphy.com/media/N46SQxBFH9qXv6vq21/giphy.gif?cid=790b7611vea8ow4ziraojizd2gfmrvrcun4ulp2o2bhaoj6m&ep=v1_gifs_search&rid=giphy.gif&ct=s' alt="" />
            <h2 className="animate-pulse mt-5 ">Loading.....</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResLoading;
