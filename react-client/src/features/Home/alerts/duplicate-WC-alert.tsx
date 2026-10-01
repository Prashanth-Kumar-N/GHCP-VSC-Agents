import React, { memo, useEffect, useMemo, useState } from "react";
import { typesOfAlerts } from "../constants";
import { AlertMetricSkeleton } from '../../../components/Skeletons/alert-metric';
import type { homeDashbaordData } from "../sample-data";

interface DuplicateWCAlertProps {
  data?: typeof homeDashbaordData.MultipleAssignmentCount;
  label?: string;
  icon?: React.ReactNode;
  onClick?: (alertType: (typeof typesOfAlerts)[number]) => void;
  durationMs?: number;
  isDragging?: boolean;
  isLoading?: boolean;
}

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

const DuplicateWCAlert = ({
  data: value = 0,
  label = "Duplicate Workcenter Assignment",
  icon,
  onClick,
  durationMs = 3000,
  isDragging = false,
  isLoading = false,
}: DuplicateWCAlertProps) => {
  const isCountdown = value < 15;

  const startValue = useMemo(() => {
    return isCountdown ? value + 20 : Math.max(0, value - 20);
  }, [value, isCountdown]);

  const [displayValue, setDisplayValue] = useState(startValue);

  useEffect(() => {
    if (isDragging) {
      setDisplayValue(value);
      return;
    }

    const startTime = performance.now();

    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / durationMs, 1);
      const eased = easeOutCubic(progress);

      const current = startValue + (value - startValue) * eased;

      setDisplayValue(Math.round(current));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [value, startValue, durationMs, isDragging]);

  if (isLoading) return <AlertMetricSkeleton />;
  return (
    <div
      onClick={() => onClick && onClick("duplicateWorkcenter")}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      className={`
                inline-flex
                flex-col
                items-center
                justify-center
                rounded-xl
                w-[15.25vw] min-w-[300px] h-[200px] bg-slate-100 rounded-xl
                cursor-pointer
                select-none
                transition
                duration-200
                ease-out
                hover:shadow-[0_0_0_4px_rgba(59,130,246,0.15),0_8px_24px_rgba(0,0,0,0.12)]
                active:scale-95
                focus-visible:outline
                focus-visible:outline-2
                focus-visible:outline-blue-500
            `}
    >
      {/* Number */}
      <div className="text-4xl font-bold leading-none">{displayValue}</div>

      {/* Icon + Label */}
      {(icon || label) && (
        <div className="mt-2 flex items-center gap-1 text-sm opacity-80">
          {icon}
          {label}
        </div>
      )}
    </div>
  );
};

export default memo(DuplicateWCAlert);
