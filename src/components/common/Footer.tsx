import React, { memo } from "react";
import { ExternalLink } from "lucide-react";
import { FaDiscord, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Inicio", path: "/" },
    { name: "Reinos", path: "/realms" },
    { name: "Tienda", path: "/store" },
    { name: "Reglas", path: "/rules" },
  ];

  const handleDiscordClick = () => {
    console.log("Discord clicked (demo only)");
  };

  const handleWhatsAppClick = () => {
    console.log("WhatsApp clicked (demo only)");
  };

  const handleLinkedInClick = () => {
    window.open(
      "https://www.linkedin.com/in/harold-ponce-234897285/",
      "_blank"
    );
  };

  return (
    <footer className="mt-auto border-t bg-gradient-to-t from-medieval-darkest via-primary-500 to-medieval-darkest border-accent-500 border-opacity-20">
      <div className="container-custom">
        <div className="grid items-start grid-cols-1 gap-8 py-4 md:grid-cols-3">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center mb-4 space-x-3 md:justify-start">
              <div className="flex items-center justify-center w-10 h-10 transition-transform duration-300 rounded-lg bg-gradient-to-br from-accent-400 to-accent-600 hover:scale-110">
                <span className="text-lg font-bold text-medieval-darkest font-display">
                  MC
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold font-display text-accent-500">
                  MedievalCraft
                </h3>
                <p className="text-xs text-medieval-cream opacity-70 font-heading">
                  Forja tu Destino
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-4 md:justify-start">
              <button
                onClick={handleDiscordClick}
                className="p-3 transition-all duration-300 border rounded-full bg-primary-500 bg-opacity-10 border-accent-500 border-opacity-30 hover:bg-opacity-20 hover:border-opacity-60 hover:scale-110 group"
                title="Discord (Demo)"
              >
                <FaDiscord
                  size={20}
                  className="transition-colors duration-300 text-accent-500 group-hover:text-accent-400"
                />
              </button>

              <button
                onClick={handleWhatsAppClick}
                className="p-3 transition-all duration-300 border rounded-full bg-primary-500 bg-opacity-10 border-accent-500 border-opacity-30 hover:bg-opacity-20 hover:border-opacity-60 hover:scale-110 group"
                title="WhatsApp (Demo)"
              >
                <FaWhatsapp
                  size={20}
                  className="transition-colors duration-300 text-accent-500 group-hover:text-accent-400"
                />
              </button>
            </div>
          </div>

          <div className="text-center">
            <h4 className="mb-4 font-semibold text-accent-500 font-heading"></h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm transition-colors duration-300 text-medieval-cream hover:text-accent-500 font-body hover:underline decoration-accent-500 underline-offset-4"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center md:text-right">
            <h4 className="mb-4 font-semibold text-accent-500 font-heading">
              Desarrollador
            </h4>
            <div className="space-y-3">
              <button
                onClick={handleLinkedInClick}
                className="inline-flex items-center space-x-2 font-medium transition-colors duration-300 text-accent-500 hover:text-accent-400 font-heading group"
              >
                <span>Harold Ponce</span>
                <ExternalLink
                  size={14}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-accent-500 border-opacity-20"></div>

        <div className="py-6 text-center">
          <p className="text-sm text-medieval-cream opacity-60 font-body">
            © {currentYear} - Proyecto personal sin fines comerciales
          </p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
