/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Button, Toast } from 'flowbite-react';
import { useLocation } from 'react-router';

const PaymentNotiMessage = ({message}) => {
  
  return (
    <>
        <Toast>
      <div className="flex items-start">
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-500 dark:bg-cyan-900 dark:text-cyan-300">
        <i className="fa-regular fa-face-laugh-beam fa-bounce"></i>
        </div>
        <div className="ml-3 text-sm font-normal">
          <span className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">Thank You For Signup Account</span>
          <div className="mb-2 text-sm font-normal">{message}</div>
          {/* <div className="flex-start flex gap-2">
            <div className="w-auto">
              <Button size="xs">Update</Button>
            </div>
            <div className="w-auto">
              <Button color="light" size="xs">
                Not now
              </Button>
            </div>
          </div> */}
        </div>
        <Toast.Toggle />
      </div>
    </Toast> 
    </>
  )
}

export default PaymentNotiMessage