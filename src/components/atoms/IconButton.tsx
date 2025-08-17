/**
 * Reusable icon button component for header controls with optional notification badge
 */
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { memo } from "react";

interface IconButtonProps {
  icon: LucideIcon;
  onClick?: () => void;
  className?: string;
  hasNotification?: boolean;
}

export const IconButton = memo(({ icon: Icon, onClick, className, hasNotification }: IconButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative h-10 w-10 rounded-lg bg-surface border border-border hover:bg-muted/50 transition-colors flex items-center justify-center",
        className
      )}
    >
      <Icon className="h-5 w-5 text-muted-foreground" />
      {hasNotification && (
        <div className="absolute -top-1 -right-1 h-3 w-3 bg-teal rounded-full border-2 border-surface" />
      )}
    </button>
  );
});