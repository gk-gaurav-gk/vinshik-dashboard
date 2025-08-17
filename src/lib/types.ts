/**
 * Type definitions for the VinShik dashboard
 */
import { LucideIcon } from "lucide-react";

export interface StatData {
  title: string;
  value: string;
  delta: {
    value: number;
    direction: "up" | "down";
  };
  sparklineData: number[];
  accent: "blue" | "orange" | "green" | "purple";
}

/**
 * Navigation item interface for sidebar navigation
 */
export interface NavigationItem {
  icon: LucideIcon;
  label: string;
  id: string;
}

export interface User {
  name: string;
  avatar?: string;
  status: "online" | "offline" | "away";
}