export const StackedBarSkeleton = () =>   {
  const heights = [
    "h-[120px]",
    "h-[100px]",
    "h-[170px]",
    "h-[120px]",
  ]

  return (
    <div className="w-full min-w-[200px] h-[220px] bg-slate-100 rounded-lg p-4">
      <div className="flex h-full border-l-2 border-b-2 border-slate-200 p-0 pl-4 pb-4 animate-pulse">       

        {/* Chart Area */}
        <div className="flex-1 flex flex-col">
          {/* Bars */}
          <div className="flex-1 flex items-end gap-4">
            {heights.map((height, i) => (
              <div
                key={i}
                className={`flex flex-col justify-end w-[30px] animate-pulse ${height}`}
              >
                <div className="flex flex-col gap-0.25 h-full">
                  {/* stacked segments */}
                  {/* <div className="h-[15%] bg-slate-300 rounded-sm" />
                  <div className="h-[35%] bg-slate-400 rounded-sm" />
                  <div className="h-[50%] bg-slate-600 rounded-sm" /> */}
                  <div className="h-full bg-slate-400 rounded-sm" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
