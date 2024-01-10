import { DarkThemeToggle, Flowbite, Tooltip, Dropdown } from "flowbite-react";

import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router";
import UserAvatarImage from "./UserAvatarImage";

const NavButton = () => {
  const navigate = useNavigate();
  let { user, logout } = useContext(AuthContext);
  user = JSON.parse(localStorage.getItem("set_user"));
  console.log(user, "navbar");

  const handelLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div>
      <div className=" flex items-center">
        {user == null ? (
          <>
            <Tooltip content="login" placement="bottom">
              <span
                onClick={() => navigate("/login")}
                className="cursor-pointer"
              >
                <i className="fa-solid fa-user text-lg text-blue-500"></i>
              </span>
            </Tooltip>
          </>
        ) : (
          <>
            <Dropdown
              label=""
              dismissOnClick={false}
              renderTrigger={() => (
                <span>
                  <UserAvatarImage />
                </span>
              )}
            >
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={() => handelLogout()} className="px-3">
                <i className="fa-solid fa-right-to-bracket me-2"></i>logout
              </Dropdown.Item>
            </Dropdown>
          </>
        )}

        <span className="mx-2 md:mx-3 ">
          <Flowbite>
            <DarkThemeToggle className="dark:text-yellow-200 text-blue-500" />
          </Flowbite>
        </span>
      </div>
    </div>
  );
};

export default NavButton;
