import React from "react";

const RealmsIntroSection: React.FC = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-royal-gradient">
      <div className="text-center container-custom">
        <h1 className="mb-8 text-5xl font-black md:text-6xl lg:text-7xl font-display text-accent-500">
          Los Reinos de MedievalCraft
        </h1>

        <p className="max-w-2xl px-4 mx-auto mb-8 text-lg leading-relaxed text-center md:max-w-4xl md:text-xl lg:text-2xl font-body text-medieval-cream">
          Elige tu destino entre tres reinos únicos. Cada uno ofrece una
          experiencia de juego completamente diferente, con su propia cultura,
          arquitectura y estilo de vida.
        </p>
      </div>
    </section>
  );
};

export default RealmsIntroSection;
