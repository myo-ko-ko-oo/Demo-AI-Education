/* eslint-disable react-hooks/exhaustive-deps */
import { useContext } from "react";
// import { useState } from "react";
import GuestResponseContext from "../context/GuestResponseContext";
import BackButton from "../component/BackButton";
import { useNavigate } from "react-router";
import TrueOrFalseQuestion from "./TrueOrFalseQuestion";
import MultipleChoice from "./MultipleChoice";
import { Fade } from "react-awesome-reveal";
// import TrueOrFalseQuestion from "./TrueOrFalseQuestion";
// import MultipleChoice from "./MultipleChoice";
const StudentResponsePage = () => {
  const navigate = useNavigate();

  // Get Data from Context
  let { response } = useContext(GuestResponseContext);
  response = JSON.parse(localStorage.getItem("set_res"));

  return (
    <>
      <div className="container mt-16 mx-auto  text-gray-500 dark:text-white">
        <span onClick={() => navigate(-1)}>
          <BackButton />
        </span>

        <div className="grid md:grid-cols-4 grid-cols-1">
          <div className=""></div>
          <div className="col-span-2  ">
            <div className="text-center mb-3">
              <h1>
                <i className="fa-regular  fa-circle-question me-2 text-blue-500 dark:text-yellow-300"></i>
                Answer the question
              </h1>
            </div>
            {/* Question Area */}
            {response && response[0].type === "type_1" ? (
              <>
                <Fade direction="down" duration={2000}>
                  <TrueOrFalseQuestion />
                </Fade>
              </>
            ) : (
              <>
                <Fade direction="left">
                  <MultipleChoice />
                </Fade>
              </>
            )}
          </div>
          <div className=""></div>
        </div>
      </div>
    </>
  );
};

export default StudentResponsePage;
