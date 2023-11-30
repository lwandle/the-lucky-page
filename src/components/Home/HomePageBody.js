import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const HomePageBody = () => {
  const location = useLocation();
  const lastHash = useRef("");

  useEffect(() => {
    if (location.hash) {
      lastHash.current = location.hash.slice(1);
    }

    if (lastHash.current && document.getElementById(lastHash.current)) {
      setTimeout(() => {
        document
          .getElementById(lastHash.current)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
        lastHash.current = "";
      }, 100);
    }
  }, [location]);
  return (
    <div className="md:p-6 text-center">
      <div className="flex space-x-1 justify-center m-8 items-center">
        <div className="hidden md:block w-[50%] flex-shrink">
          <img src="/iphone.svg" alt="" />
        </div>
        {/* First main info section */}
        <div className="flex flex-col md:w-[50%] text-left space-y-2 md:space-y-6">
          <h3
            id="section-1"
            className="text-beardSmHeading md:text-beardMdHeading font-poppins font-semibold text-lucky-white leading-[1.5] md:leading-[3.15rem] break-words"
          >
            Search for the car of your dreams and test drive it
          </h3>
          <p className="text-lucky-white font-poppins text-beardSmParagraph md:text-base leading-[1.5] md:leading-[1.4rem] break-words">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu sed
            malesuada habitant odio eu etiam proin odio habitant. Elit felis
            aliquam suspendisse amet nunc. Erat.
          </p>
          <ul className="flex flex-col m-4 md:m-8 space-y-1 md:space-y-5 text-lucky-white font-poppins text-beardSmParagraph md:text-base">
            <li className="flex space-x-5">
              <img src="/face-id-6.svg" alt="" />
              <p>Multiple filtering options</p>
            </li>
            <li className="flex space-x-5">
              <img src="/face-id-6.svg" alt="" />
              <p>Test drives with both private sellers or dealerships</p>
            </li>
            <li className="flex space-x-5">
              <img src="/face-id-6.svg" alt="" />
              <p>pictures</p>
            </li>
          </ul>
        </div>
      </div>

      {/* Second main info section */}
      <div className="flex space-x-1 justify-center m-8 items-center">
        <div className="flex flex-col md:w-[50%] text-left space-y-2 md:space-y-6">
          <h3
            id="section-2"
            className="text-beardSmHeading md:text-beardMdHeading font-poppins font-semibold text-lucky-white leading-[1.5] md:leading-[3.15rem]"
          >
            Only real people
          </h3>
          <p className="text-lucky-white font-poppins text-beardSmParagraph md:text-base leading-[1.5] md:leading-[1.4rem] break-words">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu sed
            malesuada habitant odio eu etiam proin odio habitant. Elit felis
            aliquam suspendisse amet nunc. Erat.
          </p>
          <ul className="flex flex-col m-4 md:m-8 space-y-1 md:space-y-5 text-lucky-white font-poppins text-beardSmParagraph md:text-base">
            <li className="flex space-x-5">
              <img src="/face-id-6.svg" alt="" />
              <p>Secure and verified registration</p>
            </li>
            <li className="flex space-x-5">
              <img src="/face-id-6.svg" alt="" />
              <p>Direct messaging with the seller</p>
            </li>
            <li className="flex space-x-5">
              <img src="/face-id-6.svg" alt="" />
              <p>Instant armed response if something goes wrong</p>
            </li>
          </ul>
        </div>
        <div className="hidden md:block w-[50%] flex-shrink">
          <img src="/iphone.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomePageBody;
