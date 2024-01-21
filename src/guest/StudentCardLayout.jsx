// import { HiOutlineLightBulb } from "react-icons/hi";
// import { TbAbc } from "react-icons/tb";
import { useNavigate } from "react-router";
import { FcReadingEbook } from "react-icons/fc";
import { Fade } from "react-awesome-reveal";
const StudentCardLayout = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container mx-auto  my-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {/* <!--lesson start --> */}
          {/* <div
            onClick={() => navigate("/guest/lesson-start-idea")}
            className="lesson-start-idea cursor-pointer hover:-translate-y-1 dark:text-white animate-bounce "
          >
            <div className="grid grid-cols-4 md:grid-cols-1 lg:grid-cols-1 border-2 border-gray-10 shadow-xl rounded-md mx-5 p-4 my-1 dark:border-none dark:bg-gray-800 ">
              <div className="subject-logo m-auto mb-2">
                <HiOutlineLightBulb className="text-yellow-300 text-3xl" />
              </div>
              <div className="content col-span-3 ms-2 md:ms-0 md:text-center">
                <p>Lesson Start Idea</p>
                <small>i m small text</small>
              </div>
              <div className="lock-icon m-auto"></div>
            </div>
          </div> */}
          <Fade direction="left" duration={1000}>
            {/* <!--English --> */}
            <div
              onClick={() => navigate("/student/english-lesson")}
              className="lesson-start-idea cursor-pointer hover:-translate-y-1 dark:text-white"
            >
              <div className="grid grid-cols-4 md:grid-cols-1 lg:grid-cols-1 border-2 border-gray-10 shadow-xl rounded-md mx-5 p-4 my-1 dark:border-none dark:bg-gray-800 ">
                <div className="subject-logo m-auto mb-2">
                  <FcReadingEbook className="text-green-300 text-3xl" />
                </div>
                <div className="content col-span-2 ms-2 md:ms-0 md:text-center">
                  <p>Student English Lesson</p>
                  <small>i m small text</small>
                </div>
                <div className="lock-icon m-auto"></div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default StudentCardLayout;
