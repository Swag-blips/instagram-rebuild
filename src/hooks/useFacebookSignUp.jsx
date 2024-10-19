import { signInWithPopup } from "firebase/auth";
import { auth, db, facebook } from "../../firebase/config";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const useFacebookSignUp = () => {
  const navigate = useNavigate();
  const facebookSignUp = async () => {
    try {
      const user = await signInWithPopup(auth, facebook);
      if (user) {
        const currentUser = user.user;

        await setDoc(doc(db, "User", currentUser.uid), {
          id: currentUser.uid,
          email: currentUser.email,
          bio: "Hi There, im new to instagram!",
          username: currentUser.displayName,
          fullName: currentUser.displayName,
          profilePic: currentUser.photoURL,
        });

        navigate("/");

        console.log("User successfully saved in firestore ");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return { facebookSignUp };
};

export default useFacebookSignUp;
