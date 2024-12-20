import React, { useState } from "react";
import mockup from "/assets/mockup.png";
import logo from "/assets/logo.svg";
import facebook from "/assets/Facebook.svg";
import microsoft from "/assets/microsoft.png";
import playstore from "/assets/playstore.png";
import { Link, Navigate } from "react-router-dom";
import useLogin from "../../../hooks/useLogin";
import { useUser } from "../../../../context/UserContext";
import Loader from "../../../helpers/Loader";
import useFacebookAuth from "../../../hooks/useFacebookAuth";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { login } = useLogin();
  const { user, loading } = useUser();
  const { signInWithFacebook } = useFacebookAuth();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  console.log(formData.email, formData.password);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(formData.email, formData.password);
  };

  const handleFacebookAuth = async () => {
    await signInWithFacebook();
  };

  if (loading) {
    return <Loader />;
  }

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <section className="flex items-center justify-center sm:h-screen">
      <div className="flex gap-4 items-start">
        <figure className="lg:flex hidden">
          <img src={mockup} alt="login_mockup" />
        </figure>

        <div className="mt-8 flex flex-col w-[336px]">
          <div className="flex items-center sm:border flex-col border-[#DBDBDB]">
            <figure className=" mt-8">
              <img src={logo} alt="instagram_logo" />
            </figure>

            <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-2">
              <input
                type="email"
                placeholder="Email"
                className="authInput"
                name="email"
                onChange={handleInputChange}
              />
              <input
                type="password"
                placeholder="Password"
                className="authInput"
                name="password"
                onChange={handleInputChange}
              />
              <button
                type="submit"
                className="bg-[#4cb5f9] text-white font-semibold text-xs rounded-[8px] mt-4 h-8"
              >
                Log in
              </button>
            </form>
            <div className="mt-4 flex items-center w-full gap-4 px-[44px]">
              <hr className="w-full border border-[#d9d9d9]" />
              <p className="text-[#b4b4b4] font-semibold text-xs">OR</p>
              <hr className="w-full border border-[#d9d9d9]" />
            </div>

            <button
              onClick={handleFacebookAuth}
              className="mt-6 flex items-center gap-2"
            >
              <img src={facebook} alt="facebook_logo" />
              <p className="font-medium text-xs text-[#3d5a98]">
                Log in with facebook
              </p>
            </button>

            <p className="text-xs mt-6 mb-6 font-medium text-[#00376B]">
              Forgotten your password
            </p>
          </div>
          <div className=" sm:border border-[#dbdbdb] flex items-center justify-center mt-2 h-12">
            <p className="text-[12px] font-medium text-[#252525]">
              Don't have an account{" "}
              <Link to="/signup">
                <span className="text-[#0095F7]">Sign up</span>
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
        </div>
      </div>
    </section>
  );
};

export default Login;
