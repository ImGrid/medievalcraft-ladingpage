import React from "react";
import type { Realm } from "../../types/realm";
import Card from "../ui/Card";
import Button from "../ui/Button";

interface RealmHeroSectionProps {
  realm: Realm;
}

const RealmHeroSection: React.FC<RealmHeroSectionProps> = ({ realm }) => {
  const IconComponent = realm.icon;

  return (
    <section
      className={`min-h-screen flex items-center justify-center relative bg-cover bg-center bg-fixed realm-section-${realm.id}`}
      style={{
        backgroundImage: `${realm.gradient}, url('${realm.backgroundImage}')`,
      }}
    >
      <div className="relative z-10 text-center container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <IconComponent className="w-20 h-20 text-accent-500 animate-float" />
          </div>

          <h2 className="mb-6 text-5xl font-black font-display md:text-6xl text-accent-500 text-shadow-lg">
            {realm.title}
          </h2>

          <p className="mb-8 text-xl leading-relaxed font-body text-medieval-cream md:text-2xl text-shadow">
            {realm.description}
          </p>

          <div className="flex flex-wrap justify-center gap-8 mb-10">
            {realm.stats.map((stat, index) => (
              <Card
                key={index}
                variant="stat"
                icon={stat.icon}
                number={stat.value}
                label={stat.label}
                iconColor="text-status-online"
                className="bg-primary-500 bg-opacity-30 backdrop-blur-sm border-2 border-accent-500 border-opacity-50 rounded-2xl p-6 min-w-[180px] hover:border-opacity-80 hover:bg-opacity-40"
              />
            ))}
          </div>

          <div className="space-y-4">
            <div className="p-4 border rounded-lg text-medieval-cream bg-primary-500 bg-opacity-20 backdrop-blur-sm border-accent-500 border-opacity-30">
              <strong className="text-accent-500">Especialidad:</strong>{" "}
              {realm.speciality}
            </div>

            <Button
              variant="custom"
              className="flex items-center px-10 py-4 mx-auto space-x-2 text-xl font-bold transition-all duration-300 border-2 rounded-full bg-accent-500 text-medieval-darkest hover:bg-accent-400 border-accent-500 hover:scale-105 font-display hover-glow-gold"
            >
              <IconComponent className="w-6 h-6" />
              <span>{realm.buttonText}</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealmHeroSection;
