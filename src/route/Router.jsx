import { Route, Routes } from "react-router";
import { HashRouter  } from "react-router-dom";
import GuestHomePage from "../guest/GuestHomePage";
import InfoPage from "../view/InfoPage";
import UserHomePage from "../user/UserHomePage";
import Pricing from "../Auth/Pricing";
import Login from "../Auth/Login";
import AuthLayout from "./AuthLayout";
import GuestLayout from "./GuestLayout";
import NotFoundPage from "../component/NotFoundPage";
import FeaturePage from "../view/FeaturePage";
import GustLessonStartIdea from "../guest/GustLessonStartIdea";
import GuestEnglishLesson from "../guest/GuestEnglishLesson";
import GuestResponsePage from "../guest/GuestResponsePage";
import { SignUp } from "../Auth/SignUp";
import RoleLayout from "./RoleLayout";
import ForgetPassword from "../Auth/ForgetPassword";
import GuestAstrology from "../guest/GuestAstrology";
import GuestJobGuide from "../guest/GuestJobGuide";
import UserEnglishLesson from "../user/UserEnglishLesson";
import UserResponsePage from "../user/UserResponsePage";
import Dashboard from "../admin/Dashboard";
import Users from "../admin/Users";
import StudentEnglishLesson from "../guest/StudentEnglishLesson";
import StudentResponsePage from "../guest/StudentResponsePage";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="*" Component={NotFoundPage} />
        <Route path="/info" Component={InfoPage} />
        <Route path="/feature" Component={FeaturePage} />
        <Route path="/forget-password" Component={ForgetPassword} />

        <Route element={<GuestLayout />}>
          <Route path="/" Component={GuestHomePage} />
          <Route
            path="/guest/lesson-start-idea"
            Component={GustLessonStartIdea}
          />
          <Route path="/guest/astrology" Component={GuestAstrology} />
          <Route path="/guest/job-guide" Component={GuestJobGuide} />
          <Route path="/guest/english-lesson" Component={GuestEnglishLesson} />
          <Route
            path="/student/english-lesson"
            Component={StudentEnglishLesson}
          />
          <Route path="/guest/response" Component={GuestResponsePage} />
          <HashRouter>
            <Route path="/student/response" Component={StudentResponsePage} />
          </HashRouter>

          <Route path="/pricing" Component={Pricing} />
          <Route element={<RoleLayout />}>
            <Route path="/login" Component={Login} />
            <Route path="/signup" Component={SignUp} />
          </Route>
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/user/home" Component={UserHomePage} />
        </Route>

        <Route path="/admin/dashboard" Component={Dashboard} />
        <Route path="/admin/users" Component={Users} />
        <Route path="/user/english-lesson" Component={UserEnglishLesson} />
        <Route path="/user/response" Component={UserResponsePage} />
      </Routes>
    </>
  );
};

export default Router;
