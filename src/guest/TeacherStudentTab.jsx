import { Tabs } from "flowbite-react";
import { HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import GuestCardLayout from "./GuestCardLayout";
import StudentCardLayout from "./StudentCardLayout";
import { Fade } from "react-awesome-reveal";
const TeacherStudentTab = () => {
  return (
    <>
      <div className="">
        <Tabs aria-label="Default tabs" style="underline">
          <Tabs.Item active title="For Teacher's" icon={HiUserCircle}>
            <Fade direction="left" cascade damping={0.2}>
              <GuestCardLayout />
            </Fade>
          </Tabs.Item>
          <Tabs.Item
            title="For Student's"
            className="w-full"
            icon={MdDashboard}
          >
            <StudentCardLayout />
          </Tabs.Item>
        </Tabs>
      </div>
    </>
  );
};

export default TeacherStudentTab;
