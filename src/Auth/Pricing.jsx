/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import pricingImag from "../assets/image/pricing.svg";
import PricingPaymentInfoBtn from "../component/PricingPaymentInfoBtn";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Button } from "flowbite-react";
import { useNavigate } from "react-router";
import BackButton from "../component/BackButton";

const Pricing = () => {
  const navigate = useNavigate();
  let paymentStatus = null;
  paymentStatus = JSON.parse(localStorage.getItem("set_paymentStatus"));

  let role = null;
  role = JSON.parse(localStorage.getItem("set_role"));

  const { paymentSubmit, setPaymentSlip, phone, setPhone, error } =
    useContext(AuthContext);

  console.log(paymentStatus, "price");
  const handelFile = (e) => {
    const file = [];
    for (let i = 0; i < e.target.files.length; i++) {
      file.push(e.target.files[i]);
    }
    setPaymentSlip(file);
  };
  // Get payment data to sign up-----------
  const getPaymentData = () => {
    navigate("/signup");
  };

  //Submit Payment---------
  const handelPaymentSubmit = (e) => {
    e.preventDefault();
    paymentSubmit();
  };

  return (
    <>
      <div className="container mx-auto mt-16">
        <span className="" onClick={() => navigate(-1)}>
          <BackButton />
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 text-gray-500 dark:text-white">
          <div className="Pricig-image md:p-20 md:block hidden  ">
            <img className="dark:opacity-70 " src={pricingImag} alt="" />
          </div>
          <div className="Signup-form ">
            <div className="Pricig-image md:hidden block  ">
              <img
                className="dark:opacity-90 w-[150px]  mx-auto "
                src={pricingImag}
                alt=""
              />
            </div>
            <form onSubmit={handelPaymentSubmit}>
              <div className="title text-center mt-3  mb-5">
                <h1>
                  <i className="fa-solid fa-hand-holding-dollar text-yellow-400 dark:text-yellow-300 me-2"></i>
                  Pricing
                </h1>
              </div>
              <div className="info-card  hover:-translate-y-1 mb-5 mx-2 md:mx-0 shadow-lg border rounded-xl dark:bg-gray-800 dark:border-none">
                <div className="text-center">
                  {" "}
                  <h1 className="px-3 py-3 text-3xl bg-blue-500 rounded-t-xl border-blue-500 text-white">
                    28,000Ks/year
                  </h1>
                </div>

                <p className="mt-3  px-5">
                  <i className="fa-solid fa-circle-check text-green-600 me-2 dark:text-yellow-300"></i>
                  you can get fully asset.
                </p>
                <p className="mt-3 px-5">
                  <i className="fa-solid fa-circle-check text-green-600 me-2 dark:text-yellow-300"></i>
                  you can download all generate data.
                </p>
                <div className="my-3 pb-3">
                  <PricingPaymentInfoBtn />
                </div>
              </div>
              <div className="ms-3 my-3">
                <label htmlFor="payment_slip" className="me-2">
                  Payment Slip
                </label>
                <input
                  type="file"
                  id="payment_slip"
                  className="rounded-full border w-full  dark:bg-gray-800 dark:border-none"
                  onChange={handelFile}
                />
                {error && (
                  <div className="error-massage mt-1">
                    <span className="text-red-600 font-semibold">
                      {error.paymentSlip}
                    </span>
                  </div>
                )}
              </div>

              <div className=" my-3 mx-3 md:mx-0">
                <label htmlFor="p_phone">Phone No</label>
                <input
                  type="text"
                  id="p_phone"
                  className="rounded-full  w-full dark:bg-gray-800 dark:border-none"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                {error && (
                  <div className="error-massage mt-1">
                    <span className="text-red-600 font-semibold">
                      {error.phone}
                    </span>
                  </div>
                )}
              </div>
              <div className="mt-8 mb-5 mx-3 md:mx-0">
                {role == "guest" ? (
                  <>
                    {paymentStatus == null ? (
                      <Button
                        type="submit"
                        pill
                        color="blue"
                        className="w-full"
                      >
                        <i className="fa-solid fa-computer-mouse me-2"></i>
                        submit
                      </Button>
                    ) : (
                      <Button disabled pill color="blue" className="w-full">
                        <i className="fa-solid fa-computer-mouse me-2"></i>
                        submit
                      </Button>
                    )}
                  </>
                ) : (
                  <>
                    <Button
                      onClick={() => getPaymentData()}
                      pill
                      color="blue"
                      className="w-full"
                    >
                      <i className="fa-solid fa-circle-arrow-right fa-fade me-2"></i>
                      Continue
                    </Button>
                  </>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
