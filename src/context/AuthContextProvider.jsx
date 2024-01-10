/* eslint-disable react/prop-types */
import { useNavigate } from "react-router";
import instance from "../api/axios";
import AuthContext from "./AuthContext";
import { useState } from "react";

const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  let [userId, setUserId] = useState("");
  const [role, setRole] = useState(null);
  const [error, setError] = useState("");
  const [paymentSlip, setPaymentSlip] = useState([]);
  // const [paymentStatus, setPaymentStatus] = useState("");
  const [phone, setPhone] = useState("");

  // User Login ---------
  const login = async ({ email, password }) => {
    try {
      const res = await instance.post("user/login", { email, password });
      console.log(!res.data.token);
      if (res.data.status === "success") {
        if (res.data.role == "guest") {
          // check condition for paid-user or not
          setUser(res.data.user);
          setUserId(res.data.id);
          setRole(res.data.role);
          localStorage.setItem("set_user", JSON.stringify(res.data.user));
          localStorage.setItem("set_userId", JSON.stringify(res.data.id));
          localStorage.setItem("set_role", JSON.stringify(res.data.role));
          navigate("/");
        } else {
          setUser(res.data.user);
          setUserId(res.data.id);
          setRole(res.data.role);
          localStorage.setItem("set_user", JSON.stringify(res.data.user));
          localStorage.setItem("set_userId", JSON.stringify(res.data.id));
          localStorage.setItem("set_token", JSON.stringify(res.data.token));
          localStorage.setItem("set_role", JSON.stringify(res.data.role));
          navigate("/user/home");
          console.log(res.data.token);
        }
      } else {
        setError(res.data);
        // console.log(res.data);
      }
    } catch (e) {
      if (e.response.status === 422) {
        setError(e.response.data.errors);
        console.log(e.response);
      }
      console.log(e.response.data.detail);
    }
  };

  // User Sign Up -----------
  const signUp = async ({
    name,
    email,
    gender,
    password,
    confirm_password,
  }) => {
    console.log(paymentSlip, "auth");
    try {
      const res = await instance.post(
        "user/register",
        { name, email, gender, password, confirm_password, paymentSlip, phone },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(res.data, "auth");
      if (res.data.status === "success") {
        if (res.data.payment_file !== null) {
          const message =
            "We will activate your payment within 24 hours and send email you to know ";
          setUser(res.data.user);
          localStorage.setItem("set_user", JSON.stringify(res.data.user));
          localStorage.setItem("set_role", JSON.stringify(res.data.role));
          navigate(`/?message=${message}`);
        } else {
          setUser(res.data.user);
          localStorage.setItem("set_user", JSON.stringify(res.data.user));
          localStorage.setItem("set_role", JSON.stringify(res.data.role));
          navigate("/");
        }
      } else {
        setError(res.data);
      }
    } catch (e) {
      if (e.response.status === 422) {
        setError(e.response.data.errors);
      }
    }
  };

  // Payment Submit -------

  
  const paymentSubmit = async () => {
    userId = JSON.parse(localStorage.getItem("set_userId"));
    try {
      const res = await instance.post(
        "payment/submit",
        { userId, paymentSlip, phone },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (res.data.status == "success") {
        const message =
          "We will activate your payment within 24 hours and send email you to know ";
        navigate(`/?message=${message}`);
        // setPaymentStatus(res.data.paymentStatus);
        localStorage.setItem(
          "set_paymentStatus",
          JSON.stringify(res.data.paymentStatus)
        );
      }
      console.log(res.data);
    } catch (e) {
      if (e.response.status === 422) {
        setError(e.response.data.errors);
      }
    }
  };

  // User Logout ------
  const logout = () => {
    setToken(false);
    localStorage.clear();
    // window.location.reload(false);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        error,
        login,
        signUp,
        logout,
        user,
        role,
    
        paymentSubmit,
        paymentSlip,
        setPaymentSlip,
        phone,
        setPhone,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
