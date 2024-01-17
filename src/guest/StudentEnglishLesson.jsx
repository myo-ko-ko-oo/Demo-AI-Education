import { useContext, useState } from "react";
import { Label, Select, Button } from "flowbite-react";
import BackButton from "../component/BackButton";
import englishLesson from "../assets/image/english-lesson.svg";
import { useNavigate } from "react-router";
import GuestResponseContext from "../context/GuestResponseContext";

import ResLoading from "../component/ResLoading";
import { FcReadingEbook } from "react-icons/fc";
const StudentEnglishLesson = () => {
  const [grade, setGrade] = useState("12");
  const [unit, setUnit] = useState("1");
  const [quizTpye, setQuizType] = useState("");
  const [difficultLevel, setDifficultLevel] = useState("");
  // const [quizQuantity, setQuizQuantity] = useState("");
console.log(grade,setGrade);
  const { setResponse } = useContext(GuestResponseContext);
  const response_1 = [
    {_id:1,question:"Individuals should remember that every society has its list of good and bad manners.",answer:true,type:quizTpye},
    {_id:2,question:"Elders should teach the younger generation qualities like being respectful, upright, honest, and forgiving.",answer:true},
    {_id:3,question:"Students might not consider their classmates and senior students as role models in school.",answer:false},
    {_id:4,question:"The school plays a role in imparting manners.",answer:true},
    {_id:5,question:"Apart from academic subjects, children are not learning teachers' manners.",answer:false},
  ];
  const response_2 = [
    {_id:1,question:"'Manner' refers to the way of ________ something.",answer:'doing',type:quizTpye},
    {_id:2,question:"In Myanmar culture, it is bad manners for a ________ to start eating before a senior does.",answer:"junior"},
    {_id:3,question:"Good manners are vital for a pleasant ________ and for getting on well in life.",answer:"atmosphere"},
    {_id:4,question:"All the elders of this generation should teach their juniors to be law-abiding, ________, honest, self-respecting, disciplined, punctual, charitable, helpful, merciful, and forgiving.",answer:"upright"},
    {_id:5,question:"In a school where teachers are good ________, students learn to be polite and respectful.",answer:"role models"},
  ];
  //Guest English Lesson handel submit ----------
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const handelStudentEnglishLesson = (e) => {
    e.preventDefault();
    if(quizTpye === 'type_1'){
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          setResponse(response_1);
          localStorage.setItem("set_res", JSON.stringify(response_1));
          navigate("/student/response");
        }, 5000);
        console.log(response_1,'res-1');
    }else if(quizTpye ==="type_2"){
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          setResponse(response_2);
          localStorage.setItem("set_res", JSON.stringify(response_2));
          navigate("/student/response");
        }, 5000);
        console.log(response_2,'res-2');
    }
   
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
              <form onSubmit={handelStudentEnglishLesson}>
                <div className="title text-center mt-3 mb-3">
                  <h1>
                    <FcReadingEbook className="inline text-green-300 text-3xl me-2" />
                    Student English Lesson
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
                  <Select
                    id="user_eng_unit"
                    value={unit}
                    onChange={(e) => setUnit(e.target.value)} disabled
                  >
                    <option>Choose Unit ...</option>
                    <option value="1">Unit-1 Good Manners</option>
                    <option value="2">Unit-2 Good Manners</option>
                    <option value="3">Unit-3 Good Manners</option>
                    <option value="4">Unit-4 Good Manners</option>
                    <option value="5">Unit-5 Good Manners</option>
                    <option value="6">Unit-6 Ai</option>
                    <option value="7">Unit-7 Good Manners</option>
                    <option value="8">Unit-8 Good Manners</option>
                    <option value="9">Unit-9 Good Manners</option>
                    <option value="10">Unit-10 Good Manners</option>
                    <option value="11">Unit-11 Good Manners</option>
                    <option value="12">Unit-12 Good Manners</option>
                  </Select>
                  {/* {errors.position && (
                    <div className="error-massage mt-1">
                      <p className="text-red-600 font-semibold">
                        {errors.unit}
                      </p>
                    </div>
                  )} */}
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
                    <option value="type_1">True or False</option>
                    <option value="type_2">Multiple Choice</option>
                    {/* <option value="type_3">Short Question</option>
                    <option value="type_4">Fill in the Blance</option>
                    <option value="type_5">Choose Correct Answer</option> */}
                  </Select>
                  {/* {errors.position && (
                    <div className="error-massage mt-1">
                      <p className="text-red-600 font-semibold">
                        {errors.quizType}
                      </p>
                    </div>
                  )} */}
                </div>
                <div className="mx-8 mb-3">
                  <div className="mb-2 block relative">
                    <Label htmlFor="user_eng_level" value="Difficult Level" />
                  </div>
                  <Select
                    id="user_eng_level"
                    value={difficultLevel}
                    onChange={(e) => setDifficultLevel(e.target.value)}disabled
                  >
                    <option>Choose Level</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                  </Select>
                  {/* {errors.position && (
                    <div className="error-massage mt-1">
                      <p className="text-red-600 font-semibold">
                        {errors.unit}
                      </p>
                    </div>
                  )} */}
                </div>
                <div className="mx-8 mb-3">
                  <div className="mb-2 block relative">
                    <Label htmlFor="user_eng_quantity" value="Quiz Quantity" />
                  </div>
                  <Select
                    id="user_eng_quantity"
                  disabled
                  >
                    <option>Choose Quantity ...</option>
                    <option value="5">5 questions ...</option>
                    <option value="10">10 questions ...</option>
                    <option value="15">15 questions ...</option>
                  </Select>
                </div>
                <div className="col mt-8 mb-5 mx-8">
                  <Button type="submit" color="blue" className="w-full">
                    <i className="fa-solid fa-paper-plane me-2"></i>Create
                    Questions
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

export default StudentEnglishLesson;
