import React from "react";
import { Outlet } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import Sidebar from "../components/Sidebar";
import Loader from "../helpers/Loader";

const RootLayout = () => {
  const { user, loading } = useUser();

  if (loading) {
    return <Loader />;
  }
  if (!user) {
    return <Navigate to="/login" />;
  }
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
