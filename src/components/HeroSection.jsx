import React from "react";
import Typewriter from "typewriter-effect";
import bob from "../assests/bob.png";

const HeroSection = () => {
  return (
    <div className="w-full flex-col lg:flex-row pt-3 text-white bg-primaryBlue flex items-center ">
      <div className="pl-4 md:pl-0 pt-36 w-full">
        <p className="text-primaryRed flex tracking-wider items-center font-semibold text-3xl pb-4">
          <span className="h-0.5 rounded-xl mr-1 w-7 bg-primaryRed"></span>
          Hello
        </p>
        <h1 className="text-6xl md:text-7xl lg:text-8xl primaryfont">I'm</h1>
        <h1 className="text-6xl md:text-7xl lg:text-8xl primaryfont">
          Utkarsh Vishwakarma
        </h1>
        <p className="text-primaryGray flex tracking-wider items-center font-semibold text-3xl pb-4">
          <Typewriter
            options={{
              strings: ["a Web Developer", ""],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 20,
            }}
          />
        </p>
        <div className="mt-3">
          <button className="border-2 border-primaryRed px-5 py-3 rounded-md text-primaryRed text-lg">
            Downlaod CV
          </button>
        </div>
      </div>
      <div className="aspect-video h-56">
        <img className="object-contain " src={bob} alt="Bob comes here"></img>
      </div>
    </div>
  );
};

export default HeroSection;
