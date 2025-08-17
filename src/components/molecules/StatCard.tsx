/**
 * Statistical card component with sparkline visualization and delta badge
 */
import { Badge } from "@/components/atoms/Badge";
import { cn } from "@/lib/utils";
import { memo } from "react";

interface StatCardProps {
  title: string;
  value: string;
  deltaPct: number;
  accent: "blue" | "orange" | "green" | "purple";
  bars?: number[];
}

const accentColors = {
  blue: "hsl(var(--blue))",
  orange: "hsl(var(--orange))", 
  green: "hsl(var(--green))",
  purple: "hsl(var(--purple))",
};

const opacityRamp = [0.4, 0.55, 0.7, 1.0, 0.7];

export const StatCard = memo(({ title, value, deltaPct, accent, bars = [10, 16, 22, 28, 22] }: StatCardProps) => {
  const direction = deltaPct >= 0 ? "up" : "down";
  
  return (
    <div 
      className="relative bg-[hsl(var(--surface))] border border-[hsl(var(--card-border))] rounded-[14px] p-5 shadow-sm"
      style={{
        boxShadow: "0 1px 0 rgba(16,24,40,.04), 0 1px 3px rgba(16,24,40,.06)"
      }}
    >
      {/* Content */}
      <div className="flex items-end justify-between">
        <div className="flex-1">
          <p className="text-[13px] font-medium leading-5 text-[hsl(var(--text-muted))] mb-2">
            {title}
          </p>
          
          <Badge value={Math.abs(deltaPct)} direction={direction} />
          
          <p className="mt-2 text-[32px] md:text-[36px] leading-none font-semibold tracking-tight text-[hsl(var(--text))]">
            {value}
          </p>
        </div>
        
        {/* Sparkline - positioned to the right of content */}
        <div className="flex items-end gap-1.5 h-8 ml-4">
          {bars.slice(0, 5).map((height, index) => (
            <div
              key={index}
              className="w-1.5 rounded-full"
              style={{
                height: `${height}px`,
                backgroundColor: accentColors[accent],
                opacity: opacityRamp[index],
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
});