/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Button } from "flowbite-react";
import { useNavigate } from "react-router";

const Contact = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const handelContact = () => {};
  return (
    <>
      <div className="container mx-auto mt-10 border-t dark:border-gray-700">
        <div className="grid md:grid-cols-3 grid-cols-1">
          <div className="Empty-div"></div>
          <div className="contact-form">
            <form onSubmit={handelContact} className="p-3 dark:text-white">
              <div className="title text-center mt-3 mb-5">
                <h1>
                <i className="fa-regular fa-paper-plane text-blue-500 me-2"></i>
                  Contact Us
                </h1>
              </div>

              <div className=" my-3 mx-3 md:mx-0">
                <label htmlFor="signup_name">Name</label>
                <input
                  type="text"
                  className="rounded-full w-full border dark:bg-gray-800 dark:border-none"
                  id="signup_name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {error && (
                  <div className="error-massage mt-1">
                    <span className="text-red-600 font-semibold">
                      {error.name}
                    </span>
                  </div>
                )}
              </div>
              <div className=" my-3 mx-3 md:mx-0">
                <label htmlFor="signup_email">Email</label>
                <input
                  type="email"
                  id="signup_email"
                  className="rounded-full  w-full dark:bg-gray-800 dark:border-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {error && (
                  <div className="error-massage mt-1">
                    <span className="text-red-600 font-semibold">
                      {error.email}
                    </span>
                  </div>
                )}
              </div>
              <div className=" my-3 mx-3 md:mx-0">
                <label htmlFor="contact_Message">Message</label>
               <textarea id="contact_Message"  rows="3"  className="rounded-md  w-full dark:bg-gray-800 dark:border-none" placeholder="message ..."></textarea>
                {error && (
                  <div className="error-massage mt-1">
                    <span className="text-red-600 font-semibold">
                      {error.email}
                    </span>
                  </div>
                )}
              </div>

              <div className=" mt-8 mb-5 mx-3 md:mx-0 ">
                <Button type="submit" className="w-full" color="blue" pill>
                  <i className="fa-regular fa-pen-to-square me-2"></i>Send
                </Button>
              </div>
            </form>
          </div>
          <div className="Empty-div"></div>
        </div>
      </div>
    </>
  );
};

export default Contact;
