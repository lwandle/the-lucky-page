import { useState } from "react";
import MenuModal from "./MenuModal";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [mobileMenu, showMobileMenu] = useState(false);
  const navigate = useNavigate();

  const handleModal = (showModal) => {
    showMobileMenu(showModal);
  };
  return (
    <div className="absolute w-full z-[20]">
      {/* Header */}
      <header className="relative flex justify-end container mx-auto p-6">
        <div className="hidden text-right space-x-8 md:block">
          <Link
            to="/#section-1"
            className="text-lucky-white text-base font-poppins font-semibold"
          >
            For Buyers
          </Link>
          <Link
            to="/#section-2"
            className="text-lucky-white text-base font-poppins font-semibold"
          >
            For Sellers
          </Link>
          <button
            className="bg-lucky-blue px-5 py-4 rounded-xl"
            onClick={() => navigate("/demo-request")}
          >
            <p className="text-lucky-white text-base font-poppins font-semibold">
              Request a Demo
            </p>
          </button>
        </div>

        {/* Hamburger button */}
        <button
          id="menu-btn"
          className={`block hamburger md:hidden focus:outline-none ${
            mobileMenu && "open"
          }
          `}
          onClick={() => {
            showMobileMenu(!mobileMenu);
          }}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>

        {mobileMenu ? (
          <>
            <MenuModal isOpen={mobileMenu} handleModal={handleModal} />
          </>
        ) : null}
      </header>
    </div>
  );
};

export default Header;
