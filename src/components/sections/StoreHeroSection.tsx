import React from "react";

interface StoreHeroSectionProps {
  title: string;
  description: string;
}

const StoreHeroSection: React.FC<StoreHeroSectionProps> = ({
  title,
  description,
}) => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-royal-gradient">
      <div className="text-center container-custom">
        <h1 className="mb-8 text-5xl font-black md:text-6xl lg:text-7xl font-display text-accent-500">
          {title}
        </h1>

        <p className="max-w-2xl px-4 mx-auto mb-8 text-lg leading-relaxed text-center md:max-w-4xl md:text-xl lg:text-2xl font-body text-medieval-cream">
          {description}
        </p>
      </div>
    </section>
  );
};

export default StoreHeroSection;
