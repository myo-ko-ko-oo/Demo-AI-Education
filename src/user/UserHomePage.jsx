import { useNavigate } from "react-router";
import { Button } from "flowbite-react";
import homeImage from "../assets/image/ams.gif";
import { LuLogIn } from "react-icons/lu";
import { AiOutlineForm } from "react-icons/ai";
import { BsAppIndicator } from "react-icons/bs";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import UserCardLayout from "./UserCardLayout";
import FooterPage from "../view/FooterPage";
const UserHomePage = () => {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);
  const handelLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <>
      <div className="mt-16">
        <div className="home-image flex justify-center">
          <img className="w-[250px]" src={homeImage} alt="" />
        </div>

        <div className="Home-content text-center mb-4 dark:text-white">
          <h1>hello</h1>
          <p>abvdknvnvnvs</p>
        </div>

        <div className="Button-section flex justify-center text-center ">
          <Button
            style={{ zIndex: "0" }}
            pill
            gradientDuoTone="purpleToBlue"
            onClick={() => navigate("/feature")}
          >
            <BsAppIndicator className="inline me-2" />
            Pricing
          </Button>
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
        </div>
        <div className="body-content md:mx-14 mx-5 my-5 grid grid-cols-3 text-center dark:text-white">
          <div className="mt-3">
            <hr className="dark:text-gray-700" />
          </div>
          <div className="px-3 ">Select what to creat for all</div>
          <div className=" mt-3">
            <hr  className="dark:text-gray-700"/>
          </div>
        </div>
        <UserCardLayout/>
        <FooterPage/>
      </div>
    </>
  );
};

export default UserHomePage;
