import {
  MessageCircle,
  Mail,
  FileText,
  ExternalLink,
  Scroll,
  Home,
} from "lucide-react";
import type { SupportData } from "../types/support";

export const supportData: SupportData = {
  hero: {
    title: "Centro de Ayuda",
    description:
      "¿Necesitas ayuda con MedievalCraft? Estamos aquí para asistirte. Encuentra respuestas rápidas o contáctanos directamente.",
  },

  contactMethods: [
    {
      id: "discord",
      name: "Discord",
      description:
        "La forma más rápida de obtener ayuda. Únete a nuestra comunidad.",
      icon: MessageCircle,
      available: "24/7",
    },
    {
      id: "email",
      name: "Email",
      description: "Para consultas detalladas o problemas específicos.",
      icon: Mail,
      available: "Respuesta en 24h",
    },
    {
      id: "tickets",
      name: "Sistema de Tickets",
      description: "Crea un ticket para problemas técnicos o reportes.",
      icon: FileText,
      available: "Siempre disponible",
    },
  ],

  faqs: [
    {
      id: "join-server",
      question: "¿Cómo me uno al servidor?",
      answer:
        "Usa la IP: play.medievalcraft.com en Minecraft 1.20.4. Es completamente gratis unirse.",
    },
    {
      id: "choose-realm",
      question: "¿Cómo elijo mi reino?",
      answer:
        "Al entrar por primera vez, podrás elegir entre Reino del Norte (PvP), Reino del Este (Comercio) o Reino del Sur (Construcción).",
    },
    {
      id: "get-vip",
      question: "¿Cómo obtengo rangos VIP?",
      answer:
        "Visita nuestra tienda en el juego o en la web. Los rangos se activan automáticamente tras la compra.",
    },
    {
      id: "report-player",
      question: "¿Cómo reporto a un jugador?",
      answer:
        "Usa el comando /report [jugador] [razón] en el juego, o crea un ticket en Discord con evidencias.",
    },
    {
      id: "appeal-ban",
      question: "¿Cómo apelo un ban?",
      answer:
        "Contacta a los administradores en Discord con tu caso. Necesitarás explicar la situación detalladamente.",
    },
    {
      id: "lag-issues",
      question: "¿Problemas de lag o conexión?",
      answer:
        "Verifica tu conexión a internet. El servidor está en América, óptimo para jugadores latinos.",
    },
  ],

  importantLinks: [
    {
      id: "rules",
      name: "Reglas del Servidor",
      description: "Conoce todas las reglas antes de jugar",
      url: "/rules",
      icon: Scroll,
    },
    {
      id: "store",
      name: "Tienda",
      description: "Rangos VIP, kits y cosméticos",
      url: "/store",
      icon: ExternalLink,
    },
    {
      id: "realms",
      name: "Información de Reinos",
      description: "Descubre los diferentes reinos",
      url: "/realms",
      icon: Home,
    },
  ],
};
