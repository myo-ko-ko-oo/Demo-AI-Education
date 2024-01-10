/* eslint-disable no-unused-vars */
import React from 'react'
import { HiOutlineLightBulb } from "react-icons/hi";
import { TbAbc } from "react-icons/tb";
import { LuPencilRuler } from "react-icons/lu";
import { FcBiomass } from "react-icons/fc";
import { useNavigate } from "react-router";
import { FcBiotech } from "react-icons/fc";
const UserCardLayout = () => {
    const navigate = useNavigate();
  return (
    <>
          <div className="container mx-auto  my-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {/* <!--lesson start --> */}
          <div onClick={()=>navigate('/guest/lesson-start-idea')} className="lesson-start-idea cursor-pointer hover:-translate-y-1 dark:text-white ">
            <div className="grid grid-cols-4 md:grid-cols-1 lg:grid-cols-1 border border-gray-10 shadow-xl rounded-md mx-5 p-4 my-1 dark:border-none dark:bg-gray-800">
              <div className="subject-logo m-auto mb-2">
                <HiOutlineLightBulb className="text-yellow-300 text-3xl" />
              </div>
              <div className="content col-span-2 ms-2 md:ms-0 md:text-center">
                <p>Lesson Start Idea</p>
                <small>i m small text</small>
              </div>
              <div className="lock-icon m-auto"></div>
            </div>
          </div>
          {/* <!--English --> */}
          <div className="lesson-start-idea cursor-pointer hover:-translate-y-1 dark:text-white">
            <div className="grid grid-cols-4 md:grid-cols-1 lg:grid-cols-1 border border-gray-10 shadow-xl rounded-md mx-5 p-4 my-1 dark:border-none dark:bg-gray-800">
              <div className="subject-logo m-auto mb-2">
                <TbAbc className="text-green-500 text-3xl" />
              </div>
              <div className="content col-span-2 ms-2 md:ms-0 md:text-center">
                <p>English Lesson</p>
                <small>i m small text</small>
              </div>
              <div className="lock-icon m-auto"></div>
            </div>
          </div>

          {/* <!--Physics --> */}
          <div className="lesson-start-idea cursor-pointer hover:-translate-y-1 dark:text-white">
            <div className="grid grid-cols-4 md:grid-cols-1 lg:grid-cols-1 border border-gray-10 shadow-xl rounded-md mx-5 p-4 my-1 dark:border-none dark:bg-gray-800">
              <div className="subject-logo m-auto mb-3">
                <LuPencilRuler className="text-purple-500 text-2xl" />
              </div>
              <div className="content col-span-2 ms-2 md:ms-0 md:text-center">
                <p>Physics Lesson</p>
                <small>i m small text</small>
              </div>
              <div className="lock-icon m-auto"></div>
            </div>
          </div>

          {/* <!--Chemistry --> */}
          <div className="lesson-start-idea cursor-pointer hover:-translate-y-1 dark:text-white">
            <div className="grid grid-cols-4 md:grid-cols-1 lg:grid-cols-1 border border-gray-10 shadow-xl rounded-md mx-5 p-4 my-1 dark:border-none dark:bg-gray-800">
              <div className="subject-logo m-auto mb-2">
                <FcBiomass className="text-green-500 text-3xl" />
              </div>
              <div className="content col-span-2 ms-2 md:ms-0 md:text-center">
                <p>Chemisty Lesson</p>
                <small>i m small text</small>
              </div>
              <div className="lock-icon m-auto"></div>
            </div>
          </div>

            {/* <!--Biology --> */}
            <div className="lesson-start-idea cursor-pointer hover:-translate-y-1 dark:text-white">
            <div className="grid grid-cols-4 md:grid-cols-1 lg:grid-cols-1 border border-gray-10 shadow-xl rounded-md mx-5 p-4 my-1 dark:border-none dark:bg-gray-800">
              <div className="subject-logo m-auto mb-2">
                <FcBiotech className="text-green-500 text-3xl" />
              </div>
              <div className="content col-span-2 ms-2 md:ms-0 md:text-center">
                <p>Biology Lesson</p>
                <small>i m small text</small>
              </div>
              <div className="lock-icon m-auto"></div>
            </div>
          </div>

       

           

         
        </div>
      </div>
    </>
  )
}

export default UserCardLayout