import React from "react";
import { Crown } from "lucide-react";

const CallToActionSection: React.FC = () => {
  return (
    <section className="section-padding bg-gold-gradient">
      <div className="text-center container-custom">
        <h2 className="mb-6 text-4xl font-black md:text-5xl lg:text-6xl font-display text-medieval-darkest">
          ¡Tu Aventura Comienza Ahora!
        </h2>
        <p className="max-w-xl px-4 mx-auto mb-8 text-lg leading-relaxed md:max-w-2xl md:text-xl text-medieval-darkest font-body">
          Únete a miles de jugadores que ya están forjando sus leyendas. El
          reino te espera, ¿estás listo para el desafío?
        </p>

        <button className="inline-flex items-center px-10 py-4 space-x-3 text-lg font-bold transition-all duration-300 border-2 rounded-full shadow-lg group bg-medieval-darkest text-accent-500 hover:scale-105 font-display hover:shadow-xl border-primary-500 hover:border-accent-500">
          <Crown
            size={24}
            className="transition-transform duration-300 group-hover:rotate-12"
          />
          <span>Unirse al Servidor</span>
        </button>
      </div>
    </section>
  );
};

export default CallToActionSection;
