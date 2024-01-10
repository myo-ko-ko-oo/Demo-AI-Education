import { useContext, useState } from "react";

import { useNavigate } from "react-router";
import { Button } from "flowbite-react";
import AuthContext from "../context/AuthContext";
import BackButton from "../component/BackButton";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { login, error } = useContext(AuthContext);

  //Login Request
  const handelLogin = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  // Show/hide Password Toggle
  const [toggle, setToggle] = useState(false);
  const showPassword = () => {
    if (toggle == false) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };
  return (
    <>
      <div className="mt-16 mx-auto">
      <span className="" onClick={()=>navigate(-1)}>
          <BackButton/>
        </span>
        <div className="grid md:grid-cols-3 grid-cols-1">
          <div className="Empty-div "></div>
          <div className="sign-form ">
            <form onSubmit={handelLogin} className="p-3 dark:text-white">
              <div className="title text-center mt-5 mb-5">
                <h1>
                  <i className="fa-solid fa-right-to-bracket text-blue-500 me-2"></i>
                  Login
                </h1>
              </div>

              <div className=" my-3 mx-3 md:mx-0">
                <label htmlFor="login_email">Email</label>
                <input
                  type="email"
                  id="login_email"
                  className="rounded-full  w-full dark:bg-gray-800 dark:border-none"
                  placeholder="email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {error && (
                  <div className="error-massage mt-1">
                    <span className="text-red-600 font-semibold">
                      {error.email}
                    </span>
                  </div>
                )}
              </div>

              <div className=" mt-5 mx-3 md:mx-0 relative">
                <label htmlFor="login_password">Password</label>
                <span
                  onClick={() => showPassword()}
                  className="absolute cursor-pointer right-3 top-8"
                >
                  {toggle !== true ? (
                    <>
                      <i className="fa-regular fa-eye-slash"></i>
                    </>
                  ) : (
                    <>
                      {" "}
                      <i className="fa-regular fa-eye"></i>
                    </>
                  )}
                </span>
                {toggle !== true ? (
                  <input
                    type="password"
                    id="login_password"
                    className="rounded-full  w-full dark:bg-gray-800 dark:border-none"
                    placeholder="password..."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                ) : (
                  <input
                    type="text"
                    id="login_password"
                    className="rounded-full  w-full dark:bg-gray-800 dark:border-none"
                    placeholder="password..."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                )}
                {error && (
                  <div className="error-massage mt-1">
                    <span className="text-red-600 font-semibold">
                      {error.password}
                    </span>
                  </div>
                )}
              </div>
              <div className="my-3 mx-3 md:mx-0 text-end">
                <span onClick={()=>navigate('/forget-password')} className="text-blue-600 hover:text-blue-700 underline underline-offset-4  cursor-pointer">
                  forget-password
                </span>
              </div>

              <div className="  mx-3 md:mx-0 ">
                <Button
                  type="submit"
                  className="w-full"
                  gradientDuoTone="purpleToBlue"
                  pill
                >
                  <i className="fa-solid fa-right-to-bracket me-2"></i>Login
                </Button>
              </div>
              <div className="my-3 mx-3 md:mx-0 text-center">
                <p>
                  Don`t you have account yet ?{" "}
                  <span
                    onClick={() => navigate("/signup")}
                    className="text-blue-600 font-semibold hover:text-blue-700 underline underline-offset-4 cursor-pointer"
                  >
                    Signup
                  </span>
                </p>
              </div>
            </form>
          </div>
          <div className="Empty-div "></div>
        </div>
      </div>
    </>
  );
};

export default Login;
