/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import GuestResponseContext from "../context/GuestResponseContext";
import BackButton from "../component/BackButton";
import { useNavigate } from "react-router";
import { Button } from "flowbite-react";
import ResLoading from "../component/ResLoading";


const UserResponsePage = () => {
  const navigate = useNavigate();

  const [typedText, setTypedText] = useState("");
  const [loading, setLoading] = useState(true);

  //Get Data from Context
  let { response } = useContext(GuestResponseContext);

  //Typewrite Effect
  useEffect(() => {
    const fetchData = async () => {
      response = JSON.parse(localStorage.getItem("set_res"));

      if (response) {
        await typeEffect(response);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const typeEffect = async (text) => {
    for (let i = 0; i <= text.length; i++) {
      setTypedText(text.substring(0, i));
      await new Promise((resolve) => setTimeout(resolve, 5)); // Adjust typing speed here
    }
  };

  return (
    <>
     
          {/* {displayText} */}
          <div className="container mt-16 mx-auto  text-gray-500 dark:text-white">
            <span onClick={() => navigate(-1)}>
              <BackButton />
            </span>

            <div className="grid md:grid-cols-4 grid-cols-1">
              <div className=""></div>
              <div className="col-span-2  ">
                <div className="text-center mb-3">
                  <h1>
                    <i className="fa-regular fa-eye me-2 text-blue-500 dark:text-yellow-300"></i>
                    View Your Result
                  </h1>
                </div>

                <div className="typewrite-effect prose lg:prose-md dark:text-white ">
                  <textarea
                    value={typedText}
                    className="w-full prose lg:prose-md  bg-gray-50  rounded-md border-gray-300 p-4 md:p-6 dark:border-none dark:bg-gray-800 dark:text-white"
                    id=""
                    cols="30"
                    rows="10"
                    readOnly
                  ></textarea>
                </div>
                <div className="my-5 ">
                  <Button type="submit" color="blue" className="w-full">
                    <i className="fa-solid fa-download fa-bounce me-2"></i>
                    Download Result
                  </Button>
                </div>
              </div>
              <div className=""></div>
            </div>
          </div>
        </>
   
  );
};

export default UserResponsePage;

{
  /* <textarea
                    id="typewrite-effect"
                    className="w-full prose lg:prose-md  bg-gray-50  rounded-md border-gray-300 p-4 md:p-6 dark:border-none dark:bg-gray-800 dark:text-white"
                    cols="50"
                    rows="20"
                    value={displayedText}
                    readOnly
                  /> */
}
{
  /* <Typewriter words={[response]} typeSpeed={3}  ></Typewriter> */
}
