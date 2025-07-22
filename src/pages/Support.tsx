import React from "react";
import { ExternalLink } from "lucide-react";
import { supportData } from "../data/support";
import type { ContactMethod, FAQ, ImportantLink } from "../types/support";

const Support: React.FC = () => {
  return (
    <div className="min-h-screen">
      <section className="flex items-center justify-center min-h-screen bg-royal-gradient">
        <div className="text-center container-custom">
          <h1 className="mb-8 text-5xl font-black md:text-6xl lg:text-7xl font-display text-accent-500">
            {supportData.hero.title}
          </h1>

          <p className="max-w-2xl px-4 mx-auto mb-8 text-lg leading-relaxed text-center md:max-w-4xl md:text-xl lg:text-2xl font-body text-medieval-cream">
            {supportData.hero.description}
          </p>
        </div>
      </section>

      <section className="section-padding bg-primary-500 bg-opacity-5">
        <div className="container-custom">
          <div className="mb-16">
            <h2 className="mb-8 text-2xl font-bold text-center md:text-3xl lg:text-4xl text-accent-500 font-display">
              Métodos de Contacto
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {supportData.contactMethods.map((method) => (
                <ContactMethodCard key={method.id} method={method} />
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="mb-8 text-2xl font-bold text-center md:text-3xl lg:text-4xl text-accent-500 font-display">
              Preguntas Frecuentes
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {supportData.faqs.map((faq) => (
                <FAQItem key={faq.id} faq={faq} />
              ))}
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <h2 className="mb-8 text-2xl font-bold text-center md:text-3xl lg:text-4xl text-accent-500 font-display">
              Enlaces Importantes
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {supportData.importantLinks.map((link) => (
                <ImportantLinkCard key={link.id} link={link} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ContactMethodCard: React.FC<{ method: ContactMethod }> = ({ method }) => {
  const IconComponent = method.icon;

  return (
    <div className="p-6 text-center transition-all duration-300 border-2 cursor-pointer bg-primary-500 bg-opacity-10 border-accent-500 border-opacity-30 hover:border-opacity-60 hover:bg-opacity-20 hover:shadow-lg group hover:-translate-y-1 rounded-xl">
      <div className="flex justify-center mb-4">
        <IconComponent
          size={48}
          className="transition-transform duration-300 text-accent-500 group-hover:scale-110"
        />
      </div>

      <h3 className="mb-2 text-lg font-bold md:text-xl text-accent-500 font-display">
        {method.name}
      </h3>

      <p className="mb-3 text-sm leading-relaxed text-medieval-cream opacity-90 font-body">
        {method.description}
      </p>

      <div className="px-3 py-1 text-xs font-semibold rounded-full text-accent-500 bg-accent-500 bg-opacity-10">
        {method.available}
      </div>
    </div>
  );
};

const FAQItem: React.FC<{ faq: FAQ }> = ({ faq }) => {
  return (
    <div className="p-6 transition-colors duration-300 border rounded-lg bg-primary-500 bg-opacity-10 border-accent-500 border-opacity-30 hover:border-opacity-50">
      <h3 className="mb-3 text-base md:text-lg text-accent-500 font-display">
        {faq.question}
      </h3>
      <p className="leading-relaxed text-medieval-cream opacity-90 font-body">
        {faq.answer}
      </p>
    </div>
  );
};

const ImportantLinkCard: React.FC<{ link: ImportantLink }> = ({ link }) => {
  const IconComponent = link.icon;

  const handleClick = () => {
    if (link.url.startsWith("/")) {
      window.location.href = link.url;
    } else {
      window.open(link.url, "_blank");
    }
  };

  return (
    <div
      className="p-4 transition-all duration-300 border rounded-lg cursor-pointer bg-accent-500 bg-opacity-10 border-accent-500 border-opacity-40 hover:border-opacity-60 hover:bg-opacity-15 group"
      onClick={handleClick}
    >
      <div className="flex items-center mb-2 space-x-3">
        <IconComponent size={20} className="text-accent-500" />
        <h4 className="text-sm md:text-base text-accent-500 font-display">
          {link.name}
        </h4>
        <ExternalLink
          size={14}
          className="transition-opacity duration-300 opacity-50 text-accent-500 group-hover:opacity-100"
        />
      </div>
      <p className="text-sm text-medieval-cream opacity-80 font-body">
        {link.description}
      </p>
    </div>
  );
};

export default Support;
