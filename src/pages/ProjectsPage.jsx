import React from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { data } from "../assests/data";

const ProjectsPage = () => {
  return (
    <div className="bg-primary min-h-screen ">
      <Header />

      <div className="bg-primary text-white pt-16">
        <h1 className="text-5xl font-extrabold text-center ">
          Something that he has build
        </h1>
        <p className="mt-4 text-purple-200 font-light text-center text-lg">
          with love, expertise and pinch of magical ingredients
        </p>
      </div>

      <div className="flex justify-center flex-wrap mt-14 ">
        {data.map((project) => (
          <Link to={`/${project.name}`}>
            <Card name={project.name} desc={project.desc} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
