import React from "react";
import { storeData } from "../data/store";
import StoreHeroSection from "../components/sections/StoreHeroSection";
import ProductSection from "../components/sections/ProductSection";
import CallToActionSection from "../components/sections/CallToActionSection";

const Store: React.FC = () => {
  return (
    <div className="min-h-screen">
      <StoreHeroSection
        title={storeData.hero.title}
        description={storeData.hero.description}
      />
      {storeData.sections.map((section) => (
        <ProductSection key={section.id} section={section} />
      ))}
      <CallToActionSection />
    </div>
  );
};

export default Store;
