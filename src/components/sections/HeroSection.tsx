import React from "react";
import { Swords, BookOpen } from "lucide-react";
import { serverStats } from "../../data";
import Card from "../ui/Card";
import Button from "../ui/Button";
import ServerStatus from "../ui/ServerStatus";

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative overflow-hidden section-padding"
      style={{
        backgroundImage: `
          linear-gradient(rgba(15, 23, 42, 0.75), rgba(26, 22, 18, 0.65)),
          url('/images/fondo_hero.webp')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
      }}
    >
      <div className="relative z-10 text-center container-custom">
        <div className="mb-8">
          <img
            src="/images/medievalcraft.webp"
            alt="MedievalCraft - Forja tu Destino"
            width={400}
            height={96}
            loading="eager"
            fetchPriority="high"
            className="object-contain w-auto h-16 mx-auto md:h-20 lg:h-24 drop-shadow-2xl"
          />
        </div>

        <p className="hero-subtitle">
          Forja tu destino en el reino más épico de Minecraft. Explora reinos
          místicos, participa en batallas legendarias y construye tu propio
          legado.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-12 md:gap-12">
          {serverStats.map((stat, index) => (
            <Card
              key={index}
              variant="stat"
              icon={stat.icon}
              number={stat.number}
              label={stat.label}
              iconColor={stat.color}
            />
          ))}
        </div>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            variant="outline"
            className="flex items-center px-8 py-4 space-x-2 text-lg"
          >
            <Swords size={20} />
            <span>Comenzar Aventura</span>
          </Button>
          <Button
            variant="outline"
            className="flex items-center px-8 py-4 space-x-2 text-lg"
          >
            <BookOpen size={20} />
            <span>Explorar Reinos</span>
          </Button>
        </div>

        <ServerStatus />
      </div>
    </section>
  );
};

export default HeroSection;
