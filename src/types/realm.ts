import type { LucideIcon } from "lucide-react";

export interface RealmStat {
  icon: LucideIcon;
  value: string;
  label: string;
}

export interface Realm {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  players: string;
  hoverEffect: string;
  backgroundImage: string;
  gradient: string;
  speciality: string;
  buttonText: string;
  stats: RealmStat[];
}
