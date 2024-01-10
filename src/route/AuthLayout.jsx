import { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import AuthContext from "../context/AuthContext";

const AuthLayout = () => {
 let {token} =useContext(AuthContext)
  token =JSON.parse(localStorage.getItem('set_token')) ;

  return token !== null ? <Outlet /> : <Navigate to={"/login"} />;
};

export default AuthLayout;
