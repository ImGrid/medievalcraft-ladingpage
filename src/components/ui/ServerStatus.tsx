import React, { useState } from "react";
import { Copy, CheckCircle, Wifi, Globe, TrendingUp } from "lucide-react";
import { SERVER_CONFIG } from "../../utils/constants";

const ServerStatus: React.FC = () => {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopyIP = async () => {
    try {
      await navigator.clipboard.writeText(SERVER_CONFIG.IP);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="mt-12 p-8 bg-primary-500 bg-opacity-10 border-2 border-accent-500 border-opacity-50 rounded-2xl max-w-md mx-auto hover-glow-gold transition-all duration-300 hover:border-opacity-80 hover:bg-opacity-15">
      <p className="text-medieval-cream opacity-70 mb-4 text-sm font-heading flex items-center justify-center space-x-2">
        <Wifi size={16} />
        <span>Únete al servidor:</span>
      </p>
      <button
        onClick={handleCopyIP}
        className="text-accent-500 font-mono text-2xl font-bold bg-medieval-darkest px-6 py-3 rounded-lg border-2 border-primary-500 block hover:border-accent-500 transition-colors duration-300 cursor-pointer w-full flex items-center justify-center space-x-2 group"
      >
        <span>{SERVER_CONFIG.IP}</span>
        {copySuccess ? (
          <CheckCircle size={20} className="text-status-online" />
        ) : (
          <Copy
            size={20}
            className="group-hover:scale-110 transition-transform duration-200"
          />
        )}
      </button>
      <div className="text-medieval-cream opacity-70 text-xs mt-4 font-body leading-relaxed flex items-center justify-center space-x-4">
        <div className="flex items-center space-x-1">
          {copySuccess ? (
            <CheckCircle size={12} className="text-status-online" />
          ) : (
            <Copy size={12} />
          )}
          <span>Click para copiar</span>
        </div>
        <div className="flex items-center space-x-1">
          <TrendingUp size={12} />
          <span>Versión {SERVER_CONFIG.VERSION}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Globe size={12} />
          <span>24/7 Online</span>
        </div>
      </div>
    </div>
  );
};

export default ServerStatus;
