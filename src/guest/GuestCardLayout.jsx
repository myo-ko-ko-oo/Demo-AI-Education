/* eslint-disable no-unused-vars */
import React from "react";
import { HiOutlineLightBulb } from "react-icons/hi";
import { TbAbc } from "react-icons/tb";
import { LuPencilRuler } from "react-icons/lu";
import { FcBiomass } from "react-icons/fc";
import { useNavigate } from "react-router";
import { FcBiotech } from "react-icons/fc";
import { FaStarOfDavid } from "react-icons/fa6";
import { MdOutlineMessage } from "react-icons/md";
import { FaPlaneDeparture } from "react-icons/fa";
const GuestCardLayout = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container mx-auto  my-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {/* <!--lesson start --> */}
          <div
            onClick={() => navigate("/guest/lesson-start-idea")}
            className="lesson-start-idea cursor-pointer hover:-translate-y-1 dark:text-white animate-bounce "
          >
            <div className="grid grid-cols-4 md:grid-cols-1 lg:grid-cols-1 border-2 border-gray-10 shadow-xl rounded-md mx-5 p-4 my-1 dark:border-none dark:bg-gray-800 ">
              <div className="subject-logo m-auto mb-2">
                <HiOutlineLightBulb className="text-yellow-300 text-3xl" />
              </div>
              <div className="content col-span-3 ms-2 md:ms-0 md:text-center">
                <p>Lesson Start Idea</p>
                <small>i m small text</small>
              </div>
              <div className="lock-icon m-auto"></div>
            </div>
          </div>
          {/* <!--English --> */}
          <div
            onClick={() => navigate("/guest/english-lesson")}
            className="lesson-start-idea cursor-pointer hover:-translate-y-1 dark:text-white"
          >
            <div className="grid grid-cols-4 md:grid-cols-1 lg:grid-cols-1 border-2 border-gray-10 shadow-xl rounded-md mx-5 p-4 my-1 dark:border-none dark:bg-gray-800 ">
              <div className="subject-logo m-auto mb-2">
                <TbAbc className="text-green-300 text-3xl" />
              </div>
              <div className="content col-span-2 ms-2 md:ms-0 md:text-center">
                <p>English Lesson</p>
                <small>i m small text</small>
              </div>
              <div className="lock-icon m-auto"></div>
            </div>
          </div>

          {/* <!--Eassy --> */}
          <div className="lesson-start-idea cursor-pointer hover:-translate-y-1 dark:text-white">
            <div className=" grid grid-cols-4 md:grid-cols-1 lg:grid-cols-1 border-2 border-gray-10 shadow-xl rounded-md mx-5 p-4 my-1 dark:border-none dark:bg-gray-800">
              <div className="subject-logo m-auto md:m-0   ">
                <div className="flex justify-between mb-3 ">
                  <div className=""></div>
                  <MdOutlineMessage className="text-rose-500 text-3xl" />
                  {/* <FcPrivacy className="hidden md:block text-xl animate-bounce" /> */}
                  <i className="fa-solid fa-lock fa-beat hidden md:block text-yellow-300"></i>
                </div>
              </div>
              <div className="content col-span-2 ms-2 md:ms-0 md:text-center">
                <p>Letter/Eassy</p>
                <small>i m small text</small>
              </div>
              <div className="lock-icon m-auto ">
                {" "}
                <i className="fa-solid fa-lock fa-beat md:hidden block text-yellow-300"></i>
              </div>
            </div>
          </div>

          {/* <!--Physics --> */}
          <div className="lesson-start-idea cursor-pointer hover:-translate-y-1 dark:text-white">
            <div className=" grid grid-cols-4 md:grid-cols-1 lg:grid-cols-1 border-2 border-gray-10 shadow-xl rounded-md mx-5 p-4 my-1 dark:border-none dark:bg-gray-800">
              <div className="subject-logo m-auto md:m-0   ">
                <div className="flex justify-between mb-3 ">
                  <div className=""></div>
                  <LuPencilRuler className="text-purple-500 text-2xl" />
                  {/* <FcPrivacy className="hidden md:block text-xl animate-bounce" /> */}
                  <i className="fa-solid fa-lock fa-beat hidden md:block text-yellow-300"></i>
                </div>
              </div>
              <div className="content col-span-2 ms-2 md:ms-0 md:text-center">
                <p>Physics Lesson</p>
                <small>i m small text</small>
              </div>
              <div className="lock-icon m-auto ">
                {" "}
                <i className="fa-solid fa-lock fa-beat md:hidden block text-yellow-300"></i>
              </div>
            </div>
          </div>

          {/* <!--Chemistry --> */}
          <div className="lesson-start-idea cursor-pointer hover:-translate-y-1 dark:text-white">
            <div className=" grid grid-cols-4 md:grid-cols-1 lg:grid-cols-1 border-2 border-gray-10 shadow-xl rounded-md mx-5 p-4 my-1 dark:border-none dark:bg-gray-800">
              <div className="subject-logo m-auto md:m-0   ">
                <div className="flex justify-between mb-2">
                  <div className=""></div>
                  <FcBiomass className=" text-3xl" />
                  <i className="fa-solid fa-lock fa-beat hidden md:block text-yellow-300"></i>
                </div>
              </div>
              <div className="content col-span-2 ms-2 md:ms-0 md:text-center">
                <p>Chemistry Lesson</p>
                <small>i m small text</small>
              </div>
              <div className="lock-icon m-auto ">
                <i className="fa-solid fa-lock fa-beat md:hidden block text-yellow-300"></i>
              </div>
            </div>
          </div>

          {/* <!--Biology --> */}
          <div className="lesson-start-idea cursor-pointer hover:-translate-y-1 dark:text-white">
            <div className=" grid grid-cols-4 md:grid-cols-1 lg:grid-cols-1 border-2 border-gray-10 shadow-xl rounded-md mx-5 p-4 my-1 dark:border-none dark:bg-gray-800">
              <div className="subject-logo m-auto md:m-0   ">
                <div className="flex justify-between mb-2">
                  <div className=""></div>
                  <FcBiotech className="text-green-500 text-3xl" />
                  <i className="fa-solid fa-lock fa-beat hidden md:block text-yellow-300"></i>
                </div>
              </div>
              <div className="content col-span-2 ms-2 md:ms-0 md:text-center">
                <p>Biology Lesson</p>
                <small>i m small text</small>
              </div>
              <div className="lock-icon m-auto ">
                {" "}
                <i className="fa-solid fa-lock fa-beat md:hidden block text-yellow-300"></i>
              </div>
            </div>
          </div>

          {/* <!--Astrology --> */}
          <div
            onClick={() => navigate("/guest/astrology")}
            className="lesson-start-idea cursor-pointer hover:-translate-y-1 dark:text-white"
          >
            <div className=" grid grid-cols-4 md:grid-cols-1 lg:grid-cols-1 border-2 border-gray-10 shadow-xl rounded-md mx-5 p-4 my-1 dark:border-none dark:bg-gray-800">
              <div className="subject-logo m-auto mb-2">
                <FaStarOfDavid className="text-orange-500 text-3xl" />
              </div>
              <div className="content col-span-3 ms-2 md:ms-0 md:text-center">
                <p>Astrology</p>
                <small>i m small text</small>
              </div>
            </div>
          </div>

          {/* <!--Job Guide --> */}
          <div
            onClick={() => navigate("/guest/job-guide")}
            className="lesson-start-idea cursor-pointer hover:-translate-y-1 dark:text-white"
          >
            <div className=" grid grid-cols-4 md:grid-cols-1 lg:grid-cols-1 border-2 border-gray-10 shadow-xl rounded-md mx-5 p-4 my-1 dark:border-none dark:bg-gray-800">
              <div className="subject-logo m-auto mb-2">
                <FaPlaneDeparture className="text-lime-500 text-3xl" />
              </div>
              <div className="content col-span-3 ms-2 md:ms-0 md:text-center">
                <p>Oversea Job Guide</p>
                <small>i m small text</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GuestCardLayout;
