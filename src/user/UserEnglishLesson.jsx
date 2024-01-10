/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Label, Select, Button } from "flowbite-react";
import BackButton from "../component/BackButton";
import englishLesson from "../assets/image/english-lesson.svg";
import { useNavigate } from "react-router";
import GuestResponseContext from "../context/GuestResponseContext";
import { TbAbc } from "react-icons/tb";
import ResLoading from "../component/ResLoading";
const UserEnglishLesson = () => {
  const [grade, setGrade] = useState("12");
  const [unit, setUnit] = useState("1");
  const [quizTpye, setQuizType] = useState("");
  const [difficultLevel, setDifficultLevel] = useState("");
  const [quizQuantity, setQuizQuantity] = useState("5");

  const { setResponse, guestEnglishFetch } = useContext(GuestResponseContext);

  // English Lesson handel submit-------
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const handelUserEnglishLesson = async (e) => {
    e.preventDefault();
    setLoading(true);
    await guestEnglishFetch();
    setLoading(false);
    navigate("/user/response");
  };
  return (
    <>
      {loading === true ? (
        <ResLoading />
      ) : (
        <div className="container mx-auto mt-16">
          <span onClick={() => navigate("/")}>
            <BackButton />
          </span>

          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="lesson-image md:p-10 md:block hidden  ">
              <img className="dark:opacity-70 " src={englishLesson} alt="" />
            </div>
            <div className="lesson-form">
              <form onSubmit={handelUserEnglishLesson}>
                <div className="title text-center mt-3 mb-3">
                  <h1>
                    <TbAbc className="inline text-green-300 text-3xl me-2" />
                    English Lesson
                  </h1>
                </div>
                <div className="mx-8 mb-3">
                  <div className="mb-2 block">
                    <Label htmlFor="eng_grade" value="Grade" />
                  </div>
                  <Select id="eng_grade" required>
                    <option>Grade-12</option>
                  </Select>
                </div>

                <div className="mx-8 mb-3">
                  <div className="mb-2 ">
                    <Label htmlFor="user_eng_unit" value="Unit" />
                  </div>
                  <Select id="user_eng_unit">
                    <option>Choose Unit ...</option>
                    <option>Unit-1 Good Manners</option>
                    <option>Unit-2 Good Manners</option>
                    <option>Unit-3 Good Manners</option>
                    <option>Unit-4 Good Manners</option>
                    <option>Unit-5 Good Manners</option>
                    <option>Unit-6 Good Manners</option>
                    <option>Unit-7 Good Manners</option>
                    <option>Unit-8 Good Manners</option>
                    <option>Unit-9 Good Manners</option>
                    <option>Unit-10 Good Manners</option>
                    <option>Unit-11 Good Manners</option>
                    <option>Unit-12 Good Manners</option>
                  </Select>
                </div>
                <div className="mx-8 mb-3">
                  <div className="mb-2 block">
                    <Label htmlFor="user_eng_quiz_type" value="Quiz Type" />
                  </div>

                  <Select
                    value={quizTpye}
                    onChange={(e) => setQuizType(e.target.value)}
                    id="user_eng_quiz_type"
                    required
                  >
                    <option>Choose Type</option>
                    <option>True or False</option>
                    <option>Multiple Choice</option>
                    <option>Fill in the Blance</option>
                    <option>Choose Correct Answer</option>
                  </Select>
                </div>
                <div className="mx-8 mb-3">
                  <div className="mb-2 block relative">
                    <Label htmlFor="user_eng_level" value="Difficult Level" />
                  </div>
                  <Select id="user_eng_level">
                    <option>Choose Level</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                  </Select>
                </div>
                <div className="mx-8 mb-3">
                  <div className="mb-2 block relative">
                    <Label htmlFor="user_eng_quantity" value="Quiz Quantity" />
                  </div>
                  <Select id="user_eng_quantity" disabled>
                    <option>Choose Quantity ...</option>
                    <option>5 questions ...</option>
                    <option>10 questions ...</option>
                    <option>15 questions ...</option>
                  </Select>
                </div>
                <div className="col mt-8 mb-5 mx-8">
                  <Button type="submit" color="blue" className="w-full">
                    <i className="fa-solid fa-paper-plane me-2"></i>Create
                    English Lesson
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserEnglishLesson;
