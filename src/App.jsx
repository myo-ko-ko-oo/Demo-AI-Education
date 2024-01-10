/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import Navbar from "./component/Navbar";
import Router from "./route/Router.Jsx";
import "./App.css";
import AuthContextProvider from "./context/AuthContextProvider";
import GuestResponseContextProvider from "./context/GuestResponseContextProvider";
function App() {
  return (
    <>
      <AuthContextProvider>
        <GuestResponseContextProvider>
          <div className=" mx-auto dark:text-white ">
            <Navbar />
          </div>

          <Router />
        </GuestResponseContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
