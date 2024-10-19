import { getAdditionalUserInfo, signInWithPopup } from "firebase/auth";
import { auth, db, facebook } from "../../firebase/config";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const useFacebookAuth = () => {
  const navigate = useNavigate();
  const signInWithFacebook = async () => {
    try {
      const user = await signInWithPopup(auth, facebook);

      if (user) {
        const additionalUserInfo = getAdditionalUserInfo(user);

        if (additionalUserInfo?.isNewUser) {
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
        } else {
          navigate("/");
        }
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return { signInWithFacebook };
};

export default useFacebookAuth;
