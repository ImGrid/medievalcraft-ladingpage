import React from "react";
import { Map } from "lucide-react";
import { realms } from "../../data";
import Card from "../ui/Card";
import Button from "../ui/Button";

const RealmsSection: React.FC = () => {
  return (
    <section className="section-padding bg-primary-500 bg-opacity-5">
      <div className="container-custom">
        <div className="flex items-center justify-center mb-8">
          <Map className="w-8 h-8 mr-3 text-accent-500" />
          <h2 className="section-title">Explora los Reinos</h2>
        </div>
        <p className="section-subtitle">
          Tres reinos únicos te esperan, cada uno con su propia historia,
          desafíos y recompensas. ¿Cuál será tu hogar?
        </p>

        <div className="grid grid-cols-1 gap-6 mb-12 md:grid-cols-2 lg:grid-cols-3">
          {realms.map((realm) => (
            <Card
              key={realm.id}
              variant="realm"
              icon={realm.icon}
              title={realm.title}
              description={realm.description}
              players={realm.players}
              className={realm.hoverEffect}
            />
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            className="flex items-center mx-auto space-x-2"
          >
            <Map size={20} />
            <span>Ver Todos los Reinos</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RealmsSection;
