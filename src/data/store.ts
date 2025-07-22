import {
  Crown,
  Star,
  Sparkles,
  Shield,
  Coins,
  Building,
  Zap,
} from "lucide-react";
import type { StoreData } from "../types/store";

export const storeData: StoreData = {
  hero: {
    title: "Tienda MedievalCraft",
    description:
      "Mejora tu experiencia medieval con rangos exclusivos, kits poderosos y cosméticos únicos. Cada compra te acerca más a convertirte en una leyenda del reino.",
    totalCustomers: "Más de 15,000",
  },
  sections: [
    {
      id: "rangos",
      title: "Rangos VIP",
      description:
        "Eleva tu estatus en MedievalCraft. Los rangos VIP te otorgan privilegios únicos, acceso a zonas exclusivas y beneficios que harán tu aventura medieval inolvidable.",
      backgroundClass: "bg-store-ranks",
      icon: Crown,
      products: [
        {
          id: "vip",
          name: "VIP",
          price: "$9.99",
          icon: Crown,
          category: "rank",
          features: [
            "Chat con colores",
            "Kit VIP semanal",
            "5 homes adicionales",
            "Acceso zonas VIP",
          ],
        },
        {
          id: "vip-plus",
          name: "VIP+",
          price: "$14.99",
          icon: Star,
          category: "rank",
          isPopular: true,
          features: [
            "Todo lo anterior",
            "Pet personalizado",
            "Partículas exclusivas",
            "Kit VIP+ semanal",
          ],
        },
        {
          id: "premium",
          name: "PREMIUM",
          price: "$19.99",
          icon: Sparkles,
          category: "rank",
          features: [
            "Acceso de por vida",
            "Todos los kits",
            "Comandos admin básicos",
            "Soporte prioritario",
          ],
        },
      ],
    },
    {
      id: "kits",
      title: "Kits por Reino",
      description:
        "Cada reino tiene sus propias especialidades. Obtén ventajas únicas según tu estilo de juego y el reino que hayas elegido como hogar.",
      backgroundClass: "bg-store-kits",
      icon: Shield,
      products: [
        {
          id: "kit-guerrero",
          name: "Kit Guerrero",
          price: "$4.99",
          icon: Shield,
          category: "kit",
          realm: "Reino del Norte",
          features: [
            "Armadura de Diamante",
            "Espada Encantada",
            "Arco con flechas",
            "Pociones de batalla",
          ],
        },
        {
          id: "kit-comerciante",
          name: "Kit Comerciante",
          price: "$3.99",
          icon: Coins,
          category: "kit",
          realm: "Reino del Este",
          features: [
            "1000 Monedas iniciales",
            "Herramientas de comercio",
            "Acceso mercados VIP",
            "Carrito de comerciante",
          ],
        },
        {
          id: "kit-constructor",
          name: "Kit Constructor",
          price: "$3.99",
          icon: Building,
          category: "kit",
          realm: "Reino del Sur",
          features: [
            "Bloques de construcción raros",
            "Herramientas encantadas",
            "WorldEdit básico",
            "Plots adicionales",
          ],
        },
      ],
    },
    {
      id: "cosmeticos",
      title: "Cosméticos & Extras",
      description:
        "Personaliza tu experiencia con texture packs medievales, pets únicos, y efectos visuales que te harán destacar entre los demás jugadores.",
      backgroundClass: "bg-store-cosmetics",
      icon: Sparkles,
      products: [
        {
          id: "pack-medieval-hd",
          name: "Pack Medieval HD",
          price: "$2.99",
          icon: Sparkles,
          category: "cosmetic",
          description: "Texture Pack",
          features: [
            "Texturas medievales HD",
            "Iconos de rangos",
            "UI personalizada",
            "Compatible con shaders",
          ],
        },
        {
          id: "pet-dragon",
          name: "Pet Dragón",
          price: "$7.99",
          icon: Zap,
          category: "cosmetic",
          description: "Mascota Legendaria",
          isExclusive: true,
          features: [
            "Dragón personalizado",
            "Efectos de fuego",
            "Habilidades especiales",
            "Customizable",
          ],
        },
        {
          id: "particulas-reales",
          name: "Partículas Reales",
          price: "$1.99",
          icon: Crown,
          category: "cosmetic",
          description: "Efectos Visuales",
          features: [
            "Corona dorada",
            "Rastro de partículas",
            "Efectos únicos",
            "Activación automática",
          ],
        },
      ],
    },
  ],
};
