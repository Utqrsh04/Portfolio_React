import React from "react";
import Header from "../components/Header";

const skills = [
  "Html & CSS",
  "Javascript",
  "Bootstrap",
  "React",
  "Redux",
  "Firebase",
  "TypeScript",
  "MongoDB",
  "Nodejs",
  "C++",
  "Java",
  "SQL",
];

const Explore = () => {
  return (
    <div className=" justify-center min-h-screen flex-col md:flex-row text-white bg-primaryBlue ">
      <div className="text-center flex flex-col justify-center items-center">
        <p className="text-primaryRed tracking-wider flex items-center justify-center font-semibold text-3xl pb-4">
          <span className="h-0.5 rounded-xl mr-1 w-7 bg-primaryRed"></span>
          About me
        </p>
        <h1 className="text-6xl font-semibold primaryfont">
          Full Stack Developer
        </h1>
        <div className="mt-5 primaryfont text-2xl md:w-3/4 text-center">
          <h1 className="">
            I love everything that is related to Web programming (React -
            Firebase, MERN Stack).
          </h1>
          <h1 className="">
            I'm a motivated developer experience creating custom websites with
            ReactJs, JavaScript, HTML5 & CSS3, and MERN Stack.
          </h1>
          <h1 className="">I have also contributed to Open Source.</h1>

          <h1>
            I attended many challenges, Hackathons to brush up my skills. When
            I'm not coding, or developing, you'll find me gaming , working out
            or playing soccer . ⚽
          </h1>
        </div>

        <div className="mt-3 md:w-2/3 lg:w-2/4 flex justify-center items-center flex-wrap">
          {skills.map((each, index) => (
            <button
              key={index}
              className="border-2 font-semibold my-3 mx-2 border-primaryRed px-5 py-3 hover:border-2 hover:border-primary hover:bg-primaryRed hover:text-primaryBlue rounded-md text-primaryRed text-lg"
            >
              {each}
            </button>
          ))}
        </div>
      </div>

      {/* <div className=" h-fit bg-primary text-center text-white">
      </div> */}
    </div>
  );
};

export default Explore;
