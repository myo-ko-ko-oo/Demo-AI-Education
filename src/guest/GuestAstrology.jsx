/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Label, Select, Button, Datepicker } from "flowbite-react";
import BackButton from "../component/BackButton";
import Astrology from "../assets/image/Astrology.gif";
import { useNavigate } from "react-router";
import GuestResponseContext from "../context/GuestResponseContext";
import { FaStarOfDavid } from "react-icons/fa6";
import ResLoading from "../component/ResLoading";
const GuestAstrology = () => {
  const [astrologyType, setAstrologyType] = useState("");
  const [suggestPerson, setSuggestPerson] = useState("");
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [birthPlace, setBirthPlace] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const data = [
    `my name is ${name}.my date of birth is ${birthDate}.place of birth ${birthPlace}.chat-gpt you are famouse astrologer.iwant you to answer in style of Susan Miller.And read my fortune of general,work,health,love and lottery luck,pick me 3 lucky numbers,please add stars rating 1 to 5 for general,work,health,love and lottery luck.Bud luck 1 star to good 5 stars.Right below each reading add one line suggestion as ',suggestPerson,' would give on each of general,work,health,love and lottery luck.please perform the reading by considering and calculating planetary influence and number influences alongside with influence of my name,place of birth and date of birthplease read my fortune for 2024.Astrology type i want you o perform is ${astrologyType}`,
  ];

  //Astrology handel submit ------
  const { astrologyFetch } = useContext(GuestResponseContext);
  const [loading, setLoading] = useState(false);
  const handelAstrologyRequest = async (e) => {
    e.preventDefault();
    setLoading(true);
    await astrologyFetch({ data });
    setLoading(false);
    navigate("/guest/response");
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
              <img className="dark:opacity-70 " src={Astrology} alt="" />
            </div>
            <div className="lesson-form">
              <form onSubmit={handelAstrologyRequest}>
                <div className="title text-center mt-3 mb-3">
                  <h1>
                    <FaStarOfDavid className="inline text-orange-500 text-3xl me-2" />
                    Astrology
                  </h1>
                </div>
                <div className="mx-8 mb-3">
                  <div className="mb-2 block">
                    <Label htmlFor="as_type" value="Astrology Type" />
                  </div>
                  <Select
                    value={astrologyType}
                    onChange={(e) => setAstrologyType(e.target.value)}
                    id="as_type"
                    required
                  >
                    <option>Choose Astrology Type ...</option>
                    <option value="wetern Astrology">Western Astrology</option>
                    <option value="Chinese Astrology">Chinese Astrology</option>
                    <option value="Numerology Astrology">
                      Numerology Astrology
                    </option>
                    <option value="Mayan Astrology">Mayan Astrology</option>
                    <option value="Egyptian Astrology">
                      Egyptian Astrology
                    </option>
                    <option value="Roman Astrology">Roman Astrology</option>
                    <option value="Myanmar Astrology">Myanmar Astrology</option>
                  </Select>
                  {error && (
                    <div className="error-massage mt-1">
                      <span className="text-red-600 font-semibold">
                        {error.password}
                      </span>
                    </div>
                  )}
                </div>

                <div className="mx-8 mb-3">
                  <div className="mb-2 block ">
                    <Label htmlFor="as_person" value="Suggest Person" />
                  </div>
                  <Select
                    id="as_person"
                    value={suggestPerson}
                    onChange={(e) => setSuggestPerson(e.target.value)}
                  >
                    <option>Choose Suggest Person ...</option>
                    <option value="Bill Gates">Bill Gates</option>
                    <option value="Warren Buffet">Warren Buffet</option>
                    <option value="Tony Robbins">Tony Robbins</option>
                    <option value="John Maxwell">John Maxwell</option>
                    <option value="Zig Ziglar">Zig Ziglar</option>
                    <option value="Daniel Goldman">Daniel Goldman</option>
                    <option value="Steve Jobs">Steve Jobs</option>
                    <option value="Elon Musk">Elon Musk</option>
                    <option value="Oprah Winfrey">Oprah Winfrey</option>
                    <option value="Jeff Bezos">Jeff Bezos</option>
                    <option value="Richard Branson">Richard Branson</option>
                    <option value="Jack Ma">Jack Ma</option>
                  </Select>
                  {error && (
                    <div className="error-massage mt-1">
                      <span className="text-red-600 font-semibold">
                        {error.password}
                      </span>
                    </div>
                  )}
                </div>
                <div className="mx-8 mb-3">
                  <div className="mb-2 block">
                    <Label htmlFor="as_name" value="Name" />
                  </div>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    id="as_name"
                    className="w-full rounded-lg bg-gray-50  border-gray-300 dark:border-none dark:bg-gray-700 dark:text-white"
                    placeholder="name ..."
                  />
                  {error && (
                    <div className="error-massage mt-1">
                      <span className="text-red-600 font-semibold">
                        {error.password}
                      </span>
                    </div>
                  )}
                </div>
                <div className="mx-8 mb-3">
                  <div className="mb-2 block ">
                    <Label htmlFor="as_dob" value="Date Of Birth" />
                  </div>
                  <input
                    type="date"
                    id="as_dob"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    className="w-full rounded-lg bg-gray-50  border-gray-300 dark:border-none dark:bg-gray-700 dark:text-white"
                  />

                  {error && (
                    <div className="error-massage mt-1">
                      <span className="text-red-600 font-semibold">
                        {error.password}
                      </span>
                    </div>
                  )}
                </div>
                <div className="mx-8 mb-3">
                  <div className="mb-2 block">
                    <Label
                      htmlFor="as_birthplace"
                      value="Where You were born"
                    />
                  </div>
                  <input
                    value={birthPlace}
                    onChange={(e) => setBirthPlace(e.target.value)}
                    type="text"
                    id="as_birthplace"
                    className="w-full rounded-lg bg-gray-50  border-gray-300 dark:border-none dark:bg-gray-700 dark:text-white"
                    placeholder="birth place ..."
                  />
                  {error && (
                    <div className="error-massage mt-1">
                      <span className="text-red-600 font-semibold">
                        {error.password}
                      </span>
                    </div>
                  )}
                </div>

                <div className="col mt-8 mb-5  mx-8">
                  <Button type="submit" color="blue" className="w-full">
                    <i className="fa-solid fa-paper-plane me-2"></i>Ask Your
                    Future Lesson
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

export default GuestAstrology;
