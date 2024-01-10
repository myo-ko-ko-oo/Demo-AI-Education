/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Label, Select, Button } from "flowbite-react";
import BackButton from "../component/BackButton";
import englishLesson from "../assets/image/english-lesson.svg";
import { useNavigate } from "react-router";
import GuestResponseContext from "../context/GuestResponseContext";
import { TbAbc } from "react-icons/tb";
import ResLoading from "../component/ResLoading";
const GuestEnglishLesson = () => {
  const [grade, setGrade] = useState("12");
  const [unit, setUnit] = useState("1");
  const [quizTpye, setQuizType] = useState("");
  const [difficultLevel, setDifficultLevel] = useState("");
  const [quizQuantity, setQuizQuantity] = useState("5");

  const { setResponse } = useContext(GuestResponseContext);
  const responseData = [
    "တရုတ်နိုင်ငံဟာ အမျိုးသား ပြည်သူ့ ကွန်ဂရက်စ် လို့ ခေါ်တဲ့ သူတို့ရဲ့ လွှတ်တော်ထဲကနေ ထိပ်တန်း စစ်ဘက်အရာရှိ ၉ ဦးကို ထုတ်ပယ် လိုက်ပါတယ် အဲဒီအထဲ တရုတ်စစ်တပ်ရဲ့ ဗျူဟာမြောက် မစ်ဆိုင်း ဒုံးကျည်တပ်ကို ဦးစီးရတဲ့ ဗိုလ်ချုပ်ကြီး ၄ ဦး ပါဝင်ပါတယ်။ ဘာလို့ ထုတ်ပယ်ရတာလဲ ဆိုတဲ့ အကြောင်းပြချက်ကိုတော့ ပြောဆိုခြင်း မရှိပါဘူး။တရုတ်ကွန်မြူနစ်ပါတီရဲ့ ဗဟိုကော်မတီ အစည်းအဝေး အပြီး ဒီ ဆုံးဖြတ်ချက် ထွက်ပေါ် လာတာပါ။ တရုတ် နိုင်ငံမှာ ကာကွယ်ရေး ဝန်ကြီး အသစ် အဖြစ် ဝါရင့် ရေတပ်ဗိုလ်ချုပ်ကြီး တုန့်ကျွင်း Dong Jun ကို မနေ့ သောကြာနေ့ကပဲ လောလောလတ်လတ် ခန့်အပ်ခဲ့ပါတယ်။    ပြီးခဲ့တဲ့ လတွေမှာ တောက်လျှောက် ထွက်ပေါ် နေခဲ့တဲ့ သတင်းတွေ အရတော့ တရုတ်ရဲ့ မစ်ဆိုင်းဒုံးကျည်တပ်နဲ့ ဆက်စပ်နေတဲ့ အကျင့်ပျက် ခြစားမှုတွေကို တရုတ်အာဏာပိုင်တွေ စုံစမ်းနေတယ်လို့ ဆိုပါတယ်    လွှတ်တော်ထဲမှာ ရှိနေရင် တရားစွဲ ခံရတာကနေ ကင်းလွတ်ခွင့် ရှိတယ် ဆိုတဲ့ ဥပဒေ အကာအကွယ်မျိုး ရှိတာကြောင့်၊ တရားစွဲ အရေးယူနိုင်ဖို့ရာ အခုလို လွှတ်တော်ထဲကနေ အရင် ထုတ်ပယ်တာမျိုး ဖြစ်နိုင်တယ်လို့ အကဲခတ်တွေက ဆိုပါတယ်။",
  ];
  //Guest English Lesson handel submit ----------
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const handelEnglishLesson = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setResponse(responseData[0]);
      localStorage.setItem("set_res", JSON.stringify(responseData[0]));
      navigate("/guest/response");
    }, 5000);
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
              <form onSubmit={handelEnglishLesson}>
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
                  <div className="mb-2 block relative">
                    <Label htmlFor="eng_unit" value="Unit" />
                    <span className="absolute right-8 top-10 z-20">
                      <i className="fa-solid fa-lock fa-beat text-yellow-300"></i>
                    </span>
                  </div>
                  <Select id="eng_unit" disabled>
                    <option>Unit-1 Good Manners</option>
                  </Select>
                </div>
                <div className="mx-8 mb-3">
                  <div className="mb-2 block">
                    <Label htmlFor="eng_quiz_type" value="Quiz Type" />
                  </div>

                  <Select
                    value={quizTpye}
                    onChange={(e) => setQuizType(e.target.value)}
                    id="eng_quiz_type"
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
                    <Label htmlFor="eng_level" value="Difficult Level" />
                    <span className="absolute right-8 top-10 z-20">
                      <i className="fa-solid fa-lock fa-beat text-yellow-300"></i>
                    </span>
                  </div>
                  <Select id="eng_level" disabled>
                    <option>Choose Level</option>
                  </Select>
                </div>
                <div className="mx-8 mb-3">
                  <div className="mb-2 block relative">
                    <Label htmlFor="eng_quantity" value="Quiz Quantity" />
                    <span className="absolute right-8 top-10 z-20">
                      <i className="fa-solid fa-lock fa-beat text-yellow-300"></i>
                    </span>
                  </div>
                  <Select id="eng_quantity" disabled>
                    <option>5 questions ...</option>
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

export default GuestEnglishLesson;
