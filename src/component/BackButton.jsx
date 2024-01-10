/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import GuestResponseContext from "../context/GuestResponseContext";


const BackButton = () => {
  const {setResponse} = useContext(GuestResponseContext);
const handelClearResponse = ()=>{
  localStorage.removeItem('set_res');
  setResponse('');
}
  return (
    <>
      <div className=" mx-auto px-4 pt-3">
        <span onClick={()=>handelClearResponse()}  className=" text-lg   text-gray-600 cursor-pointer dark:text-white">
          <i className="fa-solid fa-arrow-left"></i>
        </span>
      </div>
    </>
  );
};

export default BackButton;
