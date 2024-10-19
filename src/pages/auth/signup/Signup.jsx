import React, { useState } from "react";
import logo from "/assets/logo.svg";
import facebookAlt from "/assets/facebookAlt.svg";
import microsoft from "/assets/microsoft.png";
import playstore from "/assets/playstore.png";
import { Link, Navigate } from "react-router-dom";
import { validate } from "../../../utils/validate";
import useSignUp from "../../../hooks/useSignUp";
import { useUser } from "../../../../context/UserContext";
import Loader from "../../../helpers/Loader";
import useFacebookSignUp from "../../../hooks/useFacebookSignUp";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
    fullName: "",
  });

  const { signUp } = useSignUp();
  const { user, loading } = useUser();
  const { facebookSignUp } = useFacebookSignUp();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      validate(
        formData.email,
        formData.password,
        formData.username,
        formData.fullName
      )
    ) {
      await signUp(
        formData.email,
        formData.password,
        formData.username,
        formData.fullName
      );
    } else {
      return;
    }
  };

  const handleFacebookAuth = async () => {
    await facebookSignUp();
  };
  // if (loading) {
  //   return <Loader />;
  // }

  // if (user) {
  //   return <Navigate to="/" />;
  // }

  return (
    <section className="flex  items-center justify-center flex-col  sm:mt-8">
      <div className="sm:border sm:w-[349px] flex items-center flex-col border-[#dbdbdb]">
        <figure className="mt-8">
          <img src={logo} alt="instagram_logo" />
        </figure>
        <p className="text-xs font-medium text-center text-[#717171] mt-2">
          Sign up to see photos and videos from <br /> your friends.
        </p>

        <button
          onClick={handleFacebookAuth}
          className="flex items-center rounded-lg w-[268px] mt-2 h-8 gap-2 justify-center  bg-[#0095F6]"
        >
          <img src={facebookAlt} alt="facebook_logo" />
          <p className="text-[#ffffff] text-xs font-medium">
            Sign in with facebook
          </p>
        </button>
        <div className="mt-4 flex items-center w-full gap-4 px-[40px]">
          <hr className="w-full border border-[#d9d9d9]" />
          <p className="text-[#7c6e6e] font-semibold text-xs">OR</p>
          <hr className="w-full border border-[#d9d9d9]" />
        </div>
        <form
          onSubmit={handleSubmit}
          action=""
          className="mt-4 flex flex-col items-center w-full gap-2 sm:px-[40px]"
        >
          <input
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="Email"
            className="authInput"
          />
          <input
            onChange={handleChange}
            name="fullName"
            type="text"
            placeholder="Full Name"
            className="authInput"
          />
          <input
            name="username"
            onChange={handleChange}
            type="text"
            placeholder="Username"
            className="authInput"
          />
          <input
            onChange={handleChange}
            name="password"
            type="password"
            placeholder="Password"
            className="authInput"
          />

          <p className="text-[#717171] text-xs text-center justify-center w-[268px] mt-6">
            People who use our service may have uploaded your contact
            information to Instagram.{" "}
            <span className="text-[#00376B]">Learn more</span>
          </p>

          <p className="text-[#717171] w-[268px] mt-4 justify-center text-xs text-center">
            By signing up, you agree to our{" "}
            <span className="text-[#00376B] underline">Terms</span>,{" "}
            <span className="text-[#00376B] underline">Privacy Policy</span>
            &nbsp; and{"  "}&nbsp;
            <span className="text-[#00376B] underline">Cookies Policy.</span>
          </p>

          <button className="bg-[#4cb5f9] w-full mb-[24px] text-white font-semibold text-xs rounded-[8px] mt-4 h-8">
            Sign up
          </button>
        </form>
      </div>

      <div className="sm:border border-[#dbdbdb] sm:w-[349px] flex items-center justify-center mt-2 h-12">
        <p className="text-xs flex items-center justify-center w-full font-medium text-[#252525]">
          Have an account?&nbsp;
          <Link to="/login">
            <span className="text-[#0095F7]">Log in</span>
          </Link>
        </p>
      </div>

      <div className="flex flex-col mt-8 gap-8 items-center">
        <p className="text-xs text-[#252525]">Get the app.</p>

        <figure className="flex items-center gap-4">
          <img src={playstore} alt="playstore_logo" />
          <img src={microsoft} alt="microsoft_logo" />
        </figure>
      </div>
    </section>
  );
};

export default Signup;
