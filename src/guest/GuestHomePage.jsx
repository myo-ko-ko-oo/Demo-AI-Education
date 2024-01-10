import { useLocation, useNavigate } from "react-router";
import { Button } from "flowbite-react";
import homeImage from "../assets/image/ams.gif";
import { LuLogIn } from "react-icons/lu";
import { AiOutlineForm } from "react-icons/ai";
import { BsAppIndicator } from "react-icons/bs";
import GuestCardLayout from "./GuestCardLayout";
import FooterPage from "../view/FooterPage";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import Contact from "../view/Contact";
import PaymentNotiMessage from "../component/PaymentNotiMessage";
// import ResLoading from "../component/ResLoading";

const GuestHomePage = () => {
  const navigate = useNavigate();
  let { user, logout } = useContext(AuthContext);
  user = JSON.parse(localStorage.getItem("set_user"));
  //logout
  const handelLogout = () => {
    logout();
    navigate("/login");
  };

  //message
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const message = searchParams.get("message") || "";

  return (
    <>
    {/* <ResLoading/> */}
      <div className="mt-16 ">
        {message && (
          <div className="flex justify-center pt-3">
            <PaymentNotiMessage message={message} />
          </div>
        )}

        <div className="home-image flex justify-center">
          <img className="w-[250px]" src={homeImage} alt="" />
        </div>

        <div className="Home-content text-center mb-5 dark:text-white">
          <h2>hello</h2>
          <p>abvdknvnvnvs</p>
        </div>

        <div className="Button-section flex justify-center text-center ">
          <Button
            style={{ zIndex: "0" }}
            pill
            gradientDuoTone="purpleToBlue"
            onClick={() => navigate("/pricing")}
          >
            <BsAppIndicator className="inline me-2" />
            Pricing
          </Button>
          {user !== null ? (
            <>
              <Button
                className="mx-2 z-0 "
                outline
                gradientDuoTone="purpleToBlue"
                pill
                onClick={() => handelLogout()}
              >
                <LuLogIn className="inline me-2" />
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button
                className="mx-2 z-0 "
                outline
                gradientDuoTone="purpleToBlue"
                pill
                onClick={() => navigate("/login")}
              >
                <LuLogIn className="inline me-2" />
                Login
              </Button>
            </>
          )}
          {user !== null ? (
            <>
              <Button
                className="z-0"
                outline
                gradientDuoTone="purpleToBlue"
                pill
                onClick={() => navigate("/pricing")}
              >
                <AiOutlineForm className="inline me-2" />
                Profile
              </Button>
            </>
          ) : (
            <>
              <Button
                className="z-0"
                outline
                gradientDuoTone="purpleToBlue"
                pill
                onClick={() => navigate("/signup")}
              >
                <AiOutlineForm className="inline me-2" />
                Sign Up
              </Button>
            </>
          )}
        </div>
        <div className="body-content md:mx-14 mx-5 my-3 grid grid-cols-3 text-center dark:text-white">
          <div className="mt-3">
            <hr className="dark:border-gray-700" />
          </div>
          <div className="px-3 ">Select what to creat for free</div>
          <div className=" mt-3">
            <hr className="dark:border-gray-700" />
          </div>
        </div>
        <GuestCardLayout />
      </div>
      <Contact />
      <FooterPage />
    </>
  );
};

export default GuestHomePage;
