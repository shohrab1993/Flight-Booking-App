import React from "react";
import logoImage from "../img/lws-logo.svg";

const MainHeader = () => {
  return (
    <>
      <header id="header">
        <div className="container">
          <img src={logoImage} alt="logo" className="logo" />
          <div className="flex items-center">
            <a className="text-white min-w-[50px] font-medium" href="/">
              Home
            </a>
            <button className="log-btn btn">Login</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default MainHeader;
