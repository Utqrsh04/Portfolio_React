import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { data } from "../assests/data";
import Card from "./Card";

const Project = () => {
  const history = useHistory();

  const path = history.location.pathname.split("/")[1];

  const [project, setProject] = useState({});
  console.log(project);

  useEffect(() => {
    const newData = data.filter((each) => each?.name === path);
    setProject(newData[0]);
  }, [path]);

  return (
    <>
      <div className=" bg- min-h-screen ">
        <div className="bg-primary flex items-center">
          <div className="w-1/2 text-white py-40 px-20">
            <h1 className="text-sm sm:text-4xl md:text-6xl  mt-5 font-extrabold">
              {project?.name}
            </h1>
            <p className="pt-3 text-lg font-light text-purple-200">
              {project?.desc}
            </p>

            <div className="w-full flex justify-start mt-5">
              {project?.github && (
                <a
                  href={`${project?.github}`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-red-200 cursor-pointer text-center text-black mr-4 w-60 py-4 rounded-md border-2 border-red-200 hover:bg-primary box-border hover:text-red-200 hover:border-red-200"
                >
                  View on Github
                </a>
              )}

              {project?.live && (
                <a
                  href={`${project?.live}`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-primary cursor-pointer text-center text-red-200 border-2 w-60 border-red-200 hover:bg-red-200 hover:text-black py-4 rounded-md"
                >
                  Visit Project
                </a>
              )}
            </div>
          </div>

          <div className="w-1/2 h-fit pl-20 bg-primary text-center text-white">
            <Card name={project?.name} desc={project?.desc} />
          </div>
        </div>

        <div className="bg-primary text-white text-center pb-10">
          <div className="mx-72 pb-4">
            <h1 className="text-sm sm:text-4xl md:text-5xl  mt-5 font-extrabold">
              Let's talk about the project
            </h1>
            <p className="pt-3 text-base font-light text-purple-200">
              {project?.desc}
            </p>
          </div>

          <div className="mx-72">
            <h1 className="text-sm sm:text-4xl md:text-5xl  mt-5 font-extrabold">
              What <span className="text-red-200">Technologies</span> are used?
            </h1>
            <div>Images Here</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
