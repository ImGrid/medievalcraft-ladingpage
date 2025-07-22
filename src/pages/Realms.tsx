import React from "react";
import { realms } from "../data/realms";
import RealmsIntroSection from "../components/sections/RealmsIntroSection";
import RealmHeroSection from "../components/sections/RealmHeroSection";
import CallToActionSection from "../components/sections/CallToActionSection";

const Realms: React.FC = () => {
  return (
    <div className="min-h-screen">
      <RealmsIntroSection />

      {realms.map((realm) => (
        <RealmHeroSection key={realm.id} realm={realm} />
      ))}

      <CallToActionSection />
    </div>
  );
};

export default Realms;
