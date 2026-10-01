
interface SkeletonProps {
  showLabel?: boolean;
}

export const AlertMetricSkeleton = ({ showLabel = true }: SkeletonProps) => (
  <div className="inline-flex flex-col items-center rounded-xl px-4 py-3 w-full h-full min-w-[200px] self-center-safe justify-center-safe">
    {/* Number placeholder */}
    <div className="h-24 w-24 animate-pulse rounded-md bg-slate-200" />

    {/* Label placeholder */}
    {showLabel && (
      <div className="mt-2 h-4 w-40 animate-pulse rounded-md bg-slate-200" />
    )}
  </div>
);