import React from "react";
import { useUser } from "../../../context/UserContext";
import { Navigate } from "react-router-dom";
import Loader from "../../helpers/Loader";

const Home = () => {
  const { user, loading } = useUser();

  if (loading) {
    return <Loader />;
  }
  if (!user) {
    return <Navigate to="/login" />;
  }
  
  return <div>Hello Home</div>;
};

export default Home;
