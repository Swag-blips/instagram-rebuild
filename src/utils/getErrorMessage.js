export const getErrorMessage = (err) => {
  if (err.code === "auth/network-request-failed") {
    return "Network err, Please Check your connection";
  } else if (err.code === "auth/email-already-in-use") {
    return "Email already exists";
  } else if (err.code === "auth/invalid-email") {
    return "Invalid email";
  } else if (err.code === "auth/invalid-credential") {
    return "Invalid email or password";
  } else {
    return `err: ${
      err.message || "An unexpected err occurred. Please try again."
    }`;
  }
};
