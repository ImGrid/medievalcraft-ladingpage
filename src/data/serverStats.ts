import { Users, Crown, Map, Target } from "lucide-react";
import type { ServerStat } from "../types";

export const serverStats: ServerStat[] = [
  {
    number: "287",
    label: "Jugadores Online",
    icon: Users,
    color: "status-online",
  },
  {
    number: "12,847",
    label: "Caballeros Registrados",
    icon: Crown,
    color: "text-accent-500",
  },
  {
    number: "3",
    label: "Reinos Activos",
    icon: Map,
    color: "text-accent-500",
  },
  {
    number: "156",
    label: "Quests Disponibles",
    icon: Target,
    color: "text-accent-500",
  },
];
