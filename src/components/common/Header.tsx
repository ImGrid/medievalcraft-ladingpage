import React, { useState, memo } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Sword,
  Shield,
  Home,
  Map,
  ShoppingBag,
  ScrollText,
  HelpCircle,
  Wifi,
  Copy,
  CheckCircle,
} from "lucide-react";

const Header: React.FC = memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: "Inicio", path: "/", icon: Home },
    { name: "Reinos", path: "/realms", icon: Map },
    { name: "Tienda", path: "/store", icon: ShoppingBag },
    { name: "Reglas", path: "/rules", icon: ScrollText },
    { name: "Soporte", path: "/support", icon: HelpCircle },
  ];

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCopyIP = async () => {
    try {
      await navigator.clipboard.writeText("play.medievalcraft.com");
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-medieval">
      <div className="container-custom">
        <nav className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Shield className="w-8 h-8 transition-colors duration-300 text-accent-500 group-hover:text-accent-400" />
              <Sword className="absolute w-4 h-4 transform -translate-x-1/2 -translate-y-1/2 text-medieval-cream top-1/2 left-1/2" />
            </div>
            <div className="flex flex-col">
              <img
                src="/images/medievalcraft.webp"
                alt="MedievalCraft"
                width={200}
                height={32}
                loading="eager"
                className="object-contain w-auto h-8 transition-all duration-300 group-hover:scale-105"
                style={{ maxWidth: "200px" }}
              />
            </div>
          </Link>

          <div className="items-center hidden space-x-8 md:flex">
            {navigationItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`nav-link flex items-center space-x-2 ${
                    isActivePath(item.path) ? "active" : ""
                  }`}
                >
                  <IconComponent size={18} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>

          <div className="items-center hidden space-x-4 lg:flex">
            <div className="text-right">
              <button
                className="flex items-center space-x-2 text-sm server-ip group"
                onClick={handleCopyIP}
                title="Click para copiar"
              >
                <span>play.medievalcraft.com</span>
                {copySuccess ? (
                  <CheckCircle size={16} className="text-status-online" />
                ) : (
                  <Copy
                    size={16}
                    className="transition-transform duration-200 group-hover:scale-110"
                  />
                )}
              </button>
            </div>
          </div>

          <button
            onClick={toggleMenu}
            className="p-2 transition-colors duration-300 md:hidden text-medieval-cream hover:text-accent-500"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {isMenuOpen && (
          <div className="absolute left-0 right-0 border-b md:hidden top-full backdrop-medieval border-accent-500 border-opacity-30">
            <div className="py-4 container-custom">
              <div className="flex flex-col space-y-4">
                {navigationItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center space-x-3 p-3 rounded-lg transition-colors duration-300 ${
                        isActivePath(item.path)
                          ? "bg-accent-500 bg-opacity-20 text-accent-500"
                          : "text-medieval-cream hover:bg-primary-500 hover:bg-opacity-10 hover:text-accent-500"
                      }`}
                    >
                      <IconComponent size={20} />
                      <span className="font-medium font-heading">
                        {item.name}
                      </span>
                    </Link>
                  );
                })}

                <div className="pt-4 border-t border-accent-500 border-opacity-30">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2 space-x-2 text-sm text-medieval-cream font-heading">
                      <Wifi size={16} />
                      <span>Servidor</span>
                    </div>
                    <button
                      className="flex items-center mx-auto mb-3 space-x-2 text-sm server-ip"
                      onClick={() => {
                        handleCopyIP();
                        setIsMenuOpen(false);
                      }}
                    >
                      <span>play.medievalcraft.com</span>
                      <Copy size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
});

Header.displayName = "Header";

export default Header;
