/* eslint-disable react/prop-types */

import { useState } from "react";
import UserResponseContext from "./UserResponseContext";
import instance from "../api/axios";
import openai from "../api/OpenAi";

const UserResponseContextProvider = ({ children }) => {
  const [response, setResponse] = useState(null);

  //Lesson Start Idea fetch data-----------
  const LessonFetch = async () => {
    try {
      const res = await openai.chat.completions.create({
        messages: [
          {
            role: "user",
            content:
              "could you tell me how to resolve myanmar political situration? answer 1 to 5 explain",
          },
        ],
        model: "gpt-3.5-turbo",
      });
      console.log(res.choices[0].message);
      setResponse(res.choices[0].message.content);
      localStorage.setItem(
        "set_res",
        JSON.stringify(res.choices[0].message.content)
      );
    } catch (e) {
      console.log(e);
    }
  };

  // English Lesson fetch data-----------
  const UserEnglishFetch = async () => {
    const url = "/sample-data/blog-posts/1";
    try {
      const res = await instance.get(url);
      console.log(res.data.blog);
      setResponse(res.data.blog.content_text);
      localStorage.setItem(
        "set_res",
        JSON.stringify(res.data.blog.content_text)
      );
    } catch (e) {
      console.log(e);
    }
  };
  // Letter?Eassy fetch data-----------
  const UserEassyFetch = async () => {
    const url = "/sample-data/blog-posts/1";
    try {
      const res = await instance.get(url);
      console.log(res.data.blog);
      setResponse(res.data.blog.content_text);
      localStorage.setItem(
        "set_res",
        JSON.stringify(res.data.blog.content_text)
      );
    } catch (e) {
      console.log(e);
    }
  };
  
  // Physics Lesson fetch data-----------
  const UserPhysicsFetch = async () => {
    const url = "/sample-data/blog-posts/1";
    try {
      const res = await instance.get(url);
      console.log(res.data.blog);
      setResponse(res.data.blog.content_text);
      localStorage.setItem(
        "set_res",
        JSON.stringify(res.data.blog.content_text)
      );
    } catch (e) {
      console.log(e);
    }
  };
   // Chemistry Lesson fetch data-----------
   const UserChemistryFetch = async () => {
    const url = "/sample-data/blog-posts/1";
    try {
      const res = await instance.get(url);
      console.log(res.data.blog);
      setResponse(res.data.blog.content_text);
      localStorage.setItem(
        "set_res",
        JSON.stringify(res.data.blog.content_text)
      );
    } catch (e) {
      console.log(e);
    }
  };
   // Biology Lesson fetch data-----------
   const UserBiologyFetch = async () => {
    const url = "/sample-data/blog-posts/1";
    try {
      const res = await instance.get(url);
      console.log(res.data.blog);
      setResponse(res.data.blog.content_text);
      localStorage.setItem(
        "set_res",
        JSON.stringify(res.data.blog.content_text)
      );
    } catch (e) {
      console.log(e);
    }
  };
  // Astrology  fetch data-----------
  const astrologyFetch = async ({ data }) => {
    try {
      const res = await openai.chat.completions.create({
        messages: [{ role: "user", content: data[0] }],
        model: "gpt-3.5-turbo",
      });
      console.log(res.choices[0].message);
      setResponse(res.choices[0].message.content);
      localStorage.setItem(
        "set_res",
        JSON.stringify(res.choices[0].message.content)
      );
    } catch (e) {
      console.log("Error fetching data:", e);
    }
  };
  // Job Guide  fetch data-----------
  const jobGuideFetch = async () => {
    const url = "/sample-data/blog-posts/1";
    try {
      const res = await instance.get(url);
      console.log(res.data.blog.content_text);
      setResponse(res.data.blog.content_text);
      // localStorage.setItem("set_response", JSON.stringify(res.data.blog.content_text));
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <UserResponseContext.Provider
      value={{
        response,
        setResponse,
        LessonFetch,
        UserEnglishFetch,
        UserEassyFetch,
        UserPhysicsFetch,
        UserChemistryFetch,
        UserBiologyFetch,
        astrologyFetch,
        jobGuideFetch,
      }}
    >
      {children}
    </UserResponseContext.Provider>
  );
};

export default UserResponseContextProvider;
