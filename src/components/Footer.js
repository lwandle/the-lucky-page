import React from "react";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  return (
    <>
      {/* Black Strip at the Bottom of the screen */}
      {location.pathname === "/demo-request" ? (
        <div className="bg-lucky-black py-8"></div>
      ) : null}
      <footer className=" bg-luck-grey w-full p-4">
        <p className="text-luck-dark4 text-[0.813rem] text-center font-poppins">
          Dealr Automotive Limited | Registration number: 629444 | 15 Harcourt
          street, St. Kevin’s, Dublin 2 D02 XY47, Dublin, Ireland
        </p>
      </footer>
    </>
  );
};

export default Footer;
