import { Label, Radio, Button, Toast } from "flowbite-react";
import { HiCheck } from "react-icons/hi";
import { RiAlarmWarningLine } from "react-icons/ri";
import { MdOutlineDangerous } from "react-icons/md";
import { useContext } from "react";
import GuestResponseContext from "../context/GuestResponseContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const TrueOrFalseQuestion = () => {
  // Get Data from Context
  let { response } = useContext(GuestResponseContext);
  response = JSON.parse(localStorage.getItem("set_res"));
  const navigate = useNavigate();
  const [retry, setRetry] = useState(false);

  const [correctMessage, setCorrectMessage] = useState({});
  const [wrongMessage, setWrongMessage] = useState({});
  const [question_1, setQuestion_1] = useState("");
  const [question_2, setQuestion_2] = useState("");
  const [question_3, setQuestion_3] = useState("");
  const [question_4, setQuestion_4] = useState("");
  const [question_5, setQuestion_5] = useState("");

  const [successMessage, setSuccessMessage] = useState("");
  const [warningMessage, setWarningMessage] = useState("");
  const [dangerMessage, setDangerMessage] = useState("");

 

  const handelTrueFalseSubmit = (e) => {
    e.preventDefault();
    const responseAnswers = response.map((data) => data.answer);

    const questionAnswers = {
      question_1: question_1 ? JSON.parse(question_1) : undefined,
      question_2: question_2 ? JSON.parse(question_2) : undefined,
      question_3: question_3 ? JSON.parse(question_3) : undefined,
      question_4: question_4 ? JSON.parse(question_4) : undefined,
      question_5: question_5 ? JSON.parse(question_5) : undefined,
    };

    // console.log(responseAnswers, questionAnswers);
    let correctCount = 0;

    responseAnswers.forEach((answer, index) => {
      const questionKey = `question_${index + 1}`;

      if (questionAnswers[questionKey] !== undefined) {
        if (answer.toString() === questionAnswers[questionKey].toString()) {
          setCorrectMessage((prevState) => ({
            ...prevState,
            [questionKey]: "Correct Answer",
          }));
          setWrongMessage((prevState) => ({ ...prevState, [questionKey]: "" }));
          correctCount++;
        } else {
          setWrongMessage((prevState) => ({
            ...prevState,
            [questionKey]: "Wrong Answer",
          }));
          setCorrectMessage((prevState) => ({
            ...prevState,
            [questionKey]: "",
          }));
        }
      } else {
        setWrongMessage((prevState) => ({
          ...prevState,
          [questionKey]: "Please choose an answer",
        }));
        setCorrectMessage((prevState) => ({ ...prevState, [questionKey]: "" }));
      }
    });

    const correctPercentage = (correctCount / 5) * 100;

    if (correctPercentage === 100) {
      setSuccessMessage(
        `Congratulations! You answered all 5 questions correctly (${correctPercentage}%).`
      );
    } else if (correctPercentage >= 80) {
      setSuccessMessage(
        `Well done! You answered ${correctCount} out of 5 questions correctly (${correctPercentage}%).`
      );
    } else if (correctPercentage >= 60) {
      setWarningMessage(
        `You answered ${correctCount} out of 5 questions correctly (${correctPercentage}%).`
      );
    }else if (correctPercentage >= 40) {
      setDangerMessage(
        `You need to improve ${correctCount} out of 5 questions correctly (${correctPercentage}%).`
      );
    }
    else if (correctPercentage >= 20) {
      setDangerMessage(
        `You need to improve ${correctCount} out of 5 questions correctly (${correctPercentage}%).`
      );
    }else if (correctPercentage >= 0) {
      setDangerMessage(
        `You need to improve ${correctCount} out of 5 questions correctly (${correctPercentage}%).`
      );
    }
    setRetry(true);
  };

  const initialState = {
    correctMessage: {},
    wrongMessage: {},
    question_1: "", 
    question_2: "",
    question_3: "",
    question_4: "",
    question_5: "",
    successMessage: "",
    warningMessage: "",
    dangerMessage: "",
    retry: false,}

  const resetState = () => {
    setCorrectMessage(initialState.correctMessage);
    setWrongMessage(initialState.wrongMessage);
    setQuestion_1(initialState.question_1);
    setQuestion_2(initialState.question_2);
    setQuestion_3(initialState.question_3);
    setQuestion_4(initialState.question_4);
    setQuestion_5(initialState.question_5);
    setSuccessMessage(initialState.successMessage);
    setWarningMessage(initialState.warningMessage);
    setDangerMessage(initialState.dangerMessage);
    setRetry(initialState.retry);
  }

  const handelRetry = (e) => {
    e.preventDefault();
    resetState();


    console.log(retry);
  };
  

  return (
    <>
      {successMessage && (
        <Toast className="mx-auto bg-green-300 mb-2 dark:bg-green-600">
          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
            <HiCheck className="h-5 w-5" />
          </div>
          <div className="ml-3 text-sm font-normal dark:text-white">
            {successMessage}
          </div>
          <Toast.Toggle />
        </Toast>
      )}
      {warningMessage && (
        <Toast className="mx-auto bg-yellow-300 mb-2 dark:bg-yellow-400">
          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
            <RiAlarmWarningLine className="h-6 w-6 text-yellow-300" />
          </div>
          <div className="ml-3 text-sm font-normal dark:text-white">
            {warningMessage}
          </div>
          <Toast.Toggle />
        </Toast>
      )}
      {dangerMessage && (
        <Toast className="mx-auto bg-rose-500 text-white mb-2 dark:bg-rose-500">
          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
            < MdOutlineDangerous className="h-6 w-6 text-rose-400" />
          </div>
          <div className="ml-3 text-sm font-normal dark:text-white">
            {dangerMessage}
          </div>
          <Toast.Toggle />
        </Toast>
      )}
      <form onSubmit={handelTrueFalseSubmit}>
        <div className="bg-gray-50 dark:bg-gray-800 rounded-md mx-1 p-3 md:7 ">
          <div className="border-b py-3 mb-4 dark:border-gray-700">
            <p className=" font-semibold dark:text-white text-md">
              Answer the following questions,Choose TRUE or FALSE.
            </p>
          </div>

          <ul>
            <li>
              <p>1-{response && response[0].question}</p>
              <div className="flex gap-3 mt-2 mb-5">
                <div className="flex items-center gap-2">
                 
                  <Radio
                    id="q1-true"
                    name="question_1"
                    value={true}
                    onChange={(e) => setQuestion_1(e.target.value)}
                  />
                  <Label htmlFor="q1-true">TRUE</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Radio
                    id="q1-false"
                    name="question_1"
                    value={false}
                    onChange={(e) => setQuestion_1(e.target.value)}
                  />
                  <Label htmlFor="q1-false">FALSE</Label>
                </div>
              </div>
              {correctMessage.question_1 && (
                <div className="error-massage my-1">
                  <p className="text-green-500 font-semibold">
                    <i className="fa-regular fa-circle-check me-1"></i>
                    {correctMessage.question_1}
                  </p>
                </div>
              )}
              {wrongMessage.question_1 && (
                <div className="error-massage my-1">
                  <p className="text-red-600 font-semibold">
                    <i className="fa-regular fa-circle-xmark me-1"></i>
                    {wrongMessage.question_1}
                  </p>
                </div>
              )}
            </li>
            <li>
              <p>2-{response && response[1].question}</p>
              <div className="flex gap-3 mt-2 mb-5">
                <div className="flex items-center gap-2">
                  <Radio
                    id="q2-true"
                    name="question_2"
                    value={true}
                    onChange={(e) => setQuestion_2(e.target.value)}
                  />
                  <Label htmlFor="q2-true">TRUE</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Radio
                    id="q2-false"
                    name="question_2"
                    value={false}
                    onChange={(e) => setQuestion_2(e.target.value)}
                  />
                  <Label htmlFor="q2-false">FALSE</Label>
                </div>
              </div>
              {correctMessage.question_2 && (
                <div className="error-massage my-1">
                  <p className="text-green-500 font-semibold">
                    <i className="fa-regular fa-circle-check me-1"></i>
                    {correctMessage.question_2}
                  </p>
                </div>
              )}
              {wrongMessage.question_2 && (
                <div className="error-massage my-1">
                  <p className="text-red-600 font-semibold">
                    <i className="fa-regular fa-circle-xmark me-1"></i>
                    {wrongMessage.question_2}
                  </p>
                </div>
              )}
            </li>
            <li>
              <p>3-{response && response[2].question}</p>
              <div className="flex gap-3 mt-2 mb-5">
                <div className="flex items-center gap-2">
                  <Radio
                    id="q3_true"
                    name="question_3"
                    value={true}
                    onChange={(e) => setQuestion_3(e.target.value)}
                  />
                  <Label htmlFor="q3_true">TRUE</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Radio
                    id="q3_false"
                    name="question_3"
                    value={false}
                    onChange={(e) => setQuestion_3(e.target.value)}
                  />
                  <Label htmlFor="q3_false">FALSE</Label>
                </div>
              </div>
              {correctMessage.question_3 && (
                <div className="error-massage my-1">
                  <p className="text-green-500 font-semibold">
                    <i className="fa-regular fa-circle-check me-1"></i>
                    {correctMessage.question_3}
                  </p>
                </div>
              )}
              {wrongMessage.question_3 && (
                <div className="error-massage my-1">
                  <p className="text-red-600 font-semibold">
                    <i className="fa-regular fa-circle-xmark me-1"></i>
                    {wrongMessage.question_3}
                  </p>
                </div>
              )}
            </li>
            <li>
              <p>4-{response && response[3].question}</p>
              <div className="flex gap-3 mt-2 mb-5">
                <div className="flex items-center gap-2">
                  <Radio
                    id="q4_true"
                    name="question_4"
                    value={true}
                    onChange={(e) => setQuestion_4(e.target.value)}
                  />
                  <Label htmlFor="q4_true">TRUE</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Radio
                    id="q4_false"
                    name="question_4"
                    value={false}
                    onChange={(e) => setQuestion_4(e.target.value)}
                  />
                  <Label htmlFor="q4_false">FALSE</Label>
                </div>
              </div>
              {correctMessage.question_4 && (
                <div className="error-massage my-1">
                  <p className="text-green-500 font-semibold">
                    <i className="fa-regular fa-circle-check me-1"></i>
                    {correctMessage.question_4}
                  </p>
                </div>
              )}
              {wrongMessage.question_4 && (
                <div className="error-massage my-1">
                  <p className="text-red-600 font-semibold">
                    <i className="fa-regular fa-circle-xmark me-1"></i>
                    {wrongMessage.question_4}
                  </p>
                </div>
              )}
            </li>
            <li>
              <p>5-{response && response[4].question}</p>
              <div className="flex gap-3 mt-2 mb-5">
                <div className="flex items-center gap-2">
                  <Radio
                    id="q5_true"
                    name="question_5"
                    value={true}
                    onChange={(e) => setQuestion_5(e.target.value)}
                  />
                  <Label htmlFor="q5_true">TRUE</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Radio
                    id="q5_false"
                    name="question_5"
                    value={false}
                    onChange={(e) => setQuestion_5(e.target.value)}
                  />
                  <Label htmlFor="q5_false">FALSE</Label>
                </div>
              </div>
              {correctMessage.question_5 && (
                <div className="error-massage my-1">
                  <p className="text-green-500 font-semibold">
                    <i className="fa-regular fa-circle-check me-1"></i>
                    {correctMessage.question_5}
                  </p>
                </div>
              )}
              {wrongMessage.question_5 && (
                <div className="error-massage my-1">
                  <p className="text-red-600 font-semibold">
                    <i className="fa-regular fa-circle-xmark me-1"></i>
                    {wrongMessage.question_5}
                  </p>
                </div>
              )}
            </li>
          </ul>

          <div className="buttons mt-5 flex justify-end">
            {retry === true ? (
              <>
            <Button
                  onClick={()=> navigate('/student/english-lesson')}
                  type="submit"
                  outline
                  color="blue"
                  className="me-2"
                >
                  Skip
                </Button>
                <Button
                  onClick={handelRetry}
                  type="submit"
                  color="blue"
                  className=""
                >
                  Retry
                </Button>
              </>
            ) : (
              <>
              
                <Button type="submit" color="blue" className="">
                  Submit
                </Button>
              </>
            )}
          </div>
        </div>
      </form>
    </>
  );
};

export default TrueOrFalseQuestion;
