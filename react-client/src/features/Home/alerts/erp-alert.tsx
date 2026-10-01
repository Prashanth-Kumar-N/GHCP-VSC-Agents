import { memo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
  BarStack,
  Cell,
} from "recharts";
import { homeDashbaordData } from "../sample-data";
import { formatDateWithOmission } from "../../../utils/util-functions";
import { barColors as colors, typesOfAlerts } from "../constants";
import { StackedBarSkeleton } from "../../../components/Skeletons/stacked-bar-graph";

function ERPAlert({
  onClick,
  isLoading = false,
  isDragging = false,
  data,
}: {
  onClick: (value: (typeof typesOfAlerts)[number]) => void;
  isLoading?: boolean;
  isDragging?: boolean;
  data?: typeof homeDashbaordData.ERPAlertGraphs;
}) {
  if (isLoading || !data) return <StackedBarSkeleton />;
  //const data = homeDashbaordData.ERPAlertGraphs;

  const handleBarClick = () => {
    onClick("erp");
  };

  // Transform data for stacked bar chart
  const transformedData: any[] = data.map((item) => ({
    name: formatDateWithOmission(item.Name, ["year"]),
    total: item.Total_Count,
    ...item.series.reduce(
      (acc, curr) => ({ ...acc, [curr.name]: curr.value }),
      {},
    ),
  }));

  const stackKeys = data[0]?.series.map((s) => s.name) || [];

  return (
    <div className="w-[15.25vw] min-w-[300px] h-[200px] bg-slate-100 rounded-xl">
      <ResponsiveContainer width="100%" >
        <BarChart
          data={transformedData}
          margin={{ top: 20, right: 5, left: 0, bottom: 5 }}
          barCategoryGap={4}
          onClick={handleBarClick}
          tabIndex={-1}
          className="focus:outline-none focus-visible:outline-none cursor-pointer"
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd"  strokeWidth={1}/>
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            interval={0}
            fontSize={8}
            padding={{ left: 0, right: 0 }}
            height={40}
            tick={({ x, y, payload }) => {
              // change the sentence to title case

              const value = payload.value as string;
              const titleCaseValue = value
                .replace(/_/g, " ")
                .split(/\s+/)
                .map(
                  (word) =>
                    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
                )
                .join(" ");

              const words = titleCaseValue.split(" ");
              const maxWordsPerLine = 1;

              return (
                <text
                  x={x}
                  y={y}
                  textAnchor="middle"
                  fontSize={9}
                  className="fill-slate-600"
                  /* transform={`rotate(-45, ${x}, ${y})`} */
                >
                  <tspan x={x} dy="2">
                    {words.slice(0, maxWordsPerLine).join(" ")}
                  </tspan>
                  {words.length > maxWordsPerLine && (
                    <tspan x={x} dy="14">
                      {words
                        .slice(maxWordsPerLine, 2 * maxWordsPerLine)
                        .join(" ")}
                    </tspan>
                  )}
                  {words.length > 2 * maxWordsPerLine && (
                    <tspan x={x} dy="14">
                      {words
                        .slice(2 * maxWordsPerLine, 3 * maxWordsPerLine)
                        .join(" ")}
                    </tspan>
                  )}
                </text>
              );
            }}
          />
          <YAxis axisLine={false} tickLine={false} fontSize={12} />
          <Tooltip
            cursor={{ fill: "transparent" }}
            allowEscapeViewBox={{ x: false, y: false }}
            contentStyle={{
              borderRadius: "10px",
              border: "none",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              fontSize: 12,
            }}
          />

          <BarStack radius={3}>
            {stackKeys.map((key, index) => (
              <Bar
                key={key}
                dataKey={key}
                stackId="a"
                fill={colors[index]}
                isAnimationActive={!isDragging}
                animationDuration={isDragging ? 0 : 2000}
                animationEasing="ease-out"
                minPointSize={0.01}
              >
                {/* Map through the data to apply unique Cell logic for each bar */}
                {transformedData.map((_, i) => (
                  <Cell
                    key={`cell-${i}`}
                    className="cursor-pointer transition-opacity duration-300 hover:opacity-80"
                  />
                ))}
                {key === stackKeys[stackKeys.length - 1] && (
                  <LabelList
                    dataKey="total"
                    position="top"
                    style={{ fill: "#333", fontWeight: "bold", fontSize: 10 }}
                  />
                )}
              </Bar>
            ))}
          </BarStack>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
export default memo(ERPAlert);