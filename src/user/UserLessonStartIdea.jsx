/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Label, Select, Button } from "flowbite-react";
import lessonStart from "../assets/image/lesson-start.svg";
import BackButton from "../component/BackButton";
import { useNavigate } from "react-router";
import instance from "../api/axios";
import GuestResponseContext from "../context/GuestResponseContext";
import ResLoading from "../component/ResLoading";
const GustLessonStartIdea = () => {
  const navigate = useNavigate();
  const { LessonFetch } = useContext(GuestResponseContext);
  const [loading, setLoading] = useState(false);
  //fetch simple
  const submitForrm = async (event) => {
    event.preventDefault();
    setLoading(true);
    await LessonFetch();
    setLoading(false);
    navigate("/user/response");
  };

  return (
    <>
      {loading === true ? (
        <>
          <ResLoading />
        </>
      ) : (
        <>
          <div className="container mx-auto mt-16">
            <span onClick={() => navigate("/")}>
              <BackButton />
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="lesson-image md:p-10 md:block hidden  ">
                <img className="dark:opacity-70 " src={lessonStart} alt="" />
              </div>
              <div className="lesson-form">
                <form onSubmit={submitForrm}>
                  <div className="title text-center mt-3 mb-3">
                    <h1>
                      <i className="fa-solid fa-lightbulb text-yellow-300 me-3"></i>
                      Lesson Start Idea
                    </h1>
                  </div>
                  <div className="mx-8 mb-3">
                    <div className="mb-2 block">
                      <Label htmlFor="countries" value="Lesson" />
                    </div>
                    <Select id="countries" required>
                      <option>United States</option>
                      <option>Canada</option>
                      <option>France</option>
                      <option>Germany</option>
                    </Select>
                  </div>
                  <div className="col  mx-8">
                    <Button type="submit" color="blue" className="w-full">
                      <i className="fa-solid fa-paper-plane me-2"></i>Create
                     it
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default GustLessonStartIdea;
