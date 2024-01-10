import { FaGraduationCap } from "react-icons/fa6";
import { useNavigate } from "react-router";

const AppLogo = () => {
  const navigate = useNavigate();
  const handelGoBack = ()=>{
    navigate('/');
    localStorage.removeItem('set_res')
  }
  return (
    <div>
      <div
        className="flex justify-center items-center  cursor-pointer"
        onClick={() => handelGoBack()}
      >
        <FaGraduationCap className="text-3xl md:text-3xl me-1 md:me-3  pb-2 text-blue-500" />
        <h2>
          AI <span className="md:ms-1 text-blue-500 dark:text-white">Education Hub</span>
        </h2>
      </div>
    </div>
  );
};

export default AppLogo;
