/* eslint-disable no-unused-vars */
import React from "react";
import { Footer } from "flowbite-react";
import AppLogo from "../component/AppLogo";

const FooterPage = () => {
  return (
    <>
      <Footer container>
        <div className="w-full text-center">
          <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
            <AppLogo/>
          
            <Footer.LinkGroup className="justify-center mt-2 md:mt-0">
              <Footer.Link href="#">About</Footer.Link>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Licensing</Footer.Link>
              <Footer.Link href="#">Contact</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <Footer.Divider />
          <Footer.Copyright href="#" by="MKKO™" year={2024} />
        </div>
      </Footer>
    </>
  );
};

export default FooterPage;
