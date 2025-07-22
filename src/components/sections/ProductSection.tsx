import React from "react";
import type { ProductSection as ProductSectionType } from "../../types/store";
import Card from "../ui/Card";
import Button from "../ui/Button";

interface ProductSectionProps {
  section: ProductSectionType;
}

const ProductSection: React.FC<ProductSectionProps> = ({ section }) => {
  const IconComponent = section.icon;

  const getButtonText = (category: string, name: string) => {
    switch (category) {
      case "rank":
        return `Comprar ${name}`;
      case "kit":
        return "Comprar Kit";
      case "cosmetic":
        return name.includes("Pack")
          ? "Descargar Pack"
          : name.includes("Dragón")
          ? "Adoptar Dragón"
          : "Activar Efectos";
      default:
        return "Comprar";
    }
  };

  return (
    <section
      className={`relative flex items-center justify-center min-h-screen bg-fixed bg-center bg-cover ${section.backgroundClass}`}
    >
      <div className="relative z-10 py-16 text-center container-custom">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center mb-6">
            <IconComponent className="w-20 h-20 text-accent-500 animate-float" />
          </div>

          <h2 className="mb-6 text-5xl font-black font-display md:text-6xl text-accent-500 text-shadow-lg">
            {section.title}
          </h2>

          <p className="mb-8 text-xl leading-relaxed font-body text-medieval-cream md:text-2xl text-shadow">
            {section.description}
          </p>

          <div className="grid grid-cols-1 gap-8 mb-10 md:grid-cols-3">
            {section.products.map((product) => (
              <Card
                key={product.id}
                variant="store"
                icon={product.icon}
                title={product.name}
                price={product.price}
                features={product.features}
                isPopular={product.isPopular}
                className={`${product.isExclusive ? "relative" : ""}`}
              >
                {product.isExclusive && (
                  <div className="absolute px-4 py-1 text-sm font-bold transform -translate-x-1/2 rounded-full -top-3 left-1/2 bg-primary-500 text-accent-500">
                    EXCLUSIVO
                  </div>
                )}

                {product.description && (
                  <p className="mb-4 text-sm text-medieval-cream opacity-70">
                    {product.description}
                  </p>
                )}

                {product.realm && (
                  <p className="mb-4 text-sm text-medieval-cream opacity-70">
                    {product.realm}
                  </p>
                )}

                <Button
                  variant="custom"
                  className="w-full px-6 py-2 text-sm transition-all duration-300 border-2 rounded-full bg-accent-500 text-medieval-darkest hover:bg-accent-400 border-accent-500 hover:scale-105 font-display"
                >
                  {getButtonText(product.category, product.name)}
                </Button>
              </Card>
            ))}
          </div>

          <div className="p-4 border rounded-lg text-medieval-cream bg-primary-500 bg-opacity-20 backdrop-blur-sm border-accent-500 border-opacity-30">
            <strong className="text-accent-500">
              {section.id === "rangos" && "💎 Beneficio especial:"}
              {section.id === "kits" && "⚔️ Nota:"}
              {section.id === "cosmeticos" && "✨ Garantía:"}
            </strong>{" "}
            {section.id === "rangos" &&
              "Todos los rangos incluyen acceso inmediato y activación automática"}
            {section.id === "kits" &&
              "Los kits se adaptan automáticamente a tu reino actual"}
            {section.id === "cosmeticos" &&
              "Todos los cosméticos se activan inmediatamente y son permanentes"}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
