import { signInWithPopup } from "firebase/auth";
import { auth, facebook } from "../../firebase/config";

const useFacebookLogin = () => {
  const signInWithFacebook = async () => {
    try {
      const user = await signInWithPopup(auth, facebook);
      if (user) {
        console.log(user);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return { signInWithFacebook };
};

export default useFacebookLogin;
