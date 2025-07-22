import type { LucideIcon } from "lucide-react";

export interface Product {
  id: string;
  name: string;
  price: string;
  icon: LucideIcon;
  features: string[];
  isPopular?: boolean;
  isExclusive?: boolean;
  category: "rank" | "kit" | "cosmetic";
  realm?: string;
  description?: string;
}

export interface ProductSection {
  id: string;
  title: string;
  description: string;
  backgroundClass: string;
  products: Product[];
  icon: LucideIcon;
}

export interface StoreData {
  hero: {
    title: string;
    description: string;
    totalCustomers: string;
  };
  sections: ProductSection[];
}
