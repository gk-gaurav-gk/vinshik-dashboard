/**
 * Delta chip component with directional indicator for statistical changes
 */
import { cn } from "@/lib/utils";
import { memo } from "react";

interface BadgeProps {
  value: number;
  direction: "up" | "down";
}

export const Badge = memo(({ value, direction }: BadgeProps) => {
  const isPositive = direction === "up";
  
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 pl-1.5 pr-2 h-[22px] rounded-full",
        isPositive
          ? "bg-[hsl(var(--chip-up-bg))]"
          : "bg-[hsl(var(--chip-down-bg))]"
      )}
    >
      <div
        className={cn(
          "w-[18px] h-[18px] rounded-full bg-white flex items-center justify-center",
          isPositive ? "text-[hsl(var(--green))]" : "text-[#EF4444]"
        )}
      >
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" className="stroke-current stroke-[1.5]">
          {isPositive ? (
            <path d="M4 6V2M2 4L4 2L6 4" strokeLinecap="round" strokeLinejoin="round" />
          ) : (
            <path d="M4 2V6M2 4L4 6L6 4" strokeLinecap="round" strokeLinejoin="round" />
          )}
        </svg>
      </div>
      <span className="text-[12px] font-medium text-[#7A8699]">
        {isPositive ? "+" : ""}{value}%
      </span>
    </div>
  );
});