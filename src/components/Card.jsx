import React from "react";

const Card = ({ name, desc }) => {
  return (
    <div className="text-white  m-2 w-96 flex flex-col justify-between border-slate-500 border-2 hover:border-white rounded-lg bg-slate-500 p-5 shadow-lg shadow-gray-800">
      <div className="">
        <h1 className="text-2xl font-extrabold">{name}</h1>
        <p className="pt-2">{desc}</p>
      </div>

      {/* 
      <div className="space-x-3 text-primary font-bold flex text-sm mt-2">
        {github && (
          <a
            href={github}
            className="cursor-pointer flex items-center hover:text-white"
          >
            Github <VscGithub className="ml-1" />
          </a>
        )}

        {live && (
          <a
            href={live}
            className="cursor-pointer flex items-center hover:text-white"
          >
            Live <HiOutlineExternalLink className="ml-1" />
          </a>
        )}
      </div> */}
    </div>
  );
};

export default Card;
