import { Outlet } from "react-router-dom";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  return (
    <div className="relative h-full w-screen min-[2048px]:container">
      {/* Logo */}
      <img
        src="/img/beard_logo.svg"
        alt=""
        className="absolute top-[1%] left-[4%] max-w-[10%] md:max-w-full z-30 cursor-pointer"
        onClick={() => {
          navigate("/");
        }}
      />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
