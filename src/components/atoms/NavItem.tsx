/**
 * Navigation item component for sidebar with active state styling
 */
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { memo } from "react";

interface NavItemProps {
  icon: LucideIcon;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

export const NavItem = memo(({ icon: Icon, label, isActive = false, onClick }: NavItemProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full flex items-center gap-3 px-4 py-3 text-left text-sm font-medium transition-all rounded-xl",
        isActive
          ? "bg-teal/10 text-teal border border-teal/20"
          : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
      )}
      aria-current={isActive ? "page" : undefined}
    >
      <Icon className={cn("h-5 w-5", isActive ? "text-teal" : "text-muted-foreground")} />
      <span>{label}</span>
    </button>
  );
});