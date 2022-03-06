import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";

const LandingPage = () => {
  return (
    <div className="bg-primaryBlue primaryfont space-y-1 h-screen px-60">
      <Header />
      <HeroSection />
    </div>
  );
};

export default LandingPage;
