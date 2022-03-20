import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./header.css";

const Header = () => {
  const history = useHistory();

  const [showLoader, setshowLoader] = useState(false);
  const [isOpen, setisOpen] = useState(false);

  const path = history.location.pathname.split("/")[1];

  console.log(path);

  useEffect(() => {
    setTimeout(() => {
      setshowLoader(false);
    }, 3000);
  }, []);

  console.log("Loader ", showLoader);
  return (
    <>
      {showLoader && (
        <div id="preloader">
          <div className="loader_line"></div>
        </div>
      )}

      <div className="bg-primaryBlue fixed w-full z-50 opacity-100">
        {/* <div className="h-20 pt-5 flex justify-between items-center text-white bg-primaryBlue w-full ">
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
        </div> */}

        <nav className=" mx-auto px-6 py-3">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <a
                  className="text-primaryGray font-bold text-4xl hover:text-white"
                  href=" "
                >
                  Brand
                </a>
              </div>

              {/* <!-- Mobile menu button --> */}
              <div className="flex md:hidden">
                <button
                  onClick={() => setisOpen(!isOpen)}
                  type="button"
                  className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                  aria-label="toggle menu"
                >
                  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                    <path
                      fill-rule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>

            {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
            <div
              className={`md:flex items-center ${
                isOpen ? " block " : "hidden"
              }`}
            >
              <div className="flex flex-col space-y-5 md:space-y-0 mt-2 md:flex-row md:mt-0 md:mx-1">
                <a
                  className="my-1 w-fit md:w-full link text-primaryGray leading-5 hover:text-primaryRed  md:mx-4 md:my-0"
                  href="/"
                >
                  Home
                </a>
                <a
                  className="my-1 w-fit md:w-full link text-primaryGray leading-5 hover:text-primaryRed  md:mx-4 md:my-0"
                  href="/explore"
                >
                  Explore
                </a>
                <a
                  className="my-1 w-fit md:w-full link text-primaryGray leading-5 hover:text-primaryRed  md:mx-4 md:my-0"
                  href="/projects"
                >
                  Projects
                </a>
                <a
                  className="my-1 w-fit md:w-full link text-primaryGray leading-5 hover:text-primaryRed  md:mx-4 md:my-0"
                  href="/contact"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </nav>

        <div className=" line w-full bg-slate-600"></div>
      </div>
    </>
  );
};

export default Header;
