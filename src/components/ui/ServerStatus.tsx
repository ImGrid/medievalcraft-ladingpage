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
    <div className="max-w-md p-8 mx-auto mt-12 transition-all duration-300 border-2 border-opacity-50 bg-primary-500 bg-opacity-10 border-accent-500 rounded-2xl hover-glow-gold hover:border-opacity-80 hover:bg-opacity-15">
      <p className="flex items-center justify-center mb-4 space-x-2 text-sm text-medieval-cream opacity-70 font-heading">
        <Wifi size={16} />
        <span>Únete al servidor:</span>
      </p>
      <button
        onClick={handleCopyIP}
        className="flex items-center justify-center block w-full px-6 py-3 space-x-2 font-mono text-2xl font-bold transition-colors duration-300 border-2 rounded-lg cursor-pointer text-accent-500 bg-medieval-darkest border-primary-500 hover:border-accent-500 group"
      >
        <span>{SERVER_CONFIG.IP}</span>
        {copySuccess ? (
          <CheckCircle size={20} className="text-status-online" />
        ) : (
          <Copy
            size={20}
            className="transition-transform duration-200 group-hover:scale-110"
          />
        )}
      </button>
      <div className="flex items-center justify-center mt-4 space-x-4 text-xs leading-relaxed text-medieval-cream opacity-70 font-body">
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
