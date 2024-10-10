import React from "react";
import mockup from "/assets/mockup.png";
import logo from "/assets/logo.svg";
import facebook from "/assets/Facebook.svg";
import microsoft from "/assets/microsoft.png";
import playstore from "/assets/playstore.png";

const Login = () => {
  return (
    <section className="flex items-center justify-center h-[100vh]">
      <div className="flex gap-4 items-start">
        <figure>
          <img src={mockup} alt="login_mockup" />
        </figure>

        <div className="mt-8 flex flex-col w-[336px]">
          <div className="flex items-center border flex-col border-[#DBDBDB]"></div>
        </div>
      </div>
    </section>
  );
};

export default Login;
