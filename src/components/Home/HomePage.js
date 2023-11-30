import React from "react";
import HomePageBody from "./HomePageBody";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col w-full bg-lucky-blue">
        {/* Top section of the home page */}
        <div className="relative">
          <div className="flex flex-col space-y-1 md:space-y-4 text-center absolute left-6 right-6 top-[20%]">
            <div className=" text-beardSmTitle md:text-beardMdTitle font-poppins font-semibold text-lucky-white break-words shrink">
              A new era for test-drives
            </div>
            <p className="text-lucky-white text-center font-poppins text-beardSmParagraph md:text-beardMdParagraph md:text-base break-words leading-[1] w-full md:w-[60%] self-center">
              Enhanced test drive experience through the connection of people in
              a secure, scheduled and convenient manner to ensure the seamless
              buying and selling of new and used vehicles.
            </p>
            <div className="flex space-x-1 justify-center">
              <img
                src="/img/appstore_badge.svg"
                alt=""
                className="max-w-[23%] md:max-w-full"
              />
              <img
                src="/img/playstore_badge.svg"
                alt=""
                className="max-w-[23%] md:max-w-full"
              />
            </div>
          </div>

          {/* Images for the homepage design, Remove on small devices */}
          <div className="hidden md:block">
            <img
              src="/img/clear.svg"
              alt=""
              className="absolute z-[15] bottom-0"
            />
            <img
              src="/subtract_white.svg"
              alt=""
              className="absolute z-[8] bottom-0"
            />
            <img
              src="/subtract_black.svg"
              alt=""
              className="absolute z-[9] bottom-0"
            />
            <img
              src="/subtract.svg"
              alt=""
              className="absolute z-[10] bottom-0"
            />
          </div>

          <img src="/landing_car.svg" alt="" />
        </div>

        {/* Body of the home page */}
        <HomePageBody />
      </div>

      {/* Home page Footer or Bootom of the Page */}
      <div className="relative bottom-0 bg-lucky-blue">
        <div className="flex flex-col space-y-1 md:space-y-4 text-center absolute top-[70%] left-[50%] translate-x-[-50%] translate-y-[-70%] w-full md:w-[60%]">
          <div className=" font-poppins font-semibold text-lucky-white break-words shrink">
            <p className="text-beardTitle">Private seller?</p>
            <p className="text-beardTitle">We got your back</p>
          </div>
          <p className="text-lucky-white text-center font-poppins text-beardSmParagraph md:text-beardMdParagraph md:text-base leading[1] md:leading-[1.4rem] break-words md:px-28">
            Want to sell your current car? Put it on Dealr, schedule
            appointments and take advantage of our integrated financing engine.
          </p>
          <div className="flex space-x-1 justify-center flex-wrap items-start">
            <img
              src="/img/cards/verified.svg"
              alt=""
              className="max-w-[15%] md:max-w-full"
            />
            <img
              src="/img/cards/time_wasters.svg"
              alt=""
              className="max-w-[15%] md:max-w-full"
            />
            <img
              src="/img/cards/shedule.svg"
              alt=""
              className="max-w-[15%] md:max-w-full"
            />
            <img
              src="/img/cards/upload.svg"
              alt=""
              className="max-w-[15%] md:max-w-full"
            />
            <img
              src="/img/cards/geo.svg"
              alt=""
              className="max-w-[15%] md:max-w-full"
            />
            <img
              src="/img/cards/chat.svg"
              alt=""
              className="max-w-[15%] md:max-w-full"
            />
          </div>
        </div>
        <img src="/union.svg" alt="" />
      </div>
    </>
  );
};

export default HomePage;
