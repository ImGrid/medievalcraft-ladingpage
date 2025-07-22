import { Shield, Coins, Building, Swords, Users, Hammer } from "lucide-react";
import type { Realm } from "../types/realm";

export const realms: Realm[] = [
  {
    id: "norte",
    title: "Reino del Norte",
    description:
      "Tierra de guerreros valientes y batallas épicas. En las montañas heladas del norte, solo los más fuertes sobreviven.",
    icon: Shield,
    players: "72 Guerreros Online",
    hoverEffect: "hover-glow-red",
    backgroundImage: "/images/reino_norte.webp",
    gradient: "linear-gradient(rgba(139, 0, 0, 0.4), rgba(26, 22, 18, 0.8))",
    speciality: "PvP • Combate • Estrategia Militar",
    buttonText: "Unirse al Reino del Norte",
    stats: [
      { icon: Users, value: "72", label: "Guerreros Online" },
      { icon: Swords, value: "156", label: "Batallas Semanales" },
      { icon: Shield, value: "28", label: "Fortalezas" },
    ],
  },
  {
    id: "este",
    title: "Reino del Este",
    description:
      "Centro de comercio y prosperidad. En las fértiles llanuras del este, el oro fluye como ríos y los mercaderes más astutos construyen imperios.",
    icon: Coins,
    players: "95 Comerciantes Online",
    hoverEffect: "hover-glow-gold",
    backgroundImage: "/images/reino_este.webp",
    gradient: "linear-gradient(rgba(212, 175, 55, 0.3), rgba(26, 22, 18, 0.8))",
    speciality: "Economía • Comercio • Construcción de Imperios",
    buttonText: "Unirse al Reino del Este",
    stats: [
      { icon: Users, value: "95", label: "Comerciantes Online" },
      { icon: Building, value: "342", label: "Shops Activos" },
      { icon: Coins, value: "89k", label: "Monedas Diarias" },
    ],
  },
  {
    id: "sur",
    title: "Reino del Sur",
    description:
      "Tierra de constructores y arquitectos visionarios. En los valles templados del sur, se alzan las estructuras más impresionantes del mundo conocido.",
    icon: Building,
    players: "54 Constructores Online",
    hoverEffect: "hover-glow-gold",
    backgroundImage: "/images/reino_sur.webp",
    gradient: "linear-gradient(rgba(139, 69, 19, 0.3), rgba(26, 22, 18, 0.8))",
    speciality: "Building • Roleplay • Arquitectura Avanzada",
    buttonText: "Unirse al Reino del Sur",
    stats: [
      { icon: Users, value: "54", label: "Constructores Online" },
      { icon: Building, value: "127", label: "Construcciones" },
      { icon: Hammer, value: "15", label: "Proyectos Épicos" },
    ],
  },
];
