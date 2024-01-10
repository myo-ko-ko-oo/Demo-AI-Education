/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router";
import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
const SiderBar = () => {
  const navigate = useNavigate();
  return (
    <>
     <Sidebar aria-label="Default sidebar example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards} label="Pro" labelColor="dark">
            Kanban
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiInbox} label="3">
            Inbox
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            Users
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag}>
            Products
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiTable}>
            Sign Up
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-16 transition-transform -translate-x-full  border-r border-gray-200 sm:translate-x-0  dark:border-slate-800"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white  dark:bg-slate-900">
          <ul className="space-y-2 font-medium">
            <li className="mt-6">
              <a
                onClick={() => navigate("/admin/dashboard")}
                className="cursor-pointer flex items-center p-2  text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <i className="fa-solid fa-gauge-high text-xl text-blue-600 dark:text-gray-400 transition duration-75  group-hover:text-gray-900 dark:group-hover:text-white"></i>
                <span className="ml-3">Dashboard</span>
              </a>
            </li>
            <li>
              <a
                onClick={() => navigate("/admin/import")}
                className="cursor-pointer flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <i className="fa-solid fa-upload text-xl text-blue-600 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></i>
                <span className="flex-1 ml-3 whitespace-nowrap">Import</span>
                {/* <!-- <span
                className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300"
                >Pro</span
              > --> */}
              </a>
            </li>
            <li>
              <a
                onClick={() => navigate("/admin/guests")}
                className="cursor-pointer flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <i className="fa-solid fa-user-group text-blue-600 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></i>
                <span className="flex-1 ml-3 whitespace-nowrap">Guests</span>
              </a>
            </li>
            <li>
              <a
               onClick={() => navigate("/admin/users")}
                className="cursor-pointer flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <i className="fa-solid fa-user-shield text-blue-600 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></i>
                <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
              </a>
            </li>
            <li>
              <a
                onClick={() => navigate("/admin/payments")}
                className="cursor-pointer flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <i className="fa-solid fa-circle-dollar-to-slot text-xl text-blue-600 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></i>
                <span className="flex-1 ml-3 whitespace-nowrap">Payments</span>
                {/* <!-- <span
                className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300"
                >3</span
              > --> */}
              </a>
            </li>
            <li>
              <a
                onClick={() => navigate("/admin/contacts")}
                className="cursor-pointer flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <i className="fa-solid fa-envelope-open-text text-blue-600 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></i>
                <span className="flex-1 ml-3 whitespace-nowrap">Contacts</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default SiderBar;
