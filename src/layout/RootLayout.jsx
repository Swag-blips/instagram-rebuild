import React from "react";
import { Outlet } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import Sidebar from "../components/Sidebar";

const RootLayout = () => {
  return (
    <div className="flex">
      <div className="w-[16%]">
        <Sidebar />
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
