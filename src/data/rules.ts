import {
  Shield,
  Swords,
  Building,
  MessageCircle,
  Coins,
  Scale,
} from "lucide-react";
import type { RulesData } from "../types/rules";

export const rulesData: RulesData = {
  hero: {
    title: "Reglas del Servidor",
    description:
      "Estas reglas aseguran una experiencia justa y divertida para todos los jugadores de MedievalCraft. El incumplimiento puede resultar en advertencias, kicks, bans temporales o permanentes.",
  },

  categories: [
    {
      id: "generales",
      title: "Reglas Generales",
      icon: Shield,
      description: "Normas fundamentales que todos los jugadores deben seguir",
      iconColor: "text-accent-500",
      rules: [
        {
          id: "respeto",
          text: "Respeta a todos los jugadores y staff",
          description: "Trata a otros como te gustaría ser tratado",
        },
        {
          id: "lenguaje",
          text: "No uses lenguaje ofensivo o discriminatorio",
          description: "Mantén un ambiente amigable para todos",
        },
        {
          id: "spam",
          text: "Prohibido hacer spam en el chat",
          description: "Evita repetir mensajes innecesariamente",
        },
        {
          id: "hacks",
          text: "No uses hacks, cheats o mods ilegales",
          description: "El juego limpio es fundamental",
        },
        {
          id: "multicuenta",
          text: "Una cuenta por jugador",
          description: "No se permiten cuentas alternativas",
        },
      ],
    },

    {
      id: "pvp",
      title: "Combate PvP",
      icon: Swords,
      description: "Reglas específicas para el combate entre jugadores",
      iconColor: "text-accent-500",
      rules: [
        {
          id: "zonas-pvp",
          text: "PvP solo permitido en zonas designadas",
          description: "Respeta las áreas seguras y spawn",
        },
        {
          id: "camping",
          text: "No camping en spawn o casas",
          description: "Permite que otros jugadores jueguen tranquilos",
        },
        {
          id: "treguas",
          text: "Respeta las treguas acordadas",
          description: "Honor tu palabra en los acuerdos",
        },
        {
          id: "exploits-combate",
          text: "No uses exploits de combate",
          description: "Combate justo para todos",
        },
        {
          id: "auto-click",
          text: "No hagas kill aura o auto-click",
          description: "Habilidad real, no automática",
        },
      ],
    },

    {
      id: "construccion",
      title: "Construcción",
      icon: Building,
      description: "Normas para construir y mantener el estilo del servidor",
      iconColor: "text-accent-500",
      rules: [
        {
          id: "estilo-medieval",
          text: "Mantén el estilo medieval",
          description: "Construcciones apropiadas para la temática",
        },
        {
          id: "permiso-construccion",
          text: "No construyas cerca de otros sin permiso",
          description: "Respeta el espacio personal de otros jugadores",
        },
        {
          id: "griefing",
          text: "Prohibido griefing y robo",
          description: "Respeta las construcciones ajenas",
        },
        {
          id: "lag-machines",
          text: "No hagas lag machines",
          description: "Mantén el servidor funcionando bien para todos",
        },
        {
          id: "construcciones-apropiadas",
          text: "Construcciones apropiadas solamente",
          description: "Contenido apto para toda la familia",
        },
      ],
    },

    {
      id: "chat",
      title: "Chat y Comunicación",
      icon: MessageCircle,
      description: "Reglas para una comunicación efectiva y respetuosa",
      iconColor: "text-blue-400",
      rules: [
        {
          id: "idioma",
          text: "Habla en español en chat público",
          description: "Para que todos puedan entender y participar",
        },
        {
          id: "spam-mensajes",
          text: "No hagas spam de mensajes",
          description: "Evita saturar el chat",
        },
        {
          id: "pedir-rangos",
          text: "No pidas rangos o items a staff",
          description: "Los rangos se obtienen siguiendo las reglas",
        },
        {
          id: "mensajes-privados",
          text: "Usa /msg para conversaciones privadas",
          description: "Mantén el chat público limpio",
        },
        {
          id: "links-externos",
          text: "No publiques links externos",
          description: "Por seguridad de todos los jugadores",
        },
      ],
    },

    {
      id: "comercio",
      title: "Comercio",
      icon: Coins,
      description: "Reglas para transacciones y economía del servidor",
      iconColor: "text-accent-500",
      rules: [
        {
          id: "scam",
          text: "No hagas scam o estafas",
          description: "Comercio honesto y transparente",
        },
        {
          id: "acuerdos",
          text: "Cumple todos los acuerdos comerciales",
          description: "Tu palabra es tu honor",
        },
        {
          id: "tiendas-oficiales",
          text: "Usa las tiendas oficiales cuando sea posible",
          description: "Sistema seguro de comercio",
        },
        {
          id: "duplicar-items",
          text: "No dupliques items",
          description: "Mantén la economía equilibrada",
        },
        {
          id: "bugs-economia",
          text: "Reporta bugs de economía",
          description: "Ayuda a mantener el servidor estable",
        },
      ],
    },
  ],

  consequences: {
    title: "Consecuencias",
    icon: Scale,
    steps: [
      "1ra vez: Advertencia",
      "2da vez: Kick del servidor",
      "3ra vez: Ban temporal (1-7 días)",
      "Casos graves: Ban permanente",
    ],
    appealInfo: "Apelaciones en Discord",
  },
};
