"use client";

import { ReactNode, useCallback } from "react";

type SpotlightPanelProps = {
  children: ReactNode;
  className?: string;
};

export function SpotlightPanel({ children, className = "" }: SpotlightPanelProps) {
  const onMove = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    event.currentTarget.style.setProperty("--spot-x", `${x}%`);
    event.currentTarget.style.setProperty("--spot-y", `${y}%`);
  }, []);

  return (
    <div className={`surface-panel ${className}`} onMouseMove={onMove}>
      {children}
    </div>
  );
}
