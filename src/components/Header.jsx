import React from "react";
import { useHistory } from "react-router-dom";
import "./header.css";

const Header = () => {
  const history = useHistory();

  const path = history.location.pathname.split("/")[1];

  console.log(path);

  return (
    <>
      <div className="h-20 pt-5 flex justify-between items-center text-white bg-primaryBlue w-full ">
        <div className="text-4xl font-semibold text-white logo ">Logo</div>

        <div>
          <ul className="flex justify-evenly tracking-wider space-x-10">
            <li className="px-3">
              <a
                className="link w-28 hover:text-primaryRed text-primaryGray"
                href=" "
              >
                Home
              </a>
            </li>
            <li className="px-3">
              <a
                className="link w-28 hover:text-primaryRed text-primaryGray"
                href=" "
              >
                Work
              </a>
            </li>
            <li className="px-3">
              <a
                className="link w-28 hover:text-primaryRed text-primaryGray"
                href=" "
              >
                Projects
              </a>
            </li>
            <li className="px-3">
              <a
                className="link w-28 hover:text-primaryRed text-primaryGray"
                href=" "
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-4 line w-full bg-slate-600"></div>
    </>
  );
};

export default Header;
