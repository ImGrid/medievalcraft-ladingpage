import React from "react";
import { rulesData } from "../data/rules";
import type { RuleCategory } from "../types/rules";

const Rules: React.FC = () => {
  return (
    <div className="min-h-screen">
      <section className="flex items-center justify-center min-h-screen bg-royal-gradient">
        <div className="text-center container-custom">
          <h1 className="mb-8 text-5xl font-black md:text-6xl lg:text-7xl font-display text-accent-500">
            {rulesData.hero.title}
          </h1>

          <p className="max-w-2xl px-4 mx-auto mb-8 text-lg leading-relaxed text-center md:max-w-4xl md:text-xl lg:text-2xl font-body text-medieval-cream">
            {rulesData.hero.description}
          </p>
        </div>
      </section>

      <section className="section-padding bg-primary-500 bg-opacity-5">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-8 mb-16 md:grid-cols-2 lg:grid-cols-3">
            {rulesData.categories.map((category) => (
              <RuleCategoryCard key={category.id} category={category} />
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <RuleConsequencesCard />
          </div>
        </div>
      </section>
    </div>
  );
};

const RuleCategoryCard: React.FC<{ category: RuleCategory }> = ({
  category,
}) => {
  const IconComponent = category.icon;

  return (
    <div className="p-6 text-center transition-all duration-300 border-2 cursor-pointer bg-primary-500 bg-opacity-10 border-accent-500 border-opacity-30 hover:border-opacity-60 hover:bg-opacity-20 hover:shadow-lg group hover:-translate-y-1 rounded-xl">
      <div className="flex justify-center mb-4">
        <IconComponent
          size={48}
          className={`${
            category.iconColor || "text-accent-500"
          } group-hover:scale-110 transition-transform duration-300`}
        />
      </div>

      <h3 className="mb-3 text-lg md:text-xl text-accent-500 font-display">
        {category.title}
      </h3>

      <p className="mb-4 text-sm leading-relaxed text-medieval-cream opacity-90 font-body">
        {category.description}
      </p>

      <div className="space-y-2 text-left">
        {category.rules.map((rule) => (
          <div key={rule.id} className="flex items-start space-x-2">
            <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-accent-500"></div>
            <div className="flex-1">
              <div className="text-sm font-medium text-medieval-cream">
                {rule.text}
              </div>
              {rule.description && (
                <div className="mt-1 text-xs text-medieval-cream opacity-70">
                  {rule.description}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const RuleConsequencesCard: React.FC = () => {
  const IconComponent = rulesData.consequences.icon;

  return (
    <div className="p-8 text-center transition-all duration-300 border-2 border-opacity-50 bg-primary-500 bg-opacity-20 border-accent-500 hover:border-opacity-80 hover:bg-opacity-30 rounded-xl">
      <div className="flex justify-center mb-6">
        <IconComponent size={56} className="text-accent-500" />
      </div>

      <h3 className="mb-6 text-xl md:text-2xl text-accent-500 font-display">
        {rulesData.consequences.title}
      </h3>

      <div className="grid grid-cols-1 gap-4 mb-6 md:grid-cols-2">
        {rulesData.consequences.steps.map((step, index) => (
          <div
            key={index}
            className="p-4 bg-opacity-50 border rounded-lg bg-medieval-darkest border-primary-500 border-opacity-30"
          >
            <div className="font-medium text-medieval-cream">{step}</div>
          </div>
        ))}
      </div>

      <div className="p-4 border rounded-lg bg-accent-500 bg-opacity-10 border-accent-500 border-opacity-40">
        <div className="font-semibold text-accent-500">
          📞 {rulesData.consequences.appealInfo}
        </div>
        <div className="mt-1 text-sm text-medieval-cream opacity-80">
          Si consideras que tu sanción fue injusta, puedes apelar
        </div>
      </div>
    </div>
  );
};

export default Rules;
