// import { useContext } from "react";
import { Navigate, Outlet } from "react-router";
// import AuthContext from "../context/AuthContext";

const RoleLayout = () => {
//  let {token} =useContext(AuthContext)
let  role =JSON.parse(localStorage.getItem('set_role')) ;

  return role !== 'guest' ? <Outlet /> : <Navigate to={"/"} />;
};

export default RoleLayout;
