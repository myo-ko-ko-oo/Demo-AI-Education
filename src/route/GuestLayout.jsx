import { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import AuthContext from "../context/AuthContext";

const GuestLayout = () => {
  let {token} = useContext(AuthContext);
  token = JSON.parse(localStorage.getItem('set_token'));

  console.log(token);
  return token !== null  ? <Navigate to={"/user/home"} /> : <Outlet />;
};

export default GuestLayout;
