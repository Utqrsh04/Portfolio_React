import React from "react";
import bob from "../assests/bob.png";

const HeroSection = () => {
  return (
    <div className="w-full bg-primary flex items-center ">
      <div className="text-white w-1/2 py-40 pl-20">
        <h1 className="font-semibold text-purple-200">----------Who is he?</h1>
        <h1 className="text-sm md:text-6xl sm:text-4xl font-bold">
          Utkarsh Vishwakarma
        </h1>
        <p className="mt-4 text-purple-200">
          "A fresher with experience", this line says exactly who he is. He is a
          software developer who crafts beautiful web and apps. His perfect
          balance of technical & managerial skills stands him apart from the
          crowd.
        </p>

        <div className="w-full flex justify-start mt-5">
          <button className="bg-red-200 text-black mr-4 w-60 py-4 rounded-md border-2 border-red-200 hover:bg-primary box-border hover:text-red-200 hover:border-red-200">
            Know More
          </button>

          <button className="bg-primary bg-bob text-red-200 border-2 w-60 border-red-200 hover:bg-red-200 hover:text-black py-4 rounded-md">
            Download Resume
          </button>
        </div>
      </div>

      <div className="w-1/2 bg-primary text-center text-white">
        <img src={bob} alt="bobTheBuilder" className="w-4/5" />
      </div>
    </div>
  );
};

export default HeroSection;
