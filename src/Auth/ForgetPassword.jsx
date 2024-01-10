/* eslint-disable no-unused-vars */
import React from 'react'
import { Button } from 'flowbite-react'
import { useContext } from 'react'
import AuthContext from '../context/AuthContext'

const ForgetPassword = () => {
    const {error} =useContext(AuthContext)
  return (
    <>
         <div className="mt-16 mx-auto">
        <div className="grid md:grid-cols-3 grid-cols-1">
          <div className="Empty-div "></div>
          <div className="sign-form ">
            <form  className="p-3 dark:text-white">
              <div className="title text-center mt-5 mb-5">
                <h1>
                <i className="fa-solid fa-magnifying-glass-arrow-right text-blue-500 me-2"></i>
                  Forget Password Request
                </h1>
              </div>
              {error && (
                  <div className="error-massage mt-1">
                    <span className="text-red-600 bg-gray-300 font-semibold">
                      {error.email}
                    </span>
                  </div>
                )}

              <div className=" my-5 mx-3 md:mx-0">
                <label htmlFor="login_email">Email</label>
                <input
                  type="email"
                  id="login_email"
                  className="rounded-full  w-full dark:bg-gray-800 dark:border-none"
                  placeholder="email..."
                 
                />
                {error && (
                  <div className="error-massage mt-1">
                    <span className="text-red-600 font-semibold">
                      {error.email}
                    </span>
                  </div>
                )}
              </div>

              <div className="my-3  mx-3 md:mx-0 ">
                <Button
                  type="submit"
                  className="w-full"
                  gradientDuoTone="purpleToBlue"
                  pill
                >
                  <i className="fa-solid fa-right-to-bracket me-2"></i>Send
                </Button>
              </div>
            
            </form>
          </div>
          <div className="Empty-div "></div>
        </div>
      </div> 
    </>
  )
}

export default ForgetPassword