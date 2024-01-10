/* eslint-disable no-unused-vars */
import { Button } from "flowbite-react";
import React, { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import BackButton from "../component/BackButton";
import { useNavigate } from "react-router";

export const SignUp = () => {
  const navigate =useNavigate();
  const { signUp, error } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_Password] = useState("");
  //Sign Up Request
  const handelSignUp = (e) => {
    e.preventDefault();
    signUp({ name, email, gender, password, confirm_password });
  };
  return (
    <>
      <div className="mt-16 mx-auto">
        <span className="" onClick={()=>navigate(-1)}>
          <BackButton />
        </span>

        <div className="grid md:grid-cols-3 grid-cols-1">
          <div className="Empty-div "></div>
          <div className="sign-form ">
            <form onSubmit={handelSignUp} className="p-3 dark:text-white">
              <div className="title text-center mb-5">
                <h1>
                  <i className="fa-regular fa-pen-to-square text-blue-500 me-2"></i>
                  Sign Up
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
              <div className="mt-5 mb-3 mx-3 md:mx-0">
                <label htmlFor="signup_gender">Gender</label>
                <select
                  id="signup_gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="rounded-full  w-full dark:bg-gray-800 dark:border-none"
                >
                  <option value="">Choose</option>
                  <option value="male">Male</option>
                  <option value="female">female</option>
                </select>
                {error && (
                  <div className="error-massage mt-1">
                    <span className="text-red-600 font-semibold">
                      {error.gender}
                    </span>
                  </div>
                )}
              </div>
              <div className=" my-5 mx-3 md:mx-0">
                <label htmlFor="signup_password">Password</label>
                <input
                  type="password"
                  id="signup_password"
                  className="rounded-full  w-full dark:bg-gray-800 dark:border-none"
                  placeholder="password..."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {error && (
                  <div className="error-massage mt-1">
                    <span className="text-red-600 font-semibold">
                      {error.password}
                    </span>
                  </div>
                )}
              </div>
              <div className=" my-5 mx-3 md:mx-0">
                <label htmlFor="signup_confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="signup_confirmPassword"
                  className="rounded-full  w-full dark:bg-gray-800 dark:border-none"
                  placeholder="confirm password..."
                  value={confirm_password}
                  onChange={(e) => setConfirm_Password(e.target.value)}
                />
                {error && (
                  <div className="error-massage mt-1">
                    <span className="text-red-600 font-semibold">
                      {error.confirm_password
}
                    </span>
                  </div>
                )}
              </div>
              <div className=" mt-8 mb-5 mx-3 md:mx-0 ">
                <Button type="submit" className="w-full" color="blue" pill>
                  <i className="fa-regular fa-pen-to-square me-2"></i>Sign Up
                </Button>
              </div>
            </form>
          </div>
          <div className="Empty-div "></div>
        </div>
      </div>
    </>
  );
};
