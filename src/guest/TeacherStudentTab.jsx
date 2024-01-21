import { Tabs } from "flowbite-react";
import { HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import GuestCardLayout from "./GuestCardLayout";
import StudentCardLayout from "./StudentCardLayout";

const TeacherStudentTab = () => {
  return (
    <>
      <div className="">
        <Tabs aria-label="Default tabs" style="underline">
          <Tabs.Item active title="For Teacher's" icon={HiUserCircle}>
            <GuestCardLayout />
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
