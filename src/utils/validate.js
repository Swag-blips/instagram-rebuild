import toast from "react-hot-toast";

export const validateSignUp = (email, password, username, fullName) => {
  let isValid = true;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email || !password || !username || !fullName) {
    isValid = false;
    toast.error("Please fill in the details", {
      duration: 1000,
    });
  } else if (!emailRegex.test(email)) {
    isValid = false;
    toast.error("Invalid email", {
      duration: 1000,
    });
  } else if (password.length < 6) {
    isValid = false;
    toast.error("Password must be more than 6 characters", {
      duration: 1000,
    });
  }

  return isValid;
};
