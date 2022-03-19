import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";

const LandingPage = () => {
  return (
    <div className="bg-primaryBlue primaryfont space-y-1  px-3 sm:px-20 md:px-40 lg:px-60">
      <Header />
      <HeroSection />

      <div className="h-screen bg-primaryBlue"></div>
    </div>
  );
};

export default LandingPage;
