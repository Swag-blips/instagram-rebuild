import React from "react";
import { Outlet } from "react-router-dom";
import { useUser } from "../../context/UserContext";

const RootLayout = () => {
  const { user, loading } = useUser();
  return (
    <main>
      <Outlet />
    </main>
  );
};

export default RootLayout;
