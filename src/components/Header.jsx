import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="h-20 flex justify-between items-center text-white bg-primary w-full ">
      <div className="text-5xl ml-5 font-bold logo ">Utkarsh</div>

      <div className="flex space-x-3 pr-5 font-semibold">
        <Link to="/">Home</Link>

        <Link to="/explore">Explore</Link>

        <Link to="/work">Work</Link>

        <Link to="/project">Project</Link>

        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Header;
