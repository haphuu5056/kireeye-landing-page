import {
  Hotel,
  Warehouse,
  Building2,
  Ticket,
  MousePointer2,
  CalendarDays,
  ShieldCheck,
  Layers3,
  Zap,
  Circle,
} from "lucide-react";

export const serviceIcons = {
  hotel: Hotel,
  hall: Warehouse,
  apartment: Building2,
  ticket: Ticket,
};
export const featureIcons = {
  simple: MousePointer2,
  availability: CalendarDays,
  secure: ShieldCheck,
  together: Layers3,
  fast: Zap,
};

export const getServiceIcon = (key) =>
  Object.hasOwn(serviceIcons, key) ? serviceIcons[key] : Circle;
export const getFeatureIcon = (key) =>
  Object.hasOwn(featureIcons, key) ? featureIcons[key] : Circle;
