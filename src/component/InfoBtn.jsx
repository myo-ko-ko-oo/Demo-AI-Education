import React from "react";

import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import InfoPage from "../view/InfoPage";
const InfoBtn = () => {
    
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
  return (
    <>
      <div className="flex justify-center items-center cursor-pointer ms-5" onClick={toggleDrawer}>
       
        <span className="mx-1"><i className="fa-solid fa-circle-info text-blue-500 me-2"></i>info</span>
      </div>
      
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='bottom'
                size={450}
                className='rounded-t-lg dark:bg-gray-900'
            >
                <div ><InfoPage/></div>
            </Drawer>
    </>
  );
};

export default InfoBtn;
