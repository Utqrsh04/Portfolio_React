import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Project from "../components/Project";
import Explore from "../pages/Explore";

const LandingPage = () => {
  return (
    <div className="bg-primaryBlue min-h-screen primaryfont px-3 ">
      <Header />
      <HeroSection />
      {/* <div className="h-0.5 bg-primaryGray"></div> */}
      <Explore />
      <Project />
      {/* <Contact /> */}
    </div>
  );
};

export default LandingPage;
