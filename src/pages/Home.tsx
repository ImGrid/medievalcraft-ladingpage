import React from "react";
import HeroSection from "../components/sections/HeroSection";
import RealmsSection from "../components/sections/RealmsSection";
import GameModesSection from "../components/sections/GameModesSection";
import CallToActionSection from "../components/sections/CallToActionSection";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <RealmsSection />
      <GameModesSection />
      <CallToActionSection />
    </div>
  );
};

export default Home;
