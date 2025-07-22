import type { LucideIcon } from "lucide-react";

export interface Rule {
  id: string;
  text: string;
  description?: string;
}

export interface RuleCategory {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  rules: Rule[];
  iconColor?: string;
}

export interface RulesData {
  hero: {
    title: string;
    description: string;
  };
  categories: RuleCategory[];
  consequences: {
    title: string;
    icon: LucideIcon;
    steps: string[];
    appealInfo: string;
  };
}
