import { createUserWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";
import { auth, db } from "../../firebase/config";
import { doc, setDoc } from "firebase/firestore";

const useSignUp = () => {
  const signUp = async (email, password, username, fullName) => {
    try {
      const user = await toast.promise(
        createUserWithEmailAndPassword(auth, email, password),
        {
          loading: "Signing up",
          success: "User successfully created",
          error: "an error occured",
        }
      );

      if (user) {
        const currentUserId = user.user.uid;

        await setDoc(doc(db, "User", currentUserId), {
          id: currentUserId,
          email,
          bio: "Hi, im new on instagram!",
          username,
          fullName,
          profilePic: "",
        });

        console.log("User successfully saved in firestore ");
      }
    } catch (error) {
      console.log(` an error occured at the signup hook ${error.message}`);
    }
  };

  return { signUp };
};

export default useSignUp;
