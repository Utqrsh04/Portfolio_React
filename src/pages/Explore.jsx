import React from "react";
import Header from "../components/Header";

const Explore = () => {
  return (
    <div className="w-screen h-screen bg-primary">
      <Header />

      <div className=" bg-primary flex items-center ">
        <div className="text-white py-40 pl-20">
          <h1 className="font-semibold text-purple-200">
            ----------What does he do?
          </h1>
          <p className="pt-3 text-3xl text-purple-200">
            He creates elegant, logical web and mobile app solutions. In his
            hobby time, he designs.
          </p>
          <h1 className="text-sm sm:text-4xl md:text-6xl  mt-5 font-extrabold">
            Think. <span className="text-red-200">Code.</span>
            <br />
            Debug.
          </h1>
        </div>

        <div className="w-1/2 h-fit bg-primary text-center text-white">
          {/* <img src="" alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default Explore;
