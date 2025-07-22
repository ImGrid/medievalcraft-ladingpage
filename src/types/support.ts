import type { LucideIcon } from "lucide-react";

export interface ContactMethod {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  available: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface ImportantLink {
  id: string;
  name: string;
  description: string;
  url: string;
  icon: LucideIcon;
}

export interface SupportData {
  hero: {
    title: string;
    description: string;
  };
  contactMethods: ContactMethod[];
  faqs: FAQ[];
  importantLinks: ImportantLink[];
}
