import React from "react";
import { useUser } from "../../../context/UserContext";
import { Navigate, useNavigate } from "react-router-dom";
import Spinner from "../../../helpers/Spinner";

const Home = () => {
  const { user, loading } = useUser();

  if (loading) {
    return <Spinner />;
  }
  if (!user) {
    return <Navigate to="/login" />;
  }
  return <div>Hello Home</div>;
};

export default Home;
