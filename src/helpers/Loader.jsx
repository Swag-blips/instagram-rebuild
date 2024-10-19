import React from "react";
import instaLogo from "/assets/insta-logo.png";
import meta from "/assets/download.png";

const Loader = () => {
  return (
    <div className="full-page-loader relative ">
      <figure className="">
        <img
          className="w-12 h-12 object-cover"
          src={instaLogo}
          alt="insta-logo"
        />
      </figure>

      <figure className="meta">
        <img className="w-16 h-16 object-contain" src={meta} alt="" />
      </figure>
    </div>
  );
};

export default Loader;
