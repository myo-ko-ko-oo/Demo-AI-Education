/* eslint-disable no-undef */
import { Label, Radio, Button } from "flowbite-react";
import { useContext } from "react";
import GuestResponseContext from "../context/GuestResponseContext";
import { useState } from "react";
import { Toast } from "flowbite-react";
import { HiCheck } from "react-icons/hi";

const MultipleChoice = () => {
  // Get Data from Context
  let { response } = useContext(GuestResponseContext);
  response = JSON.parse(localStorage.getItem("set_res"));
  const [correctMessage, setCorrectMessage] = useState({});
  const [wrongMessage, setWrongMessage] = useState({});
  const [question_1, setQuestion_1] = useState("");
  const [question_2, setQuestion_2] = useState("");
  const [question_3, setQuestion_3] = useState("");
  const [question_4, setQuestion_4] = useState("");
  const [question_5, setQuestion_5] = useState("");
   const [overallCorrect, setOverallCorrect] = useState(false);
  

  const handelAnswerSubmit = (e) => {
    e.preventDefault();

    checkAnswer(response, question_1, 0, setCorrectMessage, setWrongMessage, "question_1");
    checkAnswer(response, question_2, 1, setCorrectMessage, setWrongMessage, "question_2");
    checkAnswer(response, question_3, 2, setCorrectMessage, setWrongMessage, "question_3");
    checkAnswer(response, question_4, 3, setCorrectMessage, setWrongMessage, "question_4");
    checkAnswer(response, question_5, 4, setCorrectMessage, setWrongMessage, "question_5");
   
  };
  const checkAnswer = (responseArray, selectedAnswer, index, setCorrect, setWrong, questionKey) => {
    let isAllCorrect = true;

    if (responseArray && responseArray[index].answer === selectedAnswer) {
      setCorrect((prevState) => ({ ...prevState, [questionKey]: "Correct answer" }));
      setWrong((prevState) => ({ ...prevState, [questionKey]: "" }));
      setOverallCorrect(isAllCorrect);
    } else {
      isAllCorrect = false;
      setWrong((prevState) => ({ ...prevState, [questionKey]: "Wrong answer" }));
      setCorrect((prevState) => ({ ...prevState, [questionKey]: "" }));
      setOverallCorrect(isAllCorrect);
    }
      console.log(isAllCorrect);
  };

  return (
    <>
     {overallCorrect === true ? (
        <Toast className="mx-auto bg-green-300 mb-2 dark:bg-green-600">
          <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
            <HiCheck className="h-5 w-5" />
          </div>
          <div className="ml-3 text-sm font-normal dark:text-white">
          All answers are correct!
          </div>
          <Toast.Toggle />
        </Toast>
      ):("")}
    <form onSubmit={handelAnswerSubmit}>
     
        <div className="bg-gray-50 dark:bg-gray-800 rounded-md mx-1 p-3 md:7 ">
          <div className="border-b py-3 mb-4 dark:border-gray-700">
            <p className=" font-semibold dark:text-white text-md">
              Fill in the blank with correct answer.
            </p>
          </div>

          <ul>
            <li>
              <p>1-{response && response[0].question}</p>
              <div className="flex gap-3 mt-2 mb-5">
                <div className="flex items-center gap-2">
                  <Radio
                    id="answer1-1"
                    name="question_1"
                    value={response && response[1].answer}
                    onChange={(e) => setQuestion_1(e.target.value)}
                  />
                  <Label htmlFor="answer1-1">
                    {response && response[1].answer}
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Radio
                    id="answer1-2"
                    name="question_1"
                    value={response && response[0].answer}
                    onChange={(e) => setQuestion_1(e.target.value)}
                  />
                  <Label htmlFor="answer1-2">
                    {response && response[0].answer}
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Radio
                    id="answer1-3"
                    name="question_1"
                    value={response && response[4].answer}
                    onChange={(e) => setQuestion_1(e.target.value)}
                  />
                  <Label htmlFor="answer1-3">
                    {response && response[4].answer}
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Radio
                    id="answer1-4"
                    name="question_1"
                    value={response && response[3].answer}
                    onChange={(e) => setQuestion_1(e.target.value)}
                  />
                  <Label htmlFor="answer1-4">
                    {response && response[3].answer}
                  </Label>
                </div>
              </div>
              {correctMessage.question_1 && (
                <div className="error-massage my-1">
                  <p className="text-green-500 font-semibold">
                  <i className="fa-regular fa-circle-check me-1"></i>{correctMessage.question_1}
                  </p>
                </div>
              )}
              {wrongMessage.question_1 && (
                <div className="error-massage my-1">
                  <p className="text-red-600 font-semibold">
                  <i className="fa-regular fa-circle-xmark me-1"></i>{wrongMessage.question_1}
                  </p>
                </div>
              )}
            </li>
            <li>
              <p>2-{response && response[1].question}</p>
              <div className="flex gap-3 mt-2 mb-5">
                <div className="flex items-center gap-2">
                  <Radio
                    id="answer2-1"
                    name="question_2"
                    value={response && response[4].answer}
                    onChange={(e) => setQuestion_2(e.target.value)}
                  />
                  <Label htmlFor="answer2-1">
                    {response && response[4].answer}
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Radio
                    id="answer2-2"
                    name="question_2"
                    value={response && response[4].answer}
                    onChange={(e) => setQuestion_2(e.target.value)}
                  />
                  <Label htmlFor="answer2-2">
                    {response && response[3].answer}
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Radio
                    id="answer2-3"
                    name="question_2"
                    value={response && response[1].answer}
                    onChange={(e) => setQuestion_2(e.target.value)}
                  />
                  <Label htmlFor="answer2-3">
                    {" "}
                    {response && response[1].answer}
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Radio
                    id="answer2-4"
                    name="question_2"
                    value={response && response[0].answer}
                    onChange={(e) => setQuestion_2(e.target.value)}
                  />
                  <Label htmlFor="answer2-4">
                    {response && response[0].answer}
                  </Label>
                </div>
              </div>
              {correctMessage.question_2 && (
                <div className="error-massage my-1">
                  <p className="text-green-500 font-semibold">
                    <i className="fa-regular fa-circle-check me-1"></i>{correctMessage.question_2}
                  </p>
                </div>
              )}
              {wrongMessage.question_2 && (
                <div className="error-massage my-1">
                  <p className="text-red-600 font-semibold">
                  <i className="fa-regular fa-circle-xmark me-1"></i>{wrongMessage.question_2}
                  </p>
                </div>
              )}
            </li>
            <li>
              <p>3-{response && response[2].question}</p>
              <div className="flex gap-3 mt-2 mb-5">
                <div className="flex items-center gap-2">
                  <Radio
                    id="answer3-1"
                    name="question_3"
                    value={response && response[3].answer}
                    onChange={(e) => setQuestion_3(e.target.value)}
                  />
                  <Label htmlFor="answer3-1">
                    {response && response[3].answer}
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Radio
                    id="answer3-2"
                    name="question_3"
                    value={response && response[1].answer}
                    onChange={(e) => setQuestion_3(e.target.value)}
                  />
                  <Label htmlFor="answer3-2">
                    {response && response[1].answer}
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Radio
                    id="answer3-3"
                    name="question_3"
                    value={response && response[4].answer}
                    onChange={(e) => setQuestion_3(e.target.value)}
                  />
                  <Label htmlFor="answer3-3">
                    {response && response[4].answer}
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Radio
                    id="answer3-4"
                    name="question_3"
                    value={response && response[2].answer}
                    onChange={(e) => setQuestion_3(e.target.value)}
                  />
                  <Label htmlFor="answer3-4">
                    {response && response[2].answer}
                  </Label>
                </div>
              </div>
              {correctMessage.question_3 && (
                <div className="error-massage my-1">
                  <p className="text-green-500 font-semibold">
                    <i className="fa-regular fa-circle-check me-1"></i>{correctMessage.question_3}
                  </p>
                </div>
              )}
              {wrongMessage.question_3 && (
                <div className="error-massage my-1">
                  <p className="text-red-600 font-semibold">
                  <i className="fa-regular fa-circle-xmark me-1"></i>{wrongMessage.question_3}
                  </p>
                </div>
              )}
            </li>
            <li>
              <p>4-{response && response[3].question}</p>
              <div className="flex gap-3 mt-2 mb-5">
                <div className="flex items-center gap-2">
                  <Radio
                    id="answer4-1"
                    name="question_4"
                    value={response && response[3].answer}
                    onChange={(e) => setQuestion_4(e.target.value)}
                  />
                  <Label htmlFor="answer4-1">
                    {response && response[3].answer}
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Radio
                    id="answer4-2"
                    name="question_4"
                    value={response && response[0].answer}
                    onChange={(e) => setQuestion_4(e.target.value)}
                  />
                  <Label htmlFor="answer4-2">
                    {response && response[0].answer}
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Radio
                    id="answer4-3"
                    name="question_4"
                    value={response && response[2].answer}
                    onChange={(e) => setQuestion_4(e.target.value)}
                  />
                  <Label htmlFor="answer4-3">
                    {response && response[2].answer}
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Radio
                    id="answer4-4"
                    name="question_4"
                    value={response && response[1].answer}
                    onChange={(e) => setQuestion_4(e.target.value)}
                  />
                  <Label htmlFor="answer4-4">
                    {response && response[1].answer}
                  </Label>
                </div>
              </div>
              {correctMessage.question_4 && (
                <div className="error-massage my-1">
                  <p className="text-green-500 font-semibold">
                    <i className="fa-regular fa-circle-check me-1"></i>{correctMessage.question_4}
                  </p>
                </div>
              )}
              {wrongMessage.question_4 && (
                <div className="error-massage my-1">
                  <p className="text-red-600 font-semibold">
                  <i className="fa-regular fa-circle-xmark me-1"></i>{wrongMessage.question_4}
                  </p>
                </div>
              )}
            </li>
            <li>
              <p>5-{response && response[4].question}</p>
              <div className="flex gap-3 mt-2 mb-5">
                <div className="flex items-center gap-2">
                  <Radio
                    id="answer5-1"
                    name="question_5"
                    value={response && response[3].answer}
                    onChange={(e) => setQuestion_5(e.target.value)}
                  />
                  <Label htmlFor="answer5-1">
                    {response && response[3].answer}
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Radio
                    id="answer5-2"
                    name="question_5"
                    value={response && response[0].answer}
                    onChange={(e) => setQuestion_5(e.target.value)}
                  />
                  <Label htmlFor="answer5-2">
                    {response && response[0].answer}
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Radio
                    id="answer5-3"
                    name="question_5"
                    value={response && response[4].answer}
                    onChange={(e) => setQuestion_5(e.target.value)}
                  />
                  <Label htmlFor="answer5-3">
                    {response && response[4].answer}
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Radio
                    id="answer5-4"
                    name="question_5"
                    value={response && response[2].answer}
                    onChange={(e) => setQuestion_5(e.target.value)}
                  />
                  <Label htmlFor="answer5-4">
                    {response && response[2].answer}
                  </Label>
                </div>
              </div>
              {correctMessage.question_5&& (
                <div className="error-massage my-1">
                  <p className="text-green-500 font-semibold">
                    <i className="fa-regular fa-circle-check me-1"></i>{correctMessage.question_5}
                  </p>
                </div>
              )}
              {wrongMessage.question_5 && (
                <div className="error-massage my-1">
                  <p className="text-red-600 font-semibold">
                  <i className="fa-regular fa-circle-xmark me-1"></i>{wrongMessage.question_5}
                  </p>
                </div>
              )}
            </li>
          </ul>

          <div className="buttons mt-5 flex justify-end">
            <Button type="submit" color="blue" className="">
              Submit
            </Button>
          </div>
        </div>
      </form>
  
     
    </>
  );
};

export default MultipleChoice;
