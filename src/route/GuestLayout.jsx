import { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import AuthContext from "../context/AuthContext";

const GuestLayout = () => {
  let {token,role} = useContext(AuthContext);
  
  token = JSON.parse(localStorage.getItem('set_token'));
  role =JSON.parse(localStorage.getItem('set_role'));
  console.log(token);
  // return token !== null  ? <Navigate to={"/user/home"} /> : <Outlet />;
  return token !== null ? (
    role === "admin" ? (
      <Navigate to={"/admin/dashboard"} />
    ) : (
      <Navigate to={"/user/home"} />
    )
  ) : (
    <Outlet />
  );
};

export default GuestLayout;
