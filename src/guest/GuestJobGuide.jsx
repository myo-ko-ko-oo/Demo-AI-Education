/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Label, Select, Button } from "flowbite-react";
import BackButton from "../component/BackButton";
import overseaJob from "../assets/image/oversea-job-guide.svg";
import { useNavigate } from "react-router";
import GuestResponseContext from "../context/GuestResponseContext";
import { TbAbc } from "react-icons/tb";
import { FaPlaneDeparture } from "react-icons/fa";
import ResLoading from "../component/ResLoading";

const GuestJobGuide = () => {
  const [position, setPosition] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [country, setCountry] = useState("");
  const [errors, setErrors] = useState("");
  const navigate = useNavigate();
  // const data = [`could you tell me job guide for ${country}`];

  //Job Guide handel submit ------
  const { jobGuideFetch } = useContext(GuestResponseContext);
  const [loading, setLoading] = useState(false);
  const handelAstrologyRequest = async (e) => {
    e.preventDefault();
    if (position !== "" && birthDate !== "" && country !== "") {
      setLoading(true);
      await jobGuideFetch();
      setTimeout(() => {
        setLoading(false);
        navigate("/guest/response");
      }, 5000);
    } else {
      // Reset errors
      setErrors({});
      if (position === "") {
        setErrors((prevErrors) => ({
          ...prevErrors,
          position: "Job Position field is required!",
        }));
      }
      if (birthDate === "") {
        setErrors((prevErrors) => ({
          ...prevErrors,
          birthDate: "Birth Date field is required!",
        }));
      }
      if (country === "") {
        setErrors((prevErrors) => ({
          ...prevErrors,
          country: "Destination Country field is required!",
        }));
      }
      console.log(errors);
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
              <img className="dark:opacity-70 " src={overseaJob} alt="" />
            </div>
            <div className="lesson-form">
              <form onSubmit={handelAstrologyRequest}>
                <div className="title text-center mt-3 mb-3">
                  <h1>
                    <FaPlaneDeparture className="inline text-lime-500 text-3xl me-2" />
                    Oversea Job Guide
                  </h1>
                </div>
                <div className="mx-8 mb-3">
                  <div className="mb-2 block">
                    <Label htmlFor="jg_position" value="Job Position" />
                  </div>
                  <Select
                    id="jg_position"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    required
                  >
                    <option>Choose Job Position</option>
                    <option>Account</option>
                    <option>Engenieer</option>
                    <option>Web-developer</option>
                    <option>other</option>
                  </Select>
                  {errors.position && (
                    <div className="error-massage mt-1">
                      <span className="text-red-600 font-semibold">
                        {errors.position}
                      </span>
                    </div>
                  )}
                </div>
                <div className="mx-8 mb-3">
                  <div className="mb-2 block ">
                    <Label htmlFor="jg_dob" value="Date Of Birth" />
                  </div>
                  <input
                    type="date"
                    id="jg_dob"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    className="w-full rounded-lg bg-gray-50  border-gray-300 dark:border-none dark:bg-gray-700 dark:text-white"
                  />
                  {errors.birthDate && (
                    <div className="error-massage mt-1">
                      <span className="text-red-600 font-semibold">
                        {errors.birthDate}
                      </span>
                    </div>
                  )}
                </div>

                <div className="mx-8 mb-3">
                  <div className="mb-2 block relative">
                    <Label htmlFor="jg_country" value="Destination Country" />
                  </div>
                  <Select
                    id="jg_country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  >
                    <option>Choose Country...</option>
                    <option className="Singapore">Singapore</option>
                    <option className="Thailand">Thailand</option>
                    <option className="Dubai">Dubai</option>
                    <option className="South-Korea">South-Korea</option>
                    <option className="Japan">Japan</option>
                    <option className="Malaysia">Malaysia</option>
                  </Select>
                  {errors.country && (
                    <div className="error-massage mt-1">
                      <span className="text-red-600 font-semibold">
                        {errors.country}
                      </span>
                    </div>
                  )}
                </div>

                <div className="col mt-8 mb-5 mx-8">
                  <Button type="submit" color="blue" className="w-full">
                    <i className="fa-solid fa-paper-plane me-2"></i>Create Job
                    Guide
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

export default GuestJobGuide;
