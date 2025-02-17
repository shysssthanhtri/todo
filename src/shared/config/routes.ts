import { Calendar, ChartArea, Check, LogIn, Settings } from "lucide-react";

export const Routes = {
  authentication: {
    url: "/authentication",
    title: "Authentication",
    icon: LogIn,
  },
  home: {
    url: "/",
    title: "Todo - Today",
    shortTitle: "Today",
    icon: Check,
  },
  planning: {
    url: "/planning",
    title: "Todo - Planning",
    shortTitle: "Planning",
    icon: Calendar,
  },
  analytic: {
    url: "/analytic",
    title: "Todo - Analytic",
    shortTitle: "Analytic",
    icon: ChartArea,
  },
  setting: {
    url: "/setting",
    title: "Todo - Setting",
    shortTitle: "Setting",
    icon: Settings,
  },
} as const;
