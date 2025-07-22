import { Drama, Swords, Castle } from "lucide-react";
import type { GameMode } from "../types";

export const gameModes: GameMode[] = [
  {
    id: "roleplay",
    title: "Roleplay Medieval",
    description:
      "Vive como un verdadero habitante del reino. Elige tu profesión y forja tu historia.",
    icon: Drama,
    cardType: "card-secondary",
    hoverEffect: "hover-glow-gold",
    iconColor: "text-accent-500",
  },
  {
    id: "wars",
    title: "Guerras de Reinos",
    description:
      "Participa en batallas épicas. Defiende tu territorio o conquista nuevas tierras.",
    icon: Swords,
    cardType: "card-primary",
    hoverEffect: "hover-glow-gold",
    iconColor: "text-accent-500",
  },
  {
    id: "dungeons",
    title: "Dungeons Medievales",
    description:
      "Explora mazmorras llenas de tesoros. Requiere trabajo en equipo para sobrevivir.",
    icon: Castle,
    cardType: "card-secondary",
    hoverEffect: "hover-glow-gold",
    iconColor: "text-accent-500",
  },
];
