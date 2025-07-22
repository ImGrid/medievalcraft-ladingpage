import React, { memo } from "react";
import { Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";

// Base props que todos los cards comparten
interface BaseCardProps {
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

export interface GameModeCardProps extends BaseCardProps {
  variant: "gameMode";
  icon: LucideIcon;
  title: string;
  description: string;
  iconColor?: string;
}

export interface RealmCardProps extends BaseCardProps {
  variant: "realm";
  icon: LucideIcon;
  title: string;
  description: string;
  players: string;
}

export interface StatCardProps extends BaseCardProps {
  variant: "stat";
  icon: LucideIcon;
  number: string;
  label: string;
  iconColor?: string;
}

export interface StoreCardProps extends BaseCardProps {
  variant: "store";
  icon: LucideIcon;
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

export type CardProps =
  | GameModeCardProps
  | RealmCardProps
  | StatCardProps
  | StoreCardProps;

const getCardStyles = (variant: CardProps["variant"]): string => {
  const baseStyles = "rounded-xl transition-all duration-300 cursor-pointer";

  switch (variant) {
    case "gameMode":
      return `${baseStyles} bg-primary-500 bg-opacity-10 border-2 border-accent-500 border-opacity-30 hover:border-opacity-60 hover:bg-opacity-20 hover:shadow-lg p-6 text-center group hover:-translate-y-1`;

    case "realm":
      return `${baseStyles} bg-primary-500 bg-opacity-10 border-2 border-accent-500 border-opacity-30 hover:border-opacity-60 hover:bg-opacity-20 hover:shadow-xl p-6 text-center group backdrop-blur-sm hover:-translate-y-1`;

    case "stat":
      return `${baseStyles} bg-primary-500 bg-opacity-10 border-2 border-accent-500 border-opacity-30 hover:border-opacity-60 hover:bg-opacity-20 p-4 text-center min-w-[120px] hover:scale-105`;

    case "store":
      return `${baseStyles} bg-primary-500 bg-opacity-30 backdrop-blur-sm border-2 border-accent-500 border-opacity-50 hover:border-opacity-80 hover:bg-opacity-40 p-8 text-center hover:scale-105`;

    default:
      return baseStyles;
  }
};

const Card: React.FC<CardProps> = memo((props) => {
  const { variant, className = "", onClick, children } = props;

  const cardStyles = `${getCardStyles(variant)} ${className}`;

  if (variant === "gameMode") {
    const {
      icon: Icon,
      title,
      description,
      iconColor = "text-accent-500",
    } = props;

    return (
      <div className={cardStyles} onClick={onClick}>
        <div className="flex justify-center mb-4">
          <Icon
            size={48}
            className={`${iconColor} group-hover:scale-110 transition-transform duration-300`}
          />
        </div>
        <h4
          className={`${iconColor} font-semibold mb-2 font-heading text-lg text-center`}
        >
          {title}
        </h4>
        <p className="text-sm leading-relaxed text-center text-medieval-cream opacity-90 font-body">
          {description}
        </p>
        {children}
      </div>
    );
  }

  if (variant === "realm") {
    const { icon: Icon, title, description, players } = props;

    return (
      <div className={cardStyles} onClick={onClick}>
        <div className="flex justify-center mb-4">
          <Icon
            size={48}
            className="transition-transform duration-300 text-accent-500 group-hover:scale-110"
          />
        </div>
        <h3 className="mb-3 text-xl text-accent-500 font-display">{title}</h3>
        <p className="mb-4 text-sm leading-relaxed text-medieval-cream opacity-90 font-body">
          {description}
        </p>
        <div className="flex items-center justify-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-status-online animate-pulse"></div>
          <span className="text-sm text-status-online font-heading">
            {players}
          </span>
        </div>
        {children}
      </div>
    );
  }

  if (variant === "stat") {
    const { icon: Icon, number, label, iconColor = "text-accent-500" } = props;

    return (
      <div className={cardStyles} onClick={onClick}>
        <div className="flex items-center justify-center mb-2">
          <Icon size={24} className={iconColor} />
        </div>
        <div className={`text-3xl font-bold ${iconColor} font-display mb-1`}>
          {number}
        </div>
        <div className="text-sm text-medieval-cream opacity-80 font-heading">
          {label}
        </div>
        {children}
      </div>
    );
  }

  if (variant === "store") {
    const { icon: Icon, title, price, features, isPopular = false } = props;

    return (
      <div
        className={`${cardStyles} ${
          isPopular ? "relative border-accent-500 border-opacity-70" : ""
        }`}
        onClick={onClick}
      >
        {isPopular && (
          <div className="absolute px-4 py-1 text-sm font-bold transform -translate-x-1/2 rounded-full -top-3 left-1/2 bg-accent-500 text-medieval-darkest">
            MÁS POPULAR
          </div>
        )}
        <div className="flex justify-center mb-4">
          <Icon size={48} className="text-accent-500" />
        </div>
        <h3 className="mb-4 text-2xl font-bold text-accent-500 font-display">
          {title}
        </h3>
        <div className="mb-6 text-4xl font-bold text-accent-500 font-display">
          {price}
        </div>
        <div className="mb-6 space-y-3 text-left">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-status-online" />
              <span className="text-sm text-medieval-cream">{feature}</span>
            </div>
          ))}
        </div>
        {children}
      </div>
    );
  }

  return (
    <div className={cardStyles} onClick={onClick}>
      {children}
    </div>
  );
});

Card.displayName = "Card";

export default Card;
