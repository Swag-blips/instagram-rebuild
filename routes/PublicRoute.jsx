import { Navigate, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import Spinner from "../src/helpers/Spinner";

const PublicRoute = ({ children }) => {
  const { user, loading } = useUser();
  console.log(user);

  if (loading) {
    return <Spinner />;
  }

  if (!user) {
    return <Navigate to="/signup" />;
  }

  return children;
};

export default PublicRoute;
