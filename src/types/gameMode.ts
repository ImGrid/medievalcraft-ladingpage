import type { LucideIcon } from "lucide-react";

export interface GameMode {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  cardType: string;
  hoverEffect: string;
  iconColor: string;
}
