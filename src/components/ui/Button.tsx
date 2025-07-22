import React from "react";

interface ButtonProps {
  variant: "primary" | "outline" | "custom";
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant,
  children,
  onClick,
  className = "",
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return "btn-primary hover-glow-red";
      case "outline":
        return "btn-outline hover-glow-gold";
      case "custom":
        return className;
      default:
        return "btn-primary";
    }
  };

  return (
    <button onClick={onClick} className={`${getVariantStyles()} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
