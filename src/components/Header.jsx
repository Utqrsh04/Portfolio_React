import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import underline from "../assests/nav_active.svg";

const Header = () => {
  const history = useHistory();

  const path = history.location.pathname.split("/")[1];

  console.log(path);

  return (
    <div className="h-20 flex justify-between items-center text-white bg-primary w-full ">
      <div className="text-5xl ml-5 font-bold logo ">Utkarsh</div>

      <div className="flex absolute right-0 justify-evenly pr-5 text-lg font-semibold">
        <Link to="/" className="w-28  ">
          Home
          {path === "" && <img src={underline} alt="" />}
        </Link>

        <Link to="/explore" className="w-28 ">
          Explore
          {path === "explore" && <img src={underline} alt="" />}
        </Link>

        <Link to="/work" className="w-28 ">
          Work
          {path === "work" && <img src={underline} alt="" />}
        </Link>

        <Link to="/project" className="w-28 ">
          Project
          {path === "project" && <img src={underline} alt="" />}
        </Link>

        <Link to="/contact" className="w-28 ">
          Contact
          {path === "contact" && <img src={underline} alt="" />}
        </Link>
      </div>
    </div>
  );
};

export default Header;
