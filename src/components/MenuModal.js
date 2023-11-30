import React from "react";
import { Link, useNavigate } from "react-router-dom";

const MenuModal = ({ isOpen = false, handleModal }) => {
  const navigate = useNavigate();

  return (
    <div
      id="menu"
      className={`absolute ${
        isOpen ? "flex" : "hidden"
      } flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-lucky-black sm:w-auto sm:self-center left-6 right-6 drop-shadow-md z-[17] top-8`}
    >
      <Link
        to="/#section-1"
        className="text-lucky-white text-base font-poppins font-semibold"
        onClick={() => handleModal(false)}
      >
        For Buyers
      </Link>
      <Link
        to="/#section-2"
        className="text-lucky-white text-base font-poppins font-semibold"
        onClick={() => handleModal(false)}
      >
        For Sellers
      </Link>
      <button
        className="bg-lucky-blue px-5 py-4 rounded-xl"
        onClick={() => {
          handleModal(false);
          navigate("/demo-request");
        }}
      >
        <p className="text-lucky-white text-base font-poppins font-semibold">
          Request a Demo
        </p>
      </button>
    </div>
  );
};

export default MenuModal;
