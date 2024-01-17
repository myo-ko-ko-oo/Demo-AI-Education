import { Label, Radio, Button, Toast } from "flowbite-react";
import { HiCheck } from "react-icons/hi";
import { useContext } from "react";
import GuestResponseContext from "../context/GuestResponseContext";
import { useState } from "react";
const TrueOrFalseQuestion = () => {
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

  const handelTrueFalseSubmit = (e) => {
    e.preventDefault();
    checkAnswer(response, question_1, 0, setCorrectMessage, setWrongMessage, "question_1");
    checkAnswer(response, question_2, 1, setCorrectMessage, setWrongMessage, "question_2");
    checkAnswer(response, question_3, 2, setCorrectMessage, setWrongMessage, "question_3");
    checkAnswer(response, question_4, 3, setCorrectMessage, setWrongMessage, "question_4");
    checkAnswer(response, question_5, 4, setCorrectMessage, setWrongMessage, "question_5");
  };
  const checkAnswer = (responseArray, selectedAnswer, index, setCorrect, setWrong, questionKey) => {
    let isCorrect = false;
  
  if (responseArray && responseArray[index].answer !== undefined) {
    const correctAnswer = responseArray[index].answer;

    // Convert both correct and selected answers to strings and compare
    isCorrect = correctAnswer.toString() === selectedAnswer.toString();
  }

  if (isCorrect) {
    setCorrect((prevState) => ({ ...prevState, [questionKey]: "Correct answer" }));
    setWrong((prevState) => ({ ...prevState, [questionKey]: "" }));
  } else {
    setWrong((prevState) => ({ ...prevState, [questionKey]: "Wrong answer" }));
    setCorrect((prevState) => ({ ...prevState, [questionKey]: "" }));
  }

  setOverallCorrect(isCorrect);
  }
  
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
      ) : (
        ""
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
            <Button type="submit" color="blue" className="">
              Submit
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default TrueOrFalseQuestion;
