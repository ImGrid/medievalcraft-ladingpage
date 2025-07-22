import React from "react";
import { Gamepad2 } from "lucide-react";
import { gameModes } from "../../data";
import Card from "../ui/Card";

const GameModesSection: React.FC = () => {
  return (
    <section className="section-padding bg-primary-500 bg-opacity-5">
      <div className="container-custom">
        <div className="flex items-center justify-center mb-8">
          <Gamepad2 className="w-8 h-8 mr-3 text-accent-500" />
          <h2 className="section-title">Modos de Juego</h2>
        </div>
        <p className="section-subtitle">
          Desde roleplay inmersivo hasta batallas épicas, encuentra tu estilo de
          juego perfecto.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {gameModes.map((mode) => (
            <Card
              key={mode.id}
              variant="gameMode"
              icon={mode.icon}
              title={mode.title}
              description={mode.description}
              iconColor={mode.iconColor}
              className={mode.hoverEffect}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameModesSection;
