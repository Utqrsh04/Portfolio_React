import React from "react";
import Typewriter from "typewriter-effect";
import bob from "../assests/bob.png";

const HeroSection = () => {
  return (
    <div className=" justify-center min-h-screen pt-48 flex-col md:flex-row text-white bg-primaryBlue flex ">
      <div className="pl-4 md:mt-7 ">
        <p className="text-primaryRed flex tracking-wider items-center font-semibold text-3xl pb-4">
          <span className="h-0.5 rounded-xl mr-1 w-7 bg-primaryRed"></span>
          Hey there 👋
        </p>
        <h1 className="text-6xl md:text-7xl lg:text-8xl primaryfont">I'm</h1>
        <h1 className="text-6xl md:text-7xl lg:text-8xl primaryfont">
          Utkarsh Vishwakarma
        </h1>
        <p className="text-primaryGray flex tracking-wider items-center font-semibold text-3xl pb-4">
          <Typewriter
            options={{
              strings: [
                "a Frontend Developer",
                "a Soccer Player",
                "a FullStack Developer",
                "a Coder",
              ],
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

          <div className="mt-4 bg-primaryGray bg-opacity-30 rounded-md w-36 space-x-4 flex items-center justify-evenly">
            <img
              className="h-10"
              src="https://img.icons8.com/plasticine/100/000000/instagram-new--v2.png"
            />
            <img
              className="w-8"
              src="https://img.icons8.com/fluency-systems-regular/48/000000/github.png"
            />

            <img
              className="h-7 pr-1"
              src="https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-linkedin-social-media-justicon-lineal-color-justicon.png"
            />
          </div>
        </div>
      </div>

      <div className=" hidden md:block aspect-video h-56">
        <img className="object-contain " src={bob} alt="Bob comes here"></img>
      </div>
    </div>
  );
};

export default HeroSection;
