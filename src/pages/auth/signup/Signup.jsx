import React from "react";
import logo from "/assets/logo.svg";
import facebookAlt from "/assets/facebookAlt.svg";
import microsoft from "/assets/microsoft.png";
import playstore from "/assets/playstore.png";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <section className="flex items-center justify-center flex-col mt-8">
      <div className="border w-[349px] flex items-center flex-col border-[#dbdbdb]">
        <figure className="mt-8">
          <img src={logo} alt="instagram_logo" />
        </figure>
        <p className="text-xs font-medium text-center text-[#717171] mt-2">
          Sign up to see photos and videos from <br /> your friends.
        </p>

        <button className="flex items-center rounded-lg w-[268px] mt-2 h-8 gap-2 justify-center  bg-[#0095F6]">
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
          action=""
          className="mt-4 flex flex-col items-center w-full gap-2 px-[40px]"
        >
          <input
            type="email"
            placeholder="Email"
            className="pl-2 border  bg-[#FCFBFC] border-[#DBDBDB] w-[268px] text-xs outline-none h-8 placeholder:text-xs placeholder:font-medium placeholder:text-[#B4B4B4]"
          />
          <input
            type="text"
            placeholder="Full Name"
            className="pl-2 border bg-[#FCFBFC] border-[#DBDBDB] w-[268px] text-xs outline-none h-8 placeholder:text-xs placeholder:font-medium placeholder:text-[#B4B4B4]"
          />
          <input
            type="text"
            placeholder="Username"
            className="pl-2 border bg-[#FCFBFC] border-[#DBDBDB] w-[268px] text-xs outline-none h-8 placeholder:text-xs placeholder:font-medium placeholder:text-[#B4B4B4]"
          />
          <input
            type="password"
            placeholder="Password"
            className="pl-2 border bg-[#FCFBFC] border-[#DBDBDB] w-[268px] text-xs outline-none h-8 placeholder:text-xs placeholder:font-medium placeholder:text-[#B4B4B4]"
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

      <div className="border border-[#dbdbdb] w-[349px] flex items-center justify-center mt-2 h-12">
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
