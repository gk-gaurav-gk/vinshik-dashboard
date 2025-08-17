// Utility functions for formatting data
export const formatDelta = (value: number, direction: "up" | "down"): string => {
  const sign = direction === "up" ? "+" : "-";
  return `${sign}${Math.abs(value)}%`;
};

export const formatNumber = (value: number): string => {
  if (value >= 1000) {
    return `${(value / 1000).toFixed(1)}k`;
  }
  return value.toString();
};