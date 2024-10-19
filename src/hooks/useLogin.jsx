import { signInWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";
import { getErrorMessage } from "../utils/getErrorMessage";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/config";

const useLogin = () => {
  const navigate = useNavigate();
  const login = async (email, password) => {
    try {
      const user = await toast.promise(
        signInWithEmailAndPassword(auth, email, password),
        {
          loading: "logging in",
          success: "Logged in Successfully",
          error: (err) => getErrorMessage(err),
        }
      );

      if (user) {
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return { login };
};

export default useLogin;
